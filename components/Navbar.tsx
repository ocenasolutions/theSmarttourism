
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals') => void;
  currentView: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals';
}

const MENU_ITEMS = [
  { label: 'Hotels', icon: 'hotel', view: 'hotels' as const },
  { label: 'Flights', icon: 'flight', view: 'flights' as const },
  { label: 'Bus', icon: 'directions_bus', view: 'bus' as const },
  { label: 'Train', icon: 'train', view: 'train' as const },
  { label: 'Tour Packages', icon: 'work', view: 'tour-packages' as const },
  { label: 'Ride Rentals', icon: 'vpn_key', view: 'ride-rentals' as const },
];

const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigate, currentView }) => {
  const isTourView = currentView === 'tour-packages';
  const isRideView = currentView === 'ride-rentals';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTourView ? '' : 'border-t-4 border-[#3a82f6]'} ${(scrolled || isRideView) ? 'glass-nav shadow-md h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="bg-primary size-8 rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl">travel_explore</span>
          </div>
          <h2 className={`text-xl font-black tracking-tighter transition-colors uppercase italic ${isTourView ? 'text-white' : 'text-charcoal'}`}>
            Smart<span className="text-primary">Tourism</span>
          </h2>
        </div>
        
        {/* Centered Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {MENU_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => item.view && onNavigate(item.view)}
              className={`flex items-center gap-2 text-[13px] font-bold transition-colors group ${currentView === item.view ? 'text-primary' : (isTourView ? 'text-white/80 hover:text-white' : 'text-[#444] hover:text-primary')}`}
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center">
          <button className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all group ${isTourView ? 'bg-white/10 hover:bg-white/20' : 'bg-[#f1f3f4] hover:bg-[#e8eaed]'}`}>
            <svg viewBox="0 0 24 24" className={`w-5 h-5 group-hover:scale-110 transition-transform ${isTourView ? 'fill-white' : 'fill-[#25D366]'}`} xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className={`font-bold text-sm ${isTourView ? 'text-white' : 'text-primary'}`}>Instant Support</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
