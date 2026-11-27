import { useState } from 'react';
import { Compass, Cpu, Database, Globe, Layers, Rocket, Server, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import styles from './UniverseExplorer.module.css';

const PLANET_ICONS = [
  Sparkles,
  Globe,
  Rocket,
  Cpu,
  Layers,
  Server,
  Database,
  Compass,
];

/**
 * Interactive 3D Cosmic Universe Explorer.
 * Keeps a fixed-height previewBar and sticky activeId so hovering between chips
 * never causes layout shift or page shaking.
 */
export default function UniverseExplorer({ projects, onSelectProject }) {
  const [activeId, setActiveId] = useState(projects[0]?.id || null);
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  const innerOrbit = projects.slice(0, 4);
  const outerOrbit = projects.slice(4, 11);
  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const handlePlanetEnter = (id) => {
    setActiveId(id);
    setIsOrbitPaused(true);
  };

  const handlePlanetLeave = () => {
    setIsOrbitPaused(false);
  };

  return (
    <div className={`${styles.universeWrap} glass-panel`}>
      <div className={styles.hintBar}>
        <span className={styles.hintDot} aria-hidden="true" />
        <span>
          3D Project Universe — Hover any planet to pause &amp; preview, click to open its Technical Case Study
        </span>
      </div>

      <div className={styles.stage}>
        <div className={styles.coreSun}>
          <img
            src={profile.profileImage}
            alt={profile.name}
            className={styles.coreImg}
          />
          <span className={styles.coreLabel}>Full Stack Core</span>
        </div>

        <div
          className={`${styles.orbitRing} ${styles.innerRing} ${isOrbitPaused ? styles.paused : ''}`}
        >
          {innerOrbit.map((proj, idx) => {
            const Icon = PLANET_ICONS[idx % PLANET_ICONS.length];
            const angle = (360 / innerOrbit.length) * idx;
            const isActive = activeId === proj.id;
            return (
              <div
                key={proj.id}
                className={styles.planetSlot}
                style={{ '--angle': `${angle}deg`, '--radius': '140px' }}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(proj)}
                  onMouseEnter={() => handlePlanetEnter(proj.id)}
                  onMouseLeave={handlePlanetLeave}
                  className={`${styles.planetBtn} ${isOrbitPaused ? styles.paused : ''} ${
                    isActive ? styles.planetActive : ''
                  }`}
                  aria-label={`Inspect ${proj.title}`}
                >
                  <span className={styles.planetInner}>
                    <Icon size={15} aria-hidden="true" />
                    <span className={styles.planetName}>{proj.title.split('–')[0].trim()}</span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles.orbitRing} ${styles.outerRing} ${isOrbitPaused ? styles.paused : ''}`}
        >
          {outerOrbit.map((proj, idx) => {
            const Icon = PLANET_ICONS[(idx + 3) % PLANET_ICONS.length];
            const angle = (360 / outerOrbit.length) * idx;
            const isActive = activeId === proj.id;
            return (
              <div
                key={proj.id}
                className={styles.planetSlot}
                style={{ '--angle': `${angle}deg`, '--radius': '240px' }}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(proj)}
                  onMouseEnter={() => handlePlanetEnter(proj.id)}
                  onMouseLeave={handlePlanetLeave}
                  className={`${styles.planetBtn} ${styles.planetOuter} ${
                    isOrbitPaused ? styles.paused : ''
                  } ${isActive ? styles.planetActive : ''}`}
                  aria-label={`Inspect ${proj.title}`}
                >
                  <span className={styles.planetInner}>
                    <Icon size={14} aria-hidden="true" />
                    <span className={styles.planetName}>{proj.title.split('–')[0].trim()}</span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <div className={styles.previewBar}>
          <div className={styles.previewInfo}>
            <span className={styles.previewTag}>
              {activeProject.scopeBadge} · {activeProject.timeline}
            </span>
            <strong className={styles.previewTitle}>{activeProject.title}</strong>
            <p className={styles.previewDesc}>{activeProject.description}</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectProject(activeProject)}
            className={styles.previewBtn}
          >
            Open Case Study
          </button>
        </div>
      )}

      <div className={styles.legendGrid}>
        {projects.map((proj, idx) => {
          const Icon = PLANET_ICONS[idx % PLANET_ICONS.length];
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => onSelectProject(proj)}
              onMouseEnter={() => setActiveId(proj.id)}
              className={`${styles.legendChip} ${activeId === proj.id ? styles.legendActive : ''}`}
            >
              <Icon size={14} aria-hidden="true" />
              <span>{proj.title.split('–')[0].trim()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
