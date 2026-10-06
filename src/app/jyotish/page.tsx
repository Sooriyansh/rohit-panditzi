import type { Metadata } from "next";
import { jyotishServices } from "@/data/services";
import JyotishClient from "./JyotishClient";

export const metadata: Metadata = {
  title: "ज्योतिष सेवाएँ",
  description:
    "उज्जैन में कुंडली विश्लेषण, विवाह कुंडली मिलान और वैदिक ज्योतिष परामर्श।",
  alternates: { canonical: "/jyotish" },
};

export default function JyotishIndex() {
  return (
    <JyotishClient services={jyotishServices} />
  );
}