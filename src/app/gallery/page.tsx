// src/app/gallery/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Gallery from "@/components/sections/Gallery";
import { useTranslation } from "react-i18next";

export default function GalleryPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t(" Gallery")} 
        description={t("gallery")}
        breadcrumbLabel={t("nav.gallery")} 
      />
      <Gallery />
    </>
  );
}

