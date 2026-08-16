import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/#thesis", label: "THESIS" },
  { href: "/#op-fund", label: "OP FUND" },
  { href: "/#acquisitions", label: "ACQUISITIONS" },
  { href: "/#studio", label: "STUDIO" },
  { href: "/#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

export function ContactNav() {
  return (
    <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_1.55fr]">
      <div className="flex items-center bg-panel px-[22px] py-5 min-[900px]:px-9 min-[900px]:py-[26px]">
        <Wordmark />
      </div>
      <div className="flex items-center justify-end bg-field px-[22px] py-5 min-[900px]:px-12 min-[900px]:py-[26px]">
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
      </div>
    </div>
  );
}
