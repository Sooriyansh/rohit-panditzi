import type { Metadata } from "next";

export const siteUrl = process.env.SITE_URL ?? "https://UjjainKaalSarpPuja.in";
export const siteName = "Ujjain Kaal Sarp Puja";

export const seoBusiness = {
  name: "Shri Pardeshwar Mahadev Mandir",
  phone: "93295 00668",
  tel: "+919329500668",
  email: "shivjyotishkendra@gmail.com",
  streetAddress: "Ram Ghat Marg",
  addressLocality: "Ujjain",
  addressRegion: "Madhya Pradesh",
  postalCode: "456006",
  addressCountry: "IN",
  areaServed: ["Ujjain", "Ram Ghat", "Mahakaleshwar area", "Madhya Pradesh"],
} as const;

export const defaultSeo = {
  title: "Kaal Sarp Puja in Ujjain | Kaal Sarp Dosh Puja & Booking",
  description:
    "Kaal Sarp Puja in Ujjain, Kaal Sarp Dosh Puja and booking information near Ram Ghat, Shri Pardeshwar Mahadev Mandir, Ujjain.",
  keywords: [
    "Kaal Sarp Puja Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Kaal Sarp Puja in Ujjain",
    "Ujjain Kaal Sarp Puja",
    "Kaal Sarp Puja booking Ujjain",
    "Kaal Sarp Puja near Ram Ghat Ujjain",
    "Kaal Sarp Puja near Mahakaleshwar Ujjain",
    "कालसर्प दोष पूजा उज्जैन",
    "उज्जैन कालसर्प पूजा",
  ],
} as const;

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: SeoInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: path,
      languages: {
        "hi-IN": path,
        "x-default": path,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: "hi_IN",
      siteName,
      title,
      description,
      url,
      images: [
        {
          url: absoluteUrl("/images/mahakal-ujjain.webp"),
          width: 1200,
          height: 630,
          alt: "Kaal Sarp Puja in Ujjain",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/mahakal-ujjain.webp")],
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
