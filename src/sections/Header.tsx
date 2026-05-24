"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);

    const sections = navItems.map((item) => ({
      label: item.label,
      element: document.querySelector(item.href),
    }));

    const scrollPosition = window.scrollY + 140;

    for (const section of sections) {
      if (!section.element) continue;

      const top = (section.element as HTMLElement).offsetTop;
      const height = (section.element as HTMLElement).offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        setActive(section.label);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav
        className={`nav-blur flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-[#0d1117]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#0d1117]/40 border-white/5"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="mr-4 px-3 py-1 font-['Clash Display'] text-lg gradient-text">
          DM
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === item.label
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-4 hidden md:inline-flex items-center gap-2 bg-white text-gray-950 text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#6ee7b7] transition-colors duration-200"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 nav-blur bg-[#0d1117]/95 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => { setMenuOpen(false); setActive(item.label); }}
              className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center bg-white text-gray-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6ee7b7] transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
