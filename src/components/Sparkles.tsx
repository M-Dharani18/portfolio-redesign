/**
 * Reusable Sparkles Component
 * Add this to any section to get the sparkling effect
 * 
 * Usage:
 * <Sparkles />
 */
export const Sparkles = () => {
  return (
    <>
      {/* Decorative sparkle stars */}
      <div className="sparkle-1 absolute top-[20%] left-[12%] text-[#6ee7b7] text-2xl pointer-events-none">✦</div>
      <div className="sparkle-2 absolute top-[30%] right-[15%] text-[#38bdf8] text-xl pointer-events-none">✦</div>
      <div className="sparkle-3 absolute bottom-[30%] left-[20%] text-[#6ee7b7] text-lg pointer-events-none">✦</div>
      <div className="sparkle-1 absolute top-[60%] right-[10%] text-[#38bdf8] text-2xl pointer-events-none">✦</div>
    </>
  );
};
