'use client';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <img src="assets/Veducate Logo.png" alt="Veducate" className="nav-logo" />
      <div className="nav-links">
        <a href="#problem">Problem</a>
        <a href="#ecosystem">Platform</a>
        <a href="#proof">Impact</a>
        <a href="#audience">For You</a>
        <button className="nav-cta" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
          Request Demo
        </button>
      </div>
    </nav>
  );
}
