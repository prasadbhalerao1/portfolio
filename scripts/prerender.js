// Runs after `vite build` and the SSR build. Writes fully rendered HTML for every route,
// plus sitemap.xml and llms.txt, all from the same data the site renders.
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssr = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, SITE_URL, profile, socials, education, roles, projects, moreProjects, sortedEntries, certImage, TYPE_LABELS } = ssr;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Vercel serves achievements.html at /achievements (cleanUrls) and 404.html for unknown paths.
const ROUTES = [
  { url: "/", file: "index.html" },
  { url: "/achievements", file: "achievements.html" },
  { url: "/404", file: "404.html" },
];

for (const { url, file } of ROUTES) {
  const { html, head } = render(url);
  const page = template
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.writeFileSync(path.join(dist, file), page);
  console.log(`prerendered ${url} -> ${file}`);
}

// sitemap.xml, with certificate images for Google Images.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const today = new Date().toISOString().split("T")[0];
const image = (loc, title, caption) =>
  `\n    <image:image>\n      <image:loc>${esc(loc)}</image:loc>\n      <image:title>${esc(title)}</image:title>${caption ? `\n      <image:caption>${esc(caption)}</image:caption>` : ""}\n    </image:image>`;
const certs = sortedEntries.filter((e) => e.cert);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${image(`${SITE_URL}/photo/prasad-900.webp`, "Prasad Bhalerao")}
  </url>
  <url>
    <loc>${SITE_URL}/achievements</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${certs.map((e) => image(`${SITE_URL}${certImage(e.cert)}`, `${e.title} certificate, Prasad Bhalerao`, `${e.title} · ${e.org}`)).join("")}
  </url>
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log(`sitemap.xml with ${certs.length} certificate images`);

// llms.txt (llmstxt.org): a plain-text summary AI tools can read without running JavaScript.
const line = (s) => s.replace(/\s+/g, " ").trim();
const groups = ["hackathon", "organized", "learning"].map((type) => ({
  title: TYPE_LABELS[type],
  items: sortedEntries.filter((e) => e.type === type),
}));
const llms = `# ${profile.name}

> ${profile.role} based in ${profile.location}. ${profile.intro}

Website: ${SITE_URL}
${socials.map((s) => `${s.name}: ${s.url.replace("mailto:", "")}`).join("\n")}

## Education

${education.map((e) => `- ${e.detail}, ${e.place} (${e.period}): ${e.score}`).join("\n")}

## Roles

${roles.map((r) => `- ${r.title}, ${r.org}`).join("\n")}

## Projects

${projects
  .map(
    (p) =>
      `### ${p.title}\n\n${p.tagline}\n\n${p.points.map((pt) => `- ${pt}`).join("\n")}\n\nStack: ${p.stack.join(", ")}\nCode: ${p.repo}${p.live ? `\nLive: ${p.live}` : ""}${p.context ? `\nContext: ${p.context}` : ""}`,
  )
  .join("\n\n")}

### Also built

${moreProjects.map((m) => `- ${m.title}: ${m.note} (${m.url})`).join("\n")}

${groups
  .map(
    (g) =>
      `## ${g.title}\n\n${g.items
        .map((e) => {
          const meta = [e.when, e.org, e.result].filter(Boolean).join(" · ");
          const extra = [...(e.points ?? []), e.credentialId ? `Credential ID: ${e.credentialId}` : "", e.cert ? `Certificate: ${SITE_URL}${certImage(e.cert)}` : ""].filter(Boolean);
          return `- **${e.title}** (${meta}): ${line(e.summary)}${extra.length ? "\n" + extra.map((x) => `  - ${x}`).join("\n") : ""}`;
        })
        .join("\n")}`,
  )
  .join("\n\n")}

## Pages

- [Home](${SITE_URL}/): intro, projects, stack, education, contact
- [Achievements](${SITE_URL}/achievements): every hackathon, event and certificate
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);
console.log("llms.txt written");

fs.rmSync(ssrDir, { recursive: true, force: true });
