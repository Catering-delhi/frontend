// src/components/sections/Chefs.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import { chefs } from "@/data/chefs";

export default function Chefs() {
  const { t } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % chefs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="chefs" className="chefs section">
      <SectionTitle
        kicker={t("Top Quality chefs to your needs")}
        title={t("Our Chef's")}
      />

      <div className="container">
        <div
          id="chefsCarousel"
          className="carousel slide"
        >
          <div className="carousel-indicators">
            {chefs.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={idx === activeIndex ? "active" : ""}
                aria-current={idx === activeIndex ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {chefs.map((chef, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === activeIndex ? "active" : ""}`}
              >
                <img
                  src={chef.image}
                  className="d-block w-100"
                  alt={t(chef.nameKey)}
                  style={{
                    aspectRatio: "16/6",
                    objectFit: "cover",
                  }}
                />

              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + chefs.length) % chefs.length)}
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % chefs.length)}
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
