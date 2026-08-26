import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/thesis", label: "THESIS" },
  { href: "/op-fund", label: "OP FUND" },
  { href: "/studio", label: "STUDIO" },
  { href: "/absurdity-projects", label: "ABSURDITY PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

export function SiteNav({ active }: { active?: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center px-16 pt-10 max-[768px]:px-6">
      <Link href="/" aria-label="OnPoint VC home">
        <Mark size={68} />
      </Link>
      <div className="col-start-2 flex justify-self-center gap-9 font-mono text-[13.5px] uppercase tracking-[0.08em] max-[900px]:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              link.href === active
                ? "text-[var(--red)] no-underline"
                : "text-[var(--ink)] no-underline hover:text-[var(--red)]"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
