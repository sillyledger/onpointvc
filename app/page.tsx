import type { Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

// Homepage-only fonts (Nov 2 hero).
const figtree = Figtree({
  variable: "--font-home-figtree",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-home-inter",
  weight: ["300", "800"],
  subsets: ["latin"],
});

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

export default function Home() {
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
                <Link href={tab.href}>{tab.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.hero}>
        <h1 className={styles.headline}>
          <span className={styles.line}>experimental</span>
          <span className={styles.slash}>/</span>
          <span className={styles.line}>founder-led</span>
        </h1>
        <p className={styles.lede}>
          We build internet brands and software, some of it unhinged. We also
          back founders and buy companies. All with our own money.
        </p>
        <Link className={styles.cta} href="/thesis">
          Thesis
        </Link>
      </main>
    </div>
  );
}
