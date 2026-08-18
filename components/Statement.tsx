export function Statement() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1180px] px-14 pt-[150px] pb-[190px] max-[768px]:px-6 max-[768px]:pt-20 max-[768px]:pb-24">
        <p className="max-w-[1080px] font-display text-[clamp(30px,3.6vw,46px)] font-normal leading-[1.35] tracking-[-0.01em] text-[var(--ink)]">
          When it comes to what we build, we refuse to pick a side.{" "}
          <span className="underline decoration-[1.5px] decoration-[var(--ink)] underline-offset-[6px]">
            The serious bets and the absurd ones
          </span>{" "}
          get backed with the same conviction. Because at OnPoint, we think
          weird ideas deserve real capital too.
        </p>
        <a
          href="#studio"
          className="font-inter mt-14 inline-block rounded-full border-[1.5px] border-[var(--amber)] bg-transparent px-[34px] py-[19px] text-[16px] font-medium text-[var(--ink)] no-underline transition-colors hover:bg-[var(--amber)]"
        >
          See the Absurdity Index
        </a>
      </div>
    </section>
  );
}
