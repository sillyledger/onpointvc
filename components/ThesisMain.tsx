import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function ThesisMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav active="/thesis" />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <div className="grid w-full max-w-[1180px] grid-cols-[0.85fr_1.15fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-14">
          <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[0.95] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
            Our
            <br />
            thesis
            <span className="ml-[0.06em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-[var(--red)] align-baseline" />
          </h1>

          <div className="max-w-[640px]">
            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              We invest like operators, because we are operators. Every
              check comes from our own capital. No LPs, no board to please,
              no fund cycle telling us when to be patient and when to
              panic.
            </p>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              We back early-stage, pre-revenue founders. No traction
              required, no track record needed. Solo founders get the same
              conviction as a team of four. And if your idea sounds a
              little unhinged, that&apos;s not a warning sign to us.
              It&apos;s the pitch.
            </p>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              Most VCs pattern-match against what already worked. We look
              for what hasn&apos;t been tried yet, because someone was too
              scared to send the deck. The serious bets and the absurd
              ones get backed with the same discipline: real operators,
              real capital, real speed.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-10 max-[520px]:grid-cols-1">
              <div>
                <Link
                  href="/op-fund"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)] no-underline transition-colors hover:text-[var(--red)]"
                >
                  OP Fund
                </Link>
                <p className="font-sans text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-[var(--ink)]">
                  Early checks into operators, before the pitch deck is
                  pretty.
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)] no-underline transition-colors hover:text-[var(--red)]"
                >
                  Acquisitions
                </a>
                <p className="font-sans text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-[var(--ink)]">
                  Buying what everyone else ignores and making it work.
                </p>
              </div>

              <div>
                <Link
                  href="/studio"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)] no-underline transition-colors hover:text-[var(--red)]"
                >
                  Studio
                </Link>
                <p className="font-sans text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-[var(--ink)]">
                  Building companies from zero when the idea is ours.
                </p>
              </div>

              <div>
                <Link
                  href="/absurdity-projects"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)] no-underline transition-colors hover:text-[var(--red)]"
                >
                  Absurdity Projects
                </Link>
                <p className="font-sans text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-[var(--ink)]">
                  The bets too weird for anyone else&apos;s investment
                  committee. Backed anyway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
