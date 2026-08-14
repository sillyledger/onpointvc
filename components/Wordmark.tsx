import { Mark } from "./Mark";

export function Wordmark() {
  return (
    <div className="flex items-center gap-4">
      <Mark size={38} />
      <div className="flex flex-col gap-[3px] font-mono">
        <div className="text-[11px] font-medium tracking-[0.2em] text-[var(--text)]">
          ONPOINT
        </div>
        <div className="text-[10px] font-medium tracking-[0.14em] text-[var(--dim)]">
          VENTURE CAPITAL
        </div>
      </div>
    </div>
  );
}
