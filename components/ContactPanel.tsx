import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function ContactPanel() {
  return (
    <div className="flex flex-col bg-panel px-[22px] py-5 min-[900px]:px-9 min-[900px]:py-[26px]">
      <Link href="/">
        <Wordmark />
      </Link>

      <div className="flex flex-1 flex-col justify-end">
        <h1 className="font-display text-[clamp(40px,6.2vw,88px)] font-medium leading-[0.98] tracking-[-0.02em] lowercase">
          tell us
          <br />
          what you
          <br />
          built<span style={{ color: "var(--amber)" }}>.</span>
        </h1>
      </div>
    </div>
  );
}
