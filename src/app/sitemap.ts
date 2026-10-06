import type { MetadataRoute } from "next";
import { jyotishServices, pujaServices } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "kaal-sarp-puja-ujjain",
    "about",
    "puja",
    "jyotish",
    "panchang-muhurat",
    "online-puja",
    "gallery",
    "contact",
    "privacy-policy",
    "terms-and-conditions",
    "disclaimer",
  ];

  const servicePages = [
    ...pujaServices.map((service) => `puja/${service.slug}`),
    ...jyotishServices.map((service) => `jyotish/${service.slug}`),
  ];

  return [...staticPages, ...servicePages].map((path) => ({
    url: absoluteUrl(`/${path}`),
    lastModified: new Date(),
    changeFrequency: path === "" || path === "kaal-sarp-puja-ujjain" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "kaal-sarp-puja-ujjain" ? 0.95 : 0.7,
  }));
}
