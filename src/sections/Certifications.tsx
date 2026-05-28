'use client';

import Image from "next/image";
import { useRef, useState } from "react";
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
    accentColor: "#fb923c",
    gradientFrom: "#1a0f00",
    gradientTo: "#0f0800",
  },
  {
    id: "02",
    issuer: "HackerRank",
    name: "Python (Basic) Certification",
    date: "2025",
    image: hackerrankImg,
    accentColor: "#818cf8",
    gradientFrom: "#0d0d1f",
    gradientTo: "#07071a",
  },
  {
    id: "03",
    issuer: "Scaler Topics",
    name: "Spring Boot Certification",
    date: "May 2026",
    image: springboot,
    accentColor: "#6ee7b7",
    gradientFrom: "#001a0f",
    gradientTo: "#000f0a",
  },
  {
    id: "04",
    issuer: "Infosys Springboard",
    name: "Programming using Java",
    date: "July 2025",
    image: infosys,
    accentColor: "#72d8f4",
    gradientFrom: "#001520",
    gradientTo: "#000d18",
  },
];

// Desktop: original pinboard layout (unchanged)
const DesktopCertifications = () => (
  <div className="relative">
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

    <div className="grid grid-cols-2 gap-x-8" style={{ rowGap: "0px" }}>
      {certifications.map((cert, i) => {
        const isLeft = i % 2 === 0;
        const cardBgs = ["#fff8f0", "#f0f4ff", "#f0fdf8", "#fdf2f8"];
        const accentBars = ["#fb923c", "#6366f1", "#091543", "#4fa8c3"];
        const badgeColors = ["#ea580c", "#4338ca", "#11135e", "#277cbe"];
        const badgeBgs = ["#fff1e6", "#ede9fe", "#ceceda", "#fce7f3"];
        const pinColors = ["#f87171", "#818cf8", "#092f64", "#72d8f4"];
        const rotates = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
        return (
          <AnimateOnScroll key={cert.id}>
            <div className={`relative z-10 ${isLeft ? "" : "md:mt-24"} mb-12`}>
              <div
                className={`${rotates[i]} transition-transform duration-500 hover:rotate-0 hover:scale-105 cursor-pointer`}
                style={{ filter: "drop-shadow(2px 8px 20px rgba(0,0,0,0.36))" }}
              >
                {/* Pin */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" aria-hidden="true">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white/50"
                    style={{
                      backgroundColor: pinColors[i],
                      boxShadow: `0 2px 6px ${pinColors[i]}99, inset 0 -2px 3px rgba(0,0,0,0.18)`,
                    }}
                  />
                  <div className="w-[2.5px] h-2.5 opacity-35 rounded-b-full" style={{ backgroundColor: pinColors[i] }} />
                </div>

                {/* Card */}
                <div className="rounded-xl overflow-hidden" style={{ backgroundColor: cardBgs[i] }}>
                  <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                    <Image src={cert.image} alt={cert.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                  </div>
                  <div className="px-4 pt-3 pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold font-['Clash Display'] opacity-15" style={{ color: badgeColors[i] }}>{cert.id}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: badgeBgs[i], color: badgeColors[i] }}>{cert.issuer}</span>
                    </div>
                    <h3 className="font-['Clash Display'] text-base leading-snug mb-1.5" style={{ color: "#1e1e2e" }}>{cert.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px]" style={{ color: "#94a3b8" }}>{cert.date}</p>
                      <span className="flex items-center gap-1 text-[9px] font-medium" style={{ color: badgeColors[i] }}>
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                          <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
                        </svg>
                        Verified
                      </span>
                    </div>
                  </div>
                  <div className="h-1 w-full" style={{ backgroundColor: accentBars[i] }} />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        );
      })}
    </div>
  </div>
);

