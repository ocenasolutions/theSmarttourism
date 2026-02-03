
import React from 'react';

const CustomItinerary: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="bg-[#111111] rounded-[3.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="flex-1 z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">
            Need a custom <br/><span className="text-primary italic">travel itinerary?</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium max-w-md mb-12 leading-relaxed">
            Tell us your vibe and we'll handle the rest. Get a personalized quote for your next squad trip or solo escape.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-[#d62b34] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
              Get a Quote Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all backdrop-blur-md">
              Talk to an Expert
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop" 
              alt="Travel Squad" 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 size-40 bg-primary/20 rounded-full blur-[80px]"></div>
        </div>
      </div>
    </section>
  );
};

export default CustomItinerary;
