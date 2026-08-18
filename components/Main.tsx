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

      <div className="flex flex-1 flex-col justify-center max-w-[960px]">
        <div className="relative">
          <h1 className="relative z-[2] font-display text-[clamp(44px,7.4vw,100px)] font-extrabold leading-[0.98] tracking-[-0.02em] lowercase max-[768px]:text-[clamp(34px,9vw,38px)]">
            we&apos;re bold, absurd,
            <br />
            and driven.
          </h1>
          <div
            className="pointer-events-none absolute left-0 right-0 z-[1] overflow-visible max-[768px]:hidden"
            style={{ bottom: "0.22em", height: 70 }}
          >
            <svg
              width="100%"
              height="70"
              viewBox="0 0 1000 70"
              preserveAspectRatio="none"
            >
              <path
                d="M0,52 C120,52 150,48 220,44 C300,39 335,16 410,12 C475,9 515,30 585,28 C655,26 695,6 775,3 C845,1 890,16 1000,12"
                fill="none"
                stroke="#ffb240"
                strokeWidth="1.4"
              />
            </svg>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-[1fr_auto] items-end gap-[60px] max-[768px]:grid-cols-1 max-[768px]:items-start max-[768px]:gap-6">
          <p className="max-w-[700px] text-[20px] leading-[1.7] text-[rgba(245,244,236,0.96)] max-[768px]:max-w-none max-[768px]:text-[17px]">
            Founder-led and self-funded. We back absurd ideas and weird
            software, build our own experiments in-house, and buy the tiny
            businesses too small for anyone else&apos;s fund. All through our
            own capital, not someone else&apos;s LP checks.
          </p>
          <a
            href="#"
            className="inline-block w-fit border-b border-[var(--amber)] pb-[5px] font-display text-[14px] font-medium text-[var(--text)] no-underline"
          >
            Absurdity Projects →
          </a>
        </div>
      </div>
    </div>
  );
}
