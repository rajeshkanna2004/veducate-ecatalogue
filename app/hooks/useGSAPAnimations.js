'use client';
import { useEffect } from 'react';

export default function useGSAPAnimations(mainRef) {
  useEffect(() => {
    let gsapModule, ScrollTriggerModule;

    async function initAnimations() {
      try {
        const gsapLib = await import('gsap');
        const stLib = await import('gsap/ScrollTrigger');
        gsapModule = gsapLib.gsap || gsapLib.default;
        ScrollTriggerModule = stLib.ScrollTrigger || stLib.default;
        gsapModule.registerPlugin(ScrollTriggerModule);
        gsapModule.defaults({ force3D: true, overwrite: 'auto' });
        ScrollTriggerModule.config({ ignoreMobileResize: true });
      } catch {
        console.warn('GSAP not loaded, skipping animations');
        return;
      }

      const gsap = gsapModule;

      // Hero animations
      gsap.fromTo('[data-anim="hero"]',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );

      // Problem lines - sequential reveal on scroll
      const problemLines = document.querySelectorAll('[data-anim="problem-line"]');
      problemLines.forEach((line, i) => {
        gsap.fromTo(line,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // Pain cards
      gsap.fromTo('[data-anim="pain-card"]',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-anim="pain-cards"]',
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Pivot text
      gsap.fromTo('[data-anim="pivot"]',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '[data-anim="pivot"]', start: 'top 80%', once: true },
        }
      );

      // Intro section
      gsap.fromTo('[data-anim="intro"]',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '#intro', start: 'top 60%', once: true },
        }
      );

      // Ecosystem pillars - slide in from alternating sides
      document.querySelectorAll('[data-anim="pillar"]').forEach((pillar, i) => {
        const direction = i % 2 === 0 ? -80 : 80;
        gsap.fromTo(pillar,
          { opacity: 0, x: direction },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: pillar, start: 'top 70%', once: true },
          }
        );
      });

      // Fullscreen pillar
      gsap.fromTo('[data-anim="pillar-fs"] .pillar-fs-content',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-anim="pillar-fs"]', start: 'top 50%', once: true },
        }
      );

      // Fade up animations
      document.querySelectorAll('[data-anim="fade-up"]').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%', once: true },
          }
        );
      });

      // Stats counter animation
      gsap.fromTo('.proof-stats',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.proof-stats', start: 'top 75%', once: true },
        }
      );
    }

    initAnimations();

    return () => {
      if (ScrollTriggerModule) {
        ScrollTriggerModule.getAll().forEach(t => t.kill());
      }
    };
  }, [mainRef]);
}
