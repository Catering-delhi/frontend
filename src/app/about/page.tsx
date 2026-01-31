// src/app/about/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import About from "@/components/sections/About";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("about.title")} 
        description={t("about.italic")}
        breadcrumbLabel={t("nav.about")} 
      />
      <About />
    </>
  );
}

