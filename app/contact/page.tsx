import type { Metadata } from "next";
import { ContactNav } from "@/components/ContactNav";
import { ContactHeader } from "@/components/ContactHeader";
import { ContactBody } from "@/components/ContactBody";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactNav />
      <div className="grid flex-1 grid-cols-1 min-[900px]:grid-cols-[1fr_1.55fr]">
        <ContactHeader />
        <ContactBody />
      </div>
    </div>
  );
}
