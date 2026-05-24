'use client';

import { Fragment } from "react/jsx-runtime";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Sparkles } from "@/components/Sparkles";

const achievements = [
  {
    icon: "🧩",
    metric: "280+",
    metricSub: "Leetcode Problems Solved",
    title: "LeetCode Problem Solver",
    desc: "Strengthened algorithmic problem-solving and data structure skills.",
    tag: "Competitive Programming",
    accent: "#6ee7b7",
  },

  {
    icon: "🏆",
    metric: "Top 50",
    metricSub: "College Level",
    title: "Smart India Hackathon 2025",
    desc: "Selected among the Top 50 teams at the college level in SIH 2025.",
    tag: "National Hackathon",
    accent: "#38bdf8",
  },

  {
    icon: "🥇",
    metric: "10+",
    metricSub: "Event Winner",
    title: "Technical Event Achievements",
    desc: "Won prizes across multiple technical events including coding, UI/UX design competitions.",
    tag: "Tech Competitions",
    accent: "#6ee7b7",
  },

  {
    icon: "📜",
    metric: "Top 1%",
    metricSub: "NPTEL",
    title: "Industry 4.0 Certification",
    desc: "Recognized as a Top 1% performer in the NPTEL course 'Introduction to Industry 4.0 and Industrial Internet of Things.'",
    tag: "Certification",
    accent: "#38bdf8",
  },

  {
    icon: "📊",
    metric: "2 x Academic Excellence",
    metricSub: "Dept. Rank",
    title: "Academic Excellence",
    desc: "Awarded the Academic Excellence Merit Scholarship consecutively for securing a position among the Top 5% of the department, with a current CGPA of 9.16/10.",
    tag: "Academics",
    accent: "#6ee7b7",
  },
];
export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 lg:py-30 relative overflow-hidden">
      <Sparkles /> {}
      <div className="container max-w-5xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-16">
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Recognition & Results
            </p>
            <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
              Achievements
            </h2>
            <p className="text-white/40 text-sm mt-3 text-center max-w-sm">
              Highlights from competitive programming, hackathons, and academics.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          {/* Carousel container — constrained to section width */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="flex gap-4"
              style={{
                width: "max-content",
                animation: "achievements-scroll 35s linear infinite",
              }}
            >
              {[0, 1].map((pass) => (
                <Fragment key={pass}>
                  {achievements.map((a, i) => (
                    <div
                      key={`${pass}-${i}`}
                      className="flex-shrink-0 rounded-xl p-6 relative overflow-hidden"
                      style={{
                        width: 260,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${a.accent}40`;
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[1.5px]"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${a.accent}80, transparent)`,
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-5"
                        style={{
                          background: `${a.accent}10`,
                          border: `1px solid ${a.accent}25`,
                        }}
                      >
                        {a.icon}
                      </div>

                      {/* Metric */}
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          className="font-['Clash Display'] text-2xl leading-none"
                          style={{ color: a.accent }}
                        >
                          {a.metric}
                        </span>
                        <span className="text-xs text-white/30">{a.metricSub}</span>
                      </div>

                      {/* Divider */}
                      <div
                        className="my-4 h-px"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      />

                      {/* Desc */}
                      <p className="text-[12.5px] text-white/50 leading-relaxed mb-4">
                        {a.desc}
                      </p>

                      {/* Tag */}
                      <span
                        className="inline-flex text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: `${a.accent}10`,
                          border: `1px solid ${a.accent}25`,
                          color: a.accent,
                        }}
                      >
                        {a.tag}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
        {/* Sparkles */}
      <style>{`
        @keyframes achievements-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};