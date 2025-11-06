"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
    <section className="section-wrapper bg-gray-50 py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Section Header - Centered with max-width */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32 mb-8 md:mb-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Artists in your District
          </h2>
        </div>
      </div>

      {/* Full Width Scrollable Container */}
      <div className="relative group w-full">
        {/* LEFT Edge - Enhanced Fade with Multiple Layers */}
        <div className="absolute left-0 top-0 bottom-0 w-48 md:w-64 lg:w-80 z-20 pointer-events-none">
          {/* Primary gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent" />
          
          {/* Blur layer */}
          <div className="absolute inset-0 backdrop-blur-[2px]" 
               style={{
                 maskImage: 'linear-gradient(to right, black, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
               }} />
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-transparent animate-pulse" />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 to-transparent" />
        </div>
        
        {/* RIGHT Edge - Enhanced Fade with Multiple Layers */}
        <div className="absolute right-0 top-0 bottom-0 w-48 md:w-64 lg:w-80 z-20 pointer-events-none">
          {/* Primary gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent" />
          
          {/* Blur layer */}
          <div className="absolute inset-0 backdrop-blur-[2px]" 
               style={{
                 maskImage: 'linear-gradient(to left, black, transparent)',
                 WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
               }} />
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-200/30 via-purple-200/20 to-transparent animate-pulse" 
               style={{ animationDelay: '0.5s' }} />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-100/60 to-transparent" />
        </div>

        {/* Top subtle fade */}
        <div className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-gray-50/50 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom subtle fade */}
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-gray-50/50 to-transparent z-10 pointer-events-none" />

        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 shadow-xl rounded-full p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform border border-gray-200"
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
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 shadow-xl rounded-full p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform border border-gray-200"
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

        {/* Artists Scroll Container - FULL WIDTH */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 relative w-full px-8 md:px-16"
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
              className="flex-none w-[220px] md:w-[240px] group/card cursor-pointer"
              style={{
                animation: 'fadeInScale 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Artist Card */}
              <div className="relative">
                {/* Image Container with Gradient Background */}
                <div
                  className={`relative w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden bg-gradient-to-br ${artist.gradient} shadow-xl group-hover/card:shadow-2xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3`}
                >
                  {/* Animated ring effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-300/0 group-hover/card:border-gray-400/40 transition-all duration-500 group-hover/card:scale-110" />
                  
                  {/* Rotating gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover/card:from-blue-500/10 group-hover/card:via-purple-500/10 group-hover/card:to-pink-500/10 transition-all duration-700 group-hover/card:animate-spin-slow" />
                  
                  {/* Artist Image */}
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 220px, 240px"
                  />
                  
                  {/* Multi-layer overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 group-hover/card:from-black/20 group-hover/card:to-black/40 transition-all duration-500" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* Pulsing glow ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover/card:opacity-20 blur-md transition-all duration-500 group-hover/card:animate-pulse -z-10" />
                </div>

                {/* Artist Name with enhanced animation */}
                <div className="mt-4 text-center transform transition-all duration-300 group-hover/card:-translate-y-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight group-hover/card:text-purple-600 transition-colors duration-300">
                    {artist.name}
                  </h3>
                  
                  {/* Animated underline on hover */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-2 group-hover/card:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Optional */}
      <div className="mt-6 text-center text-sm text-gray-600 md:hidden">
        Swipe to see more artists →
      </div>
    </section>
  );
};

export default ArtistsSection;
