
import React from "react";
import { JobCard } from "./JobCard";
import { mockJobs } from "@/lib/api/freelance-service";

interface JobListProps {
  filters: {
    category: string;
    priceRange: number[];
    acceptedCurrencies: string[];
    rating: number;
  };
}

export function JobList({ filters }: JobListProps) {
  const filteredJobs = mockJobs.filter((job) => {
    // Filter by category
    if (filters.category !== "all" && job.category !== filters.category) {
      return false;
    }

    // Filter by budget range
    if (
      job.budget < filters.priceRange[0] ||
      job.budget > filters.priceRange[1]
    ) {
      return false;
    }

    // Filter by accepted currencies
    if (
      !job.acceptedCryptocurrencies.some((currency) =>
        filters.acceptedCurrencies.includes(currency)
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-400">
          {filteredJobs.length} jobs found
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No jobs found</h3>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
