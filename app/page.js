'use client';
import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import IntroSection from './components/IntroSection';
import EcosystemSection from './components/EcosystemSection';
import ProofSection from './components/ProofSection';
import AudienceSection from './components/AudienceSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import CursorTrail from './components/CursorTrail';
import useGSAPAnimations from './hooks/useGSAPAnimations';
import useSmoothScroll from './hooks/useSmoothScroll';

export default function Home() {
  const mainRef = useRef(null);
  useSmoothScroll();
  useGSAPAnimations(mainRef);

  return (
    <>
      <CursorTrail />
      <Navigation />
      <main ref={mainRef}>
        <HeroSection />
        <ProblemSection />
        <IntroSection />
        <EcosystemSection />
        <ProofSection />
        <AudienceSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
