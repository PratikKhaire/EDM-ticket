import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useCoverFlowAnimation() {
  const coverflowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [isRevealed, setIsRevealed] = useState(false);
  const cardPositions = useRef<number[]>([0, 1, 2, 3, 4]);

  // Position configurations for each slot (center is position 2)
  const positionConfigs = [
    { x: -400, z: -400, rotateY: 35, opacity: 0.4, scale: 0.7 },  // Far left
    { x: -180, z: -200, rotateY: 25, opacity: 0.7, scale: 0.85 }, // Near left
    { x: 0, z: 0, rotateY: 0, opacity: 1, scale: 1.1 },            // Center (popped)
    { x: 180, z: -200, rotateY: -25, opacity: 0.7, scale: 0.85 },  // Near right
    { x: 400, z: -400, rotateY: -35, opacity: 0.4, scale: 0.7 }    // Far right
  ];

  // Initialize cards - center visible, others hidden
  const initializeCards = () => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const img = card.querySelector('.coverflow-image') as HTMLElement;
      const reflection = card.querySelector('.card-reflection') as HTMLElement;

      if (index === 2) {
        // Center card - visible and sharp
        gsap.set(card, {
          x: 0,
          z: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1.1
        });
        if (img) img.style.setProperty('filter', 'blur(0px) brightness(1)', 'important');
        if (reflection) reflection.style.opacity = '0.3';
      } else {
        // Side cards - hidden initially
        const config = positionConfigs[index];
        gsap.set(card, {
          x: config.x,
          z: config.z,
          rotateY: config.rotateY,
          opacity: 0,
          scale: config.scale
        });
        if (img) img.style.setProperty('filter', 'blur(3px) brightness(0.85)', 'important');
        if (reflection) reflection.style.opacity = '0.15';
      }
    });
  };

  // Reveal all cards with stagger animation
  const revealAllCards = () => {
    if (isRevealed) return;

    cardsRef.current.forEach((card, index) => {
      if (!card || index === 2) return; // Skip center (already visible)

      const config = positionConfigs[index];
      gsap.to(card, {
        opacity: config.opacity,
        duration: 0.8,
        delay: index < 2 ? index * 0.15 : (index - 3) * 0.15,
        ease: 'power2.out'
      });
    });

    setIsRevealed(true);
    
    // Start auto-rotation after reveal completes
    setTimeout(() => {
      startAutoRotation();
    }, 1200); // Wait for reveal to finish
  };

  // Start continuous auto-rotation
  const startAutoRotation = () => {
    // Schedule first rotation
    gsap.delayedCall(2, rotateToNext);
  };

  // Rotate all cards to next position (clockwise)
  const rotateToNext = () => {
    // Shift positions clockwise
    const newPositions = cardPositions.current.map(pos => (pos + 1) % 5);
    cardPositions.current = newPositions;

    cardsRef.current.forEach((card, cardIndex) => {
      if (!card) return;

      const newPos = newPositions[cardIndex];
      const config = positionConfigs[newPos];
      const img = card.querySelector('.coverflow-image') as HTMLElement;
      const reflection = card.querySelector('.card-reflection') as HTMLElement;

      // Check if this card is moving to center
      const isMovingToCenter = newPos === 2;

      gsap.to(card, {
        x: config.x,
        z: config.z,
        rotateY: config.rotateY,
        opacity: config.opacity,
        scale: config.scale,
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => {
          if (isMovingToCenter && img) {
            // Sharpen image when moving to center
            img.style.setProperty('filter', 'blur(0px) brightness(1)', 'important');
          }
        },
        onComplete: () => {
          if (!isMovingToCenter && img) {
            // Blur non-center cards after animation
            img.style.setProperty('filter', 'blur(3px) brightness(0.85)', 'important');
          }
        }
      });

      // Update reflection opacity
      if (reflection) {
        gsap.to(reflection, {
          opacity: isMovingToCenter ? 0.3 : 0.15,
          duration: 1.5,
          ease: 'power2.inOut'
        });
      }

      // Update z-index for proper layering
      card.style.zIndex = isMovingToCenter ? '50' : '10';
    });

    // Schedule next rotation
    gsap.delayedCall(3.5, rotateToNext); // 1.5s animation + 2s delay
  };

  // Cleanup on unmount
  useEffect(() => {
    const cards = cardsRef.current;
    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  useGSAP(() => {
    if (!coverflowRef.current || cardsRef.current.length === 0) return;

    initializeCards();

    // Auto-start reveal after 1 second
    gsap.delayedCall(1, revealAllCards);
  }, { scope: coverflowRef });

  return {
    coverflowRef,
    containerRef,
    cardsRef,
    orbsRef,
    isRevealed
  };
}
