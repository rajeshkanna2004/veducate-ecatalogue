'use client';
import { useRef, useEffect } from 'react';

export default function IntroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 600, H = 400;
    canvas.width = W;
    canvas.height = H;

    const particles = [];
    const PARTICLE_COUNT = window.matchMedia('(max-width: 768px)').matches ? 120 : 260;
    const centerX = W / 2, centerY = H / 2;

    // Generate target positions in a "V" shape for Veducate
    const targets = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const r = 80 + Math.random() * 80;
      // Create a V shape
      const segment = i % 5;
      let tx, ty;
      if (segment === 0) {
        // V left stroke
        const t = (i / PARTICLE_COUNT) * 2;
        tx = centerX - 80 + t * 40;
        ty = centerY - 80 + t * 80;
      } else if (segment === 1) {
        // V right stroke
        const t = (i / PARTICLE_COUNT) * 2;
        tx = centerX + 80 - t * 40;
        ty = centerY - 80 + t * 80;
      } else {
        // Surrounding glow particles
        tx = centerX + Math.cos(angle) * r;
        ty = centerY + Math.sin(angle) * (r * 0.6);
      }
      targets.push({ x: tx + (Math.random() - 0.5) * 8, y: ty + (Math.random() - 0.5) * 8 });
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: targets[i].x,
        ty: targets[i].y,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
        progress: 0,
      });
    }

    let animFrame;
    let assembled = false;
    let startTime = null;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !assembled) {
        assembled = true;
        startTime = Date.now();
      }
    }, { threshold: 0.3 });

    observer.observe(canvas);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const elapsed = startTime ? (Date.now() - startTime) / 1000 : 0;

      particles.forEach((p) => {
        if (assembled && p.progress < 1) {
          p.progress = Math.min(1, p.progress + p.speed);
          const ease = 1 - Math.pow(1 - p.progress, 3);
          p.x = p.x + (p.tx - p.x) * ease * 0.05;
          p.y = p.y + (p.ty - p.y) * ease * 0.05;
        }

        // Gentle float when assembled
        const floatX = assembled && p.progress > 0.8 ? Math.sin(elapsed * 2 + p.tx) * 1.5 : 0;
        const floatY = assembled && p.progress > 0.8 ? Math.cos(elapsed * 1.5 + p.ty) * 1.5 : 0;

        ctx.beginPath();
        ctx.arc(p.x + floatX, p.y + floatY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 158, 255, ${p.alpha})`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section intro" id="intro">
      <div className="intro-canvas-wrap">
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="intro-content">
        <p className="intro-eyebrow" data-anim="intro">The Solution</p>
        <h2 className="intro-title" data-anim="intro">
          Meet Veducate
        </h2>
        <p className="intro-subtitle" data-anim="intro">
          One integrated ecosystem that transforms how engineering colleges teach, 
          how students learn, and how graduates launch careers — powered by smart technology, 
          immersive VR, and real-world practice.
        </p>
      </div>

      <div className="orbit-wrap" data-anim="orbit">
        <div className="orbit-center">V</div>
        <div className="orbit-ring" />
        <div className="orbit-ring" />
        {[
          { label: 'Smart LMS', angle: '-90deg', radius: '170px', duration: '24s' },
          { label: 'VR Labs', angle: '0deg', radius: '170px', duration: '24s' },
          { label: 'Coding', angle: '90deg', radius: '170px', duration: '24s' },
          { label: 'Careers', angle: '180deg', radius: '170px', duration: '24s' },
          { label: 'Analytics', angle: '-40deg', radius: '145px', duration: '18s' },
        ].map((node) => (
          <div
            key={node.label}
            className="orbit-node visible"
            style={{
              '--orbit-angle': node.angle,
              '--orbit-radius': node.radius,
              '--orbit-duration': node.duration,
            }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </section>
  );
}
