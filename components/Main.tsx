export function Main() {
  return (
    <div className="flex flex-col px-[22px] py-6 min-[900px]:px-12 min-[900px]:py-[34px]">
      <nav className="flex justify-end gap-[30px] font-mono text-[12.5px]">
        <a href="#thesis" className="text-[var(--dim)] hover:text-[var(--text)]">
          Thesis
        </a>
        <a href="#portfolio" className="text-[var(--dim)] hover:text-[var(--text)]">
          Portfolio
        </a>
        <a
          href="mailto:jm@onpointvc.com"
          className="text-[var(--dim)] hover:text-[var(--text)]"
        >
          Contact
        </a>
      </nav>

      <div className="flex flex-1 flex-col justify-center max-w-[660px]">
        <div className="mb-7 font-mono text-xs text-[var(--dim)] tracking-[0.05em]">
          — operator-led venture capital &amp; micro-pe
        </div>
        <h1 className="font-display text-[clamp(44px,7.4vw,100px)] font-medium leading-[0.98] tracking-[-0.02em] lowercase">
          capital that
          <br />
          compounds<span style={{ color: "var(--amber)" }}>.</span>
        </h1>
        <p className="mt-7 max-w-[410px] text-[18px] leading-[1.7] text-[var(--dim)]">
          We built and sold software before we wrote a check. Now we back the
          ones doing the same — and buy the ones already making money.
        </p>
        <a
          href="#thesis"
          className="mt-7 inline-block w-fit border-b border-[rgba(245,244,236,0.5)] pb-[3px] font-mono text-[13px] text-[var(--text)] hover:border-[var(--text)]"
        >
          read thesis →
        </a>
      </div>

      <div className="font-mono text-[11px] text-[var(--dim)]">EST. 2026</div>
    </div>
  );
}
