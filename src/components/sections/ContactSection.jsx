import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

function MiniPopup({ title, options, onClose }) {
  return (
    <motion.div
      className="mini-popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="mini-popup surface"
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.18 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close mini-close" onClick={onClose} aria-label="close">
          ×
        </button>
        <h4>{title}</h4>
        <div className="mini-popup-options">
          {options.map((option) => (
            <a
              key={option.label}
              href={option.href}
              className="mini-popup-option"
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <i className={option.iconClass} aria-hidden="true" />
              <span>{option.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ContactSection({ sectionRef, onContactClick }) {
  const { language, t } = useLanguage();
  const [isPhonePopupOpen, setPhonePopupOpen] = useState(false);
  const [isMapPopupOpen, setMapPopupOpen] = useState(false);

  const message = encodeURIComponent(
    language === "he"
      ? "היי עופר, אשמח לדבר לגבי תיק ירושה."
      : "Hey Ofer, I would like to speak about an inheritance case."
  );

  const normalizedPhone = t.contactData.phone.replace(/[^+\d]/g, "");

  const phoneOptions = [
    { label: t.popup.callDirect, href: `tel:${normalizedPhone}`, iconClass: "fa-solid fa-phone" },
    {
      label: t.popup.callWhatsapp,
      href: `https://wa.me/${t.contactData.whatsappNumber}?text=${message}`,
      iconClass: "fa-brands fa-whatsapp"
    }
  ];

  const mapQuery = encodeURIComponent(t.contactData.mapQuery);

  const mapOptions = [
    {
      label: t.popup.openGoogleMaps,
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
      iconClass: "fa-solid fa-map-location-dot"
    },
    {
      label: t.popup.openWaze,
      href: `https://waze.com/ul?q=${mapQuery}`,
      iconClass: "fa-solid fa-diamond-turn-right"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section section-contact">
      <div className="container contact-layout">
        <div className="contact-info">
          <span className="section-kicker">{t.contact.kicker}</span>
          <h2 className="section-title serif">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>

          <article className="contact-card surface">
            <button type="button" className="contact-line" onClick={() => setPhonePopupOpen(true)}>
              <span>{t.contact.phoneLabel}</span>
              <strong className="contact-ltr">{t.contactData.phone}</strong>
            </button>
            <a className="contact-line" href={`mailto:${t.contactData.email}`}>
              <span>{t.contact.emailLabel}</span>
              <strong className="contact-ltr">{t.contactData.email}</strong>
              <small className="previous-email-inline">{t.contact.previousEmailInline}</small>
            </a>
            <button type="button" className="contact-line" onClick={() => setMapPopupOpen(true)}>
              <span>{t.contact.addressLabel}</span>
              <strong>{t.contactData.address}</strong>
            </button>
            <div className="contact-line static">
              <span>{t.contact.officeHoursLabel}</span>
              <strong>{t.contact.officeHours}</strong>
            </div>
          </article>

          <p className="muted previous-email">
            <span aria-hidden="true">•</span>
            <span>{t.contact.previousEmail}</span>
          </p>
        </div>

        <aside className="contact-cta surface">
          <h3>{t.contact.ctaTitle}</h3>
          <p>{t.contact.ctaText}</p>
          <div className="notice">{t.contact.notice}</div>
          <button type="button" className="cta-btn" onClick={onContactClick}>
            {t.contact.ctaButton}
          </button>
        </aside>
      </div>

      <AnimatePresence>
        {isPhonePopupOpen ? (
          <MiniPopup
            title={t.popup.phoneTitle}
            options={phoneOptions}
            onClose={() => setPhonePopupOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMapPopupOpen ? (
          <MiniPopup
            title={t.popup.mapTitle}
            options={mapOptions}
            onClose={() => setMapPopupOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
