import type { Metadata } from "next";
import { StudioMain } from "@/components/StudioMain";

export const metadata: Metadata = {
  title: "Studio — OnPoint VC",
};

export default function Studio() {
  return <StudioMain />;
}
