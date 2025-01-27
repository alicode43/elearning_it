import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export function TestimonialCard({ name, role, quote, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-[#0A1A2F] rounded-2xl overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        {/* Yellow Section */}
        <div className="bg-[#FDB813] p-6 md:rounded-r-[3rem] rounded-b-[3rem] md:rounded-b-none md:w-1/3">
          <div className="mb-2 text-sm">Testimonial</div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#0A1A2F" color="#0A1A2F" />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-white flex-1">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <img 
              src={imageUrl}
              alt={`${name}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>
          <blockquote className="text-gray-300 italic text-center sm:text-left">
            `{quote}`   
          </blockquote>
        </div>
      </div>
    </div>
  );
}