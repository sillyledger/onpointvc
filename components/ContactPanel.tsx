import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function ContactPanel() {
  return (
    <div className="flex flex-col bg-panel px-9 py-[26px] max-[768px]:px-6 max-[768px]:py-5">
      <Link href="/">
        <Wordmark />
      </Link>

      <div className="flex flex-1 flex-col justify-end">
        <h1 className="font-display text-[clamp(40px,6.2vw,88px)] font-medium leading-[0.98] tracking-[-0.02em] lowercase max-[768px]:text-[clamp(30px,8vw,36px)]">
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
