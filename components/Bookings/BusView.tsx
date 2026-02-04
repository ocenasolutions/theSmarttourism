import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

const BusView: React.FC = () => {
  return (
    <div className="bg-[#f8f6f6] min-h-screen pt-20">
      <main className="flex flex-col items-center">
        {/* Hero Section with Background */}
        <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 pt-10">
          <div className="relative w-full h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAUHKDI9--zMRRZ5S2JO2sCWG05jFY4oeE40ogc2xk7mHdg9_bhRU4bazbyhRqdAbY_r1z8IzQukzyMHTTNdEZiHK5wWwJxplM1dIsap_DWoy981vUnciY2-T9kkdPzqNlmrIRFdHGlRoUEQBVlUw2otjIgbuQzSVbbcwXRbNT2oWQ6hW_YuCdE7QClWgippBnODpAbTUcFpro_WapA7754qYmlrUXlTTjzP6VKGfpoo0EHGkz_kjBjHK_F2vZPB6hrjNnw8HyyAc3")'
              }}
            ></div>
            {/* Hero Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 gap-6">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-md max-w-4xl">
                Travel in Comfort — <span className="italic text-primary">Premium Bus</span> Journeys
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow">
                Experience the ultimate road trip with luxury sleeper amenities tailored for your group.
              </h2>
            </div>
          </div>

          {/* Elevated Request Bar - Integrated SearchBox */}
          <div className="relative -mt-16 z-10 mx-auto max-w-5xl px-4">
            <SearchBox type="bus" />
          </div>
        </div>

        {/* Features Section */}
        <section className="w-full max-w-6xl px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="bg-primary/5 size-20 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">airline_seat_flat</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest">Premium Sleepers</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              Fully reclinable beds with luxury bedding and climate control for every guest.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="bg-primary/5 size-20 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest">Safe & Verified</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              All operators undergo rigorous safety checks and background verification.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="bg-primary/5 size-20 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest">24/7 Concierge</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              A dedicated travel assistant for your group from departure to destination.
            </p>
          </div>
        </section>

        {/* Bottom CTA for Itinerary */}
        <section className="w-full max-w-5xl px-4 mb-24">
          <div className="bg-charcoal text-white rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <h2 className="text-4xl font-black tracking-tighter mb-4">Planning a large group trip?</h2>
              <p className="text-gray-400 font-medium">Get exclusive discounts on luxury bus charters for wedding squads or corporate off-sites.</p>
            </div>
            <button className="bg-primary text-white font-black px-10 py-5 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
              Inquire Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BusView;