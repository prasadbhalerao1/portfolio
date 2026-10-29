import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EASE } from "@/components/Reveal";
import LogView from "@/components/achievements/LogView";
import Bento from "@/components/achievements/Bento";
import { certImage, entries, isHighlight, sortedEntries } from "@/data/achievements";
import { roles, SITE_URL } from "@/data/profile";
import { cn } from "@/lib/utils";

const TITLE = "Hackathons, leadership & certificates · Prasad Bhalerao";
const DESCRIPTION =
  "Prasad Bhalerao's hackathons and certificates: Hackers Occupied Pune 2026 winner, Logic Loop finalist, SIH 2026, ISRO Bharatiya Antariksh Hackathon, Google Solution Challenge. Vice President of Gotham AI; organiser of TraceRoute and GameCraft at JSPM's RSCOE.";

// Structured data: hackathons/events as Event, certificates as credentials on the Person.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/achievements#page`,
      url: `${SITE_URL}/achievements`,
      name: TITLE,
      description: DESCRIPTION,
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: sortedEntries.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/achievements#${e.slug}`,
          name: e.title,
        })),
      },
    },
    ...entries
      .filter((e) => e.type !== "learning")
      .map((e) => ({
        "@type": "Event",
        "@id": `${SITE_URL}/achievements#${e.slug}`,
        name: e.title,
        startDate: e.date,
        description: e.summary,
        organizer:
          e.type === "organized"
            ? [{ "@type": "Organization", name: e.org }, { "@id": `${SITE_URL}/#person` }]
            : { "@type": "Organization", name: e.org },
        ...(e.type === "hackathon" ? { attendee: { "@id": `${SITE_URL}/#person` } } : {}),
        ...(e.cert ? { image: `${SITE_URL}${certImage(e.cert)}` } : {}),
      })),
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Prasad Bhalerao",
      award: entries.filter((e) => isHighlight(e.result)).map((e) => `${e.title}: ${e.result}`),
      hasOccupation: roles.slice(0, 2).map((r) => ({ "@type": "Role", roleName: r.title, description: r.org })),
      hasCredential: entries
        .filter((e) => e.cert)
        .map((e) => ({
          "@type": "EducationalOccupationalCredential",
          name: e.title,
          credentialCategory: e.type === "learning" ? "certificate" : "certificate of participation",
          recognizedBy: { "@type": "Organization", name: e.org },
          dateCreated: e.date,
          image: `${SITE_URL}${certImage(e.cert!)}`,
          ...(e.credentialId ? { identifier: e.credentialId } : {}),
          ...(e.verifyUrl ? { url: e.verifyUrl } : {}),
        })),
    },
  ],
};

type View = "list" | "grid";
const STATS: [number, string][] = [
  [entries.filter((e) => e.type === "hackathon").length, "Hackathons"],
  [entries.filter((e) => e.type === "organized").length, "Organised"],
  [entries.filter((e) => e.cert).length, "Certificates"],
];

const AchievementsPage = () => {
  const [view, setView] = useState<View>("list");

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/achievements`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/achievements`} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />

      <main className="mx-auto max-w-page px-5 pb-24 pt-28 md:px-8 md:pt-36">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
          <p className="eyebrow">Hackathons · Events · Certificates</p>
          <h1 className="mt-4 font-serif text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">Achievements</h1>
          <div className="mt-8 flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
            <dl className="flex gap-8 md:gap-12">
              {STATS.map(([n, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="eyebrow mt-2">{label}</dt>
                  <dd className="font-serif text-4xl leading-none md:text-5xl">{n}</dd>
                </div>
              ))}
            </dl>

            <div role="radiogroup" aria-label="Layout" className="inline-flex self-start rounded-full border border-line p-1 md:self-auto">
              {(["list", "grid"] as View[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={view === v}
                  onClick={() => setView(v)}
                  className={cn("relative rounded-full px-4 py-1.5 text-sm capitalize transition-colors", view === v ? "text-paper" : "text-ink-2 hover:text-ink")}
                >
                  {view === v && <motion.span layoutId="view-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ duration: 0.35, ease: EASE }} />}
                  <span className="relative">{v}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10">{view === "list" ? <LogView /> : <Bento items={sortedEntries} />}</div>
      </main>

      <Footer />
    </>
  );
};

export default AchievementsPage;
