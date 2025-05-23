
import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";

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
          
          {/* Placeholder markers */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '30%', left: '40%' }}
              >
                <span className="text-black font-bold">₿</span>
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
          
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="absolute w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg" 
                style={{ top: '40%', left: '60%' }}
              >
                <span className="text-black font-bold">Ξ</span>
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
        </>
      )}
    </div>
  );
}
