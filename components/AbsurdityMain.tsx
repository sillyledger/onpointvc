import { SiteNav } from "./SiteNav";

export function AbsurdityMain() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SiteNav active="/absurdity-projects" />

      <main className="flex justify-center px-6 pt-24 pb-40">
        <p className="font-sans text-[clamp(17px,1.6vw,20px)] text-[var(--ink)]">
          Adding soon.
        </p>
      </main>
    </div>
  );
}
