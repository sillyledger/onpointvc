import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "#thesis", label: "THESIS" },
  { href: "#op-fund", label: "OP FUND" },
  { href: "#acquisitions", label: "ACQUISITIONS" },
  { href: "#studio", label: "STUDIO" },
  { href: "#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

export function Main() {
  return (
    <div className="flex min-h-screen flex-col px-12 py-[34px] max-[768px]:px-6 max-[768px]:py-8">
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link href="/" aria-label="OnPoint VC home">
          <Wordmark />
        </Link>
        <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </nav>

      <div className="flex flex-1 flex-col justify-center">
        <div className="relative w-full">
          <h1 className="relative z-[2] max-w-[960px] font-display text-[clamp(44px,7.4vw,100px)] font-extrabold leading-[0.98] tracking-[-0.02em] lowercase max-[768px]:text-[clamp(34px,9vw,38px)]">
            we&apos;re bold, absurd,
            <br />
            and driven.
          </h1>
          <div
            className="pointer-events-none absolute left-0 z-[1] w-full overflow-visible max-[768px]:hidden"
            style={{ top: "calc(100% - 0.22em - 150px)", height: 150 }}
          >
            <svg
              width="100%"
              height="150"
              viewBox="0 0 1400 150"
              preserveAspectRatio="none"
            >
              <path
                d="M0 95 C 220 40, 420 140, 700 75 S 1080 15, 1400 95"
                fill="none"
                stroke="var(--amber)"
                strokeOpacity="0.9"
                strokeWidth="2"
              />
              <path
                d="M0 112 C 220 60, 420 155, 700 92 S 1080 32, 1400 112"
                fill="none"
                stroke="var(--text)"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="mt-7 max-w-[700px]">
          <p className="text-[20px] leading-[1.7] text-[rgba(245,244,236,0.96)] max-[768px]:text-[17px]">
            Founder-led and self-funded. We back absurd ideas and weird
            software, build our own experiments in-house, and buy the tiny
            businesses too small for anyone else&apos;s fund. All through our
            own capital, not someone else&apos;s LP checks.
          </p>
        </div>
      </div>
    </div>
  );
}
