import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { entries, isHighlight, sortedEntries } from "@/data/achievements";
import { cn } from "@/lib/utils";
import SectionHead from "../SectionHead";
import Reveal from "../Reveal";

const count = (type: string, year = "2026") => entries.filter((e) => e.type === type && e.date.startsWith(year)).length;

const LogTeaser = () => {
  const recent = sortedEntries.filter((e) => e.type !== "learning").slice(0, 5);

  return (
    <section id="log" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <SectionHead
          index="03"
          title="Hackathons"
          aside={
            <>
              {count("hackathon")} hackathons · {count("organized")} events organised · 2026
            </>
          }
        />

        <div>
          {recent.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.04}>
              <Link
                to={`/achievements#${e.slug}`}
                className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 border-b border-line py-4 md:grid-cols-[9rem_1fr_auto]"
              >
                <span className="font-mono text-xs text-ink-2">{e.when}</span>
                <span className="text-lg transition-colors group-hover:text-accent md:text-xl">
                  {e.title}
                  <span className="ml-2 hidden text-sm text-ink-2 md:inline">{e.org}</span>
                </span>
                {e.result && (
                  <span className={cn("text-right font-mono text-[11px] uppercase tracking-wider", isHighlight(e.result) ? "text-accent" : "text-ink-2")}>
                    {e.result}
                  </span>
                )}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            to="/achievements"
            className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            All achievements and certificates
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default LogTeaser;
