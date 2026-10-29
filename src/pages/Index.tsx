import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import Stack from "@/components/home/Stack";
import LogTeaser from "@/components/home/LogTeaser";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { SITE_URL } from "@/data/profile";
import { projects } from "@/data/projects";

const TITLE = "Prasad Bhalerao · AI Engineer, Pune";
const DESCRIPTION =
  "Prasad Bhalerao is an AI engineer and third-year B.Tech CSBS student at JSPM's RSCOE, Pune. Builds agentic systems with LangGraph, LangChain and Langfuse, and the full-stack apps around them. Hackers Occupied Pune 2026 winner.";

// Projects as structured data so search engines and AI tools can read them without running JS.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Prasad Bhalerao",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: p.title,
      description: `${p.tagline} ${p.points.join(". ")}.`,
      codeRepository: p.repo,
      ...(p.live ? { url: p.live } : {}),
      programmingLanguage: p.stack,
      dateCreated: p.year,
      author: { "@id": `${SITE_URL}/#person` },
    },
  })),
};

const Index = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Header />
    <main>
      <Hero />
      <Work />
      <Stack />
      <LogTeaser />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
