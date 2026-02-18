import React from 'react';

type ViewType = 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'adventure' | 'support';

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const MENU_ITEMS = [
  { label: 'Hotels', icon: 'hotel', view: 'hotels' as const },
  { label: 'Flights', icon: 'flight', view: 'flights' as const },
  { label: 'Bus', icon: 'directions_bus', view: 'bus' as const },
  { label: 'Train', icon: 'train', view: 'train' as const },
  { label: 'Tour Packages', icon: 'work', view: 'tour-packages' as const },
  { label: 'Ride Rentals', icon: 'vpn_key', view: 'ride-rentals' as const },
  { label: 'Adventure', icon: 'terrain', view: 'adventure' as const },
];

const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isTourView = currentView === 'tour-packages';
  const isRideView = currentView === 'ride-rentals';
  const isAdventureView = currentView === 'adventure';
  const isDarkView = isTourView || isAdventureView;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkView ? '' : 'border-t-4 border-[#3a82f6]'} ${(scrolled || isRideView) ? 'glass-nav shadow-md h-16' : 'lg:bg-transparent bg-white/80 backdrop-blur-md h-16 lg:h-20'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between lg:justify-between">
          {/* Logo Section - Centered on Mobile */}
          <div className="lg:hidden flex-1 flex justify-center">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src="/logo.png"
                alt="Smart Tourism Logo"
                className="w-24 h-24 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h2 className={`text-xl font-black tracking-tighter transition-colors uppercase italic ${isDarkView ? 'text-white' : 'text-charcoal'}`}>
                Smart<span className="text-primary">Tourism</span>
              </h2>
            </div>
          </div>

          {/* Logo Section - Left on Desktop */}
          <div 
            className="hidden lg:flex items-center gap-2 shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/logo.png"
              alt="Smart Tourism Logo"
              className="w-24 h-24 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h2 className={`text-xl font-black tracking-tighter transition-colors uppercase italic ${isDarkView ? 'text-white' : 'text-charcoal'}`}>
              Smart<span className="text-primary">Tourism</span>
            </h2>
          </div>
          
          {/* Centered Navigation - Desktop Only */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {MENU_ITEMS.map((item) => (
              <button 
                key={item.label} 
                onClick={() => item.view && onNavigate(item.view)}
                className={`flex items-center gap-2 text-[13px] font-bold transition-colors group relative
                  ${currentView === item.view ? 'text-primary' : (isDarkView ? 'text-white/80 hover:text-white' : 'text-[#444] hover:text-primary')}
                  ${item.view === 'adventure' ? 'font-black' : ''}
                `}
              >
                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="whitespace-nowrap">{item.label}</span>
                {/* Adventure indicator dot */}
                {item.view === 'adventure' && currentView !== 'adventure' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => onNavigate('support')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all group ${isDarkView ? 'bg-white/10 hover:bg-white/20' : 'bg-[#f1f3f4] hover:bg-[#e8eaed]'}`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`group-hover:scale-110 transition-transform ${isDarkView ? 'stroke-white' : 'stroke-primary'}`}
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
                <path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
              </svg>
              <span className={`font-bold text-sm ${isDarkView ? 'text-white' : 'text-primary'}`}>Instant Support</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className={`material-symbols-outlined text-2xl ${isDarkView ? 'text-white' : 'text-charcoal'}`}>
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-20">
          <nav className="flex flex-col items-center gap-6 p-6">
            {MENU_ITEMS.map((item) => (
              <button 
                key={item.label} 
                onClick={() => {
                  item.view && onNavigate(item.view);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 text-base font-bold transition-colors relative
                  ${currentView === item.view ? 'text-primary' : 'text-[#444] hover:text-primary'}
                  ${item.view === 'adventure' ? 'font-black' : ''}
                `}
              >
                <span className="material-symbols-outlined text-2xl">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.view === 'adventure' && currentView !== 'adventure' && (
                  <span className="absolute -top-0.5 -right-3 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
            
            <button 
              onClick={() => {
                onNavigate('support');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 mt-4 px-8 py-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="stroke-primary"
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
                <path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
              </svg>
              <span className="font-bold text-base text-primary">Instant Support</span>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;