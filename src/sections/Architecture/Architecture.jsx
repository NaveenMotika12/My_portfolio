import { Compass, Cpu, Network } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import {
  aiIntegrationHighlights,
  astroVastuResearch,
  grahavaniServices,
} from '../../data/research';
import styles from './Architecture.module.css';

/**
 * Dedicated Architecture, AI Integration, and Research/Exploration section.
 */
export default function Architecture() {
  return (
    <section id="architecture" className="section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="05. Architecture, AI & Research"
          title="System design & ongoing exploration"
          subtitle="Microservices topology, practical Gemini/RAG integrations, and current R&D in spatial geometry."
        />

        <div className={styles.topGrid}>
          <div className={`${styles.panel} glass-panel card-3d`}>
            <div className={styles.panelHead}>
              <Network size={20} className={styles.icon} aria-hidden="true" />
              <h3 className={styles.panelTitle}>Grahavani Microservices Architecture</h3>
            </div>
            <p className={styles.panelDesc}>
              Distributed Node.js/Express.js services routed behind an API Gateway with Socket.IO realtime support and Redis caching.
            </p>
            <div className={styles.serviceGrid}>
              {grahavaniServices.map((svc) => (
                <div key={svc.port} className={styles.serviceCard}>
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceName}>{svc.name}</span>
                    <span className={styles.portBadge}>:{svc.port}</span>
                  </div>
                  <p className={styles.serviceRole}>{svc.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.panel} glass-panel card-3d`}>
            <div className={styles.panelHead}>
              <Cpu size={20} className={styles.icon} aria-hidden="true" />
              <h3 className={styles.panelTitle}>AI &amp; RAG Integration Exposure</h3>
            </div>
            <p className={styles.panelDesc}>
              Practical API integration, semantic retrieval, and response troubleshooting (using external LLM APIs, not model training).
            </p>
            <div className={styles.aiList}>
              {aiIntegrationHighlights.map((block) => (
                <div key={block.title} className={styles.aiBlock}>
                  <h4 className={styles.aiTitle}>{block.title}</h4>
                  <ul className={styles.bullets}>
                    {block.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <article className={`${styles.researchCard} glass-panel card-3d`}>
          <div className={styles.researchHead}>
            <div className={styles.panelHead}>
              <Compass size={22} className={styles.icon} aria-hidden="true" />
              <h3 className={styles.panelTitle}>{astroVastuResearch.title}</h3>
            </div>
            <span className={styles.researchBadge}>{astroVastuResearch.status}</span>
          </div>
          <p className={styles.researchStatement}>{astroVastuResearch.statement}</p>
          <ul className={styles.researchAreas}>
            {astroVastuResearch.areas.map((area) => (
              <li key={area} className={styles.areaItem}>
                {area}
              </li>
            ))}
          </ul>
          <ul className={styles.techRow}>
            {astroVastuResearch.tech.map((t) => (
              <li key={t} className={styles.techPill}>
                {t}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
