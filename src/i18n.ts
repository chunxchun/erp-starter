import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./i18n/en";
import { hk } from "./i18n/hk";

const resources = {
  en, hk
};

i18n
  .use(initReactI18next)
  .init({ resources, lng: "hk", interpolation: { escapeValue: false } });

export default i18n;
