import { SiteNav } from "./SiteNav";
import { LegalSection } from "./LegalSection";

export function PrivacyMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <div className="w-full max-w-[680px]">
          <h1 className="mb-2 text-[clamp(36px,5vw,60px)] font-black leading-[1.05] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
            Privacy policy
          </h1>
          <p className="mb-16 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
            Last updated August 26, 2026
          </p>

          <LegalSection title="Overview">
            <p>
              OnPoint VC (&quot;OnPoint,&quot; &quot;we,&quot; &quot;us&quot;)
              operates onpointvc.com. This policy explains what information
              we collect from visitors to this site and how we use it. We
              don&apos;t collect more than we need, and we don&apos;t sell
              visitor data.
            </p>
          </LegalSection>

          <LegalSection title="Information we collect">
            <p>
              <strong>Site analytics.</strong> We use Google Analytics to
              understand how people use this site: pages visited, time on
              site, general location derived from IP address, device and
              browser type, and referral source. This data is aggregated
              and not tied to your name or identity unless you separately
              email us.
            </p>
            <p>
              <strong>Correspondence.</strong> If you email deal@, ops@, or
              jm@onpointvc.com, we retain that email and any attachments
              for as long as needed to respond to you and keep a record of
              the relationship, whether that&apos;s a pitch, an operating
              conversation, or something else.
            </p>
            <p>
              We do not run any sign-up forms, newsletters, or account
              systems on this site at this time.
            </p>
          </LegalSection>

          <LegalSection title="How we use information">
            <p>
              We use this information to understand site traffic and
              improve the site, respond to inquiries sent to our email
              addresses, and evaluate pitches, applications, or proposals
              sent to us.
            </p>
          </LegalSection>

          <LegalSection title="Third-party services">
            <p>
              Google Analytics (Google LLC) handles site traffic analysis,
              governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                Google&apos;s Privacy Policy
              </a>
              . Vercel hosts this site and processes standard server logs
              (IP address, request time, user agent) as part of that
              infrastructure.
            </p>
            <p>
              We don&apos;t share, sell, or rent visitor data to third
              parties for marketing purposes.
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Google Analytics sets cookies to distinguish visitors. You
              can opt out via your browser settings or the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="Data retention">
            <p>
              Analytics data is retained per Google Analytics&apos;
              standard retention settings. Email correspondence is
              retained indefinitely unless you request deletion.
            </p>
          </LegalSection>

          <LegalSection title="Your choices">
            <p>
              You can ask us to delete correspondence we hold about you by
              emailing{" "}
              <a
                href="mailto:ops@onpointvc.com"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                ops@onpointvc.com
              </a>
              . You can opt out of Google Analytics tracking at any time
              using the methods above.
            </p>
          </LegalSection>

          <LegalSection title="Data security">
            <p>
              We take reasonable measures to protect information sent to
              us, but no method of transmission or storage is fully
              secure. Don&apos;t send us sensitive personal information,
              such as banking details or government ID numbers, by email.
            </p>
          </LegalSection>

          <LegalSection title="Children's privacy">
            <p>
              This site isn&apos;t directed at anyone under 18, and we
              don&apos;t knowingly collect information from minors.
            </p>
          </LegalSection>

          <LegalSection title="Changes to this policy">
            <p>
              We may update this policy as the site or our practices
              change. The &quot;last updated&quot; date at the top
              reflects the most recent revision.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about this policy:{" "}
              <a
                href="mailto:ops@onpointvc.com"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                ops@onpointvc.com
              </a>
              .
            </p>
          </LegalSection>
        </div>
      </main>
    </div>
  );
}
