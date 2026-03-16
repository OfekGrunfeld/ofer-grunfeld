import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const serviceIcons = [
  "fa-solid fa-users-viewfinder",
  "fa-solid fa-wallet",
  "fa-solid fa-building-circle-check",
  "fa-solid fa-tree",
  "fa-solid fa-gavel"
];

export default function ForensicSection({ sectionRef }) {
  const { t } = useLanguage();

  return (
    <section id="forensic" ref={sectionRef} className="section section-forensic">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.forensic.kicker}</span>
        </div>

        <div className="services-grid">
          {t.forensic.services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card surface"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="service-icon" aria-hidden="true">
                <i className={serviceIcons[index % serviceIcons.length]} aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
