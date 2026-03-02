import React from 'react';

const TermsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-28 pb-24 px-6 relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-charcoal to-charcoal z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Terms & <span className="italic text-primary">Conditions</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            By purchasing or using our services, you agree to the following terms and conditions.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 space-y-14 shadow-2xl">

          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              By purchasing, accessing and/or using our services, you agree to be bound by these
              terms and conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">2. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed">
              The website and all its original content are the sole property of Travel Nainital
              and are fully protected by international copyright and intellectual property laws.
            </p>
          </section>

          {/* Website Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">3. Website Disclaimer</h2>
            <p className="text-white/70 leading-relaxed">
              This site is offered for informational purposes only. We are not responsible for
              accuracy, usefulness, availability, errors, or omissions in the information provided.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">4. Termination</h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to terminate access to our services without notice.
              Ownership provisions, disclaimers, indemnity and liability limitations survive termination.
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">5. Links to Other Websites</h2>
            <p className="text-white/70 leading-relaxed">
              We are not responsible for third-party websites linked from our site.
              Please review their terms and privacy policies separately.
            </p>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">6. Refund / Return Policy</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed">
              <li>Refunds considered only after written complaint.</li>
              <li>If service matches description, refund is not mandatory.</li>
              <li>No refund after activity commencement due to safety or client behavior.</li>
            </ul>
          </section>

          {/* Complaints */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">7. Complaints</h2>
            <p className="text-white/70 leading-relaxed">
            Emails: contact.thesmarttourism@gmail.com<br /> 
            Phone: +91 8679090502<br />
            </p>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">8. Legal Disclaimer</h2>
            <p className="text-white/70 leading-relaxed">
              We are not responsible for health or safety concerns after purchase or use of services.
            </p>
          </section>

          {/* Bike Rental */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">9. Bike Rental Terms</h2>

            <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed">
              <li>Minimum rider age: 20 years.</li>
              <li>Valid driving license required.</li>
              <li>Security Deposit: ₹2000 (Refundable).</li>
              <li>Advance Booking: ₹500.</li>
              <li>Late return: Additional day charge.</li>
              <li>No racing, illegal use, or outside city travel.</li>
              <li>Fuel, insurance, gear not included.</li>
            </ul>
          </section>

          {/* Bus Cancellation */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">10. Bus Ticket Cancellation</h2>
            <div className="text-white/70 space-y-2">
              <p>Within 12 Hours – 100% Charges</p>
              <p>Within 1 Day – 60% Charges</p>
              <p>Within 45 Days – 30% Charges</p>
            </div>
          </section>

          {/* Car Rental */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">11. Car Rental Terms</h2>

            <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed">
              <li>AC will not function in hill areas or parked vehicles.</li>
              <li>No-entry zone restrictions must be respected.</li>
              <li>Rates subject to fuel price fluctuation.</li>
              <li>Pick-up/drop single point unless agreed.</li>
              <li>Driver may refuse unsafe behavior.</li>
              <li>Vehicle usage limited to itinerary.</li>
              <li>Refund processed only via NEFT (10–15 days).</li>
            </ul>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">12. Cancellation & Refund</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed">
              <li>10% cancellation fee if cancelled 48 hrs prior.</li>
              <li>One day charge within last 48 hrs.</li>
              <li>Refund takes 10–15 business days.</li>
              <li>Refund via NEFT only.</li>
            </ul>
          </section>

          {/* Final Agreement */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Final Agreement</h2>
            <p className="text-white/70 leading-relaxed">
              By purchasing our products or services, you agree to these terms and conditions.
              These terms are subject to change at any time.
            </p>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <p className="text-white/50 text-sm mb-6">
            Need assistance? Contact our support team.
          </p>
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/40"
          >
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsView;