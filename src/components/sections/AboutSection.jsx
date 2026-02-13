import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function AboutSection({ sectionRef }) {
  const { t } = useLanguage();

  return (
    <section id="about" ref={sectionRef} className="section section-about">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.about.kicker}</span>
          <h2 className="section-title serif">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-grid">
          <motion.article
            className="profile-card surface"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div className="profile-visual-wrap">
              <img src="/ofer.png" alt={t.about.profile.name} className="profile-image" />
            </div>
            <h3 className="serif">{t.about.profile.name}</h3>
            <p className="profile-role">{t.about.profile.role}</p>
          </motion.article>

          <div className="about-content">
            <article className="about-intro surface">
              <p>{t.about.profile.bio}</p>
              <p className="muted">{t.about.description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
