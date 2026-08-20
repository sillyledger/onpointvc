import type { CSSProperties } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/op-fund", label: "OP FUND" },
  { href: "/thesis", label: "THESIS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/contact", label: "CONTACT" },
];

export function AbsurdityMain() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[var(--paper)] px-12 py-[34px] text-[var(--ink)] max-[768px]:px-6 max-[768px]:py-8"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link href="/" aria-label="OnPoint VC home">
          <Wordmark />
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
          <span className="text-[var(--amber)]">ABSURDITY PROJECTS</span>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--ink)] no-underline hover:text-[var(--amber)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] items-end gap-[70px] py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <h1 className="font-display text-[clamp(40px,4.6vw,68px)] font-extrabold leading-[1.05] tracking-[-0.02em] lowercase">
          absurdity
          <br />
          projects<span style={{ color: "var(--panel)" }}>.</span>
        </h1>

        <div className="flex flex-col gap-8">
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Every fund says they back bold ideas. Most of them mean bold
            within reason.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            This is the one line of business that doesn&apos;t have a
            reason.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Absurdity Projects is where the ideas that shouldn&apos;t work
            get built anyway. Not because we think they&apos;re secretly
            brilliant in disguise. Sometimes they&apos;re just funny, or
            strange, or the kind of thing that makes no sense on a cap
            table and total sense at 2am. We back them the same way we
            back everything else: real capital, real conviction, no
            committee to talk us out of it.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Stupid Hit is the proof. Nobody pitched us a five-year roadmap
            for it. It exists because it was a good idea to make, and we
            made it.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            We don&apos;t run this bucket to be contrarian for its own
            sake. We run it because the absurd ones are usually where the
            actual creativity lives, before it gets sanded down into
            something a pitch deck can survive. Most of what&apos;s
            interesting starts out looking a little stupid.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Three, right now. More coming, whenever the next one shows up.
          </p>
        </div>
      </div>
    </div>
  );
}
