"use client";
import { usePathname } from "next/navigation";
import { jyotishLinks } from "@/data/navigation";
import ServiceDropdown from "./ServiceDropdown";

export default function JyotishDropdown() {
  const pathname = usePathname();
  return <ServiceDropdown label="ज्योतिष सेवाएँ" href="/jyotish" items={jyotishLinks} pathname={pathname} />;
}
