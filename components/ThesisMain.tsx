import type { CSSProperties } from "react";
import { SiteNav } from "./SiteNav";

const lines = [
  {
    label: "OP FUND",
    desc: "Early checks into operators, before the pitch deck is pretty.",
  },
  {
    label: "ACQUISITIONS",
    desc: "Buying what everyone else ignores and making it work.",
  },
  {
    label: "STUDIO",
    desc: "Building companies from zero when the idea is ours.",
  },
  {
    label: "ABSURDITY PROJECTS",
    desc: "The bets too weird for anyone else's investment committee. Backed anyway.",
  },
];

export function ThesisMain() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[var(--paper)] px-12 py-[34px] text-[var(--ink)] max-[768px]:px-6 max-[768px]:py-8"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <SiteNav active="/thesis" />

      <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] items-end gap-[70px] py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <h1 className="font-display text-[clamp(44px,5.2vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em] lowercase">
          our
          <br />
          thesis<span style={{ color: "var(--panel)" }}>.</span>
        </h1>

        <div>
          <div className="mb-10 flex flex-col gap-8">
            <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
              We invest like operators, because we are operators. Every check
              comes from our own capital. No LPs, no board to please, no fund
              cycle telling us when to be patient and when to panic.
            </p>
            <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
              We back early-stage, pre-revenue founders. No traction
              required, no track record needed. Solo founders get the same
              conviction as a team of four. And if your idea sounds a little
              unhinged, that&apos;s not a warning sign to us. It&apos;s the
              pitch.
            </p>
            <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
              Most VCs pattern-match against what already worked. We look
              for what hasn&apos;t been tried yet, because someone was too
              scared to send the deck. The serious bets and the absurd ones
              get backed with the same discipline: real operators, real
              capital, real speed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-10 max-[600px]:grid-cols-1">
            {lines.map((line) => (
              <div key={line.label}>
                <div className="mb-[10px] font-mono text-[11px] tracking-[0.16em] text-[var(--ink-dim)]">
                  {line.label}
                </div>
                <p className="max-w-[320px] font-sans text-[14.5px] leading-[1.6] text-[var(--ink)]">
                  {line.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
