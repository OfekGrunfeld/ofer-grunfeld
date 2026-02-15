import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function HeroSection({ sectionRef, onPrimaryAction, onSecondaryAction, onScrollDown }) {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${t.contactData.whatsappNumber}`;
  const emailHref = `mailto:${t.contactData.email}`;

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

        <motion.div
          className="hero-availability"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
        >
          <div
            className="hero-contact-chip"
            role="button"
            tabIndex={0}
            onClick={onPrimaryAction}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onPrimaryAction();
              }
            }}
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            <span>{t.popup.whatsapp}: </span>
            <a
              href={whatsappHref}
              onClick={(event) => event.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="contact-ltr hero-contact-value"
            >
              {t.contactData.phone}
            </a>
          </div>
          <div
            className="hero-contact-chip"
            role="button"
            tabIndex={0}
            onClick={onPrimaryAction}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onPrimaryAction();
              }
            }}
          >
            <i className="fa-solid fa-envelope" aria-hidden="true" />
            <span>{t.popup.email}: </span>
            <a href={emailHref} onClick={(event) => event.stopPropagation()} className="contact-ltr hero-contact-value">
              {t.contactData.email}
            </a>
          </div>
        </motion.div>

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
          <a
            href="#contact"
            className="cta-btn"
            onClick={(event) => {
              event.preventDefault();
              onPrimaryAction();
            }}
          >
            {t.hero.primaryCta}
          </a>
        </motion.div>
      </div>

      <button type="button" className="hero-scroll" onClick={onScrollDown} aria-label={t.hero.scrollHint}>
        <span>{t.hero.scrollHint}</span>
        <span className="hero-scroll-icon" aria-hidden="true">
          <i className="fa-solid fa-angles-down" />
        </span>
      </button>
    </section>
  );
}
