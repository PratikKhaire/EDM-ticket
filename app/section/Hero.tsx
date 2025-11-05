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

  return <section  ref={heroRef} className=" pt-4 pb-0  md:pt-5 md:pb-10  overflow-x-clip bg-light">
    <div className="container lg:px-0">
      <div className="md:flex items-center justify-between gap-16">

        <div className="hidden md:flex md:order-2 md:w-1/2 md:h-[648px] relative items-center justify-center">
         <LogoTicker/>
        </div>

        {/* Text Content - Shows first on mobile and desktop */}
        <div className="md:order-1 md:w-1/2 md:max-w-[580px]">
          <div>
            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"> Buy or Sell <br /> Rave & EDM Tickets</h1>
            
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Easy, secure, and hassle-free transactions powered by
                community-generated reviews and ratings..</p>
          </div>
          
          {/* Logo Ticker for mobile - appears after description - Full width */}
          <div className="md:hidden h-[350px] w-full my-6 relative flex items-center justify-center overflow-hidden">
            <LogoTicker/>
          </div>
          
          <div className="mt-7 flex gap-1 items-center">
            <button className="btn btn-primary">Join the Party</button>
           
          </div>
        </div>
      </div>
    </div>
  </section>;
};

      {/* Trending Events Section - Desktop Only */}
      {/* <div className="hidden md:block mt-20 md:mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Trending Events
          </h2>
          <p className="text-lg text-[#010D3E] mt-4">
            Check out the hottest events happening now
          </p>
        </div>
        
        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">EDM Festival 2025</h3>
              <p className="text-gray-600 mb-4">Miami Beach • Dec 15-17</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#660080]">$299</span>
                <button className="btn btn-primary text-sm">View Tickets</button>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Rave Paradise</h3>
              <p className="text-gray-600 mb-4">Las Vegas • Jan 20-22</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#660080]">$399</span>
                <button className="btn btn-primary text-sm">View Tickets</button>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-red-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Underground Beats</h3>
              <p className="text-gray-600 mb-4">NYC • Feb 5-6</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#660080]">$199</span>
                <button className="btn btn-primary text-sm">View Tickets</button>
              </div>
            </div>
          </div>
        </div>
     {/*} </div>*/}
