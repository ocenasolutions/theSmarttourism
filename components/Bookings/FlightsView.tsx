import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

const FlightsView: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk6HvuPP79BIgtXt_XmmvPm1mYgr21qGy8CgROul36IL7v8e-aPyTa1soEkJmhXJ6xVlwC5jVPJHmzAGzEinPycobkHWDvWJY_6kg1rM51kGlBPNH9ud3oXjz6-T5xpfpHWLmLaPXjrM_crXGESSky7zZzQmWNjtgSfx7kh22S6Fbh1-rnzzvd2dzJPinFI42eCJ6jxXEakxMucjR9oMLucKVz1_WmWKzGcv_TuTGz2HVxTeXdCrBEZHuzHsZBcvbO5DDCetfhuYez" 
          alt="Luxury Private Jet Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Section */}
      <main className="relative z-20 w-full max-w-5xl px-6 py-32 flex flex-col items-center text-center">
        <div className="mb-12 space-y-4 max-w-3xl">
          <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Noto Serif', serif" }}>
            Get the Best <br/>
            <span className="italic font-normal">Luxury Flight</span> Deal
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Tailored private and first-class experiences curated for the modern traveler. Quiet luxury at its finest.
          </p>
        </div>

        {/* Integrated SearchBox Component */}
        <div className="w-full">
          <SearchBox type="flight" />
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-3 text-white/80">
            <span className="material-symbols-outlined text-4xl text-primary">flight_class</span>
            <h3 className="font-black uppercase text-sm tracking-widest">Premium Cabins</h3>
            <p className="text-xs leading-relaxed">First-class & private jet options</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 text-white/80">
            <span className="material-symbols-outlined text-4xl text-primary">shield_with_heart</span>
            <h3 className="font-black uppercase text-sm tracking-widest">Safe & Secure</h3>
            <p className="text-xs leading-relaxed">Verified carriers only</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 text-white/80">
            <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
            <h3 className="font-black uppercase text-sm tracking-widest">24/7 Support</h3>
            <p className="text-xs leading-relaxed">Dedicated travel concierge</p>
          </div>
        </div>
      </main>

      {/* Subtle branding detail at bottom left */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-20">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] leading-none">© 2024 LUXE AIR GLOBAL • PREMIUM WINGS</p>
      </div>
    </div>
  );
};

export default FlightsView;