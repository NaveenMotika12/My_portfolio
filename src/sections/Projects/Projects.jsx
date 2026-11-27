import { useState } from 'react';
import { ArrowUpRight, ExternalLink, FolderGit2, Layers } from 'lucide-react';
import { GitHubIcon } from '../../components/Icons/SocialIcons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TiltCard from '../../components/TiltCard/TiltCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
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
 * Clean, scannable Projects showcase with category filters and deep Case Study modal.
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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
          subtitle="Click any project's Technical Case Study to inspect its exact Frontend, Backend, Database, AI/API, and DevOps stack."
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
            <TiltCard key={project.id} as="article" className={styles.card}>
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
                      aria-label={`${project.title} live website`}
                      title="Visit Live Website"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                  {project.adminUrl && (
                    <a
                      href={project.adminUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} admin portal`}
                      title="Admin Portal"
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
                  {project.features.slice(0, 3).map((item, idx) => (
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
                {project.techStack.slice(0, 6).map((tech) => (
                  <li key={tech} className={styles.techTag}>
                    {tech}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className={styles.caseStudyBtn}
              >
                <span>View Technical Case Study</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </TiltCard>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
