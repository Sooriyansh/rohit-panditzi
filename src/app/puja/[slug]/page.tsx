
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { pujaServices } from "@/data/services";
import { buildMetadata, defaultSeo } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pujaServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const s = pujaServices.find((item) => item.slug === slug);

  const isKaalSarp = s?.slug === "kaal-sarp-dosh-puja";
  const path = isKaalSarp ? "/kaal-sarp-puja-ujjain" : `/puja/${s?.slug}`;

  return s
    ? buildMetadata({
        title: isKaalSarp
          ? "Kaal Sarp Puja Ujjain | Kaal Sarp Dosh Puja"
          : `${s.title} in Ujjain`,
        description: isKaalSarp
          ? defaultSeo.description
          : `${s.description} Ujjain me puja vidhi, samay aur booking se judi jankari.`,
        path,
        keywords: isKaalSarp
          ? defaultSeo.keywords
          : [`${s.title} Ujjain`, `${s.title} booking`, "Ujjain puja services"],
      })
    : {
        title: "Puja Service",
      };
}

export default async function PujaDetail({ params }: Props) {
  const { slug } = await params;

  const service = pujaServices.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f1e6] text-[#3b241c]">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative isolate overflow-hidden bg-[#321812]">
        {/* Background atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#9b4d2d]/20 blur-[140px]" />

          <div className="absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#c9974e]/10 blur-[130px]" />

          <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#7b2518]/20 blur-[140px]" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        {/* Decorative vertical lines */}

        <div className="pointer-events-none absolute inset-y-0 left-[7%] hidden w-px bg-white/[0.05] lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-white/[0.05] lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-7 sm:px-8 lg:px-10 lg:pb-32">
          {/* Breadcrumb */}

          <nav
            aria-label="ब्रेडक्रम्ब"
            className="flex items-center gap-2 text-xs sm:text-sm"
          >
            <Link
              href="/"
              className="text-white/40 transition-colors hover:text-[#e1b86d]"
            >
              होम
            </Link>

            <span className="text-white/20">/</span>

            <Link
              href="/puja"
              className="text-white/40 transition-colors hover:text-[#e1b86d]"
            >
              पूजा
            </Link>

            <span className="text-white/20">/</span>

            <span className="max-w-[220px] truncate text-white/65">
              {service.title}
            </span>
          </nav>

          {/* Main Hero */}

          <div className="mt-16 grid items-center lg:mt-20 lg:grid-cols-[1fr_0.72fr] lg:gap-12 xl:gap-20">
            {/* Left content */}

            <div className="relative z-10">
              {/* Eyebrow */}

              <div className="inline-flex items-center gap-3 rounded-full border border-[#d6aa5a]/20 bg-white/[0.035] px-3 py-2 pr-4 backdrop-blur-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d6aa5a]/10 text-[#e1b86d]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>

                <span className="text-[9px] font-bold tracking-[0.24em] text-[#e1b86d] sm:text-[10px]">
                  उज्जैन · वैदिक पूजा एवं अनुष्ठान
                </span>
              </div>

              {/* Heading */}

              <h1 className="mt-7 max-w-4xl font-serif text-[2.7rem] font-medium leading-[1.02] tracking-[-0.035em] text-[#fff8eb] sm:text-5xl md:text-6xl lg:text-[4.7rem] xl:text-[5.2rem]">
                {service.title}
              </h1>

              {/* Gold ornament */}

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-20 bg-[#d6aa5a]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6aa5a]" />
                <span className="h-px w-10 bg-[#d6aa5a]/25" />
              </div>

              {/* Description */}

              <p className="mt-8 max-w-2xl text-[15px] leading-8 text-white/60 sm:text-lg sm:leading-9">
                {service.description}
              </p>

              {/* Hero facts */}

              <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                <div className="border-r border-white/10 p-4 sm:p-5">
                  <MapPin className="h-4 w-4 text-[#d6aa5a]" />

                  <p className="mt-3 text-[9px] font-bold tracking-[0.16em] text-white/35">
                    स्थान
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 sm:text-sm">
                    उज्जैन
                  </p>
                </div>

                <div className="border-r border-white/10 p-4 sm:p-5">
                  <Clock3 className="h-4 w-4 text-[#d6aa5a]" />

                  <p className="mt-3 text-[9px] font-bold tracking-[0.16em] text-white/35">
                    अवधि
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 sm:text-sm">
                    अनुष्ठान अनुसार
                  </p>
                </div>

                <div className="p-4 sm:p-5">
                  <ShieldCheck className="h-4 w-4 text-[#d6aa5a]" />

                  <p className="mt-3 text-[9px] font-bold tracking-[0.16em] text-white/35">
                    परंपरा
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 sm:text-sm">
                    वैदिक विधि
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}

            <div className="relative mx-auto mt-12 flex h-[370px] w-full max-w-[430px] items-center justify-center lg:mt-0 lg:h-[520px]">
              {/* Outer glow */}

              <div className="absolute h-[300px] w-[300px] rounded-full bg-[#d6aa5a]/[0.045] blur-[90px] sm:h-[380px] sm:w-[380px]" />

              {/* Outer ring */}

              <div className="absolute h-[320px] w-[320px] rounded-full border border-[#d6aa5a]/10 sm:h-[390px] sm:w-[390px]" />

              {/* Inner ring */}

              <div className="absolute h-[265px] w-[265px] rounded-full border border-[#d6aa5a]/10 sm:h-[325px] sm:w-[325px]" />

              {/* Dashed ring */}

              <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-[#d6aa5a]/20 sm:h-[275px] sm:w-[275px]" />

              {/* Main emblem */}

              <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#d6aa5a]/25 bg-[#26120e] shadow-[0_30px_100px_rgba(0,0,0,.4)] sm:h-[275px] sm:w-[275px]">
                <div className="absolute inset-4 rounded-full border border-[#d6aa5a]/10 sm:inset-5" />

                <div className="relative flex flex-col items-center justify-center">
                  <span className="font-serif text-[6rem] leading-none text-[#dfb76b] drop-shadow-[0_8px_25px_rgba(214,170,90,.2)] sm:text-[7rem]">
                    ॐ
                  </span>

                  <div className="mt-3 h-px w-12 bg-[#d6aa5a]/50" />

                  <p className="mt-4 text-[8px] font-bold tracking-[0.32em] text-[#d6aa5a] sm:text-[9px]">
                    पवित्र अनुष्ठान
                  </p>
                </div>
              </div>

              {/* Floating details */}

              <div className="absolute left-0 top-[18%] hidden rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur-md sm:block">
                <p className="text-[8px] font-bold tracking-[0.2em] text-[#d6aa5a]">
                  परंपरा
                </p>
                <p className="mt-1 text-xs text-white/65">वैदिक विधि</p>
              </div>

              <div className="absolute bottom-[17%] right-0 hidden rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-right backdrop-blur-md sm:block">
                <p className="text-[8px] font-bold tracking-[0.2em] text-[#d6aa5a]">
                  स्थान
                </p>
                <p className="mt-1 text-xs text-white/65">उज्जैन, मध्य प्रदेश</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition */}

        <div className="relative h-10 bg-[#f8f1e6]">
          <div className="absolute left-1/2 top-0 h-10 w-40 -translate-x-1/2 rounded-t-full bg-[#321812]" />
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="bg-[#f8f1e6]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c59a55]/25 bg-[#ead7b5] text-[#8d5b24]">
                <Sparkles className="h-5 w-5" />
              </div>

              <p className="mt-6 text-[10px] font-bold tracking-[0.3em] text-[#a16f39]">
                पूजा का परिचय
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-[1.15] text-[#44271e] sm:text-4xl lg:text-5xl">
                {service.title}
                <span className="block text-[#a16f39]">क्या है?</span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[#6d5147] sm:text-lg sm:leading-9">
                {service.description} यह पूजा वैदिक एवं धार्मिक परंपराओं से
                जुड़ी एक आध्यात्मिक प्रक्रिया है। इसकी विधि, स्वरूप और अनुष्ठान
                संबंधित पूजा के उद्देश्य, धार्मिक परंपरा तथा परिस्थिति के अनुसार
                अलग हो सकते हैं।
              </p>
            </div>
          </div>

          {/* Information strip */}

          <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-[#5b3023]/10 bg-[#fffaf3] md:grid-cols-3">
            <div className="border-b border-[#5b3023]/10 p-7 md:border-b-0 md:border-r lg:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-xl text-[#44271e]">
                  धार्मिक महत्व
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#6d5147]">
                धार्मिक मान्यताओं के अनुसार {service.title} का अपना आध्यात्मिक
                एवं पारंपरिक महत्व माना जाता है।
              </p>
            </div>

            <div className="border-b border-[#5b3023]/10 p-7 md:border-b-0 md:border-r lg:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-xl text-[#44271e]">
                  पूजा का समय
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#6d5147]">
                पूजा की तिथि और मुहूर्त अनुष्ठान के प्रकार तथा धार्मिक परंपरा के
                अनुसार निर्धारित किए जा सकते हैं।
              </p>
            </div>

            <div className="p-7 lg:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                  <MapPin className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-xl text-[#44271e]">
                  पूजा का स्थान
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#6d5147]">
                यह धार्मिक सेवा उज्जैन, मध्य प्रदेश की आध्यात्मिक एवं वैदिक
                परंपरा से जुड़ी हुई है।
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="mt-24 grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-24">
            {/* Article */}

            <article className="min-w-0">
              {/* 01 */}

              <section className="border-t border-[#5b3023]/10 py-12 lg:py-14">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#c59a55]">01</span>

                  <span className="h-px w-10 bg-[#c59a55]/40" />

                  <p className="text-[10px] font-bold tracking-[0.25em] text-[#a16f39]">
                    महत्व
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  {service.title} का महत्व
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d5147]">
                  {service.description} धार्मिक परंपराओं में ऐसी पूजा को श्रद्धा,
                  संकल्प और आध्यात्मिक साधना से जोड़ा जाता है। पूजा का वास्तविक
                  स्वरूप संबंधित धार्मिक परंपरा और अनुष्ठान की विधि पर निर्भर
                  करता है।
                </p>
              </section>

              {/* 02 */}

              <section className="border-t border-[#5b3023]/10 py-12 lg:py-14">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#c59a55]">02</span>

                  <span className="h-px w-10 bg-[#c59a55]/40" />

                  <p className="text-[10px] font-bold tracking-[0.25em] text-[#a16f39]">
                    विधि
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  पूजा की सामान्य विधि
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d5147]">
                  पूजा की विधि अनुष्ठान के प्रकार के अनुसार अलग हो सकती है।
                  सामान्य रूप से इसमें संकल्प, देव आवाहन, मंत्रोच्चार, पूजा,
                  अर्पण तथा निर्धारित धार्मिक विधियों का पालन शामिल हो सकता है।
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "संकल्प एवं पूजा विधि",
                    "मंत्रोच्चार एवं अनुष्ठान",
                    "देव पूजन एवं अर्पण",
                    "वैदिक परंपरा के अनुसार प्रक्रिया",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#5b3023]/10 bg-[#fffaf3] px-5 py-4 transition-colors hover:border-[#c59a55]/30"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a16f39]" />

                      <span className="text-sm font-medium text-[#63473d]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 03 */}

              <section className="border-t border-[#5b3023]/10 py-12 lg:py-14">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#c59a55]">03</span>

                  <span className="h-px w-10 bg-[#c59a55]/40" />

                  <p className="text-[10px] font-bold tracking-[0.25em] text-[#a16f39]">
                    सामग्री
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  पूजा में आवश्यक सामग्री
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d5147]">
                  पूजा सामग्री अनुष्ठान के प्रकार के अनुसार अलग-अलग हो सकती है।
                  सामान्य रूप से पूजा में पुष्प, फल, दीप, धूप, जल, नैवेद्य और
                  अन्य आवश्यक धार्मिक सामग्री का उपयोग किया जा सकता है।
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-[#c59a55]/20 bg-[#f3e7d4] p-6 sm:p-8">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ead7b5] text-[#8d5b24]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#44271e]">
                        सामग्री की जानकारी
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#6d5147]">
                        इस विशेष पूजा के लिए आवश्यक सामग्री अनुष्ठान की विधि के
                        अनुसार निर्धारित की जा सकती है।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 04 */}

              <section className="border-t border-[#5b3023]/10 py-12 lg:py-14">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#c59a55]">04</span>

                  <span className="h-px w-10 bg-[#c59a55]/40" />

                  <p className="text-[10px] font-bold tracking-[0.25em] text-[#a16f39]">
                    अवधि
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  पूजा की अवधि
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d5147]">
                  पूजा की अवधि अनुष्ठान की विधि, मंत्रोच्चार और धार्मिक प्रक्रिया
                  के अनुसार अलग हो सकती है। प्रत्येक पूजा के लिए समय अलग-अलग
                  निर्धारित किया जा सकता है।
                </p>
              </section>

              {/* 05 */}

              <section className="border-t border-[#5b3023]/10 py-12 lg:py-14">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#c59a55]">05</span>

                  <span className="h-px w-10 bg-[#c59a55]/40" />

                  <p className="text-[10px] font-bold tracking-[0.25em] text-[#a16f39]">
                    महत्वपूर्ण जानकारी
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#44271e] sm:text-4xl">
                  ध्यान देने योग्य बातें
                </h2>

                <div className="mt-8 space-y-3">
                  {[
                    "पूजा वैदिक एवं धार्मिक परंपराओं पर आधारित है।",
                    "पूजा की विधि अनुष्ठान और परिस्थिति के अनुसार अलग हो सकती है।",
                    "मुहूर्त और तिथि धार्मिक परंपरा के अनुसार निर्धारित की जा सकती है।",
                    "ज्योतिषीय या धार्मिक मान्यताओं को निश्चित परिणाम की गारंटी न माना जाए।",
                    "यह जानकारी चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है।",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-[#fffaf3] px-5 py-4"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#a16f39]" />

                      <p className="text-sm leading-7 text-[#63473d]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            {/* =====================================================
                SIDEBAR
            ====================================================== */}

            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="overflow-hidden rounded-[2rem] border border-[#5b3023]/10 bg-[#fffaf3] shadow-[0_25px_70px_rgba(75,42,28,.07)]">
                {/* Header */}

                <div className="relative overflow-hidden bg-[#321812] p-7 text-white">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c9974e]/10 blur-3xl" />

                  <p className="relative text-[9px] font-bold tracking-[0.25em] text-[#d6aa5a]">
                    पूजा जानकारी
                  </p>

                  <h3 className="relative mt-4 font-serif text-2xl leading-tight">
                    {service.title}
                  </h3>

                  <div className="relative mt-6 flex items-center gap-2">
                    <span className="h-px w-8 bg-[#d6aa5a]/60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d6aa5a]" />
                  </div>
                </div>

                {/* Details */}

                <div className="space-y-6 p-7">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#44271e]">स्थान</p>

                      <p className="mt-1 text-sm text-[#80665b]">
                        उज्जैन, मध्य प्रदेश
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#44271e]">अवधि</p>

                      <p className="mt-1 text-sm text-[#80665b]">
                        अनुष्ठान के अनुसार
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead7b5] text-[#8d5b24]">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#44271e]">
                        परंपरा
                      </p>

                      <p className="mt-1 text-sm text-[#80665b]">
                        वैदिक एवं धार्मिक विधि
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-[#5b3023]/10" />

                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#a16f39]">
                      सेवा का स्वरूप
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#6d5147]">
                      श्रद्धा, संकल्प और पारंपरिक वैदिक विधि से जुड़ा धार्मिक
                      अनुष्ठान।
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM CTA
      ========================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#321812] px-7 py-12 sm:px-10 lg:px-16 lg:py-14">
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#c9974e]/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#8d4028]/15 blur-[100px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[9px] font-bold tracking-[0.3em] text-[#d6aa5a]">
                  उज्जैन · वैदिक परंपरा
                </p>

                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#fff8eb] sm:text-4xl">
                  {service.title} से जुड़ी अधिक जानकारी प्राप्त करें
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                  पूजा की विधि, समय और धार्मिक प्रक्रिया से संबंधित जानकारी के
                  लिए सेवा विवरण देखें और उचित मार्गदर्शन प्राप्त करें।
                </p>
              </div>

              <Link
                href="/puja"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#d6aa5a]/30 bg-[#d6aa5a] px-6 py-3.5 text-sm font-bold text-[#321812] transition-all duration-300 hover:bg-[#e5c47f] hover:shadow-[0_12px_40px_rgba(214,170,90,.18)]"
              >
                सभी पूजा सेवाएँ

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}

      <section className="border-t border-[#5b3023]/10 bg-[#efe3d1]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex gap-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8d5b24]" />

            <p className="text-xs leading-6 text-[#72574d]">
              <span className="font-bold text-[#44271e]">
                महत्वपूर्ण सूचना:
              </span>{" "}
              धार्मिक एवं ज्योतिषीय जानकारी पारंपरिक मान्यताओं पर आधारित है।
              किसी निश्चित परिणाम की गारंटी नहीं दी जाती।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
