import { education, roles } from "@/data/profile";
import SectionHead from "../SectionHead";
import Reveal from "../Reveal";

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="mx-auto max-w-page px-5 md:px-8">
      <SectionHead index="04" title="About" />
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-6">
          <p className="font-serif text-3xl leading-[1.2] md:text-[2.6rem]">
            I build LLM systems that act, not just answer: agents with tools, approval gates and traces you can audit.
          </p>
          <p className="mt-6 max-w-[52ch] leading-relaxed text-ink-2">
            Most of what I know comes from shipping under hackathon deadlines and running campus events on software I wrote. Currently
            contributing to open source through GSSoC '26.
          </p>
        </Reveal>

        <div className="space-y-12 md:col-span-5 md:col-start-8">
          <Reveal>
            <h3 className="eyebrow mb-3">Education</h3>
            <ul>
              {education.map((e) => (
                <li key={e.place} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-line py-3.5">
                  <span className="font-medium">{e.detail}</span>
                  <span className="font-mono text-sm">{e.score}</span>
                  <span className="text-sm text-ink-2">{e.place}</span>
                  <span className="font-mono text-xs text-ink-2">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="eyebrow mb-3">Roles</h3>
            <ul>
              {roles.map((r) => (
                <li key={r.title} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <span className="font-medium">{r.title}</span>
                  <span className="text-right text-sm text-ink-2">{r.org}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
