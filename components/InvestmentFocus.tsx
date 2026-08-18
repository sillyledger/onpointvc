export function InvestmentFocus() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1600px] px-14 pb-[130px] max-[768px]:px-6 max-[768px]:pb-24">
        <div className="mb-11 font-mono text-[12px] font-medium tracking-[0.16em] text-[var(--ink-dim)]">
          INVESTMENT FOCUS
        </div>
        <div className="flex items-end justify-between gap-[70px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-10">
          <p className="max-w-[840px] font-display text-[clamp(20px,2.1vw,28px)] font-normal leading-[1.5] tracking-[-0.01em] text-[var(--ink)]">
            We back early-stage, pre-revenue founders. No traction required,
            no track record needed. Solo founders get the same conviction as
            a team of four; we&apos;ve never once needed a tiebreaker. And if
            your idea sounds a little unhinged, good. The absurd ones get
            read twice, not filed away.
          </p>
          <a
            href="#thesis"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border-[1.5px] border-[var(--ink)] px-[30px] py-[17px] font-sans text-[16px] font-medium text-[var(--ink)] no-underline transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            See Full Thesis
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
