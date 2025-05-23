
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Satoshi N.",
      title: "Tech Entrepreneur",
      avatar: "SN",
      content: "InfiWorld has revolutionized how I spend my crypto. Finding merchants that accept Bitcoin used to be a challenge, now it's just a few clicks away.",
    },
    {
      id: 2,
      name: "Elena K.",
      title: "Digital Nomad",
      avatar: "EK",
      content: "The travel booking feature is amazing! I've booked hotels in 3 different countries using ETH, and the process was seamless every time.",
    },
    {
      id: 3,
      name: "Michael R.",
      title: "Store Owner",
      avatar: "MR",
      content: "Since listing my store on InfiWorld's crypto map, I've seen a 40% increase in cryptocurrency transactions. The visibility has been great for business.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#050914] to-[#0c1427]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-[#0c1427] p-6 rounded-lg border border-blue-900/20"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 border-2 border-amber-400">
                  <AvatarImage src={`https://api.dicebear.com/6.x/micah/svg?seed=${testimonial.avatar}`} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-amber-400" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="/testimonials" 
            className="text-amber-400 hover:text-amber-300 border-b border-amber-400 hover:border-amber-300"
          >
            View all testimonials →
          </a>
        </div>
      </div>
    </div>
  );
}
