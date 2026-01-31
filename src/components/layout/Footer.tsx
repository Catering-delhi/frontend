"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top py-5">
        <div className="row gy-3 align-items-start">

          {/* LOGO */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <Link href="/" className="d-inline-block mb-3">
              <img
                src="/assets/img/logo.png"
                alt={`${t("site.name")} logo`}
                className="footer-logo"
              />
            </Link>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <div className="footer-contact">
              <p>{t("footer.addressLine1")}</p>
              <p>{t("footer.addressLine2")}</p>
              <p className="mt-3">
                <strong>{t("footer.phoneLabel")}:</strong>{" "}
                <span>{t("+91-8595572638")}</span>
              </p>
              <p>
                <strong>{t("footer.emailLabel")}:</strong>{" "}
                <span>{t("bespokecuisineinc@gmail.com")}</span>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/bespokecuisineinc/"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="col-6 col-lg-3 footer-links text-center text-lg-start">
            <h4>{t("footer.usefulLinks")}</h4>
            <ul className="mobile-footer">
              <li><Link href="/">{t("nav.home")}</Link></li>
              <li><Link href="/about">{t("nav.about")}</Link></li>
              <li><Link href="/menu">{t("nav.menu")}</Link></li>
              <li><Link href="/contact">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="col-6 col-lg-3 footer-links text-center text-lg-start">
            <h4>{t("footer.servicesTitle")}</h4>
            <ul className="mobile-footer">
              <li><Link href="/menu">{t("nav.menu")}</Link></li>
              <li><Link href="/gallery">{t("nav.gallery")}</Link></li>
              <li><Link href="/contact">{t("nav.contact")}</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container text-center py-4 border-top border-opacity-10">
        <p className="mb-0" style={{ fontSize: "1rem" }}>
          © {t("footer.copyright")}{" "}
          <strong className="px-1">{t("site.name")}</strong>{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
