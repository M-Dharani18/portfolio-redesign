// "use client";

// import Image from "next/image";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";
// import StarIcon from "@/assets/icons/star.svg";
// import bookImage from "@/assets/images/book-cover.png";   
// import mapImage from "@/assets/images/map.png";
// import smileEmoji from "@/assets/images/memoji-smile.png";
// import { CardHeader } from "@/components/CardHeader";
// import { ToolboxItems } from "@/components/ToolboxItems";
// import virat from "@/assets/images/vk-removebg-preview.png";
// import { useState, useEffect } from "react";

// const interests = [
//   {
//     title: "Tech & Innovation",
//     iconType: StarIcon,
//   },
//   {
//     title: "Travel & Culture",
//     iconType: StarIcon,
//   },
//   {
//     title: "Fitness & Wellness",
//     iconType: StarIcon,
//   },
//   {
//     title: "Music & Arts",
//     iconType: StarIcon,
//   },
// ];    

// const hobbies = [
//   {
//     title: "Coding & Hobbies",
//     emoji: '',
//     left: "5%",
//     top: "5%",
//   },
//   {
//     title: "Chess",
//     emoji: '',
//     left: "50%",
//     top: "5%",
//   },
//   {
//     title: "Cooking",
//     emoji: '',
//     left: "10%",
//     top: "35%",
//   },
//   {
//     title: "Photography",
//     emoji: '',
//     left: "35%",
//     top: "60%",
//   },
//   {
//     title: "Gaming",
//     emoji: '',
//     left: "70%",
//     top: "45%",
//   },
//   {
//     title: "Sports",
//     emoji: '',
//     left: "5%",
//     top: "65%",
//   }

// ];  

// export const AboutSection = () => {
//   const [ripple, setRipple] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setRipple((p) => p + 1), 2200);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//     <div className="py-20 lg:py-28">
//       <div className="container">
//       <SectionHeader
//         eyebrow="About Me"
//         title="A Glimpse Into My World"
//         description="Learn more about who I am, what I do,"
//       />

//       <div className="mt-20 flex flex-col gap-6">
//         <div className="md:grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
//         <Card className="h-[320px] md:col-span-2 lg:col-span-1">
//           <CardHeader title="My Inspiration" description="Virat Kohli is more than a cricketer — he's my idol and proof that discipline and self-belief can move mountains" />
//           <div className="w-80 mx-auto mt-2">
//           <Image src={virat} alt="Virat Kohli" width={300} height={400} />
//           </div>
//         </Card>
//         <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
//           <CardHeader title="My Interests" description="Discover what drives my passion and curiosity" className="px-6 pt-6"/>
//           <ToolboxItems interests={interests} className="mt-6"/>
//           <ToolboxItems interests={interests} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
//         </Card>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
//         <Card className="h-[260px] p-0 flex flex-col col-span-3 lg:col-span-2">
//           <CardHeader title="Beyond the Code" description="Explore my interests and hobbies outside of programming" className="px-6 py-4"/>
//             <div className="relative flex-1">
//               {hobbies.map(hobby => (
//                 <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute hover:scale-110 hover:shadow-[0_8px_30px_rgba(110,231,183,0.5)] active:scale-95 transition-all duration-300 cursor-grab hover:cursor-grabbing" style={{left: hobby.left, top:hobby.top,}}>
//                   <span className="text-base">{hobby.emoji}</span>
//                   <span className="font-medium text-gray-950">{hobby.title}</span>
//                 </div>
//               ))}
//             </div>

//         </Card>
//         <Card className="h-[260px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden group">
//               <Image src={mapImage} alt="Map" className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500 opacity-70 group-hover:opacity-90" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent" />
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div
//                   key={ripple}
//                   className="absolute inset-0 rounded-full bg-emerald-400/25"
//                   style={{ animation: "ripple 1.8s ease-out forwards" }}
//                 />
//                 <div
//                   key={ripple + 1000}
//                   className="absolute inset-0 rounded-full bg-emerald-400/15"
//                   style={{ animation: "ripple 1.8s ease-out 0.3s forwards" }}
//                 />
//               <Image src={smileEmoji} alt="Smile Emoji" width={56} height={56} className="relative z-10 drop-shadow-xl" />
//               </div>
//         </Card>
//         </div>
//         </div>
      
//     </div>
//     </div>
    
//     <style jsx>{`
//       @keyframes ripple {
//         0%   { transform: scale(1); opacity: 0.6; }
//         100% { transform: scale(4); opacity: 0;   }
//       }
//     `}</style>
//     </>
//   );
// };

// "use client";

