import { useEffect, useState } from 'react';
import { ArrowRight, Download, MapPin, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../components/Icons/SocialIcons';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/siteConfig';
import styles from './Hero.module.css';

/**
 * Hero section with live typing role indicator, profile avatar, and 3D glassmorphic terminal card.
 */
export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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
          <div className={styles.avatarRow}>
            <div className={styles.avatarFrame}>
              <img
                src={profile.profileImage}
                alt={`${profile.name} profile`}
                className={styles.avatarImg}
              />
            </div>
            <div className={`${styles.quickChip} glass-panel`}>
              <span className={styles.quickLabel}>Focus</span>
              <strong className={styles.quickValue}>Full Stack · Microservices · AI</strong>
            </div>
          </div>

          <div className={`${styles.codeCard} glass-panel card-3d`} aria-label="Developer summary">
            <div className={styles.codeHeader}>
              <div className={styles.dots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className={styles.fileName}>
                <Terminal size={13} aria-hidden="true" />
                motika_naveen.config.js
              </span>
            </div>
            <pre className={styles.codeBody}>
              <code>
{`const engineer = {
  name: "${profile.name}",
  experience: "${profile.experienceYears}",
  frontend: ["React.js", "React Native", "TS"],
  backend: ["Node.js", "Express", "Python", "FastAPI"],
  data: ["PostgreSQL", "Redis", "MongoDB", "pgvector"],
  ai: ["Google Gemini API", "RAG", "OpenAI API"],
  infra: ["Microservices", "Docker", "Coolify", "VPS"]
};`}
              </code>
            </pre>
          </div>
        </aside>
      </div>
    </section>
  );
}
