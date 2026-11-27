import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { profile } from '../../data/profile';
import styles from './About.module.css';

/**
 * About Me section with engineering background and quick-glance highlights.
 */
export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="01. About Me"
          title="Engineering across the full stack"
          subtitle="Focused on clean architecture, maintainable code, and responsive user experiences."
        />

        <div className={styles.layout}>
          <div className={styles.story}>
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.highlightsGrid}>
            {profile.highlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span className={styles.highlightLabel}>{item.label}</span>
                <strong className={styles.highlightValue}>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
