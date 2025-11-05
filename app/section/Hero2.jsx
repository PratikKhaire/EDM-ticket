"use client"


import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { easeInOut, motion , useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoTicker } from "./LogoTicker";

export const Hero2 = () => {

  const heroRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1],[150 ,-150])

  return <section  ref={heroRef} className=" pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
    <div className="container lg:px-0">
      <div className="md:flex items-center justify-center gap-16">
        <div className="md:[w-478px]">
          <div>
            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"> Buy or Sell <br /> Rave & EDM Tickets</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Easy, secure, and hassle-free transactions powered by
                community-generated reviews and ratings..</p>
          </div>
          <div className="mt-7 flex gap-1 items-center">
            <button className="btn btn-primary">Join the Party</button>
           
          </div>
        </div>

        <div className="pt-12 md:mt-0 md:h-[648px] md:w-[648px] lg:h-[600px] relative">
         <LogoTicker/>
        </div>
      </div>
    </div>
  </section>;
};
