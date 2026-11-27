import { ArrowRight, Download, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../components/Icons/SocialIcons';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/siteConfig';
import styles from './Hero.module.css';

/**
 * Above-the-fold hero section introducing Motika Naveen and core stack.
 */
export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          {siteConfig.openToWork && (
            <div className={`${styles.statusBadge} animate-fade-in`}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>{profile.availabilityText}</span>
            </div>
          )}

          <h1 className={`${styles.title} animate-fade-in delay-1`}>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className={`${styles.roleLine} animate-fade-in delay-1`}>
            {profile.role} · <span className={styles.expTag}>{profile.experienceYears} Experience</span>
          </p>

          <p className={`${styles.bio} animate-fade-in delay-2`}>
            {profile.headline} {profile.shortBio}
          </p>

          <div className={`${styles.ctaRow} animate-fade-in delay-3`}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>View Projects</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            {siteConfig.showResumeButton && (
              <a
                href={profile.contact.resumeUrl}
                download={profile.contact.resumeFileName}
                className={styles.secondaryBtn}
              >
                <Download size={17} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
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

        <aside className={`${styles.codeCard} animate-fade-in delay-2`} aria-label="Developer summary">
          <div className={styles.codeHeader}>
            <div className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className={styles.fileName}>
              <Terminal size={13} aria-hidden="true" />
              developer.config.js
            </span>
          </div>
          <pre className={styles.codeBody}>
            <code>
{`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  experience: "${profile.experienceYears}",
  frontend: ["React.js", "React Native", "TS"],
  backend: ["Node.js", "Express", "Python", "FastAPI"],
  database: ["PostgreSQL", "Redis"],
  infra: ["REST APIs", "Microservices", "Docker"]
};`}
            </code>
          </pre>
        </aside>
      </div>
    </section>
  );
}
