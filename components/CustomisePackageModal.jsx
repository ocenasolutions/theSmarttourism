import React, { useState } from 'react';
import { API_URL } from '@/config/api';

const TAXI_OPTIONS = [
  { id: 'swift', label: 'Swift Dzire', sub: '4 Seater', icon: '🚗' },
  { id: 'ertiga', label: 'Ertiga', sub: '6 Seater', icon: '🚙' },
  { id: 'innova', label: 'Innova', sub: '6/7 Seater', icon: '🚐' },
  { id: 'kia', label: 'Kia Carens', sub: '6 Seater', icon: '🚙' },
  { id: 'crysta', label: 'Innova Crysta', sub: '7 Seater', icon: '🚐' },
];

const HOTEL_STARS = ['2 Star', '3 Star', '4 Star', '5 Star'];
const TRAVEL_MODES = ['Flight', 'Train', 'Bus', 'Taxi'];
const MEAL_PLANS = [
  { id: 'MAP', label: 'MAP', sub: 'Breakfast & Dinner' },
  { id: 'CP', label: 'CP', sub: 'Breakfast Only' },
  { id: 'EP', label: 'EP', sub: 'No Meals' },
  { id: 'AP', label: 'AP', sub: 'All Meals' },
];

const initialForm = {
  packageType: 'Domestic',
  startDate: '',
  endDate: '',
  adults: 1,
  children: 0,
  infants: 0,
  pickupLocation: '',
  pickupMode: 'Flight',
  dropLocation: '',
  dropMode: 'Flight',
  hotelCategory: '3 Star',
  totalRooms: 1,
  mealPlan: 'MAP',
  taxiType: 'Swift Dzire (4 Seater)',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
};

