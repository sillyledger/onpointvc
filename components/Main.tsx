import type { CSSProperties } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/thesis", label: "THESIS" },
  { href: "/op-fund", label: "OP FUND" },
  { href: "/studio", label: "STUDIO" },
  { href: "/absurdity-projects", label: "ABSURDITY PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

export function Main() {
  return (
    <div
      className="flex min-h-[82vh] flex-col bg-[var(--paper)] px-12 py-[34px] max-[768px]:px-6 max-[768px]:py-8"
      style={{ "--text": "var(--ink)", "--dim": "var(--ink-dim)" } as CSSProperties}
    >
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link href="/" aria-label="OnPoint VC home">
          <Wordmark />
        </Link>
        <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12.5px] tracking-[0.1em]">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </nav>

      <div className="flex flex-1 flex-col justify-end">
        <h1 className="max-w-[960px] font-display text-[clamp(44px,7.4vw,100px)] font-extrabold leading-[0.98] tracking-[-0.02em] text-[var(--text)] lowercase max-[768px]:text-[clamp(34px,9vw,38px)]">
          we&apos;re bold, absurd,
          <br />
          and driven<span style={{ color: "var(--panel)" }}>.</span>
        </h1>
        <div className="mt-[52px] flex justify-end">
          <a
            href="#approach"
            className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-[var(--text)] px-[30px] py-[17px] font-sans text-[15px] font-medium text-[var(--text)] no-underline transition-colors hover:bg-[var(--text)] hover:text-[var(--paper)]"
          >
            Our Approach
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
