"use client";

import { useRef, useEffect, useState } from "react";

import {artists}  from "@/app/constants/index"

// Artist data


const ArtistsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 2; // Pixels per frame

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to beginning when reaching the end for infinite loop
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-wrapper  bg-purple-900 py-12 md:py-16 lg:py-20">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Artists in your District
          </h2>
        </div>

        {/* Scrollable Artists Container */}
        <div className="relative group ">
          {/* Fade gradient masks on edges */}
         

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 hover:scale-110 transform"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 hover:scale-110 transform"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Artists Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 relative"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate artists for seamless infinite loop */}
            {[...artists, ...artists].map((artist, index) => (
              <div
                key={`${artist.id}-${index}`}
                className="flex-none w-[220px] md:w-[240px] group/card cursor-pointer animate-fade-in"
              >
                {/* Artist Card */}
                <div className="relative">
                  {/* Image Container with Gradient Background */}
                  <div
                    className={`relative w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden bg-gradient-to-br ${artist.gradient} shadow-lg group-hover/card:shadow-2xl transition-all duration-300 group-hover/card:scale-105  `}
                  >
                    {/* Placeholder for artist image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/80">
                        {artist.name.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Artist Name */}
                  <div className="mt-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Optional */}
        <div className="mt-6 text-center text-sm text-gray-500 md:hidden">
          Swipe to see more artists →
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
