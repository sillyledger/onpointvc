import type { Metadata } from "next";
import { ThesisMain } from "@/components/ThesisMain";

export const metadata: Metadata = {
  title: "Thesis — OnPoint VC",
};

export default function Thesis() {
  return <ThesisMain />;
}
