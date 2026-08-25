const companies = [
  { name: "One Peak Two", tag: "STUDIO" },
  { name: "TWO", tag: "OP FUND" },
  { name: "Stupid Hit", tag: "ABSURDITY PROJECTS" },
  { name: "Study Brew", tag: "ACQUISITIONS" },
];

export function Portfolio() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1600px] px-14 py-[130px] max-[768px]:px-6 max-[768px]:py-20">
        <div className="mb-11 font-mono text-[12px] font-medium tracking-[0.16em] text-[var(--ink-dim)]">
          PORTFOLIO
        </div>
        <div className="mb-14">
          <p className="max-w-[680px] font-display text-[clamp(20px,2.1vw,28px)] font-normal leading-[1.5] tracking-[-0.01em] text-[var(--ink)]">
            Companies we&apos;ve built or backed with our own capital. Each
            one proves the model works. Unhinged or not.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
          {companies.map((c) => (
            <a
              key={c.name}
              href="#"
              className="relative flex aspect-[2/1] flex-col justify-between rounded-[4px] border border-[var(--ink)] p-[26px] no-underline"
            >
              <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--ink-dim)]">
                {c.tag}
              </span>
              <span className="absolute right-[30px] top-[30px] text-[var(--ink)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px]">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
              {/* Center intentionally left blank — real logo/mark goes here later */}
              <h3 className="font-mono text-[clamp(20px,2vw,28px)] font-medium uppercase leading-[1.15] tracking-[0.02em] text-[var(--ink)]">
                {c.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
