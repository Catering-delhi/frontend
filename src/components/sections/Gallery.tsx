"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Modal from "@/components/ui/Modal";
import { galleryCategories } from "@/data/gallery";

const categories = Object.keys(galleryCategories);

// Detect video by extension
const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

export default function Gallery() {
  const { t } = useTranslation("common");

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [displayedImages, setDisplayedImages] = useState(
    galleryCategories[activeCategory]
  );
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [openMedia, setOpenMedia] = useState<string | null>(null);

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

      {/* CATEGORY TABS */}
      <div className="gallery-tabs">
        {categories.map((cat, i) => (
          <button
            key={cat}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => handleCategoryChange(cat)}
            className={`gallery-tab ${
              activeCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
        <div ref={indicatorRef} className="tab-indicator" />
      </div>

      {/* MEDIA GRID */}
      <div className={`gallery-grid fade ${isGridVisible ? "show" : ""}`}>
        {displayedImages.map((src) => (
          <button
            key={src}
            className="gallery-item"
            onClick={() => setOpenMedia(src)}
          >
            <div className="media-wrapper">
              {isVideo(src) ? (
                <video
                  src={src}
                  muted
                  playsInline
                  preload="metadata"
                  loop
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              ) : (
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      <Modal open={!!openMedia} onClose={() => setOpenMedia(null)}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          {openMedia &&
            (isVideo(openMedia) ? (
              <video
                src={openMedia}
                controls
                autoPlay
                style={{
                  width: "400px",
                  height: "500px",
                  objectFit: "cover"
                }}
              />
            ) : (
              <img
                src={openMedia}
                alt=""
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover"
                }}
              />
            ))}
        </div>
      </Modal>
    </section>
  );
}

<style jsx>{`
  /* GRID */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 18px;
  }

  /* ITEM RESET */
  .gallery-item {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  /* MEDIA WRAPPER */
  .media-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1; /* ⭐ square ratio */
    overflow: hidden;
    border-radius: 14px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* IMAGE & VIDEO */
  .media-wrapper img,
  .media-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* VIDEO UX */
  .media-wrapper video {
    pointer-events: none;
  }

  /* OPTIONAL: PLAY ICON FOR VIDEOS */
  .media-wrapper:has(video)::after {
    content: "▶";
    position: absolute;
    font-size: 42px;
    color: white;
    opacity: 0.85;
    pointer-events: none;
  }

  /* HOVER EFFECT */
  .gallery-item:hover .media-wrapper {
    transform: scale(1.03);
    transition: transform 0.3s ease;
  }
`}</style>