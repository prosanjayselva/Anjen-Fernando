import {
  audienceSegments,
  brochureTagline,
  facultySummary,
  founderFocusAreas,
  founderProfile,
  missionStatement,
  methodologyPillars,
  organizationSummary,
  visionStatement
} from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";

export function AboutPage() {
  return (
    <section className="space-y-12">
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.28em]">ABOUT GAME2GROW</p>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl">{brochureTagline}</h1>
        <p className="mt-5 max-w-3xl text-zinc-300">{organizationSummary}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card rounded-xl p-7">
          <h2 className="text-3xl text-brandGold">Vision</h2>
          <p className="mt-3 text-zinc-300">{visionStatement}</p>
        </article>
        <article className="glass-card rounded-xl p-7">
          <h2 className="text-3xl text-brandGold">Mission</h2>
          <p className="mt-3 text-zinc-300">{missionStatement}</p>
        </article>
      </div>

      <article className="glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">FOR WHOM WE SERVE</p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">Real Learning for Real Outcomes</h2>
        <p className="mt-4 text-zinc-300">
          The world does not reward those who only know. It rewards those who can do. Game2Grow creates intense,
          practical learning environments where participants experience real-world challenges before they face them.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {audienceSegments.map((segment) => (
            <article key={segment.title} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
              <h3 className="text-xl text-brandGold">{segment.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-zinc-300">{segment.hook}</p>
              <p className="mt-3 text-zinc-300">{segment.detail}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">METHODOLOGY</p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">How Learning Becomes Transformation</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {methodologyPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
              <h3 className="text-2xl text-brandGold">{pillar.title}</h3>
              <p className="mt-3 text-zinc-300">{pillar.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-zinc-300">{facultySummary}</p>
        <blockquote className="mt-6 border-l-2 border-brandGold/80 pl-4 italic text-zinc-200">
          "Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin
        </blockquote>
      </article>

      <article className="glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">FOUNDER</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <img src={siteImages.anjenClassroom} alt="Anjen Fernando facilitating a classroom program" className="h-60 w-full rounded-lg object-cover sm:h-72" />
            <img src={siteImages.anjenIipeCertificate} alt="Anjen Fernando with IIPE experiential learning certificate" className="h-60 w-full rounded-lg object-cover sm:h-72" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">{founderProfile.name}</h2>
            <p className="mt-4 text-zinc-300">{founderProfile.role}</p>
            <p className="mt-4 text-zinc-300">{founderProfile.summary}</p>
            <p className="mt-4 text-zinc-300">{founderProfile.certification}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {founderFocusAreas.map((area) => (
                <span key={area} className="rounded-full border border-brandGold/35 px-4 py-2 text-sm text-zinc-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
