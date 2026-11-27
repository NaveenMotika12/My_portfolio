import { useEffect, useState } from 'react';
import { siteConfig } from './config/siteConfig';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CosmicCanvas from './components/CosmicCanvas/CosmicCanvas';
import ResumeModal from './components/ResumeModal/ResumeModal';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Architecture from './sections/Architecture/Architecture';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';

/**
 * Root application component managing theme state, scroll progress, resume modal, and sections.
 */
export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(siteConfig.themeStorageKey);
    return saved === 'light' || saved === 'dark' ? saved : siteConfig.defaultTheme;
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(siteConfig.themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openResume = () => setResumeOpen(true);

  return (
    <>
      <CosmicCanvas theme={theme} />
      <div className="no-print" style={{ position: 'relative', zIndex: 1 }}>
        <div className="scroll-progress-track" aria-hidden="true">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
        <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenResume={openResume} />
        <main>
          <Hero onOpenResume={openResume} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Architecture />
          <Education />
          <Contact onOpenResume={openResume} />
        </main>
        <Footer />
      </div>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
