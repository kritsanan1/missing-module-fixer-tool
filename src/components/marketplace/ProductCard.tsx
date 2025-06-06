
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/marketplace";
import { useCart } from "@/contexts/CartContext";
import { Bitcoin, Coins } from "lucide-react";

interface ProductCardProps {
  product: Product;
  layout: "grid-3" | "grid-2" | "list";
}

export function ProductCard({ product, layout }: ProductCardProps) {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "BTC":
        return <Bitcoin className="h-4 w-4" />;
      case "ETH":
        return <Coins className="h-4 w-4" />;
      default:
        return <span className="text-xs font-mono">{currency}</span>;
    }
  };

  return layout === "list" ? (
    <Card className="overflow-hidden bg-[#0c1427] border-blue-900/20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center">
              <span className="text-amber-400 font-bold text-lg">${product.price}</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <div className="flex items-center gap-1 mt-auto mb-3">
            <div className="text-sm text-gray-400">Accepts:</div>
            <div className="flex gap-2">
              {product.acceptedCryptocurrencies.map((currency) => (
                <div
                  key={currency}
                  className="flex items-center bg-gray-800 rounded-full px-2 py-1 text-xs"
                >
                  {getCurrencyIcon(currency)}
                  <span className="ml-1">{currency}</span>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-amber-400 hover:bg-amber-500 text-black"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  ) : (
    <Card className="overflow-hidden flex flex-col bg-[#0c1427] border-blue-900/20 h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.acceptedCryptocurrencies.slice(0, 3).map((currency) => (
            <div
              key={currency}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/80 text-xs"
            >
              {getCurrencyIcon(currency)}
            </div>
          ))}
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-amber-400" : "text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-400 text-xs ml-1">({product.reviewCount})</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="text-amber-400 font-bold">${product.price}</div>
        <Button
          onClick={handleAddToCart}
          size="sm"
          className="bg-amber-400 hover:bg-amber-500 text-black"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
