import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { siteImages } from "../lib/siteImages";
import { Butterflies } from "./Butterflies";

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/corporate-training", "Corporate Training"],
  ["/student-programs", "Student Programs"],
  ["/faculty-development", "Faculty Development"],
  ["/career-mentoring", "Career Mentoring"],
  ["/portfolio", "Portfolio"],
  ["/contact", "Contact"]
] as const;

export function AppLayout() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".section-fade"));
    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => {
      observer.observe(node);
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        node.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#131313] text-zinc-100">
      <Butterflies />
      <header className="sticky top-0 z-20 border-b border-brandGold/20 bg-[#131313]/88 backdrop-blur-xl">
        <div className="mx-auto max-w-[1240px] px-3 sm:px-4">
          <div className="flex items-center justify-between gap-3 py-3">
            <Link to="/" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-tight sm:text-lg">
              <img
                src={siteImages.brandLogo}
                alt="Game2Grow logo"
                className="h-8 w-8 rounded-full border border-brandGold/35 object-cover sm:h-9 sm:w-9"
              />
              <span className="truncate">
                <span className="text-white">GAME</span>
                <span className="text-brandGold">2GROW</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden rounded border border-brandGold px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-brandGold sm:inline-flex"
              >
                BOOK A SESSION
              </Link>
              <button
                type="button"
                className="inline-flex rounded border border-brandGold/50 p-2 text-brandGold md:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span className="material-symbols-outlined">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          <nav className="hidden gap-5 pb-3 text-base md:flex">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? "font-bold text-brandGold" : "font-bold text-zinc-300 hover:text-white")}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div
            className={`mobile-menu-shell md:hidden ${
              mobileMenuOpen ? "mobile-menu-shell-open" : "mobile-menu-shell-closed"
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            {navItems.map(([to, label], index) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `mobile-menu-item rounded border px-3 py-2 text-base font-bold ${
                    isActive
                      ? "border-brandGold/50 bg-brandGold/10 text-brandGold"
                      : "border-brandGold/20 bg-black/35 text-zinc-200"
                  }`
                }
                style={{ animationDelay: `${index * 55}ms` }}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mobile-menu-item mt-1 rounded bg-brandGold px-3 py-2 text-center text-xs font-semibold tracking-[0.12em] text-black"
              style={{ animationDelay: `${navItems.length * 55}ms` }}
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-3 py-8 sm:px-4 sm:py-10 md:py-14">
        <Outlet />
      </main>

      <footer className="relative mt-10 overflow-hidden border-t border-brandGold/20 bg-black/80 px-3 pt-0 text-sm text-zinc-300 sm:px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(201,168,76,0.18),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(201,168,76,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-6 border-b border-brandGold/20 py-7 sm:py-8 md:grid-cols-[1.2fr_auto] md:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-brandGold sm:text-xs sm:tracking-[0.24em]">
                Ready To Level Up?
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl">Build your Game2Grow experience.</h3>
              <p className="mt-2 max-w-2xl text-zinc-300">
                Gamified simulations for students, faculty, and corporate teams that convert learning into visible
                performance.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-block rounded bg-brandGold px-5 py-3 text-xs font-semibold tracking-[0.12em] text-black sm:px-6 sm:tracking-[0.16em]"
              >
                BOOK A SESSION
              </Link>
            </div>
          </div>

          <div className="grid gap-8 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-4">
            <article>
              <div className="flex items-center gap-3">
                <img
                  src={siteImages.brandLogo}
                  alt="Game2Grow logo"
                  className="h-10 w-10 rounded-full border border-brandGold/35 object-cover sm:h-12 sm:w-12"
                />
                <p className="text-base font-bold tracking-tight sm:text-lg">
                  <span className="text-white">GAME</span>
                  <span className="text-brandGold">2GROW</span>
                </p>
              </div>
              <p className="mt-3 max-w-sm text-zinc-300">
                Experience. Learn. Grow. Practical learning journeys designed to improve confidence, employability,
                and team execution.
              </p>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2">
                {navItems.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-zinc-300 transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Program Tracks
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/corporate-training" className="text-zinc-300 transition hover:text-white">
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link to="/student-programs" className="text-zinc-300 transition hover:text-white">
                    Student Programs
                  </Link>
                </li>
                <li>
                  <Link to="/faculty-development" className="text-zinc-300 transition hover:text-white">
                    Faculty Development
                  </Link>
                </li>
                <li>
                  <Link to="/career-mentoring" className="text-zinc-300 transition hover:text-white">
                    Career Mentoring
                  </Link>
                </li>
              </ul>
            </article>

            <article>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brandGold sm:text-xs sm:tracking-[0.2em]">
                Contact
              </p>
              <div className="mt-4 space-y-3 break-words">
                <p className="text-zinc-300">game2grow.g2g@gmail.com</p>
                <p className="text-zinc-300">+91 97905 55270</p>
                <p className="text-zinc-300">Coimbatore, Tamil Nadu, India</p>
                <a
                  href="https://www.linkedin.com/in/anjen-fernando"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-zinc-300 underline decoration-brandGold/70 underline-offset-4 transition hover:text-white"
                >
                  linkedin.com/in/anjen-fernando
                </a>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-2 border-t border-brandGold/20 py-4 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>(c) {year} Game2Grow. All rights reserved.</p>
            <p>Gamified Learning Company | Pan India Delivery</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
