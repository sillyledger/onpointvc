import { SiteNav } from "./SiteNav";

export function OpFundMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav active="/op-fund" />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <div className="grid w-full max-w-[1180px] grid-cols-[0.85fr_1.15fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-14">
          <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[0.95] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
            OP
            <br />
            fund
            <span className="ml-[0.06em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-[var(--red)] align-baseline" />
          </h1>

          <div className="max-w-[640px]">
            <div className="mb-11">
              <span className="block text-[clamp(56px,7.5vw,104px)] font-black leading-none tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
                $3.4M
              </span>
              <span className="mt-3.5 block font-sans text-[clamp(18px,2vw,24px)] text-[var(--ink)]">
                All of it ours.
              </span>
            </div>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              No LPs. No outside capital. No one to answer to when a bet
              doesn&apos;t pay off, and no one to split the upside with when
              it does.
            </p>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              The fund isn&apos;t sitting still waiting for the next check to
              write. We actively trade it, across equities, crypto, and
              futures, and the gains get put right back to work.
            </p>

            <div className="mb-7 flex flex-wrap gap-2.5">
              <span className="rounded-full border-[1.5px] border-[var(--ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)]">
                Equities
              </span>
              <span className="rounded-full border-[1.5px] border-[var(--ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)]">
                Crypto
              </span>
              <span className="rounded-full border-[1.5px] border-[var(--ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)]">
                Futures
              </span>
              <a
                href="#"
                className="rounded-full border-[1.5px] border-[var(--ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)] no-underline transition-colors hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                Acquisitions
              </a>
            </div>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              Every position that pays off becomes more capital for the next
              founder we back. That&apos;s the model. The fund grows itself.
            </p>

            <svg
              className="mb-7"
              width="220"
              height="64"
              viewBox="0 0 220 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 52 C 40 54, 55 40, 78 42 S 118 20, 140 22 S 178 6, 218 4"
                stroke="var(--red)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="218" cy="4" r="4" fill="var(--red)" />
            </svg>

            <p className="font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              The bigger it gets, the more ventures it can fund, and the less
              patient we have to be waiting on someone else&apos;s fundraise
              cycle. Most funds raise once and spend down. Ours compounds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
