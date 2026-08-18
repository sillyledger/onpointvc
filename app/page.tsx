import { Panel } from "@/components/Panel";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-[300px_1fr] max-[768px]:grid-cols-1">
      <Panel />
      <Main />
    </div>
  );
}
