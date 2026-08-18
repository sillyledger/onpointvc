const companies = [
  { name: "One Peak Two", tag: "STUDIO" },
  { name: "TWO", tag: "OP FUND" },
  { name: "Stupid Hit", tag: "ABSURDITY PROJECTS" },
  { name: "Sorano", tag: "ACQUISITIONS" },
];

export function Portfolio() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1600px] px-14 py-[130px] max-[768px]:px-6 max-[768px]:py-20">
        <div className="mb-11 font-mono text-[12px] font-medium tracking-[0.16em] text-[var(--ink-dim)]">
          PORTFOLIO
        </div>
        <div className="mb-14 flex items-end justify-between gap-[60px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8">
          <p className="max-w-[680px] font-display text-[clamp(20px,2.1vw,28px)] font-normal leading-[1.5] tracking-[-0.01em] text-[var(--ink)]">
            Four companies we&apos;ve built or backed with our own capital
            &mdash; each one proof the model actually works.
          </p>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border-[1.5px] border-[var(--amber)] px-[30px] py-[17px] font-sans text-[16px] font-medium text-[var(--ink)] no-underline transition-colors hover:bg-[var(--amber)]"
          >
            See All Companies
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
          {companies.map((c) => (
            <a
              key={c.name}
              href="#"
              className="relative flex aspect-[16/11] flex-col justify-between rounded-[22px] bg-[#0c0d14] p-[34px] no-underline"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(245,244,236,0.1)] px-[14px] py-[8px] font-mono text-[11.5px] tracking-[0.12em] text-[#f5f4ec]">
                {c.tag}
              </span>
              <span className="absolute right-[34px] top-[34px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[rgba(245,244,236,0.1)] text-[#f5f4ec]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
              {/* Center intentionally left blank — real logo/mark goes here later */}
              <h3 className="font-mono text-[clamp(22px,2.1vw,30px)] font-medium uppercase leading-[1.15] tracking-[0.02em] text-[#f5f4ec]">
                {c.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
