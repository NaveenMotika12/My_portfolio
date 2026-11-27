import { useEffect, useState } from 'react';
import { siteConfig } from './config/siteConfig';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';

/**
 * Root application component managing theme state and portfolio sections.
 */
export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(siteConfig.themeStorageKey);
    return saved === 'light' || saved === 'dark' ? saved : siteConfig.defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(siteConfig.themeStorageKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
