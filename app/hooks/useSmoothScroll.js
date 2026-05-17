'use client';
import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    let lenis;
    let frameId;

    async function initLenis() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      try {
        const LenisModule = await import('lenis');
        const Lenis = LenisModule.default || LenisModule.Lenis;
        lenis = new Lenis({
          duration: 0.72,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 0.88,
          touchMultiplier: 1.1,
        });

        function raf(time) {
          lenis.raf(time);
          frameId = requestAnimationFrame(raf);
        }
        frameId = requestAnimationFrame(raf);
      } catch {
        console.warn('Lenis not loaded, using native scroll');
      }
    }

    initLenis();
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);
}
