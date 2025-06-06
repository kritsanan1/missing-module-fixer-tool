
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/freelance";
import { useToast } from "@/hooks/use-toast";
import { Bitcoin, Coins, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const { toast } = useToast();

  const handleApplyJob = () => {
    toast({
      title: "Application submitted",
      description: `You've applied to the job: ${job.title}`,
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

  return (
    <Card className="overflow-hidden bg-[#0c1427] border-blue-900/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-amber-400">{job.company}</p>
              </div>
              <Badge variant={job.type === "full-time" ? "default" : "outline"} className="ml-2">
                {job.type === "full-time" ? "Full-time" : job.type === "part-time" ? "Part-time" : "One-time"}
              </Badge>
            </div>
            
            <div className="flex items-center text-sm text-gray-400 mt-2 gap-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {job.duration}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Posted {job.postedDate}
              </span>
            </div>
            
            <p className="text-gray-300 my-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-2 my-3">
              {job.skills.slice(0, 6).map((skill) => (
                <Badge key={skill} variant="outline" className="bg-gray-800/50">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 6 && (
                <Badge variant="outline" className="bg-gray-800/50">
                  +{job.skills.length - 6} more
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="text-sm text-gray-400">Accepts payments in:</div>
              <div className="flex gap-2">
                {job.acceptedCryptocurrencies.map((currency) => (
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
          </div>
          
          <div className="md:w-48 flex flex-col items-end justify-between">
            <div className="text-amber-400 font-bold text-xl mb-4 md:text-right">
              ${job.budget}
              {job.type !== "one-time" && <span className="text-sm">/mo</span>}
            </div>
            <Button
              onClick={handleApplyJob}
              className="bg-amber-400 hover:bg-amber-500 text-black w-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
