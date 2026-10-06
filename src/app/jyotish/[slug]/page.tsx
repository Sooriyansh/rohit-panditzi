import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Compass,
  Crown,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { jyotishServices } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jyotishServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const s = jyotishServices.find((item) => item.slug === slug);

  return s
    ? buildMetadata({
        title: `${s.title} in Ujjain`,
        description: `${s.description} Ujjain me jyotish paramarsh aur booking ke liye sampark karein.`,
        path: `/jyotish/${s.slug}`,
        keywords: [`${s.title} Ujjain`, "Ujjain jyotish", "kundali analysis Ujjain"],
      })
    : {
        title: "Jyotish Service",
      };
}

export default async function JyotishDetail({ params }: Props) {
  const { slug } = await params;

  const s = jyotishServices.find((item) => item.slug === slug);

  if (!s) notFound();

  const related = jyotishServices
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f1e6] text-[#3b241c]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-[#4a261c]">
        {/* =====================================================
            HERITAGE ATMOSPHERE
        ====================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Left warm light */}
          <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#8b4a2f]/30 blur-[120px]" />

          {/* Central golden light */}
          <div className="absolute left-[48%] top-[5%] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#d6aa5a]/10 blur-[120px]" />

          {/* Right earthy warmth */}
          <div className="absolute -right-32 top-[22%] h-[520px] w-[520px] rounded-full bg-[#6e3425]/35 blur-[130px]" />

          {/* Bottom transition */}
          <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#f8f1e6] via-[#f8f1e6]/25 to-transparent" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:px-10 lg:pb-32 lg:pt-10">
          {/* =====================================================
              BREADCRUMB
          ====================================================== */}
          <nav
            aria-label="ब्रेडक्रम्ब"
            className="mb-14 flex flex-wrap items-center gap-2 text-sm text-[#f4e4cf]/55"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#e4bd76]"
            >
              होम
            </Link>

            <span className="text-[#f4e4cf]/20">/</span>

            <span className="text-[#f4e4cf]/75">
              ज्योतिष सेवा
            </span>

            <span className="text-[#f4e4cf]/20">/</span>

            <span className="max-w-[220px] truncate text-[#f4e4cf]/75">
              {s.title}
            </span>
          </nav>

          {/* =====================================================
              HERO CONTENT
          ====================================================== */}
          <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            {/* =================================================
                LEFT
            ================================================== */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d6aa5a]/25 bg-[#f8e9d2]/[0.06] px-4 py-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d6aa5a]/15 text-[#e2bb72]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e2bb72]">
                  उज्जैन · ज्योतिष सेवा
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#fff7e9] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                {s.title}
              </h1>

              {/* Divider */}
              <div className="mt-7 flex items-center gap-3">
                <div className="h-px w-20 bg-[#d6aa5a]/60" />

                <div className="h-1.5 w-1.5 rounded-full bg-[#d6aa5a]" />
              </div>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#f5e6d3]/70 sm:text-lg sm:leading-9">
                {s.description}
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d6aa5a] px-7 text-sm font-bold text-[#321910] shadow-[0_15px_45px_rgba(214,170,90,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e4c27c] hover:shadow-[0_20px_55px_rgba(214,170,90,.25)]"
                >
                  परामर्श के लिए संपर्क करें

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/online-puja"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#f8e9d2]/15 bg-[#f8e9d2]/[0.05] px-7 text-sm font-semibold text-[#fff7e9]/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6aa5a]/35 hover:bg-[#f8e9d2]/[0.09] hover:text-white"
                >
                  अनुरोध भेजें

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust */}
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#f8e9d2]/10 pt-7">
                <div className="flex items-center gap-2.5 text-sm text-[#f5e6d3]/55">
                  <CheckCircle2 className="h-4 w-4 text-[#d6aa5a]" />
                  पारंपरिक ज्योतिष
                </div>

                <div className="flex items-center gap-2.5 text-sm text-[#f5e6d3]/55">
                  <MapPin className="h-4 w-4 text-[#d6aa5a]" />
                  उज्जैन, मध्य प्रदेश
                </div>

                <div className="flex items-center gap-2.5 text-sm text-[#f5e6d3]/55">
                  <ShieldCheck className="h-4 w-4 text-[#d6aa5a]" />
                  व्यक्तिगत मार्गदर्शन
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}
            <div className="relative mx-auto w-full max-w-[450px]">
              {/* Outer circle */}
              <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6aa5a]/10" />

              {/* Soft aura */}
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6aa5a]/[0.06] blur-[80px]" />

              {/* Main card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d6aa5a]/20 bg-[#5a3023]/80 p-2 shadow-[0_30px_90px_rgba(45,20,12,.35)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-[#f8e9d2]/[0.07] bg-[#47251c]/75 px-7 py-10 sm:px-9 sm:py-12">
                  {/* Card glow */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6aa5a]/[0.07] blur-[80px]" />

                  {/* Astrology icon */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d6aa5a]/25 bg-[#d6aa5a]/[0.07]">
                    <Compass className="h-10 w-10 text-[#dfb96f]" />
                  </div>

                  {/* Card content */}
                  <div className="relative mt-8 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6aa5a]">
                      ज्योतिष परामर्श
                    </p>

                    <h2 className="mt-4 font-serif text-3xl leading-tight text-[#fff7e9]">
                      {s.title}
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                      <span className="h-px w-12 bg-[#d6aa5a]/30" />

                      <Sparkles className="h-3.5 w-3.5 text-[#d6aa5a]" />

                      <span className="h-px w-12 bg-[#d6aa5a]/30" />
                    </div>

                    <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#f5e6d3]/45">
                      पारंपरिक ज्योतिषीय पद्धतियों के आधार पर मार्गदर्शन और
                      व्याख्या।
                    </p>
                  </div>

                  {/* Info cards */}
                  <div className="relative mt-9 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#f8e9d2]/[0.07] bg-[#f8e9d2]/[0.035] p-4">
                      <MapPin className="h-4 w-4 text-[#d6aa5a]" />

                      <p className="mt-2 text-[10px] uppercase tracking-wider text-[#f5e6d3]/35">
                        स्थान
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#fff7e9]/80">
                        उज्जैन
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#f8e9d2]/[0.07] bg-[#f8e9d2]/[0.035] p-4">
                      <Clock3 className="h-4 w-4 text-[#d6aa5a]" />

                      <p className="mt-2 text-[10px] uppercase tracking-wider text-[#f5e6d3]/35">
                        परामर्श
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#fff7e9]/80">
                        संपर्क अनुसार
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[#d6aa5a]/20 bg-[#4b281e]/95 px-4 py-3 shadow-2xl sm:block">
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-[#d6aa5a]" />

                  <span className="text-xs font-semibold text-[#fff7e9]/75">
                    पारंपरिक मार्गदर्शन
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative bg-[#f8f1e6]">
        <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#5b3023]/10 bg-[#fffaf3] p-7 shadow-[0_20px_70px_rgba(75,42,28,.06)] sm:p-10 lg:p-12">
              {/* Warm background */}
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d6aa5a]/10 blur-[70px]" />

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead7b5] text-[#8d5b24]">
                    <Compass className="h-4 w-4" />
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a6b3a]">
                    सेवा का परिचय
                  </span>
                </div>

                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  {s.title} क्या है?
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d5147]">
                  {s.description} ज्योतिषीय व्याख्या पारंपरिक मान्यताओं और दिए
                  गए जन्म विवरण पर निर्भर करती है।
                </p>
              </div>
            </div>

            {/* Trust card */}
            <div className="rounded-[2rem] bg-[#3b2018] p-7 text-white shadow-[0_25px_70px_rgba(59,32,24,.18)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6aa5a]/10 text-[#d6aa5a]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-7 font-serif text-2xl">
                व्यक्तिगत मार्गदर्शन
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                जन्म विवरण और सेवा की प्रकृति के अनुसार परामर्श की प्रक्रिया
                अलग हो सकती है। आवश्यक जानकारी पहले साझा की जाएगी।
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        className="h-3.5 w-3.5 fill-[#d6aa5a] text-[#d6aa5a]"
                      />
                    ))}
                  </div>

                  <span className="text-xs text-white/45">
                    पारंपरिक ज्योतिष सेवा
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <section className="bg-[#f8f1e6] pb-20 sm:pb-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
            {/* =================================================
                ARTICLE
            ================================================== */}
            <article className="min-w-0">
              {/* Section 1 */}
              <div className="border-t border-[#5b3023]/10 py-10 sm:py-12">
                <div className="flex gap-5">
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ead7b5] text-[#8d5b24] sm:flex">
                    <Compass className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a16f39]">
                      सेवा का परिचय
                    </p>

                    <h2 className="font-serif text-2xl text-[#44271e] sm:text-3xl">
                      सेवा का परिचय
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#6d5147]">
                      {s.description} ज्योतिषीय व्याख्या पारंपरिक मान्यताओं और
                      दिए गए जन्म विवरण पर निर्भर करती है।
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-t border-[#5b3023]/10 py-10 sm:py-12">
                <div className="flex gap-5">
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ead7b5] text-[#8d5b24] sm:flex">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div className="w-full">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a16f39]">
                      प्रक्रिया
                    </p>

                    <h2 className="font-serif text-2xl text-[#44271e] sm:text-3xl">
                      परामर्श की प्रक्रिया
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#6d5147]">
                      संपर्क के बाद सेवा की उपलब्धता और आगे की प्रक्रिया बताई
                      जाएगी। कुंडली संबंधी सेवा के लिए जन्म तिथि, समय और स्थान
                      जैसे विवरण आवश्यक हो सकते हैं।
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "सेवा की आवश्यकता समझना",
                        "आवश्यक जन्म विवरण साझा करना",
                        "ज्योतिषीय जानकारी एवं व्याख्या",
                        "आगे के मार्गदर्शन पर चर्चा",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-[#5b3023]/10 bg-[#fffaf3] px-4 py-3.5"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a16f39]" />

                          <span className="text-sm font-medium text-[#63473d]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-t border-[#5b3023]/10 py-10 sm:py-12">
                <div className="flex gap-5">
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ead7b5] text-[#8d5b24] sm:flex">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a16f39]">
                      महत्वपूर्ण जानकारी
                    </p>

                    <h2 className="font-serif text-2xl text-[#44271e] sm:text-3xl">
                      ध्यान देने योग्य बातें
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#6d5147]">
                      ज्योतिष परामर्श आस्था और पारंपरिक पद्धतियों पर आधारित है।
                      इसे चिकित्सा, वित्तीय, कानूनी या अन्य पेशेवर सलाह का
                      विकल्प न मानें; किसी परिणाम की गारंटी नहीं दी जाती।
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="relative mt-2 overflow-hidden rounded-[2rem] bg-[#3b2018] p-7 text-white sm:p-10">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#d6aa5a]/10 blur-[70px]" />

                <div className="absolute bottom-[-100px] left-[-80px] h-56 w-56 rounded-full bg-[#8e3e27]/20 blur-[80px]" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6aa5a]/10 text-[#d6aa5a]">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <h2 className="mt-7 font-serif text-3xl">
                    ज्योतिष परामर्श के लिए संपर्क करें
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                    अपनी आवश्यकता और उपलब्ध जानकारी साझा करें। सेवा की
                    उपलब्धता और आगे की प्रक्रिया के बारे में संपर्क के बाद
                    बताया जाएगा।
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#d6aa5a] px-7 text-sm font-bold text-[#28140d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8c47e]"
                  >
                    परामर्श के लिए संपर्क करें

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  FAQ
              ================================================== */}
              <div className="mt-16 sm:mt-20">
                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a16f39]">
                    सामान्य प्रश्न
                  </p>

                  <h2 className="mt-3 font-serif text-3xl text-[#44271e] sm:text-4xl">
                    आपके सवालों के जवाब
                  </h2>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-[#5b3023]/10 bg-[#fffaf3]">
                  <details className="group border-b border-[#5b3023]/10 p-6 sm:p-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#44271e] [&::-webkit-details-marker]:hidden">
                      <span>
                        ज्योतिष परामर्श के लिए कौन-कौन से विवरण चाहिए?
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1e3cc] text-[#8d5b24] transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-5 text-sm leading-7 text-[#72574d]">
                      सेवा के अनुसार जन्म तिथि, जन्म समय और जन्म स्थान जैसे
                      विवरण आवश्यक हो सकते हैं।
                    </p>
                  </details>

                  <details className="group border-b border-[#5b3023]/10 p-6 sm:p-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#44271e] [&::-webkit-details-marker]:hidden">
                      <span>क्या बिना जन्म समय के परामर्श संभव है?</span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1e3cc] text-[#8d5b24] transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-5 text-sm leading-7 text-[#72574d]">
                      यह सेवा और उपलब्ध जानकारी पर निर्भर करता है। संपर्क करके
                      अपनी परिस्थिति के बारे में जानकारी दी जा सकती है।
                    </p>
                  </details>

                  <details className="group p-6 sm:p-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#44271e] [&::-webkit-details-marker]:hidden">
                      <span>
                        क्या ज्योतिषीय परामर्श किसी परिणाम की गारंटी देता है?
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1e3cc] text-[#8d5b24] transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-5 text-sm leading-7 text-[#72574d]">
                      नहीं। ज्योतिषीय परामर्श पारंपरिक मान्यताओं और पद्धतियों पर
                      आधारित है तथा किसी निश्चित परिणाम की गारंटी नहीं देता।
                    </p>
                  </details>
                </div>
              </div>
            </article>

            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[2rem] border border-[#5b3023]/10 bg-[#fffaf3] shadow-[0_25px_80px_rgba(75,42,28,.08)]">
                {/* Header */}
                <div className="bg-[#3b2018] p-7 text-white">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#d6aa5a]/20 bg-[#d6aa5a]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#e0b66c]">
                      ज्योतिष सेवा
                    </span>

                    <Compass className="h-4 w-4 text-[#d6aa5a]" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl leading-tight">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    उज्जैन में ज्योतिषीय जानकारी और परामर्श के लिए संपर्क करें।
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a16f39]" />

                      <div>
                        <p className="text-xs font-bold text-[#44271e]">
                          स्थान
                        </p>

                        <p className="mt-1 text-xs text-[#80665b]">
                          उज्जैन, मध्य प्रदेश
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#a16f39]" />

                      <div>
                        <p className="text-xs font-bold text-[#44271e]">
                          परामर्श
                        </p>

                        <p className="mt-1 text-xs text-[#80665b]">
                          संपर्क के अनुसार
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#a16f39]" />

                      <div>
                        <p className="text-xs font-bold text-[#44271e]">
                          मार्गदर्शन
                        </p>

                        <p className="mt-1 text-xs text-[#80665b]">
                          पारंपरिक पद्धति के अनुसार
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-[#5b3023]/10" />

                  <Link
                    href="/contact"
                    className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#8e3e27] px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(142,62,39,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a94a2d]"
                  >
                    संपर्क करें

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/online-puja"
                    className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#5b3023]/10 text-sm font-semibold text-[#5b3023] transition-colors hover:bg-[#f4eadb]"
                  >
                    अनुरोध भेजें

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED JYOTISH SERVICES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#efe3d1] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d6aa5a]/10 blur-[100px]" />

          <div className="absolute bottom-[-150px] right-[-100px] h-80 w-80 rounded-full bg-[#9b4a2d]/[0.06] blur-[100px]" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9b6b38]">
                अन्य सेवाएँ
              </p>

              <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                अन्य ज्योतिषीय सेवाएँ
              </h2>
            </div>

            <Link
              href="/jyotish"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#7e422c]"
            >
              सभी सेवाएँ देखें

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <Link
                key={item.slug}
                href={`/jyotish/${item.slug}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#5b3023]/10 bg-[#fffaf3] p-6 shadow-[0_15px_45px_rgba(75,42,28,.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(75,42,28,.1)] sm:p-7"
              >
                {/* Card atmosphere */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d6aa5a]/10 blur-[50px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0e1c7] text-[#946332]">
                      <Compass className="h-4 w-4" />
                    </span>

                    <span className="text-xs font-bold text-[#b08a5a]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-2xl text-[#44271e] transition-colors group-hover:text-[#8c4329]">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#796056]">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#8b4a31]">
                    विवरण देखें

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="bg-[#f8f1e6] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#5b3023]/10 bg-[#fffaf3] px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-[#80665b]">
            ज्योतिषीय सेवाएँ पारंपरिक मान्यताओं और पद्धतियों पर आधारित हैं।
            किसी परिणाम की गारंटी नहीं दी जाती।
          </p>

          <Link
            href="/disclaimer"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#8c4329] transition-colors hover:text-[#642c1e]"
          >
            अस्वीकरण पढ़ें

            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
