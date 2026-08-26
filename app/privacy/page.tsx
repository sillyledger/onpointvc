import type { Metadata } from "next";
import { PrivacyMain } from "@/components/PrivacyMain";

export const metadata: Metadata = {
  title: "Privacy — OnPoint VC",
};

export default function Privacy() {
  return <PrivacyMain />;
}
