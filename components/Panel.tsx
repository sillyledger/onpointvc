import { Wordmark } from "./Wordmark";

const fields = [
  { label: "LOCATION", value: "Taipei/London" },
  { label: "STATUS", value: "Accepting deal flow" },
];

export function Panel() {
  return (
    <div
      id="portfolio"
      className="hidden min-[900px]:flex flex-col justify-between border-r border-[var(--hair)] bg-panel px-9 py-[34px]"
    >
      <Wordmark />

      <div className="flex flex-col gap-[18px]">
        {fields.map((field, i) => (
          <div
            key={field.label}
            className={
              i === 0 ? "" : "border-t border-[var(--hair)] pt-4"
            }
          >
            <div className="mb-1.5 font-mono text-[10px] tracking-[0.12em] text-[var(--dim)]">
              {field.label}
            </div>
            <div className="text-[13px] text-[var(--text)]">{field.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
