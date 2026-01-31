// src/i18n/i18n.ts
import i18n, { type i18n as I18nType } from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/i18n/locales/en/common.json";
import hiCommon from "@/i18n/locales/hi/common.json";

export function ensureI18n(): I18nType {
  if (i18n.isInitialized) return i18n;

  i18n.use(initReactI18next).init({
    resources: {
      en: { common: enCommon as unknown as Record<string, unknown> },
      hi: { common: hiCommon as unknown as Record<string, unknown> },
    },
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
  });

  return i18n;
}
