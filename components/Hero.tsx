import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flight' | 'train' | 'bus' | 'hotel'>('flight');

  const tabs = [
    { id: 'flight' as const, label: 'Flights', icon: 'flight' },
    { id: 'train' as const, label: 'Train', icon: 'train' },
    { id: 'bus' as const, label: 'Bus', icon: 'directions_bus' },
    { id: 'hotel' as const, label: 'Hotels', icon: 'hotel' },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 pb-12">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-white z-10"></div>
        
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto mb-8 sm:mb-12 w-full">
        {/* Hero Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[1.1] sm:leading-[1] tracking-tighter px-2">
          Explore the World <br />
          <span className="italic text-primary">The Smart Way.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-white text-base sm:text-lg font-medium max-w-2xl mx-auto opacity-90 leading-relaxed mb-6 sm:mb-10 drop-shadow-md px-4">
          Curating high-fidelity domestic and international tours with 24/7 human-backed support.
        </p>

        {/* Search Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/40'
                  : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              <span className="material-symbols-outlined text-base sm:text-lg">{tab.icon}</span>
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="w-full max-w-4xl mx-auto">
          <SearchBox type={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Hero;