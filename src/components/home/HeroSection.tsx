
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WeatherIndicator } from "@/components/weather/WeatherIndicator";
import { CryptoRates } from "@/components/crypto/CryptoRates";

export function HeroSection() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with stars effect */}
      <div className="absolute inset-0 bg-[#070e24] z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end mb-4">
          <WeatherIndicator />
        </div>
        
        <div className="text-center mb-14">
          <div className="text-amber-400 text-3xl mb-4">∞</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">The Future of</span>
            <br />
            <span className="text-white">Crypto Payments</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            InfiWorld connects cryptocurrency with real-world services in one seamless ecosystem. From marketplace to travel, experience the limitless possibilities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/marketplace">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 py-6 rounded-md text-base">
                Explore Now
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white px-8 py-6 rounded-md text-base">
                View Crypto Map
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Crypto rates section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6 text-center">Live Cryptocurrency Rates</h2>
          <CryptoRates />
        </div>

        <div className="grid grid-cols-4 gap-10 mt-16">
          <div className="text-center">
            <div className="text-amber-400 text-2xl font-bold">50+</div>
            <div className="text-gray-400 text-sm">Crypto currencies</div>
          </div>
          <div className="text-center">
            <div className="text-amber-400 text-2xl font-bold">10,000+</div>
            <div className="text-gray-400 text-sm">Global merchants</div>
          </div>
          <div className="text-center">
            <div className="text-amber-400 text-2xl font-bold">2,500+</div>
            <div className="text-gray-400 text-sm">Services</div>
          </div>
          <div className="text-center">
            <div className="text-amber-400 text-2xl font-bold">$1.2M</div>
            <div className="text-gray-400 text-sm">Daily transactions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
