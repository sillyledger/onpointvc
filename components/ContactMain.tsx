import type { CSSProperties } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/thesis", label: "THESIS" },
  { href: "/op-fund", label: "OP FUND" },
  { href: "/studio", label: "STUDIO" },
  { href: "/absurdity-projects", label: "ABSURDITY PROJECTS" },
];

const routes = [
  { label: "PITCH", email: "deal@onpointvc.com" },
  { label: "OPERATORS", email: "ops@onpointvc.com" },
  { label: "FOUNDERS", email: "jm@onpointvc.com" },
];

export function ContactMain() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[var(--paper)] px-12 py-[34px] text-[var(--ink)] max-[768px]:px-6 max-[768px]:py-8"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link href="/" aria-label="OnPoint VC home">
          <Wordmark />
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--ink)] no-underline hover:text-[var(--amber)]"
            >
              {link.label}
            </a>
          ))}
          <span className="text-[var(--amber)]">CONTACT</span>
        </div>
      </nav>

      <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] items-end gap-[70px] py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <h1 className="max-w-[960px] font-display text-[clamp(44px,7.4vw,100px)] font-extrabold leading-[0.98] tracking-[-0.02em] lowercase max-[768px]:text-[clamp(34px,9vw,38px)]">
          tell us
          <br />
          what you
          <br />
          built<span style={{ color: "var(--amber)" }}>.</span>
        </h1>

        <div>
          <p className="mb-14 max-w-[520px] font-display text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--ink-dim)]">
            One email, no gatekeeping. What the company does, revenue if
            it&apos;s real, why now.
          </p>
          <div className="grid grid-cols-3 gap-14 max-[600px]:grid-cols-1 max-[600px]:gap-8">
            {routes.map((r) => (
              <div key={r.label}>
                <div className="mb-[10px] font-mono text-[11px] tracking-[0.16em] text-[var(--ink-dim)]">
                  {r.label}
                </div>
                <a
                  href={`mailto:${r.email}`}
                  className="inline-block font-mono text-[clamp(17px,1.5vw,20px)] tracking-[0.01em] text-[var(--ink)] no-underline hover:text-[var(--amber)]"
                >
                  {r.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
