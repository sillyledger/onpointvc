import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { ContactMain } from "@/components/ContactMain";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return (
    <div className="grid min-h-screen min-[900px]:grid-cols-[1fr_1.55fr]">
      <ContactPanel />
      <ContactMain />
    </div>
  );
}
