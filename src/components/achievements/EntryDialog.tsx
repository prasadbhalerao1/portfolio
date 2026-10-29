import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { isHighlight, TYPE_LABELS, type Entry } from "@/data/achievements";
import { cn } from "@/lib/utils";
import EntryBody from "./EntryBody";

/** Detail sheet for one tile: bottom sheet on mobile, centred panel on desktop. */
const EntryDialog = ({ entry, onClose }: { entry: Entry | null; onClose: () => void }) => (
  <Dialog.Root open={entry !== null} onOpenChange={(o) => !o && onClose()}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-[hsl(30_10%_6%/0.55)] backdrop-blur-[2px] data-[state=open]:animate-[fadeIn_.2s_ease-out]" />
      <Dialog.Content className="fixed inset-x-0 bottom-0 z-[61] max-h-[88vh] overflow-y-auto rounded-t-xl border border-line bg-paper p-6 outline-none data-[state=open]:animate-[sheetUp_.35s_cubic-bezier(.2,.7,.2,1)] md:inset-x-auto md:bottom-auto md:left-1/2 md:top-1/2 md:w-[min(42rem,92vw)] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl md:p-8 md:data-[state=open]:animate-[fadeIn_.25s_ease-out]">
        {entry && (
          <>
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-ink-2">
                  {entry.when} · {TYPE_LABELS[entry.type]}
                </p>
                <Dialog.Title className="mt-2 font-serif text-3xl leading-tight md:text-4xl">{entry.title}</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-ink-2">{entry.org}</Dialog.Description>
              </div>
              <Dialog.Close aria-label="Close" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line hover:border-ink">
                <X className="h-4 w-4" />
              </Dialog.Close>
            </div>
            {entry.result && (
              <p className={cn("mt-4 font-mono text-[11px] uppercase tracking-wider", isHighlight(entry.result) ? "text-accent" : "text-ink-2")}>{entry.result}</p>
            )}
            <div className="mt-5">
              <EntryBody entry={entry} />
            </div>
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default EntryDialog;
