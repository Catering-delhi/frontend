// src/components/sections/Video.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Video() {
  const { t } = useTranslation("common");
  const [playing, setPlaying] = useState(false);
  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({});

  const additionalVideos = [
    { id: 2, src: "/assets/video/videos.mp4", thumbnail: "/assets/img/hero-bg.jpg" },
    { id: 3, src: "/assets/video/videos.mp4", thumbnail: "/assets/img/hero-bg.jpg" },
    { id: 4, src: "/assets/video/videos.mp4", thumbnail: "/assets/img/hero-bg.jpg" },
    { id: 5, src: "/assets/video/videos.mp4", thumbnail: "/assets/img/hero-bg.jpg" },
    { id: 6, src: "/assets/video/videos.mp4", thumbnail: "/assets/img/hero-bg.jpg" }
  ];

  const handlePlayToggle = (id: number) => {
    setPlayingStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="video" className="video section">
      
      

      {/* Additional Video Players */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <SectionTitle 
          kicker={t("Customer Feedback")} 
          title={t("Watch what our Clients say's")} 
        />
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          alignItems: 'start',
          marginTop: '40px'
        }}>
          {additionalVideos.map((video) => (
            <div key={video.id} style={{ position: 'relative' }}>
              {!playingStates[video.id] ? (
                <>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id} thumbnail`}
                    style={{ 
                      width: '100%', 
                      aspectRatio: '9/16', 
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '8px'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer'
                    }}
                    onClick={() => handlePlayToggle(video.id)}
                  >
                    <div className="pulsating-play-btn" />
                  </div>
                </>
              ) : (
                <video
                  width="100%"
                  style={{ 
                    aspectRatio: '9/16',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                  src={video.src}
                  controls
                  autoPlay
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