// Mobile: swipeable poster cards
const MobileCertifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = clientWidth * 0.72 + 12;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  };

  const scrollTo = (i: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.72 + 12;
    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <div>
      <style>{`
        .cert-scroll::-webkit-scrollbar { display: none; }
        .cert-scroll { scrollbar-width: none; }
        .cert-poster {
          scroll-snap-align: center;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      {/* Scroll row */}
      <div
        ref={scrollRef}
        className="cert-scroll"
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "calc(14% - 6px)",
          paddingRight: "calc(14% - 6px)",
          paddingBottom: "12px",
        }}
      >
        {certifications.map((cert, i) => (
          <div
            key={cert.id}
            className="cert-poster"
            style={{
              width: "72vw",
              maxWidth: "280px",
              flexShrink: 0,
              borderRadius: "20px",
              overflow: "hidden",
              border: `1px solid ${cert.accentColor}30`,
              background: "#0c0c0e",
              position: "relative",
              opacity: activeIndex === i ? 1 : 0.45,
              transform: activeIndex === i ? "scale(1)" : "scale(0.94)",
              boxShadow: activeIndex === i ? `0 8px 40px ${cert.accentColor}25` : "none",
            }}
          >
            {/* Certificate image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/2" }}>
              <Image src={cert.image} alt={cert.name} fill style={{ objectFit: "cover" }} />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to bottom, transparent 30%, #0c0c0e 100%)`,
              }} />
            </div>

            {/* Info below image */}
            <div style={{ padding: "12px 16px 16px" }}>
              {/* Issuer badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: `${cert.accentColor}18`,
                border: `1px solid ${cert.accentColor}35`,
                borderRadius: "9999px",
                padding: "3px 10px",
                marginBottom: "8px",
              }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: cert.accentColor }} />
                <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", color: cert.accentColor, textTransform: "uppercase" }}>
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "15px", fontWeight: 700, color: "rgba(255,255,255,0.92)",
                lineHeight: 1.3, margin: "0 0 10px",
                fontFamily: "'Clash Display', sans-serif",
              }}>
                {cert.name}
              </h3>

              {/* Footer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{cert.date}</span>
                <span style={{
                  fontSize: "10px", display: "flex", alignItems: "center", gap: "4px",
                  color: cert.accentColor, fontWeight: 500,
                }}>
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div style={{ height: "3px", background: cert.accentColor, width: "100%" }} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "4px" }}>
        {certifications.map((cert, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${cert.name}`}
            style={{
              width: activeIndex === i ? "20px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              background: activeIndex === i ? cert.accentColor : "rgba(255,255,255,0.2)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Active cert big label */}
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {activeIndex + 1} / {certifications.length}
        </p>
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 lg:py-24 relative overflow-hidden">
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
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">Credentials</p>
            <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">Certifications</h2>
          </div>
        </AnimateOnScroll>

        {/* Mobile view */}
        <div className="block md:hidden">
          <MobileCertifications />
        </div>

        {/* Desktop view */}
        <div className="hidden md:block">
          <DesktopCertifications />
        </div>
      </div>
    </section>
  );
};



// 'use client';

// import Image from "next/image";
// import { AnimateOnScroll } from "@/components/AnimateOnScroll";
// import oracleImg from "@/assets/images/oracle.png";
// import hackerrankImg from "@/assets/images/python_basic.png";
// import springboot from "@/assets/images/Scaler_SB.png";
// import infosys from "@/assets/images/Infosys_Java.png";

// const certifications = [
//   {
//     id: "01",
//     issuer: "Oracle",
//     name: "Oracle APEX Cloud Developer",
//     date: "May 2025",
//     image: oracleImg,
//     accentColor: "#fb923c",
//   },
//   {
//     id: "02",
//     issuer: "HackerRank",
//     name: "Python (Basic) Certification",
//     date: "2025",
//     image: hackerrankImg,
//     accentColor: "#818cf8",
//   },
//   {
//     id: "03",
//     issuer: "Scaler Topics",
//     name: "Spring Boot Certification",
//     date: "May 2026",
//     image: springboot,
//     accentColor: "#6ee7b7",
//   },
//   {
//     id: "04",
//     issuer: "Infosys Springboard",
//     name: "Programming using Java",
//     date: "July 2025",
//     image: infosys,
//     accentColor: "#72d8f4",
//   },
// ];

