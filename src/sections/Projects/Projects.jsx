import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GitHubIcon } from '../../components/Icons/SocialIcons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

/**
 * Projects showcase rendered from src/data/projects.js.
 */
export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="04. Projects"
          title="Selected work & real-world builds"
          subtitle="Full stack web applications, backend services, and mobile experiences. Easily extensible via src/data/projects.js."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.folderIcon}>
                  <FolderGit2 size={22} aria-hidden="true" />
                </div>
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} GitHub repository`}
                      title="View Source on GitHub"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} live demo`}
                      title="Open Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <span className={styles.category}>{project.category}</span>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {project.highlights?.length > 0 && (
                <ul className={styles.highlights}>
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <ul className={styles.techList}>
                {project.techStack.map((tech) => (
                  <li key={tech} className={styles.techTag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