// import Image from "next/image";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";
// import StarIcon from "@/assets/icons/star.svg";
// import bookImage from "@/assets/images/book-cover.png";
// import mapImage from "@/assets/images/salem_map.png";
// import smileEmoji from "@/assets/images/memoji-smile.png";
// import { CardHeader } from "@/components/CardHeader";
// import { ToolboxItems } from "@/components/ToolboxItems";
// import virat from "@/assets/images/vk-removebg-preview.png";
// import { useState, useEffect, useRef } from "react";
// import { GitHubHeatmap } from "@/components/GitHubHeatmap";

// const interests = [
//   { title: "Tech & Innovation",  iconType: StarIcon },
//   { title: "Travel & Culture",   iconType: StarIcon },
//   { title: "Fitness & Wellness", iconType: StarIcon },
//   { title: "Music & Arts",       iconType: StarIcon },
// ];

// const hobbies = [
//   { title: "Design",  emoji: "💻", left: "5%",  top: "10%" },

//   { title: "Chess",   emoji: "♟️", left: "30%", top: "18%" },

//   { title: "Music",   emoji: "🎵", left: "28%", top: "60%" },

//   { title: "Yoga",    emoji: "🧘", left: "58%", top: "10%" },

//   { title: "Puzzles", emoji: "🧩", left: "6%",  top: "48%" },

//   { title: "Gaming",  emoji: "🎮", left: "73%", top: "52%" },

//   { title: "Cricket", emoji: "🏏", left: "49%", top: "48%" },

//   { title: "Cinema",  emoji: "🎬", left: "79%", top: "12%" },
// ];

// /* ── Draggable Pill ── */
// function DraggablePill({
//   hobby,
//   containerRef,
// }: {
//   hobby: { title: string; emoji: string; left: string; top: string };
//   containerRef: React.RefObject<HTMLDivElement>;
// }) {
//   const pillRef = useRef<HTMLDivElement>(null);
//   const [pos, setPos]       = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
//   const [dragging, setDrag] = useState(false);
//   const offset = useRef({ x: 0, y: 0 });

//   // Convert % initial positions to px once container mounts
//   useEffect(() => {
//     const container = containerRef.current;
//     const pill      = pillRef.current;
//     if (!container || !pill) return;
//     const cr = container.getBoundingClientRect();
//     setPos({
//       x: (parseFloat(hobby.left) / 100) * cr.width,
//       y: (parseFloat(hobby.top)  / 100) * cr.height,
//     });
//   }, [hobby.left, hobby.top, containerRef]);

//   const startDrag = (clientX: number, clientY: number) => {
//     if (pos.x === null) return;
//     setDrag(true);
//     offset.current = { x: clientX - pos.x, y: clientY - pos.y };
//   };

//   useEffect(() => {
//     if (!dragging) return;
//     const container = containerRef.current;
//     const pill      = pillRef.current;
//     if (!container || !pill) return;

//     const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

//     const move = (cx: number, cy: number) => {
//       const cr = container.getBoundingClientRect();
//       const pr = pill.getBoundingClientRect();
//       setPos({
//         x: clamp(cx - offset.current.x, 0, cr.width  - pr.width),
//         y: clamp(cy - offset.current.y, 0, cr.height - pr.height),
//       });
//     };

//     const onMM = (e: MouseEvent) => move(e.clientX, e.clientY);
//     const onTM = (e: TouchEvent) => move(e.touches[0].clientX, e.touches[0].clientY);
//     const stop = () => setDrag(false);

//     window.addEventListener("mousemove", onMM);
//     window.addEventListener("mouseup",   stop);
//     window.addEventListener("touchmove", onTM, { passive: true });
//     window.addEventListener("touchend",  stop);
//     return () => {
//       window.removeEventListener("mousemove", onMM);
//       window.removeEventListener("mouseup",   stop);
//       window.removeEventListener("touchmove", onTM);
//       window.removeEventListener("touchend",  stop);
//     };
//   }, [dragging, containerRef]);

//   return (
//     <div
//       ref={pillRef}
//       onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
//       onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
//       className={`inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute ${
//         dragging
//           ? "cursor-grabbing shadow-[0_8px_30px_rgba(110,231,183,0.55)] scale-110 z-20"
//           : "cursor-grab hover:scale-110 hover:shadow-[0_8px_30px_rgba(110,231,183,0.5)] z-10"
//       }`}
//       style={{
//         left: pos.x ?? hobby.left,
//         top:  pos.y ?? hobby.top,
//         transition: dragging ? "none" : "transform 0.2s, box-shadow 0.2s",
//         userSelect: "none",
//       }}
//     >
//       <span className="text-base">{hobby.emoji}</span>
//       <span className="font-medium text-gray-950">{hobby.title}</span>
//     </div>
//   );
// }

// /* ── Main Section ── */
// export const AboutSection = () => {
//   const [ripple, setRipple]   = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null!);

//   useEffect(() => {
//     const t = setInterval(() => setRipple((p) => p + 1), 2200);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <div className="py-20 lg:py-28">
//         <div className="container">
//           <SectionHeader
//             eyebrow="About Me"
//             title="A Glimpse Into My World"
//             description="Learn more about who I am, what I do,"
//           />

