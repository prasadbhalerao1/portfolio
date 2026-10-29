import { useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export interface Media {
  src: string;
  alt: string;
}

interface LightboxProps {
  items: Media[];
  index: number | null;
  onIndex: (i: number | null) => void;
}

const SWIPE_PX = 50;

const Lightbox = ({ items, index, onIndex }: LightboxProps) => {
  const open = index !== null;
  const item = open ? items[index] : null;
  const many = items.length > 1;
  const touchX = useRef<number | null>(null);

  const step = (d: number) => {
    if (index === null) return;
    onIndex((index + d + items.length) % items.length);
  };

  useEffect(() => {
    if (!open || !many) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const btn = "grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white/70";

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onIndex(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-[hsl(30_10%_6%/0.92)] backdrop-blur-sm data-[state=open]:animate-[fadeIn_.25s_ease-out]" />
        <Dialog.Content
          className="fixed inset-0 z-[71] flex h-[100dvh] flex-col items-center justify-center gap-4 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] outline-none md:p-10"
          // Content covers the screen, so treat taps on its empty area as "outside".
          onClick={(e) => e.target === e.currentTarget && onIndex(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null || !many) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > SWIPE_PX) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <Dialog.Title className="sr-only">{item?.alt ?? "Image"}</Dialog.Title>
          <Dialog.Description className="sr-only">Swipe or use arrow keys to move between images. Tap outside to close.</Dialog.Description>
          {item && (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="max-h-[calc(100dvh-7rem)] max-w-full rounded-sm object-contain shadow-2xl animate-[fadeIn_.25s_ease-out]"
            />
          )}
          <div className="flex w-full max-w-3xl items-center justify-between gap-4 text-sm">
            <p className="line-clamp-2 text-[hsl(36_9%_72%)]">{item?.alt}</p>
            <div className="flex shrink-0 items-center gap-2">
              {many && (
                <>
                  <span className="mr-1 font-mono text-xs text-[hsl(36_9%_63%)]">
                    {(index ?? 0) + 1}/{items.length}
                  </span>
                  <button type="button" onClick={() => step(-1)} aria-label="Previous image" className={btn}>
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next image" className={btn}>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
              <Dialog.Close aria-label="Close" className={btn}>
                <X className="h-4 w-4" />
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Lightbox;
