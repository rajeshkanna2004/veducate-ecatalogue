'use client';

import { useEffect, useRef, useState } from 'react';

function useElementInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current || isInView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { rootMargin: '-80px' });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, isInView]);

  return isInView;
}

function useCountUp(end, suffix, duration = 1800, shouldStart = false) {
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();
    let raf;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * end) + suffix);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shouldStart, end, suffix, duration]);

  return display;
}

function MetricCell({ end, suffix, label }) {
  const ref = useRef(null);
  const isInView = useElementInView(ref);
  const display = useCountUp(end, suffix, 1800, isInView);

  return (
    <div ref={ref} className="proof-metric-cell">
      <div className="proof-metric-number">{display}</div>
      <div className="proof-metric-label">{label}</div>
    </div>
  );
}

const metrics = [
  { end: 50, suffix: '+', label: 'VR engineering experiments' },
  { end: 10, suffix: 'K+', label: 'Coding problems in the library' },
  { end: 5, suffix: '', label: 'Integrated career systems' },
  { end: 1, suffix: '', label: 'Unified platform for everything' },
];

const winWinRows = [
  {
    inst: { label: 'Placement Outcomes', body: 'Track, measure, and improve placement rates with real analytics, not gut feel.' },
    stud: { label: 'Career Readiness', body: 'Graduate with a portfolio, not just a certificate. Interviews feel familiar.' },
  },
  {
    inst: { label: 'Recruiter Trust', body: 'Attract more companies back to campus when your students consistently perform.' },
    stud: { label: 'Real Job Offers', body: 'Get hired by companies that previously skipped your campus because you are ready.' },
  },
  {
    inst: { label: 'Institutional Reputation', body: 'Be known as the college that produces industry-ready engineers, not just degree holders.' },
    stud: { label: 'Interview Confidence', body: 'Build, debug, and ship real things. Walk into every interview knowing you can do the work.' },
  },
  {
    inst: { label: 'Faculty Effectiveness', body: 'Dashboards show exactly which students need help before they fall behind.' },
    stud: { label: 'Personalised Learning', body: 'AI adapts to your pace. No more falling behind because a lecture moved too fast.' },
  },
  {
    inst: { label: 'Lab Modernisation', body: 'Replace outdated physical lab infrastructure with 50+ immersive VR experiments at a fraction of the cost.' },
    stud: { label: 'Immersive Engineering', body: 'Walk inside a jet turbine. Disassemble a transformer. Experience what textbooks can only describe.' },
  },
];

const semesters = [
  { phase: 'Semester 1', body: 'Platform live. Students onboarded. Coding practice and VR labs active. Faculty dashboards running.' },
  { phase: 'Semester 2', body: 'Measurable skill improvement visible in assessments. Internship pipeline active. Industry connect opens.' },
  { phase: 'Placement Season', body: 'Students walk in interview-ready. Portfolios built. Recruiters notice the difference immediately.' },
];

export default function ProofSection() {
  return (
    <section className="section proof" id="proof">
      <div className="proof-inner">
        <div
          className="proof-heading"
          data-anim="fade-up"
        >
          <p className="proof-eyebrow">What Veducate Delivers</p>
          <h2 className="proof-title">
            A win for your institution.
            <br />
            A win for your students.
          </h2>
          <p className="proof-subtitle">
            Every feature inside Veducate creates value for both sides: the institution
            that deploys it, and the student who lives inside it.
          </p>
        </div>

        <div
          className="proof-metrics-row proof-stats"
          data-anim="fade-up"
        >
          {metrics.map((m) => (
            <MetricCell key={m.label} {...m} />
          ))}
        </div>

        <div
          className="proof-panel proof-winwin-panel"
          data-anim="fade-up"
        >
          <div className="proof-winwin-header">
            <div>Institution Wins</div>
            <div>Student Wins</div>
          </div>

          {winWinRows.map((row) => (
            <div key={row.inst.label} className="proof-winwin-row">
              <div className="proof-winwin-card">
                <p>{row.inst.label}</p>
                <span>{row.inst.body}</span>
              </div>
              <div className="proof-winwin-connector">+</div>
              <div className="proof-winwin-card">
                <p>{row.stud.label}</p>
                <span>{row.stud.body}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="proof-panel proof-roadmap-panel"
          data-anim="fade-up"
        >
          <p className="proof-panel-label">Semester By Semester</p>
          <div className="proof-roadmap-grid">
            {semesters.map((s, i) => (
              <div key={s.phase} className="proof-roadmap-item">
                <div className="proof-roadmap-step">0{i + 1}</div>
                <h3>{s.phase}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="proof-quote"
          data-anim="fade-up"
        >
          <p>
            "We do not promise overnight transformation. We promise a system that
            makes it inevitable."
          </p>
          <span>The Veducate commitment</span>
          <a className="btn-primary" href="#request-demo">
            See how it works for your campus
          </a>
        </div>
      </div>
    </section>
  );
}
