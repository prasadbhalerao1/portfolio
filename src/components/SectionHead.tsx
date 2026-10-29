import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadProps {
  index: string;
  title: string;
  aside?: ReactNode;
}

/** Numbered editorial section header: "01 — Selected work". */
const SectionHead = ({ index, title, aside }: SectionHeadProps) => (
  <Reveal className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-4 md:mb-14">
    <h2 className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <span className="font-serif text-4xl leading-none md:text-6xl">{title}</span>
    </h2>
    {aside && <div className="hidden text-right text-sm text-ink-2 sm:block">{aside}</div>}
  </Reveal>
);

export default SectionHead;
