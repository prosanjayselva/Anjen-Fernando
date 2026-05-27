import {
  awardsAndRecognition,
  brochureTestimonials,
  founderProfile,
  podcastEpisodes
} from "../lib/brochureContent";
import { siteImages } from "../lib/siteImages";

const portfolioItems = [
  {
    title: "Pan India Training Delivery",
    body: "Game2Grow sessions have served students, working professionals, and corporate teams with experiential, simulation-led learning interventions."
  },
  {
    title: "Corporate and Campus Impact",
    body: "Programs are designed for visible behavior change in employability, leadership, communication, and team performance."
  },
  {
    title: "Mentoring and Career Development",
    body: "One-on-one mentoring plans support long-term growth with practical, measurable development goals."
  }
] as const;

export function PortfolioPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.28em]">PORTFOLIO</p>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl">Proof of Impact</h1>
        <p className="mt-3 text-zinc-300">
          {founderProfile.name} has delivered high-engagement learning experiences across corporate and academic ecosystems.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <article key={item.title} className="glass-card rounded-xl p-7">
            <h2 className="text-2xl text-brandGold">{item.title}</h2>
            <p className="mt-3 text-zinc-300">{item.body}</p>
          </article>
        ))}
      </div>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Awards and Recognition</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <img src={siteImages.anjenVanakkamAward} alt="Anjen Fernando receiving recognition at Vanakkam HRD annual conference" className="h-56 w-full rounded-lg object-cover sm:h-72" />
          <img src={siteImages.anjenIipeCertificate} alt="Anjen Fernando with IIPE experiential learning certificate" className="h-56 w-full rounded-lg object-cover sm:h-72" />
        </div>
        <ul className="mt-5 space-y-3 text-zinc-300">
          {awardsAndRecognition.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">On-Ground Program Snapshots</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <img src={siteImages.anjenClassroom} alt="Anjen Fernando delivering a classroom transformation session" className="h-56 w-full rounded-lg object-cover sm:h-72" />
          <img src={siteImages.anjenLinkedinDp} alt="Founder discussion capture from podcast setup" className="h-56 w-full rounded-lg object-cover sm:h-72" />
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Featured Podcast Series</h2>
        <p className="mt-3 text-zinc-300">Yardstick Academy - Gamified Learning and Career Development (3-part series).</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {podcastEpisodes.map((episode) => (
            <a
              key={episode.label}
              href={episode.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-brandGold/20 bg-black/30 p-5 transition hover:border-brandGold/60"
            >
              <p className="text-sm tracking-[0.16em] text-brandGold">{episode.label}</p>
              <p className="mt-2 text-zinc-300">{episode.url.replace("https://", "")}</p>
            </a>
          ))}
        </div>
      </article>

      <article className="glass-card rounded-xl p-8">
        <h2 className="text-3xl text-brandGold">Testimonials</h2>
        <div className="mt-5 space-y-4">
          {brochureTestimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-lg border border-brandGold/20 bg-black/30 p-5">
              <p className="italic text-zinc-200">"{testimonial.quote}"</p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-zinc-400">
                {testimonial.author} - {testimonial.designation}
              </p>
            </blockquote>
          ))}
        </div>
      </article>
    </section>
  );
}
