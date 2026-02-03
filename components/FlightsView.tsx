
import React from 'react';

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

        {/* Glassmorphism Form Card */}
        <div className="w-full bg-black/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect inside the card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end relative z-10">
            {/* From Field */}
            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 px-1">
                <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                From
              </label>
              <input 
                type="text" 
                placeholder="Departure City" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary focus:bg-white/10 outline-none transition-all"
              />
            </div>
            
            {/* To Field */}
            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 px-1">
                <span className="material-symbols-outlined text-sm">flight_land</span>
                To
              </label>
              <input 
                type="text" 
                placeholder="Arrival City" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary focus:bg-white/10 outline-none transition-all"
              />
            </div>

            {/* Date Field */}
            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 px-1">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                Date
              </label>
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-charcoal">Select Date</option>
                  <option className="bg-charcoal">This Weekend</option>
                  <option className="bg-charcoal">Next Week</option>
                  <option className="bg-charcoal">Flexible</option>
                </select>
                <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Travelers Field */}
            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 px-1">
                <span className="material-symbols-outlined text-sm">group</span>
                Travelers
              </label>
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-charcoal">1 Traveler</option>
                  <option className="bg-charcoal">2 Travelers</option>
                  <option className="bg-charcoal">4+ (Private Group)</option>
                </select>
                <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="md:col-span-2 lg:col-span-4 mt-8 flex flex-col items-center">
              <button className="w-full lg:w-auto min-w-[360px] bg-primary hover:bg-[#d62b34] text-white py-6 px-14 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all transform hover:scale-[1.03] active:scale-[0.97] shadow-3xl shadow-primary/40 flex items-center justify-center gap-4 group">
                Request Custom Flight Quote
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <p className="mt-8 text-[9px] text-white/30 font-black uppercase tracking-[0.4em]">Confidential & Bespoke Service Guarantee</p>
            </div>
          </form>
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
