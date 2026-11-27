import { useRef, useState } from 'react';
import styles from './TiltCard.module.css';

/**
 * Interactive 3D perspective card with cursor-tracking spotlight.
 */
export default function TiltCard({ children, className = '', as: Component = 'div', ...props }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const rotateY = ((x - rect.width / 2) / rect.width) * 7;
    const rotateX = -((y - rect.height / 2) / rect.height) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`);
    setSpotlight({ x: px, y: py, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Component
      ref={cardRef}
      className={`${styles.tiltCard} glass-panel ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={styles.spotlight}
        aria-hidden="true"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(360px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0, 245, 212, 0.14), transparent 65%)`,
        }}
      />
      <div className={styles.inner}>{children}</div>
    </Component>
  );
}
