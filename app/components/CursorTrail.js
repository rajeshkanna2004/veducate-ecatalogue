'use client';
import { useRef, useEffect } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    const particles = [];
    let mouse = { x: 0, y: 0 };
    let animFrame;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 4 + 1,
          alpha: 1,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          hue: Math.random() > 0.5 ? 245 : 165,
        });
      }
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.alpha = p.life;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${p.alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      // Keep particles array manageable
      if (particles.length > 150) particles.splice(0, particles.length - 150);
      animFrame = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" />;
}
