
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MapComponent } from "@/components/map/MapComponent";
import { MapSidebar } from "@/components/map/MapSidebar";
import { MapFilters } from "@/components/map/MapFilters";

export default function MapPage() {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold mb-4">Crypto Map</h1>
          <p className="text-gray-400 mb-6">
            Find businesses and locations that accept cryptocurrency payments around the world.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <MapFilters />
            </div>
            <div className="lg:col-span-3">
              <div className="bg-[#0c1427] rounded-lg border border-blue-900/20 overflow-hidden h-[600px]">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
        <MapSidebar />
      </div>
    </MainLayout>
  );
}
