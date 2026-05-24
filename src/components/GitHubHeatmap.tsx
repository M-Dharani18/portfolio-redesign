"use client";

import { useEffect, useState, useRef } from "react";

/* ── Types ── */
type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type Week = ContributionDay[];

/* ── Colour mapping (emerald → sky, matching the portfolio gradient) ── */
const LEVEL_COLORS = [
  "bg-white/5",              // 0 – empty
  "bg-emerald-400/30",       // 1 – low
  "bg-emerald-400/55",       // 2 – medium
  "bg-emerald-300/80",       // 3 – high
  "bg-sky-400",              // 4 – max
] as const;

const LEVEL_BG = [
  "rgba(255,255,255,0.05)",
  "rgba(52,211,153,0.30)",
  "rgba(52,211,153,0.55)",
  "rgba(110,231,183,0.80)",
  "rgb(56,189,248)",
] as const;

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/* ── Tooltip ── */
function Tooltip({ day, x, y }: { day: ContributionDay; x: number; y: number }) {
  return (
    <div
      className="pointer-events-none absolute z-50 px-2 py-1 rounded text-xs text-white bg-gray-900/90 border border-white/10 whitespace-nowrap"
      style={{ left: x + 10, top: y - 30 }}
    >
      <span className="font-semibold text-emerald-300">{day.count}</span>{" "}
      contribution{day.count !== 1 ? "s" : ""} on{" "}
      {new Date(day.date + "T00:00:00").toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
      })}
    </div>
  );
}

/* ── Main Heatmap Card ── */
export function GitHubHeatmap({ username = "M-Dharani18" }: { username?: string }) {
  const [weeks, setWeeks]   = useState<Week[]>([]);
  const [total, setTotal]   = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);
  const [tooltip, setTooltip] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res  = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("fetch failed");
        const json = await res.json();

        /* Build week buckets */
        const days: ContributionDay[] = json.contributions ?? [];
        const tot = days.reduce((s, d) => s + d.count, 0);
        setTotal(tot);

        /* Group into ISO weeks (Sun–Sat) */
        const buckets: Record<string, ContributionDay[]> = {};
        for (const d of days) {
          const dt   = new Date(d.date + "T00:00:00");
          const dow  = dt.getDay();                         // 0=Sun
          const sun  = new Date(dt);
          sun.setDate(dt.getDate() - dow);
          const key  = sun.toISOString().slice(0, 10);
          (buckets[key] = buckets[key] ?? []).push(d);
        }

        const weekArr = Object.keys(buckets)
          .sort()
          .map((k) => {
            const week: ContributionDay[] = Array.from({ length: 7 }, (_, i) => {
              const d = new Date(k + "T00:00:00");
              d.setDate(d.getDate() + i);
              const iso = d.toISOString().slice(0, 10);
              return buckets[k].find((x) => x.date === iso) ?? { date: iso, count: 0, level: 0 };
            });
            return week;
          });

        setWeeks(weekArr);
      } catch (e: unknown) {
        if (e instanceof Error && e.name !== "AbortError") setError(true);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [username]);

  /* Month labels: find first week whose first-day month changes */
  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const m = new Date(week[0].date + "T00:00:00").getMonth();
    if (m !== lastMonth) { monthLabels.push({ col, label: MONTHS[m] }); lastMonth = m; }
  });

  const CELL = 11;  // px per cell
  const GAP  = 2;   // px gap
  const STEP = CELL + GAP;

  return (
    <div className="h-full flex flex-col px-6 pt-8 pb-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-sm text-white/90 tracking-wide">GitHub Activity</h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-400 hover:text-sky-400 transition-colors"
          >
            @{username}
          </a>
        </div>
        {!loading && !error && (
          <span className="text-xs text-white/50">
            <span className="text-emerald-300 font-semibold">{total.toLocaleString()}</span> contributions · last year
          </span>
        )}
      </div>

      {/* Grid area */}
      <div ref={wrapRef} className="relative flex-1 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/40 text-sm animate-pulse">Loading contributions…</span>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/40 text-sm">Could not load contributions.</span>
          </div>
        )}

        {!loading && !error && weeks.length > 0 && (
          <div className="overflow-x-auto overflow-y-hidden pb-1">
            {/* Month labels */}
            <div className="relative mb-1" style={{ height: 14, width: weeks.length * STEP }}>
              {monthLabels.map(({ col, label }) => (
                <span
                  key={label + col}
                  className="absolute text-[10px] text-white/40"
                  style={{ left: col * STEP }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Cells: weeks as columns, days as rows */}
            <div
              className="flex gap-[2px]"
              onMouseLeave={() => setTooltip(null)}
            >
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[2px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className="rounded-[2px] transition-transform hover:scale-125 cursor-default"
                      style={{
                        width: CELL,
                        height: CELL,
                        background: LEVEL_BG[day.level],
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        const wrap = wrapRef.current;
                        if (!wrap) return;
                        const wr = wrap.getBoundingClientRect();
                        const tr = (e.target as HTMLDivElement).getBoundingClientRect();
                        setTooltip({ day, x: tr.left - wr.left, y: tr.top - wr.top });
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-1.5 mt-2 justify-end">
              <span className="text-[10px] text-white/30">Less</span>
              {LEVEL_BG.map((bg, i) => (
                <div
                  key={i}
                  className="rounded-[2px]"
                  style={{ width: CELL, height: CELL, background: bg, flexShrink: 0 }}
                />
              ))}
              <span className="text-[10px] text-white/30">More</span>
            </div>
          </div>
        )}

        {/* Tooltip */}
        {tooltip && <Tooltip {...tooltip} />}
      </div>
    </div>
  );
}