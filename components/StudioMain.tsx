import { SiteNav } from "./SiteNav";

export function StudioMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav active="/studio" />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <div className="grid w-full max-w-[1180px] grid-cols-[0.85fr_1.15fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-14">
          <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[0.95] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
            Studio
            <span className="ml-[0.06em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-[var(--red)] align-baseline" />
          </h1>

          <div className="max-w-[640px]">
            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              We build software. Some of it is exactly what you&apos;d
              expect from a fund that calls itself operator-led: real
              products, real users, real revenue. The stuff that pays the
              bills and proves the model works.
            </p>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              And then some of it is not that at all. Studio is also
              where we build the ridiculous things, the projects that
              don&apos;t fit a pitch deck, that no committee would
              approve, that exist because someone on the team said
              &quot;what if&quot; at 2am and nobody talked them out of
              it.
            </p>

            <p className="mb-7 font-sans text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]">
              We don&apos;t separate the two. Same team, same standards,
              same conviction, whichever bucket it lands in. Most
              studios pick a lane: build for the market, or build for
              fun. We never saw why we had to choose.
            </p>

            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
              Built here
            </span>

            <div className="mb-2 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
              <div className="col-span-2 flex flex-col gap-2 rounded-md border-[1.5px] border-[var(--ink)] p-[26px] max-[600px]:col-span-1">
                <h3 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--font-inter)]">
                  Stupid Hit
                </h3>
                <span className="font-mono text-[11.5px] text-[var(--ink-dim)]">
                  stupidhit.com
                </span>
                <p className="mt-1.5 max-w-[60ch] font-sans text-[16px] leading-[1.55] text-[var(--ink)]">
                  The 2am idea nobody talked us out of. Built on a
                  19-year-old domain.
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-md border-[1.5px] border-[var(--ink)] p-[26px]">
                <h3 className="text-[clamp(20px,2.4vw,24px)] font-bold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--font-inter)]">
                  Sorano
                </h3>
                <span className="font-mono text-[11.5px] text-[var(--ink-dim)]">
                  sorano.space
                </span>
                <p className="mt-1.5 font-sans text-[14.5px] leading-[1.55] text-[var(--ink)]">
                  Roadmap, changelog, and community votes for your
                  product.
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-md border-[1.5px] border-[var(--ink)] p-[26px]">
                <h3 className="text-[clamp(20px,2.4vw,24px)] font-bold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--font-inter)]">
                  TWO Docs
                </h3>
                <span className="font-mono text-[11.5px] text-[var(--ink-dim)]">
                  two.so
                </span>
                <p className="mt-1.5 font-sans text-[14.5px] leading-[1.55] text-[var(--ink)]">
                  A minimal docs editor for Mac and iPad, with a split
                  view for writing and reference side by side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
