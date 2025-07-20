import { useState } from "react";

interface Testimonial {
  name: string;
  text: string;
  type: "paid" | "gifted";
  isBackground?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    text: "Jan helped me see my business as an extension of my values, not separate from them. Revenue doubled, but more importantly, I love what I do again.",
    type: "paid"
  },
  {
    name: "Marcus Williams",
    text: "In one conversation, Jan asked the three questions that changed everything. I finally understood what I was actually building.",
    type: "gifted"
  },
  {
    name: "Lisa Thompson",
    text: "The clarity I gained in just three months working with Jan transformed my entire approach to business and life balance.",
    type: "paid",
    isBackground: true
  },
  {
    name: "Elena Rodriguez",
    text: "Working with Jan is like having a strategic partner who sees your highest vision and helps you build the bridge to get there.",
    type: "paid"
  },
  {
    name: "James Park",
    text: "I came for business strategy. I left with a complete reimagining of what success means to me. Best investment I've made.",
    type: "paid"
  },
  {
    name: "Nina Patel",
    text: "Jan's ability to listen deeply and reflect back what matters most is extraordinary. One session shifted everything.",
    type: "gifted",
    isBackground: true
  },
  {
    name: "Amara Okafor",
    text: "Jan has this gift of making complex things feel simple and overwhelming decisions feel clear. Pure presence and wisdom.",
    type: "gifted"
  },
  {
    name: "David Liu",
    text: "Six months later, I have a business that runs without burning me out. Jan showed me how to build systems that support presence.",
    type: "paid"
  },
  {
    name: "Sophie Laurent",
    text: "The impact of our work together ripples through every area of my life. Jan sees possibilities I couldn't see alone.",
    type: "paid",
    isBackground: true
  },
  {
    name: "Rachel Foster",
    text: "The combination of strategic depth and spiritual grounding is rare. Jan brings both in a way that feels completely natural.",
    type: "paid"
  },
  {
    name: "Tomás Silva",
    text: "I've worked with many coaches. Jan is the first who helped me hear what I already knew but couldn't access alone.",
    type: "gifted"
  },
  {
    name: "Michael Zhang",
    text: "Jan creates space for transformation that feels both safe and expansive. My business grew, but I grew more.",
    type: "paid",
    isBackground: true
  }
];

const testimonialPositions = [
  "top-0 left-1/2",
  "top-[10%] left-3/4",
  "top-1/4 left-[90%]",
  "top-1/2 left-full",
  "top-3/4 left-[90%]",
  "top-[90%] left-3/4",
  "top-full left-1/2",
  "top-[90%] left-1/4",
  "top-3/4 left-[10%]",
  "top-1/2 left-0",
  "top-1/4 left-[10%]",
  "top-[10%] left-1/4"
];

export default function TestimonialOrbit() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div 
        className={`absolute w-[900px] h-[900px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isPaused ? '' : 'animate-rotate'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute bg-white border border-gray-200 rounded-xl p-5 w-[280px] shadow-sm pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              isPaused ? '' : 'animate-counter-rotate'
            } ${
              testimonial.isBackground 
                ? 'opacity-25 hover:opacity-50 blur-[0.5px] hover:blur-0 z-10' 
                : 'opacity-40 hover:opacity-80'
            } ${testimonialPositions[index]}`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold text-sm text-primary">
                {testimonial.name}
              </div>
              <span className={`inline-block text-xs px-2 py-1 rounded-xl whitespace-nowrap ${
                testimonial.type === 'paid' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'bg-purple-50 text-purple-700'
              }`}>
                {testimonial.type === 'paid' ? 'Paid Client' : 'Gifted Session'}
              </span>
            </div>
            <div className="text-sm leading-6 text-muted-foreground">
              "{testimonial.text}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}