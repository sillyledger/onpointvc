import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

// Contact-only fonts, matching the homepage.
const figtree = Figtree({
  variable: "--font-contact-figtree",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-contact-inter",
  weight: ["300", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

// Lets env(safe-area-inset-*) resolve on notched devices.
export const viewport: Viewport = {
  viewportFit: "cover",
};

const tabs = [
  { href: "/op-fund", label: "Fund" },
  { href: "/studio", label: "Studio" },
  { href: "/absurdity-projects", label: "Absurdity" },
  { href: "/contact", label: "Contact" },
];

export default function Contact() {
  return (
    <div className={`${figtree.variable} ${inter.variable} ${styles.page}`}>
      <header className={styles.bar}>
        <Link className={styles.wordmark} href="/" aria-label="OnPoint home">
          ONPOINT
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect width="10.5" height="10.5" rx="1.6" fill="#26302B" />
            <rect x="13.5" width="10.5" height="10.5" rx="1.6" fill="#7D9481" />
            <rect y="13.5" width="10.5" height="10.5" rx="1.6" fill="#26302B" />
            <circle cx="18.75" cy="18.75" r="4" fill="#26302B" />
          </svg>
        </Link>
        <nav aria-label="Main">
          <ul className={styles.tabs}>
            {tabs.map((tab) => (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  aria-current={tab.href === "/contact" ? "page" : undefined}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.headline}>Let&apos;s talk.</h1>
            <p className={styles.lede}>
              Based in Taichung, backing founders everywhere.
            </p>
          </div>
          <div className={styles.right}>
            <a className={styles.email} href="mailto:p@ryoka.xyz">
              p@ryoka.xyz
            </a>
            <p className={styles.note}>
              Pitches, portfolio and everything else.{" "}
              <a className={styles.inlineLink} href="https://ryokagroup.com">
                Ryoka Group
              </a>{" "}
              is our parent company, so it all runs through one inbox there.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
