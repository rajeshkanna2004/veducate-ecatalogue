'use client';
import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    let lenis;

    async function initLenis() {
      try {
        const LenisModule = await import('lenis');
        const Lenis = LenisModule.default || LenisModule.Lenis;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch {
        console.warn('Lenis not loaded, using native scroll');
      }
    }

    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);
}
