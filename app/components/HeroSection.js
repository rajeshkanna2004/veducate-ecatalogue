'use client';
import AutoPlayVideo from './AutoPlayVideo';

export default function HeroSection() {
  return (
    <section className="section section-fullvh hero" id="hero">
      <AutoPlayVideo
        className="hero-video"
        src="assets/Scene 01 Hero Background.mp4"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge" data-anim="hero">
          <span className="dot" />
          Engineering education hasn&apos;t changed in 40 years
        </div>
        <p className="hero-eyebrow" data-anim="hero">Introducing Veducate</p>
        <h1 className="hero-title" data-anim="hero">
          The Future of Engineering Education Starts Here
        </h1>
        <p className="hero-subtitle" data-anim="hero">
          AI-powered learning, immersive VR labs, real-world coding practice, and career
          acceleration — unified in one transformative platform.
        </p>
        <div className="hero-ctas" data-anim="hero">
          <button className="btn-primary" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
            Request a Demo
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Platform
          </button>
        </div>
      </div>
      <div className="stats-bar" data-anim="hero">
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Integrated Modules</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">VR Lab Experiments</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10K+</div>
          <div className="stat-label">Practice Problems</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Placement Ready</div>
        </div>
      </div>
      <div className="scroll-indicator" data-anim="hero">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
