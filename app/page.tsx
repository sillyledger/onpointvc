import { Panel } from "@/components/Panel";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="grid min-h-screen min-[900px]:grid-cols-[1fr_1.55fr]">
      <Panel />
      <Main />
    </div>
  );
}
