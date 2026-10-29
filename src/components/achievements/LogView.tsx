import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { isHighlight, sortedEntries, TYPE_LABELS, type EntryType } from "@/data/achievements";
import EntryBody from "./EntryBody";
import { EASE } from "../Reveal";
import { cn } from "@/lib/utils";

const FILTERS: ("all" | EntryType)[] = ["all", "hackathon", "organized", "learning"];

const LogView = () => {
  const [filter, setFilter] = useState<"all" | EntryType>("all");
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  // Deep link: /achievements#slug opens that entry (ScrollManager handles the scroll).
  useEffect(() => {
    const slug = decodeURIComponent(window.location.hash.slice(1));
    if (!slug || !sortedEntries.some((e) => e.slug === slug)) return;
    setOpen(new Set([slug]));
  }, []);

  const toggle = (slug: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  const byYear = useMemo(() => {
    const list = sortedEntries.filter((e) => filter === "all" || e.type === filter);
    const groups = new Map<string, typeof list>();
    for (const e of list) {
      const y = e.date.slice(0, 4);
      groups.set(y, [...(groups.get(y) ?? []), e]);
    }
    return [...groups.entries()];
  }, [filter]);

  return (
    <div>
      <div role="group" aria-label="Filter by type" className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === f ? "border-ink bg-ink text-paper" : "border-line text-ink-2 hover:border-ink hover:text-ink",
            )}
          >
            {f === "all" ? "All" : TYPE_LABELS[f]}
          </button>
        ))}
      </div>

      {byYear.map(([year, list]) => (
        <section key={year} className="mb-14 grid gap-4 md:grid-cols-[8rem_1fr]" aria-labelledby={`y-${year}`}>
          <h2 id={`y-${year}`} className="font-serif text-5xl leading-none text-ink-2 md:sticky md:top-24 md:self-start md:text-6xl">
            {year}
          </h2>
          <ol className="border-t border-line">
            {list.map((e) => {
              const isOpen = open.has(e.slug);
              return (
                <li key={e.slug} id={e.slug} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(e.slug)}
                      aria-expanded={isOpen}
                      aria-controls={`d-${e.slug}`}
                      className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1 py-5 text-left md:grid-cols-[7.5rem_1fr_auto_auto] md:items-baseline"
                    >
                      <span className="order-2 col-span-2 font-mono text-xs text-ink-2 md:order-none md:col-span-1">{e.when}</span>
                      <span className="order-1 md:order-none">
                        <span className="block text-lg leading-snug transition-colors group-hover:text-accent md:text-xl">{e.title}</span>
                        <span className="mt-0.5 block text-sm text-ink-2">{e.org}</span>
                      </span>
                      <span
                        className={cn(
                          "hidden max-w-[16rem] text-right font-mono text-[11px] uppercase leading-5 tracking-wider md:block",
                          isHighlight(e.result) ? "text-accent" : "text-ink-2",
                        )}
                      >
                        {e.result}
                      </span>
                      <span
                        className={cn(
                          "order-1 grid h-7 w-7 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-ink md:order-none",
                          isOpen && "rotate-45 border-ink bg-ink text-paper",
                        )}
                        aria-hidden
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`d-${e.slug}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 md:pl-[8.5rem]">
                          {e.result && <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent md:hidden">{e.result}</p>}
                          <EntryBody entry={e} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
};

export default LogView;
