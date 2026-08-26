import Link from "next/link";

export function About() {
  return (
    <section className="flex justify-center px-6 pb-[140px] pt-12">
      <div className="max-w-[640px] text-left">
        <p className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)] mb-7">
          OnPoint invests like operators, because we are operators. Every
          check comes from our own capital. No LPs, no board to please, no
          fund cycle telling us when to be patient and when to panic.
          That&apos;s the whole{" "}
          <Link
            href="/thesis"
            className="text-[var(--ink)] no-underline border-b border-[var(--ink-dim)] hover:text-[var(--red)] hover:border-[var(--red)]"
          >
            thesis
          </Link>
          .
        </p>

        <p className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)] mb-7">
          The{" "}
          <Link
            href="/op-fund"
            className="text-[var(--ink)] no-underline border-b border-[var(--ink-dim)] hover:text-[var(--red)] hover:border-[var(--red)]"
          >
            OP Fund
          </Link>{" "}
          is $3.4M, all of it ours. We trade it actively, across equities,
          crypto, and futures, and every gain goes straight back into the
          next founder we back.
        </p>

        <p className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)] mb-7">
          <Link
            href="/studio"
            className="text-[var(--ink)] no-underline border-b border-[var(--ink-dim)] hover:text-[var(--red)] hover:border-[var(--red)]"
          >
            Studio
          </Link>{" "}
          is where we build things ourselves. Some of it is the
          operator-led software you&apos;d expect, real products, real
          users, real revenue. Some of it is stranger than that.
        </p>

        <p className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
          <Link
            href="/absurdity-projects"
            className="text-[var(--ink)] no-underline border-b border-[var(--ink-dim)] hover:text-[var(--red)] hover:border-[var(--red)]"
          >
            Absurdity Projects
          </Link>{" "}
          is the one line of business that doesn&apos;t need a reason. If
          an idea is funny, strange, or makes no sense on a cap table but
          total sense at 2am, we back it anyway.
        </p>
      </div>
    </section>
  );
}
