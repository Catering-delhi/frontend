// src/hooks/useTheme.ts
"use client";

import { useEffect, useMemo, useState } from "react";
import { safeGet, safeSet } from "@/lib/storage";

export type ThemeMode = "light" | "dark";

const THEME_KEY = "restaurant_theme";

function prefersDark(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.bsTheme = mode;
}

export function initTheme() {
  const saved = safeGet(THEME_KEY) as ThemeMode | null;
  const mode: ThemeMode = saved ?? (prefersDark() ? "dark" : "light");
  applyTheme(mode);
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = safeGet(THEME_KEY) as ThemeMode | null;
    return saved ?? (prefersDark() ? "dark" : "light");
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = useMemo(
    () => () => {
      setTheme((prev) => {
        const next: ThemeMode = prev === "dark" ? "light" : "dark";
        safeSet(THEME_KEY, next);
        applyTheme(next);
        return next;
      });
    },
    []
  );

  return { theme, toggle };
}
