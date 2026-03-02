import React, { useState, useEffect } from 'react';
import Navbar from './components/Layouts/Navbar';
import Hero from './components/Hero';
import PopularStays from './components/PopularStays';
import Promotions from './components/Promotions';
import TrustBuilder from './components/TrustBuilder';
import Recommended from './components/Recommended';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Layouts/Footer';

import HotelsView from './components/Bookings/HotelsView';
import FlightsView from './components/Bookings/FlightsView';
import BusView from './components/Bookings/BusView';
import TrainView from './components/Bookings/TrainView';

import TourPackagesView from './components/TourPackagesView';
import RideRentalsView from './components/RideRentalsView';
import AdventureView from './components/AdventureView';
import Support from './components/Support';
import TermsView from './components/TermsView';
import PrivacyPolicyView from './components/PrivacyPolicyView';


// ------------------
// View Types
// ------------------
type ViewType =
  | 'home'
  | 'hotels'
  | 'flights'
  | 'bus'
  | 'train'
  | 'tour-packages'
  | 'ride-rentals'
  | 'adventure'
  | 'support'
  | 'terms'
  | 'privacy';


// ------------------
// Home View
// ------------------
interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
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
        <span className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
          Ready to unlock your trip?
        </span>

        <h2 className="display-header text-white text-6xl md:text-8xl mb-12">
          Stop Scrolling.<br />Start Booking.
        </h2>

        <button
          onClick={() => onNavigate('support')}
          className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform"
        >
          Get My Free Quote
        </button>
      </div>
    </section>
  </>
);


// ------------------
// App Component
// ------------------
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Dark background pages
  const darkViews: ViewType[] = ['tour-packages', 'adventure'];

  const backgroundClass =
    darkViews.includes(currentView)
      ? 'bg-background-dark'
      : currentView === 'ride-rentals'
      ? 'bg-[#f8f6f6]'
      : 'bg-white';

  return (
    <div className={`flex flex-col min-h-screen ${backgroundClass}`}>
      
      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view as ViewType)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'hotels' && <HotelsView />}
        {currentView === 'flights' && <FlightsView />}
        {currentView === 'bus' && <BusView />}
        {currentView === 'train' && <TrainView />}
        {currentView === 'tour-packages' && <TourPackagesView />}
        {currentView === 'ride-rentals' && <RideRentalsView />}
        {currentView === 'adventure' && <AdventureView />}
        {currentView === 'support' && <Support />}
        {currentView === 'terms' && <TermsView />}
        {currentView === 'privacy' && <PrivacyPolicyView />}
      </main>

      {/* Footer (Hidden only on dark immersive pages if needed) */}
      {!darkViews.includes(currentView) && currentView !== 'ride-rentals' && (
        <Footer onNavigate={(view) => setCurrentView(view as ViewType)} />
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918679090502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all transform border-4 border-white">
            <svg
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
          </button>
        </a>
      </div>

    </div>
  );
};

export default App;