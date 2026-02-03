
import React from 'react';

const SearchBox: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-2 flex items-center justify-between">
      <div className="flex-1 flex items-center px-6 gap-4 border-r border-gray-100">
        <span className="material-symbols-outlined text-primary text-xl">location_on</span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Destination</span>
          <input 
            type="text" 
            placeholder="Where are you heading?" 
            className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
          />
        </div>
      </div>
      
      <div className="flex-1 flex items-center px-6 gap-4 border-r border-gray-100">
        <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Check-in/out</span>
          <input 
            type="text" 
            placeholder="Add dates" 
            className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center px-6 gap-4">
        <span className="material-symbols-outlined text-primary text-xl">groups</span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Travelers</span>
          <input 
            type="text" 
            placeholder="Who's coming?" 
            className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
          />
        </div>
      </div>

      <button className="bg-primary size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/30">
        <span className="material-symbols-outlined text-white text-2xl">search</span>
      </button>
    </div>
  );
};

export default SearchBox;
