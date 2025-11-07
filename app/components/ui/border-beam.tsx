"use client";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  className?: string;
}

export const BorderBeam = ({
  duration = 3,
  colorFrom = "#fbbf24",
  colorTo = "#f59e0b",
}: BorderBeamProps) => {
  return (
    <span 
      className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
      style={{
        background: `conic-gradient(from var(--border-angle, 0turn), transparent 70%, ${colorFrom} 80%, ${colorTo} 85%, ${colorFrom} 90%, transparent 100%)`,
        animation: `border-spin ${duration}s linear infinite`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        padding: '2px',
      }}
      aria-hidden="true"
    />
  );
};

// Add this to your tailwind.config
// keyframes: {
//   "border-beam": {
//     "100%": {
//       "offset-distance": "100%",
//     },
//   },
// },
