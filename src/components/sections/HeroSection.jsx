import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function HeroSection({ sectionRef, onPrimaryAction, onSecondaryAction, onScrollDown }) {
  const { t } = useLanguage();

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="pulse-dot" aria-hidden="true" />
          {t.hero.badge}
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
        >
          <button type="button" className="cta-btn" onClick={onPrimaryAction}>
            {t.hero.primaryCta}
          </button>
          <button type="button" className="ghost-btn" onClick={onSecondaryAction}>
            {t.hero.secondaryCta}
          </button>
        </motion.div>
      </div>

      <button type="button" className="hero-scroll" onClick={onScrollDown} aria-label={t.hero.scrollHint}>
        <span>{t.hero.scrollHint}</span>
        <span className="hero-scroll-icon" aria-hidden="true">
          ⌄
        </span>
      </button>
    </section>
  );
}
