
import React, { useState } from "react";
import { MapLocation } from "@/types/common";
import { 
  Bitcoin, 
  Coins, 
  ExternalLink, 
  Star, 
  Store, 
  Coffee, 
  Briefcase, 
  CircleDollarSign 
} from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

// Sample data for locations
const sampleLocations: MapLocation[] = [
  {
    id: "1",
    name: "Crypto Cafe Bangkok",
    address: "123 Sukhumvit Road, Bangkok, Thailand",
    type: "restaurant",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    acceptedCurrencies: ["btc", "eth"],
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=300&auto=format"],
  },
  {
    id: "2",
    name: "Tech Store Singapore",
    address: "45 Orchard Road, Singapore",
    type: "store",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    acceptedCurrencies: ["eth", "usdt"],
    rating: 4.2,
    photos: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=300&auto=format"],
  },
  {
    id: "3",
    name: "Bitcoin ATM - Central Mall",
    address: "100 Central Plaza, Hong Kong",
    type: "atm",
    coordinates: { lat: 22.3193, lng: 114.1694 },
    acceptedCurrencies: ["btc"],
    rating: 3.9,
  },
  {
    id: "4",
    name: "Crypto Consulting Services",
    address: "27 Finance Street, Tokyo, Japan",
    type: "service",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    acceptedCurrencies: ["btc", "eth", "sol", "usdt"],
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format"],
  },
  {
    id: "5",
    name: "Digital Nomad Coworking",
    address: "15 Beach Road, Bali, Indonesia",
    type: "service",
    coordinates: { lat: -8.4095, lng: 115.1889 },
    acceptedCurrencies: ["btc", "eth", "bnb"],
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=300&auto=format"],
  }
];

export function MapSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "store": return <Store className="h-4 w-4" />;
      case "restaurant": return <Coffee className="h-4 w-4" />;
      case "service": return <Briefcase className="h-4 w-4" />;
      case "atm": return <CircleDollarSign className="h-4 w-4" />;
      default: return <Store className="h-4 w-4" />;
    }
  };

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "btc": return <Bitcoin className="h-4 w-4 text-amber-400" />;
      case "eth": return <Coins className="h-4 w-4 text-blue-400" />;
      default: return <CircleDollarSign className="h-4 w-4 text-green-400" />;
    }
  };

  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  return (
    <>
      {/* Main sidebar */}
      <div className={`fixed top-[5rem] right-0 h-[calc(100vh-5rem)] w-[320px] bg-[#0c1427] border-l border-blue-900/20 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-10`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-900/20">
          <h2 className="text-lg font-semibold">Crypto Locations</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100%-4rem)]">
          <div className="p-2">
            {sampleLocations.map((location) => (
              <div 
                key={location.id}
                className="bg-[#070e24] hover:bg-[#0d1835] p-3 rounded-lg mb-2 cursor-pointer transition-colors"
                onClick={() => handleLocationClick(location)}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    {getTypeIcon(location.type)}
                    <span className="font-medium ml-2">{location.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs ml-1">{location.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{location.address}</p>
                <div className="flex flex-wrap gap-1">
                  {location.acceptedCurrencies.map((currency) => (
                    <Badge 
                      key={currency} 
                      variant="outline" 
                      className="text-xs flex items-center gap-1 bg-blue-950/30"
                    >
                      {getCurrencyIcon(currency)}
                      {currency.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      {/* Toggle button when sidebar is closed */}
      {!isOpen && (
        <Button 
          className="fixed top-20 right-4 bg-[#0c1427] border border-blue-900/20 z-10"
          onClick={() => setIsOpen(true)}
        >
          <Store className="h-4 w-4 mr-2" />
          View Locations
        </Button>
      )}
      
      {/* Location detail sheet */}
      <Sheet open={!!selectedLocation} onOpenChange={(open) => !open && setSelectedLocation(null)}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px] bg-[#0c1427] border-l border-blue-900/20">
          {selectedLocation && (
            <div className="py-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{selectedLocation.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="ml-1">{selectedLocation.rating}</span>
                </div>
              </div>
              
              {selectedLocation.photos && selectedLocation.photos.length > 0 && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={selectedLocation.photos[0]} 
                    alt={selectedLocation.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center text-gray-400 mb-4">
                {getTypeIcon(selectedLocation.type)}
                <span className="ml-2 capitalize">{selectedLocation.type}</span>
              </div>
              
              <div className="mt-4 bg-[#070e24] p-4 rounded-lg mb-4">
                <p className="font-semibold">{selectedLocation.address}</p>
                <p className="text-sm text-gray-400 mt-1">Open: 8AM - 8PM</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Accepted Cryptocurrencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.acceptedCurrencies.map((currency) => (
                    <Badge 
                      key={currency} 
                      className="px-3 py-1 flex items-center gap-2 bg-blue-950/30"
                    >
                      {getCurrencyIcon(currency)}
                      {currency === "btc" ? "Bitcoin" : 
                       currency === "eth" ? "Ethereum" :
                       currency === "sol" ? "Solana" : 
                       currency === "usdt" ? "Tether" : 
                       currency === "bnb" ? "BNB" : currency}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
                Get Directions
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
