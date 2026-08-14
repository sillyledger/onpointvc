import type { Metadata } from "next";
import { Reddit_Sans, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnPoint VC",
  description:
    "Operator-led venture capital & micro-PE. We built and sold software before we wrote a check.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redditSans.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-field text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
