// Build-time renderer used by scripts/prerender.js. Never shipped to the browser.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppShell } from "./App";

export { profile, socials, education, roles, SITE_URL } from "./data/profile";
export { projects, moreProjects } from "./data/projects";
export { sortedEntries, certImage, TYPE_LABELS } from "./data/achievements";

export const render = (url: string) => {
  const context: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = context.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join("\n    ");
  return { html, head };
};
