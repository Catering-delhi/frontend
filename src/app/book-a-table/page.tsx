// src/app/book-a-table/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import BookATable from "@/components/sections/BookATable";
import { useTranslation } from "react-i18next";

export default function BookATablePage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("book.title")} 
        description={t("book.kicker")}
        breadcrumbLabel={t("nav.book")} 
      />
      <BookATable />
    </>
  );
}

