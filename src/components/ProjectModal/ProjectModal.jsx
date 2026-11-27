import { useEffect } from 'react';
import { Code2, Database, ExternalLink, Layers, Server, Terminal, X } from 'lucide-react';
import { GitHubIcon } from '../Icons/SocialIcons';
import styles from './ProjectModal.module.css';

/**
 * Detailed Technical Case Study modal showing per-project Frontend, Backend,
 * Database, Integrations, and DevOps skills.
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const skillBlocks = [
    { key: 'frontend', title: 'Frontend Technologies & Skills', icon: Code2, items: caseStudy?.frontend },
    { key: 'backend', title: 'Backend Technologies & Skills', icon: Server, items: caseStudy?.backend },
    { key: 'database', title: 'Database & Caching', icon: Database, items: caseStudy?.database },
    { key: 'integrations', title: 'AI, APIs & Third-Party Services', icon: Layers, items: caseStudy?.integrations },
    { key: 'devops', title: 'DevOps, Deployment & Support', icon: Terminal, items: caseStudy?.devops },
  ].filter((block) => block.items?.length > 0);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`${styles.modal} glass-panel`}>
        <div className={styles.header}>
          <div>
            <span className={styles.badge}>
              {project.scopeBadge} · {project.timeline}
            </span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.role}>{project.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.description}>{project.description}</p>

          {project.features?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.secHeading}>Business Features &amp; Contributions</h3>
              <ul className={styles.featureList}>
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.architectureNote && (
            <div className={styles.archNote}>
              <strong>Architecture:</strong> {project.architectureNote}
            </div>
          )}

          <div className={styles.skillsGrid}>
            {skillBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.key} className={styles.skillBlock}>
                  <h4 className={styles.blockTitle}>
                    <Icon size={16} className={styles.blockIcon} aria-hidden="true" />
                    <span>{block.title}</span>
                  </h4>
                  <ul className={styles.pillList}>
                    {block.items.map((item) => (
                      <li key={item} className={styles.pill}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              <ExternalLink size={16} />
              <span>Visit Live Website</span>
            </a>
          )}
          {project.adminUrl && (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <ExternalLink size={16} />
              <span>Admin Portal</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
