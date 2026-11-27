import { useState } from 'react';
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../components/Icons/SocialIcons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/siteConfig';
import styles from './Contact.module.css';

/**
 * Contact section with direct email copy, social links, resume download,
 * and a zero-dependency mailto message composer.
 */
export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="07. Contact"
          title="Let's build something together"
          subtitle="Reach out for full-stack roles, freelance collaborations, or technical discussions."
        />

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardHeading}>Direct Channels</h3>
            <p className={styles.cardText}>
              Prefer email or social links? Connect directly using the channels below.
            </p>

            <div className={styles.channelList}>
              <div className={styles.channelItem}>
                <Mail size={18} className={styles.channelIcon} aria-hidden="true" />
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>Email</span>
                  <a href={`mailto:${profile.contact.email}`} className={styles.channelValue}>
                    {profile.contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={styles.copyBtn}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className={styles.channelItem}>
                <Phone size={18} className={styles.channelIcon} aria-hidden="true" />
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>Phone</span>
                  <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className={styles.channelValue}>
                    {profile.contact.phone}
                  </a>
                </div>
              </div>

              <div className={styles.channelItem}>
                <MapPin size={18} className={styles.channelIcon} aria-hidden="true" />
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>Location</span>
                  <span className={styles.channelValue}>{profile.contact.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <GitHubIcon size={17} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <LinkedInIcon size={17} />
                <span>LinkedIn</span>
              </a>
              {siteConfig.showResumeButton && (
                <button type="button" onClick={onOpenResume} className={styles.socialBtn}>
                  <Download size={17} aria-hidden="true" />
                  <span>Resume</span>
                </button>
              )}
            </div>
          </div>

          <form className={styles.formCard} onSubmit={handleSubmit}>
            <h3 className={styles.cardHeading}>Send a Message</h3>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Jane Doe"
                className={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="jane@example.com"
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Tell me about your role, project, or question..."
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={16} aria-hidden="true" />
              <span>Open Email Client</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
