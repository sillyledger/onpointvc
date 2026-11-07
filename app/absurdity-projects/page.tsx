import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

type BuildEntry = {
  name: string;
  domain: string;
  description: string;
  url?: string;
};

// Projects in build. Add a url to turn a card into a link.
const inBuild: BuildEntry[] = [
  {
    name: "SourToast",
    domain: "sourtoast.xyz",
    description: "Details soon.",
  },
  {
    name: "Random Facts",
    domain: "Domain soon",
    description: "Details soon.",
  },
];

// Absurdity-only fonts, matching the Studio page.
const figtree = Figtree({
  variable: "--font-absurdity-figtree",
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-absurdity-inter",
  weight: ["300", "400", "500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absurdity Projects — OnPoint VC",
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

function BuildCardContent({ entry }: { entry: BuildEntry }) {
  return (
    <>
      <span className={`${styles.pill} ${styles.pillBuild}`}>In build</span>
      <h3 className={styles.cardName}>{entry.name}</h3>
      <p className={styles.cardDomain}>
        {entry.domain}
        {entry.url ? (
          <>
            {" "}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </>
        ) : null}
      </p>
      <p className={styles.cardDescription}>{entry.description}</p>
    </>
  );
}

export default function AbsurdityProjects() {
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
                  aria-current={
                    tab.href === "/absurdity-projects" ? "page" : undefined
                  }
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.wrap}>
          <h1 className={styles.headline}>Absurdity Projects</h1>
          <p className={styles.lede}>
            The ridiculous things. Projects that don’t fit a pitch deck, that
            no committee would approve, that exist because someone said “what
            if” at 2am and nobody talked them out of it.
          </p>

          <section className={styles.live}>
            <h2 className={styles.label}>Live</h2>
            <a
              className={styles.feature}
              href="https://stupidhit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.featureArt} aria-hidden="true">
                Stupid Hit
              </div>
              <div className={styles.featureBody}>
                <span className={`${styles.pill} ${styles.pillLive}`}>
                  Live
                </span>
                <h2 className={styles.featureName}>Stupid Hit</h2>
                <p className={styles.featureText}>
                  The 2am idea nobody talked us out of. Built on a 19-year-old
                  domain.
                </p>
                <p className={styles.featureDomain}>
                  stupidhit.com{" "}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </p>
              </div>
            </a>
          </section>

          <section className={styles.building}>
            <h2 className={styles.label}>In build</h2>
            <ul className={styles.cards}>
              {inBuild.map((entry) => (
                <li key={entry.name}>
                  {entry.url ? (
                    <a
                      className={`${styles.card} ${styles.cardLink}`}
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BuildCardContent entry={entry} />
                    </a>
                  ) : (
                    <div className={styles.card}>
                      <BuildCardContent entry={entry} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