//           <div className="mt-20 flex flex-col gap-6">
//             {/* ROW 1 — unchanged */}
//             <div className="md:grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
//               <Card className="h-[320px] md:col-span-2 lg:col-span-1">
//                 <CardHeader
//                   title="My Inspiration"
//                   description="Virat Kohli is more than a cricketer — he's my idol and proof that discipline and self-belief can move mountains"
//                 />
//                 <div className="w-80 mx-auto mt-2">
//                   <Image src={virat} alt="Virat Kohli" width={300} height={400} />
//                 </div>
//               </Card>
//               <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
//                 <CardHeader title="My Interests" description="Discover what drives my passion and curiosity" className="px-6 pt-6" />
//                 <ToolboxItems interests={interests} className="mt-6" />
//                 <ToolboxItems interests={interests} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
//               </Card>
//             </div>

//             {/* ROW 2 — draggable hobbies added */}
//             <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
//               <Card className="h-[260px] p-0 flex flex-col col-span-3 lg:col-span-2 overflow-hidden">
//                 <CardHeader
//                   title="Beyond the Code"
//                   description="Explore my interests and hobbies outside of programming"
//                   className="px-6 pt-8 pb-4"
//                 />
//                 <div className="relative flex-1" ref={containerRef}>
//                   <p className="absolute bottom-2 right-5 text-cyan-200/70 text-xs md:text-sm z-20 select-none pointer-events-none tracking-wide">
//                      Drag the hobbies to play
//                   </p>
//                   {hobbies.map((hobby) => (
//                     <DraggablePill
//                       key={hobby.title}
//                       hobby={hobby}
//                       containerRef={containerRef}
//                     />
//                   ))}
//                 </div>
//               </Card>

