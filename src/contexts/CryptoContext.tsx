
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchCryptoRates } from "../lib/api/crypto-service";
import { CryptoRate } from "../types/common";

interface CryptoContextType {
  rates: CryptoRate[];
  isLoading: boolean;
  error: Error | null;
  refreshRates: () => Promise<void>;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export function CryptoProvider({ children }: { children: ReactNode }) {
  const [rates, setRates] = useState<CryptoRate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadRates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCryptoRates();
      setRates(data);
    } catch (err) {
      console.error("Failed to fetch crypto rates:", err);
      setError(err instanceof Error ? err : new Error("Failed to fetch crypto rates"));
    } finally {
      setIsLoading(false);
    }
  };

  // Load rates on mount
  useEffect(() => {
    loadRates();
    
    // Refresh rates every minute
    const interval = setInterval(loadRates, 60000);
    return () => clearInterval(interval);
  }, []);

  const value = {
    rates,
    isLoading,
    error,
    refreshRates: loadRates,
  };

  return <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>;
}

export function useCrypto() {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
}
