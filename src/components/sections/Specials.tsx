// src/components/sections/Specials.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { specials } from "@/data/specials";

export default function Specials() {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(specials[0]?.id ?? "specials-tab-1");

  const current = specials.find((s) => s.id === active) ?? specials[0];

  return (
    <section id="specials" className="specials section">
      <SectionTitle kicker={t("specials.kicker")} title={t("specials.title")} />

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {specials.map((s) => (
                <li className="nav-item" key={s.id}>
                  <button
                    type="button"
                    className={`nav-link ${active === s.id ? "active show" : ""}`}
                    onClick={() => setActive(s.id)}
                  >
                    {t(s.tabKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9 mt-4 mt-lg-0">
            {current ? (
              <Reveal>
                <div className="tab-pane active show">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{t(current.titleKey)}</h3>
                      <p className="fst-italic">{t(current.italicKey)}</p>
                      <p>{t(current.descKey)}</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={current.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
