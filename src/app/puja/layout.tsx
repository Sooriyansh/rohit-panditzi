import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Puja Services in Ujjain | Vedic Puja & Anushthan",
  description:
    "Ujjain me Kaal Sarp Puja, Mangal Dosh Puja, Pitri Dosh Puja, Navgrah Shanti aur anya Vedic puja services ki jankari.",
  path: "/puja",
  keywords: ["Ujjain puja services", "Vedic puja Ujjain", "Kaal Sarp Puja Ujjain"],
});

export default function PujaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
