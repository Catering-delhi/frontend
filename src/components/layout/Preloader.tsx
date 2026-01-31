// src/components/layout/Preloader.tsx
"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 300);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;
  return <div id="preloader" aria-hidden="true" />;
}
