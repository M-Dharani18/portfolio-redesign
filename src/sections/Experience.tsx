// // "use client";
// // import { useState } from "react";
// // import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// // const items = [
// //   {
// //     tag: "Internship",
// //     org: "Infosys Springboard",
// //     role: "Java Intern",
// //     period: "Nov 2025 – Jan 2026",
// //     icon: "🏢",
// //     accent: "#38bdf8",
// //     accentBg: "rgba(56,189,248,0.07)",
// //     accentBorder: "rgba(56,189,248,0.2)",
// //     points: [
// //       "Built backend application using Java and Spring Boot fundamentals",
// //       "Worked with MySQL databases for data storage and retrieval",
// //       "Focused on application workflows, backend logic, and debugging techniques",
// //     ],
// //   },
// //   {
// //     tag: "Role",
// //     org: "Dept. of CS and Design",
// //     role: "Placement Coordinator",
// //     period: "2025 – Present",
// //     icon: "🎯",
// //     accent: "#6ee7b7",
// //     accentBg: "rgba(110,231,183,0.07)",
// //     accentBorder: "rgba(110,231,183,0.2)",
// //     points: [
// //       "Supporting campus hiring activities and placement initiatives",
// //       "Facilitating communication between placement cell and department",
// //     ],
// //   },
// //   {
// //     tag: "Role",
// //     org: "CSD Coding Club",
// //     role: "Executive Member",
// //     period: "2025 – Present",
// //     icon: "💻",
// //     accent: "#6ee7b7",
// //     accentBg: "rgba(110,231,183,0.07)",
// //     accentBorder: "rgba(110,231,183,0.2)",
// //     points: [
// //       "Organizing engaging technical events and coding sessions",
// //       "Encouraged collaborative learning and innovation",
// //     ],
// //   },
// // ];

// // const REST = [
// //   { x: -200, rotate: -8, scale: 0.92, opacity: 0.45, z: 1 },
// //   { x: 0,    rotate: 0,  scale: 1,    opacity: 1,    z: 3 },
// //   { x: 200,  rotate: 8,  scale: 0.92, opacity: 0.45, z: 1 },
// // ];

// // const EXPANDED = [
// //   { x: -320, rotate: -2, scale: 0.97, opacity: 1, z: 2 },
// //   { x: 0,    rotate: 0,  scale: 1,    opacity: 1, z: 3 },
// //   { x: 320,  rotate: 2,  scale: 0.97, opacity: 1, z: 2 },
// // ];

// // export const ExperienceSection = () => {
// //   const [hovered, setHovered] = useState(false);
// //   const [focused, setFocused] = useState<number | null>(null);

// //   const getStyle = (idx: number) => {
// //     if (focused !== null) {
// //       if (focused === idx) return { x: 0, rotate: 0, scale: 1.02, opacity: 1, z: 10 };
// //       const offset = idx < focused ? -340 : 340;
// //       return { x: offset, rotate: idx < focused ? -3 : 3, scale: 0.9, opacity: 0.3, z: 1 };
// //     }
// //     return hovered ? EXPANDED[idx] : REST[idx];
// //   };

// //   return (
// //     <section id="experience" className="py-16 lg:py-20">
// //       <div className="container max-w-5xl mx-auto px-4">
// //         <AnimateOnScroll>
// //           <div className="flex flex-col items-center mb-16">
// //             <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
// //               Professional Journey
// //             </p>
// //             <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
// //               Roles &amp; Experiences
// //             </h2>
// //             <p className="text-white/30 text-sm mt-3">hover to expand · click a card to focus</p>
// //           </div>
// //         </AnimateOnScroll>

