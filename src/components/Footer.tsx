import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const copyrightYears = `1993-${new Date().getFullYear()}`;

  return (
    <footer className="footer surface">
      <div className="footer-brand serif">{t.nav.brand}</div>
      <p>{copyrightYears} {t.nav.brand}. {t.footer.rights}</p>
    </footer>
  );
}
