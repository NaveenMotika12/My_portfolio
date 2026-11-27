import { Code2, Server } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TiltCard from '../../components/TiltCard/TiltCard';
import { profile } from '../../data/profile';
import styles from './About.module.css';

/**
 * About Me section with clear Frontend vs Backend engineering split and highlights.
 */
export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="01. About Me"
          title="Full Stack, Backend & AI Integration"
          subtitle="Clear visibility into how I build across the frontend, backend services, databases, and AI workflows."
        />

        <div className={styles.layout}>
          <div className={styles.story}>
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <div className={styles.splitGrid}>
              <TiltCard className={styles.splitCard}>
                <div className={styles.splitHead}>
                  <Code2 size={18} className={styles.splitIcon} aria-hidden="true" />
                  <h3 className={styles.splitTitle}>Frontend Engineering</h3>
                </div>
                <ul className={styles.splitList}>
                  <li>React.js, React Native, JavaScript (ES6+), TypeScript</li>
                  <li>Reusable Components, Hooks, Props, State &amp; Forms</li>
                  <li>Responsive Dashboards, Real-time UI &amp; REST Integration</li>
                </ul>
              </TiltCard>

              <TiltCard className={styles.splitCard}>
                <div className={styles.splitHead}>
                  <Server size={18} className={styles.splitIcon} aria-hidden="true" />
                  <h3 className={styles.splitTitle}>Backend &amp; AI Systems</h3>
                </div>
                <ul className={styles.splitList}>
                  <li>Node.js, Express.js, Python, FastAPI &amp; Microservices</li>
                  <li>PostgreSQL, Redis Caching, JWT Auth &amp; API Gateways</li>
                  <li>Gemini API, OpenAI API, RAG, pgvector &amp; Docker/Coolify</li>
                </ul>
              </TiltCard>
            </div>
          </div>

          <div className={styles.highlightsGrid}>
            {profile.highlights.map((item) => (
              <TiltCard key={item.label} className={styles.highlightCard}>
                <span className={styles.highlightLabel}>{item.label}</span>
                <strong className={styles.highlightValue}>{item.value}</strong>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
