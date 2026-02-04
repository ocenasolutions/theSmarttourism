import React, { useRef } from 'react';
import { cities } from '../data/popularstaydata';

const PopularStays: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 360;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (direction === 'right') {
        // If at or near the end, loop back to start
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      } else {
        // If at or near the start, loop to end
        if (container.scrollLeft <= 10) {
          container.scrollTo({
            left: maxScroll,
            behavior: 'smooth'
          });
        } else {
          container.scrollTo({
            left: container.scrollLeft - scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Popular stays in India</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight">Cities that Vibe.</h3>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="size-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-all shadow-xl"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
        >
          {cities.map((city) => (
            <div 
              key={city.name} 
              className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer"
            >
              <div className="h-[450px] rounded-[3rem] overflow-hidden relative shadow-lg mb-6">
                <img 
                  src={city.img} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-3xl font-black mb-1">{city.name}</h4>
                  <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">{city.stays}</p>
                </div>
              </div>
              <div className="px-4">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  Starting <span className="text-primary text-sm font-black">{city.price}</span>/night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularStays;