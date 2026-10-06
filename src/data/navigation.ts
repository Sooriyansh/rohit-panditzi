import { jyotishServices, pujaServices } from "@/data/services";

export type NavigationLink = { label: string; href: string; icon?: string };
export const primaryLinks: NavigationLink[] = [
  { label: "होम", href: "/" },
  { label: "हमारे बारे में", href: "/about" },
  { label: "पंचांग / मुहूर्त", href: "/panchang-muhurat" },
  { label: "ऑनलाइन पूजा", href: "/online-puja" },
  { label: "गैलरी", href: "/gallery" },
  { label: "संपर्क", href: "/contact" },
];
export const pujaLinks = pujaServices.map(({ slug, title }) => ({ label: title, href: `/puja/${slug}` }));
export const jyotishLinks = jyotishServices.map(({ slug, title }) => ({ label: title, href: `/jyotish/${slug}` }));
export const mobileQuickLinks: NavigationLink[] = [
  { label: "होम", href: "/", icon: "⌂" },
  { label: "पूजा", href: "/puja", icon: "ॐ" },
  { label: "मुहूर्त", href: "/panchang-muhurat", icon: "◷" },
  { label: "संपर्क", href: "/contact", icon: "☎" },
];
