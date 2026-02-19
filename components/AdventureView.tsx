import React, { useState, useEffect, useCallback, useRef } from 'react';
import { API_URL } from '@/config/api';

// 10 curated states shown in the UI
const ALL_INDIAN_STATES = [
  'Himachal Pradesh',
  'Uttarakhand',
  'Rajasthan',
  'Meghalaya',
  'Goa',
  'Kerala',
  'Sikkim',
  'Andaman & Nicobar',
  'Jammu & Kashmir',
  'Arunachal Pradesh',
];

const STATES_WITH_PACKAGES = new Set([
  'Himachal Pradesh', 'Uttarakhand', 'Rajasthan', 'Meghalaya', 'Goa',
]);

// International countries — always shown, metadata hardcoded on frontend
// hasPackages is updated from the /regions API response
const DEFAULT_INTERNATIONAL_COUNTRIES = [
  {
    name: 'Nepal',
    tagline: 'Roof of the World',
    color: 'from-blue-900/80 to-slate-900/90',
    coverImage: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=600',
    hasPackages: false,
  },
  {
    name: 'Bali, Indonesia',
    tagline: 'Island of Gods',
    color: 'from-emerald-900/80 to-teal-900/90',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
    hasPackages: false,
  },
  {
    name: 'Thailand',
    tagline: 'Land of Smiles',
    color: 'from-amber-900/80 to-orange-900/90',
    coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600',
    hasPackages: false,
  },
  {
    name: 'Dubai',
    tagline: 'City of Wonders',
    color: 'from-yellow-900/80 to-amber-900/90',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
    hasPackages: false,
  },
  {
    name: 'Iceland',
    tagline: 'Land of Fire & Ice',
    color: 'from-cyan-900/80 to-blue-900/90',
    coverImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600',
    hasPackages: false,
  },
  {
    name: 'New Zealand',
    tagline: 'Adventure Capital',
    color: 'from-green-900/80 to-emerald-900/90',
    coverImage: 'https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?w=600',
    hasPackages: false,
  },
  {
    name: 'Switzerland',
    tagline: 'Alpine Playground',
    color: 'from-slate-900/80 to-blue-900/90',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    hasPackages: false,
  },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
  Moderate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Hard: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Extreme: 'bg-red-500/20 text-red-400 border-red-500/30',
};

interface AdventurePackage {
  _id: string;
  name: string;
  description: string;
  destinationType: string;
  region: string;
  coverImage: string;
  activities: string[];
  tag: string;
  difficulty: string;
  nights: number;
  durationLabel: string;
  basePrice: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  highlights: string[];
  startLocation: string;
  endLocation: string;
  maxGroupSize: number;
  minAge: number;
  isFeatured: boolean;
}

interface Country {
  name: string;
  tagline: string;
  color: string;
  coverImage: string;
  hasPackages: boolean;
}

