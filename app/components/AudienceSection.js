'use client';

export default function AudienceSection() {
  const audiences = [
    {
      icon: '🏛️',
      title: 'Institutions & Universities',
      outcomes: [
        'Upgrade your lab infrastructure without hardware costs',
        'Boost NAAC and NBA accreditation scores',
        'Get real-time analytics on student performance',
        'Differentiate your college with cutting-edge tech',
      ],
    },
    {
      icon: '🎓',
      title: 'Students & Learners',
      outcomes: [
        'Practice 10K+ coding problems with AI feedback',
        'Experience VR labs from your hostel room',
        'Build a portfolio that impresses recruiters',
        'Get matched with internships automatically',
      ],
    },
    {
      icon: '💼',
      title: 'Recruiters & Industry',
      outcomes: [
        'Access pre-vetted, skills-verified talent',
        'Reduce hiring time with AI-matched candidates',
        'View detailed skill assessments and portfolios',
        'Partner with top engineering colleges directly',
      ],
    },
  ];

  return (
    <section className="section audience" id="audience">
      <h2 className="audience-heading" data-anim="fade-up">Built For Everyone in the Ecosystem</h2>
      <div className="audience-grid">
        {audiences.map((a, i) => (
          <div key={i} className="audience-card" data-anim="fade-up">
            <div className="audience-card-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <ul>
              {a.outcomes.map((o, j) => (
                <li key={j}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
