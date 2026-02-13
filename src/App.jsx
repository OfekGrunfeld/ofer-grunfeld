import React, { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import TabNavigation from "./components/TabNavigation";
import SearchOverlay from "./components/SearchOverlay";
import ContactPopup from "./components/ContactPopup";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ForensicSection from "./components/sections/ForensicSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import { useLanguage } from "./components/LanguageContext";

const SEARCH_INDEX = [
  {
    id: "about",
    section: "about",
    title: { en: "About Ofer Grunfeld", he: "אודות עופר גרינפלד" },
    description: {
      en: "Background, legal approach, experience, and values.",
      he: "רקע מקצועי, גישה משפטית, ניסיון וערכים."
    },
    keywords: {
      en: ["about", "ofer", "lawyer", "experience", "integrity", "attorney"],
      he: ["אודות", "עופר", "עורך דין", "ניסיון", "יושרה"]
    }
  },
  {
    id: "forensic-main",
    section: "forensic",
    title: { en: "Forensic Genealogy", he: "גנאלוגיה פורנזית" },
    description: {
      en: "Legal genealogy services for inheritance and heir disputes.",
      he: "שירותי גנאלוגיה משפטית למחלוקות ירושה ואיתור יורשים."
    },
    keywords: {
      en: ["forensic genealogy", "inheritance", "probate", "legal research"],
      he: ["גנאלוגיה", "ירושה", "צוואה", "מחקר משפטי"]
    }
  },
  {
    id: "heir-search",
    section: "forensic",
    title: { en: "Heir Search", he: "איתור יורשים" },
    description: {
      en: "Locate lawful heirs in complex inheritance cases.",
      he: "איתור יורשים חוקיים בתיקי ירושה מורכבים."
    },
    keywords: {
      en: ["heir", "missing heirs", "family tracing", "beneficiaries"],
      he: ["יורשים", "יורש חסר", "איתור משפחתי", "מוטבים"]
    }
  },
  {
    id: "abandoned-property",
    section: "forensic",
    title: { en: "Abandoned Property", he: "נכסים נטושים" },
    description: {
      en: "Investigate and recover abandoned or unclaimed assets.",
      he: "חקירה והשבה של נכסים נטושים או כספים ללא דורש."
    },
    keywords: {
      en: ["abandoned property", "unclaimed assets", "recovery", "funds"],
      he: ["נכס נטוש", "נכס ללא דורש", "השבה", "כספים"]
    }
  },
  {
    id: "testimonials",
    section: "testimonials",
    title: { en: "Client Testimonials", he: "המלצות לקוחות" },
    description: {
      en: "Feedback from clients and estate administrators.",
      he: "חוות דעת של לקוחות ומנהלי עיזבונות."
    },
    keywords: {
      en: ["testimonials", "reviews", "client stories", "trust"],
      he: ["המלצות", "ביקורות", "לקוחות", "אמון"]
    }
  },
  {
    id: "contact",
    section: "contact",
    title: { en: "Contact Information", he: "פרטי יצירת קשר" },
    description: {
      en: "Phone, email, office details, and consultation options.",
      he: "טלפון, אימייל, כתובת משרד ואפשרויות פגישה."
    },
    keywords: {
      en: ["contact", "consultation", "whatsapp", "phone", "email"],
      he: ["יצירת קשר", "ייעוץ", "וואטסאפ", "טלפון", "אימייל"]
    }
  }
];

function scoreSearchItem(item, query) {
  if (!query) {
    return 0;
  }

  let score = 0;
  const normalizedQuery = query.toLowerCase().trim();
  const tokens = normalizedQuery.split(/[\s,./\\\-_:;]+/).filter(Boolean);
  const titlePool = [item.title.en, item.title.he].map((value) => value.toLowerCase());
  const descriptionPool = [item.description.en, item.description.he].map((value) => value.toLowerCase());
  const keywordPool = [...item.keywords.en, ...item.keywords.he].map((value) => value.toLowerCase());

  tokens.forEach((token) => {
    titlePool.forEach((title) => {
      if (title === token) {
        score += 14;
      } else if (title.includes(token)) {
        score += 8;
      }
    });

    descriptionPool.forEach((description) => {
      if (description.includes(token)) {
        score += 3;
      }
    });

    keywordPool.forEach((keyword) => {
      if (keyword === token) {
        score += 9;
      } else if (keyword.includes(token) || token.includes(keyword)) {
        score += 5;
      }
    });
  });

  if (tokens.length > 1) {
    const hasAllTokensInTitle = titlePool.some((title) => tokens.every((token) => title.includes(token)));
    const hasAllTokensInKeyword = keywordPool.some((keyword) =>
      tokens.every((token) => keyword.includes(token))
    );

    if (hasAllTokensInTitle) {
      score += 10;
    }

    if (hasAllTokensInKeyword) {
      score += 7;
    }
  }

  return score;
}

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
        ↑
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
        ↓
      </button>
    </aside>
  );
}

export default function App() {
  const { language } = useLanguage();

  const heroRef = useRef(null);
  const tabRef = useRef(null);
  const aboutRef = useRef(null);
  const forensicRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionOrder = ["about", "forensic", "testimonials", "contact"];
  const tabSections = ["about", "forensic", "testimonials"];

  const [activeSection, setActiveSection] = useState("about");
  const [menuSearchQuery, setMenuSearchQuery] = useState("");
  const [overlaySearchQuery, setOverlaySearchQuery] = useState("");
  const [isSearchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const sectionRefs = {
    hero: heroRef,
    tabs: tabRef,
    about: aboutRef,
    forensic: forensicRef,
    testimonials: testimonialsRef,
    contact: contactRef
  };

  const searchResults = useMemo(() => {
    const normalizedQuery = overlaySearchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return SEARCH_INDEX.map((item) => ({
      ...item,
      score: scoreSearchItem(item, normalizedQuery)
    }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item) => ({
        ...item,
        displayTitle: item.title[language],
        displayDescription: item.description[language]
      }));
  }, [language, overlaySearchQuery]);

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

  const handleSearchSelect = (section) => {
    setMenuSearchQuery("");
    setSearchOverlayOpen(false);
    scrollToSection(section);
  };

  const handleMenuSearchChange = (value) => {
    setMenuSearchQuery(value);

    if (value.trim()) {
      setSearchOverlayOpen(true);

      if (!overlaySearchQuery.trim()) {
        setOverlaySearchQuery(value);
      }
    }
  };

  return (
    <div className="app-shell">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onContactClick={() => setContactPopupOpen(true)}
        searchQuery={menuSearchQuery}
        onSearchQueryChange={handleMenuSearchChange}
        onSearchFocus={() => setSearchOverlayOpen(true)}
      />

      <main>
        <HeroSection
          sectionRef={heroRef}
          onPrimaryAction={() => scrollToSection("contact")}
          onSecondaryAction={() => scrollToSection("about")}
          onScrollDown={scrollToTabs}
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

      <SearchOverlay
        isOpen={isSearchOverlayOpen}
        results={searchResults}
        query={overlaySearchQuery}
        onQueryChange={setOverlaySearchQuery}
        onClose={() => {
          setSearchOverlayOpen(false);
          setMenuSearchQuery("");
        }}
        onSelect={handleSearchSelect}
      />

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setContactPopupOpen(false)} />
    </div>
  );
}
