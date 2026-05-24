"use client";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import elder from "@/assets/images/elder.png";
import servicefinder from "@/assets/images/serviceFinder.png";
import ecommerce from "@/assets/images/ecommerce.png";

const projects = [
  {
    company: "Full-Stack Platform",
    year: "2024",
    title: "Local Service Finder",
    description: "A full-stack platform connecting users with nearby service providers. REST APIs using Spring Boot and Hibernate. Automated schema generation with MySQL ORM.",
    tech: ["React.js", "Tailwind CSS", "Spring Boot", "MySQL"],
    github: "https://github.com/M-Dharani18/localServiceFinder",
    image: servicefinder,
    results: [
      { label: "Full-stack implementation with REST APIs" },
      { label: "Real-time provider discovery system" },
      { label: "Automated schema with Hibernate ORM" },
    ],
  },
  {
    company: "MERN Application",
    year: "2024",
    title: "Elderly Care App",
    description: "Health monitoring platform connecting caregivers, doctors, and family members. Dashboards to track health metrics and enable communication.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/M-Dharani18/smart-medical-monitoring",
    image: elder,
    results: [
      { label: "Multi-role platform: caregivers, doctors, family" },
      { label: "Real-time health metric dashboards" },
      { label: "UI designed for non-technical users" },
    ],
  },
  {
    company: "Web Application",
    year: "2023",
    title: "URL Tracker",
    description: "URL shortening platform with real-time analytics tracking clicks and usage patterns. Interactive dashboards to visualize user data insights.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/M-Dharani18/URLShortenerApp",
    image: ecommerce,
    results: [
      { label: "Real-time analytics and click tracking" },
      { label: "Interactive data visualization dashboards" },
      { label: "Scalable URL management system" },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-18 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-16">
            <p className="gradient-text text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Real-World Results
            </p>
            <h2 className="font-['Clash Display'] text-4xl md:text-5xl text-white text-center">
              Featured Projects
            </h2>
            <p className="text-white/50 text-center mt-4 max-w-sm">
              See how I transformed concepts into engaging digital experiences.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <AnimateOnScroll key={project.title} delay={idx * 100}>
              <div className="card-glow overflow-hidden group">
                <div className="flex flex-col lg:flex-row">
                  {/* Left content */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#6ee7b7] text-xs font-bold uppercase tracking-widest">
                        {project.company}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-white/30 text-xs">{project.year}</span>
                    </div>
                    <h3 className="font-['Clash Display'] text-2xl md:text-3xl text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-col gap-2 mb-6">
                      {project.results.map((r) => (
                        <div key={r.label} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#6ee7b7] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white/60 text-sm">{r.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="skill-tag text-xs">{t}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm px-5 py-2.5 rounded-full hover:border-[#6ee7b7]/50 hover:text-[#6ee7b7] transition-all duration-200 group/btn"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                      </svg>
                      Visit on GitHub
                      <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>

                  {/* Right image */}
                  <div className="lg:w-[360px] relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-full object-cover object-left-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-[#0d1117] pointer-events-none" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
