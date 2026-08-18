import type { CSSProperties } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/thesis", label: "THESIS" },
  { href: "/#acquisitions", label: "ACQUISITIONS" },
  { href: "/#studio", label: "STUDIO" },
  { href: "/#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

export function OpFundMain() {
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
          <span className="text-[var(--amber)]">OP FUND</span>
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
        <h1 className="font-display text-[clamp(44px,5.2vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
          OP
          <br />
          fund<span style={{ color: "var(--amber)" }}>.</span>
        </h1>

        <div className="flex flex-col gap-8">
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            $3.4M. All of it ours.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            No LPs. No outside capital. No one to answer to when a bet
            doesn&apos;t pay off, and no one to split the upside with when
            it does.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            The fund isn&apos;t sitting still waiting for the next check to
            write. We actively trade it, across equities, crypto, and
            futures, and the gains get put right back to work. Every
            position that pays off becomes more capital for the next
            founder we back.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            That&apos;s the model. The fund grows itself. The bigger it
            gets, the more ventures it can fund, and the less patient we
            have to be waiting on someone else&apos;s fundraise cycle.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            Most funds raise once and spend down. Ours compounds.
          </p>
        </div>
      </div>
    </div>
  );
}
