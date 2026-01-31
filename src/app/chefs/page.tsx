// src/app/chefs/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Chefs from "@/components/sections/Chefs";
import { useTranslation } from "react-i18next";

export default function ChefsPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("About our Chefs")} 
        description={t("Know our chefs")}
        breadcrumbLabel={t("nav.chefs")} 
      />
      <Chefs />
    </>
  );
}

