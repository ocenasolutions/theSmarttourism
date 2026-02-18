import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation = (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => {
    onNavigate(view);
  };

  return (
    <footer className="bg-charcoal text-white py-32 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-10">
<img
  src="/logo.png"
  alt="Smart Tourism Logo"
  className="w-24 h-24 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
/>              <h2 className="text-2xl font-black tracking-tighter uppercase italic">Smart Tourism</h2>
            </div>
            <p className="text-gray-400 text-sm font-medium max-w-sm mb-10 leading-relaxed">
              Voted as the best travel agency for India and international holiday packages. 
              We curate high-fidelity domestic tours, luxury escapes, and adventure treks 
              backed by 24/7 expert human support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Best Hotels</h5>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li>
                <button 
                  onClick={() => handleNavigation('hotels')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Taj Hotels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('hotels')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  The Oberoi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('hotels')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  ITC Hotels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('hotels')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Leela Palace
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Services</h5>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li>
                <button 
                  onClick={() => handleNavigation('ride-rentals')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Bike Rentals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('ride-rentals')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Car Rentals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('flights')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Flight Booking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('bus')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Bus Booking
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white/40">Best Packages</h5>
            <ul className="space-y-4 text-xs font-bold text-white/60 mb-8">
              <li>
                <button 
                  onClick={() => handleNavigation('tour-packages')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Bali Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('tour-packages')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Kerala Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('tour-packages')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Goa Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('tour-packages')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Dubai Packages
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-24">
          <p className="text-xs text-white/60 mb-6 font-bold leading-relaxed text-center">
            Get curated travel.
          </p>
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-primary transition-all max-w-md mx-auto">

           <a
  href="mailto:booking@thesmarttourism.com"
  className="bg-transparent border-none focus:ring-0 text-xs px-5 flex-grow text-white text-white/40 cursor-pointer flex items-center"
>
  booking@thesmarttourism.com
</a>

            <button className="bg-primary text-white size-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
          <p>© 2024 Smart Tourism India. The best travel agency for India & international trips.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;