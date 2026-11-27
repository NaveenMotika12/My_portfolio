import { useEffect, useState } from 'react';
import { Activity, ArrowRight, Code2, Cpu, Database, Download, MapPin, Server } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../components/Icons/SocialIcons';
import TiltCard from '../../components/TiltCard/TiltCard';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/siteConfig';
import styles from './Hero.module.css';

const STREAM_STEPS = [
  { node: 'React / RN Client', detail: 'JSX · Hooks · State', status: 'UI' },
  { node: 'API Gateway', detail: 'REST · Rate Limit · CORS', status: '200' },
  { node: 'Auth & Core Services', detail: 'JWT · Middleware · Validation', status: 'OK' },
  { node: 'Redis Cache', detail: 'Semantic & Session Cache', status: 'HIT' },
  { node: 'PostgreSQL + pgvector', detail: 'Relational + Vector Search', status: 'SQL' },
  { node: 'FastAPI + Gemini RAG', detail: 'AI Context & Streaming', status: 'AI' },
];

/**
 * Hero section with live typing role, 3D portrait card, and live Full-Stack request stream.
 */
export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const currentRole = profile.roleSubtitles[roleIndex];
    const speed = isDeleting ? 35 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profile.roleSubtitles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STREAM_STEPS.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className={`${styles.topBadges} animate-fade-in`}>
            {siteConfig.openToWork && (
              <div className={`${styles.statusBadge} glass-panel`}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{profile.availabilityText}</span>
              </div>
            )}
            <div className={`${styles.locationBadge} glass-panel`}>
              <MapPin size={14} aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>

          <h1 className={`${styles.title} animate-fade-in delay-1`}>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className={`${styles.typingLine} animate-fade-in delay-1`}>
            <span className={styles.prompt}>&gt;_</span>
            <span className={styles.typedText}>{displayedText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
            <span className={styles.expTag}>{profile.experienceYears}</span>
          </div>

          <p className={`${styles.bio} animate-fade-in delay-2`}>
            {profile.headline} {profile.shortBio}
          </p>

          <div className={`${styles.ctaRow} animate-fade-in delay-3`}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>Explore Projects</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            {siteConfig.showResumeButton && (
              <button
                type="button"
                onClick={onOpenResume}
                className={`${styles.secondaryBtn} glass-panel`}
              >
                <Download size={17} aria-hidden="true" />
                <span>View / Download Resume</span>
              </button>
            )}
          </div>

          <div className={`${styles.socials} animate-fade-in delay-3`}>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GitHubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedInIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <aside className={`${styles.visualCol} animate-fade-in delay-2`}>
          <div className={styles.cosmicStage} aria-label="3D Cosmic Profile">
            <div className={styles.cosmicHalo} aria-hidden="true" />
            <div className={`${styles.orbitTilt} ${styles.orbitOne}`} aria-hidden="true">
              <span className={styles.satIcon} style={{ '--pos': '0deg' }} title="Frontend">
                <Code2 size={14} />
              </span>
              <span className={styles.satIcon} style={{ '--pos': '180deg' }} title="Backend">
                <Server size={14} />
              </span>
            </div>
            <div className={`${styles.orbitTilt} ${styles.orbitTwo}`} aria-hidden="true">
              <span className={styles.satIcon} style={{ '--pos': '90deg' }} title="Databases">
                <Database size={14} />
              </span>
              <span className={styles.satIcon} style={{ '--pos': '270deg' }} title="AI & RAG">
                <Cpu size={14} />
              </span>
            </div>
            <div className={styles.orbFrame}>
              <img
                src={profile.profileImage}
                alt={`${profile.name} portrait`}
                className={styles.orbImg}
              />
            </div>
            <span className={styles.orbBadge}>
              <span className={styles.statusDot} aria-hidden="true" />
              Exploring Full Stack &amp; AI Universe
            </span>
          </div>

          <TiltCard className={styles.streamCard} aria-label="Live Full-Stack Architecture Stream">
            <div className={styles.streamHeader}>
              <span className={styles.streamTitle}>
                <Activity size={14} className={styles.streamIcon} aria-hidden="true" />
                LIVE FULL-STACK PIPELINE
              </span>
              <span className={styles.streamLive}>● STREAMING</span>
            </div>
            <ul className={styles.streamList}>
              {STREAM_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <li
                    key={step.node}
                    className={`${styles.streamItem} ${isActive ? styles.streamActive : ''}`}
                  >
                    <div className={styles.streamLeft}>
                      <span className={styles.streamDot} aria-hidden="true" />
                      <div>
                        <div className={styles.streamNode}>{step.node}</div>
                        <div className={styles.streamDetail}>{step.detail}</div>
                      </div>
                    </div>
                    <span className={styles.streamBadge}>{step.status}</span>
                  </li>
                );
              })}
            </ul>
          </TiltCard>
        </aside>
      </div>
    </section>
  );
}
