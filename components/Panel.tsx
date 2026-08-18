"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Mark } from "./Mark";

const navLinks = [
  { href: "#thesis", label: "THESIS" },
  { href: "#op-fund", label: "OP FUND" },
  { href: "#acquisitions", label: "ACQUISITIONS" },
  { href: "#studio", label: "STUDIO" },
  { href: "#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

function NavLink({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className: string;
}) {
  return href.startsWith("/") ? (
    <Link key={label} href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  ) : (
    <a key={label} href={href} className={className} onClick={onClick}>
      {label}
    </a>
  );
}

export function Panel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col max-[768px]:self-start">
      <div
        id="portfolio"
        className="hidden flex-1 flex-col border-r border-[var(--hair)] bg-panel px-9 py-[34px] min-[769px]:flex"
      >
        <Link href="/">
          <Wordmark />
        </Link>

        <div className="flex flex-1 items-center">
          <nav className="flex flex-col gap-[14px] font-mono text-[12.5px] tracking-[0.1em]">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="flex h-16 items-center justify-between border-b border-[var(--hair)] bg-panel px-5 min-[769px]:hidden">
        <Link href="/" aria-label="OnPoint VC home">
          <Mark size={30} />
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[1.5px] w-6 bg-[var(--text)] transition-transform ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-[var(--text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-[var(--text)] transition-transform ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-panel px-[22px] py-4 min-[769px]:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="OnPoint VC home" onClick={() => setMenuOpen(false)}>
              <Mark size={30} />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span className="block h-[1.5px] w-6 translate-y-[6.5px] rotate-45 bg-[var(--text)]" />
              <span className="block h-[1.5px] w-6 -translate-y-[6.5px] -rotate-45 bg-[var(--text)]" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-start justify-center gap-7 font-mono text-[16px] tracking-[0.1em]">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--text)] no-underline hover:text-[var(--amber)]"
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