export default function CustomisePackageModal({ isOpen, onClose, package: pkg = null }) {
  const [form, setForm] = useState({ ...initialForm, packageType: pkg?.packageType || 'Domestic' });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalPersons = form.adults + form.children + form.infants;

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const body = {
        ...form,
        packageId: pkg?._id || null,
        taxiType: TAXI_OPTIONS.find((t) => form.taxiType.startsWith(t.label))
          ? `${TAXI_OPTIONS.find((t) => form.taxiType.startsWith(t.label)).label} (${TAXI_OPTIONS.find((t) => form.taxiType.startsWith(t.label)).sub})`
          : form.taxiType,
      };
      const res = await fetch(`${API_URL}/bookings/custom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setForm({ ...initialForm });
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  // ── Shared input style ─────────────────────────────────────
  const inputCls =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm';

  // ── Radio card component ──────────────────────────────────
  const RadioCard = ({ name, value, current, onChange, label, sub, icon }) => (
    <label
      className={`flex-1 flex flex-col items-center justify-center gap-1 p-3 rounded-xl border cursor-pointer transition-all text-center text-xs font-semibold
        ${current === value
          ? 'border-primary bg-primary/15 text-white'
          : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'
        }`}
    >
      <input type="radio" name={name} value={value} checked={current === value} onChange={() => onChange(value)} className="sr-only" />
      {icon && <span className="text-base">{icon}</span>}
      <span>{label}</span>
      {sub && <span className="text-white/40 font-normal text-[10px]">{sub}</span>}
    </label>
  );

  // ── Number stepper ────────────────────────────────────────
  const Stepper = ({ label, sub, value, min = 0, max = 20, onChange }) => (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        {sub && <p className="text-[11px] text-white/40">{sub}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="size-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-white transition-all font-bold"
        >−</button>
        <span className="w-6 text-center font-black text-white">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="size-8 rounded-full bg-primary/80 hover:bg-primary disabled:opacity-30 flex items-center justify-center text-white transition-all font-bold"
        >+</button>
      </div>
    </div>
  );

  // ── Section label ─────────────────────────────────────────
  const SectionLabel = ({ children }) => (
    <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-3">{children}</p>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-white/5 shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-black text-primary mb-1">Customise Package</p>
            <h2 className="text-2xl font-black tracking-tight text-white leading-none">
              {pkg ? pkg.name : 'Build Your Own Tour'}
            </h2>
          </div>
          <button onClick={handleClose} className="size-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* ── Step indicator ────────────────────────────────── */}
        {!submitted && (
          <div className="flex gap-2 px-8 py-4 shrink-0">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-white/10'}`} />
              </div>
            ))}
          </div>
        )}

        {/* ── Scrollable body ───────────────────────────────── */}
        <div className="overflow-y-auto flex-1 px-8 pb-8 scrollbar-thin scrollbar-thumb-white/10">

          {submitted ? (
            /* ── Success screen ───────────────────────────── */
            <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
              <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Booking Request Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs mx-auto">Our travel expert will contact you within 24 hours with a custom quote.</p>
              </div>
              <button onClick={handleClose} className="bg-primary hover:bg-red-600 text-white px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                Close
              </button>
            </div>
          ) : step === 1 ? (
            /* ── Step 1: Package type, dates, passengers ─────── */
            <div className="space-y-6 pt-2">

              {/* Package Type */}
              <div>
                <SectionLabel>Package Type</SectionLabel>
                <div className="flex gap-3">
                  <RadioCard name="pkgType" value="Domestic" current={form.packageType} onChange={(v) => set('packageType', v)} label="Domestic" icon="🇮🇳" />
                  <RadioCard name="pkgType" value="International" current={form.packageType} onChange={(v) => set('packageType', v)} label="International" icon="✈️" />
                </div>
              </div>

              {/* Dates */}
              <div>
                <SectionLabel>Travel Dates</SectionLabel>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-white/40 mb-1.5">Start Date</label>
                    <input type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)} className={inputCls} min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/40 mb-1.5">End Date</label>
                    <input type="date" value={form.endDate} onChange={(e) => set('endDate', e.target.value)} className={inputCls} min={form.startDate || new Date().toISOString().split('T')[0]} />
                  </div>
                </div>
              </div>

              {/* Passengers */}
              <div>
                <SectionLabel>Total Travellers — {totalPersons} person{totalPersons !== 1 ? 's' : ''}</SectionLabel>
                <div className="bg-white/5 rounded-2xl px-5 py-1">
                  <Stepper label="Adults" sub="Above 12 years" value={form.adults} min={1} onChange={(v) => set('adults', v)} />
                  <Stepper label="Children" sub="5 to 11 years" value={form.children} min={0} onChange={(v) => set('children', v)} />
                  <Stepper label="Infants" sub="Below 5 years" value={form.infants} min={0} onChange={(v) => set('infants', v)} />
                </div>
              </div>
            </div>

          ) : step === 2 ? (
            /* ── Step 2: Pickup/Drop, Hotel, Meals ─────────────── */
            <div className="space-y-6 pt-2">

              {/* Pickup */}
              <div>
                <SectionLabel>Pickup Details</SectionLabel>
                <input
                  type="text"
                  placeholder="Pickup Location (city / airport)"
                  value={form.pickupLocation}
                  onChange={(e) => set('pickupLocation', e.target.value)}
                  className={`${inputCls} mb-3`}
                />
                <div className="flex gap-2">
                  {TRAVEL_MODES.map((m) => (
                    <RadioCard key={m} name="pickupMode" value={m} current={form.pickupMode} onChange={(v) => set('pickupMode', v)} label={m} />
                  ))}
                </div>
              </div>

              {/* Drop */}
              <div>
                <SectionLabel>Drop Details</SectionLabel>
                <input
                  type="text"
                  placeholder="Drop Location (city / airport)"
                  value={form.dropLocation}
                  onChange={(e) => set('dropLocation', e.target.value)}
                  className={`${inputCls} mb-3`}
                />
                <div className="flex gap-2">
                  {TRAVEL_MODES.map((m) => (
                    <RadioCard key={m} name="dropMode" value={m} current={form.dropMode} onChange={(v) => set('dropMode', v)} label={m} />
                  ))}
                </div>
              </div>

              {/* Hotel Category */}
              <div>
                <SectionLabel>Hotel Category</SectionLabel>
                <div className="flex gap-2">
                  {HOTEL_STARS.map((s) => (
                    <RadioCard key={s} name="hotel" value={s} current={form.hotelCategory} onChange={(v) => set('hotelCategory', v)} label={s.replace(' Star', '★')} />
                  ))}
                </div>
              </div>

              {/* Total Rooms */}
              <div>
                <SectionLabel>Total Rooms</SectionLabel>
                <div className="bg-white/5 rounded-2xl px-5 py-1">
                  <Stepper label="Rooms Required" sub={`For ${totalPersons} person${totalPersons !== 1 ? 's' : ''}`} value={form.totalRooms} min={1} max={10} onChange={(v) => set('totalRooms', v)} />
                </div>
              </div>

              {/* Meal Plan */}
              <div>
                <SectionLabel>Meal Plan</SectionLabel>
                <div className="flex gap-2">
                  {MEAL_PLANS.map((m) => (
                    <RadioCard key={m.id} name="meal" value={m.id} current={form.mealPlan} onChange={(v) => set('mealPlan', v)} label={m.label} sub={m.sub} />
                  ))}
                </div>
              </div>
            </div>

          ) : (
            /* ── Step 3: Taxi + Contact ──────────────────────────── */
            <div className="space-y-6 pt-2">

              {/* Taxi Selection */}
              <div>
                <SectionLabel>Preferred Taxi</SectionLabel>
                <div className="space-y-2">
                  {TAXI_OPTIONS.map((t) => {
                    const val = `${t.label} (${t.sub})`;
                    return (
                      <label
                        key={t.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all
                          ${form.taxiType === val
                            ? 'border-primary bg-primary/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                      >
                        <input type="radio" name="taxi" value={val} checked={form.taxiType === val} onChange={() => set('taxiType', val)} className="sr-only" />
                        <span className="text-2xl">{t.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white">{t.label}</p>
                          <p className="text-xs text-white/40">{t.sub}</p>
                        </div>
                        <div className={`size-5 rounded-full border-2 flex items-center justify-center transition-all
                          ${form.taxiType === val ? 'border-primary bg-primary' : 'border-white/20'}`}>
                          {form.taxiType === val && <div className="size-2 rounded-full bg-white" />}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <SectionLabel>Your Contact Details</SectionLabel>
                <div className="space-y-3">
                  <input type="text" placeholder="Full Name" value={form.contactName} onChange={(e) => set('contactName', e.target.value)} className={inputCls} />
                  <input type="email" placeholder="Email Address" value={form.contactEmail} onChange={(e) => set('contactEmail', e.target.value)} className={inputCls} />
                  <div className="flex gap-3">
                    <span className={`${inputCls} w-20 text-center`}>+91</span>
                    <input type="tel" placeholder="Phone Number" value={form.contactPhone} onChange={(e) => set('contactPhone', e.target.value)} className={`${inputCls} flex-1`} maxLength={10} />
                  </div>
                </div>
              </div>

              {/* Summary chip */}
              <div className="bg-white/5 rounded-2xl p-5 space-y-2 text-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Booking Summary</p>
                <div className="flex justify-between text-white/70"><span>Type</span><span className="text-white font-semibold">{form.packageType}</span></div>
                <div className="flex justify-between text-white/70"><span>Travellers</span><span className="text-white font-semibold">{totalPersons} persons</span></div>
                <div className="flex justify-between text-white/70"><span>Hotel</span><span className="text-white font-semibold">{form.hotelCategory}</span></div>
                <div className="flex justify-between text-white/70"><span>Meals</span><span className="text-white font-semibold">{form.mealPlan}</span></div>
                <div className="flex justify-between text-white/70"><span>Taxi</span><span className="text-white font-semibold truncate max-w-[160px]">{form.taxiType}</span></div>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer actions ─────────────────────────────────── */}
        {!submitted && (
          <div className="flex gap-3 px-8 py-5 border-t border-white/5 shrink-0">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(s => s - 1)}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(s => s + 1)}
                disabled={
                  (step === 1 && (!form.startDate || !form.endDate)) ||
                  (step === 2 && (!form.pickupLocation || !form.dropLocation))
                }
                className="flex-1 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !form.contactName || !form.contactEmail || !form.contactPhone}
                className="flex-1 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...</>
                ) : '🚀 Submit Enquiry'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}