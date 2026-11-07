import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, Inter } from "next/font/google";
import { CopyEmail } from "./CopyEmail";
import styles from "./page.module.css";

// Contact-only fonts, matching the homepage.
const figtree = Figtree({
  variable: "--font-contact-figtree",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-contact-inter",
  weight: ["300", "400", "500", "800"],
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
  { href: "/thesis", label: "Thesis" },
  { href: "/op-fund", label: "Fund" },
  { href: "/studio", label: "Studio" },
  { href: "/absurdity-projects", label: "Absurdity" },
  { href: "/contact", label: "Contact" },
];

const EMAIL = "p@ryoka.xyz";

const subjects = [
  { subject: "Studio", description: "Brands and software" },
  { subject: "Absurdity", description: "Absurdity Projects" },
  { subject: "Acquisition", description: "Acquisitions" },
  { subject: "General", description: "Everything else" },
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
        <div className={styles.wrap}>
          <h1 className={styles.headline}>Contact</h1>
          <p className={styles.lede}>
            One inbox for the whole firm. Use a subject line so it reaches the
            right place.
          </p>

          <div className={styles.panel}>
            <section>
              <h2 className={styles.label}>Email</h2>
              <div className={styles.emailRow}>
                <a className={styles.email} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <CopyEmail email={EMAIL} />
              </div>
              <p className={styles.emailNote}>
                Studio, Absurdity Projects, acquisitions and everything else.
              </p>
            </section>

            <section>
              <h2 className={styles.label}>Subject lines</h2>
              <ul className={styles.subjects}>
                {subjects.map((row) => (
                  <li key={row.subject}>
                    <a
                      className={styles.subjectLink}
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(row.subject)}`}
                    >
                      <span className={styles.subject}>{row.subject}</span>
                      {"  "}
                      <span className={styles.subjectDesc}>
                        {row.description}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={styles.label}>Group</h2>
              <p className={styles.body}>
                OnPoint VC is part of{" "}
                <a className={styles.inlineLink} href="https://ryokagroup.com">
                  Ryoka Group
                </a>
                , which is why mail runs through a ryoka.xyz address.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
