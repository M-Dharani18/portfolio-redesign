"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import profileImage from "@/assets/images/dhar.png";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(28px)";
      setTimeout(() => {
        (child as HTMLElement).style.transition = "opacity 0.9s ease, transform 0.9s ease";
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 150 + i * 130);
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Sparkles */}
      <div className="sparkle-1 absolute top-[18%] left-[8%] text-[#6ee7b7] text-xl pointer-events-none">✦</div>
      <div className="sparkle-2 absolute top-[25%] right-[12%] text-[#38bdf8] text-lg pointer-events-none">✦</div>
      <div className="sparkle-3 absolute bottom-[28%] left-[18%] text-[#6ee7b7] text-base pointer-events-none">✦</div>
      <div className="sparkle-1 absolute bottom-[20%] right-[8%] text-[#38bdf8] text-2xl pointer-events-none">✦</div>

      {/* Glow orb */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="glow-pulse w-[420px] h-[420px] rounded-full bg-[#6ee7b7]/10 blur-3xl" />
      </div>

      {/* Ring decorations around memoji */}
      <div className="absolute left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        {[260, 360, 460].map((size, i) => (
          <div
            key={size}
            className={`absolute top-1/2 left-1/2 rounded-full border border-[#6ee7b7] ${i % 2 === 0 ? "ring-spin" : "ring-spin-reverse"}`}
            style={{
              width: size,
              height: size,
              opacity: i === 0 ? 0.08 : i === 1 ? 0.05 : 0.03,
            }}
          />
        ))}
      </div>

      {/* Main layout */}
      <div
        ref={heroRef}
        className="container relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0 pb-20 min-h-[80vh]"
      >
        {/* LEFT — Memoji */}
        <div className="flex flex-col items-center lg:items-start lg:w-[38%]">
          {/* Hello callout */}
          <div data-animate className="relative mb-6 hidden lg:flex flex-col items-start">
            <div className="bg-[#0d1117]/80 border border-white/10 rounded-2xl px-4 py-2 text-sm text-white/70 font-medium backdrop-blur-sm">
              Hello! I Am{" "}
              <span className="gradient-text font-semibold">Dharani M</span>
            </div>
            {/* Arrow svg pointing down-right toward memoji */}
            <svg
              className="ml-6 mt-1 text-white/20"
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
            >
              <path
                d="M4 2 Q6 18 22 28"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M16 26 L22 28 L20 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Memoji */}
          <div data-animate className="float-anim">
            <div className="relative inline-block">
              <Image
                src={profileImage}
                alt="Dharani"
                width={260}
                height={260}
                className="relative z-10 rounded-full border-2 border-[#6ee7b7]/40 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Available badge — mobile only */}
          <div data-animate className="lg:hidden mt-4 inline-flex items-center gap-3 bg-[#0d1117] border border-white/10 rounded-full px-5 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-white/80 font-medium">Available for new projects</span>
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[58%] gap-5">

          {/* Available badge — desktop */}
          <div data-animate className="hidden lg:inline-flex items-center gap-3 bg-[#0d1117] border border-white/10 rounded-full px-5 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-white/80 font-medium">Available for new projects</span>
          </div>

          {/* Small label */}
          <p data-animate className="text-white/40 text-sm tracking-widest uppercase font-light">
            A developer who
          </p>

         {/* Big quote headline */}
<h1
  data-animate
  className="font-['Clash Display'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white"
>
  Judges 
  <br />
  <span className="relative inline-block">
    <span className="gradient-text">UI</span>

    {/* Underline oval accent */}
    <svg
      className="absolute -bottom-2 left-0 w-full"
      viewBox="0 0 120 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="60"
        cy="7"
        rx="58"
        ry="5"
        stroke="url(#grad)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="120" y2="0">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  </span>{" "}
  before code...
</h1>

{/* Tagline */}
<p
  data-animate
  className="text-white/50 text-sm md:text-base max-w-md leading-relaxed"
>
  Because users don&apos;t read your functions, they feel your interface.
</p>
          {/* Sub description */}
          <p data-animate className="text-white/40 text-sm max-w-md leading-relaxed">
            I design with a developer’s mindset and develop with a designer’s eye. CS & Design student at KEC crafting purposeful full-stack applications.
          </p>

          {/* CTAs */}
          <div data-animate className="flex flex-wrap gap-4 justify-center lg:justify-start pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/20 text-white/90 px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            >
              Explore My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-950 px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#6ee7b7] transition-colors duration-200 shadow-[0_0_30px_rgba(110,231,183,0.3)]"
            >
              <span>👋</span>
              Let&apos;s Connect
            </a>
          </div>

          {/* Resume download */}
          <div data-animate>
            <a
              href="/Dharani_Resume.pdf"
              download="Dharani_M_Resume.pdf"
              className="inline-flex items-center gap-2 text-white/30 hover:text-[#6ee7b7] transition-colors duration-200 text-sm group"
            >
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};