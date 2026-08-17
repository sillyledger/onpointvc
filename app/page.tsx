import { Panel } from "@/components/Panel";
import { Main } from "@/components/Main";
import { BoldDecisions } from "@/components/BoldDecisions";

export default function Home() {
  return (
    <>
      <div className="grid min-h-screen min-[900px]:grid-cols-[300px_1fr]">
        <Panel />
        <Main />
      </div>

      <BoldDecisions />
    </>
  );
}
