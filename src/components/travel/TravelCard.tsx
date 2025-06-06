
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TravelItem } from "@/types/travel";
import { Bitcoin, Coins, Star, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface TravelCardProps {
  item: TravelItem;
  type: "hotels" | "flights" | "experiences";
}

export function TravelCard({ item, type }: TravelCardProps) {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "Booking initiated",
      description: `You've started a booking for ${item.name}`,
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

  const getPriceLabel = () => {
    switch (type) {
      case "hotels":
        return "/night";
      case "flights":
        return "";
      case "experiences":
        return "/person";
      default:
        return "";
    }
  };

  const getTypeSpecificInfo = () => {
    switch (type) {
      case "hotels":
        return (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{item.location}</span>
          </div>
        );
      case "flights":
        return (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="h-4 w-4" />
            <span>{item.duration}</span>
          </div>
        );
      case "experiences":
        return (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="h-4 w-4" />
            <span>{item.duration}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden bg-[#0c1427] border-blue-900/20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <CardContent className="flex-grow p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {item.discountPercent > 0 && (
                  <Badge className="ml-2 bg-green-600">-{item.discountPercent}%</Badge>
                )}
              </div>
              {getTypeSpecificInfo()}
            </div>
            <div className="flex items-center">
              {item.originalPrice > 0 && (
                <span className="text-gray-400 line-through text-sm mr-2">
                  ${item.originalPrice}
                </span>
              )}
              <span className="text-amber-400 font-bold text-lg">
                ${item.price}
                <span className="text-sm font-normal">{getPriceLabel()}</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < item.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"
                }`}
              />
            ))}
            <span className="text-gray-400 text-xs ml-1">({item.reviewCount} reviews)</span>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">{item.description}</p>
          
          <div className="flex items-center gap-1 mt-auto mb-3">
            <div className="text-sm text-gray-400">Accepts:</div>
            <div className="flex gap-2">
              {item.acceptedCryptocurrencies.map((currency) => (
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
          
          <div className="flex gap-2">
            <Button
              onClick={handleBookNow}
              className="bg-amber-400 hover:bg-amber-500 text-black"
            >
              Book Now
            </Button>
            <Button variant="outline" className="border-amber-400/50 text-amber-400">
              View Details
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
