
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";

export function MapFilters() {
  const currencies = [
    { id: "btc", name: "Bitcoin (BTC)", symbol: "₿" },
    { id: "eth", name: "Ethereum (ETH)", symbol: "Ξ" },
    { id: "sol", name: "Solana (SOL)", symbol: "◎" },
    { id: "usdt", name: "Tether (USDT)", symbol: "₮" },
    { id: "bnb", name: "BNB", symbol: "BNB" },
  ];

  const categories = [
    { id: "store", name: "Retail Stores" },
    { id: "restaurant", name: "Restaurants & Cafes" },
    { id: "service", name: "Services" },
    { id: "atm", name: "Crypto ATMs" },
  ];

  return (
    <div className="bg-[#0c1427] rounded-lg border border-blue-900/20 p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search locations..."
            className="pl-8 bg-[#070e24] border-blue-900/20"
          />
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Accepted Cryptocurrencies</h3>
          <div className="space-y-2">
            {currencies.map((currency) => (
              <div key={currency.id} className="flex items-center space-x-2">
                <Checkbox id={`currency-${currency.id}`} />
                <label
                  htmlFor={`currency-${currency.id}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  <span className="inline-block w-5 text-amber-400">{currency.symbol}</span>
                  {currency.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={`category-${category.id}`} />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
          <Filter className="h-4 w-4 mr-2" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
