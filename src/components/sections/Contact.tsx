"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t } = useTranslation("common");

  const showcaseImg = "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841417/contactpage_rs6vme.webp";

  return (
    <section id="contact" className="contact section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="container section-title" data-aos="fade-up">
          <SectionTitle
            kicker={t("contact.kicker", { defaultValue: "Contact" })}
            title={t("contact.title", { defaultValue: "Contact" })}
          />
        </div>

        <div
          style={{
            border: "1px solid #cda45e",
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-lg-7 col-xl-6">
              <div className="row gy-4">
               
                <div className="col-md-6">
                  <Reveal>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      style={{ gap: 14, padding: "14px 0" }}
                    >
                      <i
                        className="bi bi-geo-alt flex-shrink-0"
                        style={{ fontSize: 34, lineHeight: 1 }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "0 0 8px",
                          }}
                        >
                          {t("contact.locationTitle", {
                            defaultValue: "Location",
                          })}
                        </h3>
                        <p style={{ fontSize: 18, margin: 0 }}>
                          {t("contact.locationValue")}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="col-md-6">
                  <Reveal>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      style={{ gap: 14, padding: "14px 0" }}
                    >
                      <i
                        className="bi bi-clock flex-shrink-0"
                        style={{ fontSize: 34, lineHeight: 1 }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "0 0 8px",
                          }}
                        >
                          {t("contact.hoursTitle", {
                            defaultValue: "Open Hours",
                          })}
                        </h3>
                        <p style={{ fontSize: 18, margin: 0 }}>
                          {t("contact.hoursLine1")}
                          <br />
                          {t("contact.hoursLine2")}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="col-md-6">
                  <Reveal>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      style={{ gap: 14, padding: "14px 0" }}
                    >
                      <i
                        className="bi bi-telephone flex-shrink-0"
                        style={{ fontSize: 34, lineHeight: 1 }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "0 0 8px",
                          }}
                        >
                          {t("contact.callTitle", { defaultValue: "Call Us" })}
                        </h3>
                        <p style={{ fontSize: 18, margin: 0 }}>
                          <a
                            className="text-reset"
                            href={`tel:${t("topbar.phone")}`}
                            // style={{ textDecoration: "none", fontSize: 18 }}
                          >
                            {t("+91-8595572638")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="col-md-6">
                  <Reveal>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="500"
                      style={{ gap: 14, padding: "14px 0" }}
                    >
                      <i
                        className="bi bi-envelope flex-shrink-0"
                        style={{ fontSize: 34, lineHeight: 1 }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "0 0 8px",
                          }}
                        >
                          {t("contact.emailTitle", {
                            defaultValue: "Email Us",
                          })}
                        </h3>
                        <p style={{ fontSize: 18, margin: 0 }}>
                          <a
                            className="text-reset"
                            href={`mailto:${t("topbar.email")}`}
                            style={{ textDecoration: "none", fontSize: 18 }}
                          >
                            {t("bespokecuisineinc@gmail.com")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* RIGHT: image */}
            <div
              className="col-lg-5 col-xl-5 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Reveal>
                <img
                  src={showcaseImg}
                  className="img-fluid rounded shadow"
                  alt={t("contact.imageAlt", {
                    defaultValue: "Restaurant contact showcase",
                  })}
                  style={{
                    maxWidth: 650,
                    width: "100%",
                    height: 520, // keep big, like your screenshot style
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
