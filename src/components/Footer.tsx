import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer surface">
      <div className="footer-brand serif">{t.nav.brand}</div>
      <p>
        © {new Date().getFullYear()} {t.nav.brand}. {t.footer.rights}
      </p>
    </footer>
  );
}
