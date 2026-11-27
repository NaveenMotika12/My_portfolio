import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

/**
 * Work Experience timeline rendered from src/data/experience.js.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="03. Work Experience"
          title="Professional journey"
          subtitle="Roles, responsibilities, and engineering achievements across my career."
        />

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <article key={exp.id} className={styles.item}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.topRow}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>
                      <Briefcase size={15} aria-hidden="true" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} aria-hidden="true" />
                      {exp.period}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className={styles.summary}>{exp.summary}</p>

                {exp.responsibilities?.length > 0 && (
                  <div className={styles.block}>
                    <h4 className={styles.blockTitle}>Responsibilities</h4>
                    <ul className={styles.bulletList}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          <span className={styles.bulletDot} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.achievements?.length > 0 && (
                  <div className={styles.block}>
                    <h4 className={styles.blockTitle}>Key Achievements</h4>
                    <ul className={styles.bulletList}>
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className={styles.achievementItem}>
                          <CheckCircle2 size={15} aria-hidden="true" className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.techStack?.length > 0 && (
                  <ul className={styles.tags}>
                    {exp.techStack.map((tech) => (
                      <li key={tech} className={styles.tag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
