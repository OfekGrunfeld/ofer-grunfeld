import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function TestimonialsSection({ sectionRef, onContactClick }) {
  const { direction, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = t.testimonials.items;
  const isRtl = direction === "rtl";

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
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
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
              <p className="stars" aria-label="5 stars">
                ★★★★★
              </p>
              <blockquote>{testimonials[activeIndex].quote}</blockquote>
              <footer>
                <strong>{testimonials[activeIndex].author}</strong>
                <span>{testimonials[activeIndex].role}</span>
              </footer>
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
