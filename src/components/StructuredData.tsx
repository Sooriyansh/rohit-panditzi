import { absoluteUrl, defaultSeo, jsonLd, seoBusiness, siteName } from "@/lib/seo";

export default function StructuredData() {
  const organizationId = `${absoluteUrl("/")}#organization`;
  const websiteId = `${absoluteUrl("/")}#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ReligiousOrganization"],
        "@id": organizationId,
        name: seoBusiness.name,
        url: absoluteUrl("/"),
        telephone: seoBusiness.tel,
        email: seoBusiness.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: seoBusiness.streetAddress,
          addressLocality: seoBusiness.addressLocality,
          addressRegion: seoBusiness.addressRegion,
          postalCode: seoBusiness.postalCode,
          addressCountry: seoBusiness.addressCountry,
        },
        areaServed: seoBusiness.areaServed.map((area) => ({
          "@type": "Place",
          name: area,
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteName,
        url: absoluteUrl("/"),
        inLanguage: "hi-IN",
        publisher: {
          "@id": organizationId,
        },
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl("/kaal-sarp-puja-ujjain")}#service`,
        name: "Kaal Sarp Puja in Ujjain",
        serviceType: "Kaal Sarp Dosh Puja and Vedic Puja booking information",
        provider: {
          "@id": organizationId,
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        url: absoluteUrl("/kaal-sarp-puja-ujjain"),
        description: defaultSeo.description,
      },
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/")}#webpage`,
        url: absoluteUrl("/"),
        name: defaultSeo.title,
        description: defaultSeo.description,
        inLanguage: "hi-IN",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": `${absoluteUrl("/kaal-sarp-puja-ujjain")}#service`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(data),
      }}
    />
  );
}
