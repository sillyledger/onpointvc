import type { Metadata } from "next";
import { TermsMain } from "@/components/TermsMain";

export const metadata: Metadata = {
  title: "Terms — OnPoint VC",
};

export default function Terms() {
  return <TermsMain />;
}
