const navLinks = [
  { href: "/#thesis", label: "THESIS" },
  { href: "/#op-fund", label: "OP FUND" },
  { href: "/#acquisitions", label: "ACQUISITIONS" },
  { href: "/#studio", label: "STUDIO" },
  { href: "/#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

export function ContactMain() {
  return (
    <div className="flex flex-col bg-field px-12 py-[26px] max-[768px]:px-6 max-[768px]:py-5">
      <nav className="flex flex-wrap justify-end gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              link.label === "CONTACT"
                ? "text-[var(--text)] no-underline"
                : "text-[var(--dim)] no-underline hover:text-[var(--amber)]"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-1 flex-col justify-end">
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

        <div className="mt-10 max-[768px]:mt-8">
          <div className="font-mono text-[11px] tracking-[0.14em] text-[var(--dim)] opacity-60">
            OPERATORS
          </div>
          <a
            href="mailto:ops@onpointvc.com"
            className="mt-2 inline-block w-fit font-mono text-[13px] text-[var(--text)] hover:text-[var(--amber)] max-[768px]:mt-3"
          >
            ops@onpointvc.com
          </a>
        </div>
      </div>
    </div>
  );
}
