// src/app/specials/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Specials from "@/components/sections/Specials";
import { useTranslation } from "react-i18next";

export default function SpecialsPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("specials.title")} 
        description={t("specials.kicker")}
        breadcrumbLabel={t("nav.specials")} 
      />
      <Specials />
    </>
  );
}

