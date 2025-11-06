"use client"
import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".message-section",
          start: "2% top",
          end: `+=${scrollAmount + 100}px`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          markers: false,
          anticipatePin: 1,
        },
      });

      tl.to(".slider-wrapper", {
        x: `-${scrollAmount + 100}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none overflow-hidden ${flavor.rotation || ''}`}
          >
            <img
              // src={`/images/${flavor.color}-bg.svg`}
              src={`/images/Events/image_${flavor.num}.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-bottom z-0   rounded-3xl"
            />


            
            <h1 className="absolute md:bottom-10 md:left-10 bottom-5 left-5 text-[#F5F5DC] md:text-6xl text-3xl font-semibold uppercase tracking-tighter z-30">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;