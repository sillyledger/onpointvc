import { SiteNav } from "./SiteNav";

export function ContactMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav active="/contact" />

      <main className="flex justify-center px-6 py-[120px]">
        <div className="grid w-full max-w-[1080px] grid-cols-2 gap-[100px] max-[760px]:grid-cols-1 max-[760px]:gap-16">
          <div>
            <h1 className="mb-7 text-[clamp(44px,6.5vw,84px)] font-black leading-[1.05] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
              Let&apos;s talk.
            </h1>
            <p className="max-w-[34ch] font-sans text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-[var(--ink)]">
              Based in Taichung, backing founders everywhere.
            </p>
          </div>

          <div>
            <div className="mb-[52px]">
              <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
                If you&apos;re pitching
              </span>
              <a
                href="mailto:deal@onpointvc.com"
                className="inline-block border-b-[1.5px] border-[var(--ink)] pb-2.5 text-[clamp(17px,1.7vw,20px)] text-[var(--ink)] no-underline transition-colors hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                deal@onpointvc.com
              </a>
            </div>

            <div className="mb-[52px]">
              <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
                If you&apos;re portfolio
              </span>
              <a
                href="mailto:ops@onpointvc.com"
                className="inline-block border-b-[1.5px] border-[var(--ink)] pb-2.5 text-[clamp(17px,1.7vw,20px)] text-[var(--ink)] no-underline transition-colors hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                ops@onpointvc.com
              </a>
            </div>

            <div>
              <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
                For everything else
              </span>
              <a
                href="mailto:jm@onpointvc.com"
                className="inline-block border-b-[1.5px] border-[var(--ink)] pb-2.5 text-[clamp(17px,1.7vw,20px)] text-[var(--ink)] no-underline transition-colors hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                jm@onpointvc.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
