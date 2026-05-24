'use client';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <a href="#hero" className="gradient-text text-xl font-bold tracking-wide">
            Dharani M
          </a>

          <p className="text-white/25 text-sm">
            Designed &amp; Built by Dharani M &copy; {year}
          </p>

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