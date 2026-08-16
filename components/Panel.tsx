import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "#thesis", label: "THESIS" },
  { href: "#op-fund", label: "OP FUND" },
  { href: "#acquisitions", label: "ACQUISITIONS" },
  { href: "#studio", label: "STUDIO" },
  { href: "#team", label: "TEAM" },
  { href: "/contact", label: "CONTACT" },
];

export function Panel() {
  return (
    <div
      id="portfolio"
      className="hidden min-[900px]:flex flex-col border-r border-[var(--hair)] bg-panel px-9 py-[34px]"
    >
      <Link href="/">
        <Wordmark />
      </Link>

      <div className="flex flex-1 items-center">
        <nav className="flex flex-col gap-[14px] font-mono text-[12.5px] tracking-[0.1em]">
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
        </nav>
      </div>
    </div>
  );
}
