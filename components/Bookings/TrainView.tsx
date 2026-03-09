import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

const TrainView: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background-light">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMt8sdRXgxT4zwV-Kq52W-g81oPxoJXWN2O0DULb0iJKpj0yLOS6tlrMeRVBEdVaaM8zvXAvpsBSfU3sjGAI4Z4GgAqwsyR-S-uPEkXeMVX682mabnzoXz03WWBS_WT_9pHUVQTM0xrgVOwsFVsEPTpFKO8PRW9N0qqS7VMHojijL6R8zUxY7LT5eJwAteZqeezOCzJZALZ3uTE0gkx0jvw6J-E8MmlFuuEnalHXRnAyp8nZvk6PAmOWCpYgrU3wQNnDELHh6efC6R")' 
          }}
        ></div>
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:pt-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl w-full">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white space-y-6 lg:space-y-8 w-full lg:w-auto">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.1] lg:leading-[1] uppercase italic">
                Experience the <br/> 
                <span className="text-primary not-italic">Magic of Rail</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-lg px-4 sm:px-0">
                Tailor-made luxury journeys through the world's most breathtaking landscapes. Discover the art of slow travel with elite amenities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-2 lg:pt-4">
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-md px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-sm text-primary font-variation-fill">verified</span>
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">Curated Experts</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-md px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-sm text-primary font-variation-fill">price_check</span>
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* SearchBox Container - FULLY RESPONSIVE with Search Button */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:max-w-[680px] xl:max-w-[800px] 2xl:max-w-[950px] relative">
            {/* Subtle floating elements - hidden on mobile */}
            <div className="hidden lg:block absolute -top-10 -right-10 size-32 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
            
            <div className="bg-white/95 lg:bg-white/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl lg:shadow-3xl border border-white/30">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-2xl sm:text-2xl lg:text-3xl font-black text-charcoal tracking-tight">
                  Plan Your Journey
                </h2>
                <p className="text-gray-500 font-medium text-sm lg:text-sm mt-2">
                  Fill in the details to receive a custom quote within 24 hours.
                </p>
              </div>

              {/* Search Form with Button on Same Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-end">
                <div className="flex-1">
                  <SearchBox type="train" />
                </div>
              </div>

              <p className="text-center text-[9px] sm:text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-5 lg:mt-6">
                No commitment required to request
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Branding Overlay - Hidden on mobile and tablet */}
      <footer className="absolute bottom-6 lg:bottom-10 left-0 right-0 z-20 hidden xl:block">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20 flex justify-between items-center text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
          <div className="flex gap-6 lg:gap-10">
            <span>© 2024 SCENIC RAIL JOURNEYS</span>
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
          </div>
          <div className="flex gap-6 items-center">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>English (US)</span>
            <span className="opacity-20">|</span>
            <span>Premium Rail Network</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainView;