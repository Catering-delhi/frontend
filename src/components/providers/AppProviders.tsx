// src/components/providers/AppProviders.tsx
"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { ensureI18n } from "@/i18n/i18n";
import { initTheme } from "@/hooks/useTheme";
import { initLocale } from "@/hooks/useLocale";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const i18n = ensureI18n();

  useEffect(() => {
    initTheme();
    initLocale(i18n);
  }, [i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
