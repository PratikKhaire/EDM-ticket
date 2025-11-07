"use client";

import { useRef } from "react";
import { LogoTicker } from "./LogoTicker";
import { CoverFlowGallery } from "../components/CoverFlowGallery";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="pt-0 pb-0 md:pt-5 overflow-hidden min-h-[85vh] bg-light flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
        <div className="md:flex items-center justify-between gap-12 lg:gap-16">
          
          {/* 3D Cover Flow Gallery - Right Side on Desktop */}
          <div 
            className="hidden md:flex md:order-2 md:w-[660px] md:h-[448px] relative items-center justify-center flex-shrink-0"
            style={{ background: "transparent" }}
          >
            <CoverFlowGallery />
          </div>

          {/* Hero Content - Left Side on Desktop */}
          <div className="md:order-1 md:flex-1 max-w-[640px]">
            <div>
              <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">
                Version 2.0 is here
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text mt-6">
                Buy or Sell <br /> Rave & EDM Tickets
              </h1>

              <p className="text-xl text-[#010D3E] tracking-tight mt-6 leading-relaxed">
                Easy, secure, and hassle-free transactions powered by community-generated reviews and ratings.
              </p>
            </div>

            {/* Logo Ticker for Mobile */}
            <div className="md:hidden h-[350px] w-full my-8 relative flex items-center justify-center overflow-hidden">
              <LogoTicker />
            </div>

            <div className="mt-8 flex items-center">
              <button className="btn btn-primary">Join the Party</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
