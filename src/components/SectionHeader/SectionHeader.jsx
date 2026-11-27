import styles from './SectionHeader.module.css';

/**
 * Consistent section title block with monospace eyebrow and optional subtitle.
 */
export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className={styles.header}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
