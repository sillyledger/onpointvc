import { SiteNav } from "./SiteNav";
import { LegalSection } from "./LegalSection";

export function TermsMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <div className="w-full max-w-[680px]">
          <h1 className="mb-2 text-[clamp(36px,5vw,60px)] font-black leading-[1.05] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--font-inter)]">
            Terms of use
          </h1>
          <p className="mb-16 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
            Last updated August 26, 2026
          </p>

          <LegalSection title="Acceptance of terms">
            <p>
              By using onpointvc.com, you agree to these terms. If you
              don&apos;t agree, don&apos;t use the site.
            </p>
          </LegalSection>

          <LegalSection title="About OnPoint VC">
            <p>
              OnPoint VC is a self-funded, operator-led venture capital and
              micro-PE firm based in Taichung with a global mandate,
              operating across four lines: OP Fund (early-stage
              investment), Studio (in-house product experiments),
              Absurdity Projects (experimental bets), and Acquisitions
              (small, profitable businesses). OnPoint is self-funded and
              does not currently solicit capital from the public through
              this site.
            </p>
          </LegalSection>

          <LegalSection title="Not investment, legal, or tax advice">
            <p>
              Nothing on this site constitutes investment, legal, tax, or
              financial advice. Content is provided for general
              informational purposes only. You should consult your own
              advisors before making any financial or business decision.
            </p>
          </LegalSection>

          <LegalSection title="No offer or solicitation">
            <p>
              Nothing on this site is, or should be construed as, an offer
              to sell, or a solicitation of an offer to buy, any security
              or interest in any fund, vehicle, or entity managed or
              advised by OnPoint. Any such offering, if made, would only be
              made through definitive offering documents to qualified
              parties in accordance with applicable law.
            </p>
          </LegalSection>

          <LegalSection title="Forward-looking statements">
            <p>
              References to portfolio companies, deployed capital, or past
              outcomes are provided for illustrative purposes only. Past
              performance is not indicative of future results, and nothing
              on this site should be read as a projection or guarantee of
              any kind.
            </p>
          </LegalSection>

          <LegalSection title="Submissions to OnPoint">
            <p>
              Pitches, proposals, decks, or other materials sent to{" "}
              <a
                href="mailto:deal@onpointvc.com"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                deal@onpointvc.com
              </a>
              , or any OnPoint address, are not treated as confidential or
              proprietary unless we&apos;ve separately signed a written
              confidentiality agreement covering that submission. Please
              don&apos;t send us information you consider confidential
              unless we&apos;ve agreed to that in writing first.
            </p>
          </LegalSection>

          <LegalSection title="Intellectual property">
            <p>
              The OnPoint name, logomark, wordmark, and site content are
              the property of OnPoint VC unless otherwise noted. You may
              not reproduce, distribute, or create derivative works from
              this content without our written permission.
            </p>
          </LegalSection>

          <LegalSection title="Third-party links">
            <p>
              This site links to third-party sites, including portfolio
              companies and ryoka.xyz. We don&apos;t control and
              aren&apos;t responsible for the content, policies, or
              practices of any third-party site.
            </p>
          </LegalSection>

          <LegalSection title="No warranty">
            <p>
              This site and its content are provided &quot;as is,&quot;
              without warranty of any kind, express or implied, including
              accuracy, completeness, or fitness for a particular purpose.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, OnPoint VC is not
              liable for any damages arising from your use of, or
              inability to use, this site.
            </p>
          </LegalSection>

          <LegalSection title="Governing law">
            <p>These terms are governed by the laws of Taiwan, R.O.C.</p>
          </LegalSection>

          <LegalSection title="Changes to these terms">
            <p>
              We may update these terms at any time. Continued use of the
              site after changes means you accept the revised terms.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:jm@onpointvc.com"
                className="text-[var(--ink)] no-underline hover:text-[var(--red)]"
              >
                jm@onpointvc.com
              </a>
              .
            </p>
          </LegalSection>
        </div>
      </main>
    </div>
  );
}
