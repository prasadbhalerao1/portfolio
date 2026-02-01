import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Prasad Bhalerao - CSBS Student | JSPM | Web Developer</title>
        <meta
          name="description"
          content="Personal portfolio of Prasad Bhalerao - Computer Science student at JSPM's RSCOE. Expert in web development and competitive programming."
        />
        <meta
          name="keywords"
          content="Prasad, Prasad Bhalerao, CSBS, JSPM, JSPM RSCOE, Portfolio, Web Developer, Competitive Programming, React, Node.js, MongoDB, HTML, CSS, JavaScript, TypeScript, Rajarchi Shahu College of Engineering"
        />
        <link rel="canonical" href="https://prasadbhalerao.vercel.app/" />
        <meta
          property="og:title"
          content="Prasad Bhalerao - CSBS Student | JSPM | Web Developer"
        />
        <meta
          property="og:description"
          content="Personal portfolio of Prasad Bhalerao - Computer Science student at JSPM's RSCOE. Expert in web development and competitive programming."
        />
        <meta property="og:url" content="https://prasadbhalerao.vercel.app/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
