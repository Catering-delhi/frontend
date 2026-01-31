// src/components/sections/Services.tsx
"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import { color } from "framer-motion";
import { allanBold, loraItalic, loraBoldItalic } from "@/fonts";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "bi-gift-fill",
    title: "Birthday Catering",
    description:
      "Bespoke Cuisine creates birthday menus with starters, mains, desserts, mocktails,  live counters, themed setup, and professional catering services.",
  },
  {
    icon: "bi-cake2-fill",
    title: "Wedding Catering",
    description:
      "Bespoke Cuisine curates premium wedding feasts with customised menus, ritual-based service flow, trained staff, and live food stations.",
  },
  {
    icon: "bi-music-note-beamed",
    title: "Party Catering",
    description:
      "Bespoke Cuisine delivers party catering with crowd-favourite starters, mains, desserts, and optional bar snacks prepared fresh.",
  },
  {
    icon: "bi-calendar-event",
    title: "Corporate & Office Events",
    description:
      "Delivering refined catering solutions that elevate corporate events with precision, consistency, taste, and professional execution.",
  },
  {
    icon: "bi-person-badge",
    title: "Custom Menu Options",
    description:
      "Customised menus designed to match corporate preferences, dietary requirements, event formats, and professional dining standards.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Catering On Demand",
    description:
      "Quick-turnaround catering for small gatherings with efficient setup, focused menus, and quality-controlled execution.",
  },
];

