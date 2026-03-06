import React from 'react';

const PrivacyView: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-28 pb-24 px-6 relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-charcoal to-charcoal z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Privacy <span className="italic text-primary">Policy</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Your privacy is important to us. We value your trust and are committed to safeguarding your personal information.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 space-y-16 shadow-2xl">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              1. Introduction
            </h2>
            <p className="text-white/70 leading-relaxed">
              This document explains how Smart Tourism collects, uses, processes,
              and protects your personal data across our website, mobile apps,
              partner platforms, and social media channels.
            </p>
          </section>

          {/* Personal Data Collected */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              2. What Personal Information We Collect
            </h2>

            <ul className="list-disc list-inside text-white/70 space-y-3 leading-relaxed">
              <li>Name, address, phone number, and email address</li>
              <li>Payment details</li>
              <li>Guest names traveling with you</li>
              <li>Reservation preferences</li>
              <li>IP address, browser type, OS version</li>
              <li>Mobile device data & location (if enabled)</li>
              <li>Social media account information (if used to log in)</li>
            </ul>
          </section>

          {/* Why We Collect Data */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              3. Why We Use Your Data
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p><strong>Reservations:</strong> To complete and manage bookings.</p>
              <p><strong>Customer Support:</strong> 24/7 multilingual support.</p>
              <p><strong>Reviews:</strong> Invite guest feedback after stay.</p>
              <p><strong>Account Management:</strong> Manage bookings & preferences.</p>
              <p><strong>Marketing:</strong> Send offers & newsletters (opt-out anytime).</p>
              <p><strong>Fraud Prevention:</strong> Detect illegal or suspicious activity.</p>
              <p><strong>Service Improvement:</strong> Analytics & performance optimization.</p>
            </div>
          </section>

          {/* Social Media */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              4. Social Media Integration
            </h2>
            <p className="text-white/70 leading-relaxed">
              We integrate social plugins and may allow sign-in via social accounts.
              Information shared depends on your social media privacy settings.
            </p>
          </section>

          {/* Sharing Data */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              5. Sharing Your Data
            </h2>

            <ul className="list-disc list-inside text-white/70 space-y-3 leading-relaxed">
              <li>Hotels, rentals, cars, tours you book</li>
              <li>Local Smart Tourism offices</li>
              <li>Payment service providers</li>
              <li>Analytics and advertising partners</li>
              <li>Legal authorities when required</li>
            </ul>
          </section>

          {/* Mobile Devices */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              6. Mobile Device Usage
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our apps and mobile sites process data similarly to our website
              and may use location services to enhance nearby service searches.
            </p>
          </section>

          {/* Guest Reviews */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              7. Guest Reviews
            </h2>
            <p className="text-white/70 leading-relaxed">
              Reviews submitted may be displayed publicly. You may choose
              anonymity via screen name in your account settings.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              8. Cookies Policy
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p><strong>Technical Cookies:</strong> Required for website functionality.</p>
              <p><strong>Functional Cookies:</strong> Save preferences like language & currency.</p>
              <p><strong>Analytics Cookies:</strong> Improve website performance.</p>
              <p><strong>Commercial Cookies:</strong> Personalized advertisements.</p>
            </div>

            <p className="mt-6 text-white/60">
              Cookies may remain active for up to five years.
              You may manage cookie settings in your browser.
            </p>
          </section>

          {/* Web Beacons */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              9. Web Beacons
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may use pixel tracking technologies for advertising performance,
              conversion tracking, and analytics.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              10. Security
            </h2>
            <p className="text-white/70 leading-relaxed">
              We use secure systems and restrict access to authorized personnel only.
              Credit card data is stored for a maximum of 10 days unless saved in your account.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              11. Children Policy
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our services are not directed at individuals under 18.
              Data received from minors may be deleted.
            </p>
          </section>

          {/* Data Control */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              12. Your Rights
            </h2>

            <p className="text-white/70 leading-relaxed">
              You may request access, correction, or deletion of your personal data
              by emailing booking@travelnainital.com.
            </p>

            <p className="text-white/60 mt-4">
              Refund and removal requests are processed within 10–15 business days.
            </p>
          </section>

          {/* Final Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Contact Information
            </h2>
            <p className="text-white/70 leading-relaxed">
              Emails: contact.thesmarttourism@gmail.com<br /> 
              Phone: +91 8679090502<br />

            </p>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <p className="text-white/50 text-sm mb-6">
            Questions about privacy? We're here to help.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/40">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default PrivacyView;