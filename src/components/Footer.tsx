import { socials } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 text-sm text-ink-2 md:flex-row md:items-center md:justify-between md:px-8">
      <p>© {new Date().getFullYear()} Prasad Bhalerao · Pune</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((s) => (
          <li key={s.name}>
            <a href={s.url} target={s.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-underline hover:text-ink">
              {s.name}
            </a>
          </li>
        ))}
        <li>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="link-underline hover:text-ink">
            Back to top ↑
          </button>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
