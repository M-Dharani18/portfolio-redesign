
// 'use client';

// import Image from "next/image";
// import { AnimateOnScroll } from "@/components/AnimateOnScroll";
// import oracleImg from "@/assets/images/oracle.png";
// import hackerrankImg from "@/assets/images/python_basic.png";

// const certifications = [
//   {
//     id: "01",
//     issuer: "Oracle",
//     name: "Oracle APEX Cloud Developer",
//     date: "May 2025",
//     image: oracleImg,
//     pinColor: "#f87171",
//     cardBg: "#fff8f0",
//     accentBar: "#fb923c",
//     badgeColor: "#ea580c",
//     badgeBg: "#fff1e6",
//     rotate: "-rotate-1",
//     side: "left",   // left col
//   },
//   {
//     id: "02",
//     issuer: "HackerRank",
//     name: "Python (Basic) Certification",
//     date: "2025",
//     image: hackerrankImg,
//     pinColor: "#818cf8",
//     cardBg: "#f0f4ff",
//     accentBar: "#6366f1",
//     badgeColor: "#4338ca",
//     badgeBg: "#ede9fe",
//     rotate: "rotate-1",
//     side: "right",  // right col
//   },
//   {
//     id: "03",
//     issuer: "Your Issuer",
//     name: "Your Certification Name Here",
//     date: "Coming soon",
//     image: null,
//     pinColor: "#34d399",
//     cardBg: "#f0fdf8",
//     accentBar: "#10b981",
//     badgeColor: "#065f46",
//     badgeBg: "#d1fae5",
//     rotate: "-rotate-2",
//     side: "left",
//   },
//   {
//     id: "04",
//     issuer: "Your Issuer",
//     name: "Your Certification Name Here",
//     date: "Coming soon",
//     image: null,
//     pinColor: "#f472b6",
//     cardBg: "#fdf2f8",
//     accentBar: "#ec4899",
//     badgeColor: "#9d174d",
//     badgeBg: "#fce7f3",
//     rotate: "rotate-2",
//     side: "right",
//   },
// ];

// export const CertificationsSection = () => {
//   return (
//     <section id="certifications" className="py-16 lg:py-24 relative overflow-hidden">

//       {/* Lined paper background */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: `repeating-linear-gradient(
//             0deg, transparent, transparent 28px, rgba(148,163,184,0.8) 28px, rgba(148,163,184,0.8) 29px
//           )`,
//         }}
//       />

//       <div className="container max-w-3xl mx-auto px-4 relative">

//         {/* Section header */}
//         <AnimateOnScroll>
//           <div className="flex flex-col items-center mb-16">
//             <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
//               Credentials
//             </p>
//             <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
//               Certifications
//             </h2>
//           </div>
//         </AnimateOnScroll>

//         {/* Board — relative container so SVG can be absolutely positioned behind cards */}
//         <div className="relative">

//           {/*
//             SVG dashed S-curve that snakes from card to card.
//             The path goes:
//               start at top-left card center → curves right to top-right card →
//               curves left to bottom-left card → curves right to bottom-right card.
//             Coordinates are tuned to a ~600px wide × ~900px tall board.
//           */}
//           <svg
//             className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
//             viewBox="0 0 600 900"
//             preserveAspectRatio="none"
//             aria-hidden="true"
//             style={{ zIndex: 0 }}
//           >
//             <path
//               d="M 150 110
//                  C 150 220, 450 180, 450 290
//                  C 450 400, 150 380, 150 490
//                  C 150 600, 450 580, 450 690"
//               fill="none"
//               stroke="#94a3b8"
//               strokeWidth="1.8"
//               strokeDasharray="7 6"
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Two-column grid */}
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
//             style={{ rowGap: "0px" }}
//           >
//             {certifications.map((cert, i) => {
//               const isLeft = cert.side === "left";
//               return (
//                 <AnimateOnScroll key={cert.id}>
//                   {/*
//                     Left cards: normal margin
//                     Right cards: push down so they sit between the left ones (zigzag)
//                   */}
//                   <div
//                     className={`relative z-10 ${isLeft ? "" : "md:mt-32"} mb-16`}
//                   >
//                     <div
//                       className={`${cert.rotate} transition-transform duration-500 hover:rotate-0 hover:scale-105 cursor-pointer`}
//                       style={{ filter: "drop-shadow(3px 10px 28px rgba(0,0,0,0.38))" }}
//                     >
//                       {/* Pin */}
//                       <div
//                         className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
//                         aria-hidden="true"
//                       >
//                         {/* Pin head — dome shape */}
//                         <div
//                           className="w-6 h-6 rounded-full border-[3px] border-white/50"
//                           style={{
//                             backgroundColor: cert.pinColor,
//                             boxShadow: `0 3px 8px ${cert.pinColor}99, inset 0 -2px 4px rgba(0,0,0,0.2)`,
//                           }}
//                         />
//                         {/* Pin shaft */}
//                         <div
//                           className="w-[3px] h-3 opacity-40 rounded-b-full"
//                           style={{ backgroundColor: cert.pinColor }}
//                         />
//                       </div>

