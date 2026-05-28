
"use client";
import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const skills = [
  { name: "C",             slug: "c",                   color: "#A8B9CC", desc: "Systems programming" },
  { name: "C++",           slug: "cplusplus",           color: "#A8B9CC", desc: "Systems programming" },
  { name: "Java",          slug: "openjdk",             color: "#ED8B00", desc: "Primary language" },
  { name: "Python",        slug: "python",              color: "#3776AB", desc: "Scripting & ML" },
  { name: "HTML5",         slug: "html5",               color: "#E34F26", desc: "Markup & structure" },
  { name: "CSS3",          slug: "css3",                color: "#1572B6", desc: "Styling & layout" },
  { name: "JavaScript",    slug: "javascript",          color: "#F7DF1E", desc: "Core web scripting" },
  { name: "React",         slug: "react",               color: "#61DAFB", desc: "UI library" },
  { name: "Spring Boot",   slug: "springboot",          color: "#6DB33F", desc: "Java web framework" },
  { name: "MySQL",         slug: "mysql",               color: "#4479A1", desc: "Relational database" },
  { name: "MongoDB",       slug: "mongodb",             color: "#47A248", desc: "NoSQL database" },
  { name: "Git",           slug: "git",                 color: "#F05032", desc: "Version control" },
  { name: "IntelliJ",      slug: "intellijidea",        color: "#FE315D", desc: "Java IDE" },
  { name: "Figma",         slug: "figma",               color: "#F24E1E", desc: "UI & prototyping" },
  { name: "Framer",        slug: "framer",              color: "#0055FF", desc: "Motion & web design" },
  { name: "Illustrator",   slug: "adobeillustrator",    color: "#FF9A00", desc: "Vector graphics" },
  { name: "Webflow",       slug: "webflow",             color: "#4353FF", desc: "No-code web builder" },
  { name: "GitHub",        slug: "github",              color: "#e2e8f0", desc: "Code hosting" },
  { name: "Node.js",       slug: "nodedotjs",           color: "#339933", desc: "JS runtime" },
];

const CATEGORIES = [
  { key: "all",    label: "All Skills",  color: "#6ee7b7" },
  {
    key: "lang", label: "Languages", color: "#a78bfa", desc: "Logic first. Syntax second.",
    slugs: ["c","cplusplus","openjdk","python"],
    primary: "openjdk",
  },
  {
    key: "web", label: "Web", color: "#6ee7b7",
    slugs: ["html5","css3","javascript","react","springboot","nodedotjs","typescript","tailwindcss","vite","redux","sass","nextdotjs","graphql"],
    primary: "springboot",
  },
  {
    key: "db", label: "DB & Tools", color: "#fb923c",
    slugs: ["mysql","mongodb","git","intellijidea","github","docker","postgresql","firebase","linux","visualstudiocode"],
    primary: "mysql",
  },
  {
    key: "design", label: "Design", color: "#f472b6",desc: "Blending creativity with usability",
    slugs: ["figma","framer","adobeillustrator","webflow"],
    primary: "figma",
  },
];

const SOFT_SKILLS = ["User-Centric Thinking", "Collaboration", "Attention to Detail","Clarity in Communication"];

type Skill = { name: string; slug: string; color: string; desc: string };

// ─── Fibonacci sphere ────────────────────────────────────────────────────────
function fibonacciSphere(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return {
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    };
  });
}

