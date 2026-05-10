'use client';

export default function CTASection() {
  return (
    <section className="section cta-section" id="cta">
      <span className="section-anchor" id="request-demo" aria-hidden="true" />
      <div className="cta-bg" />
      <div className="cta-overlay" />
      <div className="cta-content" data-anim="fade-up">
        <h2 className="cta-title">Ready to Transform Your Institution?</h2>
        <p className="cta-subtitle">
          Join the future of engineering education. Schedule a personalized demo 
          and see how Veducate can revolutionize your campus.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Request a Demo</button>
          <button className="btn-secondary">Download Brochure</button>
        </div>
        <p className="cta-trust">Trusted by leading engineering institutions across India</p>
      </div>
    </section>
  );
}
