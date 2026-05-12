'use client';

export default function FooterSection() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="assets/Veducate Logo.png" alt="Veducate" style={{ height: '36px' }} />
          <p>Transforming engineering education through AI, immersive VR, and real-world practice.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <a href="#ecosystem">Smart LMS</a>
          <a href="#ecosystem">VR Labs</a>
          <a href="#ecosystem">Coding Engine</a>
          <a href="#ecosystem">Career Hub</a>
          <a href="#ecosystem">Analytics</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Documentation</a>
          <a href="#">Status</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Veducate. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
