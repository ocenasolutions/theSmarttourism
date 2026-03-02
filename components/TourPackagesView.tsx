import React, { useState, useEffect, useCallback, useRef } from 'react';
import Footer from './Layouts/Footer';
import CustomisePackageModal from './CustomisePackageModal';
import { API_URL } from '@/config/api';
import { ALL_INDIAN_STATES, getCitiesForState } from '@/data/indianLocations';

// Duration options matching backend schema
const DURATION_OPTIONS = [
  { label: '2N 3D', nights: 2 },
  { label: '3N 4D', nights: 3 },
  { label: '4N 5D', nights: 4 },
  { label: '5N 6D', nights: 5 },
  { label: '6N 7D', nights: 6 },
  { label: '7N 8D', nights: 7 },
  { label: '8N 9D', nights: 8 },
  { label: '9N 10D', nights: 9 },
];

interface CustomisePackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: any;
}

const CustomisePackageModalTyped = CustomisePackageModal as React.ComponentType<CustomisePackageModalProps>;

interface TourPackagesViewProps {
  onNavigate?: (view: 'home' | 'hotels' | 'flights' | 'bus' | 'train' | 'tour-packages' | 'ride-rentals' | 'support') => void;
}

const TourPackagesView: React.FC<TourPackagesViewProps> = ({ onNavigate }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [stateOrder, setStateOrder] = useState<string[]>([]);

  // ── International countries (fetched from backend) ─────────
  const [internationalCountries, setInternationalCountries] = useState<string[]>([]);

  // ── Filters ────────────────────────────────────────────────
  const [pkgType, setPkgType] = useState<'Domestic' | 'International' | ''>('');
  const [selectedNights, setSelectedNights] = useState<number[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // ── State & City Dropdowns ─────────────────────────────────
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const availableCities = selectedState ? getCitiesForState(selectedState) : [];

  // ── Modal ──────────────────────────────────────────────────
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  // ── Quick Enquiry ──────────────────────────────────────────
  const [enquiryPkg, setEnquiryPkg] = useState<any>(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '' });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryDone, setEnquiryDone] = useState(false);

  const stateScrollRef = useRef<HTMLDivElement>(null);
  const countryScrollRef = useRef<HTMLDivElement>(null);

  // ── Fetch international countries from backend ─────────────
  useEffect(() => {
    fetch(`${API_URL}/tour-packages/meta/state-counts?type=International`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.states.length > 0) {
          setInternationalCountries(data.states.map((s: { state: string }) => s.state));
        }
      })
      .catch(() => {});
  }, []);

  // ── Fetch packages ─────────────────────────────────────────
  const fetchPackages = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (pkgType) params.append('type', pkgType);
      if (selectedNights.length > 0) params.append('nights', selectedNights.join(','));
      if (selectedRegion) params.append('region', selectedRegion);
      if (selectedState) params.append('state', selectedState);
      if (selectedCity) params.append('city', selectedCity);

      const res = await fetch(`${API_URL}/tour-packages?${params}`);
      const data = await res.json();
      if (data.success) {
        setPackages(data.packages);
        setTotal(data.total);
      }
    } catch (err) {
      console.error('Failed to fetch packages:', err);
    }
    setLoading(false);
  }, [pkgType, selectedNights, selectedRegion, selectedState, selectedCity]);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  // Fetch state counts on mount to sort chips by most packages first
  useEffect(() => {
    fetch(`${API_URL}/tour-packages/meta/state-counts?type=Domestic`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.states.length > 0) {
          setStateOrder(data.states.map((s: { state: string }) => s.state));
        }
      })
      .catch(() => {});
  }, []);

  // Reset region + state + city when switching type
  const handlePkgTypeChange = (type: 'Domestic' | 'International' | '') => {
    setPkgType(type);
    setSelectedRegion(null);
    setSelectedState('');
    setSelectedCity('');
  };

  // When state changes, reset city
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('');
    setSelectedRegion(state || null);
  };

  const toggleNight = (n: number) => {
    setSelectedNights((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]
    );
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion((prev) => (prev === region ? null : region));
  };

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('adventure-scroll');
    if (container) container.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  const scrollCountries = (dir: 'left' | 'right') => {
    countryScrollRef.current?.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' });
  };

  const clearAllFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedRegion(null);
    setSelectedNights([]);
    setPkgType('');
  };

  const hasActiveFilters = selectedState || selectedCity || selectedRegion || selectedNights.length > 0 || pkgType;

  const openCustomise = (pkg: any = null) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  const openEnquiry = (pkg: any) => {
    setEnquiryPkg(pkg);
    setEnquiryForm({ name: '', phone: '', email: '' });
    setEnquiryDone(false);
  };

  const submitEnquiry = async () => {
    if (!enquiryForm.name || !enquiryForm.phone) return;
    setEnquiryLoading(true);
    try {
      await fetch(`${API_URL}/tour-packages/${enquiryPkg._id}/enquire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: enquiryForm.name,
          phone: enquiryForm.phone,
          email: enquiryForm.email,
        }),
      });
      setEnquiryDone(true);
    } catch (err) {
      console.error('Enquiry failed:', err);
    }
    setEnquiryLoading(false);
  };

  const handleNavigate = (view: any) => {
    if (onNavigate) onNavigate(view);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background-dark text-white font-sans overflow-x-hidden min-h-screen">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6b2et9xcEe7dc9hEa-BqZYhK98iyz1H6QPXtFxRtZD0fAcgQGS7ikobrpQRgx-DIEC4LXaqeh9nvlDXBVi46AcFGDt0MPyKdJy3y0l50fKP4OFmpHgN-jVl160gw-v-iShj0fyk4fmWFIw8WRPRsAZLagv57w0obaZ7L8elfqn8YnAH72mExVegZKVnzCIhgtw9vZQNl5KLVdL4lwR8heLUsfhGRZ3lppmjEVfrlCwgclwHa7SBdwR434TpF72ntNoIjPfyx3qnXG"
            alt="Epic Adventures"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-background-dark" />
        </div>
        <div className="absolute top-1/4 left-10 opacity-60 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-[120px] text-primary/30 blur-[1px]">terrain</span>
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-60 animate-pulse hidden md:block">
          <span className="material-symbols-outlined text-[100px] text-primary/30 blur-[1px]">paragliding</span>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-8 text-primary">
            Explore the Unseen
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-10 uppercase italic">
            Epic <br/><span className="text-primary not-italic">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Curated paragliding, trekking & cultural experiences designed for the next generation of explorers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-red-600 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/40"
            >
              Explore Packages
            </button>
            <button
              onClick={() => openCustomise()}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all"
            >
              ✨ Customise Trip
            </button>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────── */}
      <section id="packages-section" className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="flex flex-col gap-8">

          {/* Title + count */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Breathtaking <br/><span className="text-primary italic">Destinations</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-md font-medium text-sm">
                {total} packages found. Filter to find your perfect trip.
              </p>
            </div>

            {/* Scroll arrows + Clear all */}
            <div className="flex items-center gap-2 shrink-0">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/5 border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all"
                >
                  ✕ Clear All
                </button>
              )}
              <button
                onClick={() => scrollContainer('left')}
                className="size-10 sm:size-12 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined text-white text-sm">west</span>
              </button>
              <button
                onClick={() => scrollContainer('right')}
                className="size-10 sm:size-12 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined text-white text-sm">east</span>
              </button>
            </div>
          </div>

          {/* ── Type pills ── */}
          <div className="flex gap-2 flex-wrap">
            {(['', 'Domestic', 'International'] as const).map((t) => (
              <button
                key={t || 'all'}
                onClick={() => handlePkgTypeChange(t)}
                className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all border
                  ${pkgType === t
                    ? 'bg-primary border-primary text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
                  }`}
              >
                {t || 'All'}
              </button>
            ))}
          </div>

          {/* ── State chips (horizontal scroll) — shown when All or Domestic ── */}
          {(pkgType === '' || pkgType === 'Domestic') && (
            <div>
              <p className="text-[11px] text-white/40 font-black uppercase tracking-wider mb-3">
                Filter by State:
              </p>
              <div className="relative">
                <button
                  onClick={() => stateScrollRef.current?.scrollBy({ left: -240, behavior: 'smooth' })}
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>

                <div
                  ref={stateScrollRef}
                  className="flex gap-3 overflow-x-auto pb-2 px-1 sm:px-6"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[...ALL_INDIAN_STATES].sort((a, b) => {
                    const aIdx = stateOrder.indexOf(a);
                    const bIdx = stateOrder.indexOf(b);
                    if (aIdx === -1 && bIdx === -1) return a.localeCompare(b);
                    if (aIdx === -1) return 1;
                    if (bIdx === -1) return -1;
                    return aIdx - bIdx;
                  }).map((state) => {
                    const isSelected = selectedState === state;
                    return (
                      <button
                        key={state}
                        onClick={() => handleStateChange(isSelected ? '' : state)}
                        className={`flex-shrink-0 flex items-center gap-2 rounded-full px-4 py-2.5 border transition-all duration-200 whitespace-nowrap
                          ${isSelected
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                            : 'bg-white/5 border-primary/30 text-white hover:bg-primary/15 hover:border-primary/60 cursor-pointer hover:scale-105'
                          }`}
                      >
                        <span className="text-sm font-bold">{state}</span>
                        {isSelected
                          ? <span className="material-symbols-outlined text-sm">check</span>
                          : <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        }
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => stateScrollRef.current?.scrollBy({ left: 240, behavior: 'smooth' })}
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
              <p className="text-center text-[11px] text-white/20 font-medium mt-2 sm:hidden">
                ← Swipe to see more states →
              </p>

              {/* ── City chips — appear below when a state is selected ── */}
              {selectedState && availableCities.length > 0 && (
                <div className="mt-5">
                  <p className="text-[11px] text-white/40 font-black uppercase tracking-wider mb-3">
                    Cities in <span className="text-primary">{selectedState}</span>:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {availableCities.map((city) => {
                      const isCitySelected = selectedCity === city;
                      return (
                        <button
                          key={city}
                          onClick={() => setSelectedCity(isCitySelected ? '' : city)}
                          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 whitespace-nowrap
                            ${isCitySelected
                              ? 'bg-white text-black border-white scale-105 shadow-lg'
                              : 'bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:border-white/35 hover:text-white'
                            }`}
                        >
                          {city}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Country chips — shown when All or International ── */}
          {(pkgType === '' || pkgType === 'International') && internationalCountries.length > 0 && (
            <div>
              <p className="text-[11px] text-white/40 font-black uppercase tracking-wider mb-3">
                Filter by Country:
              </p>
              <div className="relative">
                <button
                  onClick={() => scrollCountries('left')}
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>

                <div
                  ref={countryScrollRef}
                  className="flex gap-3 overflow-x-auto pb-2 px-1 sm:px-6"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {internationalCountries.map((country) => {
                    const isSelected = selectedRegion === country;
                    return (
                      <button
                        key={country}
                        onClick={() => handleRegionSelect(country)}
                        className={`group flex-shrink-0 flex items-center gap-2.5 rounded-full px-4 py-2.5 border transition-all duration-200 whitespace-nowrap
                          ${isSelected
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                            : 'bg-white/5 border-primary/30 text-white hover:bg-primary/15 hover:border-primary/60 cursor-pointer hover:scale-105'
                          }`}
                      >
                        <span className="text-sm font-bold">{country}</span>
                        {isSelected
                          ? <span className="material-symbols-outlined text-sm">check</span>
                          : <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        }
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => scrollCountries('right')}
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
              <p className="text-center text-[11px] text-white/20 font-medium mt-2 sm:hidden">
                ← Swipe to see more countries →
              </p>
            </div>
          )}

          {/* ── Active filter badges ── */}
          {(selectedState || selectedCity || selectedRegion) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] text-white/40 font-black uppercase tracking-wider">Showing:</span>
              {selectedState && (
                <span className="flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                  {selectedState}
                  <button
                    onClick={() => handleStateChange('')}
                    className="hover:text-white transition-colors"
                    aria-label="Clear state filter"
                  >
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {selectedCity && (
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                  {selectedCity}
                  <button
                    onClick={() => setSelectedCity('')}
                    className="hover:text-white transition-colors"
                    aria-label="Clear city filter"
                  >
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {selectedRegion && !selectedState && (
                <span className="flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                  {selectedRegion}
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="hover:text-white transition-colors"
                    aria-label="Clear region filter"
                  >
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
          )}

          {/* ── Duration filter chips ── */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[11px] text-white/40 font-black uppercase tracking-wider self-center mr-2">Duration:</span>
            {DURATION_OPTIONS.map((opt) => (
              <button
                key={opt.nights}
                onClick={() => toggleNight(opt.nights)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] font-black transition-all border
                  ${selectedNights.includes(opt.nights)
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/25'
                  }`}
              >
                {opt.label}
              </button>
            ))}
            {selectedNights.length > 0 && (
              <button
                onClick={() => setSelectedNights([])}
                className="px-4 py-1.5 rounded-full text-[11px] font-black bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Package Cards ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-32 text-white/40">
            <span className="material-symbols-outlined text-6xl mb-4 block">luggage</span>
            <p className="text-xl font-black">No packages found</p>
            <p className="text-sm mt-2">Try changing your filters</p>
          </div>
        ) : (
          <div className="relative">
            <style dangerouslySetInnerHTML={{__html: `
              #adventure-scroll::-webkit-scrollbar { display: none; }
              #adventure-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            {/* Left arrow */}
            <button
              onClick={() => scrollContainer('left')}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-primary border border-white/20 hover:border-primary items-center justify-center transition-all duration-300 shadow-xl active:scale-95"
              aria-label="Scroll packages left"
            >
              <span className="material-symbols-outlined text-white text-xl">chevron_left</span>
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollContainer('right')}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-primary border border-white/20 hover:border-primary items-center justify-center transition-all duration-300 shadow-xl active:scale-95"
              aria-label="Scroll packages right"
            >
              <span className="material-symbols-outlined text-white text-xl">chevron_right</span>
            </button>

            <div
              id="adventure-scroll"
              className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            >
              {packages.map((pkg: any) => (
                <div
                  key={pkg._id}
                  className="group relative flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4"
                  style={{ width: 'clamp(280px, 82vw, 380px)', aspectRatio: '3 / 4' }}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={pkg.coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
                    alt={pkg.name}
                    onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex gap-2 flex-wrap">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-3 sm:px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                      {pkg.tag || pkg.packageType}
                    </div>
                    {pkg.isFeatured && (
                      <div className="bg-primary/80 backdrop-blur-xl px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  {pkg.rating > 0 && (
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-white text-[11px] font-bold">{pkg.rating}</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[10px] text-white/50 font-black uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                        {pkg.durationLabel}
                      </span>
                      <span className="text-[10px] text-white/50 font-black uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                        {pkg.startLocation} → {pkg.endLocation}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tighter uppercase italic leading-tight">{pkg.name}</h3>
                    <p className="text-white/50 mb-4 text-xs font-medium leading-relaxed line-clamp-2">{pkg.description}</p>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div>
                        <span className="text-[10px] text-white/40 font-black uppercase tracking-wider">Starting from</span>
                        <p className="text-xl sm:text-2xl font-black text-white">₹{pkg.basePrice?.toLocaleString('en-IN')}</p>
                        <span className="text-[10px] text-white/30">per person</span>
                      </div>
                      {pkg.reviewCount > 0 && (
                        <span className="text-[10px] text-white/30">{pkg.reviewCount} reviews</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEnquiry(pkg)}
                        className="flex-1 bg-primary hover:bg-red-600 py-3 sm:py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/20"
                      >
                        Book Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                      <button
                        onClick={() => openCustomise(pkg)}
                        className="px-4 py-3 sm:py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10"
                        title="Customise Package"
                      >
                        <span className="material-symbols-outlined text-sm">tune</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Package count indicator */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-white/30 text-[11px] font-black uppercase tracking-widest">
                {packages.length} package{packages.length !== 1 ? 's' : ''} available
              </span>
              <span className="text-white/20 text-[11px]">·</span>
              <span className="text-white/20 text-[11px] sm:hidden font-medium">Swipe to explore</span>
              <span className="text-white/20 text-[11px] hidden sm:inline font-medium">Use arrows to navigate</span>
            </div>
          </div>
        )}
      </section>

      {/* ── Customise Package CTA Section ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent" />
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">tune</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
              Can't find your <span className="text-primary">perfect trip?</span>
            </h3>
            <p className="text-white/60 max-w-lg mx-auto mb-8 font-medium text-sm sm:text-base">
              Tell us your dream itinerary — dates, destinations, budget. Our travel experts will craft a bespoke package just for you.
            </p>
            <button
              onClick={() => openCustomise()}
              className="bg-primary hover:bg-red-600 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
            >
              ✨ Customise My Tour Package
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={handleNavigate} />

      {/* ── Quick Enquiry Modal ────────────────────────────────── */}
      {enquiryPkg && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setEnquiryPkg(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div
            className="relative w-full sm:max-w-md bg-[#0d0d0d] border border-white/10 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e: any) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5 sm:hidden" />
            <button onClick={() => setEnquiryPkg(null)} className="absolute top-5 right-5 size-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {enquiryDone ? (
              <div className="text-center py-8">
                <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">We'll Call You!</h3>
                <p className="text-white/50 text-sm">Our team will reach out within 24 hours with package details.</p>
              </div>
            ) : (
              <>
                <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-1">Book Now</p>
                <h3 className="text-xl font-black text-white mb-1 tracking-tight">{enquiryPkg.name}</h3>
                <p className="text-white/40 text-xs mb-6">{enquiryPkg.durationLabel} · ₹{enquiryPkg.basePrice?.toLocaleString('en-IN')} per person</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={enquiryForm.name}
                    onChange={(e: any) => setEnquiryForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                  <div className="flex gap-2">
                    <span className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/50 text-sm w-16 text-center">+91</span>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={enquiryForm.phone}
                      onChange={(e: any) => setEnquiryForm(f => ({ ...f, phone: e.target.value }))}
                      maxLength={10}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={enquiryForm.email}
                    onChange={(e: any) => setEnquiryForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                </div>
                <button
                  onClick={submitEnquiry}
                  disabled={enquiryLoading || !enquiryForm.name || !enquiryForm.phone}
                  className="w-full mt-5 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  {enquiryLoading ? (
                    <><svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...</>
                  ) : '🚀 Send Enquiry'}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Customise Package Modal ────────────────────────────── */}
      <CustomisePackageModalTyped
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        package={selectedPkg}
      />
    </div>
  );
};

export default TourPackagesView;