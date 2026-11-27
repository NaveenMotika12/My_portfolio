import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TiltCard from '../../components/TiltCard/TiltCard';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

/**
 * Work Experience timeline with consistent 2-line headers and TiltCard glassmorphism.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="03. Work Experience"
          title="Professional journey"
          subtitle="Roles, core responsibilities, and engineering contributions across my career."
        />

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <article key={exp.id} className={styles.item}>
              <div className={styles.marker} aria-hidden="true" />
              <TiltCard className={styles.card}>
                <div className={styles.headerBlock}>
                  <div className={styles.topRow}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.metaItem}>
                      <Calendar size={14} aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>

                  <div className={styles.subRow}>
                    <p className={styles.company}>
                      <Briefcase size={15} aria-hidden="true" />
                      <span>{exp.company}</span>
                    </p>
                    <span className={styles.metaItem}>
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className={styles.summary}>{exp.summary}</p>

                {exp.responsibilities?.length > 0 && (
                  <ul className={styles.bulletList}>
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        <span className={styles.bulletDot} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              </TiltCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
