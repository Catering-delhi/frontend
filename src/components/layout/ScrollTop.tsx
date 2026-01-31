// src/components/layout/ScrollTop.tsx
"use client";

import React, { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center active"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  );
}
