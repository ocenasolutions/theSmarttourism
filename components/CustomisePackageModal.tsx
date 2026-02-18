import React, { useState } from 'react';
import { API_URL } from '@/config/api';

// ── Transport sub-types ────────────────────────────────────────
const FLIGHT_CLASSES = ['Economy', 'Business', 'Premium Economy'];
const TRAIN_CLASSES  = ['AC', 'Non-AC'];
const BUS_CLASSES    = ['AC', 'Non-AC', 'Sleeper'];
const TEMPO_VARIANTS = ['Normal', 'Urbania', 'Car Van'];

const TAXI_VEHICLES = [
  { value: 'Swift Dzire (4 Seater)',   label: 'Swift Dzire',    sub: '4 Seater'   },
  { value: 'Ertiga (6 Seater)',        label: 'Ertiga',         sub: '6 Seater'   },
  { value: 'Innova (6/7 Seater)',      label: 'Innova',         sub: '6/7 Seater' },
  { value: 'Kia Carens (6 Seater)',    label: 'Kia Carens',     sub: '6 Seater'   },
  { value: 'Innova Crysta (7 Seater)', label: 'Innova Crysta',  sub: '7 Seater'   },
];

const HOTEL_STARS  = ['2 Star', '3 Star', '4 Star', '5 Star'];
const TRAVEL_MODES = ['Flight', 'Train', 'Bus', 'Taxi', 'Tempo Traveller'] as const;
type TravelMode = typeof TRAVEL_MODES[number];

const MEAL_PLANS = [
  { id: 'MAP', label: 'MAP', sub: 'Breakfast & Dinner' },
  { id: 'CP',  label: 'CP',  sub: 'Breakfast Only'    },
  { id: 'EP',  label: 'EP',  sub: 'No Meals'          },
  { id: 'AP',  label: 'AP',  sub: 'All Meals'         },
];

/** Chip options per mode */
function subTypesFor(mode: TravelMode): string[] | null {
  if (mode === 'Flight')          return FLIGHT_CLASSES;
  if (mode === 'Train')           return TRAIN_CLASSES;
  if (mode === 'Bus')             return BUS_CLASSES;
  if (mode === 'Tempo Traveller') return TEMPO_VARIANTS;
  return null; // Taxi — handled separately with vehicle list
}

function defaultSubType(mode: TravelMode): string {
  const opts = subTypesFor(mode);
  return opts ? opts[0] : '';
}

const initialForm = {
  packageType:    'Domestic',
  startDate:      '',
  endDate:        '',
  adults:         1,
  children:       0,
  infants:        0,
  pickupLocation: '',
  pickupMode:     'Flight' as TravelMode,
  pickupSubType:  'Economy',
  pickupTaxi:     'Swift Dzire (4 Seater)',
  dropLocation:   '',
  dropMode:       'Flight' as TravelMode,
  dropSubType:    'Economy',
  dropTaxi:       'Swift Dzire (4 Seater)',
  hotelCategory:  '3 Star',
  totalRooms:     1,
  mealPlan:       'MAP',
  contactName:    '',
  contactEmail:   '',
  contactPhone:   '',
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  package?: any;
}

// ── Shared styles ─────────────────────────────────────────────
const inputCls =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm';

// ── Reusable components (OUTSIDE main component) ──────────────
const Stepper = ({ label, sub = '', value, min = 0, max = 20, onChange }: any) => (
  <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
    <div>
      <p className="text-sm font-semibold text-white">{label}</p>
      {sub && <p className="text-[11px] text-white/40">{sub}</p>}
    </div>
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
        className="size-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-white transition-all font-bold">−</button>
      <span className="w-6 text-center font-black text-white">{value}</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
        className="size-8 rounded-full bg-primary/80 hover:bg-primary disabled:opacity-30 flex items-center justify-center text-white transition-all font-bold">+</button>
    </div>
  </div>
);

const SectionLabel = ({ children }: any) => (
  <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-3">{children}</p>
);

