import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { profile } from '../../data/profile';
import styles from './About.module.css';

/**
 * About Me section with engineering background, highlights, and core strengths.
 */
export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="01. About Me"
          title="Full Stack, Backend & AI Integration"
          subtitle="Practical engineering across web applications, microservices, database optimization, and AI workflows."
        />

        <div className={styles.layout}>
          <div className={styles.story}>
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <div className={styles.strengthsWrap}>
              <h3 className={styles.strengthsTitle}>Core Engineering Strengths</h3>
              <ul className={styles.strengthsList}>
                {profile.strengths.map((strength) => (
                  <li key={strength} className={`${styles.strengthChip} glass-panel`}>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.highlightsGrid}>
            {profile.highlights.map((item) => (
              <div key={item.label} className={`${styles.highlightCard} glass-panel card-3d`}>
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
