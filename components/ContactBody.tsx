export function ContactBody() {
  return (
    <div className="flex h-full flex-col justify-end bg-field px-[22px] py-10 min-[900px]:px-12 min-[900px]:py-[34px]">
      <p className="max-w-[460px] text-[18px] leading-[1.7] text-[var(--dim)]">
        one email, no gatekeeping. what the company does, revenue if it&apos;s
        real, why now.
      </p>

      <a
        href="mailto:deal@onpointvc.com"
        className="mt-7 inline-block w-fit border-b border-[var(--amber)] pb-[3px] text-[20px] text-[var(--text)]"
      >
        deal@onpointvc.com
      </a>

      <div className="mt-10">
        <div className="font-mono text-[11px] tracking-[0.14em] text-[var(--dim)] opacity-60">
          OPERATORS
        </div>
        <a
          href="mailto:ops@onpointvc.com"
          className="mt-2 inline-block w-fit font-mono text-[13px] text-[var(--text)] hover:text-[var(--amber)]"
        >
          ops@onpointvc.com
        </a>
      </div>
    </div>
  );
}
