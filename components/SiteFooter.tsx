import Link from "next/link";

const columns = [
  [
    { href: "#", label: "ABOUT" },
    { href: "#", label: "THESIS" },
    { href: "#", label: "TEAM" },
    { href: "/contact", label: "CONTACT" },
  ],
  [
    { href: "#", label: "OP FUND" },
    { href: "#", label: "STUDIO" },
    { href: "#", label: "ABSURDITY PROJECTS" },
  ],
  [
    { href: "#", label: "PRIVACY" },
    { href: "#", label: "TERMS" },
  ],
];

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-center gap-x-20 gap-y-10 bg-paper px-12 py-12 max-[768px]:flex-col max-[768px]:items-start max-[768px]:justify-start max-[768px]:gap-8 max-[768px]:px-6">
      {columns.map((column, i) => (
        <div key={i} className="flex flex-col gap-3 font-mono text-[12.5px] tracking-[0.1em]">
          {column.map((link) =>
            link.href === "/contact" ? (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: "var(--ink)" }}
                className="no-underline hover:!text-[var(--amber)]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                style={{ color: "var(--ink)" }}
                className="no-underline hover:!text-[var(--amber)]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      ))}
    </footer>
  );
}
