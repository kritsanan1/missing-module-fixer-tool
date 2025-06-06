
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { FreelanceFilters } from "@/components/freelance/FreelanceFilters";
import { FreelancerGrid } from "@/components/freelance/FreelancerGrid";
import { JobList } from "@/components/freelance/JobList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, Briefcase } from "lucide-react";
import { PostJobDialog } from "@/components/freelance/PostJobDialog";

export default function FreelancePage() {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    priceRange: [0, 500],
    acceptedCurrencies: ["BTC", "ETH"],
    rating: 0,
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Crypto Freelance</h1>
            <p className="text-gray-400 mt-2">
              Connect with freelancers and clients who work with cryptocurrency payments
            </p>
          </div>
          <Button
            onClick={() => setIsPostJobOpen(true)}
            className="bg-amber-400 hover:bg-amber-500 text-black"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Post a Job
          </Button>
        </div>

        <Tabs
          defaultValue="freelancers"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="freelancers" className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Find Freelancers
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              Browse Jobs
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FreelanceFilters 
              filters={activeFilters} 
              onFilterChange={setActiveFilters} 
              activeTab={activeTab}
            />
          </div>
          <div className="lg:col-span-3">
            <TabsContent value="freelancers" className="mt-0">
              <FreelancerGrid filters={activeFilters} />
            </TabsContent>
            <TabsContent value="jobs" className="mt-0">
              <JobList filters={activeFilters} />
            </TabsContent>
          </div>
        </div>
      </div>
      
      <PostJobDialog open={isPostJobOpen} onClose={() => setIsPostJobOpen(false)} />
    </MainLayout>
  );
}
