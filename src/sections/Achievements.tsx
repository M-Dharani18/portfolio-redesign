
// 'use client';

// import { Fragment } from "react/jsx-runtime";
// import { AnimateOnScroll } from "@/components/AnimateOnScroll";
// import { Sparkles } from "@/components/Sparkles";

// const achievements = [
//   {
//     icon: "🧩",
//     metric: "280+",
//     metricSub: "Problems Solved",
//     title: "LeetCode Problem Solver",
//     desc: "Strengthened algorithmic problem-solving and data structure skills.",
//     tag: "Competitive Programming",
//     accent: "#6ee7b7",
//     bg: "linear-gradient(145deg, #0a1f16 0%, #061410 100%)",
//   },
//   {
//     icon: "🏆",
//     metric: "Top 50",
//     metricSub: "College Level",
//     title: "Smart India Hackathon 2025",
//     desc: "Selected among the Top 50 teams at the college level in SIH 2025.",
//     tag: "National Hackathon",
//     accent: "#38bdf8",
//     bg: "linear-gradient(145deg, #071828 0%, #040f1a 100%)",
//   },
//   {
//     icon: "🥇",
//     metric: "10+",
//     metricSub: "Event Winner",
//     title: "Technical Event Achievements",
//     desc: "Won prizes across multiple technical events including coding and UI/UX competitions.",
//     tag: "Tech Competitions",
//     accent: "#f472b6",
//     bg: "linear-gradient(145deg, #1a0715 0%, #0f0410 100%)",
//   },
//   {
//     icon: "📜",
//     metric: "Top 1%",
//     metricSub: "NPTEL",
//     title: "Industry 4.0 Certification",
//     desc: "Recognized as a Top 1% performer in NPTEL's Industry 4.0 & IIoT course.",
//     tag: "Certification",
//     accent: "#fbbf24",
//     bg: "linear-gradient(145deg, #1a1200 0%, #100c00 100%)",
//   },
//   {
//     icon: "📊",
//     metric: "9.16",
//     metricSub: "CGPA · Top 5%",
//     title: "Academic Excellence",
//     desc: "Awarded the Academic Excellence Merit Scholarship consecutively for top department ranking.",
//     tag: "Academics",
//     accent: "#a78bfa",
//     bg: "linear-gradient(145deg, #0e0a1f 0%, #080614 100%)",
//   },
// ];

// export const AchievementsSection = () => {
//   return (
//     <section id="achievements" className="py-20 lg:py-30 relative overflow-hidden">
//       <Sparkles />

//       <div className="container max-w-5xl mx-auto px-4">
//         <AnimateOnScroll>
//           <div className="flex flex-col items-center mb-16">
//             <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
//               Recognition & Results
//             </p>
//             <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
//               Achievements
//             </h2>
//             <p className="text-white/40 text-sm mt-3 text-center max-w-sm">
//               Highlights from competitive programming, hackathons, and academics.
//             </p>
//           </div>
//         </AnimateOnScroll>
//       </div>

//       {/* Full-width fan scroll — outside container so cards bleed to edges */}
//       <AnimateOnScroll delay={100}>
//         <div
//           className="relative w-full overflow-hidden"
//           style={{
//             perspective: "1200px",
//             maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
//             WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
//           }}
//         >
//           <div
//             className="flex items-end achievement-track"
//             style={{
//               width: "max-content",
//               gap: "18px",
//               paddingBottom: "32px",
//               paddingTop: "32px",
//               paddingLeft: "60px",
//               paddingRight: "60px",
//               animation: "ach-scroll 30s linear infinite",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.animationPlayState = "running";
//             }}
//           >
//             {[0, 1].map((pass) => (
//               <Fragment key={pass}>
//                 {achievements.map((a, i) => {
//                   // Fan tilt: cards alternate slight rotations like the reference
//                   const tilts = [-6, -3, 0, 3, 6];
//                   const tilt = tilts[i % tilts.length];
//                   const heights = [300, 330, 360, 330, 300];
//                   const h = heights[i % heights.length];

