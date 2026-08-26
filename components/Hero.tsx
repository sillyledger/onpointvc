import type { CSSProperties } from "react";
import { SiteNav } from "./SiteNav";

export function Hero() {
  return (
    <section
      className="bg-[var(--offwhite)]"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <SiteNav />

      <div className="flex flex-col items-center justify-center gap-[30px] px-16 py-[60px] max-[768px]:px-6">
        <div className="relative flex items-center justify-center">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 z-[1] h-[140px] w-full -translate-y-1/2"
            viewBox="0 0 1600 140"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 C 150,70 280,100 400,85 C 550,65 620,20 720,25 C 820,30 850,90 950,95 C 1080,100 1150,60 1280,80 C 1400,98 1500,75 1600,88"
              fill="none"
              stroke="var(--red)"
              strokeWidth="1.5"
            />
          </svg>
          <h1
            className="relative z-[2] text-center text-[clamp(90px,15vw,260px)] font-black leading-none tracking-[-0.02em] text-transparent [-webkit-text-stroke:2.5px_var(--ink)] [font-family:var(--font-inter)]"
          >
            ONP<span className="text-[var(--red)] [-webkit-text-stroke:0]">O</span>INT
          </h1>
        </div>

        <p className="text-center text-[clamp(28px,3.4vw,40px)] font-black tracking-[-0.01em] text-[var(--ink)] [font-family:var(--font-inter)]">
          We&apos;re bold, absurd, and driven.
        </p>
      </div>

      <div className="flex justify-end px-16 pb-14 max-[768px]:px-6">
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
