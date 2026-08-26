export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="mb-3 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--ink-dim)]">
        {title}
      </h2>
      <div className="space-y-5 font-sans text-[16px] leading-[1.7] text-[var(--ink)]">
        {children}
      </div>
    </section>
  );
}
