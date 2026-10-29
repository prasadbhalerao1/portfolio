import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AchievementsPage from "./pages/Achievements";
import NotFound from "./pages/NotFound";

// Fixed header height plus breathing room.
const HEADER_OFFSET = 88;

const scrollToId = (id: string, behavior: ScrollBehavior) => {
  const el = document.getElementById(id);
  if (!el) return null;
  // window.scrollTo rather than scrollIntoView: the latter can scroll the visual viewport on mobile.
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior });
  return el;
};

/** Scroll to top on route change, or to the #hash target when there is one. */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let settle: ReturnType<typeof setTimeout> | undefined;
    const t = setTimeout(() => {
      const el = scrollToId(id, "smooth");
      if (!el) return;
      // Layout can shift while scrolling (an entry expanding, images loading); correct if we fell short.
      settle = setTimeout(() => {
        const top = el.getBoundingClientRect().top;
        if (Math.abs(top - HEADER_OFFSET) > 24) scrollToId(id, "instant" as ScrollBehavior);
      }, 900);
    }, 60);
    return () => {
      clearTimeout(t);
      clearTimeout(settle);
    };
    // key changes on every navigation, so tapping the same #link twice still scrolls.
  }, [pathname, hash, key]);
  return null;
};

/** Everything inside the router; shared by the browser app and the build-time prerender. */
export const AppShell = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <div className="grain min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MotionConfig>
  </ThemeProvider>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppShell />
    </BrowserRouter>
    <Analytics />
  </HelmetProvider>
);

export default App;
