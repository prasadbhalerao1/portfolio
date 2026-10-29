import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

const NAV = [
  { to: "/#work", label: "Work" },
  { to: "/#stack", label: "Stack" },
  { to: "/achievements", label: "Achievements" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" className="font-serif text-xl leading-none tracking-tight" aria-label="Prasad Bhalerao, home">
          Prasad Bhalerao<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = item.to === pathname;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm transition-colors hover:text-ink",
                      active ? "bg-paper-2 text-ink" : "text-ink-2",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-2.5 w-4" aria-hidden>
              <span className={cn("absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-300", open && "translate-y-[5px] rotate-45")} />
              <span className={cn("absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-300", open && "-translate-y-[4px] -rotate-45")} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden px-5 md:hidden"
          >
            {NAV.map((item, i) => (
              <li key={item.to} className={cn("border-line", i > 0 && "border-t")}>
                <Link to={item.to} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-4 font-serif text-3xl">
                  {item.label}
                  <span className="font-mono text-xs text-ink-2">0{i + 1}</span>
                </Link>
              </li>
            ))}
            <li className="h-4" aria-hidden />
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