// //         <AnimateOnScroll delay={120}>
// //           <div
// //             className="relative flex items-center justify-center"
// //             style={{ height: 420 }}
// //             onMouseEnter={() => setHovered(true)}
// //             onMouseLeave={() => { setHovered(false); setFocused(null); }}
// //           >
// //             {items.map((item, idx) => {
// //               const s = getStyle(idx);
// //               return (
// //                 <div
// //                   key={item.role}
// //                   onClick={() => setFocused(focused === idx ? null : idx)}
// //                   className="absolute cursor-pointer select-none"
// //                   style={{
// //                     width: 300,
// //                     transform: `translateX(${s.x}px) rotate(${s.rotate}deg) scale(${s.scale})`,
// //                     opacity: s.opacity,
// //                     zIndex: s.z,
// //                     transition: "transform 0.55s cubic-bezier(0.34,1.3,0.64,1), opacity 0.4s ease",
// //                   }}
// //                 >
// //                   <div
// //                     className="rounded-2xl overflow-hidden"
// //                     style={{
// //                       background: "rgba(13,17,23,0.95)",
// //                       border: `1px solid ${focused === idx ? item.accentBorder : "rgba(255,255,255,0.09)"}`,
// //                       boxShadow: focused === idx
// //                         ? `0 0 40px ${item.accent}20, 0 20px 60px rgba(0,0,0,0.5)`
// //                         : "0 8px 32px rgba(0,0,0,0.4)",
// //                       transition: "border-color 0.4s, box-shadow 0.4s",
// //                     }}
// //                   >
// //                     <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${item.accent}${focused === idx ? "cc" : "55"}, transparent)`, transition: "opacity 0.4s" }} />
// //                     <div style={{ padding: "22px 24px 26px" }}>
// //                       <div className="flex items-center justify-between mb-5">
// //                         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
// //                           style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}`, color: item.accent }}>
// //                           {item.tag}
// //                         </span>
// //                         <span className="text-xl w-9 h-9 rounded-xl flex items-center justify-center"
// //                           style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}` }}>
// //                           {item.icon}
// //                         </span>
// //                       </div>
// //                       <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: item.accent, opacity: 0.65 }}>{item.org}</p>
// //                       <h3 className="font-['Clash Display'] text-xl text-white mb-3 leading-snug">{item.role}</h3>
// //                       <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg mb-5"
// //                         style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
// //                         <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
// //                         <span className="text-[11px] text-white/40">{item.period}</span>
// //                       </div>
// //                       <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
// //                       <ul className="flex flex-col gap-2.5">
// //                         {item.points.map((pt) => (
// //                           <li key={pt} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
// //                             <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.accent, opacity: 0.65 }} />
// //                             {pt}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           <div className="flex justify-center gap-2 mt-4">
// //             {items.map((item, i) => (
// //               <button key={i} onClick={() => setFocused(focused === i ? null : i)}
// //                 className="rounded-full transition-all duration-300"
// //                 style={{
// //                   width: focused === i ? 24 : hovered && focused === null ? 10 : 6,
// //                   height: 6,
// //                   background: focused === i
// //                     ? `linear-gradient(90deg, ${item.accent}, #38bdf8)`
// //                     : i === 1 && !hovered && focused === null
// //                     ? "linear-gradient(90deg, #6ee7b7, #38bdf8)"
// //                     : "rgba(255,255,255,0.15)",
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </AnimateOnScroll>
// //       </div>
// //     </section>
// //   );
// // };



// "use client";
// import { useState } from "react";
// import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// const items = [
//   {
//     tag: "Internship",
//     org: "Infosys Springboard",
//     role: "Java Intern",
//     period: "Nov 2025 – Jan 2026",
//     icon: "🏢",
//     accent: "#38bdf8",
//     accentBg: "rgba(56,189,248,0.07)",
//     accentBorder: "rgba(56,189,248,0.2)",
//     points: [
//       "Built backend application using Java and Spring Boot fundamentals",
//       "Worked with MySQL databases for data storage and retrieval",
//       "Focused on application workflows, backend logic, and debugging techniques",
//     ],
//   },
//   {
//     tag: "Role",
//     org: "Dept. of CS and Design",
//     role: "Placement Coordinator",
//     period: "2025 – Present",
//     icon: "🎯",
//     accent: "#6ee7b7",
//     accentBg: "rgba(110,231,183,0.07)",
//     accentBorder: "rgba(110,231,183,0.2)",
//     points: [
//       "Supporting campus hiring activities and placement initiatives",
//       "Facilitating communication between placement cell and department",
//     ],
//   },
//   {
//     tag: "Role",
//     org: "CSD Coding Club",
//     role: "Executive Member",
//     period: "2025 – Present",
//     icon: "💻",
//     accent: "#6ee7b7",
//     accentBg: "rgba(110,231,183,0.07)",
//     accentBorder: "rgba(110,231,183,0.2)",
//     points: [
//       "Organizing engaging technical events and coding sessions",
//       "Encouraging collaborative learning and innovation",
//     ],
//   },
// ];

