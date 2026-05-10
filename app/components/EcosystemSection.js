'use client';

export default function EcosystemSection() {
  return (
    <section className="section" id="ecosystem">
      {/* Pillar 01 — AI LMS */}
      <div className="ecosystem-pillar" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">01</div>
          <p className="pillar-label">AI-Powered LMS</p>
          <h2 className="pillar-title">Learning That Adapts to Every Student</h2>
          <p className="pillar-desc">
            Our AI engine personalizes the curriculum in real-time — identifying gaps, 
            adjusting difficulty, and creating unique learning paths for each student.
          </p>
          <ul className="pillar-features">
            <li>Adaptive difficulty based on performance</li>
            <li>AI-generated quizzes and assessments</li>
            <li>Automated progress tracking for faculty</li>
            <li>Multi-language support</li>
          </ul>
        </div>
        <div className="pillar-media">
          <video
            src="assets/SCENE 04 AI Learning  LMS.mp4"
            autoPlay muted loop playsInline
            style={{ borderRadius: '24px' }}
          />
        </div>
      </div>

      {/* Pillar 02 — Coding Platform */}
      <div className="ecosystem-pillar reverse" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">02</div>
          <p className="pillar-label">Coding Practice Engine</p>
          <h2 className="pillar-title">Code Like You&apos;re Already on the Job</h2>
          <p className="pillar-desc">
            10,000+ problems across DSA, web development, databases, and more. 
            Real-time compilation, AI hints, and company-specific prep tracks.
          </p>
          <ul className="pillar-features">
            <li>Real-time code execution in 15+ languages</li>
            <li>Company-wise placement preparation</li>
            <li>AI-powered code review and hints</li>
            <li>Competitive coding leaderboards</li>
          </ul>
        </div>
        <div className="pillar-media">
          <div className="pillar-placeholder gradient-1" style={{ position: 'relative', minHeight: '500px', borderRadius: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '48px' }}>💻</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>Coding Platform Preview</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 03 — VR Labs (Full screen) */}
      <div className="pillar-fullscreen" data-anim="pillar-fs">
        <video
          src="assets/SCENE 03  VR  Immersive Engineering Reveal.mp4"
          autoPlay muted loop playsInline
        />
        <div className="pillar-fs-overlay" />
        <div className="pillar-fs-content">
          <div className="pillar-number" style={{ color: 'rgba(255,255,255,0.08)', fontSize: '100px', marginBottom: '0' }}>03</div>
          <p className="pillar-label">VR Immersive Labs</p>
          <h2 className="pillar-title" style={{ color: '#fff' }}>
            Step Inside the Lab — From Anywhere
          </h2>
          <p className="pillar-desc" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 24px' }}>
            50+ fully simulated engineering experiments in VR. Students interact with equipment, 
            run experiments, and learn by doing — no physical lab required.
          </p>
          <button className="btn-primary">Experience the Lab →</button>
        </div>
      </div>

      {/* Pillar 04 — Internships */}
      <div className="ecosystem-pillar" data-anim="pillar">
        <div className="pillar-text">
          <div className="pillar-number">04</div>
          <p className="pillar-label">Internship & Career Hub</p>
          <h2 className="pillar-title">From Campus to Career — Seamlessly</h2>
          <p className="pillar-desc">
            Connect students directly with hiring partners. AI-matched internships, 
            resume builders, mock interviews, and placement tracking — all in one place.
          </p>
          <ul className="pillar-features">
            <li>AI-powered job matching</li>
            <li>Integrated resume and portfolio builder</li>
            <li>Mock interview simulations</li>
            <li>Employer dashboard for hiring partners</li>
          </ul>
        </div>
        <div className="pillar-media">
          <div className="pillar-placeholder gradient-2" style={{ position: 'relative', minHeight: '500px', borderRadius: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '48px' }}>🚀</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>Career Hub Preview</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 05 — Analytics */}
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Student Performance Dashboard</div>
            <div className="mock-bars" id="analytics-bars">
              {[75, 60, 85, 45, 90, 70, 55, 80, 65, 95].map((h, i) => (
                <div key={i} className="mock-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#6C63FF' }}>87%</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Avg Completion</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#00D4AA' }}>92%</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
