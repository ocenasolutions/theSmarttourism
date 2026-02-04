import React, { useState, useRef, useCallback } from 'react';
import { API_URL } from '../../config/api';

interface SearchBoxProps {
  type: 'flight' | 'train' | 'bus' | 'hotel';
}

interface LocationSuggestion {
  name: string;
  city: string;
  state: string;
  country: string;
  displayName: string;
  latitude: number | null;
  longitude: number | null;
  type: string;
}

// Debounce utility
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const SearchBox: React.FC<SearchBoxProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    location: '',
    from: '',
    to: '',
    checkIn: '',
    checkOut: '',
    date: '',
    people: '1',
  });
  
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const [userDetails, setUserDetails] = useState({
    name: '',
    mobile: '',
  });
  
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Autocomplete state
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState<{
    from: boolean;
    to: boolean;
    location: boolean;
  }>({
    from: false,
    to: false,
    location: false,
  });
  const [activeField, setActiveField] = useState<'from' | 'to' | 'location' | null>(null);

  // Refs for click-outside detection
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Fetch location suggestions
  const fetchLocationSuggestions = async (query: string, field: 'from' | 'to' | 'location') => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(prev => ({ ...prev, [field]: false }));
      return;
    }

    setIsLoadingSuggestions(true);
    
    try {
      const response = await fetch(
        `${API_URL}/locations/autocomplete?q=${encodeURIComponent(query)}&type=${type}`
      );
      
      const data = await response.json();
      
      if (data.success && data.results) {
        setSuggestions(data.results);
        setShowSuggestions(prev => ({ ...prev, [field]: true }));
      } else {
        setSuggestions([]);
        setShowSuggestions(prev => ({ ...prev, [field]: false }));
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
      setShowSuggestions(prev => ({ ...prev, [field]: false }));
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  // Debounced fetch
  const debouncedFetch = useCallback(
    debounce((query: string, field: 'from' | 'to' | 'location') => {
      fetchLocationSuggestions(query, field);
    }, 300),
    [type]
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Trigger autocomplete for location fields
    if (['from', 'to', 'location'].includes(field)) {
      const locationField = field as 'from' | 'to' | 'location';
      setActiveField(locationField);
      debouncedFetch(value, locationField);
    }
  };

  const handleSuggestionSelect = (suggestion: LocationSuggestion, field: 'from' | 'to' | 'location') => {
    // Use city name for cleaner display
    const displayValue = suggestion.city || suggestion.name;
    
    setFormData(prev => ({ 
      ...prev, 
      [field]: displayValue
    }));
    
    // Close suggestions
    setShowSuggestions({
      from: false,
      to: false,
      location: false,
    });
    setSuggestions([]);
    setActiveField(null);
  };

  // Close suggestions on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (
        fromRef.current && !fromRef.current.contains(target) &&
        toRef.current && !toRef.current.contains(target) &&
        locationRef.current && !locationRef.current.contains(target)
      ) {
        setShowSuggestions({
          from: false,
          to: false,
          location: false,
        });
        setActiveField(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserDetailChange = (field: string, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleSearchClick = () => {
    // Validate search fields first
    if (type === 'hotel') {
      if (!formData.location.trim()) {
        setMessage({ type: 'error', text: 'Please enter destination' });
        return;
      }
      if (!formData.checkIn || !formData.checkOut) {
        setMessage({ type: 'error', text: 'Please select check-in and check-out dates' });
        return;
      }
    } else {
      if (!formData.from.trim() || !formData.to.trim()) {
        setMessage({ type: 'error', text: 'Please enter departure and arrival locations' });
        return;
      }
      if (!formData.date) {
        setMessage({ type: 'error', text: 'Please select travel date' });
        return;
      }
    }

    // If validation passes, show modal
    setMessage(null);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    // Validate user details
    if (!userDetails.name.trim()) {
      setMessage({ type: 'error', text: 'Please enter your name' });
      return;
    }
    
    if (!userDetails.mobile.trim()) {
      setMessage({ type: 'error', text: 'Please enter your mobile number' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // Prepare payload based on type
      const searchData = type === 'hotel' 
        ? {
            location: formData.location,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            people: parseInt(formData.people) || 1,
          }
        : {
            from: formData.from,
            to: formData.to,
            date: formData.date,
            people: parseInt(formData.people) || 1,
          };

      const payload = {
        type,
        name: userDetails.name,
        mobile: userDetails.mobile,
        ...searchData,
      };

      const response = await fetch(`${API_URL}/save-query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: 'Thank you! Our team is finding the best options for you and will contact you soon.' 
        });
        
        // Reset forms and close modal after 3 seconds
        setTimeout(() => {
          setFormData({
            location: '',
            from: '',
            to: '',
            checkIn: '',
            checkOut: '',
            date: '',
            people: '1',
          });
          setUserDetails({
            name: '',
            mobile: '',
          });
          setShowModal(false);
          setMessage(null);
        }, 3000);
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to save search query' });
      }
    } catch (error) {
      console.error('Error saving query:', error);
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form when type changes
  React.useEffect(() => {
    setFormData({
      location: '',
      from: '',
      to: '',
      checkIn: '',
      checkOut: '',
      date: '',
      people: '1',
    });
    setMessage(null);
    setSuggestions([]);
    setShowSuggestions({
      from: false,
      to: false,
      location: false,
    });
  }, [type]);

  // Render suggestions dropdown
  const renderSuggestions = (field: 'from' | 'to' | 'location') => {
    if (!showSuggestions[field] || activeField !== field) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
        {isLoadingSuggestions && suggestions.length === 0 ? (
          <div className="px-4 py-3 text-center text-sm text-gray-500">
            <span className="material-symbols-outlined animate-spin inline-block mr-2">progress_activity</span>
            Searching...
          </div>
        ) : suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionSelect(suggestion, field)}
              className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">
                    {suggestion.city || suggestion.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {suggestion.state && `${suggestion.state}, `}
                    {suggestion.country}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-3 text-center text-sm text-gray-500">
            No locations found
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-0">
      {/* Search Box - Desktop: Horizontal, Mobile: Vertical */}
      <div className="w-full bg-white rounded-3xl md:rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-3 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0">
        {type === 'hotel' ? (
          <>
            {/* Destination with Autocomplete */}
            <div 
              ref={locationRef}
              className="flex-1 flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 md:border-r border-gray-100 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none relative"
            >
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">location_on</span>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Destination</span>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  onFocus={() => {
                    setActiveField('location');
                    if (formData.location.length >= 2) {
                      fetchLocationSuggestions(formData.location, 'location');
                    }
                  }}
                  placeholder="Where to?" 
                  className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
                  autoComplete="off"
                />
              </div>
              {renderSuggestions('location')}
            </div>
            
            {/* Check-in & Check-out - Side by side on mobile */}
            <div className="flex flex-row md:flex-1 gap-3 md:gap-0">
              {/* Check-in */}
              <div
                onClick={() => {
                  if (checkInRef.current?.showPicker) {
                    checkInRef.current.showPicker();
                  } else {
                    checkInRef.current?.click();
                  }
                }}
                className="flex-1 flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 md:border-r border-gray-100 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                  calendar_today
                </span>
                <div className="flex flex-col text-left w-full min-w-0">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Check-in
                  </span>
                  <input
                    type="date"
                    ref={checkInRef}
                    value={formData.checkIn}
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full cursor-pointer hidden md:block"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div
                onClick={() => {
                  if (checkOutRef.current?.showPicker) {
                    checkOutRef.current.showPicker();
                  } else {
                    checkOutRef.current?.click();
                  }
                }}
                className="flex-1 flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                  calendar_today
                </span>
                <div className="flex flex-col text-left w-full min-w-0">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Check-out
                  </span>
                  <input
                    type="date"
                    ref={checkOutRef}
                    value={formData.checkOut}
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full cursor-pointer hidden md:block"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* From with Autocomplete */}
            <div 
              ref={fromRef}
              className="flex-[1.2] flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 md:border-r border-gray-100 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none relative"
            >
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                {type === 'flight' ? 'flight_takeoff' : type === 'train' ? 'train' : 'directions_bus'}
              </span>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">From</span>
                <input 
                  type="text" 
                  value={formData.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  onFocus={() => {
                    setActiveField('from');
                    if (formData.from.length >= 2) {
                      fetchLocationSuggestions(formData.from, 'from');
                    }
                  }}
                  placeholder="Departure City" 
                  className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
                  autoComplete="off"
                />
              </div>
              {renderSuggestions('from')}
            </div>
            
            {/* To with Autocomplete */}
            <div 
              ref={toRef}
              className="flex-[1.2] flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 md:border-r border-gray-100 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none relative"
            >
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                {type === 'flight' ? 'flight_land' : 'location_on'}
              </span>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">To</span>
                <input 
                  type="text" 
                  value={formData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  onFocus={() => {
                    setActiveField('to');
                    if (formData.to.length >= 2) {
                      fetchLocationSuggestions(formData.to, 'to');
                    }
                  }}
                  placeholder="City" 
                  className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
                  autoComplete="off"
                />
              </div>
              {renderSuggestions('to')}
            </div>

            {/* Date */}
            <div className="flex-1 flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 md:border-r border-gray-100 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">calendar_today</span>
              <div className="flex flex-col text-left w-full min-w-0">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</span>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full"
                />
              </div>
            </div>
          </>
        )}

        {/* Guests/Travelers and Search Button */}
        <div className="flex items-center gap-3">
          {/* People Count */}
          <div className="flex-shrink-0 flex items-center px-4 md:px-5 py-3 md:py-0 gap-3 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none min-w-[120px]">
            <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">groups</span>
            <div className="flex flex-col text-left flex-1 min-w-0">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
                {type === 'hotel' ? 'Guests' : 'Travelers'}
              </span>
              <input 
                type="number" 
                min="1"
                value={formData.people}
                onChange={(e) => handleInputChange('people', e.target.value)}
                placeholder="1" 
                className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearchClick}
            className="bg-primary size-12 md:size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/30 flex-shrink-0"
          >
            <span className="material-symbols-outlined text-white text-2xl">search</span>
          </button>
        </div>
      </div>

      {/* Error Message Display (outside modal) */}
      {message && !showModal && (
        <div className={`mt-4 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      {/* Modal for User Details */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => {
                setShowModal(false);
                setMessage(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">person</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Almost there!</h2>
              <p className="text-gray-600 text-sm">Please provide your contact details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  value={userDetails.name}
                  onChange={(e) => handleUserDetailChange('name', e.target.value)}
                  placeholder="Enter your full name" 
                  className="border-2 border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  autoFocus
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Mobile Number
                </label>
                <input 
                  type="tel" 
                  value={userDetails.mobile}
                  onChange={(e) => handleUserDetailChange('mobile', e.target.value)}
                  placeholder="Enter your mobile number" 
                  className="border-2 border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Message Display inside modal */}
            {message && (
              <div className={`mb-4 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                <p className="text-sm font-medium">{message.text}</p>
              </div>
            )}

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">search</span>
                  <span>Find Best Options</span>
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              We'll contact you with the best available options
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;