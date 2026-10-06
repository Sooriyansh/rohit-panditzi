"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "@/components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

type Service = (typeof import("@/data/services").jyotishServices)[number];

type Props = {
  services: Service[];
};

export default function JyotishClient({ services }: Props) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            "[data-intro]",
            "[data-decoration]",
            "[data-section-label]",
            "[data-section-title]",
            "[data-section-copy]",
            "[data-service-card]",
            "[data-bottom-cta]",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-intro]", {
          opacity: 0,
          y: 35,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.from("[data-decoration]", {
          opacity: 0,
          scale: 0.88,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.from("[data-section-label]", {
          scrollTrigger: {
            trigger: "[data-services-section]",
            start: "top 82%",
          },
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power3.out",
        });

        gsap.from("[data-section-title]", {
          scrollTrigger: {
            trigger: "[data-services-section]",
            start: "top 82%",
          },
          opacity: 0,
          y: 28,
          duration: 0.9,
          delay: 0.08,
          ease: "power3.out",
        });

        gsap.from("[data-section-copy]", {
          scrollTrigger: {
            trigger: "[data-services-section]",
            start: "top 82%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.16,
          ease: "power3.out",
        });

        gsap.from("[data-service-card]", {
          scrollTrigger: {
            trigger: "[data-services-grid]",
            start: "top 84%",
          },
          opacity: 0,
          y: 45,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.from("[data-bottom-cta]", {
          scrollTrigger: {
            trigger: "[data-bottom-cta]",
            start: "top 88%",
          },
          opacity: 0,
          y: 35,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.to("[data-om-watermark]", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to("[data-card-inner]", {
          y: -7,
          duration: 0.35,
          ease: "power2.out",
          paused: true,
          overwrite: true,
        });

        const cards = gsap.utils.toArray<HTMLElement>(
          "[data-service-card]"
        );

        cards.forEach((card) => {
          const inner = card.querySelector<HTMLElement>("[data-card-inner]");

          if (!inner) return;

          const enter = () => {
            gsap.to(inner, {
              y: -7,
              duration: 0.35,
              ease: "power2.out",
              overwrite: true,
            });
          };

          const leave = () => {
            gsap.to(inner, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              overwrite: true,
            });
          };

          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);

          return () => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
          };
        });
      });

      return () => mm.revert();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f7f0e5] text-[#4b1723]"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden border-b border-[#4b1723]/10 bg-[#f5eee2]">
        {/* Soft atmospheric shapes */}
        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full border border-[#9a7133]/15"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-32 h-[300px] w-[300px] rounded-full border border-[#9a7133]/10"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute right-[-170px] top-[-120px] h-[500px] w-[500px] rounded-full border border-[#4b1723]/10"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-[-40px] h-[340px] w-[340px] rounded-full border border-[#9a7133]/12"
        />

        {/* Fine heritage lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[#4b1723]/[0.04] lg:left-[8%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-px bg-[#4b1723]/[0.04] lg:right-[8%]"
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <div className="relative z-10 max-w-3xl">
              {/* Eyebrow */}
              <div
                data-intro
                className="mb-7 flex items-center gap-4"
              >
                <span className="h-px w-12 bg-[#9a7133]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a632c] sm:text-[11px]">
                  वैदिक ज्योतिष • उज्जैन
                </span>
              </div>

              {/* Main heading */}
              <h1
                data-intro
                className="max-w-4xl font-serif text-[clamp(3.8rem,8vw,7.4rem)] font-medium leading-[0.88] tracking-[-0.045em] text-[#4b1723]"
              >
                ज्योतिष
                <span className="mt-2 block text-[#8c672d]">
                  सेवाएँ
                </span>
              </h1>

              {/* Decorative rule */}
              <div
                data-intro
                className="my-8 flex items-center gap-3"
              >
                <span className="h-[2px] w-16 bg-[#9a7133]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#9a7133]" />
                <span className="h-px w-24 bg-[#9a7133]/35" />
              </div>

              {/* Description */}
              <p
                data-intro
                className="max-w-2xl text-[15px] leading-8 text-[#5f4a43] sm:text-[17px] sm:leading-9"
              >
                वैदिक ज्योतिष की प्राचीन परंपरा और अनुभवी मार्गदर्शन के
                माध्यम से जीवन, करियर, विवाह, ग्रह दशा और भविष्य से
                जुड़े महत्वपूर्ण प्रश्नों को समझने का एक विश्वसनीय
                प्रयास।
              </p>

              {/* CTA */}
              <div
                data-intro
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 border border-[#4b1723] bg-[#4b1723] px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f8efe1] transition-all duration-300 hover:bg-[#641f2d]"
                >
                  परामर्श के लिए संपर्क करें
                  <span className="text-[#d5ad61] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="#jyotish-services"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 border border-[#4b1723]/20 bg-transparent px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4b1723] transition-all duration-300 hover:border-[#9a7133] hover:bg-[#efe3d1]"
                >
                  सेवाएँ देखें
                  <span className="text-[#9a7133] transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div
              data-intro
              className="relative flex min-h-[420px] items-center justify-center lg:min-h-[540px]"
            >
              {/* Outer frame */}
              <div
                data-decoration
                className="absolute h-[360px] w-[360px] rounded-full border border-[#9a7133]/20 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
              />

              <div
                data-decoration
                className="absolute h-[290px] w-[290px] rounded-full border border-[#4b1723]/10 sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px]"
              />

              {/* Cardinal marks */}
              <span
                aria-hidden="true"
                className="absolute top-[calc(50%-250px)] h-10 w-px bg-[#9a7133]/50"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[calc(50%-250px)] h-10 w-px bg-[#9a7133]/50"
              />

              <span
                aria-hidden="true"
                className="absolute left-[calc(50%-250px)] h-px w-10 bg-[#9a7133]/50"
              />

              <span
                aria-hidden="true"
                className="absolute right-[calc(50%-250px)] h-px w-10 bg-[#9a7133]/50"
              />

              {/* Central seal */}
              <div className="relative z-10 flex h-[230px] w-[230px] items-center justify-center rounded-full border border-[#9a7133]/40 bg-[#f7f0e5] shadow-[0_24px_80px_rgba(75,23,35,0.10)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
                <div className="absolute inset-4 rounded-full border border-[#4b1723]/10" />

                <div className="relative flex flex-col items-center justify-center text-center">
                  <span
                    data-om-watermark
                    aria-hidden="true"
                    className="font-serif text-[110px] font-normal leading-none text-[#4b1723]/[0.10] sm:text-[135px] lg:text-[155px]"
                  >
                    ॐ
                  </span>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-serif text-5xl text-[#4b1723] sm:text-6xl lg:text-7xl">
                      ॐ
                    </span>

                    <span className="mt-5 h-px w-12 bg-[#9a7133]" />

                    <span className="mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a632c]">
                      Vedic Astrology
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbit labels */}
              <div
                data-decoration
                className="absolute left-[3%] top-[26%] hidden border border-[#4b1723]/10 bg-[#f7f0e5]/90 px-4 py-3 backdrop-blur-sm sm:block"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8a632c]">
                  वैदिक
                </p>
                <p className="mt-1 font-serif text-sm text-[#4b1723]">
                  ज्योतिष
                </p>
              </div>

              <div
                data-decoration
                className="absolute bottom-[24%] right-[2%] hidden border border-[#4b1723]/10 bg-[#f7f0e5]/90 px-4 py-3 text-right backdrop-blur-sm sm:block"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8a632c]">
                  पवित्र नगरी
                </p>
                <p className="mt-1 font-serif text-sm text-[#4b1723]">
                  उज्जैन
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="jyotish-services"
        data-services-section
        className="relative border-b border-[#4b1723]/10 bg-[#f7f0e5] py-24 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section heading */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div
                data-section-label
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#9a7133]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a632c]">
                  Our Expertise
                </span>
              </div>
            </div>

            <div>
              <h2
                data-section-title
                className="max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-[#4b1723] sm:text-5xl lg:text-6xl"
              >
                जीवन के महत्वपूर्ण प्रश्नों के लिए
                <span className="block text-[#8c672d]">
                  शास्त्रीय मार्गदर्शन
                </span>
              </h2>

              <p
                data-section-copy
                className="mt-6 max-w-2xl text-[15px] leading-8 text-[#69554d] sm:text-base sm:leading-8"
              >
                प्रत्येक सेवा को आपकी व्यक्तिगत परिस्थिति और
                आवश्यकताओं को ध्यान में रखते हुए समझने और मार्गदर्शन
                देने के उद्देश्य से प्रस्तुत किया गया है।
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-[#4b1723]/10 lg:my-20" />

          {/* Services */}
          <div
            data-services-grid
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={service.slug}
                data-service-card
                className="group relative"
              >
                <div
                  data-card-inner
                  className="relative h-full transition-shadow duration-300"
                >
                  <Link
                    href={`/jyotish/${service.slug}`}
                    className="relative block h-full overflow-hidden border border-[#4b1723]/10 bg-[#fbf7ef] p-7 transition-colors duration-300 hover:border-[#9a7133]/45 sm:p-8"
                  >
                    {/* Top accent */}
                    <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#9a7133] transition-all duration-500 group-hover:w-full" />

                    {/* Number */}
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-3xl text-[#9a7133]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-[#4b1723]/10 text-[#8a632c] transition-all duration-300 group-hover:border-[#9a7133]/50 group-hover:bg-[#efe3d1]">
                        ↗
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-16">
                      <h3 className="font-serif text-2xl leading-tight text-[#4b1723] sm:text-[27px]">
                        {service.title}
                      </h3>

                      <div className="mt-5 h-px w-10 bg-[#9a7133] transition-all duration-500 group-hover:w-16" />

                      <p className="mt-5 line-clamp-3 text-sm leading-7 text-[#69554d]">
                        {service.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-10 flex items-center justify-between border-t border-[#4b1723]/10 pt-5">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a632c]">
                        विवरण देखें
                      </span>

                      <span className="text-sm text-[#4b1723] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section
        data-bottom-cta
        className="relative overflow-hidden bg-[#4b1723] py-24 sm:py-28 lg:py-32"
      >
        {/* Minimal decorative rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#d5ad61]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full border border-[#d5ad61]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full border border-[#d5ad61]/10"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d5ad61]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d5ad61]" />
            <span className="h-px w-10 bg-[#d5ad61]/60" />
          </div>

          <span className="mt-7 block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d5ad61]">
            व्यक्तिगत मार्गदर्शन
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-[#f7f0e5] sm:text-5xl lg:text-6xl">
            अपने प्रश्नों को
            <span className="block text-[#d5ad61]">
              सही दिशा दें
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#eadfd2]/75 sm:text-base">
            ज्योतिषीय परामर्श या अन्य आध्यात्मिक सेवाओं से संबंधित
            जानकारी के लिए संपर्क करें। आपकी परिस्थिति के अनुसार
            उचित मार्गदर्शन प्राप्त करें।
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#d5ad61] px-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4b1723] transition-all duration-300 hover:bg-[#e0bf7b]"
            >
              संपर्क करें
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/online-puja"
              className="group inline-flex min-h-14 items-center justify-center gap-4 border border-[#f7f0e5]/25 px-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f7f0e5] transition-all duration-300 hover:border-[#d5ad61]/60 hover:bg-[#f7f0e5]/5"
            >
              पूजा सेवाएँ देखें
              <span className="text-[#d5ad61] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}