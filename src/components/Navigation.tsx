import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const navItems = [
  { key: "about", labelKey: "about" },
  { key: "forensic", labelKey: "forensic" },
  { key: "testimonials", labelKey: "testimonials" },
  { key: "contact", labelKey: "contact" }
];

function ScaleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="scale-mark">
      <path d="M12 3v16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7 7h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 8l-2 4h4l-2-4Z" stroke="currentColor" fill="none" strokeWidth="1.5" />
      <path d="M18 8l-2 4h4l-2-4Z" stroke="currentColor" fill="none" strokeWidth="1.5" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Navigation({
  activeSection,
  onNavigate,
  onContactClick
}) {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigate = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="top-nav-wrapper">
      <div className="top-nav surface">
        <button
          className="brand"
          type="button"
          onClick={() => onNavigate("hero")}
          aria-label={t.nav.brand}
        >
          <span className="brand-icon">
            <ScaleMark />
          </span>
          <span className="brand-text serif">{t.nav.brand}</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav-link ${activeSection === item.key ? "is-active" : ""}`}
              onClick={() => onNavigate(item.key)}
            >
              {t.nav[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label="Language selection">
            <button
              className={`lang-choice ${language === "en" ? "is-active" : ""}`}
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              English
            </button>
            <button
              className={`lang-choice ${language === "he" ? "is-active" : ""}`}
              type="button"
              onClick={() => setLanguage("he")}
              aria-pressed={language === "he"}
            >
              עברית
            </button>
          </div>

          <button className="cta-btn small" type="button" onClick={onContactClick}>
            {t.nav.consultation}
          </button>

          <button
            className="icon-btn mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? "×" : "="}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.nav
            className="mobile-nav surface"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-nav-sections">
              {navItems.map((item) => (
                <button key={item.key} type="button" onClick={() => handleMobileNavigate(item.key)}>
                  {t.nav[item.labelKey]}
                </button>
              ))}
            </div>

            <div className="mobile-nav-tools">
              <div className="mobile-language-switch" role="group" aria-label="Language selection">
                <button
                  type="button"
                  className={`mobile-lang-btn ${language === "en" ? "is-active" : ""}`}
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`mobile-lang-btn ${language === "he" ? "is-active" : ""}`}
                  onClick={() => setLanguage("he")}
                  aria-pressed={language === "he"}
                >
                  עברית
                </button>
              </div>
              <button
                type="button"
                className="cta-btn"
                onClick={() => {
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
              >
                {t.nav.consultation}
              </button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
