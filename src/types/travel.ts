
export interface TravelItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  image: string;
  acceptedCryptocurrencies: string[];
  location: string;
  region: string;
  features: string[];
  duration: string;
}
