
import { CryptoRate } from "../../types/common";

// Mock data for development - in production this would fetch from an API
const mockCryptoRates: CryptoRate[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 38254.12,
    change24h: 2.5,
    marketCap: 741656432578,
    volume: 25678945678,
    supply: 19384625,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2034.87,
    change24h: -1.2,
    marketCap: 243576879876,
    volume: 15678945678,
    supply: 120384625,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: 312.45,
    change24h: 0.8,
    marketCap: 48576879876,
    volume: 3678945678,
    supply: 155384625,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 89.32,
    change24h: 5.6,
    marketCap: 38372879876,
    volume: 4678945678,
    supply: 429384625,
  },
  {
    symbol: "USDT",
    name: "Tether",
    price: 1.0,
    change24h: 0.01,
    marketCap: 83576879876,
    volume: 63678945678,
    supply: 83576879876,
  }
];

export const fetchCryptoRates = async (): Promise<CryptoRate[]> => {
  // In a real implementation, this would fetch from an API
  // Example: return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binance-coin,solana,tether')
  //          .then(res => res.json())
  //          .then(data => mapToCryptoRates(data));
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Add small random fluctuation to prices to simulate real-time changes
  return mockCryptoRates.map(crypto => ({
    ...crypto,
    price: crypto.price * (1 + (Math.random() * 0.02 - 0.01)),
    change24h: crypto.change24h + (Math.random() * 0.5 - 0.25),
  }));
};

export const convertCryptoToFiat = (
  amount: number, 
  cryptoSymbol: string, 
  fiatCurrency: string = 'USD'
): number => {
  // Get the crypto rate
  const crypto = mockCryptoRates.find(c => c.symbol === cryptoSymbol);
  if (!crypto) return 0;
  
  // For now, we only support USD conversion directly
  // In a real app, we'd use exchange rates for other currencies
  const usdAmount = amount * crypto.price;
  
  // Mock conversion rates to other currencies
  const fiatRates: Record<string, number> = {
    'USD': 1,
    'EUR': 0.91,
    'GBP': 0.78,
    'JPY': 148.5,
    'CNY': 7.13,
    'THB': 35.12,
  };
  
  const rate = fiatRates[fiatCurrency] || 1;
  return usdAmount * rate;
};
