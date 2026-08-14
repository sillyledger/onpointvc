import { Wordmark } from "./Wordmark";

export function Panel() {
  return (
    <div
      id="portfolio"
      className="hidden min-[900px]:flex flex-col justify-between border-r border-[var(--hair)] bg-panel px-9 py-[34px]"
    >
      <div className="flex items-start justify-between">
        <Wordmark />
        <div className="flex items-center gap-1.5 pt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8FD98F]" />
          <span className="font-mono text-[9px] tracking-[0.15em] text-[var(--dim)]">
            LIVE
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="text-[14px] font-normal text-[var(--text)]">
          🇹🇼 Taipei&nbsp;&nbsp;/&nbsp;&nbsp;🇬🇧 London
        </div>
        <div className="font-mono text-[13px] text-[var(--text)]">
          jm@onpointvc.com
        </div>
      </div>

      <svg
        viewBox="0 0 300 60"
        className="h-auto w-full opacity-60"
        aria-hidden="true"
      >
        <path
          d="M 0 40 C 30 40, 45 40, 65 40 C 80 40, 88 12, 108 12 C 128 12, 136 40, 156 40 C 186 40, 200 40, 284 40"
          fill="none"
          stroke="var(--dim)"
          strokeWidth="1"
        />
        <circle cx="108" cy="12" r="3" fill="var(--amber)" className="lifeline-dot" />
      </svg>
    </div>
  );
}
