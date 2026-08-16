export function ThesisSpread() {
  return (
    <div
      id="thesis"
      className="px-[22px] py-16 min-[900px]:px-12 min-[900px]:pt-[100px] min-[900px]:pb-[110px]"
    >
      <div className="mx-auto max-w-[1020px]">
        <div className="mb-14 font-mono text-xs tracking-[0.08em] text-[var(--dim)]">
          THE THESIS
        </div>

        <div className="grid grid-cols-1 gap-[34px] min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div className="text-[17px] leading-[1.7] text-[var(--dim)]">
            <p className="mb-5">
              <span className="float-left pr-2.5 pt-1.5 font-display text-[74px] font-medium leading-[0.8] text-[var(--text)]">
                W
              </span>
              e built and sold software before we wrote a single check, which
              means we underwrite differently than most funds. Product
              velocity is the only diligence metric that hasn&apos;t lied to
              us — a founder who ships weekly tells us more than a deck ever
              could.
            </p>
            <p>
              That&apos;s why we don&apos;t just write checks. We spend hours
              inside the businesses we back, doing the unglamorous work most
              funds outsource to a portfolio-ops team that&apos;s never
              shipped a feature.
            </p>
          </div>

          <div>
            <div className="border-y border-[var(--hair)] py-[26px]">
              <div className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-[var(--text)]">
                &quot;Profitable software gets bought outright, not just
                funded.&quot;
              </div>
              <div className="mt-4 font-mono text-[11px] tracking-[0.08em] text-amber">
                ON BUYOUTS
              </div>
            </div>
            <p className="mt-[26px] text-[17px] leading-[1.7] text-[var(--dim)]">
              If a founder wants liquidity instead of a board seat,
              we&apos;re the exit. No process, no auction — a term sheet in
              fourteen days and an operator on the other side of the table
              who&apos;s done this before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
