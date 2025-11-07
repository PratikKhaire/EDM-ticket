"use client";

import { useState } from "react";
import Image from "next/image";
import { cities, filters, events } from '@/app/constants/index';
import { BorderBeam } from '@/app/components/ui/border-beam';
 
// Event data structure


const EventBrowse = () => {
  const [selectedCity, setSelectedCity] = useState("New York");

  return (
    <section className="section-wrapper  bg-light py-16 md:py-20 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10">
          {/* Title and Cities */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Browse Events in{" "}
              <span className="relative inline-block bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                {selectedCity}
              </span>
            </h2>

            {/* City Pills */}
            <div className="flex gap-3 flex-wrap">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-5 py-2 rounded-full font-medium text-xl transition-all duration-300 ${
                    selectedCity === city
                      ? "bg-white text-purple-900 shadow-lg shadow-purple-500/50"
                      : "bg-white/10 text-black hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-black rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-[2rem] overflow-hidden bg-slate-900 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer"
            >
              {/* Image Container - Full card height */}
              <div className="relative h-[500px] overflow-hidden">
                {/* Actual Event Image - Using Next.js Image for optimization */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Bookmark Icon - Top Right */}
                <button className="absolute top-5 right-5 w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:bg-white/30 transition-all duration-300 z-30">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                {/* Gradient Overlay - Always visible but stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/50"></div>

                {/* Normal State - Minimal Info (Always Visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight flex-1 pr-2">
                      {event.title}
                    </h3>
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      ${event.price}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-2">
                    {event.date}
                  </p>
                </div>

                {/* Hover State - Full Details with Blur Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  {/* Frosted Glass Background - Only visible on hover */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  
                  {/* Content - Positioned above blur */}
                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Event Title and Price */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight flex-1 pr-2">
                        {event.title}
                      </h3>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        ${event.price}
                      </div>
                    </div>

                    {/* Event Description */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {event.date} • {event.time}
                    </p>
                    <p className="text-white/80 text-sm mb-4">
                      📍 {event.venue}
                    </p>

                    {/* Badges Row */}
                    <div className="flex items-center gap-2 flex-wrap mb-5">
                      {/* Rating Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <svg
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-semibold text-sm">
                          {event.rating}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <span className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/20">
                        {event.category}
                      </span>

                      {/* Duration Badge */}
                      <span className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/20">
                        All Night
                      </span>
                    </div>

                    {/* Book Now Button - Only visible on hover */}
                    <button className="relative overflow-hidden w-full py-4 bg-white text-slate-900 font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl">
                      <span className="relative z-10">Book now</span>
                      <BorderBeam
                        duration={4}
                        colorFrom="#fbbf24"
                        colorTo="#f59e0b"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            Load More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventBrowse;