//                   return (
//                     <div
//                       key={`${pass}-${i}`}
//                       className="achievement-card flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer"
//                       style={{
//                         width: "220px",
//                         height: `${h}px`,
//                         background: a.bg,
//                         border: `1px solid ${a.accent}25`,
//                         transform: `rotate(${tilt}deg)`,
//                         transformOrigin: "bottom center",
//                         transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease",
//                         boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 0 ${a.accent}00`,
//                       }}
//                       onMouseEnter={(e) => {
//                         const el = e.currentTarget as HTMLElement;
//                         el.style.transform = "rotate(0deg) translateY(-16px) scale(1.04)";
//                         el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.7), 0 0 32px ${a.accent}30`;
//                         el.style.borderColor = `${a.accent}60`;
//                         el.style.zIndex = "10";
//                       }}
//                       onMouseLeave={(e) => {
//                         const el = e.currentTarget as HTMLElement;
//                         el.style.transform = `rotate(${tilt}deg)`;
//                         el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
//                         el.style.borderColor = `${a.accent}25`;
//                         el.style.zIndex = "1";
//                       }}
//                     >
//                       {/* Top glow bar */}
//                       <div
//                         className="absolute top-0 left-0 right-0 h-[2px]"
//                         style={{
//                           background: `linear-gradient(90deg, transparent, ${a.accent}90, transparent)`,
//                         }}
//                       />

//                       {/* Noise texture overlay */}
//                       <div
//                         className="absolute inset-0 pointer-events-none"
//                         style={{
//                           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
//                           opacity: 0.4,
//                         }}
//                       />

//                       {/* Radial glow from accent */}
//                       <div
//                         className="absolute pointer-events-none"
//                         style={{
//                           bottom: "-40px", left: "50%", transform: "translateX(-50%)",
//                           width: "180px", height: "180px", borderRadius: "50%",
//                           background: `radial-gradient(circle, ${a.accent}18 0%, transparent 70%)`,
//                         }}
//                       />

//                       {/* Content */}
//                       <div className="relative z-10 flex flex-col h-full p-6">
//                         {/* Icon */}
//                         <div
//                           className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-auto"
//                           style={{
//                             background: `${a.accent}12`,
//                             border: `1px solid ${a.accent}30`,
//                           }}
//                         >
//                           {a.icon}
//                         </div>

//                         {/* Bottom content */}
//                         <div className="mt-4">
//                           {/* Metric */}
//                           <div className="flex items-baseline gap-2 mb-1">
//                             <span
//                               className="font-['Clash Display'] leading-none"
//                               style={{
//                                 color: a.accent,
//                                 fontSize: a.metric.length > 5 ? "18px" : "28px",
//                                 fontWeight: 700,
//                               }}
//                             >
//                               {a.metric}
//                             </span>
//                           </div>
//                           <p className="text-[10px] text-white/30 mb-3 uppercase tracking-wider">{a.metricSub}</p>

//                           {/* Divider */}
//                           <div className="h-px mb-3" style={{ background: `${a.accent}20` }} />

//                           {/* Title */}
//                           <h3
//                             className="font-['Clash Display'] text-sm text-white/90 leading-snug mb-2"
//                             style={{ fontWeight: 600 }}
//                           >
//                             {a.title}
//                           </h3>

//                           {/* Desc */}
//                           <p className="text-[11px] text-white/40 leading-relaxed mb-4 line-clamp-3">
//                             {a.desc}
//                           </p>

//                           {/* Tag */}
//                           <span
//                             className="inline-flex text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
//                             style={{
//                               background: `${a.accent}12`,
//                               border: `1px solid ${a.accent}30`,
//                               color: a.accent,
//                             }}
//                           >
//                             {a.tag}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </Fragment>
//             ))}
//           </div>
//         </div>
//       </AnimateOnScroll>

//       <style>{`
//         @keyframes ach-scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// };



"use client";

import { SectionHeader } from "@/components/SectionHeader";

const achievements = [
  {
    num: "01",
    emoji: "👩🏻‍💻",
    title: "280+ LeetCode Problems Solved",
    desc: "Strengthened algorithmic problem-solving and data structure skills through consistent practice.",
    color: "from-emerald-400/10 to-transparent",
    border: "border-emerald-400/20",
    side: "left",
  },
  {
    num: "02",
    emoji: "🥇",
    title: "15+ Prizes in Tech Events",
    desc: "Won prizes across multiple technical events including coding, UI/UX design competitions.",
    color: "from-sky-400/10 to-transparent",
    border: "border-sky-400/20",
    side: "right",
  },
  {
    num: "03",
    emoji: "🏆",
    title: "Top 50 College Level · SIH 2025",
    desc: "Selected among the Top 50 teams at the college level in SIH 2025.",
    color: "from-amber-400/10 to-transparent",
    border: "border-amber-400/20",
    side: "left",
  },
  {
    num: "04",
    emoji: "💻",
    title: "Top Coders Coding Event",
    desc: "Ranked among the Top 10 teams in the Top Coders coding event conducted at the college level.",
    color: "from-pink-400/10 to-transparent",
    border: "border-pink-400/20",
    side: "right",
  },
  {
    num: "05",
    emoji: "🎉",
    title: "Top 1% NPTEL Performer - Industry 4.0",
    desc: "Recognized as a Top 1% performer in NPTEL's 'Introduction to Industry 4.0 and Industrial IoT'.",
    color: "from-emerald-400/10 to-transparent",
    border: "border-emerald-400/20",
    side: "left",
  },
  {
    num: "06",
    emoji: "🎓",
    title: "2× Academic Excellence",
    desc: "Received Merit Scholarship for Top 5% of department. CGPA: 9.16/10.",
    color: "from-sky-400/10 to-transparent",
    border: "border-sky-400/20",
    side: "right",
  },
];

