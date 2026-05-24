"use client";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

/* ── Icons ── */
const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);


const LinkedInIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" strokeWidth={1.8} />
  </svg>
);

const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

/* ── Data ── */
const socialCards = [
  {
    key: "email",
    icon: <MailIcon size={15} />,
    name: "Email",
    handle: "dharani18.nex@gmail.com",
    href: "mailto:dharani18.nex@gmail.com",
    iconBg: "rgba(110,231,183,0.12)",
    iconColor: "#6ee7b7",
    hoverBorder: "rgba(110,231,183,0.4)",
    hoverShadow: "0 8px 32px rgba(110,231,183,0.10)",
    arrowColor: "#6ee7b7",
  },
  {
    key: "linkedin",
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    handle: "dharani-m",
    href: "https://linkedin.com/in/dharani-m-a417812b8",
    iconBg: "rgba(56,189,248,0.12)",
    iconColor: "#38bdf8",
    hoverBorder: "rgba(56,189,248,0.4)",
    hoverShadow: "0 8px 32px rgba(56,189,248,0.10)",
    arrowColor: "#38bdf8",
  },
  {
    key: "github",
    icon: <GitHubIcon />,
    name: "GitHub",
    handle: "M-Dharani18",
    href: "https://github.com/M-Dharani18",
    iconBg: "rgba(255,255,255,0.07)",
    iconColor: "rgba(255,255,255,0.75)",
    hoverBorder: "rgba(255,255,255,0.25)",
    hoverShadow: "0 8px 32px rgba(255,255,255,0.05)",
    arrowColor: "rgba(255,255,255,0.6)",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <AnimateOnScroll>

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs tracking-widest uppercase"
              style={{ borderColor: "rgba(110,231,183,0.25)", color: "#6ee7b7" }}
            >
              {/* Ping dot */}
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#6ee7b7", animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }}
                />
                <span
                  className="relative inline-flex rounded-full h-1.5 w-1.5"
                  style={{ background: "#6ee7b7" }}
                />
              </span>
              Get in Touch
            </span>
          </div>

          {/* ── Main card ── */}
          <div
            className="relative rounded-3xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(110,231,183,0.06) 0%, rgba(13,17,23,0.98) 40%, rgba(56,189,248,0.04) 100%)",
              border: "1px solid rgba(110,231,183,0.12)",
              paddingBottom: "52px", // space for the overlapping cards
            }}
          >
            {/* Top glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "320px",
                height: "120px",
                background:
                  "radial-gradient(ellipse, rgba(110,231,183,0.18) 0%, transparent 70%)",
                filter: "blur(10px)",
                borderRadius: "50%",
              }}
            />

            {/* Corner accents */}
            <div
              className="absolute"
              style={{
                top: 16, left: 16, width: 20, height: 20,
                borderTop: "1.5px solid rgba(110,231,183,0.5)",
                borderLeft: "1.5px solid rgba(110,231,183,0.5)",
                borderRadius: "4px 0 0 0",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: 16, right: 16, width: 20, height: 20,
                borderBottom: "1.5px solid rgba(110,231,183,0.5)",
                borderRight: "1.5px solid rgba(110,231,183,0.5)",
                borderRadius: "0 0 4px 0",
              }}
            />

            {/* Heading */}
            <div className="relative z-10 text-center pt-8 px-6 mb-6">
              <h2
                className="font-semibold text-white mb-3"
                style={{ fontSize: "clamp(28px,5vw,42px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Feel free to{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#6ee7b7,#38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  get in touch
                </span>
              </h2>
              <p
                className="text-sm max-w-sm mx-auto leading-relaxed"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Currently open to internships, freelance projects, full-time opportunities, and collaborative tech ventures.
              </p>
            </div>

            {/* ── Social cards — overlapping the bottom edge ── */}
            <div
              className="absolute left-1/2 -translate-x-1/2 flex gap-3"
              style={{ bottom: "-28px", zIndex: 20 }}
            >
              {socialCards.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-2xl px-4 py-3 transition-all duration-200"
                  style={{
                    background: "#131920",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = s.hoverBorder;
                    el.style.boxShadow = s.hoverShadow;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(255,255,255,0.10)";
                    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
                  }}
                >
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0"
                    style={{ background: s.iconBg, color: s.iconColor }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white leading-tight">
                      {s.name}
                    </p>
                    <p
                      className="text-xs leading-tight"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {s.handle}
                    </p>
                  </div>
                  <span
                    className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: s.arrowColor }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacer so overlapping cards don't get clipped */}
          <div style={{ height: "52px" }} />

        </AnimateOnScroll>
      </div>
    </section>
  );
};