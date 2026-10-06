"use client";
import { usePathname } from "next/navigation";
import { pujaLinks } from "@/data/navigation";
import ServiceDropdown from "./ServiceDropdown";

export default function PujaDropdown() {
  const pathname = usePathname();
  return <ServiceDropdown label="पूजा एवं अनुष्ठान" href="/puja" items={pujaLinks} pathname={pathname} />;
}
