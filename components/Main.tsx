export function Main() {
  return (
    <div className="flex flex-col px-[22px] py-6 min-[900px]:px-12 min-[900px]:py-[34px]">
      <div className="flex flex-1 flex-col justify-center max-w-[960px]">
        <div className="relative">
          <h1 className="relative z-[2] font-display text-[clamp(44px,7.4vw,100px)] font-extrabold leading-[0.98] tracking-[-0.02em] lowercase">
            we&apos;re bold, absurd,
            <br />
            and driven.
          </h1>
          <div
            className="pointer-events-none absolute left-0 right-0 z-[1] overflow-visible"
            style={{ bottom: "0.22em", height: 70 }}
          >
            <svg
              width="100%"
              height="70"
              viewBox="0 0 1000 70"
              preserveAspectRatio="none"
            >
              <path
                d="M0,52 C120,52 150,48 220,44 C300,39 335,16 410,12 C475,9 515,30 585,28 C655,26 695,6 775,3 C845,1 890,16 1000,12"
                fill="none"
                stroke="#ffb240"
                strokeWidth="1.4"
              />
            </svg>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-[1fr_auto] items-end gap-[60px]">
          <p className="max-w-[700px] text-[20px] leading-[1.7] text-[rgba(245,244,236,0.96)]">
            Founder-led and self-funded. We back absurd ideas and weird
            software, build our own experiments in-house, and buy the tiny
            businesses too small for anyone else&apos;s fund. All through our
            own capital, not someone else&apos;s LP checks.
          </p>
          <a
            href="#"
            className="inline-block w-fit border-b border-[var(--amber)] pb-[5px] font-display text-[14px] font-medium text-[var(--text)] no-underline"
          >
            Absurdity Projects →
          </a>
        </div>
      </div>
    </div>
  );
}
