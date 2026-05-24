export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#hero" className="font-['Clash Display'] text-xl gradient-text">Dharani M</a>
          <div className="flex items-center gap-6">
            {[
              { label: "YouTube", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "https://linkedin.com/in/dharani-m" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-white/20 text-sm">&copy; {year} Dharani M</p>
        </div>
      </div>
    </footer>
  );
};