const AdventureView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [packages, setPackages] = useState<AdventurePackage[]>([]);
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<Country[]>(DEFAULT_INTERNATIONAL_COUNTRIES);

  const [enquiryPkg, setEnquiryPkg] = useState<AdventurePackage | null>(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '' });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryDone, setEnquiryDone] = useState(false);

  const [detailPkg, setDetailPkg] = useState<AdventurePackage | null>(null);
  const stateScrollRef = useRef<HTMLDivElement>(null);
  const countryScrollRef = useRef<HTMLDivElement>(null);

  // Fetch which regions have packages in the DB, then mark them
  useEffect(() => {
    if (activeTab === 'international') {
      fetch(`${API_URL}/adventures/regions`)
        .then((r) => r.json())
        .then((data) => {
          if (data.success && Array.isArray(data.international)) {
            const withPackages = new Set(
              data.international.map((r: any) => (typeof r === 'string' ? r : r.name))
            );
            setCountries(
              DEFAULT_INTERNATIONAL_COUNTRIES.map((c) => ({
                ...c,
                hasPackages: withPackages.has(c.name),
              }))
            );
          }
        })
        .catch(() => {
          setCountries(DEFAULT_INTERNATIONAL_COUNTRIES);
        });
    }
  }, [activeTab]);

  const fetchPackages = useCallback(async (region: string, type: 'domestic' | 'international') => {
    setLoading(true);
    setPackages([]);
    try {
      const params = new URLSearchParams({ destinationType: type, region });
      const res = await fetch(`${API_URL}/adventures?${params}`);
      const data = await res.json();
      if (data.success) setPackages(data.adventures);
    } catch (err) {
      console.error('Failed to fetch adventures:', err);
    }
    setLoading(false);
  }, []);

  const handleRegionSelect = (region: string, hasPackages = true) => {
    if (!hasPackages) return;
    setSelectedRegion(region);
    fetchPackages(region, activeTab);
  };

  const handleTabChange = (tab: 'domestic' | 'international') => {
    setActiveTab(tab);
    setSelectedRegion(null);
    setPackages([]);
  };

  const openEnquiry = (pkg: AdventurePackage) => {
    setEnquiryPkg(pkg);
    setEnquiryForm({ name: '', phone: '', email: '' });
    setEnquiryDone(false);
  };

  const submitEnquiry = async () => {
    if (!enquiryForm.name || !enquiryForm.phone || !enquiryPkg) return;
    setEnquiryLoading(true);
    try {
      await fetch(`${API_URL}/adventures/${enquiryPkg._id}/enquire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryForm),
      });
      setEnquiryDone(true);
    } catch (err) {
      console.error('Enquiry failed:', err);
    }
    setEnquiryLoading(false);
  };

  const scrollStates = (dir: 'left' | 'right') => {
    stateScrollRef.current?.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' });
  };

  const scrollCountries = (dir: 'left' | 'right') => {
    countryScrollRef.current?.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' });
  };

  const selectedCountry = countries.find((c) => c.name === selectedRegion);

  return (
    <div className="bg-background-dark text-white font-sans overflow-x-hidden min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1600"
            alt="Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/30 to-background-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl w-full">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-primary">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Push Your Limits
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.88] tracking-tighter mb-6 uppercase">
            Born For<br /><span className="text-primary italic">Adventure</span>
          </h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Handpicked thrill-seeking experiences across India and the world — from paragliding over Himalayan valleys to bungee jumping in Queenstown.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button
              onClick={() => { setActiveTab('domestic'); document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-primary/40"
            >Explore India</button>
            <button
              onClick={() => { setActiveTab('international'); document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all"
            >Go International</button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/30 text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-white/3">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: '5', label: 'States with Adventures' },
            { val: '7', label: 'International Countries' },
            { val: '20+', label: 'Unique Experiences' },
            { val: '4.8★', label: 'Average Rating' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-black text-primary">{s.val}</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Explorer ──────────────────────────────────────────────── */}
      <section id="explore-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 rounded-full p-1 flex gap-1 border border-white/10">
            <button
              onClick={() => handleTabChange('domestic')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'domestic' ? 'bg-primary text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
            >Domestic</button>
            <button
              onClick={() => handleTabChange('international')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'international' ? 'bg-primary text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
            >International</button>
          </div>
        </div>

        {/* ── DOMESTIC ───────────────────────────────────────────────── */}
        {activeTab === 'domestic' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-3">
                Incredible <span className="text-primary italic">India</span>
              </h2>
              <p className="text-white/40 text-sm font-medium max-w-lg mx-auto">
                Pick a state to explore its adventure packages. More destinations coming soon!
              </p>
            </div>

            {/* Horizontal scrollable chips */}
            <div className="relative">
              <button onClick={() => scrollStates('left')} className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>

              <div
                ref={stateScrollRef}
                className="flex gap-3 overflow-x-auto pb-2 px-1 sm:px-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {ALL_INDIAN_STATES.map((state) => {
                  const hasPackages = STATES_WITH_PACKAGES.has(state);
                  const isSelected = selectedRegion === state;
                  return (
                    <button
                      key={state}
                      onClick={() => handleRegionSelect(state, hasPackages)}
                      disabled={!hasPackages}
                      className={`group flex-shrink-0 flex items-center gap-2.5 rounded-full px-4 py-3 border transition-all duration-200 whitespace-nowrap
                        ${isSelected
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                          : hasPackages
                            ? 'bg-white/8 border-primary/30 text-white hover:bg-primary/15 hover:border-primary/60 cursor-pointer hover:scale-105'
                            : 'bg-white/3 border-white/5 text-white/30 cursor-not-allowed'
                        }`}
                    >
                      <span className="text-sm font-bold">{state}</span>
                      {hasPackages && !isSelected && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                      {isSelected && <span className="material-symbols-outlined text-sm">check</span>}
                      {!hasPackages && <span className="text-[9px] text-white/20 font-black uppercase">Soon</span>}
                    </button>
                  );
                })}
              </div>

              <button onClick={() => scrollStates('right')} className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 items-center justify-center transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
            <p className="text-center text-[11px] text-white/20 font-medium mt-3 sm:hidden">← Swipe to see more states →</p>

            {/* State packages */}
            {selectedRegion && (
              <div className="mt-12">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <button onClick={() => { setSelectedRegion(null); setPackages([]); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>All States
                  </button>
                  <div className="h-px flex-1 bg-white/10 hidden sm:block" />
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase">
                    {selectedRegion}
                  </h3>
                </div>
                {loading ? (
                  <div className="flex justify-center py-24"><div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
                ) : packages.length === 0 ? (
                  <div className="text-center py-24 text-white/30">
                    <p className="text-xl font-black">No packages yet</p>
                    <p className="text-sm mt-2">Check back soon or request a custom trip!</p>
                  </div>
                ) : (
                  <PackageGrid packages={packages} onBook={openEnquiry} onDetail={setDetailPkg} />
                )}
              </div>
            )}
          </div>
        )}

        {/* ── INTERNATIONAL ──────────────────────────────────────────── */}
        {activeTab === 'international' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-3">
                World <span className="text-primary italic">Destinations</span>
              </h2>
              <p className="text-white/40 text-sm font-medium max-w-lg mx-auto">
                Hand-picked countries offering the planet's most exhilarating adventures.
              </p>
            </div>

            {/* ── Country chips — same layout as state filter ── */}
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
                {countries.map((country) => {
                  const isSelected = selectedRegion === country.name;
                  return (
                    <button
                      key={country.name}
                      onClick={() => handleRegionSelect(country.name, country.hasPackages)}
                      disabled={!country.hasPackages}
                      className={`group flex-shrink-0 flex items-center gap-2.5 rounded-full px-4 py-3 border transition-all duration-200 whitespace-nowrap
                        ${isSelected
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                          : country.hasPackages
                            ? 'bg-white/8 border-primary/30 text-white hover:bg-primary/15 hover:border-primary/60 cursor-pointer hover:scale-105'
                            : 'bg-white/3 border-white/5 text-white/30 cursor-not-allowed'
                        }`}
                    >
                      <span className="text-sm font-bold">{country.name}</span>
                      {/* Tagline shown as subdued suffix on desktop */}
                      <span className={`text-[10px] font-medium hidden sm:inline ${isSelected ? 'text-white/70' : 'text-white/30'}`}>
                        · {country.tagline}
                      </span>
                      {country.hasPackages && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      )}
                      {isSelected && (
                        <span className="material-symbols-outlined text-sm">check</span>
                      )}
                      {!country.hasPackages && (
                        <span className="text-[9px] text-white/20 font-black uppercase">Soon</span>
                      )}
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
            <p className="text-center text-[11px] text-white/20 font-medium mt-3 sm:hidden">← Swipe to see more countries →</p>

            {/* Country packages */}
            {selectedRegion && selectedCountry && (
              <div className="mt-12">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <button
                    onClick={() => { setSelectedRegion(null); setPackages([]); }}
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>All Countries
                  </button>
                  <div className="h-px flex-1 bg-white/10 hidden sm:block" />
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase">
                    {selectedCountry.name}
                  </h3>
                </div>
                {loading ? (
                  <div className="flex justify-center py-24">
                    <div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : packages.length === 0 ? (
                  <div className="text-center py-24 text-white/30">
                    <p className="text-xl font-black">No packages yet</p>
                  </div>
                ) : (
                  <PackageGrid packages={packages} onBook={openEnquiry} onDetail={setDetailPkg} />
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 p-7 sm:p-14 text-center bg-gradient-to-br from-primary/10 via-background-dark to-background-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
              Don't see your <span className="text-primary">dream adventure?</span>
            </h3>
            <p className="text-white/50 max-w-md mx-auto mb-8 text-sm font-medium">
              We'll plan a fully custom adventure itinerary — just tell us where you want to go.
            </p>
            <a
              href="https://wa.me/919876543211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Plan My Adventure on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Detail Modal ──────────────────────────────────────────────── */}
      {detailPkg && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setDetailPkg(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div className="relative w-full sm:max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 sm:h-72">
              <img src={detailPkg.coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'} alt={detailPkg.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              <button onClick={() => setDetailPkg(null)} className="absolute top-4 right-4 size-9 rounded-full bg-black/60 flex items-center justify-center">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="absolute bottom-4 left-5">
                <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black border ${DIFFICULTY_COLORS[detailPkg.difficulty]}`}>{detailPkg.difficulty}</div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {detailPkg.activities.map((a) => (
                  <span key={a} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/60 font-bold">{a}</span>
                ))}
              </div>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight uppercase mb-1">{detailPkg.name}</h2>
              <p className="text-white/50 text-xs sm:text-sm mb-4">{detailPkg.region} · {detailPkg.durationLabel} · {detailPkg.startLocation} → {detailPkg.endLocation}</p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{detailPkg.description}</p>
              {detailPkg.highlights.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {detailPkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70"><span className="text-primary mt-0.5 shrink-0">✦</span>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex items-center justify-between border-t border-white/8 pt-5 gap-4">
                <div>
                  <div className="text-[10px] text-white/30 font-black uppercase">Starting from</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">₹{detailPkg.basePrice.toLocaleString('en-IN')}</div>
                  <div className="text-[9px] text-white/30">per person · Max {detailPkg.maxGroupSize} · Age {detailPkg.minAge}+</div>
                </div>
                <button onClick={() => { setDetailPkg(null); openEnquiry(detailPkg); }} className="bg-primary hover:bg-red-600 text-white px-6 sm:px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shrink-0">
                  Book Now<span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Enquiry Modal ─────────────────────────────────────────────── */}
      {enquiryPkg && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setEnquiryPkg(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div className="relative w-full sm:max-w-md bg-[#0d0d0d] border border-white/10 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5 sm:hidden" />
            <button onClick={() => setEnquiryPkg(null)} className="absolute top-5 right-5 size-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            {enquiryDone ? (
              <div className="text-center py-8">
                <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Adventure Awaits!</h3>
                <p className="text-white/50 text-sm">Our adventure expert will reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-1">Book Adventure</p>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1 tracking-tight pr-8">{enquiryPkg.name}</h3>
                <p className="text-white/40 text-xs mb-5">{enquiryPkg.durationLabel} · {enquiryPkg.region} · ₹{enquiryPkg.basePrice.toLocaleString('en-IN')} per person</p>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name *" value={enquiryForm.name} onChange={(e) => setEnquiryForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" />
                  <div className="flex gap-2">
                    <span className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white/50 text-sm w-14 text-center shrink-0">+91</span>
                    <input type="tel" placeholder="Phone Number *" value={enquiryForm.phone} onChange={(e) => setEnquiryForm(f => ({ ...f, phone: e.target.value }))} maxLength={10} className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" />
                  </div>
                  <input type="email" placeholder="Email (optional)" value={enquiryForm.email} onChange={(e) => setEnquiryForm(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" />
                </div>
                <button onClick={submitEnquiry} disabled={enquiryLoading || !enquiryForm.name || !enquiryForm.phone} className="w-full mt-5 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  {enquiryLoading
                    ? <><svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                    : 'Send Enquiry'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Package Grid ──────────────────────────────────────────────────────────────
interface PackageGridProps {
  packages: AdventurePackage[];
  onBook: (pkg: AdventurePackage) => void;
  onDetail: (pkg: AdventurePackage) => void;
}

const PackageGrid: React.FC<PackageGridProps> = ({ packages, onBook, onDetail }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
    {packages.map((pkg) => (
      <div key={pkg._id} className="group relative rounded-3xl overflow-hidden border border-white/8 bg-white/3 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <img
            src={pkg.coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {pkg.tag && <span className="bg-primary/80 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">{pkg.tag}</span>}
            {pkg.isFeatured && <span className="bg-yellow-500/80 text-black text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Featured</span>}
          </div>
          {pkg.rating > 0 && (
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-white text-[11px] font-bold">{pkg.rating}</span>
            </div>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {pkg.activities.slice(0, 3).map((a) => (
              <span key={a} className="text-[9px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/50 font-bold">{a}</span>
            ))}
          </div>
          <h3 className="text-base sm:text-lg font-black tracking-tight uppercase leading-tight mb-1">{pkg.name}</h3>
          <p className="text-white/40 text-xs mb-3 line-clamp-2 font-medium">{pkg.description}</p>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`text-[10px] px-3 py-1 rounded-full border font-black ${DIFFICULTY_COLORS[pkg.difficulty]}`}>{pkg.difficulty}</span>
            <span className="text-[10px] text-white/30 font-bold">{pkg.durationLabel}</span>
            {pkg.reviewCount > 0 && <span className="text-[10px] text-white/30 font-bold ml-auto">{pkg.reviewCount} reviews</span>}
          </div>
          <div className="flex items-center justify-between border-t border-white/8 pt-4">
            <div>
              <div className="text-[9px] text-white/30 font-black uppercase">From</div>
              <div className="text-lg sm:text-xl font-black text-white">₹{pkg.basePrice.toLocaleString('en-IN')}</div>
              <div className="text-[9px] text-white/30">per person</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onDetail(pkg)} className="px-3 sm:px-4 py-3 bg-white/8 hover:bg-white/15 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10" title="View details">
                <span className="material-symbols-outlined text-sm">info</span>
              </button>
              <button onClick={() => onBook(pkg)} className="bg-primary hover:bg-red-600 text-white px-4 sm:px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-1">
                Book<span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AdventureView;