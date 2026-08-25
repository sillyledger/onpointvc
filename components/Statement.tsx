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
              own capital, not someone else&apos;s LP fund. The serious bets and the{" "}
              <a
                href="/absurdity-projects"
                className="underline decoration-[var(--ink)] underline-offset-[5px] text-[var(--ink)]"
              >
                absurd ones
              </a>{" "}
              get backed with the same conviction. That&apos;s the whole model.
            </p>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-[18px] max-[900px]:grid-cols-1">
            <div className="relative flex h-[340px] flex-col justify-between rounded-[4px] border border-[var(--ink)] px-[26px] py-[34px]">
              <span className="absolute right-[22px] top-[22px] h-2 w-2 rounded-full bg-[var(--field)]" />
              <div className="font-display text-[56px] font-extrabold leading-none tracking-[-0.02em] text-[var(--ink)]">$3.4M</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[var(--ink-dim)]">OP FUND</div>
            </div>
            <div className="flex h-[340px] flex-col justify-between rounded-[4px] border border-[var(--ink)] px-[26px] py-[34px]">
              <div className="font-display text-[56px] font-extrabold leading-none tracking-[-0.02em] text-[var(--ink)]">8</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[var(--ink-dim)]">BACKED START-UPS</div>
            </div>
            <div className="relative flex h-[340px] flex-col justify-between rounded-[4px] border border-[var(--ink)] px-[26px] py-[34px]">
              <span className="absolute right-[22px] top-[22px] h-2 w-2 rounded-full bg-[var(--amber)]" />
              <div className="font-display text-[64px] font-extrabold leading-none tracking-[-0.02em] text-[var(--ink)]">3</div>
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-[var(--ink-dim)]">ABSURD PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
