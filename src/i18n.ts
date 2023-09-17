import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      Button: "Button",
    },
  },
  hk: {
    translation: {
      "Welcome to React": "歡迎使用 React 和 react-i18next",
      Button: "按鈕",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({ resources, lng: "hk", interpolation: { escapeValue: false } });

export default i18n;
