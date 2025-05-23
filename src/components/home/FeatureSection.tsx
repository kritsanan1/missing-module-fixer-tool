
import React from "react";
import { ShoppingBag, Globe, Plane, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-amber-400" />,
      title: "Crypto Marketplace",
      description: "Buy and sell products with cryptocurrency. Connect with merchants from around the world for secure and seamless transactions.",
      link: "/marketplace",
    },
    {
      icon: <Globe className="h-10 w-10 text-amber-400" />,
      title: "Freelance Services",
      description: "Hire freelancers or offer your skills and get paid with cryptocurrency. A global talent pool with transparent transactions.",
      link: "/freelance",
    },
    {
      icon: <Plane className="h-10 w-10 text-amber-400" />,
      title: "Travel Reservations",
      description: "Book flights, hotels, and experiences using your cryptocurrency wallet. Enjoy seamless travel with blockchain technology.",
      link: "/travel",
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-400" />,
      title: "Secure Transactions",
      description: "All payments are secured through advanced cryptographic protocols with blockchain confirmation, ensuring trustless operation.",
      link: "/security",
    },
  ];

  return (
    <div className="py-20 bg-[#050914]">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-300 mb-14">
          InfiWorld integrates cryptocurrency into everyday services, connecting the blockchain world with real-life applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-[#0c1427] rounded-lg border border-blue-900/20 flex flex-col"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-5 flex-grow">{feature.description}</p>
              <Link to={feature.link}>
                <Button variant="link" className="text-amber-400 p-0 hover:text-amber-300">
                  Learn More →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            InfiWorld guarantees zero service fees through our optimized cryptocurrency payments, ensuring that merchants save business revenue and increase profits.
          </p>
          <div className="bg-[#0c1427] p-10 rounded-lg border border-blue-900/20 mt-8">
            <div className="w-32 h-32 bg-[#0c1427] rounded-full border border-blue-900/20 mx-auto flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
            </div>
            <Link to="/map">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-2 rounded-md">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-3">
            InfiWorld combines three essential services into one powerful platform, all powered by cryptocurrency.
          </p>
        </div>
      </div>
    </div>
  );
}
