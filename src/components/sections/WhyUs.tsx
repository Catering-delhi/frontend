// src/components/sections/WhyUs.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { whyCards } from "@/data/whyUs";

// ✅ fonts
import { loraBold, loraItalic } from "@/fonts";

export default function WhyUs() {
  const { t } = useTranslation("common");

  return (
    <section
      id="why-us"
      className={`why-us section ${loraBold.variable} ${loraItalic.variable}`}
    >
      {/* ✅ no change to SectionTitle, only font variable available */}
      <SectionTitle kicker={t("why.kicker")} title={t("why.title")} />

      <div className="container">
        <div className="row gy-4">
          {whyCards.map((c, idx) => (
            <div key={c.number} className="col-lg-4">
              <Reveal delay={idx * 0.06}>
                <div className="card-item">
                  {/* ✅ number */}
                  <span style={{ fontFamily: "var(--font-lora-bold)" }}>
                    {c.number}
                  </span>

                  {/* ✅ title */}
                  <h4 style={{ fontFamily: "var(--font-lora-bold)" }}>
                    {t(c.titleKey)}
                  </h4>

                  {/* ✅ description */}
                  <p style={{ fontFamily: "var(--font-lora-italic)" }}>
                    {t(c.descKey)}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
