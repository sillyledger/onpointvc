import type { CSSProperties } from "react";
import { SiteNav } from "./SiteNav";

export function Hero() {
  return (
    <section
      className="bg-[var(--offwhite)]"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <SiteNav />

      <div className="flex flex-col items-center justify-center gap-[56px] px-16 py-[60px] max-[768px]:px-6">
        <h1 className="text-center text-[clamp(56px,11vw,136px)] font-black leading-none tracking-[-0.02em] text-transparent [-webkit-text-stroke:2px_var(--ink)] [font-family:var(--font-inter)]">
          ONP<span className="o-pulse text-[var(--red)] [-webkit-text-stroke:0]">O</span>INT
        </h1>

        <p className="text-center text-[clamp(18px,2.4vw,26px)] font-normal text-[var(--ink)]">
          Capital for founder-led absurdity.
        </p>

        <a
          href="/op-fund"
          className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[var(--ink)] px-[30px] py-[17px] font-sans text-base text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--offwhite)]"
        >
          OP Fund
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
