
import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Loader2, Bitcoin, Ethereum, Store, Coffee, Briefcase, CircleDollarSign } from "lucide-react";

export function MapComponent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
    
    // In the future, we'll integrate with Mapbox here
    // This is just a placeholder for now
  }, []);

  // Function to determine icon based on location type and currencies
  const getMarkerContent = (type: string, currencies: string[]) => {
    let icon;
    
    // Choose icon based on type
    if (type === "restaurant") {
      icon = <Coffee className="h-3 w-3 text-black" />;
    } else if (type === "store") {
      icon = <Store className="h-3 w-3 text-black" />;
    } else if (type === "service") {
      icon = <Briefcase className="h-3 w-3 text-black" />;
    } else if (type === "atm") {
      icon = <CircleDollarSign className="h-3 w-3 text-black" />;
    }
    
    // If bitcoin is accepted, prioritize showing that
    if (currencies.includes("btc")) {
      return <Bitcoin className="h-4 w-4 text-black" />;
    } else if (currencies.includes("eth")) {
      return <Ethereum className="h-4 w-4 text-black" />;
    } else {
      return icon;
    }
  };
  
  return (
    <div className="relative w-full h-full">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
          <span className="ml-2 text-gray-400">Loading map...</span>
        </div>
      ) : (
        <>
          <div 
            ref={mapContainerRef} 
            className="absolute inset-0 bg-[#050914] overflow-hidden"
            style={{
              backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/0,20,1.5,0/1200x800?access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2prcnNoaDN3MDMxbDNxcGxsZGUxNGFrMCJ9.VQ-I0lV7-p9XcMfOqpHVlg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          
          {/* Bangkok marker */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '30%', left: '40%' }}
              >
                {getMarkerContent("restaurant", ["btc", "eth"])}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <div className="py-6">
                <h3 className="text-xl font-bold">Crypto Cafe Bangkok</h3>
                <p className="text-gray-400">Coffee shop accepting BTC, ETH</p>
                <div className="mt-4 bg-[#0c1427] p-4 rounded-lg">
                  <p className="font-semibold">123 Sukhumvit Road, Bangkok</p>
                  <p className="text-sm text-gray-400">Open: 8AM - 8PM</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Singapore marker */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '40%', left: '60%' }}
              >
                {getMarkerContent("store", ["eth", "usdt"])}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <div className="py-6">
                <h3 className="text-xl font-bold">Tech Store Singapore</h3>
                <p className="text-gray-400">Electronics store accepting ETH, USDT</p>
                <div className="mt-4 bg-[#0c1427] p-4 rounded-lg">
                  <p className="font-semibold">45 Orchard Road, Singapore</p>
                  <p className="text-sm text-gray-400">Open: 10AM - 9PM</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Hong Kong marker */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '35%', left: '50%' }}
              >
                {getMarkerContent("atm", ["btc"])}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <div className="py-6">
                <h3 className="text-xl font-bold">Bitcoin ATM - Central Mall</h3>
                <p className="text-gray-400">ATM for BTC transactions</p>
                <div className="mt-4 bg-[#0c1427] p-4 rounded-lg">
                  <p className="font-semibold">100 Central Plaza, Hong Kong</p>
                  <p className="text-sm text-gray-400">Open 24/7</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Tokyo marker */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '25%', left: '70%' }}
              >
                {getMarkerContent("service", ["btc", "eth", "sol", "usdt"])}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <div className="py-6">
                <h3 className="text-xl font-bold">Crypto Consulting Services</h3>
                <p className="text-gray-400">Financial services accepting multiple cryptos</p>
                <div className="mt-4 bg-[#0c1427] p-4 rounded-lg">
                  <p className="font-semibold">27 Finance Street, Tokyo, Japan</p>
                  <p className="text-sm text-gray-400">Open: 9AM - 6PM</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Bali marker */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '50%', left: '55%' }}
              >
                {getMarkerContent("service", ["btc", "eth", "bnb"])}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <div className="py-6">
                <h3 className="text-xl font-bold">Digital Nomad Coworking</h3>
                <p className="text-gray-400">Coworking space accepting BTC, ETH, BNB</p>
                <div className="mt-4 bg-[#0c1427] p-4 rounded-lg">
                  <p className="font-semibold">15 Beach Road, Bali, Indonesia</p>
                  <p className="text-sm text-gray-400">Open: 24/7</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}
