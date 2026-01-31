// src/components/sections/Events.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/Reveal";
import { eventSlides } from "@/data/events";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Events() {
  const { t } = useTranslation("common");

  return (
    <section id="events" className="events section">
      <img className="slider-bg" src="/assets/img/events-bg.jpg" alt="" />

      <div className="container">
        <Reveal>
          <Swiper
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="swiper"
          >
            {eventSlides.map((s) => (
              <SwiperSlide key={s.id}>
                <div className="row gy-4 event-item">
                  <div className="col-lg-6">
                    <img src={s.image} className="img-fluid" alt="" />
                  </div>

                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{t(s.titleKey)}</h3>
                    <div className="price">
                      <p>
                        <span>{s.price}</span>
                      </p>
                    </div>
                    <p className="fst-italic">{t(s.italicKey)}</p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle" /> <span>{t(`${s.bulletsKeyBase}.1`)}</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" /> <span>{t(`${s.bulletsKeyBase}.2`)}</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" /> <span>{t(`${s.bulletsKeyBase}.3`)}</span>
                      </li>
                    </ul>
                    <p>{t(s.descKey)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
