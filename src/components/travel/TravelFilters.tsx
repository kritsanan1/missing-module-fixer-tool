
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface FiltersProps {
  filters: {
    priceRange: number[];
    acceptedCurrencies: string[];
    rating: number;
    location: string;
  };
  onFilterChange: (filters: any) => void;
  activeTab: string;
}

export function TravelFilters({ filters, onFilterChange, activeTab }: FiltersProps) {
  const [date, setDate] = React.useState<Date>();

  const locations = [
    { id: "all", label: "All Locations" },
    { id: "north-america", label: "North America" },
    { id: "europe", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "south-america", label: "South America" },
  ];

  const currencies = [
    { id: "BTC", label: "Bitcoin (BTC)" },
    { id: "ETH", label: "Ethereum (ETH)" },
    { id: "SOL", label: "Solana (SOL)" },
    { id: "BNB", label: "BNB Chain (BNB)" },
    { id: "USDT", label: "Tether (USDT)" },
  ];

  const handleLocationChange = (value: string) => {
    onFilterChange({ ...filters, location: value });
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

  const getPriceLabel = () => {
    switch (activeTab) {
      case "hotels":
        return "Price per night (USD)";
      case "flights":
        return "Ticket price (USD)";
      case "experiences":
        return "Price per person (USD)";
      default:
        return "Price (USD)";
    }
  };

  const getPriceMax = () => {
    switch (activeTab) {
      case "hotels":
        return 1000;
      case "flights":
        return 5000;
      case "experiences":
        return 500;
      default:
        return 1000;
    }
  };

  return (
    <Card className="bg-[#0c1427] border-blue-900/20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label>Destination</Label>
            <Input
              placeholder="Search locations..."
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Regions</h3>
          <RadioGroup
            value={filters.location}
            onValueChange={handleLocationChange}
            className="space-y-2"
          >
            {locations.map((location) => (
              <div className="flex items-center space-x-2" key={location.id}>
                <RadioGroupItem value={location.id} id={`location-${location.id}`} />
                <Label htmlFor={`location-${location.id}`}>{location.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="grid gap-2">
          <Label>Dates</Label>
          <div className="grid gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Check-in date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Check-out date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">{getPriceLabel()}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </p>
            <Slider
              defaultValue={filters.priceRange}
              min={0}
              max={getPriceMax()}
              step={50}
              onValueChange={handlePriceChange}
              className="pt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Accepted Cryptocurrencies</h3>
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

        <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