// ─── Icon Sphere (All Skills) ────────────────────────────────────────────────
function IconSphere({ skillList }: { skillList: Skill[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const rot = useRef({ x: 0.3, y: 0 });
  const vel = useRef({ x: 0.0005, y: 0.0008 });
  const drag = useRef({ on: false, lx: 0, ly: 0 });
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const positions = useRef(fibonacciSphere(skillList.length));
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => { positions.current = fibonacciSphere(skillList.length); }, [skillList.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const radius = () => Math.min(el.offsetWidth, el.offsetHeight) * 0.30;

    function tick() {
      const r = radius();
      const { x: rx, y: ry } = rot.current;
      const cx = Math.cos(rx), sx = Math.sin(rx);
      const cy = Math.cos(ry), sy = Math.sin(ry);
      const projected = positions.current.map((p, i) => {
        const x1 = p.x * cy - p.z * sy;
        const z1 = p.x * sy + p.z * cy;
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        return { px: x1 * r, py: y2 * r, z: z2, i };
      });
      projected.sort((a, b) => a.z - b.z);
      projected.forEach(({ px, py, z, i }) => {
        const node = itemsRef.current[i];
        if (!node) return;
        const d = (z + 1) / 2;
        node.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px) scale(${(0.4 + d * 0.65).toFixed(3)})`;
        node.style.opacity = (0.12 + d * 0.88).toFixed(3);
        node.style.zIndex = String(Math.round(d * 999));
        const blur = d < 0.3 ? ((0.3 - d) * 8).toFixed(1) : "0";
        node.style.filter = parseFloat(blur) > 0 ? `blur(${blur}px)` : "none";
        node.style.pointerEvents = d > 0.45 ? "auto" : "none";
      });
      if (!drag.current.on) {
  rot.current.x += 0.001;
  rot.current.y += 0.003;
}
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    const mm = (e: MouseEvent) => {
      const rc = el.getBoundingClientRect();
      mouse.current = { x: (e.clientX - rc.left) / rc.width, y: (e.clientY - rc.top) / rc.height };
      if (drag.current.on) {
        rot.current.y += (e.clientX - drag.current.lx) * 0.001;
        rot.current.x += (e.clientY - drag.current.ly) * 0.001;
        drag.current.lx = e.clientX; drag.current.ly = e.clientY;
      }
    };
    const md = (e: MouseEvent) => { drag.current = { on: true, lx: e.clientX, ly: e.clientY }; el.style.cursor = "grabbing"; };
    const mu = () => { drag.current.on = false; el.style.cursor = "grab"; };
    const tm = (e: TouchEvent) => {
      const t = e.touches[0], rc = el.getBoundingClientRect();
      mouse.current = { x: (t.clientX - rc.left) / rc.width, y: (t.clientY - rc.top) / rc.height };
      if (drag.current.on) { rot.current.y += (t.clientX - drag.current.lx) * 0.006; rot.current.x += (t.clientY - drag.current.ly) * 0.006; drag.current.lx = t.clientX; drag.current.ly = t.clientY; }
    };
    const ts = (e: TouchEvent) => { drag.current = { on: true, lx: e.touches[0].clientX, ly: e.touches[0].clientY }; };
    const te = () => { drag.current.on = false; };

    el.addEventListener("mousemove", mm as EventListener);
    el.addEventListener("mousedown", md as EventListener);
    window.addEventListener("mouseup", mu);
    el.addEventListener("touchmove", tm as EventListener, { passive: true });
    el.addEventListener("touchstart", ts as EventListener, { passive: true });
    el.addEventListener("touchend", te);
    return () => {
      cancelAnimationFrame(rafRef.current!);
      el.removeEventListener("mousemove", mm as EventListener);
      el.removeEventListener("mousedown", md as EventListener);
      window.removeEventListener("mouseup", mu);
      el.removeEventListener("touchmove", tm as EventListener);
      el.removeEventListener("touchstart", ts as EventListener);
      el.removeEventListener("touchend", te);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "450px", cursor: "grab", userSelect: "none", overflow: "hidden" , display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(110,231,183,0.05) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", top: "40%", left: "50%", width: 0, height: 0 }}>
        {skillList.map((skill, i) => (
          <div
            key={skill.slug + i}
            ref={(el) => { itemsRef.current[i] = el; }}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "absolute", willChange: "transform, opacity, filter", transform: "translate(0,0)", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}
          >
            <div
              style={{
                width: "58px", height: "58px", borderRadius: "16px",
                background: `${skill.color}18`,
                border: `1.5px solid ${skill.color}38`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${skill.color}90`; e.currentTarget.style.background = `${skill.color}30`; e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}38`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${skill.color}38`; e.currentTarget.style.background = `${skill.color}18`; e.currentTarget.style.boxShadow = "none"; }}
            >
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace("#", "")}`}
                alt={skill.name} width={28} height={28}
                style={{ objectFit: "contain", display: "block", pointerEvents: "none" }}
                draggable={false}
                onError={(e) => { e.currentTarget.outerHTML = `<span style="font-size:11px;font-weight:700;color:${skill.color}">${skill.name.slice(0,2).toUpperCase()}</span>`; }}
              />
            </div>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap", fontWeight: 500 }}>{skill.name}</span>
          </div>
        ))}
      </div>
      <div style={{
        position: "absolute",bottom: "3px", left: "55%", transform: "translateX(-50%)",
        padding: "3px 18px", borderRadius: "9999px",
        background: hovered ? "rgba(255,255,255,0.08)" : "transparent",
        border: hovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
        color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
        fontSize: hovered ? "13px" : "10px", fontWeight: hovered ? 500 : 400,
        letterSpacing: hovered ? "0.02em" : "0.1em",
        textTransform: hovered ? "none" : "uppercase",
        pointerEvents: "none", transition: "all 0.2s", whiteSpace: "nowrap",
        backdropFilter: hovered ? "blur(8px)" : "none",
      }}>
        {hovered || "drag to spin · hover to inspect"}
      </div>
    </div>
  );
}

// ─── Skill Icon helper ────────────────────────────────────────────────────────
function SkillIcon({ skill, size = 32 }: { skill: Skill; size?: number }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace("#", "")}`}
      alt={skill.name}
      width={size} height={size}
      style={{ objectFit: "contain", display: "block" }}
      draggable={false}
      onError={(e) => {
        e.currentTarget.outerHTML = `<span style="font-size:${Math.round(size * 0.4)}px;font-weight:700;color:${skill.color}">${skill.name.slice(0, 2).toUpperCase()}</span>`;
      }}
    />
  );
}

