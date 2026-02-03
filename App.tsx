
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularStays from './components/PopularStays';
import Promotions from './components/Promotions';
import TrustBuilder from './components/TrustBuilder';
import Recommended from './components/Recommended';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HotelsView from './components/HotelsView';
import FlightsView from './components/FlightsView';
import BusView from './components/BusView';
import TrainView from './components/TrainView';
import TourPackagesView from './components/TourPackagesView';
import RideRentalsView from './components/RideRentalsView';

const HomeView: React.FC = () => (
  <>
    <Hero />
    <PopularStays />
    <Promotions />
    <TrustBuilder />
    <Recommended />
    <Experiences />
    <Testimonials />
    <section className="bg-primary py-32 px-6 overflow-hidden relative text-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
         <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-black blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Ready to unlock your trip?</span>
        <h2 className="display-header text-white text-6xl md:text-8xl mb-12">
          Stop Scrolling.<br/>Start Booking.
        </h2>
        <button className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform">
          Get My Free Quote
        </button>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className={`flex flex-col min-h-screen ${currentView === 'tour-packages' ? 'bg-background-dark' : (currentView === 'ride-rentals' ? 'bg-[#f8f6f6]' : 'bg-white')}`}>
      <Navbar 
        scrolled={scrolled} 
        onNavigate={(view) => setCurrentView(view)}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomeView />}
        {currentView === 'hotels' && <HotelsView />}
        {currentView === 'flights' && <FlightsView />}
        {currentView === 'bus' && <BusView />}
        {currentView === 'train' && <TrainView />}
        {currentView === 'tour-packages' && <TourPackagesView />}
        {currentView === 'ride-rentals' && <RideRentalsView />}
      </main>
      
      {currentView !== 'tour-packages' && currentView !== 'ride-rentals' && <Footer />}
      
      <div className="fixed bottom-6 right-6 z-50">
        <button className="size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all transform border-4 border-white">
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
