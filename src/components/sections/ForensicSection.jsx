import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const serviceIcons = ["⌘", "⌗", "✦"];

export default function ForensicSection({ sectionRef }) {
  const { t } = useLanguage();

  return (
    <section id="forensic" ref={sectionRef} className="section section-forensic">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.forensic.kicker}</span>
          <h2 className="section-title serif">{t.forensic.title}</h2>
          <p className="section-subtitle">{t.forensic.subtitle}</p>
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
                {serviceIcons[index % serviceIcons.length]}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="timeline-wrap surface">
          <h3>{t.forensic.timelineTitle}</h3>
          <div className="timeline-grid">
            {t.forensic.timelineSteps.map((step, index) => (
              <article key={step.title} className="timeline-step">
                <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
