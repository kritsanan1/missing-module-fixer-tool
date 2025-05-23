
export interface CryptoRate {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume: number;
  supply: number;
  icon?: string;
}

export interface Weather {
  condition: 'clear' | 'rain' | 'cloudy' | 'snow';
  temperature: number;
  location: string;
  icon: string;
}

export interface MapLocation {
  id: string;
  name: string;
  address: string;
  type: 'store' | 'restaurant' | 'service' | 'atm';
  coordinates: {
    lat: number;
    lng: number;
  };
  acceptedCurrencies: string[];
  rating?: number;
  photos?: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  walletAddress?: string;
  isVerified: boolean;
  role: 'user' | 'merchant' | 'admin';
}