//                       {/* Sticky note */}
//                       <div
//                         className="rounded-2xl overflow-hidden"
//                         style={{ backgroundColor: cert.cardBg }}
//                       >
//                         {/* Cert image */}
//                         <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
//                           {cert.image ? (
//                             <Image
//                               src={cert.image}
//                               alt={cert.name}
//                               fill
//                               className="object-cover"
//                             />
//                           ) : (
//                             <div
//                               className="w-full h-full flex flex-col items-center justify-center gap-3"
//                               style={{ backgroundColor: cert.cardBg, filter: "brightness(0.93)" }}
//                             >
//                               <div
//                                 className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base font-['Clash Display']"
//                                 style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
//                               >
//                                 {cert.id}
//                               </div>
//                               <p
//                                 className="text-[10px] uppercase tracking-widest opacity-40"
//                                 style={{ color: cert.badgeColor }}
//                               >
//                                 Add cert image
//                               </p>
//                             </div>
//                           )}
//                           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
//                         </div>

//                         {/* Card body */}
//                         <div className="p-5">
//                           <div className="flex items-center justify-between mb-3">
//                             <span
//                               className="text-2xl font-bold font-['Clash Display'] opacity-15"
//                               style={{ color: cert.badgeColor }}
//                             >
//                               {cert.id}
//                             </span>
//                             <span
//                               className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
//                               style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
//                             >
//                               {cert.issuer}
//                             </span>
//                           </div>

//                           <h3
//                             className="font-['Clash Display'] text-lg leading-snug mb-2"
//                             style={{ color: "#1e1e2e" }}
//                           >
//                             {cert.name}
//                           </h3>

//                           <div className="flex items-center justify-between">
//                             <p className="text-xs" style={{ color: "#94a3b8" }}>
//                               {cert.date}
//                             </p>
//                             <span
//                               className="flex items-center gap-1 text-[10px] font-medium"
//                               style={{ color: cert.badgeColor }}
//                             >
//                               <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
//                                 <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
//                               </svg>
//                               Verified
//                             </span>
//                           </div>
//                         </div>

//                         {/* Accent bar */}
//                         <div className="h-[5px] w-full" style={{ backgroundColor: cert.accentBar }} />
//                       </div>
//                     </div>
//                   </div>
//                 </AnimateOnScroll>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


'use client';

import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import oracleImg from "@/assets/images/oracle.png";
import hackerrankImg from "@/assets/images/python_basic.png";
import springboot from "@/assets/images/Scaler_SB.png";
import infosys from "@/assets/images/Infosys_Java.png";