// // Desktop: original pinboard layout (unchanged)
// const DesktopCertifications = () => (
//   <div className="relative">
//     <svg
//       className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
//       viewBox="0 0 500 860"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       style={{ zIndex: 0 }}
//     >
//       <path
//         d="M 125 95
//            C 125 200, 375 165, 375 260
//            C 375 355, 125 330, 125 425
//            C 125 520, 375 495, 375 590"
//         fill="none"
//         stroke="#94a3b8"
//         strokeWidth="1.6"
//         strokeDasharray="7 6"
//         strokeLinecap="round"
//       />
//     </svg>

//     <div className="grid grid-cols-2 gap-x-8" style={{ rowGap: "0px" }}>
//       {certifications.map((cert, i) => {
//         const isLeft = i % 2 === 0;
//         const cardBgs = ["#fff8f0", "#f0f4ff", "#f0fdf8", "#fdf2f8"];
//         const accentBars = ["#fb923c", "#6366f1", "#091543", "#4fa8c3"];
//         const badgeColors = ["#ea580c", "#4338ca", "#11135e", "#277cbe"];
//         const badgeBgs = ["#fff1e6", "#ede9fe", "#ceceda", "#fce7f3"];
//         const pinColors = ["#f87171", "#818cf8", "#092f64", "#72d8f4"];
//         const rotates = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
//         return (
//           <AnimateOnScroll key={cert.id}>
//             <div className={`relative z-10 ${isLeft ? "" : "md:mt-24"} mb-12`}>
//               <div
//                 className={`${rotates[i]} transition-transform duration-500 hover:rotate-0 hover:scale-105 cursor-pointer`}
//                 style={{ filter: "drop-shadow(2px 8px 20px rgba(0,0,0,0.36))" }}
//               >
//                 {/* Pin */}
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" aria-hidden="true">
//                   <div
//                     className="w-5 h-5 rounded-full border-2 border-white/50"
//                     style={{
//                       backgroundColor: pinColors[i],
//                       boxShadow: `0 2px 6px ${pinColors[i]}99, inset 0 -2px 3px rgba(0,0,0,0.18)`,
//                     }}
//                   />
//                   <div className="w-[2.5px] h-2.5 opacity-35 rounded-b-full" style={{ backgroundColor: pinColors[i] }} />
//                 </div>

//                 {/* Card */}
//                 <div className="rounded-xl overflow-hidden" style={{ backgroundColor: cardBgs[i] }}>
//                   <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
//                     <Image src={cert.image} alt={cert.name} fill className="object-cover" />
//                     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
//                   </div>
//                   <div className="px-4 pt-3 pb-3">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-xl font-bold font-['Clash Display'] opacity-15" style={{ color: badgeColors[i] }}>{cert.id}</span>
//                       <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: badgeBgs[i], color: badgeColors[i] }}>{cert.issuer}</span>
//                     </div>
//                     <h3 className="font-['Clash Display'] text-base leading-snug mb-1.5" style={{ color: "#1e1e2e" }}>{cert.name}</h3>
//                     <div className="flex items-center justify-between">
//                       <p className="text-[11px]" style={{ color: "#94a3b8" }}>{cert.date}</p>
//                       <span className="flex items-center gap-1 text-[9px] font-medium" style={{ color: badgeColors[i] }}>
//                         <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
//                           <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
//                         </svg>
//                         Verified
//                       </span>
//                     </div>
//                   </div>
//                   <div className="h-1 w-full" style={{ backgroundColor: accentBars[i] }} />
//                 </div>
//               </div>
//             </div>
//           </AnimateOnScroll>
//         );
//       })}
//     </div>
//   </div>
// );

// // Mobile: numbered timeline with image thumbnail
// const MobileCertifications = () => {
//   return (
//     <div style={{ padding: "0 4px" }}>
//       <style>{`
//         .tl-card-hover {
//           transition: border-color 0.25s, background 0.25s;
//         }
//         .tl-card-hover:hover {
//           background: rgba(255,255,255,0.05) !important;
//         }
//       `}</style>

//       {certifications.map((cert, i) => {
//         const isLast = i === certifications.length - 1;
//         return (
//           <AnimateOnScroll key={cert.id}>
//             <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>

