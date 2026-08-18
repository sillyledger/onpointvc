export function Statement() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1180px] px-14 pt-[150px] pb-[190px] max-[768px]:px-6 max-[768px]:pt-20 max-[768px]:pb-24">
        <p className="max-w-[920px] font-display text-[clamp(24px,2.8vw,36px)] font-normal leading-[1.4] tracking-[-0.01em] text-[var(--ink)]">
          We&apos;re founder-led and self-funded. Every check comes from our
          own capital, not someone else&apos;s LP fund.{" "}
          <span className="underline decoration-[1.5px] decoration-[var(--ink)] text-[var(--ink)] underline-offset-[5px]">
            The serious bets and the absurd ones
          </span>{" "}
          get backed with the same conviction. That&apos;s the whole model.
        </p>
        <a
          href="#studio"
          className="font-inter mt-14 inline-block rounded-full border-[1.5px] border-[var(--amber)] bg-transparent px-[30px] py-[17px] text-[16px] font-medium text-[var(--ink)] no-underline transition-colors hover:bg-[var(--amber)]"
        >
          See the Absurdity Index
        </a>
      </div>
    </section>
  );
}