// const REST = [
//   { x: -200, rotate: -8, scale: 0.92, opacity: 0.45, z: 1 },
//   { x: 0,    rotate: 0,  scale: 1,    opacity: 1,    z: 3 },
//   { x: 200,  rotate: 8,  scale: 0.92, opacity: 0.45, z: 1 },
// ];
// const EXPANDED = [
//   { x: -320, rotate: -2, scale: 0.97, opacity: 1, z: 2 },
//   { x: 0,    rotate: 0,  scale: 1,    opacity: 1, z: 3 },
//   { x: 320,  rotate: 2,  scale: 0.97, opacity: 1, z: 2 },
// ];

// export const ExperienceSection = () => {
//   const [hovered, setHovered] = useState(false);
//   const [focused, setFocused] = useState<number | null>(null);
//   const [mobileActive, setMobileActive] = useState(0);

//   const getStyle = (idx: number) => {
//     if (focused !== null) {
//       if (focused === idx) return { x: 0, rotate: 0, scale: 1.02, opacity: 1, z: 10 };
//       const offset = idx < focused ? -340 : 340;
//       return { x: offset, rotate: idx < focused ? -3 : 3, scale: 0.9, opacity: 0.3, z: 1 };
//     }
//     return hovered ? EXPANDED[idx] : REST[idx];
//   };

//   const item = items[mobileActive];

//   return (
//     <section id="experience" className="py-16 lg:py-20">
//       <div className="container max-w-5xl mx-auto px-4">
//         <AnimateOnScroll>
//           <div className="flex flex-col items-center mb-16">
//             <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
//               Professional Journey
//             </p>
//             <h2 className="text-4xl md:text-5xl text-white text-center">
//               Roles &amp; Experiences
//             </h2>
//             <p className="text-white/30 text-sm mt-3 hidden md:block">
//               hover to expand · click a card to focus
//             </p>
//             <p className="text-white/30 text-sm mt-3 md:hidden">
//               tap the dots to switch
//             </p>
//           </div>
//         </AnimateOnScroll>

//         <AnimateOnScroll delay={120}>
//           {/* ── Desktop fan layout ── */}
//           <div
//             className="relative-flex items-center justify-center hidden md:flex"
//             style={{ height: 420 }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => { setHovered(false); setFocused(null); }}
//           >
//             {items.map((item, idx) => {
//               const s = getStyle(idx);
//               return (
//                 <div
//                   key={item.role}
//                   onClick={() => setFocused(focused === idx ? null : idx)}
//                   className="absolute cursor-pointer select-none"
//                   style={{
//                     width: 300,
//                     transform: `translateX(${s.x}px) rotate(${s.rotate}deg) scale(${s.scale})`,
//                     opacity: s.opacity,
//                     zIndex: s.z,
//                     transition: "transform 0.55s cubic-bezier(0.34,1.3,0.64,1), opacity 0.4s ease",
//                   }}
//                 >
//                   <div className="rounded-2xl overflow-hidden"
//                     style={{
//                       background: "rgba(13,17,23,0.95)",
//                       border: `1px solid ${focused === idx ? item.accentBorder : "rgba(255,255,255,0.09)"}`,
//                       boxShadow: focused === idx ? `0 0 40px ${item.accent}20, 0 20px 60px rgba(0,0,0,0.5)` : "0 8px 32px rgba(0,0,0,0.4)",
//                       transition: "border-color 0.4s, box-shadow 0.4s",
//                     }}
//                   >
//                     <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${item.accent}${focused === idx ? "cc" : "55"}, transparent)` }} />
//                     <div style={{ padding: "22px 24px 26px" }}>
//                       <div className="flex items-center justify-between mb-5">
//                         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
//                           style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}`, color: item.accent }}>
//                           {item.tag}
//                         </span>
//                         <span className="text-xl w-9 h-9 rounded-xl flex items-center justify-center"
//                           style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}` }}>
//                           {item.icon}
//                         </span>
//                       </div>
//                       <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: item.accent, opacity: 0.65 }}>{item.org}</p>
//                       <h3 className="text-xl text-white mb-3 leading-snug">{item.role}</h3>
//                       <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg mb-5"
//                         style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//                         <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
//                         <span className="text-[11px] text-white/40">{item.period}</span>
//                       </div>
//                       <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
//                       <ul className="flex flex-col gap-2.5">
//                         {item.points.map((pt) => (
//                           <li key={pt} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
//                             <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.accent, opacity: 0.65 }} />
//                             {pt}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Desktop dots */}
//           <div className="hidden md:flex justify-center gap-2 mt-4">
//             {items.map((it, i) => (
//               <button key={i} onClick={() => setFocused(focused === i ? null : i)}
//                 className="rounded-full transition-all duration-300"
//                 style={{
//                   width: focused === i ? 24 : hovered && focused === null ? 10 : 6,
//                   height: 6,
//                   background: focused === i
//                     ? `linear-gradient(90deg, ${it.accent}, #38bdf8)`
//                     : i === 1 && !hovered && focused === null
//                     ? "linear-gradient(90deg, #6ee7b7, #38bdf8)"
//                     : "rgba(255,255,255,0.15)",
//                 }}
//               />
//             ))}
//           </div>

