
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: 'Price Locked', icon: 'verified_user', desc: 'Our quotes are final. No hidden fees, no "dynamic pricing" games. Just the files.', color: 'bg-primary' },
    { title: 'Main Character Only', icon: 'star', desc: 'Curated stays that aren\'t just hotels—they\'re high-definition backdrops.', color: 'bg-indigo-600' },
    { title: 'Eco-Aesthetic', icon: 'eco', desc: 'Sustainable travel that feels luxurious. Low footprint, maximum vibe.', color: 'bg-emerald-600' },
    { title: 'Human Support', icon: 'person', desc: 'Real humans helping you plan. No ChatGPT, just real expertise.', color: 'bg-fuchsia-600' },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">The Smart Tourism Advantage</h2>
          <h3 className="display-header text-6xl md:text-8xl leading-tight mb-16">
            Travel<br/>Smarter.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="group">
                <div className={`size-10 rounded-full ${b.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="material-symbols-outlined text-xl">{b.icon}</span>
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-3">{b.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-medium group-hover:text-charcoal transition-colors">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative bg-gradient-to-br from-slate-200 to-white flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-inner rotate-3 hover:rotate-0 transition-transform duration-700 bg-white p-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByfgmJKJKPy1KjoiWWCSHWpKUmOFOm3_OtNeWkDz23qfcrV_YFqTgZSCiua-FAzqy7xtkjliQIyQR8gyj7VGUMwHgUQCSq7XHKnmNDE-Y4ZXUMQ1SsUBrtqMTbm2YmeOM_g1FbkNVn90jPPoWscqBz16yWQ26GNo5ieAGhGTAC7V7GpAT03Xt2unrCiKNqcRPHGhwpPl2-gpSN4In5baCZjmzKUgvAYzarD7n0miRP0P5BApAqIzd6H1YPAzlJxpBQkaaN97HmfpGJ" 
                alt="Travel Smart" 
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="absolute bottom-10 left-10 bg-primary text-white p-6 rounded-2xl shadow-2xl scale-110">
              <p className="text-4xl font-black mb-1">9.5/10</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
