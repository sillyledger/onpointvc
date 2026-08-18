import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/#thesis", label: "THESIS" },
  { href: "/#op-fund", label: "OP FUND" },
  { href: "/#acquisitions", label: "ACQUISITIONS" },
  { href: "/#studio", label: "STUDIO" },
  { href: "/#team", label: "TEAM" },
];

export function ContactMain() {
  return (
    <div className="flex min-h-screen flex-col px-12 py-[34px] max-[768px]:px-6 max-[768px]:py-8">
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link href="/" aria-label="OnPoint VC home">
          <Wordmark />
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
            >
              {link.label}
            </a>
          ))}
          <span className="text-[var(--amber)]">CONTACT</span>
        </div>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-display text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[0.98] tracking-[-0.02em] lowercase max-[768px]:text-[clamp(28px,8vw,34px)]">
          tell us
          <br />
          what you
          <br />
          built<span style={{ color: "var(--amber)" }}>.</span>
        </h1>

        <div className="mt-12 flex flex-col items-center max-[768px]:mt-9">
          <p className="max-w-[460px] text-[20px] leading-[1.7] text-[var(--dim)]">
            one email, no gatekeeping. what the company does, revenue if
            it&apos;s real, why now.
          </p>
          <a
            href="mailto:deal@onpointvc.com"
            className="mt-7 inline-block w-fit border-b border-[var(--amber)] pb-[3px] text-[20px] text-[var(--text)]"
          >
            deal@onpointvc.com
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center max-[768px]:mt-8">
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
    </div>
  );
}
