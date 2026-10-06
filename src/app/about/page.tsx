import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "हमारे बारे में",
  description:
    "श्री पारदेश्वर महादेव मंदिर, उज्जैन से जुड़ी वैदिक पूजा और ज्योतिष सेवाओं का परिचय।",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutContent />;
}
