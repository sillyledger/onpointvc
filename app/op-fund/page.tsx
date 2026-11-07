import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

// OP Fund-only fonts, matching the Studio page.
const figtree = Figtree({
  variable: "--font-fund-figtree",
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-fund-inter",
  weight: ["300", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OP Fund — OnPoint VC",
};

// Lets env(safe-area-inset-*) resolve on notched devices.
export const viewport: Viewport = {
  viewportFit: "cover",
};

const tabs = [
  { href: "/thesis", label: "Thesis" },
  { href: "/op-fund", label: "Fund" },
  { href: "/studio", label: "Studio" },
  { href: "/absurdity-projects", label: "Absurdity" },
  { href: "/contact", label: "Contact" },
];

export default function OpFund() {
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
                  aria-current={tab.href === "/op-fund" ? "page" : undefined}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.split}>
        <div className={styles.sage}>
          <h1 className={styles.headline}>OP Fund</h1>
        </div>
        <div className={styles.cream}>
          <p className={styles.lede}>
            No LPs. No outside capital. No one to answer to when a bet doesn’t
            pay off, and no one to split the upside with when it does.
          </p>
          <p className={styles.body}>
            We back founders and buy companies with our own money. What comes
            back goes into the next founder we back. Most funds raise once and
            spend down. Ours compounds.
          </p>
          <div className={styles.items}>
            <div>
              <h2 className={styles.itemTitle}>Founders</h2>
              <p className={styles.itemText}>
                Backing founders with our own capital.
              </p>
            </div>
            <div>
              <h2 className={styles.itemTitle}>Acquisitions</h2>
              <p className={styles.itemText}>
                Buying companies and putting them to work.
              </p>
            </div>
          </div>
          <p className={styles.contactLine}>
            <Link className={styles.contact} href="/contact">
              Contact
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
