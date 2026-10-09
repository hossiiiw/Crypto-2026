import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fa from "./locales/fa.json";
import en from "./locales/en.json";

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: fa },
    en: { translation: en },
  },
  lng: savedLanguage === "fa" ? "fa" : "en",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("language", language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
});

document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";

export default i18n;
