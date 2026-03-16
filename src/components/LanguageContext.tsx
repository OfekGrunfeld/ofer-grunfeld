import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      brand: "Ofer Grunfeld, Advocate, Genealogist",
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
      title: "Finding and Recovering Dormant Funds, Unclaimed Property and Estate Rights",
      subtitle:
        "Our offices specialize in locating dormant funds and unclaimed property and recovering them for their rightful owners. We carry out searches and recovery of rights, including bank accounts, insurance policies, provident funds, training funds, and real-estate assets.\nThe locating of funds and property is offered to former Israeli residents and foreign citizens.",
      whatsappLabel: "WhatsApp/Mobile",
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
      title: "About",
      description:
        "My work combines legal representation and forensic genealogy to locate heirs, prove ownership, and recover dormant assets in Israel and abroad.",
      extra:
        "Our offices specialize in forensic genealogy: assembling family trees, locating living and deceased individuals, tracing heirs and beneficiaries, locating missing peers and their families, and tracing property in multi-states estate matters.\nAttorney Ofer Grunfeld serves as a forensic genealogy advisor for lawyers and estate executors, contractors and entrepreneurs, private investigators, real-estate agents, and also draws genealogical expert opinions for the courts.\nOfer specializes in estate disputes litigation, handling of complexed estates, legal and financial estsate planning and inter-generational property transfer.",
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
            "Identifying and locating lawful heirs all around the globe using official records and historical research"
        },
        {
          title: "Dormant Funds & Unclaimed Property",
          description:
            "Old bank accounts, dormant pension funds, and unclaimed real-estate"
        },
        {
          title: "Institutional Locating Services",
          description:
            "Locating missing persons, peers, insured persons and locating beneficiaries"
        },
        {
          title: "Family Trees",
          description:
            "Assembling family trees based on formal and archival documents"
        },
        {
          title: "Estate Disputes Litigation",
          description:
            "Consulting in legal matters, filing applications and lawsuits and managing legal proceedings"
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
            "רציתי להודות לך עופר על השירות המדהים והזריז על הטיפול בכסף של סבתי. זה היה כל כך זריז והכל באמינות ובמקצועיות. זו היתה הפתעה מדהימה, תודה רבה.",
          author: "אפרת מגורי",
          role: "Israel",
          translationAuthor: "Efrat Magori",
          translation:
            "I wanted to thank you, Ofer, for the amazing and fast service in handling my grandmother's money. Everything was done so quickly, with reliability and professionalism. It was an amazing surprise. Thank you very much."
        },
        {
          quote:
            "During the few months beginning when Ofer got in touch with me in Australia about some funds in Israel I did not know existed, and ending this week when the funds retrieval was complete and he closed my file, I found Ofer polite, courteous, attentive, responsive, organised, conscientious, effective and efficient. In short, Ofer is a professional with a keen sense of client service. He knows how to achieve results! I have no ifs, buts or maybes - my experience as Ofer's client was 100% positive, and so I unreservedly recommend him and his service.",
          author: "Dr. Ross Ulman",
          role: "Musk Vale, Victoria, Australia"
        },
        {
          quote:
            "We contacted with Ofer in early 2019. Apparently we had dormant funds in Israel that we never knew about! He was professional, efficent, and very personable. Highly recommend.",
          author: "Dr. Michael Clarence Lewis",
          role: "Detroit, Michigan, USA"
        },
        {
          quote: "Competent, thorough and trustworthy!",
          author: "Michael Kallay",
          role: "Seattle, WA, USA"
        },
        {
          quote:
            "Thank you so much for a great job. We wouldn’t be able to do all of it by ourselves. I would recommend you to anybody looking for a good financial, and not only, lawyer.",
          author: "Zenia Barnea",
          role: "Chicago, IL, USA"
        },
        {
          quote:
            "Ofer thanks for the great and professional service from you. From the first contact and during the quick procedure, you were always very clear, very open and reliable. I thought that everything went very smoothly despite the enormous bureaucratic web. Hope you can help many people.",
          author: "Manja Windmuller",
          role: "Holland"
        },
        {
          quote:
            "Congratulations! Ofer Greenfield has accompanied us, with tenacity and judicious advice, during the last months and the completion of the steps. Francine & Serge.",
          author: "Serge Szmidt",
          role: "France"
        },
        {
          quote:
            "After living in the US for almost 40 years I didn’t think that we had any funds left in Israel, and then Ofer came into the picture. I must admit, I was skeptical at first and probed him with all the questions in the world. Ofer answered all my questions with much patience, and presented all the documents and references to my full satisfaction. To make a long story short, Ofer demonstrated that he is a true professional, and knowledgeable in finding and retrieving funds that I didn’t even know existed. He kept us updated in every step of the way. We got all our dormant money after a long and tedious battle with the reluctant institutions in Israel. There is nothing to lose, since no fees are being paid upfront. Only after successfully depositing the funds in your bank account will you be asked to pay.",
          author: "Motti Benhaim",
          role: "Los Angeles, California, USA"
        },
        {
          quote:
            "I would like to thank Ofer for the work he did for me, finding money that I had long forgotten existed. He is honest and diligent. Todah Rabah.",
          author: "Michael Shacham",
          role: "New Jersey, USA"
        },
        {
          quote:
            "Ofer was very helpful and top professional. He helped us to retrieve large sums of money that we did not know existed. We recommend his services.",
          author: "Nadav Hadari",
          role: "Australia"
        },
        {
          quote:
            "Ofer found dormant funds of ours after 30 years. It was amazing! He dealt with everything in such a professional way, truly represented our interests in the best way possible and acted on our behalf with the various institutions. He even came with us to some of the authorities to help us through the paper work. I cannot recommend Ofer highly enough.",
          author: "Lorna Zelunzuk",
          role: "Australia"
        },
        {
          quote:
            "I would like to thank Ofer much for his help getting funds I forgot about. It was hard work against a stuburn insurance company, but when Ofer is on your side you can be assure the money will get to your bank account - even in far Australia.",
          author: "Zvi Sherman",
          role: "Australia"
        },
        {
          quote:
            "עופר גרינפלד תודה רבה. הצלחת לעשות את מה שאף עורך דין לא הצליח. שמחה שהוצאת לאימי את כל הכספים שהגיעו לה. כל הכבוד.",
          author: "אורטל קראל שנקר",
          role: "Israel",
          translationAuthor: "Ortal Kral Shenkar",
          translation:
            "Thank you very much, Ofer Grunfeld. You succeeded in doing what no other attorney managed to do. I am happy that you recovered all the money my mother was entitled to. Well done."
        },
        {
          quote:
            "המלצה חמה מניסיון אישי טרי לאיתור כספים רדומים. כל מי שקורא את הפוסט שיצור קשר עם עו\"ד עופר גרינפילד. הוא גם נחמד, הוא גם מקצועי, ונראה שיודע מה ואיך לחפש. בקיצור ולעניין, המלצה חמה לכולם.",
          author: "Ran Zuker",
          role: "Israel",
          translationAuthor: "Ran Zuker",
          translation:
            "A warm recommendation from fresh personal experience in locating dormant funds. Anyone reading this should contact Attorney Ofer Greenfield. He is pleasant, professional, and clearly knows what and how to look for. In short, a warm recommendation for everyone."
        },
        {
          quote: "ממליץ בחום.",
          author: "Oren Snir",
          role: "Australia",
          translationAuthor: "Oren Snir",
          translation: "Highly recommended."
        },
        {
          quote:
            "Efficient, kind and professional legal service. We recovered funds that we didn't know we had. Thank you Ofer.",
          author: "Marta Gerdel de Behar",
          role: "South Africa"
        },
        {
          quote: "עופר תודה רבה, טוב שיש אנשים כמוך, מקצועי, יסודי ובעל תוצאות, ממליץ בחום, עו\"ד בחסד עליון.",
          author: "Moshe Perez",
          role: "Israel",
          translationAuthor: "Moshe Perez",
          translation:
            "Ofer, thank you very much. It's good that there are people like you: professional, thorough, and results-driven. I highly recommend you, a truly exceptional attorney."
        },
        {
          quote: "עופר יקר, תודה על עזרתך הרבה באיתור כספים אבודים. ממליצה להיעזר בך בחום רב.",
          author: "Neomi Kapach Ben-Ari",
          role: "Israel",
          translationAuthor: "Neomi Kapach Ben-Ari",
          translation:
            "Dear Ofer, thank you for your great help in locating lost funds. I warmly recommend turning to you for help."
        },
        {
          quote:
            "אם אתם מחפשים שירותיות, מקצועיות, הגינות, איכפתיות ויושרה, עו\"ד עופר גרינפלד הוא האדם הנכון. בן אדם שאכפת לו לא רק מכסף אלא בעיקר מאנשים.",
          author: "רוני גונן",
          role: "Israel",
          translationAuthor: "Roni Gonen",
          translation:
            "If you are looking for service, professionalism, fairness, care, and integrity, Attorney Ofer Grunfeld is the right person. He is someone who cares not only about money, but above all about people."
        },
        {
          quote:
            "I have had the pleasure of cooperating with Ofer for a number of years. Ofer first appeared in my life when he offered to help me solve some of my genealogy searches in Israel which had become bogged down. Since then I have sought, found and solved difficult genealogy cases. As a genealogist myself I can testify that Ofer's worldwide project of finding and recovering lost and unclaimed funds in Israel for former Israelis is an important task that brings benefit to all.",
          author: "David Lewin",
          role: "London, UK"
        }
      ]
    },
    contact: {
      kicker: "Next Step",
      title: "Discuss Your Case Confidentially",
      subtitle: "",
      notice: "No fee if no money is recovered.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Office",
      officeHoursLabel: "Office Hours",
      officeHours: "Sun-Thu, 09:00-18:00",
      ctaTitle: "Book a Consultation",
      ctaText: "Tell me what you know and I will guide you.",
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
      brand: "עופר גרינפלד, עורך דין, גנאולוג",
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
      badge: "עופר גרינפלד, עו״ד, גנאלוג",
      title: "איתור והשבת כספים רדומים,\nנכסים אבודים וזכויות ירושה",
      subtitle:
        "משרדנו מתמחה באיתור כספים רדומים ורכוש אבוד ובהשבתם לבעליהם. אנו מבצעים איתור, והשבת זכויות בנכסים פיננסיים ומקרקעין, לרבות חשבונות בנק, פוליסות ביטוח, קופות גמל, קרנות השתלמות ונכסי נדל״ן.\nאיתור הכספים והרכוש ניתן לתושבי ישראל לשעבר ולאזרחים זרים.",
      whatsappLabel: "ווטסאפ/נייד",
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
      title: "אודות",
      subtitle:
        "אני מלווה אישית תיקים רגישים של ירושה וכספים רדומים עם עדכונים ברורים, אסטרטגיה מעשית ואחריות מלאה.",
      description:
        "העבודה שלי משלבת ייצוג משפטי עם גנאלוגיה פורנזית כדי לאתר יורשים, להוכיח זכאות ולהשיב כספים ונכסים בארץ ובעולם.",
      extra:
        "משרדנו מתמחה בגנאלוגיה – חקר אילנות יוחסין, הוכחת יורשים, איתור אנשים חיים ונפטרים, איתור יורשים ומוטבים, איתור עמיתים מנותקי קשר ומשפחותיהם, ואיתור רכוש בהליכי עיזבון רב-מדינתיים.\nעו\"ד עופר גרינפלד משמש כיועץ בתחום הגנאלוגיה לעורכי דין ולמנהלי עיזבונות, לקבלנים ויזמים, לחוקרים פרטיים, למתווכים, ואף עורך חוות דעת גנאלוגיות לבתי המשפט.\nמומחה בסכסוכי ירושה, בטיפול בעיזבונות מורכבים, בתכנון משפטי וכלכלי בהליכי קדם-עיזבון, ובהעברה בין-דורית.",
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
          description: "זיהוי ואיתור יורשים חוקיים בארץ ובעולם באמצעות רישומים רשמיים ומחקר גנאלוגי והיסטורי"
        },
        {
          title: "איתור רכוש וכספים רדומים",
          description: "חשבונות בנק ישנים, כספים פנסיונים שנשכחו ונדל\"ן היסטורי"
        },
        {
          title: "איתור עבור מוסדות",
          description: "איתור מנותקי קשר, עמיתים, מבוטחים,\nואיתור מוטבים"
        },
        {
          title: "עצי שורשים",
          description: "בניית אילן יוחסין מאומת על בסיס מסמכים פורמאליים וארכיוניים"
        },
        {
          title: "ליטיגציה בסכסוכי ירושה",
          description: "מענה לשאלות משפטיות, הכנה והגשת כתבי טענות וראיות, ניהול תיק משפטי מתחילתו ועד סופו"
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
            "רציתי להודות לך עופר על השירות המדהים והזריז על הטיפול בכסף של סבתי. זה היה כל כך זריז והכל באמינות ובמקצועיות. זו היתה הפתעה מדהימה, תודה רבה.",
          author: "אפרת מגורי",
          role: "ישראל"
        },
        {
          quote:
            "During the few months beginning when Ofer got in touch with me in Australia about some funds in Israel I did not know existed, and ending this week when the funds retrieval was complete and he closed my file, I found Ofer polite, courteous, attentive, responsive, organised, conscientious, effective and efficient. In short, Ofer is a professional with a keen sense of client service. He knows how to achieve results! I have no ifs, buts or maybes - my experience as Ofer's client was 100% positive, and so I unreservedly recommend him and his service.",
          author: "Dr. Ross Ulman",
          role: "מאסק וייל, ויקטוריה, אוסטרליה"
        },
        {
          quote:
            "We contacted with Ofer in early 2019. Apparently we had dormant funds in Israel that we never knew about! He was professional, efficent, and very personable. Highly recommend.",
          author: "Dr. Michael Clarence Lewis",
          role: "דטרויט, מישיגן, ארה\"ב"
        },
        {
          quote: "Competent, thorough and trustworthy!",
          author: "Michael Kallay",
          role: "סיאטל, וושינגטון, ארה\"ב"
        },
        {
          quote:
            "Thank you so much for a great job. We wouldn’t be able to do all of it by ourselves. I would recommend you to anybody looking for a good financial, and not only, lawyer.",
          author: "Zenia Barnea",
          role: "שיקגו, אילינוי, ארה\"ב"
        },
        {
          quote:
            "Ofer thanks for the great and professional service from you. From the first contact and during the quick procedure, you were always very clear, very open and reliable. I thought that everything went very smoothly despite the enormous bureaucratic web. Hope you can help many people.",
          author: "Manja Windmuller",
          role: "הולנד"
        },
        {
          quote:
            "Congratulations! Ofer Greenfield has accompanied us, with tenacity and judicious advice, during the last months and the completion of the steps. Francine & Serge.",
          author: "Serge Szmidt",
          role: "צרפת"
        },
        {
          quote:
            "After living in the US for almost 40 years I didn’t think that we had any funds left in Israel, and then Ofer came into the picture. I must admit, I was skeptical at first and probed him with all the questions in the world. Ofer answered all my questions with much patience, and presented all the documents and references to my full satisfaction. To make a long story short, Ofer demonstrated that he is a true professional, and knowledgeable in finding and retrieving funds that I didn’t even know existed. He kept us updated in every step of the way. We got all our dormant money after a long and tedious battle with the reluctant institutions in Israel. There is nothing to lose, since no fees are being paid upfront. Only after successfully depositing the funds in your bank account will you be asked to pay.",
          author: "Motti Benhaim",
          role: "לוס אנג'לס, קליפורניה, ארה\"ב"
        },
        {
          quote:
            "I would like to thank Ofer for the work he did for me, finding money that I had long forgotten existed. He is honest and diligent. Todah Rabah.",
          author: "Michael Shacham",
          role: "ניו ג'רזי, ארה\"ב"
        },
        {
          quote:
            "Ofer was very helpful and top professional. He helped us to retrieve large sums of money that we did not know existed. We recommend his services.",
          author: "Nadav Hadari",
          role: "אוסטרליה"
        },
        {
          quote:
            "Ofer found dormant funds of ours after 30 years. It was amazing! He dealt with everything in such a professional way, truly represented our interests in the best way possible and acted on our behalf with the various institutions. He even came with us to some of the authorities to help us through the paper work. I cannot recommend Ofer highly enough.",
          author: "Lorna Zelunzuk",
          role: "אוסטרליה"
        },
        {
          quote:
            "I would like to thank Ofer much for his help getting funds I forgot about. It was hard work against a stuburn insurance company, but when Ofer is on your side you can be assure the money will get to your bank account - even in far Australia.",
          author: "Zvi Sherman",
          role: "אוסטרליה"
        },
        {
          quote:
            "עופר גרינפלד תודה רבה. הצלחת לעשות את מה שאף עורך דין לא הצליח. שמחה שהוצאת לאימי את כל הכספים שהגיעו לה. כל הכבוד.",
          author: "אורטל קראל שנקר",
          role: "ישראל"
        },
        {
          quote:
            "המלצה חמה מניסיון אישי טרי לאיתור כספים רדומים. כל מי שקורא את הפוסט שיצור קשר עם עו\"ד עופר גרינפילד. הוא גם נחמד, הוא גם מקצועי, ונראה שיודע מה ואיך לחפש. בקיצור ולעניין, המלצה חמה לכולם.",
          author: "Ran Zuker",
          role: "ישראל"
        },
        {
          quote: "ממליץ בחום.",
          author: "Oren Snir",
          role: "אוסטרליה"
        },
        {
          quote:
            "Efficient, kind and professional legal service. We recovered funds that we didn't know we had. Thank you Ofer.",
          author: "Marta Gerdel de Behar",
          role: "דרום אפריקה"
        },
        {
          quote: "עופר תודה רבה, טוב שיש אנשים כמוך, מקצועי, יסודי ובעל תוצאות, ממליץ בחום, עו\"ד בחסד עליון.",
          author: "Moshe Perez",
          role: "ישראל"
        },
        {
          quote: "עופר יקר, תודה על עזרתך הרבה באיתור כספים אבודים. ממליצה להיעזר בך בחום רב.",
          author: "Neomi Kapach Ben-Ari",
          role: "ישראל"
        },
        {
          quote:
            "אם אתם מחפשים שירותיות, מקצועיות, הגינות, איכפתיות ויושרה, עו\"ד עופר גרינפלד הוא האדם הנכון. בן אדם שאכפת לו לא רק מכסף אלא בעיקר מאנשים.",
          author: "רוני גונן",
          role: "ישראל"
        },
        {
          quote:
            "I have had the pleasure of cooperating with Ofer for a number of years. Ofer first appeared in my life when he offered to help me solve some of my genealogy searches in Israel which had become bogged down. Since then I have sought, found and solved difficult genealogy cases. As a genealogist myself I can testify that Ofer's worldwide project of finding and recovering lost and unclaimed funds in Israel for former Israelis is an important task that brings benefit to all.",
          author: "David Lewin",
          role: "לונדון, בריטניה"
        }
      ]
    },
    contact: {
      kicker: "הצעד הבא",
      title: "שיחה ממוקדת על המקרה שלכם",
      subtitle: "",
      notice: "לא נמצא כסף? לא נגבה שכר טרחה.",
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
