import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/profile";
import { EASE } from "../Reveal";

const line = (delay: number) => ({
  initial: { y: "105%" },
  animate: { y: 0 },
  transition: { duration: 1, ease: EASE, delay },
});

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const ORBIT = "LANGGRAPH · LANGCHAIN · LANGFUSE · FASTAPI · REACT · ";

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
    <div className="mx-auto grid max-w-page items-end gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-8">
      <div className="md:col-span-7 md:pb-6">
        <motion.p {...fade(0.1)} className="eyebrow flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {profile.role} · {profile.location}
        </motion.p>

        <h1 className="mt-6 font-serif text-[clamp(3.6rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.025em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span className="block" {...line(0.15)}>
              Prasad
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span className="block italic" {...line(0.27)}>
              Bhalerao
            </motion.span>
          </span>
        </h1>

        <motion.p {...fade(0.55)} className="mt-8 max-w-[40ch] text-lg leading-relaxed text-ink-2 md:text-xl">
          {profile.intro}
        </motion.p>

        <motion.div {...fade(0.7)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink"
          >
            See my work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
          </a>
          {socials.slice(0, 2).map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {s.name}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          ))}
        </motion.div>

      </div>

      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        className="relative mx-auto w-full max-w-[22rem] md:col-span-5 md:max-w-none md:pl-8"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-paper-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--accent)/0.22),transparent_62%)]" aria-hidden />
          <img
            src="/photo/prasad-900.webp"
            srcSet="/photo/prasad-520.webp 520w, /photo/prasad-900.webp 900w"
            sizes="(min-width: 768px) 30vw, 80vw"
            alt="Portrait of Prasad Bhalerao"
            width={900}
            height={900}
            {...{ fetchpriority: "high" }}
            className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 select-none"
            draggable={false}
          />
        </div>

        {/* Rotating stack stamp, overlapping the arch. */}
        <div className="absolute -left-2 bottom-16 h-28 w-28 md:-left-4 md:h-32 md:w-32" aria-hidden>
          <div className="absolute inset-0 rounded-full bg-paper shadow-[0_1px_0_hsl(var(--line))]" />
          <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_24s_linear_infinite] motion-reduce:animate-none">
            <defs>
              <path id="orbit" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-ink font-mono" style={{ fontSize: 7.4, letterSpacing: 1.1 }}>
              {/* Stretch spacing so the text wraps the full circumference (2π·38). */}
              <textPath href="#orbit" textLength={238} lengthAdjust="spacing">
                {ORBIT}
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 grid place-items-center font-serif text-3xl italic text-accent">ai</span>
        </div>

        <figcaption className="eyebrow mt-3 flex justify-between">
          <span>Fig. 01</span>
          <span>Pune, 2026</span>
        </figcaption>
      </motion.figure>
    </div>
  </section>
);

export default Hero;
