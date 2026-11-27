import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/siteConfig';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

/**
 * Sticky responsive navigation bar with mobile drawer and theme switcher.
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={closeMenu}>
          <span className={styles.logoMark}>{profile.initials}</span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {siteConfig.showResumeButton && (
            <a
              href={profile.contact.resumeUrl}
              download={profile.contact.resumeFileName}
              className={styles.resumeBtn}
            >
              <Download size={15} aria-hidden="true" />
              <span>Resume</span>
            </a>
          )}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className="container">
            <ul className={styles.mobileList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              {siteConfig.showResumeButton && (
                <li>
                  <a
                    href={profile.contact.resumeUrl}
                    download={profile.contact.resumeFileName}
                    className={styles.mobileResumeLink}
                    onClick={closeMenu}
                  >
                    <Download size={16} aria-hidden="true" />
                    <span>Download Resume</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
