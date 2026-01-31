// src/components/sections/About.tsx
"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import { loraBold, loraItalic, loraRegular } from "@/fonts";

export default function About() {
  return (
    <>
      {/* ✅ About Section */}
      <section
        id="about"
        className={`about section ${loraBold.variable} ${loraItalic.variable} ${loraRegular.variable}`}
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2">
              <Reveal>
                <img
                  src="/assets/img/aboutus1.webp"
                  className="img-fluid about-img"
                  alt="Restaurant dining room"
                  style={{
                    maxWidth: "470px",
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== "/assets/img/about.jpg") {
                      target.src = "/assets/img/about.jpg";
                    }
                  }}
                />
              </Reveal>
            </div>

            <div
              className="col-lg-6 order-2 order-lg-1 content"
              style={{ marginTop: "50px" }}
            >
              <Reveal>
                <h3 style={{ fontFamily: "var(--font-lora-bold)" }}>
                  Crafting Signature Flavours for Unforgettable Experiences
                </h3>

                <p
                  className="fst-italic"
                  style={{ fontFamily: "var(--font-lora-italic)" }}
                >
                  Bespoke Cuisine is a catering company dedicated to creating
                  thoughtfully curated culinary experiences for corporate
                  events, private gatherings, and special occasions. We believe
                  great food is not just about taste, but about precision,
                  presentation, and understanding the purpose of every event.
                </p>

                <ul style={{ fontFamily: "var(--font-lora-italic)" }}>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Thoughtfully designed menus tailored to your event,
                      preferences, and dietary requirements.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Fresh, high-quality ingredients selected to deliver
                      consistent taste and superior quality.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Professional planning and smooth service ensuring a
                      stress-free and well-managed event.
                    </span>
                  </li>
                </ul>

                <p style={{ fontFamily: "var(--font-lora-italic)" }}>
                  At Bespoke Cuisine, we don’t follow standard menus — we design
                  food experiences that are personal, elegant, and memorable.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Our Team */}
      <section
        className={`py-5 ${loraBold.variable} ${loraItalic.variable} ${loraRegular.variable}`}
        style={{ border: "1px solid #cda45e" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-2 mb-lg-4">
            <div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
              <h1
                className="display-5 fw-bold"
                style={{
                  fontFamily: "var(--font-lora-bold)",
                  color: "#cda45e",
                }}
              >
                Meet the Team
              </h1>

              <p
                className="lead"
                style={{
                  fontFamily: "var(--font-lora-italic)",
                  fontWeight: "bold",
                }}
              >
                Led by the Founder & Director, supported by the Co-Founder and
                managed by an experienced team, Bespoke Cuisine delivers quality
                with precision
              </p>
            </div>
          </div>

          <div className="row">
            {/* CARD 1 */}
            <div className="col-md-4">
              <div className="card text-center mb-3">
                <div
                  className="card-body p-0 pb-4"
                  style={{ backgroundColor: "#cda45e" }}
                >
                  <div className="mb-4">
                    <img
                      className="img-fluid"
                      src="/assets/img/owner.JPG"
                      alt="Team member"
                    />
                  </div>

                  <h5
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-bold)",
                    }}
                  >
                    Mr. Sanjeet Singh
                  </h5>
                  <div
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-regular)",
                    }}
                  >
                    Founder &amp; Director
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4">
              <div className="card text-center mb-3">
                <div
                  className="card-body p-0 pb-4"
                  style={{ backgroundColor: "#cda45e" }}
                >
                  <div className="mb-4">
                    <img
                      className="img-fluid"
                      src="/assets/img/Co-founder .JPG"
                      alt="Team member"
                    />
                  </div>

                  <h5
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-bold)",
                    }}
                  >
                    Mr. Anuj Singh
                  </h5>
                  <div
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-regular)",
                    }}
                  >
                    Co-Founder
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4">
              <div className="card text-center mb-3">
                <div
                  className="card-body p-0 pb-4"
                  style={{ backgroundColor: "#cda45e" }}
                >
                  <div className="mb-4">
                    <img
                      className="img-fluid"
                      src="/assets/img/Manager.jpg"
                      alt="Team member"
                    />
                  </div>

                  <h5
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-bold)",
                    }}
                  >
                    Mr. Md Gayashu
                  </h5>
                  <div
                    className="fw-bold"
                    style={{
                      color: "#000",
                      fontFamily: "var(--font-lora-regular)",
                    }}
                  >
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose */}
      <section
        id="why-us"
        className={`why-us section ${loraBold.variable} ${loraItalic.variable} ${loraRegular.variable}`}
      >
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{ fontFamily: "var(--font-lora-bold)" }}>WHY US</h2>
          <p style={{ fontFamily: "var(--font-lora-italic)" }}>
            Why Choose BESPOKE CUISINE
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <Reveal delay={0.1}>
                <div className="card-item">
                  <span style={{ fontFamily: "var(--font-lora-bold)" }}>
                    01
                  </span>
                  <h4 style={{ fontFamily: "var(--font-lora-bold)" }}>
                    <a
                      href="#"
                      className="stretched-link"
                      onClick={(e) => e.preventDefault()}
                      style={{ fontFamily: "var(--font-lora-bold)" }}
                    >
                      All Cuisines, Fully Customizable
                    </a>
                  </h4>
                  <p style={{ fontFamily: "var(--font-lora-italic)" }}>
                    North Indian, South Indian, Continental, Mughlai, Street
                    Food, Authentic Desi and more—menus tailored to your taste,
                    spice level, and budget.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <Reveal delay={0.2}>
                <div className="card-item">
                  <span style={{ fontFamily: "var(--font-lora-bold)" }}>
                    02
                  </span>
                  <h4 style={{ fontFamily: "var(--font-lora-bold)" }}>
                    <a
                      href="#"
                      className="stretched-link"
                      onClick={(e) => e.preventDefault()}
                      style={{ fontFamily: "var(--font-lora-bold)" }}
                    >
                      Fresh Ingredients & Fully Hygienic
                    </a>
                  </h4>
                  <p style={{ fontFamily: "var(--font-lora-italic)" }}>
                    We cook fresh for every order with strict hygiene standards,
                    we use quality products and consistent quality—so your
                    guests enjoy every bite.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <Reveal delay={0.3}>
                <div className="card-item">
                  <span style={{ fontFamily: "var(--font-lora-bold)" }}>
                    03
                  </span>
                  <h4 style={{ fontFamily: "var(--font-lora-bold)" }}>
                    <a
                      href="#"
                      className="stretched-link"
                      onClick={(e) => e.preventDefault()}
                      style={{ fontFamily: "var(--font-lora-bold)" }}
                    >
                      Professional Corporate Expertise
                    </a>
                  </h4>
                  <p style={{ fontFamily: "var(--font-lora-italic)" }}>
                    Expertly managed catering solutions designed specifically
                    for corporate events, ensuring smooth execution and a
                    polished dining experience.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
