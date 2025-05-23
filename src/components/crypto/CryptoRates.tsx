
import React from "react";
import { CryptoCard } from "./CryptoCard";
import { useCrypto } from "@/contexts/CryptoContext";
import { Skeleton } from "@/components/ui/skeleton";

export function CryptoRates() {
  const { rates, isLoading, error } = useCrypto();
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-lg" />
        ))}
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="p-4 bg-red-500/10 text-red-500 rounded-lg">
        Error loading crypto rates: {error.message}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {rates.map((crypto) => (
        <CryptoCard key={crypto.symbol} crypto={crypto} />
      ))}
    </div>
  );
}
