import { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { skillCategories } from '../../data/skills';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';
import { certifications, educationList } from '../../data/education';
import styles from './ResumeModal.module.css';

/**
 * Clean, high-readability ATS Resume preview synced with src/data/*.js.
 */
export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Resume Preview">
      <div className={styles.toolbar}>
        <span className={styles.toolbarTitle}>
          Motika Naveen — ATS Resume Preview
        </span>
        <div className={styles.toolbarActions}>
          <button type="button" onClick={() => window.print()} className={styles.printBtn}>
            <Printer size={16} aria-hidden="true" />
            <span>Save / Download PDF</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close resume preview"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className={styles.sheetWrap}>
        <article className={styles.sheet} id="printable-resume">
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>{profile.name.toUpperCase()}</h1>
            <p className={styles.role}>{profile.role.toUpperCase()}</p>
            <p className={styles.stackBar}>
              React.js | React Native | Node.js | TypeScript | Python | PostgreSQL
            </p>
            <p className={styles.contactLine}>
              {profile.contact.phone} &nbsp;|&nbsp; {profile.contact.email} &nbsp;|&nbsp; {profile.location}
            </p>
            <p className={styles.contactLine}>
              {profile.contact.linkedin.replace('https://www.', '')} &nbsp;|&nbsp;{' '}
              {profile.contact.github.replace('https://', '')}
            </p>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.summaryText}>{profile.aboutParagraphs[0]}</p>
            <p className={styles.summaryText}>{profile.aboutParagraphs[1]}</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>TECHNICAL SKILLS</h2>
            <div className={styles.skillsTable}>
              {skillCategories.map((cat) => (
                <div key={cat.id} className={styles.skillRow}>
                  <span className={styles.skillCat}>{cat.title}:</span>
                  <span className={styles.skillItems}>
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>PROFESSIONAL EXPERIENCE</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <strong className={styles.entryTitle}>{exp.role}</strong>
                    <span className={styles.entrySub}> — {exp.company}</span>
                  </div>
                  <div className={styles.entryRight}>
                    <span>{exp.period}</span>
                    <span className={styles.entryLoc}>{exp.location}</span>
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>SELECTED PROJECTS</h2>
            {projects.slice(0, 6).map((proj) => (
              <div key={proj.id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <strong className={styles.entryTitle}>{proj.title}</strong>
                  </div>
                  <span className={styles.entryRight}>{proj.timeline}</span>
                </div>
                <p className={styles.projDesc}>{proj.description}</p>
                <p className={styles.projStack}>
                  <strong>Technologies:</strong> {proj.techStack.join(', ')}
                </p>
              </div>
            ))}
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>EDUCATION</h2>
            <div className={styles.eduList}>
              {educationList.map((edu) => (
                <div key={edu.id} className={styles.entryHeader}>
                  <div>
                    <strong className={styles.entryTitle}>{edu.degree}</strong>
                    <span className={styles.entrySub}>
                      {' '}
                      | {edu.institution} ({edu.details})
                    </span>
                  </div>
                  <span className={styles.entryRight}>{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>CERTIFICATIONS</h2>
            <p className={styles.certLine}>{certifications.join('  •  ')}</p>
          </section>
        </article>
      </div>
    </div>
  );
}
