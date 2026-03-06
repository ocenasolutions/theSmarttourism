import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';

type ViewType = 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'adventure' | 'support';

interface HeroProps {
  onNavigate?: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'flight' | 'train' | 'bus' | 'hotel'>('flight');

  const searchTabs = [
    { id: 'flight' as const, label: 'Flights', icon: 'flight' },
    { id: 'train' as const, label: 'Train', icon: 'train' },
    { id: 'bus' as const, label: 'Bus', icon: 'directions_bus' },
    { id: 'hotel' as const, label: 'Hotels', icon: 'hotel' },
  ];

  const navTabs = [
    { label: 'Tour Packages', icon: 'work', view: 'tour-packages' as ViewType },
    { label: 'Ride Rentals', icon: 'vpn_key', view: 'ride-rentals' as ViewType },
    { label: 'Adventure', icon: 'terrain', view: 'adventure' as ViewType },
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

        {/* Row 1: Search Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-2.5 px-2">
          {searchTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-900/30'
              }`}
            >
              <span className="material-symbols-outlined text-base sm:text-lg">{tab.icon}</span>
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Row 2: Nav Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 px-2">
          {navTabs.map((tab) => (
            <button
              key={tab.view}
              onClick={() => onNavigate?.(tab.view)}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-900/30 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base sm:text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search Box — only shown for search tabs */}
        <div className="w-full max-w-4xl mx-auto">
          <SearchBox type={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Hero;