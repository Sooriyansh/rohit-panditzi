"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const heroItems = root.querySelectorAll("[data-hero-item]");
      const heroWatermark = root.querySelector("[data-watermark]");
      const infoCard = root.querySelector("[data-info-card]");
      const infoText = root.querySelector("[data-info-text]");
      const cta = root.querySelector("[data-cta]");
      const decorative = root.querySelectorAll("[data-decoration]");
      const infoTiles = root.querySelectorAll("[data-info-tile]");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          heroItems,
          {
            y: 55,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.15,
            stagger: 0.11,
            ease: "power4.out",
          }
        );

        if (heroWatermark) {
          gsap.to(heroWatermark, {
            y: 130,
            rotate: -10,
            ease: "none",
            scrollTrigger: {
              trigger: root.querySelector("[data-hero]"),
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        decorative.forEach((element, index) => {
          gsap.to(element, {
            y: index % 2 === 0 ? -22 : 18,
            x: index % 2 === 0 ? 12 : -10,
            rotation: index % 2 === 0 ? 6 : -6,
            duration: 5 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        if (infoCard) {
          gsap.fromTo(
            infoCard,
            {
              y: 80,
              opacity: 0,
              scale: 0.96,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.05,
              ease: "power4.out",
              scrollTrigger: {
                trigger: infoCard,
                start: "top 82%",
              },
            }
          );
        }

        if (infoText) {
          gsap.fromTo(
            infoText,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: infoText,
                start: "top 85%",
              },
            }
          );
        }

        infoTiles.forEach((tile, index) => {
          gsap.fromTo(
            tile,
            {
              y: 35,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: index * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: tile,
                start: "top 90%",
              },
            }
          );
        });

        if (cta) {
          gsap.fromTo(
            cta,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cta,
                start: "top 90%",
              },
            }
          );
        }
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative overflow-hidden bg-[#F7F1E6] text-[#241B17]"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        data-hero
        className="relative isolate min-h-[88vh] overflow-hidden border-b border-[#241B17]/10 bg-[#E9DDC9]"
      >
        {/* Warm atmospheric light */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-0 h-[560px] w-[560px] rounded-full bg-[#B56A1F]/[0.08] blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-52 bottom-[-140px] h-[680px] w-[680px] rounded-full bg-[#641C29]/[0.08] blur-[140px]"
        />

        {/* Subtle heritage grid */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,27,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(36,27,23,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Large Om */}

        <div
          data-watermark
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none font-serif text-[21rem] leading-none text-[#641C29]/[0.065] sm:text-[27rem] lg:text-[35rem]"
        >
          ॐ
        </div>

        {/* Heritage orbital rings */}

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-8 h-[620px] w-[620px] rounded-full border border-[#B9965A]/30"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-32 h-[440px] w-[440px] rounded-full border border-dashed border-[#8E4B2F]/20"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full border border-[#641C29]/10"
        />

        {/* Floating details */}

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute left-[17%] top-[27%] h-2 w-2 rounded-full bg-[#B56A1F]/80 shadow-[0_0_0_8px_rgba(181,106,31,0.07)]"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute right-[31%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#641C29]/60"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute right-[16%] bottom-[24%] h-3 w-3 rounded-full border border-[#B9965A]/60"
        />

        {/* Hero content */}

        <div className="container relative z-10 flex min-h-[88vh] items-center py-24 md:py-28 lg:py-32">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.8fr] lg:gap-12 xl:gap-20">

            {/* Left */}

            <div className="max-w-4xl">

              <div
                data-hero-item
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-14 bg-[#B56A1F]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#754A29] sm:text-[11px]">
                  तिथि एवं मुहूर्त
                </span>

                <span className="h-px w-14 bg-[#B56A1F]/50" />
              </div>

              <h1
                data-hero-item
                className="font-serif text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.055em] text-[#241B17]"
              >
                पंचांग

                <span className="mt-2 block pl-[0.08em] text-[#9A581D]">
                  / मुहूर्त
                </span>
              </h1>

              <div
                data-hero-item
                className="mt-10 max-w-2xl border-l-2 border-[#B56A1F]/45 pl-6 md:pl-8"
              >
                <p className="text-[17px] leading-8 text-[#55463D] md:text-[20px] md:leading-9">
                  शुभ कार्य, पूजा एवं धार्मिक अनुष्ठानों के लिए
                  उपयुक्त तिथि और समय का चयन वैदिक परंपरा का
                  महत्वपूर्ण हिस्सा है।
                </p>
              </div>

              <div
                data-hero-item
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#muhurat-info"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#641C29] px-8 py-4 text-sm font-bold text-[#FFF8EE] shadow-[0_20px_50px_rgba(74,23,34,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4D141F] hover:shadow-[0_25px_65px_rgba(74,23,34,0.3)]"
                >
                  जानकारी देखें

                  <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-[#641C29]/20 bg-[#F7F1E6]/55 px-8 py-4 text-sm font-bold text-[#641C29] shadow-[0_10px_30px_rgba(50,30,20,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#B56A1F]/50 hover:bg-[#FFF9F0]"
                >
                  मुहूर्त के लिए संपर्क करें
                </Link>
              </div>

              {/* Hero stats */}

              <div
                data-hero-item
                className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-[#641C29]/15 pt-7"
              >
                <div>
                  <p className="font-serif text-2xl text-[#641C29]">
                    वैदिक
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                    परंपरा
                  </p>
                </div>

                <span className="h-9 w-px bg-[#641C29]/15" />

                <div>
                  <p className="font-serif text-2xl text-[#641C29]">
                    उज्जैन
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                    आध्यात्मिक नगर
                  </p>
                </div>

                <span className="h-9 w-px bg-[#641C29]/15" />

                <div>
                  <p className="font-serif text-2xl text-[#9A581D]">
                    शुभ
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                    समय चयन
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}

            <div
              data-hero-item
              className="relative mx-auto hidden h-[500px] w-full max-w-[500px] items-center justify-center lg:flex"
            >
              <div className="absolute h-[430px] w-[430px] rounded-full border border-[#B9965A]/30" />

              <div className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-[#8E4B2F]/25" />

              <div className="absolute h-[285px] w-[285px] rounded-full bg-[#B56A1F]/[0.07] blur-3xl" />

              {/* Center sacred emblem */}

              <div className="relative flex h-[235px] w-[235px] items-center justify-center rounded-full border border-[#B9965A]/40 bg-[#F7F1E6]/80 shadow-[0_35px_100px_rgba(61,35,23,0.14)] backdrop-blur-sm">
                <div className="absolute inset-5 rounded-full border border-[#B9965A]/20" />

                <div className="absolute inset-10 rounded-full border border-dashed border-[#8E4B2F]/20" />

                <div className="relative text-center">
                  <span className="font-serif text-[6.5rem] leading-none text-[#641C29]">
                    ॐ
                  </span>

                  <div className="mx-auto mt-2 h-px w-12 bg-[#B56A1F]/70" />

                  <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.3em] text-[#9A581D]">
                    शुभ समय
                  </p>
                </div>
              </div>

              {/* Floating labels */}

              <div className="absolute left-0 top-[17%] rounded-2xl border border-[#641C29]/10 bg-[#F7F1E6]/80 px-5 py-4 shadow-[0_15px_40px_rgba(54,30,20,0.1)] backdrop-blur-md">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9A581D]">
                  परंपरा
                </p>

                <p className="mt-1.5 font-serif text-sm text-[#3E2025]">
                  वैदिक पंचांग
                </p>
              </div>

              <div className="absolute bottom-[15%] right-0 rounded-2xl border border-[#641C29]/10 bg-[#F7F1E6]/80 px-5 py-4 text-right shadow-[0_15px_40px_rgba(54,30,20,0.1)] backdrop-blur-md">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9A581D]">
                  स्थान
                </p>

                <p className="mt-1.5 font-serif text-sm text-[#3E2025]">
                  उज्जैन
                </p>
              </div>

              <div className="absolute right-[5%] top-[18%] h-2 w-2 rounded-full bg-[#B56A1F]/80" />

              <div className="absolute bottom-[26%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#641C29]/55" />
            </div>
          </div>
        </div>

        {/* Bottom metadata */}

        <div className="absolute bottom-7 left-0 right-0 z-10">
          <div className="container flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#765E50] sm:text-[10px]">
              Ujjain · Vedic Tradition
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.3em] text-[#765E50] md:block">
              शुभ समय · सही विधि
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFORMATION
      ====================================================== */}

      <section
        id="muhurat-info"
        className="relative overflow-hidden bg-[#F7F1E6] py-24 md:py-36"
      >
        {/* Background rings */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B9965A]/[0.07]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#641C29]/[0.035]"
        />

        <div className="container relative z-10">
          <div
            data-info-card
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#641C29]/12 bg-[#E8D7BE] shadow-[0_35px_110px_rgba(65,38,24,0.12)]"
          >
            {/* Gold accent */}

            <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#B9965A]" />

            {/* Decorative Om */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-20 select-none font-serif text-[17rem] leading-none text-[#641C29]/[0.055] md:text-[23rem]"
            >
              ॐ
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-[330px] w-[330px] rounded-full border border-[#641C29]/[0.08]"
            />

            <div className="relative z-10 grid gap-14 p-8 md:p-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 lg:p-20">

              {/* Editorial side */}

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-[#B56A1F]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80501F]">
                    महत्वपूर्ण सूचना
                  </span>
                </div>

                <h2 className="mt-7 max-w-sm font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-[#351B20] md:text-6xl">
                  सही समय

                  <span className="mt-1 block text-[#9A581D]">
                    सही विधि
                  </span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-[#624D43]">
                  धार्मिक अनुष्ठानों में तिथि और मुहूर्त का चयन
                  परंपरा के अनुसार महत्वपूर्ण माना जाता है।
                </p>

                <div className="mt-9 h-px w-20 bg-[#641C29]/25" />

                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9965A]/50 bg-[#F7F1E6]/40 font-serif text-lg text-[#641C29]">
                    ॐ
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#80501F]">
                      Vedic Guidance
                    </p>

                    <p className="mt-1 text-xs text-[#705B50]">
                      वैदिक परंपरा के अनुसार
                    </p>
                  </div>
                </div>
              </div>

              {/* Main content */}

              <div
                data-info-text
                className="max-w-3xl"
              >
                <p className="text-[18px] leading-9 text-[#4F4039] md:text-[21px] md:leading-10">
                  इस वेबसाइट पर दैनिक पंचांग या लाइव मुहूर्त गणना
                  प्रकाशित नहीं है। किसी विशेष पूजा, अनुष्ठान या
                  शुभ कार्य के लिए उपयुक्त तिथि और समय जानने हेतु
                  सीधे संपर्क करें।
                </p>

                {/* Process tiles */}

                <div className="mt-11 grid gap-4 sm:grid-cols-3">

                  <div
                    data-info-tile
                    className="group rounded-[1.4rem] border border-[#641C29]/10 bg-[#F7F1E6]/60 p-6 shadow-[0_12px_35px_rgba(70,40,25,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965A]/40 hover:bg-[#FFF9EF] hover:shadow-[0_20px_50px_rgba(70,40,25,0.1)]"
                  >
                    <span className="font-serif text-4xl text-[#641C29]/80 transition-colors group-hover:text-[#641C29]">
                      01
                    </span>

                    <div className="mt-5 h-px w-8 bg-[#B56A1F]/60" />

                    <p className="mt-4 text-sm font-bold leading-6 text-[#4F3537]">
                      पूजा की आवश्यकता
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#765F57]">
                      अनुष्ठान के उद्देश्य के अनुसार
                    </p>
                  </div>

                  <div
                    data-info-tile
                    className="group rounded-[1.4rem] border border-[#641C29]/10 bg-[#F7F1E6]/60 p-6 shadow-[0_12px_35px_rgba(70,40,25,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965A]/40 hover:bg-[#FFF9EF] hover:shadow-[0_20px_50px_rgba(70,40,25,0.1)]"
                  >
                    <span className="font-serif text-4xl text-[#641C29]/80 transition-colors group-hover:text-[#641C29]">
                      02
                    </span>

                    <div className="mt-5 h-px w-8 bg-[#B56A1F]/60" />

                    <p className="mt-4 text-sm font-bold leading-6 text-[#4F3537]">
                      उपयुक्त तिथि
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#765F57]">
                      अवसर और परंपरा के अनुसार
                    </p>
                  </div>

                  <div
                    data-info-tile
                    className="group rounded-[1.4rem] border border-[#641C29]/10 bg-[#F7F1E6]/60 p-6 shadow-[0_12px_35px_rgba(70,40,25,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965A]/40 hover:bg-[#FFF9EF] hover:shadow-[0_20px_50px_rgba(70,40,25,0.1)]"
                  >
                    <span className="font-serif text-4xl text-[#641C29]/80 transition-colors group-hover:text-[#641C29]">
                      03
                    </span>

                    <div className="mt-5 h-px w-8 bg-[#B56A1F]/60" />

                    <p className="mt-4 text-sm font-bold leading-6 text-[#4F3537]">
                      शुभ मुहूर्त
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#765F57]">
                      निर्धारित समय के अनुसार
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <div data-cta className="mt-11">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4 rounded-full bg-[#641C29] px-8 py-4 text-sm font-bold text-[#FFF8EE] shadow-[0_18px_45px_rgba(76,22,35,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4D141F] hover:shadow-[0_24px_60px_rgba(76,22,35,0.25)]"
                  >
                    संपर्क करें

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#241417] py-24 md:py-32">

        {/* Gold rings */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-36 h-[500px] w-[500px] rounded-full border border-[#B9965A]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-16 h-[300px] w-[300px] rounded-full border border-[#B9965A]/[0.11]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -left-32 h-[560px] w-[560px] rounded-full border border-[#B9965A]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/[0.035]"
        />

        {/* Subtle saffron light */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B56A1F]/[0.06] blur-[120px]"
        />

        <div className="container relative z-10 text-center">

          <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D8B77C] sm:text-[10px]">
            वैदिक परंपरा
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.045em] text-[#FFF8EE]">
            किसी भी अनुष्ठान से पहले

            <span className="block text-[#D5B273]">
              शुभ समय जानें
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#E9D9C3]/75 md:text-lg md:leading-9">
            अपनी पूजा, अनुष्ठान या विशेष अवसर के लिए उपयुक्त
            तिथि एवं मुहूर्त की जानकारी प्राप्त करने हेतु
            संपर्क करें।
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#F7EBDD] px-9 py-4 text-sm font-bold text-[#581927] shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF9F0] hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]"
            >
              मुहूर्त के लिए संपर्क करें

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#D5B273]/15" />

            <span className="font-serif text-xl text-[#D5B273]/80">
              ॐ
            </span>

            <span className="h-px flex-1 bg-[#D5B273]/15" />
          </div>
        </div>
      </section>
    </main>
  );
}