export const AchievementsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container px-4">
        <SectionHeader
          eyebrow="My Journey"
          title="Roadmap of Achievements"
          description="Milestones that shaped who I am as a developer"
        />

        {/* ── Road wrapper ── */}
        <div className="relative mt-16 max-w-3xl mx-auto">

          {/* ── Centre spine (the road) ── */}
          <div className="
            absolute left-1/2 -translate-x-1/2
            top-0 bottom-0 w-10
            flex flex-col items-center
            z-0 pointer-events-none
          ">
            {/* Road track */}
            <div className="
              flex-1 w-full rounded-full
              bg-[#16213e]
              border border-emerald-400/20
              relative overflow-hidden
            ">
              {/* centre dashes */}
              <div className="
                absolute inset-x-0 top-0 bottom-0 mx-auto w-px
                bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent
              " style={{ backgroundSize: "1px 32px", backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,255,170,0.3) 0px, rgba(0,255,170,0.3) 14px, transparent 14px, transparent 28px)" }} />
            </div>
          </div>

          {/* ── Milestone rows ── */}
          <div className="relative z-10 flex flex-col gap-0">
            {achievements.map((a, i) => (
              <div
                key={a.num}
                className={`
                  flex items-center gap-4
                  ${a.side === "right" ? "flex-row-reverse" : "flex-row"}
                  mb-10
                `}
              >
                {/* Card */}
                <div className="flex-1 max-w-[44%]">
                  <div className={`
                    group relative rounded-2xl p-4
                    bg-gradient-to-br ${a.color}
                    border ${a.border} border-opacity-30
                    bg-white/[0.03]
                    hover:bg-white/[0.06]
                    hover:border-emerald-400/40
                    hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]
                    hover:-translate-y-1
                    transition-all duration-300
                    backdrop-blur-sm
                  `}>
                    {/* top shimmer */}
                    <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                    {/* Speech bubble tail */}
                    <div className={`
                      absolute top-1/2 -translate-y-1/2
                      w-0 h-0 border-y-[7px] border-y-transparent
                      ${a.side === "right"
                        ? "right-[-7px] border-l-[8px] border-l-white/[0.06]"
                        : "left-[-7px] border-r-[8px] border-r-white/[0.06]"
                      }
                    `} />

                    <div className="flex items-start gap-3">
                      <div className="text-xl mt-0.5">{a.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400/60 mb-0.5">
                          {a.num}
                        </p>
                        <p className="text-white font-semibold text-sm leading-snug mb-1">
                          {a.title}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {a.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step dot — centred on spine */}
                <div className="
                  flex-shrink-0 z-20
                  w-9 h-9 rounded-full
                  bg-[#080c10]
                  border-2 border-emerald-400
                  flex items-center justify-center
                  shadow-[0_0_16px_rgba(0,255,170,0.35)]
                  font-mono text-[11px] font-bold text-emerald-400
                  tracking-wider
                ">
                  {a.num}
                </div>

                {/* Empty opposite side spacer */}
                <div className="flex-1 max-w-[44%]" />
              </div>
            ))}
          </div>

          {/* ── Bottom finish flag ── */}
          <div className="relative z-10 flex flex-col items-center mt-2">
            <div className="
              w-9 h-9 rounded-full
              bg-emerald-400/10 border border-emerald-400/40
              flex items-center justify-center text-base
              shadow-[0_0_24px_rgba(0,255,170,0.25)]
            ">
              🏁
            </div>
            <p className="text-[10px] font-mono text-emerald-400/40 mt-2 tracking-widest uppercase">
              More ahead...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};