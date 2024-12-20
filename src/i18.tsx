import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          about: {
            title: "About Us",
            description: "We are a company...",
          },
        },
      },
      vi: {
        translation: {
          welcome: "Chào mừng",
          about: {
            title: "Về chúng tôi",
            description: "Chúng tôi là...",
          },
        },
      },
    },
    lng: "en", // ngôn ngữ mặc định
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
