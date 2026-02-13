import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function ContactPopup({ isOpen, onClose }) {
  const { language, t } = useLanguage();

  const contactMessage =
    language === "he"
      ? "היי עופר, אשמח לקבוע פגישת ייעוץ לגבי תיק ירושה."
      : "Hey Ofer, I would like to schedule a consultation about an inheritance matter.";

  const message = encodeURIComponent(contactMessage);
  const subject = encodeURIComponent(
    language === "he" ? "בקשה לפגישת ייעוץ" : "Consultation Request"
  );

  const normalizedPhone = t.contactData.phone.replace(/[^+\d]/g, "");

  const options = [
    {
      iconClass: "fa-brands fa-whatsapp",
      label: t.popup.whatsapp,
      href: `https://wa.me/${t.contactData.whatsappNumber}?text=${message}`
    },
    {
      iconClass: "fa-solid fa-phone",
      label: t.popup.call,
      href: `tel:${normalizedPhone}`
    },
    {
      iconClass: "fa-solid fa-envelope",
      label: t.popup.email,
      href: `mailto:${t.contactData.email}?subject=${subject}&body=${message}`
    }
  ];

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal surface"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label={t.popup.close}>
              ×
            </button>
            <h3>{t.popup.title}</h3>
            {t.popup.subtitle ? <p className="muted">{t.popup.subtitle}</p> : null}

            <div className="contact-options">
              {options.map((option) => (
                <a
                  key={option.label}
                  className="contact-option"
                  href={option.href}
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
      ) : null}
    </AnimatePresence>
  );
}