//           {/* ── Mobile: single card + dot nav ── */}
//           <div className="md:hidden">
//             <div
//               key={mobileActive}
//               className="rounded-2xl overflow-hidden w-full"
//               style={{
//                 background: "rgba(13,17,23,0.95)",
//                 border: `1px solid ${item.accentBorder}`,
//                 boxShadow: `0 0 30px ${item.accent}15, 0 8px 32px rgba(0,0,0,0.4)`,
//                 animation: "fadeSlideIn 0.35s ease forwards",
//               }}
//             >
//               <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${item.accent}cc, transparent)` }} />
//               <div style={{ padding: "20px 20px 24px" }}>
//                 <div className="flex items-center justify-between mb-5">
//                   <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
//                     style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}`, color: item.accent }}>
//                     {item.tag}
//                   </span>
//                   <span className="text-xl w-9 h-9 rounded-xl flex items-center justify-center"
//                     style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}` }}>
//                     {item.icon}
//                   </span>
//                 </div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: item.accent, opacity: 0.65 }}>{item.org}</p>
//                 <h3 className="text-xl text-white mb-3 leading-snug">{item.role}</h3>
//                 <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg mb-5"
//                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//                   <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
//                   <span className="text-[11px] text-white/40">{item.period}</span>
//                 </div>
//                 <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
//                 <ul className="flex flex-col gap-2.5">
//                   {item.points.map((pt) => (
//                     <li key={pt} className="flex items-start gap-2.5 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
//                       <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.accent, opacity: 0.65 }} />
//                       {pt}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Mobile dots */}
//             <div className="flex justify-center gap-2 mt-5">
//               {items.map((it, i) => (
//                 <button key={i} onClick={() => setMobileActive(i)}
//                   className="rounded-full transition-all duration-300"
//                   style={{
//                     width: mobileActive === i ? 24 : 6,
//                     height: 6,
//                     background: mobileActive === i
//                       ? `linear-gradient(90deg, ${it.accent}, #38bdf8)`
//                       : "rgba(255,255,255,0.15)",
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </AnimateOnScroll>
//       </div>

//       <style>{`
//         @keyframes fadeSlideIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };



