import type { Metadata } from "next";
import { ContactMain } from "@/components/ContactMain";

export const metadata: Metadata = {
  title: "Contact — OnPoint VC",
};

export default function Contact() {
  return <ContactMain />;
}
