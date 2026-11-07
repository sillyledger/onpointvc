import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import styles from "./page.module.css";

// Studio-only fonts, matching the homepage and contact page.
const figtree = Figtree({
  variable: "--font-studio-figtree",
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-studio-inter",
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio — OnPoint VC",
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

const projects = [
  {
    name: "Sorano",
    color: "#1b1a14",
    domain: "sorano.space",
    href: "https://sorano.space",
    description: "Roadmap, changelog, and community votes for your product.",
  },
  {
    name: "TWO Docs",
    color: "#2c3a32",
    domain: "two.so",
    href: "https://two.so",
    description:
      "A minimal docs editor for Mac and iPad, with a split view for writing and reference side by side.",
  },
  {
    name: "Study Brew",
    color: "#4a5a4d",
    domain: "studybrew.co",
    href: "https://studybrew.co",
    description:
      "A note-taking app for language learners who want their study notes organized by language, not scattered across apps.",
  },
];

export default function Studio() {
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
                  aria-current={tab.href === "/studio" ? "page" : undefined}
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
          <h1 className={styles.headline}>Studio</h1>
          <p className={styles.lede}>
            We build software. Real products, real users, real revenue. The
            stuff that pays the bills and proves the model works.
          </p>

          <section className={styles.built}>
            <h2 className={styles.label}>Built here</h2>
            <ul className={styles.tiles}>
              {projects.map((project) => (
                <li key={project.domain}>
                  <a
                    className={styles.tile}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={styles.block}
                      style={{ "--tile-bg": project.color } as CSSProperties}
                    >
                      <h3 className={styles.name}>{project.name}</h3>
                    </div>
                    <div className={styles.info}>
                      <p className={styles.domain}>
                        {project.domain}{" "}
                        <span className={styles.arrow} aria-hidden="true">
                          →
                        </span>
                      </p>
                      <p className={styles.description}>
                        {project.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
