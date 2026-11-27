import { Database, Layers, Layout, Server } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const ICON_MAP = {
  Layout,
  Server,
  Database,
  Layers,
};

/**
 * Technical Skills section with transparent exposure levels.
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="02. Technical Skills"
          title="Technologies & exposure levels"
          subtitle="Clearly distinguishing hands-on production skills, API integrations, exploration, and foundational training."
        />

        <div className={styles.grid}>
          {skillCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || Layers;
            return (
              <article key={category.id} className={`${styles.card} glass-panel card-3d`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <IconComponent size={20} aria-hidden="true" />
                  </div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>
                <p className={styles.cardDesc}>{category.description}</p>
                <ul className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <li key={skill.name} className={styles.skillBadge}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