"use client";
import { useState, useRef } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const items = [
  {
    tag: "Internship",
    org: "Infosys Springboard",
    role: "Java Intern",
    period: "Nov 2025 – Jan 2026",
    icon: "🏢",
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.07)",
    accentBorder: "rgba(56,189,248,0.2)",
    points: [
      "Built backend application using Java and Spring Boot fundamentals",
      "Worked with MySQL databases for data storage and retrieval",
      "Focused on application workflows, backend logic, and debugging techniques",
    ],
  },
  {
    tag: "Role",
    org: "Dept. of CS and Design",
    role: "Placement Coordinator",
    period: "2025 – Present",
    icon: "🎯",
    accent: "#6ee7b7",
    accentBg: "rgba(110,231,183,0.07)",
    accentBorder: "rgba(110,231,183,0.2)",
    points: [
      "Supporting campus hiring activities and placement initiatives",
      "Facilitating communication between placement cell and department",
    ],
  },
  {
    tag: "Role",
    org: "CSD Coding Club",
    role: "Executive Member",
    period: "2025 – Present",
    icon: "💻",
    accent: "#6ee7b7",
    accentBg: "rgba(110,231,183,0.07)",
    accentBorder: "rgba(110,231,183,0.2)",
    points: [
      "Organizing engaging technical events and coding sessions",
      "Encouraging collaborative learning and innovation",
    ],
  },
];

const REST = [
  { x: -200, rotate: -8, scale: 0.92, opacity: 0.45, z: 1 },
  { x: 0,    rotate: 0,  scale: 1,    opacity: 1,    z: 3 },
  { x: 200,  rotate: 8,  scale: 0.92, opacity: 0.45, z: 1 },
];
const EXPANDED = [
  { x: -320, rotate: -2, scale: 0.97, opacity: 1, z: 2 },
  { x: 0,    rotate: 0,  scale: 1,    opacity: 1, z: 3 },
  { x: 320,  rotate: 2,  scale: 0.97, opacity: 1, z: 2 },
];

