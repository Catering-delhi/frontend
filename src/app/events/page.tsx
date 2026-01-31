// src/app/events/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Events from "@/components/sections/Events";
import { useTranslation } from "react-i18next";

export default function EventsPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("nav.events")} 
        breadcrumbLabel={t("nav.events")} 
      />
      <Events />
    </>
  );
}

