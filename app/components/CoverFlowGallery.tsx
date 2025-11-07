"use client";

import { useCoverFlowAnimation } from "../hooks/useCoverFlowAnimation";

const CARD_IMAGES = [
  "/images/Events/image_2.png",
  "/images/Events/image_4.png",
  "/images/Events/image_6.png",
  "/images/Events/image_8.png",
  "/images/Events/image_10.png"
];

export function CoverFlowGallery() {
  const { coverflowRef, containerRef, cardsRef, orbsRef } = useCoverFlowAnimation();

  return (
    <div className="relative w-full h-full">
      {/* 3D Container */}
      <div
        ref={coverflowRef}
        className="relative w-full h-full"
        style={{ perspective: "1200px", background: "transparent" }}
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => {
                orbsRef.current[i] = el;
              }}
              className={`coverflow-orb coverflow-orb-${i + 1}`}
            />
          ))}
        </div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="absolute inset-0 flex items-center justify-center coverflow-cards-container"
          style={{ transformStyle: "preserve-3d" }}
        >
          {CARD_IMAGES.map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`coverflow-card coverflow-card-${index + 1} ${
                index === 2 ? "coverflow-card-center" : ""
              } group`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Event ${index + 1}`} className="coverflow-image" />
            </div>
          ))}
        </div>

        {/* Floor Reflection */}
        <div
          className="absolute inset-0 flex items-center justify-center top-[50%]"
          style={{
            transformStyle: "preserve-3d",
            transform: "scaleY(-1)",
            opacity: 0.3
          }}
        >
          {CARD_IMAGES.map((src, index) => {
            const positions = [
              "translateX(-280px) translateZ(-200px) rotateY(45deg)",
              "translateX(-140px) translateZ(-100px) rotateY(25deg)",
              "translateX(0) translateZ(50px) rotateY(0deg)",
              "translateX(140px) translateZ(-100px) rotateY(-25deg)",
              "translateX(280px) translateZ(-200px) rotateY(-45deg)"
            ];

            return (
              <div
                key={`reflection-${index}`}
                className="coverflow-card-reflection"
                style={{ transform: positions[index] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="coverflow-image-reflection" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