export default function Services() {
  return (
    <>
      <section
      className={`service_area section ${allanBold.variable} ${loraItalic.variable} ${loraBoldItalic.variable}`}
    >
      <div className="container">
        {/* ✅ Section Heading */}
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-60 text-center">
              <Reveal>
                <h3
                  style={{
                    fontFamily: "var(--font-allan-bold)",
                    fontSize: "44px",
                    fontWeight: 900,
                    letterSpacing: "1px",
                    color: "#cda45e",
                    textTransform: "uppercase",
                  }}
                >
                  Our Services
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-lora-italic)",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: "820px",
                    margin: "14px auto 0",
                  }}
                >
                  <span style={{ color: "#cda45e", fontWeight: 700 }}>
                    Bespoke Cuisine {" "}
                  </span>
                  delivers premium catering for birthdays, weddings, private
                  parties, and corporate events.
                  <br className="d-none d-md-block" />
                  Choose from multi-cuisine menus, live counters, and tailored
                  packages built around your guests, budget, and expectations.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ✅ Cards */}
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-xl-4 col-md-6 mb-4 d-flex">
              <Reveal delay={idx * 0.1}>
                <div
                  className="single_service text-center flex-fill"
                  style={{
                    border: "1px solid rgba(205, 164, 94, 0.35)",
                    borderRadius: "12px",
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0, 0, 0, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* icon */}
                  <div className="service_icon mb-3">
                    <i
                      className={service.icon}
                      style={{ fontSize: "3.2rem", color: "#cda45e" }}
                    />
                  </div>

                  {/* ✅ title font */}
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-lora-bold-italic)",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {service.title}
                  </h4>

                  {/* ✅ description font */}
                  <p
                    style={{
                      fontFamily: "var(--font-lora-italic)",
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "rgba(255,255,255,0.82)",
                      marginBottom: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section
        id="about"
        className={`about section ${allanBold.variable} ${loraItalic.variable} ${loraBoldItalic.variable}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(205,164,94,0.08), rgba(0,0,0,0.05))",
          border: "1px solid rgba(205, 164, 94, 0.35)",
          borderRadius: "18px",
          padding: "60px 0",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="row gy-4 align-items-center"
            style={{
              background: "rgba(15, 13, 13, 0.65)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            {/* ✅ Image */}
            <div className="col-lg-6 order-2 order-lg-1 content">
              <Reveal>
                <img
                  src="https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841418/homeab_zaqtgb.jpg"
                  className="img-fluid about-img"
                  alt="Restaurant dining room"
                  style={{
                    maxWidth: "470px",
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "14px",
                    boxShadow: "0 12px 35px rgba(205,164,94,0.25)",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== "/assets/img/about.jpg") {
                      target.src = "/assets/img/about.jpg";
                    }
                  }}
                />
              </Reveal>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <Reveal>
                <div className="about-text-card">
                  <h2 className="about-heading">
                    <span className="white">SIGNATURE</span>{" "}
                    <span className="gold">BITES</span>,{" "}
                    <span className="white">UNFORGETTABLE</span>{" "}
                    <span className="gold">NIGHTS</span>
                  </h2>

                  <ul className="about-bullets">
                    <li>
                      <span className="red">Bespoke Cuisine</span> is a premium
                      culinary brand focused on creating personalized and
                      authentic dining experiences.
                    </li>

                    <li>
                      We believe every dish should reflect{" "}
                      <span className="red">quality</span>,{" "}
                      <span className="red">creativity</span>, and the{" "}
                      <span className="red">unique</span> preferences of our
                      clients.
                    </li>

                    <li>
                      Our menus are thoughtfully curated, combining India’s rich
                      regional flavors with select international cuisines, all
                      prepared using{" "}
                      <span className="red">premium ingredients</span> and{" "}
                      <span className="red">authentic techniques</span>.
                    </li>

                    <li>
                      With a strong emphasis on{" "}
                      <span className="red">vegetarian cuisine</span>,{" "}
                      <span className="red">hygiene</span>, and{" "}
                      <span className="red">presentation</span>, our
                      professional chefs deliver consistency and excellence in
                      every plate.
                    </li>

                    <li>
                      From <span className="red">corporate catering</span> to{" "}
                      <span className="red">private events</span> and custom
                      menu planning.
                    </li>

                    <li>
                      Bespoke Cuisine is dedicated to serving food that is
                      crafted with <span className="red">passion</span> and{" "}
                      <span className="red">precision</span>.
                    </li>
                  </ul>

                  {/* ✅ Signature line bottom-right */}
                  <div className="about-signature">
                    <span className="tilde">~</span> Team{" "}
                    <span className="gold">Bespoke Cuisine Inc</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ✅ same look as screenshot (scoped css) */}
        <style jsx>{`
          .about-text-card {
            width: 100%;
            border-radius: 10px;
            padding: 34px 36px;
            border: 2px solid rgba(205, 164, 94, 0.85);
            background: radial-gradient(circle at top, #131313 0%, #000 75%);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
          }

          .about-heading {
            text-align: left;
            font-family: var(--font-allan-bold);
            font-size: 28px;
            font-weight: 900;
            letter-spacing: 1px;
            margin-bottom: 22px;
            text-transform: uppercase;
          }

          .white {
            color: #f5f2f2;
          }
          .gold {
            color: #f2c94c;
          }
          .red {
            color: #e63946;
            font-weight: 700;
          }

          .about-bullets {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .about-bullets li {
            position: relative;
            padding-left: 22px;
            margin-bottom: 14px;
            font-size: 15px;
            line-height: 1.55;
            color: #f2efef;
            font-family: var(--font-lora-italic);
            font-style: italic;
          }

          .about-bullets li::before {
            content: "•";
            position: absolute;
            left: 0;
            top: -1px;
            font-size: 24px;
            line-height: 1;
            color: #ffffff;
          }

          .about-signature {
            margin-top: 18px;
            text-align: right;
            font-size: 18px;
            font-family: var(--font-lora-bold-italic);
            color: #fff;
          }

          .tilde {
            margin-right: 6px;
            font-weight: 700;
            color: #ffffff;
          }

          /* ✅ responsive (important) */
          @media (max-width: 992px) {
            .about-text-card {
              padding: 28px 22px;
            }
            .about-heading {
              font-size: 30px;
            }
            .about-bullets li {
              font-size: 16px;
            }
            .about-signature {
              font-size: 16px;
            }
          }

          @media (max-width: 420px) {
            .about-heading {
              font-size: 26px;
              line-height: 1.2;
            }
            .about-bullets li {
              font-size: 15px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