const certifications = [
  {
    id: "01",
    issuer: "Oracle",
    name: "Oracle APEX Cloud Developer",
    date: "May 2025",
    image: oracleImg,
    pinColor: "#f87171",
    cardBg: "#fff8f0",
    accentBar: "#fb923c",
    badgeColor: "#ea580c",
    badgeBg: "#fff1e6",
    rotate: "-rotate-1",
    side: "left",
  },
  {
    id: "02",
    issuer: "HackerRank",
    name: "Python (Basic) Certification",
    date: "2025",
    image: hackerrankImg,
    pinColor: "#818cf8",
    cardBg: "#f0f4ff",
    accentBar: "#6366f1",
    badgeColor: "#4338ca",
    badgeBg: "#ede9fe",
    rotate: "rotate-1",
    side: "right",
  },
  {
    id: "03",
    issuer: "Scaler Topics",
    name: "Spring Boot Certification",
    date: "May 2026",
    image: springboot,
    pinColor: "#092f64",
    cardBg: "#f0fdf8",
    accentBar: "#091543",
    badgeColor: "#11135e",
    badgeBg: "#ceceda",
    rotate: "-rotate-2",
    side: "left",
  },
  
  {
    id: "04",
    issuer: "Infosys Springboard",
    name: "Programming using Java",
    date: "July 2025",
    image: infosys,
    pinColor: "#72d8f4",
    cardBg: "#fdf2f8",
    accentBar: "#4fa8c3",
    badgeColor: "#277cbe",
    badgeBg: "#fce7f3",
    rotate: "rotate-2",
    side: "right",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 lg:py-24 relative overflow-hidden">
      <style>{`
        @media (max-width: 767px) {
          .cert-card-image {
            aspect-ratio: 16 / 9 !important;
            max-height: 120px !important;
          }
          .cert-card-body {
            padding: 8px 10px !important;
          }
          .cert-card-title {
            font-size: 12px !important;
            margin-bottom: 4px !important;
            line-height: 1.2 !important;
          }
          .cert-card-badge {
            font-size: 7px !important;
            padding: 2px 4px !important;
          }
          .cert-card-meta {
            font-size: 9px !important;
          }
          .cert-card-id {
            font-size: 14px !important;
          }
          .cert-wrapper {
            margin-bottom: 8px !important;
          }
          .cert-pin {
            width: 16px !important;
            height: 16px !important;
            top: -8px !important;
          }
        }
      `}</style>

      {/* Lined paper background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 28px, rgba(148,163,184,0.8) 28px, rgba(148,163,184,0.8) 29px
          )`,
        }}
      />

      <div className="container max-w-2xl mx-auto px-4 relative">

        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-14">
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Credentials
            </p>
            <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
              Certifications
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="relative">

          {/* S-curve dashed connector */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 500 860"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <path
              d="M 125 95
                 C 125 200, 375 165, 375 260
                 C 375 355, 125 330, 125 425
                 C 125 520, 375 495, 375 590"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.6"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Two-column grid — narrower cards via smaller container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 max-w-xs md:max-w-none mx-auto md:mx-0" style={{ rowGap: "0px" }}>
            {certifications.map((cert, i) => {
              const isLeft = cert.side === "left";
              return (
                <AnimateOnScroll key={cert.id}>
                  <div className={`relative z-10 ${isLeft ? "" : "md:mt-24"} mb-12 cert-wrapper`}>
                    <div
                      className={`${cert.rotate} transition-transform duration-500 hover:rotate-0 hover:scale-105 cursor-pointer`}
                      style={{ filter: "drop-shadow(2px 8px 20px rgba(0,0,0,0.36))" }}
                    >
                      {/* Pin */}
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cert-pin"
                        aria-hidden="true"
                      >
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white/50"
                          style={{
                            backgroundColor: cert.pinColor,
                            boxShadow: `0 2px 6px ${cert.pinColor}99, inset 0 -2px 3px rgba(0,0,0,0.18)`,
                          }}
                        />
                        <div
                          className="w-[2.5px] h-2.5 opacity-35 rounded-b-full"
                          style={{ backgroundColor: cert.pinColor }}
                        />
                      </div>

                      {/* Sticky note */}
                      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: cert.cardBg }}>

                        {/* Image */}
                        <div className="relative w-full cert-card-image" style={{ aspectRatio: "16/9" }}>
                          {cert.image ? (
                            <Image src={cert.image} alt={cert.name} fill className="object-cover" />
                          ) : (
                            <div
                              className="w-full h-full flex flex-col items-center justify-center gap-2"
                              style={{ backgroundColor: cert.cardBg, filter: "brightness(0.93)", aspectRatio: "16/9" }}
                            >
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm font-['Clash Display']"
                                style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
                              >
                                {cert.id}
                              </div>
                              <p className="text-[9px] uppercase tracking-widest opacity-40" style={{ color: cert.badgeColor }}>
                                Add cert image
                              </p>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                        </div>

                        {/* Body */}
                        <div className="px-4 pt-3 pb-3 cert-card-body">
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="text-xl font-bold font-['Clash Display'] opacity-15 cert-card-id"
                              style={{ color: cert.badgeColor }}
                            >
                              {cert.id}
                            </span>
                            <span
                              className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full cert-card-badge"
                              style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
                            >
                              {cert.issuer}
                            </span>
                          </div>

                          <h3
                            className="font-['Clash Display'] text-base leading-snug mb-1.5 cert-card-title"
                            style={{ color: "#1e1e2e" }}
                          >
                            {cert.name}
                          </h3>

                          <div className="flex items-center justify-between">
                            <p className="text-[11px] cert-card-meta" style={{ color: "#94a3b8" }}>{cert.date}</p>
                            <span className="flex items-center gap-1 text-[9px] font-medium cert-card-meta" style={{ color: cert.badgeColor }}>
                              <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                                <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
                              </svg>
                              Verified
                            </span>
                          </div>
                        </div>

                        {/* Accent bar */}
                        <div className="h-1 w-full" style={{ backgroundColor: cert.accentBar }} />
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};