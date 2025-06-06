
import React from "react";
import { TravelCard } from "./TravelCard";
import { mockHotels, mockFlights, mockExperiences } from "@/lib/api/travel-service";

interface TravelListingsProps {
  type: "hotels" | "flights" | "experiences";
  filters: {
    priceRange: number[];
    acceptedCurrencies: string[];
    rating: number;
    location: string;
  };
}

export function TravelListings({ type, filters }: TravelListingsProps) {
  const getData = () => {
    switch (type) {
      case "hotels":
        return mockHotels;
      case "flights":
        return mockFlights;
      case "experiences":
        return mockExperiences;
      default:
        return [];
    }
  };

  const items = getData();

  const filteredItems = items.filter((item) => {
    // Filter by location
    if (filters.location !== "all" && item.region !== filters.location) {
      return false;
    }

    // Filter by price range
    if (
      item.price < filters.priceRange[0] ||
      item.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Filter by rating
    if (item.rating < filters.rating) {
      return false;
    }

    // Filter by accepted currencies
    if (
      !item.acceptedCryptocurrencies.some((currency) =>
        filters.acceptedCurrencies.includes(currency)
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400">
          {filteredItems.length} {type} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <TravelCard
              key={item.id}
              item={item}
              type={type}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium">No {type} found</h3>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