//               {/* Map — unchanged */}
//               <Card className="h-[260px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden group">
//                 <Image
//                   src={mapImage}
//                   alt="Map"
//                   className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500 opacity-70 group-hover:opacity-90"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent" />
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                   <div
//                     key={ripple}
//                     className="absolute inset-0 rounded-full bg-emerald-400/25"
//                     style={{ animation: "ripple 1.8s ease-out forwards" }}
//                   />
//                   <div
//                     key={ripple + 1000}
//                     className="absolute inset-0 rounded-full bg-emerald-400/15"
//                     style={{ animation: "ripple 1.8s ease-out 0.3s forwards" }}
//                   />
//                   <Image src={smileEmoji} alt="Smile Emoji" width={56} height={56} className="relative z-10 drop-shadow-xl" />
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes ripple {
//           0%   { transform: scale(1); opacity: 0.6; }
//           100% { transform: scale(4); opacity: 0;   }
//         }
//       `}</style>
//     </>
//   );
// };


"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import mapImage from "@/assets/images/salem_map.png";
import smileEmoji from "@/assets/images/memoji-women.png";
import { CardHeader } from "@/components/CardHeader";
import virat from "@/assets/images/vk2.png";
import { useState, useEffect, useRef } from "react";
import { GitHubHeatmap } from "@/components/GitHubHeatmap";// ← adjust path as needed

const hobbies = [
  { title: "Design",  emoji: "💻", left: "5%",  top: "10%" },
  { title: "Chess",   emoji: "♟️", left: "30%", top: "18%" },
  { title: "Music",   emoji: "🎵", left: "28%", top: "60%" },
  { title: "Yoga",    emoji: "🧘", left: "58%", top: "10%" },
  { title: "Puzzles", emoji: "🧩", left: "6%",  top: "48%" },
  { title: "Gaming",  emoji: "🎮", left: "70%", top: "52%" },
  { title: "Cricket", emoji: "🏏", left: "49%", top: "48%" },
  { title: "Cinema",  emoji: "🎬", left: "79%", top: "12%" },
];

/* ── Draggable Pill ── */
function DraggablePill({
  hobby,
  containerRef,
}: {
  hobby: { title: string; emoji: string; left: string; top: string };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [pos, setPos]       = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [dragging, setDrag] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const pill      = pillRef.current;
    if (!container || !pill) return;
    const cr = container.getBoundingClientRect();
    setPos({
      x: (parseFloat(hobby.left) / 100) * cr.width,
      y: (parseFloat(hobby.top)  / 100) * cr.height,
    });
  }, [hobby.left, hobby.top, containerRef]);

  const startDrag = (clientX: number, clientY: number) => {
    if (pos.x === null) return;
    setDrag(true);
    offset.current = { x: clientX - pos.x, y: clientY - pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const container = containerRef.current;
    const pill      = pillRef.current;
    if (!container || !pill) return;

    const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

    const move = (cx: number, cy: number) => {
      const cr = container.getBoundingClientRect();
      const pr = pill.getBoundingClientRect();
      setPos({
        x: clamp(cx - offset.current.x, 0, cr.width  - pr.width),
        y: clamp(cy - offset.current.y, 0, cr.height - pr.height),
      });
    };

    const onMM = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTM = (e: TouchEvent) => move(e.touches[0].clientX, e.touches[0].clientY);
    const stop = () => setDrag(false);

    window.addEventListener("mousemove", onMM);
    window.addEventListener("mouseup",   stop);
    window.addEventListener("touchmove", onTM, { passive: true });
    window.addEventListener("touchend",  stop);
    return () => {
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("mouseup",   stop);
      window.removeEventListener("touchmove", onTM);
      window.removeEventListener("touchend",  stop);
    };
  }, [dragging, containerRef]);

  return (
    <div
      ref={pillRef}
      onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
      onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
      className={`inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute ${
        dragging
          ? "cursor-grabbing shadow-[0_8px_30px_rgba(110,231,183,0.55)] scale-110 z-20"
          : "cursor-grab hover:scale-110 hover:shadow-[0_8px_30px_rgba(110,231,183,0.5)] z-10"
      }`}
      style={{
        left: pos.x ?? hobby.left,
        top:  pos.y ?? hobby.top,
        transition: dragging ? "none" : "transform 0.2s, box-shadow 0.2s",
        userSelect: "none",
      }}
    >
      <span className="text-base">{hobby.emoji}</span>
      <span className="font-medium text-gray-950">{hobby.title}</span>
    </div>
  );
}
/* ── Main Section ── */
export const AboutSection = () => {
  const [ripple, setRipple] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const t = setInterval(() => setRipple((p) => p + 1), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="py-16 lg:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do,"
          />

          <div className="mt-12 flex flex-col gap-4">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-3">

              {/* Inspiration card */}
              <Card className="group md:col-span-2 lg:col-span-1 overflow-hidden p-0 min-h-[200px] border border-white/10 hover:border-emerald-300/50 hover:shadow-[0_0_35px_rgba(110,231,183,0.18)] transition-all duration-300">
                <div className="flex h-full min-h-[200px]">
                  {/* Image on the left */}
                  <div className="relative w-36 shrink-0 self-stretch">
                    <Image
                      src={virat}
                      alt="Virat Kohli"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Text on the right */}
                  <div className="flex flex-col justify-center px-5 py-5 gap-2">
                    <div className="flex items-center gap-2">
                      
                      <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                        My Inspiration
                      </span>
                    </div>
                    <p className="text-white font-semibold text-base leading-snug">
                      Virat Kohli
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Virat Kohli is more than a cricketer — he's my idol and proof that discipline and self-belief can move mountains.
                    </p>
                  </div>
                </div>
              </Card>

              {/* GitHub Heatmap */}
              <Card className="group h-[200px] p-0 flex flex-col md:col-span-3 lg:col-span-2 overflow-hidden border border-white/10 hover:border-emerald-300/50 hover:shadow-[0_0_35px_rgba(110,231,183,0.18)] transition-all duration-300">
                <GitHubHeatmap username="M-Dharani18" />
              </Card>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4">
            <Card className="group h-[220px] p-0 flex flex-col col-span-3 lg:col-span-2 overflow-hidden border border-white/10 hover:border-emerald-300/50 hover:shadow-[0_0_35px_rgba(110,231,183,0.18)] transition-all duration-300">
            {/* Header — matching Inspiration card style */}
            <div className="flex flex-col px-6 pt-6 pb-3 gap-1.5">
              <div className="flex items-center gap-2">
                <StarIcon className="size-4 text-emerald-300 shrink-0" />
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                  Beyond the Code
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Explore my interests and hobbies outside of programming
              </p>
            </div>

            <div className="relative flex-1" ref={containerRef}>
              <p className="absolute bottom-2 right-5 text-cyan-200/70 text-xs z-20 select-none pointer-events-none tracking-wide">
                Drag to play
              </p>
              {hobbies.map((hobby) => (
                <DraggablePill
                  key={hobby.title}
                  hobby={hobby}
                  containerRef={containerRef}
                />
              ))}
            </div>
          </Card>

              {/* Map */}
              <Card className="h-[220px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden group">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    key={ripple}
                    className="absolute inset-0 rounded-full bg-emerald-400/25"
                    style={{ animation: "ripple 1.8s ease-out forwards" }}
                  />
                  <div
                    key={ripple + 1000}
                    className="absolute inset-0 rounded-full bg-emerald-400/15"
                    style={{ animation: "ripple 1.8s ease-out 0.3s forwards" }}
                  />
                  <Image src={smileEmoji} alt="Smile Emoji" width={56} height={56} className="relative z-10 drop-shadow-xl" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0;   }
        }
      `}</style>
    </>
  );
};