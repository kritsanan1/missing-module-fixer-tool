
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { TravelFilters } from "@/components/travel/TravelFilters";
import { TravelListings } from "@/components/travel/TravelListings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Plane, Globe, MapPin } from "lucide-react";

export default function TravelPage() {
  const [activeTab, setActiveTab] = useState("hotels");
  const [activeFilters, setActiveFilters] = useState({
    priceRange: [0, 1000],
    acceptedCurrencies: ["BTC", "ETH"],
    rating: 0,
    location: "all",
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Crypto Travel</h1>
          <p className="text-gray-400 mt-2">
            Find and book crypto-friendly hotels, flights, and experiences worldwide
          </p>
        </div>

        <Tabs
          defaultValue="hotels"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="hotels" className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Hotels
            </TabsTrigger>
            <TabsTrigger value="flights" className="flex items-center">
              <Plane className="mr-2 h-4 w-4" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="experiences" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Experiences
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
            <div className="lg:col-span-1">
              <TravelFilters 
                filters={activeFilters} 
                onFilterChange={setActiveFilters} 
                activeTab={activeTab}
              />
            </div>
            <div className="lg:col-span-3">
              <TabsContent value="hotels" className="mt-0">
                <TravelListings 
                  type="hotels" 
                  filters={activeFilters} 
                />
              </TabsContent>
              <TabsContent value="flights" className="mt-0">
                <TravelListings 
                  type="flights" 
                  filters={activeFilters} 
                />
              </TabsContent>
              <TabsContent value="experiences" className="mt-0">
                <TravelListings 
                  type="experiences" 
                  filters={activeFilters} 
                />
              </TabsContent>
            </div>
          </div>
        </Tabs>
        
        <div className="mt-12 bg-[#0c1427] border border-blue-900/20 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <MapPin className="text-amber-400 h-6 w-6 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Crypto-Friendly Destinations</h2>
              <p className="text-gray-400">
                Discover locations worldwide where cryptocurrency is widely accepted for travel expenses
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {["Dubai, UAE", "El Salvador", "Singapore"].map((destination) => (
              <div key={destination} className="bg-[#162032] rounded-lg p-4 border border-blue-900/20">
                <h3 className="font-semibold">{destination}</h3>
                <p className="text-sm text-gray-400">100+ crypto-friendly locations</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
