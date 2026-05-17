'use client';

import AutoPlayVideo from './AutoPlayVideo';

export default function EcosystemSection() {
  return (
    <section className="section" id="ecosystem">
      <div className="ecosystem-pillar" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">01</div>
          <p className="pillar-label">Smart Learning Platform</p>
          <h2 className="pillar-title">Smart Learning That Adapts to Every Student</h2>
          <p className="pillar-desc">
            Our smart learning engine helps every student move at their own pace - keeping learning
            engaging, accessible, and built for real understanding.
          </p>
          <ul className="pillar-features">
            <li>Smart learning paths tailored to each student</li>
            <li>Gamified points and rewards for course completion</li>
            <li>Captions available on all lecture videos</li>
            <li>Adjustable playback speed for every lecture</li>
          </ul>
        </div>
        <div className="pillar-media">
          <AutoPlayVideo
            src="assets/lms.mp4"
            style={{ borderRadius: '24px' }}
            label="Smart LMS learning section preview"
          />
        </div>
      </div>

      <div className="ecosystem-pillar reverse" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">02</div>
          <p className="pillar-label">Coding Practice Engine</p>
          <h2 className="pillar-title">Code Like You&apos;re Already on the Job</h2>
          <p className="pillar-desc">
            10,000+ problems across DSA, web development, databases, and more.
            Real-time compilation, guided hints, and company-specific prep tracks.
          </p>
          <ul className="pillar-features">
            <li>Real-time code execution in 15+ languages</li>
            <li>Company-wise placement preparation</li>
            <li>Code review with hints and guidance</li>
            <li>Gamified coding challenges and milestones</li>
          </ul>
        </div>
        <div className="pillar-media">
          <AutoPlayVideo
            src="assets/code execution.mp4"
            style={{ borderRadius: '24px' }}
            label="Code execution section preview"
          />
        </div>
      </div>

      <div className="pillar-fullscreen" data-anim="pillar-fs">
        <AutoPlayVideo
          src="assets/SCENE 03  VR  Immersive Engineering Reveal.mp4"
          label="VR immersive engineering lab reveal"
        />
        <div className="pillar-fs-overlay" />
        <div className="pillar-fs-content">
          <div className="pillar-number" style={{ color: 'var(--text-tertiary)', fontSize: '100px', marginBottom: '0' }}>03</div>
          <p className="pillar-label">VR Immersive Labs</p>
          <h2 className="pillar-title" style={{ color: 'var(--text-primary)' }}>
            Step Inside the Lab - From Anywhere
          </h2>
          <p className="pillar-desc" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 24px' }}>
            50+ fully simulated engineering experiments in VR. Students interact with equipment,
            run experiments, and learn by doing - no physical lab required.
          </p>
          <button className="btn-primary">Experience the Lab</button>
        </div>
      </div>

      <div className="ecosystem-pillar" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">04</div>
          <p className="pillar-label">Internship & Career Hub</p>
          <h2 className="pillar-title">From Campus to Career - Seamlessly</h2>
          <p className="pillar-desc">
            Connect students directly with hiring partners. Internship listings, placement tracking,
            and verified student profiles - all in one place, easy to manage.
          </p>
          <ul className="pillar-features">
            <li>Internship listings and application tracking</li>
            <li>Placement progress tracking for every student</li>
            <li>Verified student profiles for recruiters</li>
            <li>Simple employer dashboard for hiring partners</li>
          </ul>
        </div>
        <div className="pillar-media">
          <div className="career-video-wrapper">
            <AutoPlayVideo
              className="career-video"
              src="assets/SCENE 07 — Placement Outcome.mp4"
              label="Veducate placement outcome video showing a confident engineering graduate"
            />
          </div>
        </div>
      </div>

      <div className="ecosystem-pillar reverse" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">05</div>
          <p className="pillar-label">Institutional Analytics</p>
          <h2 className="pillar-title">Data-Driven Decisions for Leadership</h2>
          <p className="pillar-desc">
            Real-time dashboards giving deans, HODs, and faculty complete visibility
            into student performance, engagement, and outcome metrics.
          </p>
          <ul className="pillar-features">
            <li>Department-wise performance heatmaps</li>
            <li>Student engagement scoring</li>
            <li>Placement readiness indicators</li>
            <li>Automated report generation</li>
          </ul>
        </div>
        <div className="pillar-media">
          <div className="analytics-mock">
            <div className="analytics-mock-title">Student Performance Dashboard</div>
            <div className="mock-bars" id="analytics-bars">
              {[75, 60, 85, 45, 90, 70, 55, 80, 65, 95].map((h, i) => (
                <div key={i} className="mock-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="analytics-snapshot">
              <div>
                <div className="analytics-value analytics-value-accent">87%</div>
                <div className="analytics-mock-label">Avg Completion</div>
              </div>
              <div>
                <div className="analytics-value analytics-value-secondary">92%</div>
                <div className="analytics-mock-label">Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
