import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

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
  onContactClick,
  searchQuery,
  onSearchQueryChange
}) {
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleMobileNavigate = (key) => {
    onNavigate(key);
    closeMobileMenu();
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
          <div className="search-box is-open">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              value={searchQuery}
              onChange={(event) => onSearchQueryChange(event.target.value)}
              placeholder={t.nav.searchPlaceholder}
              aria-label={t.nav.searchPlaceholder}
            />
          </div>

          <button className="icon-btn" type="button" onClick={toggleTheme} aria-label="theme">
            {theme === "light" ? "☾" : "☼"}
          </button>

          <button
            className="icon-btn lang-btn"
            type="button"
            onClick={toggleLanguage}
            aria-label="language"
          >
            {t.common.languageToggle}
          </button>

          <button className="cta-btn small" type="button" onClick={onContactClick}>
            {t.nav.consultation}
          </button>

          <button
            className="icon-btn mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? "×" : "☰"}
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
            {navItems.map((item) => (
              <button key={item.key} type="button" onClick={() => handleMobileNavigate(item.key)}>
                {t.nav[item.labelKey]}
              </button>
            ))}
            <button type="button" className="cta-btn" onClick={onContactClick}>
              {t.nav.consultation}
            </button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