/* ── Shared card renderer ── */
function ExperienceCard({ item, accent }: { item: typeof items[0]; accent?: string }) {
  const a = accent ?? item.accent;
  return (
    <div
      className="rounded-2xl overflow-hidden w-full"
      style={{
        background: "rgba(13,17,23,0.95)",
        border: `1px solid ${item.accentBorder}`,
        boxShadow: `0 0 30px ${a}15, 0 8px 32px rgba(0,0,0,0.4)`,
      }}
    >
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${a}cc, transparent)` }} />
      <div style={{ padding: "20px 20px 24px" }}>
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}`, color: a }}
          >
            {item.tag}
          </span>
          <span
            className="text-xl w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}` }}
          >
            {item.icon}
          </span>
        </div>
        <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: a, opacity: 0.65 }}>
          {item.org}
        </p>
        <h3 className="text-xl text-white mb-3 leading-snug">{item.role}</h3>
        <div
          className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg mb-5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a }} />
          <span className="text-[11px] text-white/40">{item.period}</span>
        </div>
        <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
        <ul className="flex flex-col gap-2.5">
          {item.points.map((pt) => (
            <li
              key={pt}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: a, opacity: 0.65 }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const ExperienceSection = () => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState<number | null>(null);

  /* ── Mobile swipe state ── */
  const [mobileActive, setMobileActive] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = (idx: number) => setMobileActive(Math.max(0, Math.min(items.length - 1, idx)));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40)  goTo(mobileActive + 1);
    if (diff < -40) goTo(mobileActive - 1);
  };

  const getStyle = (idx: number) => {
    if (focused !== null) {
      if (focused === idx) return { x: 0, rotate: 0, scale: 1.02, opacity: 1, z: 10 };
      const offset = idx < focused ? -340 : 340;
      return { x: offset, rotate: idx < focused ? -3 : 3, scale: 0.9, opacity: 0.3, z: 1 };
    }
    return hovered ? EXPANDED[idx] : REST[idx];
  };

  return (
    <section id="experience" className="py-16 lg:py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-16">
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Professional Journey
            </p>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Roles &amp; Experiences
            </h2>
            <p className="text-white/30 text-sm mt-3 hidden md:block">
              hover to expand · click a card to focus
            </p>
            {/* Mobile hint — shows briefly then fades */}
            <p className="text-white/30 text-sm mt-3 md:hidden animate-pulse">
              swipe or use arrows to navigate
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120}>

          {/* ── Desktop fan layout (unchanged) ── */}
          <div
            className="relative flex items-center justify-center hidden md:flex"
            style={{ height: 420 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setFocused(null); }}
          >
            {items.map((item, idx) => {
              const s = getStyle(idx);
              return (
                <div
                  key={item.role}
                  onClick={() => setFocused(focused === idx ? null : idx)}
                  className="absolute cursor-pointer select-none"
                  style={{
                    width: 300,
                    transform: `translateX(${s.x}px) rotate(${s.rotate}deg) scale(${s.scale})`,
                    opacity: s.opacity,
                    zIndex: s.z,
                    transition: "transform 0.55s cubic-bezier(0.34,1.3,0.64,1), opacity 0.4s ease",
                  }}
                >
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(13,17,23,0.95)",
                      border: `1px solid ${focused === idx ? item.accentBorder : "rgba(255,255,255,0.09)"}`,
                      boxShadow: focused === idx
                        ? `0 0 40px ${item.accent}20, 0 20px 60px rgba(0,0,0,0.5)`
                        : "0 8px 32px rgba(0,0,0,0.4)",
                      transition: "border-color 0.4s, box-shadow 0.4s",
                    }}
                  >
                    <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${item.accent}${focused === idx ? "cc" : "55"}, transparent)` }} />
                    <div style={{ padding: "22px 24px 26px" }}>
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}`, color: item.accent }}
                        >
                          {item.tag}
                        </span>
                        <span
                          className="text-xl w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: item.accentBg, border: `1px solid ${item.accentBorder}` }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: item.accent, opacity: 0.65 }}>
                        {item.org}
                      </p>
                      <h3 className="text-xl text-white mb-3 leading-snug">{item.role}</h3>
                      <div
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg mb-5"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
                        <span className="text-[11px] text-white/40">{item.period}</span>
                      </div>
                      <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
                      <ul className="flex flex-col gap-2.5">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.accent, opacity: 0.65 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop dots */}
          <div className="hidden md:flex justify-center gap-2 mt-4">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => setFocused(focused === i ? null : i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: focused === i ? 24 : hovered && focused === null ? 10 : 6,
                  height: 6,
                  background: focused === i
                    ? `linear-gradient(90deg, ${it.accent}, #38bdf8)`
                    : i === 1 && !hovered && focused === null
                    ? "linear-gradient(90deg, #6ee7b7, #38bdf8)"
                    : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          {/* ── Mobile: swipe + arrow nav ── */}
          <div className="md:hidden">

            {/* Swipe area */}
            <div
              key={mobileActive}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ animation: "fadeSlideIn 0.35s ease forwards" }}
            >
              <ExperienceCard item={items[mobileActive]} />
            </div>

            {/* Arrow nav row */}
            <div className="flex items-center justify-between mt-4 px-1">

              {/* Swipe hint */}
              <span className="text-[10px] text-white/20 tracking-wide flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                swipe
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>

              {/* Counter + arrows */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/30">
                  <span className="text-emerald-400 font-bold">{mobileActive + 1}</span>
                  {" / "}{items.length}
                </span>
                <div className="flex gap-2">
                  {/* Prev */}
                  <button
                    onClick={() => goTo(mobileActive - 1)}
                    disabled={mobileActive === 0}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                      color: mobileActive === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                      cursor: mobileActive === 0 ? "not-allowed" : "pointer",
                      opacity: mobileActive === 0 ? 0.4 : 1,
                    }}
                    aria-label="Previous"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  {/* Next */}
                  <button
                    onClick={() => goTo(mobileActive + 1)}
                    disabled={mobileActive === items.length - 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      border: `1px solid ${mobileActive === items.length - 1 ? "rgba(255,255,255,0.12)" : "rgba(52,211,153,0.35)"}`,
                      background: mobileActive === items.length - 1 ? "rgba(255,255,255,0.04)" : "rgba(52,211,153,0.08)",
                      color: mobileActive === items.length - 1 ? "rgba(255,255,255,0.2)" : "#34d399",
                      cursor: mobileActive === items.length - 1 ? "not-allowed" : "pointer",
                      opacity: mobileActive === items.length - 1 ? 0.4 : 1,
                    }}
                    aria-label="Next"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div
              className="mt-3 h-0.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-400"
                style={{
                  width: `${((mobileActive + 1) / items.length) * 100}%`,
                  background: `linear-gradient(90deg, ${items[mobileActive].accent}, #34d399)`,
                }}
              />
            </div>
          </div>

        </AnimateOnScroll>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};