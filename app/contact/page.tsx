import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { ContactMain } from "@/components/ContactMain";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return (
    <div className="grid min-h-screen grid-cols-[300px_1fr] max-[768px]:grid-cols-1">
      <ContactPanel />
      <ContactMain />
    </div>
  );
}
