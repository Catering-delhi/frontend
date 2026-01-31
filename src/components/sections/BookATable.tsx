// src/components/sections/BookATable.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function BookATable() {
  const { t } = useTranslation("common");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  return (
    <section id="book-a-table" className="book-a-table section">
      <SectionTitle kicker={t("book.kicker")} title={t("book.title")} />

      <div className="container">
        <Reveal>
          <form
            className="php-email-form"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("loading");
              window.setTimeout(() => setStatus("success"), 600);
            }}
          >
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="text" name="name" placeholder={t("book.form.name")} required />
              </div>

              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="email" name="email" placeholder={t("book.form.email")} required />
              </div>

              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="text" name="phone" placeholder={t("book.form.phone")} required />
              </div>

              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="text" name="date" placeholder={t("book.form.date")} required />
              </div>

              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="text" name="time" placeholder={t("book.form.time")} required />
              </div>

              <div className="col-lg-4 col-md-6">
                <input className="form-control" type="number" name="people" placeholder={t("book.form.people")} required />
              </div>

              <div className="col-lg-12">
                <textarea className="form-control" name="message" rows={6} placeholder={t("book.form.message")} />
              </div>

              <div className="col-lg-12 text-center">
                <div className="loading" style={{ display: status === "loading" ? "block" : "none" }}>
                  {t("book.form.loading")}
                </div>
                <div className="sent-message" style={{ display: status === "success" ? "block" : "none" }}>
                  {t("book.form.success")}
                </div>

                <button type="submit" disabled={status === "loading"}>
                  {t("book.form.submit")}
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
