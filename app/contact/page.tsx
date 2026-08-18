import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { ContactMain } from "@/components/ContactMain";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return (
    <div className="page-grid">
      <ContactPanel />
      <ContactMain />
    </div>
  );
}
