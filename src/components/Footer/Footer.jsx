import { ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../Icons/SocialIcons';
import { profile } from '../../data/profile';
import { navLinks } from '../../data/navigation';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Clean developer footer with quick navigation, social links, and back-to-top button.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.brand}>{profile.name}</span>
          <p className={styles.copy}>
            © {CURRENT_YEAR} {profile.name}. Built with React &amp; Vite.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub profile"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={18} />
          </a>
          <a href="#top" className={styles.iconBtn} aria-label="Back to top" title="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
