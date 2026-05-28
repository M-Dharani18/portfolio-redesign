"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import mapImage from "@/assets/images/salem_map.png";
import smileEmoji from "@/assets/images/memoji-women.png";
import virat from "@/assets/images/vk2.png";
import { useState, useEffect, useRef } from "react";
import { GitHubHeatmap } from "@/components/GitHubHeatmap";

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

/* ─────────────────────────────────────────
   Draggable Pill  (desktop only — absolute positioned)
───────────────────────────────────────── */
function DraggablePill({
  hobby,
  containerRef,
}: {
  hobby: { title: string; emoji: string; left: string; top: string };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [dragging, setDrag] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const pill = pillRef.current;
    if (!container || !pill) return;
    const cr = container.getBoundingClientRect();
    const pw = pill.offsetWidth || 90;
    const ph = pill.offsetHeight || 36;
    setPos({
      x: Math.min((parseFloat(hobby.left) / 100) * cr.width,  cr.width  - pw - 8),
      y: Math.min((parseFloat(hobby.top)  / 100) * cr.height, cr.height - ph - 8),
    });
  }, [hobby.left, hobby.top, containerRef]);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const pill = pillRef.current;
      if (!container || !pill) return;
      if (container.offsetWidth === 0) return;
      const cr = container.getBoundingClientRect();
      const pw = pill.offsetWidth;
      const ph = pill.offsetHeight;
      setPos((prev) => ({
        x: prev.x !== null ? Math.min(prev.x, cr.width  - pw - 8) : null,
        y: prev.y !== null ? Math.min(prev.y, cr.height - ph - 8) : null,
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef]);

  const startDrag = (clientX: number, clientY: number) => {
  setDrag(true);
  
  let currentX = pos.x;
  let currentY = pos.y;
  
  // If pos hasn't been initialized yet (was null), compute it now
  if (currentX === null || currentY === null) {
    const container = containerRef.current;
    const pill = pillRef.current;
    if (container && pill) {
      const cr = container.getBoundingClientRect();
      const pw = pill.offsetWidth || 90;
      const ph = pill.offsetHeight || 36;
      currentX = Math.min((parseFloat(hobby.left) / 100) * cr.width, cr.width - pw - 8);
      currentY = Math.min((parseFloat(hobby.top) / 100) * cr.height, cr.height - ph - 8);
      setPos({ x: currentX, y: currentY });
    } else {
      return;
    }
  }
  
  offset.current = { x: clientX - currentX, y: clientY - currentY };
};

  useEffect(() => {
    if (!dragging) return;
    const container = containerRef.current;
    const pill = pillRef.current;
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
    const stop = () => setDrag(false);
    window.addEventListener("mousemove", onMM);
    window.addEventListener("mouseup", stop);
    return () => {
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragging, containerRef]);

  useEffect(() => {
    const pill = pillRef.current;
    const container = containerRef.current;
    if (!pill || !container) return;
    const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);
    const onTouchStart = (e: TouchEvent) => {
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const cr = container.getBoundingClientRect();
      const pr = pill.getBoundingClientRect();
      setPos({
        x: clamp(e.touches[0].clientX - offset.current.x, 0, cr.width  - pr.width),
        y: clamp(e.touches[0].clientY - offset.current.y, 0, cr.height - pr.height),
      });
    };
    const onTouchEnd = () => setDrag(false);
    pill.addEventListener("touchstart",  onTouchStart, { passive: true });
    pill.addEventListener("touchmove",   onTouchMove,  { passive: false });
    pill.addEventListener("touchend",    onTouchEnd);
    return () => {
      pill.removeEventListener("touchstart",  onTouchStart);
      pill.removeEventListener("touchmove",   onTouchMove);
      pill.removeEventListener("touchend",    onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return (
    <div
      ref={pillRef}
      onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
      className={`
        inline-flex items-center gap-2 px-4 py-2 absolute select-none touch-none
        rounded-full text-sm font-semibold
        transition-all duration-200
        ${dragging
          ? "cursor-grabbing scale-110 z-20 border border-emerald-300/70 bg-emerald-400/20 text-white shadow-[0_0_28px_rgba(52,211,153,0.65),0_8px_24px_rgba(0,0,0,0.5)]"
          : "cursor-grab z-10 border border-white/10 bg-white/[0.04] backdrop-blur-md text-white/70 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-white hover:shadow-[0_0_18px_rgba(52,211,153,0.3)] hover:scale-105"
        }
      `}
      style={{
        left: pos.x ?? hobby.left,
        top:  pos.y ?? hobby.top,
        transition: dragging ? "none" : "transform 0.2s, box-shadow 0.2s, border-color 0.2s, background 0.2s",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <span className="text-base leading-none">{hobby.emoji}</span>
      <span className="tracking-wide">{hobby.title}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export const AboutSection = () => {
  const [ripple, setRipple] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const t = setInterval(() => setRipple((p) => p + 1), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Google Font: Syne ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .syne { font-family: 'Syne', sans-serif; }

        /* Animated gradient border via conic-gradient pseudo-element */
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin-border {
          to { --angle: 360deg; }
        }
        .animated-border {
          position: relative;
        }
        .animated-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(
            from var(--angle),
            transparent 0%,
            rgba(52,211,153,0.6) 10%,
            transparent 20%
          );
          animation: spin-border 4s linear infinite;
          z-index: 0;
        }
        .animated-border > * { position: relative; z-index: 1; }
        /* Shimmer line top-of-card */
        .card-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.6) 50%, transparent 100%);
          border-radius: inherit;
          pointer-events: none;
        }
        /* Inner glow on hover */
        .card-glow {
          transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.35s cubic-bezier(.22,1,.36,1);
        }
        .card-glow:hover {
          box-shadow:
            0 0 0 1px rgba(52,211,153,0.12) inset,
            0 24px 60px rgba(0,0,0,0.4),
            0 0 40px rgba(52,211,153,0.08);
          transform: translateY(-3px);
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(4.5); opacity: 0;   }
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(20px, 15px); }
        }
      `}</style>

      <section id="about" className="py-16 lg:py-24 relative overflow-hidden">

        {/* ── Ambient background orbs ── */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
            animation: "float-orb 14s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            animation: "float-orb 18s ease-in-out infinite reverse",
          }}
        />

        <div className="container px-4 relative z-10">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do,"
          />

          <div className="mt-14 flex flex-col gap-4">

            {/* ── ROW 1 ── */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-3">

              {/* ── Inspiration Card ── */}
              <Card className="
                group md:col-span-2 lg:col-span-1
                overflow-hidden p-0 min-h-[220px]
                border border-white/[0.08]
                hover:border-emerald-400/30
                card-shimmer card-glow
                bg-gradient-to-br from-white/[0.03] via-transparent to-transparent
                relative rounded-[20px]
              ">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent z-10" />

                <div className="flex h-full min-h-[220px]">
                  {/* Image */}
                  <div className="relative w-[130px] shrink-0 self-stretch overflow-hidden">
                    <Image
                      src={virat}
                      alt="Virat Kohli"
                      fill
                      className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-950/90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center px-5 py-6 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                        My Inspiration
                      </span>
                    </div>

                    <p className="syne text-white font-extrabold text-[22px] leading-[1.1]">
                      Virat<br/>Kohli
                    </p>

                    <p className="text-white/38 text-[11.5px] leading-relaxed font-light">
                      More than a cricketer — my idol and proof that discipline
                      and self-belief can move mountains.
                    </p>

                    {/* Quote */}
                    <div className="flex items-start gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2.5">
                      <span className="text-emerald-400 text-xl leading-none font-serif">&ldquo;</span>
                      <p className="text-emerald-200/55 text-[10.5px] leading-relaxed italic font-light">
                        Believe in yourself and the rest falls into place.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* ── GitHub Heatmap Card ── */}
              <Card className="
                group h-[220px] p-0 flex flex-col
                md:col-span-3 lg:col-span-2
                overflow-hidden
                border border-white/[0.08]
                hover:border-emerald-400/30
                card-shimmer card-glow
                bg-gradient-to-br from-white/[0.03] via-transparent to-transparent
                relative rounded-[20px]
              ">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent z-10" />
                <GitHubHeatmap username="M-Dharani18" />
              </Card>
            </div>

            {/* ── ROW 2 ── */}
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 w-full">

              {/* ── Beyond the Code ── */}
              <Card className="
                group p-0 flex flex-col
                col-span-1 md:col-span-3 lg:col-span-2
                overflow-hidden
                border border-white/[0.08]
                hover:border-emerald-400/30
                card-shimmer card-glow
                bg-gradient-to-br from-white/[0.03] via-transparent to-transparent
                relative rounded-[20px]
              ">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent z-10" />

                {/* Header */}
                <div className="flex items-start justify-between px-6 pt-5 pb-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                        Beyond the Code
                      </span>
                    </div>
                    <p className="text-white/30 text-[11.5px] font-light">
                      Explore my interests and hobbies outside of programming
                    </p>
                  </div>

                  {/* Drag hint */}
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/08 bg-white/[0.025] shrink-0">
                    <svg className="w-2.5 h-2.5 text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
                    </svg>
                    <span className="text-white/25 text-[9px] tracking-wide">drag to play</span>
                  </div>
                </div>

                {/* ── MOBILE: clean 2-col grid ── */}
                <div className="sm:hidden px-4 pb-5">
                  <div className="grid grid-cols-2 gap-2.5">
                    {hobbies.map((hobby) => (
                      <div
                        key={hobby.title}
                        className="
                          flex items-center gap-2.5 px-4 py-3
                          rounded-2xl border border-white/10 bg-white/[0.04]
                          backdrop-blur-md
                        "
                      >
                        <span className="text-lg leading-none shrink-0">{hobby.emoji}</span>
                        <span className="text-[13px] font-semibold text-white/70 tracking-wide truncate">
                          {hobby.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── DESKTOP: draggable arena ── */}
                <div
                  className="relative hidden sm:block h-[220px] md:h-[180px] overflow-hidden mx-3 mb-3 rounded-2xl"
                  style={{ background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.05)" }}
                  ref={containerRef}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.05)_0%,transparent_70%)] pointer-events-none" />
                  {hobbies.map((hobby) => (
                    <DraggablePill
                      key={hobby.title}
                      hobby={hobby}
                      containerRef={containerRef}
                    />
                  ))}
                </div>
              </Card>

              {/* ── Map Card ── */}
              <Card className="
                h-[240px] p-0 relative
                col-span-1 md:col-span-2 lg:col-span-1
                overflow-hidden group w-full mx-0
                border border-white/[0.08]
                hover:border-emerald-400/30
                card-shimmer card-glow
                rounded-[20px]
              ">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent z-10" />

                {/* Map image */}
                <Image
                  src={mapImage}
                  alt="Location map"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 opacity-50 group-hover:opacity-70"
                />

                {/* Grid overlay for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(52,211,153,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(52,211,153,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Dark gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/15 to-transparent" />

                {/* Ripple + emoji pin */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  {/* Extra ring for more depth */}
                  <div
                    key={ripple + 3000}
                    className="absolute rounded-full border border-emerald-400/15"
                    style={{
                      width: "80px", height: "80px",
                      top: "-10px", left: "-10px",
                      animation: "ripple 2.2s ease-out 0.8s forwards",
                    }}
                  />
                  <div key={ripple}        className="absolute inset-0 rounded-full bg-emerald-400/30" style={{ animation: "ripple 1.8s ease-out forwards" }} />
                  <div key={ripple + 1000} className="absolute inset-0 rounded-full bg-emerald-400/20" style={{ animation: "ripple 1.8s ease-out 0.35s forwards" }} />
                  <div key={ripple + 2000} className="absolute inset-0 rounded-full bg-emerald-400/10" style={{ animation: "ripple 1.8s ease-out 0.65s forwards" }} />
                  <Image
                    src={smileEmoji}
                    alt="Memoji"
                    width={60}
                    height={60}
                    className="relative z-10 drop-shadow-xl"
                  />
                </div>

                {/* Location label */}
                <div className="absolute bottom-4 left-5 z-10">
                  <p className="text-[8.5px] uppercase tracking-[0.22em] text-emerald-400/70 font-bold mb-0.5">
                    Based In
                  </p>
                  <p className="syne text-white font-extrabold text-[17px] tracking-wide leading-tight">
                    Salem
                  </p>
                  <p className="text-white/35 text-[11px] font-light mt-0.5">Tamil Nadu, India</p>
                  {/* Coordinates */}
                  
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};