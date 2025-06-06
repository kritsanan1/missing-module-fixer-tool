
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface FiltersProps {
  filters: {
    category: string;
    priceRange: number[];
    acceptedCurrencies: string[];
    rating: number;
  };
  onFilterChange: (filters: any) => void;
}

export function MarketplaceFilters({ filters, onFilterChange }: FiltersProps) {
  const categories = [
    { id: "all", label: "All Categories" },
    { id: "electronics", label: "Electronics" },
    { id: "fashion", label: "Fashion" },
    { id: "home", label: "Home & Garden" },
    { id: "digital", label: "Digital Products" },
  ];

  const currencies = [
    { id: "BTC", label: "Bitcoin (BTC)" },
    { id: "ETH", label: "Ethereum (ETH)" },
    { id: "SOL", label: "Solana (SOL)" },
    { id: "BNB", label: "BNB Chain (BNB)" },
    { id: "USDT", label: "Tether (USDT)" },
  ];

  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  const handleCurrencyChange = (id: string, checked: boolean) => {
    const newCurrencies = checked
      ? [...filters.acceptedCurrencies, id]
      : filters.acceptedCurrencies.filter((c) => c !== id);

    onFilterChange({ ...filters, acceptedCurrencies: newCurrencies });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({ ...filters, rating: value[0] });
  };

  return (
    <Card className="bg-[#0c1427] border-blue-900/20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Categories</h3>
          <RadioGroup
            value={filters.category}
            onValueChange={handleCategoryChange}
            className="space-y-2"
          >
            {categories.map((category) => (
              <div className="flex items-center space-x-2" key={category.id}>
                <RadioGroupItem value={category.id} id={`category-${category.id}`} />
                <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Price Range (USD)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </p>
            <Slider
              defaultValue={filters.priceRange}
              min={0}
              max={5000}
              step={50}
              onValueChange={handlePriceChange}
              className="pt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Accepted Currencies</h3>
          <div className="space-y-2">
            {currencies.map((currency) => (
              <div className="flex items-center space-x-2" key={currency.id}>
                <Checkbox
                  id={`currency-${currency.id}`}
                  checked={filters.acceptedCurrencies.includes(currency.id)}
                  onCheckedChange={(checked) =>
                    handleCurrencyChange(currency.id, checked === true)
                  }
                />
                <Label htmlFor={`currency-${currency.id}`}>{currency.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Minimum Rating</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {filters.rating} stars and above
            </p>
            <Slider
              defaultValue={[filters.rating]}
              min={0}
              max={5}
              step={1}
              onValueChange={handleRatingChange}
              className="pt-2"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
