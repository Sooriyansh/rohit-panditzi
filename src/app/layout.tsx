import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import InitialLoadingScreen from "@/components/layout/InitialLoadingScreen";
import { buildMetadata, defaultSeo, siteUrl } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/layout/Footer"));

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: "/",
    keywords: defaultSeo.keywords,
  }),
  title: {
    default: defaultSeo.title,
    template: "%s | Ujjain Kaal Sarp Puja",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InitialLoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
