import React, { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import TabNavigation from "./components/TabNavigation";
import ContactPopup from "./components/ContactPopup";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ForensicSection from "./components/sections/ForensicSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import { useLanguage } from "./components/LanguageContext";


function SideSectionNav({ activeSection, sectionOrder, onNavigate }) {
  const { t } = useLanguage();
  const activeIndex = sectionOrder.indexOf(activeSection);
  const safeIndex = activeIndex === -1 ? 0 : activeIndex;

  const getLabel = (key) => {
    if (key === "contact") {
      return t.nav.contact;
    }

    return t.tabs[key];
  };

  return (
    <aside className="side-pagination surface" aria-label="Section pagination">
      <button
        type="button"
        className="side-arrow"
        onClick={() => onNavigate(sectionOrder[Math.max(safeIndex - 1, 0)])}
        aria-label={t.common.previous}
      >
        <i className="fa-solid fa-chevron-up" aria-hidden="true" />
      </button>
      <div className="side-dots">
        {sectionOrder.map((section) => (
          <button
            key={section}
            type="button"
            className={`side-dot ${section === activeSection ? "is-active" : ""}`}
            onClick={() => onNavigate(section)}
            aria-label={getLabel(section)}
            title={getLabel(section)}
          />
        ))}
      </div>
      <button
        type="button"
        className="side-arrow"
        onClick={() => onNavigate(sectionOrder[Math.min(safeIndex + 1, sectionOrder.length - 1)])}
        aria-label={t.common.next}
      >
        <i className="fa-solid fa-chevron-down" aria-hidden="true" />
      </button>
    </aside>
  );
}

export default function App() {
  const heroRef = useRef(null);
  const tabRef = useRef(null);
  const aboutRef = useRef(null);
  const forensicRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionOrder = ["about", "forensic", "testimonials", "contact"];
  const tabSections = ["about", "forensic", "testimonials"];

  const [activeSection, setActiveSection] = useState("about");
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const sectionRefs = {
    hero: heroRef,
    tabs: tabRef,
    about: aboutRef,
    forensic: forensicRef,
    testimonials: testimonialsRef,
    contact: contactRef
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 220;
      const position = window.scrollY + offset;

      let current = sectionOrder[0];

      sectionOrder.forEach((section) => {
        const element = sectionRefs[section].current;

        if (element && position >= element.offsetTop) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const target = sectionRefs[sectionId]?.current;

    if (!target) {
      return;
    }

    const topOffset = 154;

    window.scrollTo({
      top: target.offsetTop - topOffset,
      behavior: "smooth"
    });
  };

  const scrollToTabs = () => {
    const target = sectionRefs.tabs.current;

    if (!target) {
      return;
    }

    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onContactClick={() => setContactPopupOpen(true)}
      />

      <main>
        <HeroSection
          sectionRef={heroRef}
          onPrimaryAction={() => scrollToSection("contact")}
          onSecondaryAction={() => scrollToSection("about")}
        />

        <TabNavigation
          sectionRef={tabRef}
          activeSection={activeSection}
          sectionOrder={tabSections}
          onNavigate={scrollToSection}
        />
        <SideSectionNav activeSection={activeSection} sectionOrder={sectionOrder} onNavigate={scrollToSection} />

        <AboutSection sectionRef={aboutRef} />
        <ForensicSection sectionRef={forensicRef} />

        <TestimonialsSection
          sectionRef={testimonialsRef}
          onContactClick={() => setContactPopupOpen(true)}
        />

        <ContactSection
          sectionRef={contactRef}
          onContactClick={() => setContactPopupOpen(true)}
        />
      </main>

      <Footer />

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setContactPopupOpen(false)} />
    </div>
  );
}
