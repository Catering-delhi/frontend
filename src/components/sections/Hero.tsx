// src/components/sections/Hero.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/Reveal";
import Modal from "@/components/ui/Modal";
import { efcoBrookshire, loraItalic, loraBold } from "@/fonts";

export default function Hero() {
  const { t } = useTranslation("common");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="hero" className="hero section dark-background hero-custom">
      {/* ✅ responsive bg */}
      <img className="hero-bg" src="/assets/img/hero-bg.JPG" alt="Hero Background" />

      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column align-items-start">
            <Reveal delay={0.05}>
              <h2 className="hero-title">
                {/* ✅ Welcome */}
                <span className={`hero-welcome ${loraItalic.variable}`}>
                  {t("hero.welcome")}
                </span>

                {/* ✅ Main Title */}
                <span className={`hero-brand ${loraBold.variable}`}>
                  {/* BESPOKE */}
                  <span className="brand-word yellow">
                    <span className={`brand-first ${efcoBrookshire.variable}`}>B</span>
                    ESPOKE
                  </span>

                  {/* spacing */}
                  <span className="brand-gap" />

                  {/* CUISINE */}
                  <span className="brand-word red">
                    <span className={`brand-first ${efcoBrookshire.variable}`}>C</span>
                    UISINE
                  </span>

                  <span className="brand-gap" />

                  {/* INC */}
                  <span className="brand-word yellow">
                    <span className={`brand-first ${efcoBrookshire.variable}`}>I</span>
                    NC
                  </span>
                </span>
              </h2>
            </Reveal>

            {/* ✅ Subtitle */}
            <Reveal delay={0.15}>
              <p className={`hero-subtitle ${loraItalic.variable}`}>
                Signature <span className="yellow-highlight">Bites,</span>, Unforgettable{" "}
                <span className="yellow-highlight">Nights</span>
              </p>
            </Reveal>

            {/* ✅ Button */}
            <Reveal delay={0.25}>
              <div className="d-flex mt-4">
                <Link className="cta-btn" href="/menu">
                  {t("hero.ctaMenu")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ✅ Mobile responsive styles */}
      <style jsx>{`
        .hero-custom {
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 90px;
          padding-bottom: 90px;
        }

        /* ✅ Default desktop */
        .hero-welcome {
          font-family: var(--font-lora-italic);
          color: #cda45e;
          font-size: 40px;
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }

        .hero-brand {
          font-family: var(--font-allan-bold);
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          display: block;
          white-space: normal;
          word-break: keep-all;
        }

        .brand-word {
          display: inline-flex;
          align-items: baseline;
        }

        .brand-first {
          font-family: var(--font-efco-brookshire);
          font-size: 58px;
          font-weight: 700;
          line-height: 1;
          margin-right: 2px;
        }

        .brand-gap {
          display: inline-block;
          width: 14px;
        }

        .yellow {
          color: #faf8f4ff;
        }

        .red {
          color: #e63946;
        }

        .hero-subtitle {
          font-family: var(--font-lora-italic);
          font-size: 34px;
          font-weight: 600;
          margin-top: 18px;
        }

        .yellow-highlight {
          color: #e63946;
          font-weight: 700;
        }

        /* ✅ Tablet */
        @media (max-width: 992px) {
          .hero-content {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .hero-welcome {
            font-size: 34px;
          }

          .hero-brand {
            font-size: 40px;
          }

          .brand-first {
            font-size: 50px;
          }

          .hero-subtitle {
            font-size: 28px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 576px) {
          .hero-content {
            padding-top: 70px;
            padding-bottom: 70px;
            text-align: left;
          }

          .hero-welcome {
            font-size: 26px;
            margin-bottom: 10px;
          }

          .hero-brand {
            font-size: 30px;
            line-height: 1.15;
          }

          .brand-word {
            display: inline-flex;
          }

          .brand-first {
            font-size: 60px;
          }

          .brand-gap {
            width: 10px;
          }

          .hero-subtitle {
            font-size: 22px;
            margin-top: 14px;
          }

          /* Button spacing */
          .cta-btn {
            padding: 10px 18px;
            font-size: 14px;
          }
        }

        /* ✅ Very small screens */
        @media (max-width: 380px) {
          .hero-welcome {
            font-size: 22px;
          }

          .hero-brand {
            font-size: 26px;
          }

          .brand-first {
            font-size: 34px;
          }

          .hero-subtitle {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
