// src/app/contact/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/Contact";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("contact.title")} 
        description={t("contact.kicker")}
        breadcrumbLabel={t("nav.contact")} 
      />
      <Contact />
    </>
  );
}

