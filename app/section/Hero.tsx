"use client"


import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { easeInOut, motion , useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoTicker } from "./LogoTicker";

export const Hero = () => {

  const heroRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1],[150 ,-150])

  return <section  ref={heroRef} className=" pt-0 pb-0  md:pt-5  overflow-hidden h-[85vh] bg-light">
    <div className="container lg:px-0 ">
      <div className="md:flex items-center justify-between gap-16 bg-red-00">

        <div className="hidden md:flex md:order-2 md:w-[660px]  md:h-[448px] relative items-center justify-center">
         <LogoTicker/>
        </div>

        {/* Text Content - Shows first on mobile and desktop */}
        <div className="md:order-1 md:w-1/2 md:max-w-[580px]">
          <div>
            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text mt-6"> Buy or Sell <br /> Rave & EDM Tickets</h1>
            
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Easy, secure, and hassle-free transactions powered by
                community-generated reviews and ratings..</p>
          </div>
          
          {/* Logo Ticker for mobile - appears after description - Full width */}
          <div className="md:hidden h-[350px] w-full my-6 relative flex items-center justify-center overflow-hidden">
            <LogoTicker/>
          </div>
          
          <div className="mt-7 flex items-center  justify- ">
            <button className="btn btn-primary ">Join the Party</button>
           
          </div>
        </div>
      </div>
    </div>
  </section>;
};
