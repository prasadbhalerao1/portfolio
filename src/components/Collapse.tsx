import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CollapseProps {
  open: boolean;
  id?: string;
  children: ReactNode;
}

/**
 * Expand/collapse that keeps its content in the DOM (and so in the prerendered HTML),
 * so search engines and AI crawlers can read it. Closed content is inert: not focusable
 * or announced. Animates via grid rows, so no height measuring.
 */
const Collapse = ({ open, id, children }: CollapseProps) => (
  <div
    id={id}
    className={cn(
      "grid transition-[grid-template-rows,opacity] duration-[450ms] ease-out motion-reduce:transition-none",
      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
    )}
    // React 18 doesn't type `inert`; an empty-string attribute is how the DOM expects it.
    {...(open ? {} : ({ inert: "" } as Record<string, string>))}
  >
    <div className="min-h-0 overflow-hidden">{children}</div>
  </div>
);

export default Collapse;
