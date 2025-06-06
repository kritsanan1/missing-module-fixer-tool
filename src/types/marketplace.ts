
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  acceptedCryptocurrencies: string[];
  seller: {
    id: string;
    name: string;
    rating: number;
    verified: boolean;
  };
  stock: number;
  shipping: {
    free: boolean;
    estimatedDelivery: string;
  };
}
