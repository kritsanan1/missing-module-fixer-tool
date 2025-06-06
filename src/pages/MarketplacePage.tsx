
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { ShoppingCartDrawer } from "@/components/marketplace/ShoppingCartDrawer";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketplacePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    priceRange: [0, 5000],
    acceptedCurrencies: ["BTC", "ETH"],
    rating: 0,
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Crypto Marketplace</h1>
            <p className="text-gray-400 mt-2">
              Browse and purchase products using your favorite cryptocurrencies
            </p>
          </div>
          <Button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-400 hover:bg-amber-500 text-black"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <MarketplaceFilters 
              filters={activeFilters} 
              onFilterChange={setActiveFilters} 
            />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid filters={activeFilters} />
          </div>
        </div>
      </div>
      
      <ShoppingCartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </MainLayout>
  );
}
