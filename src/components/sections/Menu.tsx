// src/components/sections/Menu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/Reveal";
import Modal from "@/components/ui/Modal";
import { menuItems, MenuCategory } from "@/data/menu";

// ✅ fonts
import { loraBold, loraItalic } from "@/fonts";

interface OrderItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const orders: OrderItem[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841955/Api_twalw1.jpg",
    title: "Appetizers",
    description:
      "Bespoke Cuisine brings the thoughtfully crafted appetizers that set the tone for an exceptional dining experience.",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841958/Chaat_egmavy.jpg",
    title: "Chaats",
    description:
      "Classic Indian and International chaats by Bespoke Cuisine, crafted with freshness and refined presentation.",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841960/Conti_m0bzxd.jpg",
    title: "Continental ",
    description:
      "Timeless continental dishes by Bespoke Cuisine, prepared with quality ingredients and balanced flavours.",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841965/main_u6ngtg.jpg",
    title: "Main Course",
    description:
      "The Soul of food, Signature main course creations by Bespoke Cuisine, crafted for depth, balance, and lasting flavour.",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841962/dessert_kejhcx.jpg",
    title: "Desserts",
    description: "A refined collection of desserts by Bespoke Cuisine.",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841970/salad_zjojei.jpg",
    title: "Soups and Salads",
    description: "Light, fresh salads and nourishing soups by Bespoke Cuisine.",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841972/south_ul7b7v.jpg",
    title: "South Indian",
    description:
      "Authentic South Indian cuisine by Bespoke Cuisine, featuring traditional flavors and spices.",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841964/fusion_rk7wmx.jpg",
    title: "Fusion Main Course ",
    description:
      "Warm and comforting soups by Bespoke Cuisine, perfect for any occasion.",
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dwsiqzqzy/image/upload/v1769841967/roti_jdhe9u.jpg",
    title: "Breads and Rices",
    description: "Freshly made rotis and aromatic rice dishes by Bespoke Cuisine.",
  },
];

const orderToCategories: Record<number, MenuCategory[]> = {
  1: ["appetizers"],
  2: ["chaats"],
  3: ["continental"],
  4: ["main_course"],
  5: ["desserts"],
  6: ["salad_soups"],
  7: ["south_indian"],
  8: ["soups"],
  9: ["roti_rice"],
};

export default function Menu() {
  const { t } = useTranslation("common");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  return (
    <section
      id="menu"
      className={`menu section order_area ${loraBold.variable} ${loraItalic.variable}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="section_title mb-5 text-center"
              style={{ marginBottom: "70px" }}
            >
              <Reveal>
                {/* ✅ heading font */}
                <h3 style={{ fontFamily: "var(--font-lora-bold)" }}>
                  Our <span style={{ color: "#d9b35a" }}>Menu</span> Options
                </h3>

                {/* ✅ subheading font */}
                <h4 style={{ fontFamily: "var(--font-lora-italic)" }}>
                  Carefully crafted menu options offering variety, balance, and
                  refined flavours.
                </h4>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="row">
          {orders.map((order, idx) => (
            <div key={order.id} className="col-xl-4 col-md-6 mb-4">
              <Reveal delay={idx * 0.1}>
                <div
                  className="single_order d-flex flex-column"
                  style={{ minHeight: "500px" }}
                >
                  <div className="order_thumb position-relative">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="img-fluid w-100"
                      style={{ height: "250px", objectFit: "cover" }}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const menuImages = [
                          "/assets/img/menu/bread-barrel.jpg",
                          "/assets/img/menu/caesar.jpg",
                          "/assets/img/menu/greek-salad.JPG",
                          "/assets/img/menu/lobster-bisque.jpg",
                          "/assets/img/menu/lobster-roll.jpg",
                          "/assets/img/menu/mozzarella.jpg",
                        ];
                        const fallbackIndex = (order.id - 1) % menuImages.length;
                        if (!target.src.includes(menuImages[fallbackIndex])) {
                          target.src = menuImages[fallbackIndex];
                        }
                      }}
                    />
                  </div>

                  <div className="order_info p-4">
                    {/* ✅ card title font */}
                    <h3
                      className="mb-3"
                      style={{ fontFamily: "var(--font-lora-bold)" }}
                    >
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        {order.title}
                      </Link>
                    </h3>

                    {/* ✅ card description font */}
                    <p
                      className="mb-3"
                      style={{
                        whiteSpace: "pre-line",
                        lineHeight: "1.8",
                        fontFamily: "var(--font-lora-italic)",
                      }}
                    >
                      {order.description}
                    </p>

                    <button
                      className="btn see-more-btn"
                      onClick={() => {
                        setSelectedOrder(order);
                        setModalOpen(true);
                      }}
                      style={{ fontFamily: "var(--font-lora-bold)" }}
                    >
                      See More
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedOrder?.title}
      >
        <div className="row">
          {menuItems
            .filter(
              (item) =>
                selectedOrder &&
                orderToCategories[selectedOrder.id]?.includes(item.category)
            )
            .map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="d-flex">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="img-fluid me-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div>
                    {/* ✅ modal item name */}
                    <h5 style={{ fontFamily: "var(--font-lora-bold)" }}>
                      {t(item.nameKey)}
                    </h5>

                    {/* ✅ modal item desc */}
                    <p
                      className="mb-1"
                      style={{ fontFamily: "var(--font-lora-italic)" }}
                    >
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Modal>
    </section>
  );
}
