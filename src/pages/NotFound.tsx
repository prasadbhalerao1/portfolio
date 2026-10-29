import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <main className="grid min-h-screen place-items-center px-5">
    <Helmet>
      <title>Not found · Prasad Bhalerao</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-serif text-7xl italic md:text-9xl">Lost.</h1>
      <p className="mt-4 text-ink-2">This page doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-accent hover:text-accent-ink">
        Back home
      </Link>
    </div>
  </main>
);

export default NotFound;
