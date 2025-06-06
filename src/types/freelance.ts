
export interface Freelancer {
  id: string;
  name: string;
  title: string;
  hourlyRate: number;
  rating: number;
  completedJobs: number;
  bio: string;
  skills: string[];
  acceptedCryptocurrencies: string[];
  availability: string;
  location: string;
  category: string;
  avatar: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  type: "full-time" | "part-time" | "one-time";
  duration: string;
  budget: number;
  description: string;
  skills: string[];
  acceptedCryptocurrencies: string[];
  postedDate: string;
  category: string;
}
