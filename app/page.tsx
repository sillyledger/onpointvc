import { Main } from "@/components/Main";
import { Statement } from "@/components/Statement";
import { InvestmentFocus } from "@/components/InvestmentFocus";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Main />
      <Statement />
      <InvestmentFocus />
      <Portfolio />
    </>
  );
}
