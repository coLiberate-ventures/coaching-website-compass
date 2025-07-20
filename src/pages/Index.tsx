import ProfileCard from "@/components/ProfileCard";
import TestimonialOrbit from "@/components/TestimonialOrbit";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden flex items-center justify-center relative font-inter">
      <ProfileCard />
      <TestimonialOrbit />
      
      {/* Mobile responsive view */}
      <div className="md:hidden absolute inset-0 overflow-y-auto p-5">
        <div className="mb-10">
          <ProfileCard />
        </div>
        <div className="grid gap-4">
          {/* Mobile testimonials would go here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Index;
