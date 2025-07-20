import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  const [imageError, setImageError] = useState(false);

  const handleLearnMore = () => {
    // Add your call-to-action logic here
    alert('Add your call-to-action here');
  };

  return (
    <div className="relative z-10 max-w-sm p-10 bg-white shadow-lg rounded-xl text-center">
      {!imageError ? (
        <img 
          className="w-30 h-30 rounded-full border-3 border-gray-100 object-cover mx-auto"
          src="/jan-photo.jpg" 
          alt="Jan Trautwein"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-30 h-30 rounded-full border-3 border-gray-100 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-3xl mx-auto">
          JT
        </div>
      )}
      
      <h1 className="text-3xl font-semibold text-primary mt-5 font-inter">
        Jan Trautwein
      </h1>
      
      <p className="text-base leading-6 text-muted-foreground max-w-xs mx-auto mt-4 font-inter">
        Business (+ life) can be hard. I try my best to help make it easier. Individualized 1-1 coaching for impact-driven humans.
      </p>
      
      <Button 
        onClick={handleLearnMore}
        className="mt-6 px-8 py-3 text-base hover:-translate-y-0.5 transition-transform duration-200 font-inter"
      >
        Learn More
      </Button>
    </div>
  );
}