
import { Product } from "@/types/marketplace";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancellation for an immersive listening experience.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "electronics",
    rating: 4.5,
    reviewCount: 128,
    acceptedCryptocurrencies: ["BTC", "ETH", "SOL"],
    seller: {
      id: "s1",
      name: "TechGadgets",
      rating: 4.8,
      verified: true,
    },
    stock: 15,
    shipping: {
      free: true,
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: "2",
    name: "Smart Watch Series 7",
    description: "Track your fitness goals, monitor your health, and stay connected with this premium smart watch.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "electronics",
    rating: 4.7,
    reviewCount: 92,
    acceptedCryptocurrencies: ["BTC", "ETH", "USDT"],
    seller: {
      id: "s2",
      name: "SmartWearables",
      rating: 4.6,
      verified: true,
    },
    stock: 8,
    shipping: {
      free: true,
      estimatedDelivery: "2-4 business days",
    },
  },
  {
    id: "3",
    name: "Modern Minimalist Desk",
    description: "A sleek, minimalist desk perfect for your home office setup with cable management solutions.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1587212805607-5293925a4b38",
    category: "home",
    rating: 4.3,
    reviewCount: 45,
    acceptedCryptocurrencies: ["BTC", "ETH"],
    seller: {
      id: "s3",
      name: "HomeDesignCo",
      rating: 4.5,
      verified: true,
    },
    stock: 12,
    shipping: {
      free: false,
      estimatedDelivery: "5-7 business days",
    },
  },
  {
    id: "4",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID protection and multiple card slots.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d",
    category: "fashion",
    rating: 4.8,
    reviewCount: 67,
    acceptedCryptocurrencies: ["BTC", "ETH", "BNB", "SOL"],
    seller: {
      id: "s4",
      name: "LuxLeather",
      rating: 4.9,
      verified: true,
    },
    stock: 25,
    shipping: {
      free: true,
      estimatedDelivery: "2-3 business days",
    },
  },
  {
    id: "5",
    name: "Digital Marketing Course",
    description: "Comprehensive digital marketing course with lifetime access to materials and regular updates.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "digital",
    rating: 4.6,
    reviewCount: 215,
    acceptedCryptocurrencies: ["BTC", "ETH", "USDT"],
    seller: {
      id: "s5",
      name: "DigitalAcademy",
      rating: 4.7,
      verified: true,
    },
    stock: 999,
    shipping: {
      free: true,
      estimatedDelivery: "Instant delivery",
    },
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description: "Waterproof portable speaker with 24-hour battery life and exceptional sound quality.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    category: "electronics",
    rating: 4.4,
    reviewCount: 103,
    acceptedCryptocurrencies: ["BTC", "ETH", "SOL"],
    seller: {
      id: "s1",
      name: "TechGadgets",
      rating: 4.8,
      verified: true,
    },
    stock: 18,
    shipping: {
      free: true,
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: "7",
    name: "Organic Cotton T-Shirt",
    description: "Eco-friendly, sustainable cotton t-shirt available in various colors and sizes.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "fashion",
    rating: 4.2,
    reviewCount: 76,
    acceptedCryptocurrencies: ["BTC", "ETH"],
    seller: {
      id: "s7",
      name: "EcoApparel",
      rating: 4.4,
      verified: false,
    },
    stock: 50,
    shipping: {
      free: true,
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: "8",
    name: "Smart Home Security Camera",
    description: "HD security camera with night vision, motion detection, and smartphone alerts.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
    category: "electronics",
    rating: 4.6,
    reviewCount: 89,
    acceptedCryptocurrencies: ["BTC", "ETH", "USDT"],
    seller: {
      id: "s8",
      name: "SmartHomePro",
      rating: 4.7,
      verified: true,
    },
    stock: 14,
    shipping: {
      free: true,
      estimatedDelivery: "2-4 business days",
    },
  },
];

export const fetchProducts = async (filters?: any): Promise<Product[]> => {
  // In a real app, this would be an API call with filters
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  
  let filteredProducts = [...mockProducts];
  
  if (filters) {
    // Apply any filters
    if (filters.category && filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(
        p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }
    
    if (filters.rating) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.rating);
    }
    
    if (filters.acceptedCurrencies && filters.acceptedCurrencies.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        p.acceptedCryptocurrencies.some(c => filters.acceptedCurrencies.includes(c))
      );
    }
  }
  
  return filteredProducts;
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API delay
  
  const product = mockProducts.find(p => p.id === id);
  return product || null;
};
