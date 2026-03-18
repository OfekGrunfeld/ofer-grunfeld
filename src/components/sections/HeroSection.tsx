import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import heroBackground from "../../assets/hero-briefcase-background.png";

export default function HeroSection({ sectionRef, onPrimaryAction, onSecondaryAction }) {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${t.contactData.whatsappNumber}`;
  const emailHref = `mailto:${t.contactData.email}`;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-section"
      style={{ "--hero-bg-image": `url(${heroBackground})` }}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
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
            <span>{t.hero.whatsappLabel}: </span>
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

      </div>
    </section>
  );
}
