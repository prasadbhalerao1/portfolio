import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile, socials } from "@/data/profile";
import SectionHead from "../SectionHead";
import Reveal from "../Reveal";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <SectionHead index="05" title="Contact" />
        <Reveal>
          <p className="eyebrow mb-6">Internships, collaborations, hackathon teams</p>
          <a
            href={`mailto:${profile.email}`}
            className="group block break-words font-serif text-[clamp(2rem,6.4vw,5.5rem)] leading-[1] tracking-[-0.02em]"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-500 ease-out group-hover:bg-[length:100%_2px] group-hover:text-accent">
              {profile.email}
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
            <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
          </button>
          {socials.slice(0, 2).map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-ink"
            >
              {s.name}
              <span className="text-ink-2">/{s.handle}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
