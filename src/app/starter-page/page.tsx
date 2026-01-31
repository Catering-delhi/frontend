// src/app/starter-page/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import StarterSection from "@/components/sections/StarterSection";
import { useTranslation } from "react-i18next";

export default function StarterPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("starter.pageTitle")} 
        description={t("starter.pageDesc")}
        breadcrumbLabel={t("starter.pageTitle")} 
      />
      <StarterSection />
    </>
  );
}
