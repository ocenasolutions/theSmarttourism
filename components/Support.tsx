import React from 'react';

const Support: React.FC = () => {
  const phoneNumbers = [
    '7894561233',
    '4567981323',
    '1234567899',
    '9638527411'
  ];

  const emails = [
    'a@gmail.com',
    'b@gmail.com'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg shadow-primary/20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
              <path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
            </svg>
          </div>
          <h1 className="text-5xl font-black text-charcoal mb-4">
            We're Here to <span className="text-primary">Help</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to assist you with any questions or concerns
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Numbers Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Call Us</h2>
            </div>
            <div className="space-y-3">
              {phoneNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                    +91 {number}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Email Addresses Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Email Us</h2>
            </div>
            <div className="space-y-3">
              {emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {email}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
          <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3 className="text-2xl font-bold">Visit Us</h3>
            </div>
            <div className="space-y-2 text-white/90">
              <p className="text-lg font-semibold">SmartTourism </p>
              <p className="text-base">ABc </p>
              <p className="text-base"> India -123456</p>
              <div className="mt-6">
                <button className="px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-white/90 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

        {/* Quick Support CTA */}
        <div className="mt-12 text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-charcoal mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Our support team is ready to help you right now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7894561233"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
            <a
              href="mailto:a@gmail.com"
              className="px-8 py-4 bg-gray-100 text-charcoal rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;