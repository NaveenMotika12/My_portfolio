import { useEffect, useRef } from 'react';
import styles from './CosmicCanvas.module.css';

/**
 * Lightweight 60fps 3D-depth starfield canvas for the cosmic universe theme.
 */
export default function CosmicCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const STAR_COUNT = 110;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.5 + 0.3,
      radius: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.65 + 0.25,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = theme === 'dark';

      for (const star of stars) {
        star.y -= 0.14 * star.z;
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.9 || star.alpha < 0.2) star.twinkleSpeed *= -1;
        if (star.y < -4) {
          star.y = height + 4;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(186, 230, 253, ${star.alpha.toFixed(2)})`
          : `rgba(2, 132, 199, ${(star.alpha * 0.35).toFixed(2)})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
