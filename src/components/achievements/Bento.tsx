import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Images } from "lucide-react";
import { certThumb, isHighlight, type Entry } from "@/data/achievements";
import { cn } from "@/lib/utils";
import { EASE } from "../Reveal";
import EntryDialog from "./EntryDialog";

type Size = "hero" | "tall" | "wide" | "one";

const SPAN: Record<Size, string> = {
  hero: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  one: "",
};
const CELLS: Record<Size, number> = { hero: 4, tall: 2, wide: 2, one: 1 };

type Tile = { entry: Entry; size: Size };

/** Tile size follows how much there is to show: wins get the most room, cert-only entries the least. */
const sizeFor = (e: Entry): Size => {
  const photos = e.photos?.length ?? 0;
  if (photos && /^(winner|finalist)/i.test(e.result ?? "")) return "hero";
  if (photos >= 3) return "tall";
  if (photos >= 1) return "wide";
  return "one";
};

/**
 * Promote single tiles (newest first) until the cell count fills complete rows,
 * so the grid ends flush instead of with a ragged last row.
 */
const balance = (tiles: Tile[], cols: number): Tile[] => {
  const out = tiles.map((t) => ({ ...t }));
  let total = out.reduce((n, t) => n + CELLS[t.size], 0);
  for (const t of out) {
    if (total % cols === 0) break;
    if (t.size === "one") {
      t.size = "wide";
      total += 1;
    }
  }
  return out;
};

const Badges = ({ e, dark }: { e: Entry; dark: boolean }) => {
  const photos = e.photos?.length ?? 0;
  if (!photos && !e.cert) return null;
  const chip = cn(
    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px]",
    dark ? "bg-black/45 text-white backdrop-blur-sm" : "bg-paper text-ink-2",
  );
  return (
    <span className="flex gap-1.5">
      {photos > 0 && (
        <span className={chip}>
          <Images className="h-3 w-3" aria-hidden /> {photos}
        </span>
      )}
      {e.cert && (
        <span className={chip}>
          <Award className="h-3 w-3" aria-hidden /> cert
        </span>
      )}
    </span>
  );
};

const EntryTile = ({ e, size, onOpen }: { e: Entry; size: Size; onOpen: () => void }) => {
  const photo = e.photos?.[0];
  const win = isHighlight(e.result);

  // Photo tiles: full-bleed image with text over a gradient.
  if (photo) {
    return (
      <button type="button" onClick={onOpen} aria-label={`${e.title}, ${e.when}. Open details`} className="group relative h-full w-full overflow-hidden rounded-lg bg-paper-2 text-left">
        <img src={photo} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/0" aria-hidden />
        <span className="absolute left-3 top-3">
          <Badges e={e} dark />
        </span>
        <span className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
          {e.result && (
            <span className={cn("mb-1.5 block font-mono text-[10px] uppercase tracking-wider", win ? "text-[hsl(18_80%_68%)]" : "text-white/70")}>
              {e.result}
            </span>
          )}
          <span className={cn("block font-serif leading-[1.05]", size === "hero" ? "text-3xl md:text-[2.6rem]" : "text-2xl")}>{e.title}</span>
          <span className="mt-1.5 block font-mono text-[11px] text-white/75">
            {e.when} · {e.org}
          </span>
          {size === "hero" && <span className="mt-3 hidden max-w-[46ch] text-[15px] leading-relaxed text-white/90 md:block">{e.summary}</span>}
        </span>
      </button>
    );
  }

  // Certificate-only tiles: thumbnail on paper, text below.
  return (
    <button type="button" onClick={onOpen} aria-label={`${e.title}, ${e.when}. Open details`} className={cn(
        "group flex h-full w-full overflow-hidden rounded-lg border border-line bg-paper-2/60 p-3 text-left transition-colors hover:border-ink/40",
        size === "wide" ? "flex-row gap-4" : "flex-col",
      )}>
      {e.cert && (
        <span className={cn("relative block overflow-hidden rounded-sm bg-paper", size === "wide" ? "w-1/2 shrink-0" : "min-h-0 flex-1")}>
          <img src={certThumb(e.cert)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.04]" />
        </span>
      )}
      <span className={cn("block", size === "wide" ? "self-end pb-1" : "pt-3")}>
        {e.result && <span className={cn("mb-1 block font-mono text-[10px] uppercase tracking-wider", win ? "text-accent" : "text-ink-2")}>{e.result}</span>}
        <span className="line-clamp-2 block font-medium leading-snug transition-colors group-hover:text-accent">{e.title}</span>
        <span className="mt-1 block font-mono text-[11px] text-ink-2">{e.when}</span>
      </span>
    </button>
  );
};

const Bento = ({ items }: { items: Entry[] }) => {
  const [active, setActive] = useState<Entry | null>(null);

  const tiles = balance(
    items.map((e) => ({ entry: e, size: sizeFor(e) })),
    4,
  );

  return (
    <>
      <ul className="grid auto-rows-[170px] grid-cols-2 gap-3 [grid-auto-flow:dense] md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {tiles.map((t, i) => (
          <motion.li
            key={t.entry.slug}
            id={t.entry.slug}
            className={cn("", SPAN[t.size])}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.05 }}
          >
            <EntryTile e={t.entry} size={t.size} onOpen={() => setActive(t.entry)} />
          </motion.li>
        ))}
      </ul>
      <EntryDialog entry={active} onClose={() => setActive(null)} />
    </>
  );
};

export default Bento;
