import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { educationList } from '../../data/education';
import styles from './Education.module.css';

/**
 * Education section rendered from src/data/education.js.
 */
export default function Education() {
  return (
    <section id="education" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="05. Education"
          title="Academic background"
          subtitle="Formal qualifications and foundational computer science studies."
        />

        <div className={styles.list}>
          {educationList.map((edu) => (
            <article key={edu.id} className={styles.card}>
              <div className={styles.iconBox}>
                <GraduationCap size={24} aria-hidden="true" />
              </div>

              <div className={styles.content}>
                <div className={styles.topRow}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} aria-hidden="true" />
                      {edu.period}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={14} aria-hidden="true" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.details && <p className={styles.details}>{edu.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
