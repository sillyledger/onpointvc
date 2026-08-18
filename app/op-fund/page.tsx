import type { Metadata } from "next";
import { OpFundMain } from "@/components/OpFundMain";

export const metadata: Metadata = {
  title: "OP Fund — OnPoint VC",
};

export default function OpFund() {
  return <OpFundMain />;
}
