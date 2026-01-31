"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Modal from "@/components/ui/Modal";
import { galleryCategories } from "@/data/gallery";

const categories = Object.keys(galleryCategories);

export default function Gallery() {
  const { t } = useTranslation("common");

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [displayedImages, setDisplayedImages] = useState(galleryCategories[activeCategory]);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [openImage, setOpenImage] = useState<string | null>(null);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const index = categories.indexOf(activeCategory);
    const tab = tabRefs.current[index];
    const indicator = indicatorRef.current;

    if (tab && indicator) {
      indicator.style.width = `${tab.offsetWidth}px`;
      indicator.style.left = `${tab.offsetLeft}px`;
    }
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;

    setIsGridVisible(false);
    setTimeout(() => {
      setActiveCategory(category);
      setDisplayedImages(galleryCategories[category]);
      setIsGridVisible(true);
    }, 150);
  };

  return (
    <section id="gallery" className="gallery section">
      <SectionTitle kicker={t("gallery")} title="Our Culinary Gallery" />

      {/* CATEGORY NAVBAR */}
      <div className="gallery-tabs">
        {categories.map((cat, i) => (
          <button
            key={cat}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => handleCategoryChange(cat)}
            className={`gallery-tab ${activeCategory === cat ? "active" : ""
              }`}
          >
            {cat}
          </button>
        ))}
        <div ref={indicatorRef} className="tab-indicator" />
      </div>

      {/* IMAGE GRID */}
      <div className={`gallery-grid fade ${isGridVisible ? "show" : ""}`}>
        {displayedImages.map((src) => (
          <button
            key={src}
            className="gallery-item"
            onClick={() => setOpenImage(src)}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>

      <Modal open={!!openImage} onClose={() => setOpenImage(null)}>
        {openImage && (
          <img src={openImage} alt="" style={{ width: "100%" }} />
        )}
      </Modal>
    </section>
  );
}