// ─── Bento Grid (filtered categories) ────────────────────────────────────────
function BentoGrid({ skillList, primarySlug, accentColor }: { skillList: Skill[]; primarySlug: string; accentColor: string }) {
  const primary = skillList.find(s => s.slug === primarySlug) ?? skillList[0];
  const rest = skillList.filter(s => s.slug !== primary.slug);

  // Decide column count for secondary cards
  const cols = rest.length <= 3 ? rest.length : rest.length <= 6 ? 3 : 4;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px" }}>

      {/* ── Primary hero card ── */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "20px",
          padding: "24px 28px",
          borderRadius: "18px",
          border: `1px solid ${primary.color}30`,
          background: `linear-gradient(135deg, ${primary.color}12 0%, ${primary.color}06 100%)`,
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Background glow blob */}
        <div style={{
          position: "absolute", right: "-40px", top: "-40px",
          width: "160px", height: "160px", borderRadius: "50%",
          background: `${primary.color}18`, pointerEvents: "none",
        }} />
        {/* Icon */}
        <div style={{
          width: "72px", height: "72px", borderRadius: "20px", flexShrink: 0,
          background: `${primary.color}20`,
          border: `1.5px solid ${primary.color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <SkillIcon skill={primary} size={38} />
        </div>
        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#fff" }}>{primary.name}</span>
            <span style={{
              fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px",
              background: `${primary.color}25`, color: primary.color,
              border: `1px solid ${primary.color}40`, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>Primary</span>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>{primary.desc}</p>
        </div>
      </div>

      {/* ── Secondary cards grid ── */}
      {rest.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "10px",
        }}>
          {rest.map((skill) => (
            <div
              key={skill.slug}
              style={{
                padding: "16px",
                borderRadius: "14px",
                border: `1px solid ${skill.color}22`,
                background: `${skill.color}08`,
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "10px", textAlign: "center",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}50`;
                (e.currentTarget as HTMLDivElement).style.background = `${skill.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}22`;
                (e.currentTarget as HTMLDivElement).style.background = `${skill.color}08`;
              }}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: `${skill.color}18`,
                border: `1.5px solid ${skill.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <SkillIcon skill={skill} size={26} />
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: "2px" }}>{skill.name}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{skill.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export const SkillsSection = () => {
  const [activeKey, setActiveKey] = useState("all");
  const activeCat = CATEGORIES.find(c => c.key === activeKey)!;
  const visibleSkills = activeKey === "all"
    ? skills
    : skills.filter(s => activeCat.slugs?.includes(s.slug));

  return (
    <section id="skills" className="py-12 lg:py-16">
      <div className="container max-w-5xl mx-auto px-4">

        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-14">
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">Technical Proficiency</p>
            <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">Skills & Expertise</h2>
            <p className="text-white/50 text-center mt-4 max-w-sm">
              An interactive 3D sphere of every technology I work with — drag to explore.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category filter */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(({ key, label, color, desc }) => {
                const active = activeKey === key;
                return (
                  <button key={key} onClick={() => setActiveKey(key)} style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "7px 18px", borderRadius: "9999px",
                    border: `1px solid ${active ? color + "70" : "rgba(255,255,255,0.1)"}`,
                    background: active ? `${color}15` : "transparent",
                    color: active ? color : "rgba(255,255,255,0.4)",
                    fontSize: "13px", fontWeight: 500, cursor: "pointer",
                    transition: "all 0.2s", letterSpacing: "0.02em",
                  }} title={desc}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: active ? color : "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0 }} />
                    {label}
                  </button>
                );
              })}
            </div>
            
          </div>
        </AnimateOnScroll>

        {/* Main card */}
        <AnimateOnScroll>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: activeKey === "all" ? "1.5fr 0.7fr" : "1fr",
          gap: "16px",
          alignItems: "stretch",
        }}
        className="skills-main-grid"
      >
        <style>{`
          @media (max-width: 767px) {
            .skills-main-grid {
              grid-template-columns: 1fr !important;
            }
            .skills-stats-side {
              display: none !important;
            }
          }
        `}</style>
        {/* Sphere Card */}
        <div
          className="card-glow"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.07)",
            background:
              "linear-gradient(145deg, rgba(110,231,183,0.03) 0%, rgba(56,189,248,0.02) 100%)",
            overflow: "hidden",
            position: "relative",
            minHeight: "380px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(110,231,183,0.4), transparent)",
              pointerEvents: "none",
            }}
          />

          {activeKey === "all" ? (
            <IconSphere skillList={visibleSkills} />
          ) : (
            <BentoGrid
              key={activeKey}
              skillList={visibleSkills}
              primarySlug={activeCat.primary ?? visibleSkills[0].slug}
              accentColor={activeCat.color}
            />
          )}

          {/* Category description at bottom */}
          {activeKey !== "all" && (
            <div
              style={{
                padding: "16px 24px",
                borderTop: `1px solid rgba(255,255,255,0.05)`,
                background: "rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                }}
              >
                {CATEGORIES.find(c => c.key === activeKey)?.desc || ""}
              </p>
            </div>
          )}
        </div>

        {/* Stats Side */}
        {activeKey === "all" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            className="skills-stats-side"
          >
            {[
              { label: "Languages", count: 4, color: "#a78bfa" },
              { label: "Web Tech", count: 6, color: "#6ee7b7" },
              { label: "DB & Tools", count: 5, color: "#fb923c" },
              { label: "Design", count: 4, color: "#f472b6" },
            ].map(({ label, count, color }) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  padding: "20px",
                  borderRadius: "18px",
                  border: `1px solid ${color}22`,
                  background: `${color}08`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color,
                    lineHeight: 1,
                  }}
                >
                  {count}
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimateOnScroll>


        {/* Soft skills */}
        <AnimateOnScroll>
          <div className="card-glow p-6 mt-6" style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-4">Soft Skills</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SOFT_SKILLS.map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                  style={{ background: "rgba(110,231,183,0.08)", border: "1px solid rgba(110,231,183,0.2)", color: "#6ee7b7" }}>
                  <span style={{ fontSize: "10px" }}>✦</span>{s}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};