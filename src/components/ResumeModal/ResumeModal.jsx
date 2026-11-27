import { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { skillCategories } from '../../data/skills';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';
import { certifications, educationList } from '../../data/education';
import styles from './ResumeModal.module.css';

/**
 * Live ATS-friendly Resume preview generated directly from src/data/*.js.
 * Clicking "Save / Download PDF" opens the browser print dialog formatted cleanly for PDF export.
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

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Resume Preview">
      <div className={styles.toolbar}>
        <span className={styles.toolbarTitle}>
          Live Resume Preview (Auto-synced with Portfolio Data)
        </span>
        <div className={styles.toolbarActions}>
          <button type="button" onClick={handlePrintPdf} className={styles.printBtn}>
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
            <p className={styles.contactLine}>
              {profile.contact.phone} | {profile.contact.email} | {profile.location}
            </p>
            <p className={styles.contactLine}>
              LinkedIn: {profile.contact.linkedin} | GitHub: {profile.contact.github}
            </p>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.text}>{profile.aboutParagraphs[0]}</p>
            <p className={styles.text}>{profile.aboutParagraphs[1]}</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>TECHNICAL SKILLS</h2>
            <ul className={styles.skillRows}>
              {skillCategories.map((cat) => (
                <li key={cat.id} className={styles.text}>
                  <strong>{cat.title}:</strong> {cat.skills.map((s) => s.name).join(', ')}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>PROFESSIONAL EXPERIENCE</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.entry}>
                <div className={styles.entryHead}>
                  <strong>
                    {exp.role} | {exp.period}
                  </strong>
                  <span>
                    {exp.company} · {exp.location}
                  </span>
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
                <div className={styles.entryHead}>
                  <strong>
                    {proj.title} | {proj.timeline}
                  </strong>
                  <span className={styles.scopeText}>{proj.scopeBadge}</span>
                </div>
                <p className={styles.text}>{proj.description}</p>
                <p className={styles.techText}>
                  <strong>Stack:</strong> {proj.techStack.join(', ')}
                </p>
              </div>
            ))}
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitle}>EDUCATION &amp; CERTIFICATIONS</h2>
            {educationList.map((edu) => (
              <p key={edu.id} className={styles.text}>
                <strong>{edu.degree}</strong> | {edu.institution} | {edu.period} — {edu.details}
              </p>
            ))}
            <p className={styles.text} style={{ marginTop: '0.4rem' }}>
              <strong>Certifications:</strong> {certifications.join(' • ')}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
