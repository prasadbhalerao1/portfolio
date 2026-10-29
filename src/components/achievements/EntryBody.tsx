import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { entryMedia, type Entry } from "@/data/achievements";
import Lightbox from "./Lightbox";

const Pill = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-sm transition-colors hover:border-ink"
  >
    {children}
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
  </a>
);

/** Detail content for one log entry; shared by the list view and the grid view's dialog. */
const EntryBody = ({ entry }: { entry: Entry }) => {
  const [shown, setShown] = useState<number | null>(null);
  const media = entryMedia(entry);

  return (
    <div className="space-y-5">
      <p className="max-w-[64ch] leading-relaxed">{entry.summary}</p>

      {entry.points && (
        <ul className="space-y-2 text-[15px] leading-relaxed text-ink-2">
          {entry.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      )}

      {media.length > 0 && (
        <ul className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {media.map((m, i) => (
            <li key={m.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setShown(i)}
                className="group block overflow-hidden rounded-sm border border-line"
                aria-label={`View ${m.alt}`}
              >
                <img
                  src={m.thumb}
                  alt=""
                  loading="lazy"
                  className="h-24 w-auto max-w-none object-cover transition-transform duration-500 group-hover:scale-[1.04] md:h-28"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {(entry.links || entry.original || entry.verifyUrl || entry.credentialId) && (
        <div className="flex flex-wrap items-center gap-2">
          {entry.links?.map((l) => (
            <Pill key={l.url} href={l.url}>
              {l.label}
            </Pill>
          ))}
          {entry.verifyUrl && <Pill href={entry.verifyUrl}>Verify</Pill>}
          {entry.original && <Pill href={entry.original}>Original certificate</Pill>}
          {entry.credentialId && <span className="ml-1 font-mono text-xs text-ink-2">ID {entry.credentialId}</span>}
        </div>
      )}

      <Lightbox items={media} index={shown} onIndex={setShown} />
    </div>
  );
};

export default EntryBody;
