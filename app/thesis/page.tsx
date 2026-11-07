import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

// Thesis-only fonts, matching the OP Fund page.
const figtree = Figtree({
  variable: "--font-thesis-figtree",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-thesis-inter",
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thesis — OnPoint VC",
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

const cards = [
  {
    title: "Studio",
    href: "/studio",
    text: "Building companies from zero when the idea is ours.",
  },
  {
    title: "Absurdity Projects",
    href: "/absurdity-projects",
    text: "The bets too weird for anyone else’s investment committee. Backed anyway.",
  },
  {
    title: "Acquisitions",
    href: "/contact",
    text: "Buying what everyone else ignores and making it work.",
  },
  {
    title: "OP Fund",
    href: "/op-fund",
    text: "Early checks into operators, before the pitch deck is pretty.",
  },
];

export default function Thesis() {
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
                  aria-current={tab.href === "/thesis" ? "page" : undefined}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.split}>
        <div className={styles.green}>
          <div className={styles.pinned}>
            <p className={styles.tagline}>
              Real operators, real capital, real speed.
            </p>
            <h1 className={styles.headline}>Thesis</h1>
          </div>
        </div>
        <div className={styles.cream}>
          <div className={styles.prose}>
            <p>
              We invest like operators, because we are operators. Every check
              comes from our own capital. No LPs, no board to please, no fund
              cycle telling us when to be patient and when to panic.
            </p>
            <p>
              We back early-stage, pre-revenue founders. No traction required,
              no track record needed. Solo founders get the same conviction as a
              team of four. And if your idea sounds a little unhinged, that’s
              not a warning sign to us. It’s the pitch.
            </p>
            <p>
              Most VCs pattern-match against what already worked. We look for
              what hasn’t been tried yet, because someone was too scared to send
              the deck. The serious bets and the absurd ones get backed with the
              same discipline: real operators, real capital, real speed.
            </p>
          </div>

          <section>
            <h2 className={styles.label}>How it shows up</h2>
            <ul className={styles.cards}>
              {cards.map((card) => (
                <li key={card.title}>
                  <Link className={styles.card} href={card.href}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardText}>{card.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
