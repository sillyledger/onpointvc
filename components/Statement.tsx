export function Statement() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1600px] px-14 py-[110px] max-[768px]:px-6 max-[768px]:py-20">
        <div className="mb-11 font-mono text-[12px] font-medium tracking-[0.16em] text-[var(--ink-dim)]">
          ABOUT US
        </div>
        <div className="grid grid-cols-[0.95fr_1.05fr] items-end gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <p className="max-w-[600px] font-display text-[clamp(20px,2.1vw,28px)] font-normal leading-[1.5] tracking-[-0.01em] text-[var(--ink)]">
              We&apos;re founder-led and self-funded. Every check comes from our
              own capital, not someone else&apos;s LP fund.{" "}
              <span className="underline decoration-[var(--ink)] underline-offset-[5px]">
                The serious bets and the absurd ones
              </span>{" "}
              get backed with the same conviction. That&apos;s the whole model.
            </p>
            <a
              href="/absurdity-projects"
              className="mt-12 inline-flex items-center gap-3 rounded-full border-[1.5px] border-[var(--ink)] px-[30px] py-[17px] font-sans text-[16px] font-medium text-[var(--ink)] no-underline transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              See the Absurdity Index
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex w-full gap-[18px] max-[900px]:flex-col">
            <div className="flex h-[340px] flex-1 flex-col justify-between rounded-[20px] bg-[var(--panel)] px-[26px] py-[34px] text-[var(--paper)]">
              <div className="font-display text-[56px] font-extrabold leading-none tracking-[-0.02em]">$3.4M</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[rgba(243,241,234,0.7)]">OP FUND</div>
            </div>
            <div className="flex h-[340px] flex-1 flex-col justify-between rounded-[20px] bg-[var(--ink)] px-[26px] py-[34px] text-[var(--paper)]">
              <div className="font-display text-[56px] font-extrabold leading-none tracking-[-0.02em]">8</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[rgba(243,241,234,0.7)]">BACKED START-UPS</div>
            </div>
            <div className="flex h-[340px] flex-1 flex-col justify-between rounded-[20px] bg-[var(--amber)] px-[26px] py-[34px] text-[var(--ink)]">
              <div className="font-display text-[56px] font-extrabold leading-none tracking-[-0.02em]">3</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[rgba(27,26,20,0.65)]">ABSURD PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
