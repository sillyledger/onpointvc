import type { Metadata } from "next";
import { ContactNav } from "@/components/ContactNav";
import { ContactHeader } from "@/components/ContactHeader";
import { ContactBody } from "@/components/ContactBody";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <ContactNav />
      <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_1.55fr] min-[900px]:min-h-[620px]">
        <ContactHeader />
        <ContactBody />
      </div>
    </div>
  );
}
