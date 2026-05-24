// 'use client';

// import { useEffect, useRef, useState } from "react";

// export const CustomCursor = () => {
//   const ringRef = useRef<HTMLDivElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   const trailsRef = useRef<HTMLDivElement[]>([]);

//   const mouse = useRef({ x: 0, y: 0 });
//   const ringPos = useRef({ x: 0, y: 0 });
//   const trailPositions = useRef<{ x: number; y: number }[]>(
//     Array(6).fill({ x: 0, y: 0 })
//   );

//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);
//   const rafRef = useRef<number>();

//   useEffect(() => {
//     // Hide default cursor
//     document.body.style.cursor = "none";

//     const onMove = (e: MouseEvent) => {
//       mouse.current = { x: e.clientX, y: e.clientY };

//       // Instantly snap dot to cursor
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//       }
//     };

//     const onDown = () => setIsClicking(true);
//     const onUp = () => setIsClicking(false);

//     const onEnterInteractive = () => setIsHovering(true);
//     const onLeaveInteractive = () => setIsHovering(false);

//     // Attach hover detection to all interactive elements
//     const attachHover = () => {
//       const els = document.querySelectorAll(
//         "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
//       );
//       els.forEach((el) => {
//         el.addEventListener("mouseenter", onEnterInteractive);
//         el.addEventListener("mouseleave", onLeaveInteractive);
//       });
//     };

//     attachHover();

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mousedown", onDown);
//     window.addEventListener("mouseup", onUp);

//     // Animation loop — ring lags behind with lerp, trails cascade
//     const animate = () => {
//       // Lerp ring toward cursor (magnetic lag)
//       const lerpFactor = isHovering ? 0.1 : 0.15;
//       ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerpFactor;
//       ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerpFactor;

//       if (ringRef.current) {
//         ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
//       }

//       // Cascade trail — each follows the one before it
//       trailPositions.current = trailPositions.current.map((pos, i) => {
//         const target = i === 0 ? mouse.current : trailPositions.current[i - 1];
//         return {
//           x: pos.x + (target.x - pos.x) * (0.28 - i * 0.03),
//           y: pos.y + (target.y - pos.y) * (0.28 - i * 0.03),
//         };
//       });

//       trailsRef.current.forEach((el, i) => {
//         if (el) {
//           el.style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px)`;
//         }
//       });

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       document.body.style.cursor = "auto";
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mousedown", onDown);
//       window.removeEventListener("mouseup", onUp);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   const TRAIL_COUNT = 6;

//   return (
//     <>
//       {/* Trail dots — cascade behind cursor */}
//       {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => { if (el) trailsRef.current[i] = el; }}
//           className="fixed top-0 left-0 pointer-events-none"
//           style={{
//             zIndex: 99998,
//             width: `${6 - i * 0.7}px`,
//             height: `${6 - i * 0.7}px`,
//             borderRadius: "50%",
//             backgroundColor: "#2dd4bf",
//             opacity: (1 - i / TRAIL_COUNT) * 0.55,
//             marginLeft: `${-(6 - i * 0.7) / 2}px`,
//             marginTop: `${-(6 - i * 0.7) / 2}px`,
//             willChange: "transform",
//           }}
//         />
//       ))}

//       {/* Center dot — snaps instantly */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 pointer-events-none"
//         style={{
//           zIndex: 99999,
//           width: "6px",
//           height: "6px",
//           borderRadius: "50%",
//           backgroundColor: "#2dd4bf",
//           marginLeft: "-3px",
//           marginTop: "-3px",
//           willChange: "transform",
//           transition: isClicking ? "transform 0.05s" : "none",
//         }}
//       />

//       {/* Magnetic ring — lags behind */}
//       <div
//         ref={ringRef}
//         className="fixed top-0 left-0 pointer-events-none"
//         style={{
//           zIndex: 99997,
//           width: isHovering ? "44px" : isClicking ? "28px" : "36px",
//           height: isHovering ? "44px" : isClicking ? "28px" : "36px",
//           borderRadius: "50%",
//           border: `1.5px solid ${isHovering ? "#2dd4bf" : "rgba(45,212,191,0.5)"}`,
//           marginLeft: isHovering ? "-22px" : isClicking ? "-14px" : "-18px",
//           marginTop: isHovering ? "-22px" : isClicking ? "-14px" : "-18px",
//           willChange: "transform",
//           transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s ease, margin 0.25s ease, opacity 0.2s ease",
//           // Rotating dashed arc on hover
//           boxShadow: isHovering ? "0 0 12px rgba(45,212,191,0.25)" : "none",
//         }}
//       >
//         {/* Rotating accent arc inside ring */}
//         <div
//           style={{
//             position: "absolute",
//             inset: "-1px",
//             borderRadius: "50%",
//             border: "1.5px solid transparent",
//             borderTopColor: "#2dd4bf",
//             borderRightColor: isHovering ? "#2dd4bf" : "transparent",
//             opacity: isHovering ? 1 : 0.6,
//             animation: "spin 1.2s linear infinite",
//           }}
//         />
//       </div>

//       <style>{`
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         * { cursor: none !important; }
//       `}</style>
//     </>
//   );
// };




'use client';

import { useEffect, useRef } from "react";

const STAR_COUNT = 18;
const CONNECTION_RADIUS = 100;
const TEAL = '#2dd4bf';

export const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Fixed stars scattered across the viewport
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      baseSize: 1.2 + Math.random() * 1.2,
      twinkle: Math.random() * Math.PI * 2, // phase offset
    }));

    const ctx = canvas.getContext('2d')!;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    document.body.style.cursor = 'none';

    let tick = 0;

    const draw = () => {
      tick += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouse.current;
      const hasPos = mx > 0;

      // Draw stars
      stars.forEach(star => {
        const dist = hasPos ? Math.hypot(star.x - mx, star.y - my) : 999;
        const proximity = Math.max(0, 1 - dist / CONNECTION_RADIUS);
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(tick + star.twinkle));
        const alpha = 0.15 + proximity * 0.85;
        const size = star.baseSize + proximity * 2;

        // Glow for nearby stars
        if (proximity > 0.1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(45,212,191,${proximity * 0.12})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, size * twinkle, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,191,${alpha * twinkle})`;
        ctx.fill();
      });

      if (!hasPos) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      // Draw constellation lines: star-to-star within radius of cursor
      const nearbyStars = stars.filter(s => Math.hypot(s.x - mx, s.y - my) < CONNECTION_RADIUS);

      nearbyStars.forEach((a, ai) => {
        // Line from cursor to each nearby star
        const distA = Math.hypot(a.x - mx, a.y - my);
        const alphaA = Math.max(0, 1 - distA / CONNECTION_RADIUS);
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(a.x, a.y);
        ctx.strokeStyle = `rgba(45,212,191,${alphaA * 0.35})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Line between nearby stars that are close to each other
        nearbyStars.forEach((b, bi) => {
          if (bi <= ai) return;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 90) {
            const alpha = (alphaA * Math.max(0, 1 - Math.hypot(b.x - mx, b.y - my) / CONNECTION_RADIUS)) * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(45,212,191,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Cursor dot — outer ring
      ctx.beginPath();
      ctx.arc(mx, my, 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(45,212,191,0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Cursor dot — inner
      ctx.beginPath();
      ctx.arc(mx, my, 4, 0, Math.PI * 2);
      ctx.fillStyle = TEAL;
      ctx.fill();

      // Cursor dot — center pinpoint
      ctx.beginPath();
      ctx.arc(mx, my, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
};