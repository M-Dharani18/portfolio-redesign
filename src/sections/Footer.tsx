// 'use client';
// import { useEffect, useState } from "react";

// export const Footer = () => {
//   const year = new Date().getFullYear();
//   const [views, setViews] = useState<number | null>(null);
//   useEffect(() => {
//   fetch("https://countapi.xyz/hit/dharani-portfolio/views")
//     .then((res) => res.json())
//     .then((data) => {
//       setViews(data.value);
//     })
//     .catch((error) => {
//       console.log("View counter error:", error);
//     });
//   }, []);
//   return (
//     <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
//       <div className="container max-w-5xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">

//           <a href="#hero" className="gradient-text text-xl font-bold tracking-wide">
//             Dharani M
//           </a>

//           <p className="text-white/25 text-sm">
//             Designed &amp; Built by Dharani M &copy; {year}
//           {views !== null && (
//             <span> • 👁 {views} Views</span>
//           )}
//           </p>

//           <div className="flex items-center gap-3">
//             {[
//               { label: "LI", href: "https://linkedin.com/in/dharani-m-a417812b8", accent: "#38bdf8" },
//               { label: "GH", href: "https://github.com/M-Dharani18", accent: "#6ee7b7" },
//             ].map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
//                 style={{
//                   background: `${s.accent}10`,
//                   border: `1px solid ${s.accent}20`,
//                   color: s.accent,
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = `${s.accent}20`;
//                   (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = `${s.accent}10`;
//                   (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
//                 }}
//               >
//                 {s.label}
//               </a>
//             ))}
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };



'use client';
import { useEffect, useState } from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Using countapi.dev — free, no signup needed
    fetch("https://api.countapi.dev/hit/dharani-portfolio-dm/views")
      .then((res) => res.json())
      .then((data) => {
        setViews(data.value);
      })
      .catch((err) => {
        console.log("View counter error:", err);
      });
  }, []);

  return (
    <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <a href="#hero" className="gradient-text text-xl font-bold tracking-wide">
            Dharani M
          </a>

          <div className="flex flex-col items-center gap-1.5">
            <p className="text-white/25 text-sm">
              Designed &amp; Built by Dharani M &copy; {year}
            </p>
            {/* Views badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "3px 12px",
                borderRadius: "9999px",
                background: "rgba(110,231,183,0.06)",
                border: "1px solid rgba(110,231,183,0.15)",
              }}
            >
              {/* Eye icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span style={{ fontSize: "11px", color: "rgba(110,231,183,0.7)", fontWeight: 500 }}>
                {views !== null ? (
                  <>{views.toLocaleString()} portfolio views</>
                ) : (
                  <span style={{ opacity: 0.4 }}>counting views…</span>
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { label: "LI", href: "https://linkedin.com/in/dharani-m-a417812b8", accent: "#38bdf8" },
              { label: "GH", href: "https://github.com/M-Dharani18", accent: "#6ee7b7" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
                style={{
                  background: `${s.accent}10`,
                  border: `1px solid ${s.accent}20`,
                  color: s.accent,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.accent}20`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.accent}10`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};