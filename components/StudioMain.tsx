import type { CSSProperties } from "react";
import { SiteNav } from "./SiteNav";

export function StudioMain() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[var(--paper)] px-12 py-[34px] text-[var(--ink)] max-[768px]:px-6 max-[768px]:py-8"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <SiteNav active="/studio" />

      <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] items-end gap-[70px] py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <h1 className="font-display text-[clamp(44px,5.2vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em] lowercase">
          studio<span style={{ color: "var(--panel)" }}>.</span>
        </h1>

        <div className="flex flex-col gap-8">
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            We build software.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Some of it is the kind you&apos;d expect from a fund that calls
            itself operator-led: real products, real users, real revenue.
            The stuff that pays the bills and proves the model works.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            And then some of it is not that at all.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Studio is also where we build the ridiculous things. The
            projects that don&apos;t fit a pitch deck, that no committee
            would approve, that exist because someone on the team said
            &ldquo;what if&rdquo; at 2am and nobody talked them out of it.
            Stupid Hit lives here for a reason.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            We don&apos;t separate the two. Same team, same standards, same
            conviction. The serious builds get shipped with the same care
            as the unhinged ones, and the unhinged ones get taken exactly
            as seriously as the serious ones. That&apos;s not a
            contradiction. That&apos;s the whole point.
          </p>
          <p className="max-w-[620px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink)]">
            Most studios pick a lane: build for the market, or build for
            fun. We never saw why we had to choose.
          </p>
        </div>
      </div>
    </div>
  );
}
