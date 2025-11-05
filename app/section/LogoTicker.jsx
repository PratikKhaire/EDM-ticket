"use client"
import acme from "@/assets/logo-acme.png";
import Image from "next/image";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import pulse from "@/assets/logo-echo.png";
import { motion } from "framer-motion";


export const LogoTicker = () => {
  return <div className="w-full h-full flex overflow-hidden">
    <motion.div 
      className="flex flex-none" 
      animate={{ x: "-100%" }} 
      transition={{ duration: 55, repeat: Infinity, ease: "linear", repeatType: "loop" }}
    >
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={acme} alt="acme" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={celestial} alt="celestial" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={echo} alt="echo" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={pulse} alt="pulse" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={quantum} alt="quantum" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={apex} alt="apex" className="logo-ticker-image" />
      </div>

      <div className="w-[648px] h-[448px] flex items-center justify-center flex-shrink-0">
        <Image src={acme} alt="acme" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={celestial} alt="celestial" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={echo} alt="echo" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={pulse} alt="pulse" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={quantum} alt="quantum" className="logo-ticker-image" />
      </div>
      <div className="w-[648px] h-[648px] flex items-center justify-center flex-shrink-0">
        <Image src={apex} alt="apex" className="logo-ticker-image" />
      </div>
    </motion.div>
  </div>;
};