const ChipLabel = ({ text }: { text: string }) => (
  <span className="text-[10px] text-white/30 font-black uppercase tracking-wider self-center mr-1">{text}</span>
);

/** Full transport picker for one direction - MOVED OUTSIDE */
const TransportPicker = ({
  sectionTitle,
  locationPlaceholder,
  locationValue,
  onLocationChange,
  mode,
  onModeChange,
  subType,
  onSubTypeChange,
  taxi,
  onTaxiChange,
}: {
  sectionTitle: string;
  locationPlaceholder: string;
  locationValue: string;
  onLocationChange: (value: string) => void;
  mode: TravelMode;
  onModeChange: (mode: TravelMode, defaultSubType: string) => void;
  subType: string;
  onSubTypeChange: (subType: string) => void;
  taxi: string;
  onTaxiChange: (taxi: string) => void;
}) => {
  const subTypes = subTypesFor(mode);

  return (
    <div>
      <SectionLabel>{sectionTitle}</SectionLabel>

      {/* Location input */}
      <input
        type="text"
        placeholder={locationPlaceholder}
        value={locationValue}
        onChange={(e) => onLocationChange(e.target.value)}
        className={`${inputCls} mb-3`}
      />

      {/* Mode pills — wraps on small screens */}
      <div className="flex flex-wrap gap-2 mb-3">
        {TRAVEL_MODES.map((m) => (
          <label
            key={m}
            className={`px-3 py-2 rounded-xl border cursor-pointer transition-all text-xs font-semibold whitespace-nowrap
              ${mode === m
                ? 'border-primary bg-primary/15 text-white'
                : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'}`}
          >
            <input
              type="radio"
              name={`mode-${sectionTitle}`}
              value={m}
              checked={mode === m}
              onChange={() => onModeChange(m, defaultSubType(m))}
              className="sr-only"
            />
            {m}
          </label>
        ))}
      </div>

      {/* Sub-type chips: Flight / Train / Bus / Tempo Traveller */}
      {subTypes && (
        <div className="flex gap-2 flex-wrap items-center pl-1 mb-1">
          <ChipLabel text={mode === 'Tempo Traveller' ? 'Variant:' : 'Class:'} />
          {subTypes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSubTypeChange(s)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all
                ${subType === s
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-white/25'}`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Taxi vehicle list */}
      {mode === 'Taxi' && (
        <div className="mt-2 space-y-1.5">
          <ChipLabel text="Vehicle:" />
          <div className="grid grid-cols-1 gap-1.5 mt-1">
            {TAXI_VEHICLES.map((t) => (
              <label
                key={t.value}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl border cursor-pointer transition-all
                  ${taxi === t.value
                    ? 'border-primary bg-primary/10 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/25'}`}
              >
                <input
                  type="radio"
                  name={`taxi-${sectionTitle}`}
                  value={t.value}
                  checked={taxi === t.value}
                  onChange={() => onTaxiChange(t.value)}
                  className="sr-only"
                />
                <span className="text-sm font-semibold">{t.label}</span>
                <span className="text-[11px] text-white/40">{t.sub}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CustomisePackageModal({ isOpen, onClose, package: pkg = null }: Props) {
  const [form, setForm]           = useState({ ...initialForm, packageType: pkg?.packageType || 'Domestic' });
  const [step, setStep]           = useState(1);
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalPersons = form.adults + form.children + form.infants;
  const set = (field: string, value: any) => setForm((f) => ({ ...f, [field]: value }));

  /** Human-readable label for summary */
  const modeLabel = (mode: string, subType: string, taxi: string) => {
    if (mode === 'Taxi')           return `Taxi · ${taxi}`;
    if (mode === 'Tempo Traveller') return `Tempo Traveller · ${subType}`;
    return subType ? `${mode} · ${subType}` : mode;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const body = {
        ...form,
        packageId:      pkg?._id || null,
        pickupDisplay:  modeLabel(form.pickupMode, form.pickupSubType, form.pickupTaxi),
        dropDisplay:    modeLabel(form.dropMode,   form.dropSubType,   form.dropTaxi),
      };
      const res  = await fetch(`${API_URL}/bookings/custom`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(body),
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-white/5 shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-black text-primary mb-1">Customise Package</p>
            <h2 className="text-2xl font-black tracking-tight text-white leading-none">
              {pkg ? pkg.name : 'Build Your Own Tour'}
            </h2>
          </div>
          <button onClick={handleClose}
            className="size-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* ── Step indicator ─────────────────────────────────── */}
        {!submitted && (
          <div className="flex gap-2 px-8 py-4 shrink-0">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div className={`h-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-white/10'}`} />
              </div>
            ))}
          </div>
        )}

        {/* ── Body ───────────────────────────────────────────── */}
        <div className="overflow-y-auto flex-1 px-8 pb-8 scrollbar-thin scrollbar-thumb-white/10">

          {submitted ? (
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
              <button onClick={handleClose}
                className="bg-primary hover:bg-red-600 text-white px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                Close
              </button>
            </div>

          ) : step === 1 ? (
            /* ── Step 1: Type · Dates · Passengers ─────────── */
            <div className="space-y-6 pt-2">
              <div>
                <SectionLabel>Package Type</SectionLabel>
                <div className="flex gap-3">
                  {(['Domestic', 'International'] as const).map((t) => (
                    <label key={t}
                      className={`flex-1 flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all text-center text-xs font-semibold
                        ${form.packageType === t ? 'border-primary bg-primary/15 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'}`}>
                      <input type="radio" name="pkgType" value={t} checked={form.packageType === t}
                        onChange={() => set('packageType', t)} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>Travel Dates</SectionLabel>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-white/40 mb-1.5">Start Date</label>
                    <input type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)}
                      className={inputCls} min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/40 mb-1.5">End Date</label>
                    <input type="date" value={form.endDate} onChange={(e) => set('endDate', e.target.value)}
                      className={inputCls} min={form.startDate || new Date().toISOString().split('T')[0]} />
                  </div>
                </div>
              </div>

              <div>
                <SectionLabel>Total Travellers — {totalPersons} person{totalPersons !== 1 ? 's' : ''}</SectionLabel>
                <div className="bg-white/5 rounded-2xl px-5 py-1">
                  <Stepper label="Adults"   sub="Above 12 years" value={form.adults}   min={1} onChange={(v: number) => set('adults',   v)} />
                  <Stepper label="Children" sub="5 to 11 years"  value={form.children} min={0} onChange={(v: number) => set('children', v)} />
                  <Stepper label="Infants"  sub="Below 5 years"  value={form.infants}  min={0} onChange={(v: number) => set('infants',  v)} />
                </div>
              </div>
            </div>

          ) : step === 2 ? (
            /* ── Step 2: Transport · Hotel · Meals ──────────── */
            <div className="space-y-6 pt-2">
              <TransportPicker
                sectionTitle="Pickup Details"
                locationPlaceholder="Pickup Location (city / airport)"
                locationValue={form.pickupLocation}
                onLocationChange={(val) => set('pickupLocation', val)}
                mode={form.pickupMode}
                onModeChange={(mode, defaultSub) => {
                  set('pickupMode', mode);
                  set('pickupSubType', defaultSub);
                }}
                subType={form.pickupSubType}
                onSubTypeChange={(val) => set('pickupSubType', val)}
                taxi={form.pickupTaxi}
                onTaxiChange={(val) => set('pickupTaxi', val)}
              />

              <TransportPicker
                sectionTitle="Drop Details"
                locationPlaceholder="Drop Location (city / airport)"
                locationValue={form.dropLocation}
                onLocationChange={(val) => set('dropLocation', val)}
                mode={form.dropMode}
                onModeChange={(mode, defaultSub) => {
                  set('dropMode', mode);
                  set('dropSubType', defaultSub);
                }}
                subType={form.dropSubType}
                onSubTypeChange={(val) => set('dropSubType', val)}
                taxi={form.dropTaxi}
                onTaxiChange={(val) => set('dropTaxi', val)}
              />

              <div>
                <SectionLabel>Hotel Category</SectionLabel>
                <div className="flex gap-2">
                  {HOTEL_STARS.map((s) => (
                    <label key={s}
                      className={`flex-1 flex flex-col items-center justify-center gap-1 p-3 rounded-xl border cursor-pointer transition-all text-center text-xs font-semibold
                        ${form.hotelCategory === s ? 'border-primary bg-primary/15 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'}`}>
                      <input type="radio" name="hotel" value={s} checked={form.hotelCategory === s}
                        onChange={() => set('hotelCategory', s)} className="sr-only" />
                      {s.replace(' Star', '★')}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>Total Rooms</SectionLabel>
                <div className="bg-white/5 rounded-2xl px-5 py-1">
                  <Stepper label="Rooms Required" sub={`For ${totalPersons} person${totalPersons !== 1 ? 's' : ''}`}
                    value={form.totalRooms} min={1} max={10} onChange={(v: number) => set('totalRooms', v)} />
                </div>
              </div>

              <div>
                <SectionLabel>Meal Plan</SectionLabel>
                <div className="flex gap-2">
                  {MEAL_PLANS.map((m) => (
                    <label key={m.id}
                      className={`flex-1 flex flex-col items-center justify-center gap-1 p-3 rounded-xl border cursor-pointer transition-all text-center text-xs font-semibold
                        ${form.mealPlan === m.id ? 'border-primary bg-primary/15 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'}`}>
                      <input type="radio" name="meal" value={m.id} checked={form.mealPlan === m.id}
                        onChange={() => set('mealPlan', m.id)} className="sr-only" />
                      <span>{m.label}</span>
                      <span className="text-white/40 font-normal text-[10px]">{m.sub}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

          ) : (
            /* ── Step 3: Contact + Summary ───────────────────── */
            <div className="space-y-6 pt-2">
              <div>
                <SectionLabel>Your Contact Details</SectionLabel>
                <div className="space-y-3">
                  <input type="text"  placeholder="Full Name"     value={form.contactName}  onChange={(e) => set('contactName',  e.target.value)} className={inputCls} />
                  <input type="email" placeholder="Email Address" value={form.contactEmail} onChange={(e) => set('contactEmail', e.target.value)} className={inputCls} />
                  <div className="flex gap-3">
                    <span className={`${inputCls} w-20 text-center`}>+91</span>
                    <input type="tel" placeholder="Phone Number" value={form.contactPhone}
                      onChange={(e) => set('contactPhone', e.target.value)}
                      className={`${inputCls} flex-1`} maxLength={10} />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 space-y-2 text-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Booking Summary</p>
                {([
                  ['Type',       form.packageType],
                  ['Travellers', `${totalPersons} persons`],
                  ['Pickup',     `${form.pickupLocation || '—'} · ${modeLabel(form.pickupMode, form.pickupSubType, form.pickupTaxi)}`],
                  ['Drop',       `${form.dropLocation   || '—'} · ${modeLabel(form.dropMode,   form.dropSubType,   form.dropTaxi)}`],
                  ['Hotel',      form.hotelCategory],
                  ['Meals',      form.mealPlan],
                ] as [string, string][]).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-white/70">
                    <span>{k}</span>
                    <span className="text-white font-semibold truncate max-w-[200px] text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        {!submitted && (
          <div className="flex gap-3 px-8 py-5 border-t border-white/5 shrink-0">
            {step > 1 && (
              <button type="button" onClick={() => setStep((s) => s - 1)}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={() => setStep((s) => s + 1)}
                disabled={
                  (step === 1 && (!form.startDate || !form.endDate)) ||
                  (step === 2 && (!form.pickupLocation || !form.dropLocation))
                }
                className="flex-1 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                Continue →
              </button>
            ) : (
              <button type="button" onClick={handleSubmit}
                disabled={loading || !form.contactName || !form.contactEmail || !form.contactPhone}
                className="flex-1 bg-primary hover:bg-red-600 disabled:opacity-40 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg> Sending...
                  </>
                ) : '🚀 Submit Enquiry'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}