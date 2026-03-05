import React from 'react';

const Support: React.FC = () => {
  const bookingNumbers = [
    { number: '8679090502', label: 'Primary – Call & WhatsApp' },
    { number: '9560257714', label: 'Second Number' },
    { number: '7456046441', label: 'Third Number' },
  ];

  const emails = [
    'contact.thesmarttourism@gmail.com',
    'booking@thesmarttourism.com',
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
            Our dedicated support team is available 24/7 to assist you with bookings, packages, and travel queries
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Phone / WhatsApp Numbers Card */}
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
              <h2 className="text-2xl font-bold text-charcoal">Call / WhatsApp Us</h2>
            </div>
            <div className="space-y-3">
              {bookingNumbers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                    <a
                      href={`tel:+91${item.number}`}
                      className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors"
                    >
                      +91 {item.number}
                    </a>
                  </div>
                  <a
                    href={`https://wa.me/91${item.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Email Card */}
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

            <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-sm text-green-800 font-medium">
                📌 <strong>For Reservations:</strong> WhatsApp or call <strong>+91 8679090502</strong> (primary booking number)
              </p>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl mb-8">
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
            <p className="text-lg font-semibold">Smart Tourism</p>
            <p className="text-base">Ground Floor, Judge Court, Sanjay Colony, Bareilly Nanital Road, Ideal Enterprises</p>
            <p className="text-base">Thapa Colony,Haldwani, Nainital- Uttarakhand, 263139</p>
            <div className="mt-6">
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-charcoal mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Our support team is ready to help you right now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918679090502"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918679090502"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:booking@thesmarttourism.com"
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