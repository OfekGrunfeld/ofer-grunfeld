import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function TestimonialsSection({ sectionRef, onContactClick }) {
  const { direction, language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const testimonials = t.testimonials.items;
  const isRtl = direction === "rtl";
  const activeTestimonial = testimonials[activeIndex];
  const displayAuthor =
    language === "en" && showTranslation && activeTestimonial.translationAuthor
      ? activeTestimonial.translationAuthor
      : activeTestimonial.author;

  useEffect(() => {
    setShowTranslation(false);
  }, [activeIndex, language]);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section section-testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.testimonials.kicker}</span>
          <h2 className="section-title serif">{t.testimonials.title}</h2>
        </div>

        <div className="testimonial-shell surface">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              className="testimonial-slide"
              initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRtl ? 24 : -24 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote>
                {language === "en" && showTranslation && activeTestimonial.translation
                  ? activeTestimonial.translation
                  : activeTestimonial.quote}
              </blockquote>
              <footer>
                <strong>{displayAuthor}</strong>
                <span>{activeTestimonial.role}</span>
              </footer>
              {language === "en" && activeTestimonial.translation ? (
                <button
                  type="button"
                  className="testimonial-translation-btn"
                  onClick={() => setShowTranslation((prev) => !prev)}
                >
                  {showTranslation ? "Show original review" : "Show English translation"}
                </button>
              ) : null}
            </motion.article>
          </AnimatePresence>

          <div className="testimonial-controls">
            <button type="button" className="icon-btn" onClick={goPrev} aria-label={t.common.previous}>
              {isRtl ? "→" : "←"}
            </button>
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  className={`dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1}`}
                />
              ))}
            </div>
            <button type="button" className="icon-btn" onClick={goNext} aria-label={t.common.next}>
              {isRtl ? "←" : "→"}
            </button>
          </div>

          <button type="button" className="ghost-btn" onClick={onContactClick}>
            {t.nav.consultation}
          </button>
        </div>
      </div>
    </section>
  );
}
