import { Database, Layers, Layout, Server } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TiltCard from '../../components/TiltCard/TiltCard';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const ICON_MAP = {
  Layout,
  Server,
  Database,
  Layers,
};

/**
 * Technical Skills section rendered from src/data/skills.js.
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="02. Technical Skills"
          title="Core engineering stack"
          subtitle="Production technologies, backend architectures, databases, and AI integrations used across live platforms."
        />

        <div className={styles.grid}>
          {skillCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || Layers;
            return (
              <TiltCard key={category.id} as="article" className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <IconComponent size={20} aria-hidden="true" />
                  </div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>
                <p className={styles.cardDesc}>{category.description}</p>
                <ul className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <li key={skill} className={styles.skillBadge}>
                      <span className={styles.skillName}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
