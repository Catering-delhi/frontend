// src/app/menu/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Menu from "@/components/sections/Menu";
import { useTranslation } from "react-i18next";

export default function MenuPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("menu.title")} 
        description={t("menu.kicker")}
        breadcrumbLabel={t("nav.menu")} 
      />
      <Menu />
    </>
  );
}

