
import React from 'react';
import SearchBox from './SearchBox';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-white z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Destinations" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-white text-5xl md:text-8xl font-black mb-6 leading-[1] tracking-tighter">
          Explore the World <br/><span className="italic text-primary">The Smart Way.</span>
        </h1>
        <p className="text-white text-lg font-medium max-w-2xl mx-auto opacity-90 leading-relaxed mb-10 drop-shadow-md">
          Curating high-fidelity domestic and international tours with 24/7 human-backed support.
        </p>
        
        <div className="w-full max-w-4xl mx-auto">
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
