export function ContactHeader() {
  return (
    <div className="flex h-full flex-col justify-end bg-panel px-[22px] py-12 min-[900px]:px-9 min-[900px]:py-16">
      <h1 className="font-display text-[clamp(40px,6.2vw,88px)] font-medium leading-[0.98] tracking-[-0.02em] lowercase">
        tell us
        <br />
        what you
        <br />
        built<span style={{ color: "var(--amber)" }}>.</span>
      </h1>
    </div>
  );
}
