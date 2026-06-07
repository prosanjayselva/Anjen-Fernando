import { useEffect, useState } from "react";
import { brochureTestimonials, founderProfile } from "../lib/brochureContent";

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    let frameId: number;

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    }

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <>{count}{suffix}</>;
}

const highlights = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Programs Delivered", value: 50, suffix: "+" },
  { label: "Awards Won", value: 2, suffix: "" }
];

export function TestimonialPage() {
  return (
    <section className="space-y-8">
      <header className="section-fade rounded-2xl border border-brandGold/25 bg-black/60 p-6 sm:p-8 md:p-12">
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">Proof of Impact</h1>
        <p className="mt-3 text-zinc-300">
          We have delivered high-engagement learning experiences across corporate and academic ecosystems.
        </p>
      </header>

      <div className="section-fade grid gap-6 sm:grid-cols-3">
        {highlights.map((h) => (
          <article key={h.label} className="glass-card flex flex-col items-center rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-brandGold sm:text-4xl">
              <AnimatedNumber value={h.value} suffix={h.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-zinc-400">{h.label}</p>
          </article>
        ))}
      </div>

      <article className="section-fade glass-card rounded-xl p-8">
        <p className="text-[11px] tracking-[0.16em] text-brandGold sm:text-sm sm:tracking-[0.25em]">TESTIMONIALS</p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">What People Say</h2>
        <p className="mt-3 text-zinc-400">Real feedback from participants and partners we have worked with.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {brochureTestimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className="section-fade relative rounded-xl border border-brandGold/20 bg-black/40 p-6"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="absolute -top-2 left-4 text-4xl leading-none text-brandGold/30">&ldquo;</span>
              <p className="relative z-10 mt-2 text-zinc-200 leading-relaxed italic">{t.quote}</p>
              <footer className="mt-5 border-t border-brandGold/15 pt-4">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">{t.designation}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </article>
    </section>
  );
}
