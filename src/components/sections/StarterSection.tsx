// src/components/sections/StarterSection.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function StarterSection() {
  const { t } = useTranslation("common");

  return (
    <section id="starter-section" className="starter-section section">
      <SectionTitle kicker={t("starter.sectionKicker")} title={t("starter.sectionTitle")} />

      <div className="container">
        <Reveal>
          <p>{t("starter.sectionBody")}</p>
        </Reveal>
      </div>
    </section>
  );
}
