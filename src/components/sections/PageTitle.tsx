// src/components/sections/PageTitle.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// ✅ fonts
import { loraBold, loraItalic } from "@/fonts";

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumbLabel: string;
}

export default function PageTitle({
  title,
  description,
  breadcrumbLabel,
}: PageTitleProps) {
  const { t } = useTranslation("common");

  return (
    <div
      className={`page-title position-relative ${loraBold.variable} ${loraItalic.variable}`}
      style={{ backgroundImage: "url(https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841417/contact_fmcuoc.jpg)" }}
    >
      <div className="container position-relative">
        {/* ✅ Title font changed */}
        <h1 style={{ fontFamily: "var(--font-lora-bold)" }}>
          {title}
          <br />
        </h1>

        {/* ✅ Breadcrumb font */}
        <nav
          className="breadcrumbs"
          style={{ fontFamily: "var(--font-lora-italic)" }}
        >
          <ol>
            <li>
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li className="current">{breadcrumbLabel}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
