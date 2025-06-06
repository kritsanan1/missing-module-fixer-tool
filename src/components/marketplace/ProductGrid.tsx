
import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Grid3x3, Grid2x2, LayoutList } from "lucide-react";
import { mockProducts } from "@/lib/api/marketplace-service";

interface ProductGridProps {
  filters: {
    category: string;
    priceRange: number[];
    acceptedCurrencies: string[];
    rating: number;
  };
}

export function ProductGrid({ filters }: ProductGridProps) {
  const [layout, setLayout] = useState<"grid-3" | "grid-2" | "list">("grid-3");

  const filteredProducts = mockProducts.filter((product) => {
    // Filter by category
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }

    // Filter by price range
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Filter by rating
    if (product.rating < filters.rating) {
      return false;
    }

    // Filter by accepted currencies
    if (
      !product.acceptedCryptocurrencies.some((currency) =>
        filters.acceptedCurrencies.includes(currency)
      )
    ) {
      return false;
    }

    return true;
  });

  const getGridClass = () => {
    switch (layout) {
      case "grid-3":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
      case "grid-2":
        return "grid grid-cols-1 md:grid-cols-2 gap-6";
      case "list":
        return "flex flex-col gap-4";
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-400">
          {filteredProducts.length} results found
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLayout("grid-3")}
            className={layout === "grid-3" ? "bg-accent" : ""}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLayout("grid-2")}
            className={layout === "grid-2" ? "bg-accent" : ""}
          >
            <Grid2x2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLayout("list")}
            className={layout === "list" ? "bg-accent" : ""}
          >
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={getGridClass()}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              layout={layout}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
