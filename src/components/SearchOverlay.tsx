import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function SearchOverlay({ isOpen, query, onQueryChange, results, onClose, onSelect }) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.aside
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="search-panel surface"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="search-panel-head">
              <h3>{t.search.title}</h3>
              <button type="button" className="icon-btn" onClick={onClose} aria-label={t.popup.close}>
                ×
              </button>
            </div>

            <input
              className="search-overlay-input"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={t.search.placeholder}
              aria-label={t.search.placeholder}
              autoFocus
            />

            <div className="search-results">
              {results.length ? (
                results.map((result) => (
                  <button
                    type="button"
                    key={result.id}
                    className="search-result"
                    onClick={() => onSelect(result.section)}
                  >
                    <strong>{result.displayTitle}</strong>
                    <span>{result.displayDescription}</span>
                  </button>
                ))
              ) : (
                <p className="no-results">{t.search.noResults}</p>
              )}
            </div>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
