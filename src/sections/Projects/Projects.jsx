import { useState } from 'react';
import { ExternalLink, FolderGit2, Layers } from 'lucide-react';
import { GitHubIcon } from '../../components/Icons/SocialIcons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const CATEGORIES = [
  'All',
  'Production & Full Stack',
  'AI & Backend',
  'Architecture & Exploration',
  'Personal',
];

/**
 * Clean, scannable Projects showcase with category filters.
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="04. Projects"
          title="Selected platforms & engineering work"
          subtitle="Filter by domain to explore full-stack production apps, AI/backend services, and system architecture."
        />

        <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={`${styles.card} glass-panel card-3d`}>
              <div className={styles.cardTop}>
                <div className={styles.topLeft}>
                  <div className={styles.folderIcon}>
                    <FolderGit2 size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.topMeta}>
                    <span className={styles.scopeBadge}>{project.scopeBadge}</span>
                    <span className={styles.timeline}>{project.timeline}</span>
                  </div>
                </div>

                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} live demo`}
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.titleBlock}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.role}>{project.role}</p>
              </div>

              <p className={styles.description}>{project.description}</p>

              {project.features?.length > 0 && (
                <ul className={styles.features}>
                  {project.features.map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {project.architectureNote && (
                <div className={styles.archBox}>
                  <Layers size={14} aria-hidden="true" className={styles.archIcon} />
                  <span>{project.architectureNote}</span>
                </div>
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
