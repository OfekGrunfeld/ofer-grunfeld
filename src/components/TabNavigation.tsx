import React from "react";
import { useLanguage } from "./LanguageContext";

export default function TabNavigation({ sectionRef, activeSection, sectionOrder, onNavigate }) {
  const { t } = useLanguage();

  return (
    <section className="tab-nav-wrap" ref={sectionRef}>
      <div className="tab-nav surface">
        <div className="tab-links">
          {sectionOrder.map((sectionKey) => (
            <button
              key={sectionKey}
              type="button"
              className={`tab-link ${activeSection === sectionKey ? "is-active" : ""}`}
              onClick={() => onNavigate(sectionKey)}
            >
              {t.tabs[sectionKey]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
