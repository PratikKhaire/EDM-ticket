"use client"


import { useRef } from "react";
import { LogoTicker } from "./LogoTicker";

export const Hero = () => {

  const heroRef = useRef(null);

  return <section  ref={heroRef} className="pt-0 pb-0 md:pt-5 overflow-hidden min-h-[85vh] bg-light flex items-center">
    {/* Centered Container with Max Width */}
    <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
      <div className="md:flex items-center justify-between gap-12 lg:gap-16">

        {/* 3D Cover Flow Gallery - Order 2 on desktop */}
        <div className="hidden md:flex md:order-2 md:w-[660px] md:h-[448px] relative items-center justify-center flex-shrink-0">
          {/* 3D Perspective Container */}
          <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
            {/* Cards Container */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {/* Card 1 - Far Left */}
              <div 
                className="coverflow-card group"
                style={{ 
                  transform: 'translateX(-280px) translateZ(-200px) rotateY(45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_2.png"
                  alt="Event 1"
                  className="coverflow-image"
                />
              </div>

              {/* Card 2 - Mid Left */}
              <div 
                className="coverflow-card group"
                style={{ 
                  transform: 'translateX(-140px) translateZ(-100px) rotateY(25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_4.png"
                  alt="Event 2"
                  className="coverflow-image"
                />
              </div>

              {/* Card 3 - Center (Featured) */}
              <div 
                className="coverflow-card coverflow-card-center group"
                style={{ 
                  transform: 'translateX(0) translateZ(50px) rotateY(0deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_6.png"
                  alt="Event 3"
                  className="coverflow-image"
                />
              </div>

              {/* Card 4 - Mid Right */}
              <div 
                className="coverflow-card group"
                style={{ 
                  transform: 'translateX(140px) translateZ(-100px) rotateY(-25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_8.png"
                  alt="Event 4"
                  className="coverflow-image"
                />
              </div>

              {/* Card 5 - Far Right */}
              <div 
                className="coverflow-card group"
                style={{ 
                  transform: 'translateX(280px) translateZ(-200px) rotateY(-45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Events/image_10.png"
                  alt="Event 5"
                  className="coverflow-image"
                />
              </div>
            </div>

            {/* Floor Reflection */}
            <div className="absolute inset-0 flex items-center justify-center top-[50%]" style={{ transformStyle: 'preserve-3d', transform: 'scaleY(-1)', opacity: 0.3 }}>
              {/* Reflected Cards */}
              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(-280px) translateZ(-200px) rotateY(45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_2.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(-140px) translateZ(-100px) rotateY(25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_4.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(0) translateZ(50px) rotateY(0deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_6.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(140px) translateZ(-100px) rotateY(-25deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_8.png" alt="" className="coverflow-image-reflection" />
              </div>

              <div 
                className="coverflow-card-reflection"
                style={{ 
                  transform: 'translateX(280px) translateZ(-200px) rotateY(-45deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Events/image_10.png" alt="" className="coverflow-image-reflection" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Shows first on mobile, Order 1 on desktop */}
        <div className="md:order-1 md:flex-1 max-w-[640px]">
          <div>
            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text mt-6"> 
              Buy or Sell <br /> Rave & EDM Tickets
            </h1>
            
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 leading-relaxed">
              Easy, secure, and hassle-free transactions powered by community-generated reviews and ratings.
            </p>
          </div>
          
          {/* Logo Ticker for mobile - appears after description - Full width */}
          <div className="md:hidden h-[350px] w-full my-8 relative flex items-center justify-center overflow-hidden">
            <LogoTicker/>
          </div>
          
          <div className="mt-8 flex items-center">
            <button className="btn btn-primary">Join the Party</button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
