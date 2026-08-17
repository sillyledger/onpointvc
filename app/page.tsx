import { Panel } from "@/components/Panel";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="grid min-h-screen min-[900px]:grid-cols-[300px_1fr]">
      <Panel />
      <Main />
    </div>
  );
}