//               {/* Left: number + line */}
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "32px", flexShrink: 0 }}>
//                 {/* Number circle */}
//                 <div style={{
//                   width: "32px", height: "32px", borderRadius: "50%",
//                   background: `${cert.accentColor}12`,
//                   border: `1.5px solid ${cert.accentColor}50`,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   flexShrink: 0,
//                   boxShadow: `0 0 12px ${cert.accentColor}20`,
//                 }}>
//                   <span style={{
//                     fontSize: "10px", fontWeight: 700,
//                     color: cert.accentColor,
//                     fontFamily: "'Clash Display', sans-serif",
//                     letterSpacing: "0.04em",
//                   }}>
//                     {cert.id}
//                   </span>
//                 </div>
//                 {/* Connecting line */}
//                 {!isLast && (
//                   <div style={{
//                     width: "1.5px",
//                     flex: 1,
//                     minHeight: "32px",
//                     marginTop: "6px",
//                     marginBottom: "6px",
//                     background: `linear-gradient(to bottom, ${cert.accentColor}50, rgba(255,255,255,0.06))`,
//                   }} />
//                 )}
//               </div>

//               {/* Right: card */}
//               <div
//                 className="tl-card-hover"
//                 style={{
//                   flex: 1,
//                   marginBottom: isLast ? 0 : "12px",
//                   marginTop: "2px",
//                   borderRadius: "14px",
//                   border: `1px solid ${cert.accentColor}22`,
//                   background: "rgba(255,255,255,0.03)",
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 {/* Certificate image */}
//                 <div style={{ position: "relative", width: "100%", aspectRatio: "16/7" }}>
//                   <Image
//                     src={cert.image}
//                     alt={cert.name}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                   {/* Gradient over image */}
//                   <div style={{
//                     position: "absolute", inset: 0,
//                     background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55))",
//                   }} />
//                   {/* Issuer pill over image */}
//                   <div style={{
//                     position: "absolute", top: "10px", right: "10px",
//                     background: `${cert.accentColor}22`,
//                     border: `1px solid ${cert.accentColor}45`,
//                     borderRadius: "9999px",
//                     padding: "3px 9px",
//                     backdropFilter: "blur(6px)",
//                   }}>
//                     <span style={{
//                       fontSize: "9px", fontWeight: 700,
//                       letterSpacing: "0.1em", textTransform: "uppercase",
//                       color: cert.accentColor,
//                     }}>
//                       {cert.issuer}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <div style={{ padding: "12px 14px 12px" }}>
//                   <h3 style={{
//                     fontSize: "14px", fontWeight: 700,
//                     color: "rgba(255,255,255,0.9)",
//                     fontFamily: "'Clash Display', sans-serif",
//                     lineHeight: 1.3, margin: "0 0 8px",
//                   }}>
//                     {cert.name}
//                   </h3>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                     <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{cert.date}</span>
//                     <span style={{
//                       fontSize: "10px", display: "flex", alignItems: "center", gap: "4px",
//                       color: cert.accentColor, fontWeight: 500,
//                     }}>
//                       <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
//                         <path d="M5 0L6.18 3.27L9.51 3.09L7 5.14L7.87 8.5L5 6.6L2.13 8.5L3 5.14L0.49 3.09L3.82 3.27Z" />
//                       </svg>
//                       Verified
//                     </span>
//                   </div>
//                 </div>

//                 {/* Accent bar */}
//                 <div style={{ height: "3px", background: cert.accentColor }} />
//               </div>
//             </div>
//           </AnimateOnScroll>
//         );
//       })}
//     </div>
//   );
// };

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

//       <div className="container max-w-2xl mx-auto px-4 relative">
//         {/* Section header */}
//         <AnimateOnScroll>
//           <div className="flex flex-col items-center mb-14">
//             <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">Credentials</p>
//             <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">Certifications</h2>
//           </div>
//         </AnimateOnScroll>

//         {/* Mobile view */}
//         <div className="block md:hidden">
//           <MobileCertifications />
//         </div>

//         {/* Desktop view */}
//         <div className="hidden md:block">
//           <DesktopCertifications />
//         </div>
//       </div>
//     </section>
//   );
// };