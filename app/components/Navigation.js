'use client';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId;
    let lastScrolled = window.scrollY > 50;
    setScrolled(lastScrolled);

    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        if (nextScrolled !== lastScrolled) {
          lastScrolled = nextScrolled;
          setScrolled(nextScrolled);
        }
        frameId = undefined;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Theme toggle functionality
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // On load: read saved preference or default to dark
    const saved = localStorage.getItem('veducate-theme') || 'dark';
    html.setAttribute('data-theme', saved);

    const handleToggle = () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('veducate-theme', next);
    };

    if (toggle) {
      toggle.addEventListener('click', handleToggle);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener('click', handleToggle);
      }
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <img src="assets/Veducate Logo.png" alt="Veducate" className="nav-logo" loading="lazy" decoding="async" />
      <div className="nav-links">
        <a href="#problem">Problem</a>
        <a href="#ecosystem">Platform</a>
        <a href="#proof">Impact</a>
        <a href="#audience">For You</a>
        {/* Dark/Light Mode Toggle */}
        <button
          className="theme-toggle"
          id="themeToggle"
          aria-label="Toggle dark and light mode"
          title="Toggle theme"
        >
          <span className="toggle-track">
            <span className="toggle-thumb"></span>
            <span className="toggle-icon toggle-icon--dark" aria-hidden="true">
              {/* Moon SVG */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </span>
            <span className="toggle-icon toggle-icon--light" aria-hidden="true">
              {/* Sun SVG */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </span>
          </span>
        </button>
        <button className="nav-cta" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
          Request Demo
        </button>
      </div>
    </nav>
  );
}
