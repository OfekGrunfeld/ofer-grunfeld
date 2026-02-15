import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      brand: "Ofer Grunfeld, Advocate",
      about: "About",
      forensic: "Forensic Genealogy",
      testimonials: "Testimonials",
      contact: "Contact",
      searchPlaceholder: "Search",
      consultation: "Schedule Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      badge: "Ofer Grunfeld, Genealogist, Advocate",
      title: "Let’s Recover What Is Rightfully Yours",
      subtitle:
        "If you have lost, dormant, or unclaimed funds in Israel, I will guide you personally from initial check to final recovery. My firm manages dormant funds and unclaimed property cases.",
      primaryCta: "Schedule Consultation",
      scrollHint: "Explore services"
    },
    tabs: {
      about: "About",
      forensic: "Forensic Genealogy",
      testimonials: "Testimonials"
    },
    about: {
      kicker: "Personal Approach",
      title: "A Single Point of Accountability",
      description:
        "My work combines legal representation and forensic genealogy to locate heirs, prove ownership, and recover dormant assets in Israel and abroad.",
      profile: {
        name: "Ofer Grunfeld",
        role: "Genealogist, Advocate",
        bio: "I personally handle sensitive inheritance and dormant-fund cases with clear updates, practical strategy, and direct accountability. I combine legal strategy with genealogical analysis to resolve complex claims and move dormant-fund cases to real outcomes."
      }
    },
    forensic: {
      kicker: "Core Services",
      title: "Forensic Genealogy for Legal Resolution",
      subtitle:
        "Focused legal and genealogical services for dormant funds, missing heirs, and complex inheritance claims.",
      services: [
        {
          title: "Heir Search",
          description:
            "Identify and locate lawful heirs across jurisdictions using legal records and family tracing."
        },
        {
          title: "Historical Research",
          description:
            "Build verifiable lineage from archives, migration records, and legacy civil documentation."
        },
        {
          title: "Court Documentation",
          description:
            "Prepare clear legal submissions, evidence summaries, and probate-ready case files."
        }
      ],
      timelineTitle: "How We Work",
      timelineSteps: [
        {
          title: "Initial Consultation",
          description: "We review available facts, legal status, and recovery potential."
        },
        {
          title: "Research & Evidence Mapping",
          description: "I map historical, legal, and genealogical evidence into a coherent claim."
        },
        {
          title: "Documentation",
          description: "All findings are structured into a clear legal strategy and formal exhibits."
        },
        {
          title: "Legal Resolution",
          description: "I represent your claim through negotiation, filing, or court process as needed."
        }
      ]
    },
    testimonials: {
      kicker: "Client Trust",
      title: "What Clients Say",
      subtitle: "Real feedback from clients in Israel, the US, Australia, and Europe.",
      items: [
        {
          quote:
            "I want to thank you, Ofer, for the amazing and fast service with my grandmother's funds. Everything was handled with trust and professionalism.",
          author: "Efrat Magori",
          role: "Israel"
        },
        {
          quote:
            "Thank you Ofer Grunfeld. You succeeded where no other attorney did, and recovered the funds my mother was entitled to.",
          author: "Ortal Kral Shenkar",
          role: "Israel"
        },
        {
          quote:
            "During the few months from first contact until funds retrieval was complete, I found Ofer polite, attentive, organised, conscientious, effective and efficient. My experience was 100% positive.",
          author: "Dr. Ross Ulman",
          role: "Musk Vale, Australia"
        },
        {
          quote:
            "We have lived in Chicago for many years. Ofer found and recovered dormant accounts I never knew existed and even helped secure a tax exemption.",
          author: "Israel Raz",
          role: "Chicago, USA"
        },
        {
          quote:
            "After almost 40 years in the US, we did not think we had funds left in Israel. Ofer answered every question with patience and got our dormant money back.",
          author: "Motti Benhaim",
          role: "Los Angeles, USA"
        },
        {
          quote: "Competent, thorough and trustworthy.",
          author: "Michael Kallay",
          role: "Seattle, USA"
        }
      ]
    },
    contact: {
      kicker: "Next Step",
      title: "Discuss Your Case Confidentially",
      subtitle: "No upfront payment for qualifying dormant-fund recovery cases.",
      notice: "No fee if no money is recovered.",
      previousEmail: "Existing case? Add your case number in the email subject.",
      previousEmailInline: "Previous email: ofergrin@netvision.net.il",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Office",
      officeHoursLabel: "Office Hours",
      officeHours: "Sun-Thu, 09:00-18:00",
      ctaTitle: "Book a Consultation",
      ctaText: "Tell me what you know, and I will tell you exactly what can be checked next.",
      ctaButton: "Open Contact Options"
    },
    search: {
      title: "Search Results",
      placeholder: "Type to search...",
      noResults: "No matching results found."
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    },
    popup: {
      title: "Choose a Contact Method",
      subtitle: "",
      whatsapp: "WhatsApp",
      email: "Email",
      call: "Phone Call",
      close: "Close",
      phoneTitle: "Call Options",
      callDirect: "Regular Call",
      callWhatsapp: "Call via WhatsApp",
      mapTitle: "Navigation Options",
      openGoogleMaps: "Open in Google Maps",
      openWaze: "Open in Waze"
    },
    common: {
      light: "Light",
      dark: "Dark",
      languageToggle: "עב",
      next: "Next",
      previous: "Previous"
    },
    contactData: {
      phone: "+972-523-252920",
      whatsappNumber: "972523252920",
      email: "ofergrunfeld@gmail.com",
      address: "1 HaNevel St, Kadima, Israel",
      mapQuery: "1 Hanevel St, Kadima, Israel"
    }
  },
  he: {
    nav: {
      brand: "עופר גרינפלד, עו\"ד",
      about: "אודות",
      forensic: "גנאלוגיה פורנזית",
      testimonials: "המלצות",
      contact: "יצירת קשר",
      searchPlaceholder: "חיפוש",
      consultation: "קביעת פגישת ייעוץ",
      openMenu: "פתח תפריט",
      closeMenu: "סגור תפריט"
    },
    hero: {
      badge: "עופר גרינפלד, גנאלוג, עו״ד",
      title: "מחזירים לכם את מה שמגיע לכם",
      subtitle:
        "אם קיימים כספים אבודים, רדומים או נכסים ללא דורש בישראל, אני מלווה אתכם אישית מבדיקה התחלתית ועד להשבה מלאה. המשרד מטפל בתיקי כספים רדומים ונכסים ללא דורש.",
      primaryCta: "קביעת פגישת ייעוץ",
      scrollHint: "גללו לשירותים"
    },
    tabs: {
      about: "אודות",
      forensic: "גנאלוגיה פורנזית",
      testimonials: "המלצות"
    },
    about: {
      kicker: "גישה אישית",
      title: "כתובת אחת לאחריות מלאה",
      subtitle:
        "אני מלווה אישית תיקים רגישים של ירושה וכספים רדומים עם עדכונים ברורים, אסטרטגיה מעשית ואחריות מלאה.",
      description:
        "העבודה שלי משלבת ייצוג משפטי עם גנאלוגיה פורנזית כדי לאתר יורשים, להוכיח זכאות ולהשיב כספים ונכסים בארץ ובעולם.",
      profile: {
        name: "עופר גרינפלד",
        role: "גנאלוג, עו״ד",
        bio: "אני משלב אסטרטגיה משפטית עם ניתוח גנאלוגי כדי לקדם תביעות מורכבות ולהוביל תוצאות בפועל בתיקי כספים רדומים."
      }
    },
    forensic: {
      kicker: "שירותי ליבה",
      title: "גנאלוגיה פורנזית לפתרון משפטי",
      subtitle:
        "שירותים משפטיים וגנאלוגיים ממוקדים לכספים רדומים, יורשים חסרים ומחלוקות ירושה מורכבות.",
      services: [
        {
          title: "איתור יורשים",
          description: "זיהוי ואיתור יורשים חוקיים בארץ ובעולם באמצעות רישומים רשמיים ותחקור משפחתי."
        },
        {
          title: "מחקר היסטורי",
          description: "בניית שרשרת יוחסין מאומתת מארכיונים, מסמכי הגירה ותיעוד אזרחי ישן."
        },
        {
          title: "תיעוד לבית משפט",
          description: "הכנת כתבי טענות מסודרים, תקצירי ראיות ותיק עיזבון מוכן להליך משפטי."
        }
      ],
      timelineTitle: "איך התהליך עובד",
      timelineSteps: [
        {
          title: "פגישת היכרות",
          description: "ממפים את העובדות, המעמד המשפטי ופוטנציאל ההשבה."
        },
        {
          title: "מחקר ומיפוי ראיות",
          description: "אני ממפה את החומר ההיסטורי, המשפטי והגנאלוגי לכדי תביעה סדורה."
        },
        {
          title: "הכנת מסמכים",
          description: "הממצאים נבנים לאסטרטגיה משפטית ברורה עם נספחים סדורים."
        },
        {
          title: "פתרון משפטי",
          description: "ייצוג מול גורמים רלוונטיים, הגשות או הליך משפטי לפי הצורך."
        }
      ]
    },
    testimonials: {
      kicker: "אמון הלקוחות",
      title: "מה לקוחות מספרים",
      subtitle: "חוות דעת אמיתיות מישראל, ארה״ב, אוסטרליה ואירופה.",
      items: [
        {
          quote:
            "רציתי להודות לך עופר על השירות המדהים והזריז בטיפול בכסף של סבתי. הכל נעשה באמינות ובמקצועיות.",
          author: "אפרת מגורי",
          role: "ישראל"
        },
        {
          quote:
            "עופר גרינפלד תודה רבה. הצלחת לעשות את מה שאף עורך דין לא הצליח ולהוציא לאימי את כל הכספים שהגיעו לה.",
          author: "אורטל קראל שנקר",
          role: "ישראל"
        },
        {
          quote:
            "במהלך החודשים מהקשר הראשון ועד להשלמת ההשבה, עופר היה מנומס, קשוב, מאורגן ויעיל מאוד. החוויה שלי הייתה חיובית במאה אחוז.",
          author: "ד\"ר רוס אולמן",
          role: "מאסק וייל, אוסטרליה"
        },
        {
          quote:
            "אנחנו חיים בשיקגו שנים רבות. עופר איתר והשיב חשבונות רדומים שלא ידעתי עליהם ואף סייע בקבלת פטור ממס.",
          author: "ישראל רז",
          role: "שיקגו, ארה\"ב"
        },
        {
          quote:
            "אחרי כמעט 40 שנה בארה\"ב לא חשבנו שנותרו לנו כספים בישראל. עופר ענה בסבלנות על כל שאלה והשיב לנו את הכסף הרדום.",
          author: "מוטי בנהיים",
          role: "לוס אנג'לס, ארה\"ב"
        },
        {
          quote: "מקצועי, יסודי ואמין.",
          author: "מייקל קאליי",
          role: "סיאטל, ארה\"ב"
        }
      ]
    },
    contact: {
      kicker: "הצעד הבא",
      title: "שיחה דיסקרטית על המקרה שלכם",
      subtitle: "ללא תשלום מראש בתיקי השבה מתאימים.",
      notice: "לא נמצא כסף? לא נגבה שכר טרחה.",
      previousEmail: "יש תיק קיים? הוסיפו מספר תיק בנושא המייל.",
      previousEmailInline: "אימייל קודם: ofergrin@netvision.net.il",
      phoneLabel: "טלפון",
      emailLabel: "אימייל",
      addressLabel: "משרד",
      officeHoursLabel: "שעות פעילות",
      officeHours: "א׳-ה׳, 09:00-18:00",
      ctaTitle: "קביעת פגישת ייעוץ",
      ctaText: "ספרו לי מה ידוע לכם, ואכוון אתכם לשלב הבא בצורה ברורה ומעשית.",
      ctaButton: "פתח אפשרויות יצירת קשר"
    },
    search: {
      title: "תוצאות חיפוש",
      placeholder: "הקלידו לחיפוש...",
      noResults: "לא נמצאו תוצאות מתאימות."
    },
    footer: {
      privacy: "מדיניות פרטיות",
      terms: "תנאי שימוש",
      rights: "כל הזכויות שמורות."
    },
    popup: {
      title: "בחרו דרך יצירת קשר",
      subtitle: "",
      whatsapp: "וואטסאפ",
      email: "אימייל",
      call: "שיחת טלפון",
      close: "סגור",
      phoneTitle: "אפשרויות שיחה",
      callDirect: "שיחה רגילה",
      callWhatsapp: "שיחה בוואטסאפ",
      mapTitle: "אפשרויות ניווט",
      openGoogleMaps: "פתיחה בגוגל מפות",
      openWaze: "פתיחה ב-Waze"
    },
    common: {
      light: "בהיר",
      dark: "כהה",
      languageToggle: "EN",
      next: "הבא",
      previous: "הקודם"
    },
    contactData: {
      phone: "+972-523-252920",
      whatsappNumber: "972523252920",
      email: "ofergrunfeld@gmail.com",
      address: "רח׳ הנבל 1, קדימה",
      mapQuery: "רחוב הנבל 1 קדימה"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const direction = language === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "he" : "en")),
      direction,
      t: translations[language]
    }),
    [direction, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
