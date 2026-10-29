import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { moreProjects, projects } from "@/data/projects";
import SectionHead from "../SectionHead";
import Reveal, { EASE } from "../Reveal";
import { cn } from "@/lib/utils";

const ExtLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-1 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-ink"
  >
    {children}
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
  </a>
);

const Work = () => {
  const [open, setOpen] = useState<string | null>(projects[0].slug);

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <SectionHead index="01" title="Projects" />

        <ol>
          {projects.map((p, i) => {
            const isOpen = open === p.slug;
            return (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.04 }}
                className="border-b border-line"
              >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : p.slug)}
                      aria-expanded={isOpen}
                      aria-controls={`work-${p.slug}`}
                      className="group grid w-full grid-cols-[2.25rem_1fr_auto] items-start gap-x-3 py-6 text-left md:grid-cols-[3rem_1fr_16rem_auto] md:gap-x-6 md:py-8"
                    >
                      <span className="pt-2 font-mono text-xs text-ink-2 md:pt-4">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-serif text-3xl leading-[1.05] transition-colors duration-300 group-hover:text-accent md:text-5xl">
                          {p.title}
                        </span>
                        <span className="mt-2 block max-w-[62ch] text-[15px] leading-relaxed text-ink-2 md:text-base">{p.tagline}</span>
                      </span>
                      <span className="hidden pt-3 font-mono text-xs leading-6 text-ink-2 md:block">{p.stack.join(" · ")}</span>
                      <span
                        className={cn(
                          "mt-1.5 grid h-8 w-8 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-ink md:mt-3",
                          isOpen && "rotate-45 border-ink bg-ink text-paper",
                        )}
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`work-${p.slug}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-[2.25rem] pr-2 md:grid-cols-[1fr_16rem_auto] md:gap-6 md:pl-[4.5rem]">
                          <ul className="space-y-2.5 text-[15px] leading-relaxed md:text-base">
                            {p.points.map((pt) => (
                              <li key={pt} className="flex gap-3">
                                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                                {pt}
                              </li>
                            ))}
                          </ul>
                          <div className="space-y-2">
                            {/* Stack is in the row header on desktop; repeat it here only on mobile. */}
                            <p className="font-mono text-xs leading-6 text-ink-2 md:hidden">{p.stack.join(" · ")}</p>
                            {p.context && <p className="eyebrow md:pt-1">{p.context}</p>}
                          </div>
                          <div className="flex gap-2 md:flex-col md:items-start">
                            <ExtLink href={p.repo}>Source</ExtLink>
                            {p.live && <ExtLink href={p.live}>Live</ExtLink>}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>

        <Reveal className="mt-14 grid gap-8 md:grid-cols-[14rem_1fr]">
          <p className="eyebrow pt-1">Also built</p>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {moreProjects.map((m) => (
              <li key={m.title} className="border-b border-line">
                <a href={m.url} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-4 py-3">
                  <span>
                    <span className="font-medium transition-colors group-hover:text-accent">{m.title}</span>
                    <span className="ml-2 text-sm text-ink-2">{m.note}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden />
                </a>
              </li>
            ))}
            <li className="border-b border-line">
              <a href="https://github.com/prasadbhalerao1?tab=repositories" target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-4 py-3">
                <span className="font-medium transition-colors group-hover:text-accent">All 40+ repositories</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
