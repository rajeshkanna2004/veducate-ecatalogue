'use client';

export default function ProblemSection() {
  const lines = [
    { text: 'Students sit through lectures they could watch on YouTube.' },
    { text: 'Labs run on <em>decade-old simulations</em> — not real equipment.' },
    { text: 'Assignments test memory, <em>not thinking</em>.' },
    { text: 'Placement cells scramble at the last minute.' },
    { text: 'Faculty spend hours on admin — <em>not mentoring</em>.' },
    { text: 'The result? Graduates who aren\'t <em>industry-ready</em>.' },
  ];

  return (
    <section className="section problem" id="problem">
      <div className="problem-video-wrap">
        <video
          className="problem-video"
          src="assets/SCENE 02 — Problem Section.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="problem-overlay" />
      </div>

      <div className="problem-content" data-anim="problem-pin">
        {lines.map((line, i) => (
          <p
            key={i}
            className="problem-line"
            data-anim="problem-line"
            dangerouslySetInnerHTML={{ __html: line.text }}
          />
        ))}
      </div>

      <div className="pain-cards" data-anim="pain-cards">
        <div className="pain-card" data-anim="pain-card">
          <div className="pain-card-icon">📉</div>
          <h3>Low Employability</h3>
          <p>Only 20% of engineering graduates are considered employable by industry standards.</p>
        </div>
        <div className="pain-card" data-anim="pain-card">
          <div className="pain-card-icon">🏚️</div>
          <h3>Outdated Infrastructure</h3>
          <p>Most colleges still rely on theory-heavy curricula with limited hands-on exposure.</p>
        </div>
        <div className="pain-card" data-anim="pain-card">
          <div className="pain-card-icon">📊</div>
          <h3>Zero Analytics</h3>
          <p>Institutions lack data-driven insights to track student progress and outcomes.</p>
        </div>
      </div>

      <div className="pivot-text" data-anim="pivot">
        What if there was a <strong>better way</strong> to prepare engineers for the real world?
      </div>
    </section>
  );
}
