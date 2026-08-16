export function ContactHeader() {
  return (
    <div className="flex h-full flex-col justify-end bg-panel px-[22px] py-10 min-[900px]:px-9 min-[900px]:py-[34px]">
      <h1 className="font-display text-[32px] font-medium leading-[1.05] tracking-[-0.02em] lowercase">
        tell us
        <br />
        what you
        <br />
        built<span style={{ color: "var(--amber)" }}>.</span>
      </h1>
    </div>
  );
}
