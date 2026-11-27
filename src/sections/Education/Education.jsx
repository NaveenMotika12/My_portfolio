import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { certifications, educationList } from '../../data/education';
import styles from './Education.module.css';

/**
 * Education & Certifications section rendered from src/data/education.js.
 */
export default function Education() {
  return (
    <section id="education" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="06. Education & Certifications"
          title="Academic background & credentials"
          subtitle="Formal qualifications, technical training, and verified certifications."
        />

        <div className={styles.list}>
          {educationList.map((edu) => (
            <article key={edu.id} className={`${styles.card} glass-panel card-3d`}>
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

        {certifications?.length > 0 && (
          <div className={`${styles.certBox} glass-panel`}>
            <div className={styles.certHeader}>
              <Award size={20} className={styles.certIcon} aria-hidden="true" />
              <h3 className={styles.certTitle}>Certifications</h3>
            </div>
            <ul className={styles.certGrid}>
              {certifications.map((cert) => (
                <li key={cert} className={styles.certItem}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
