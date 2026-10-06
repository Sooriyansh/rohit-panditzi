"use client";

import { pujaServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PujaIndex() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const heroItems = root.querySelectorAll("[data-hero-item]");
      const cards = root.querySelectorAll("[data-service-card]");
      const decorations = root.querySelectorAll("[data-decoration]");
      const sectionLabel = root.querySelector("[data-section-label]");
      const sectionTitle = root.querySelector("[data-section-title]");
      const sectionText = root.querySelector("[data-section-text]");
      const bottomCta = root.querySelector("[data-bottom-cta]");
      const watermark = root.querySelector("[data-watermark]");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ================================================
           HERO INTRO
        ================================================= */

        gsap.fromTo(
          heroItems,
          {
            y: 55,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.15,
            stagger: 0.12,
            ease: "power4.out",
          }
        );

        /* ================================================
           HERO WATERMARK PARALLAX
        ================================================= */

        if (watermark) {
          gsap.to(watermark, {
            y: 110,
            rotation: -8,
            ease: "none",
            scrollTrigger: {
              trigger: root.querySelector("[data-hero]"),
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        /* ================================================
           FLOATING DECORATIONS
        ================================================= */

        decorations.forEach((element, index) => {
          gsap.to(element, {
            x: index % 2 === 0 ? 14 : -14,
            y: index % 2 === 0 ? -20 : 20,
            rotation: index % 2 === 0 ? 6 : -6,
            duration: 4 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        /* ================================================
           SECTION HEADING
        ================================================= */

        if (sectionLabel) {
          gsap.fromTo(
            sectionLabel,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionLabel,
                start: "top 88%",
              },
            }
          );
        }

        if (sectionTitle) {
          gsap.fromTo(
            sectionTitle,
            {
              y: 45,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: sectionTitle,
                start: "top 88%",
              },
            }
          );
        }

        if (sectionText) {
          gsap.fromTo(
            sectionText,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionText,
                start: "top 88%",
              },
            }
          );
        }

        /* ================================================
           SERVICE CARDS
        ================================================= */

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              y: 70,
              opacity: 0,
              scale: 0.96,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.95,
              delay: Math.min(index * 0.08, 0.4),
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        /* ================================================
           BOTTOM CTA
        ================================================= */

        if (bottomCta) {
          gsap.fromTo(
            bottomCta,
            {
              y: 55,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: bottomCta,
                start: "top 88%",
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
      className="relative overflow-hidden bg-[#fbf8f2]"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        data-hero
        className="relative isolate min-h-[78vh] overflow-hidden border-b border-[#641c29]/10 bg-[#f2e9db]"
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60,30,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(60,30,20,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Large Om */}
        <div
          data-watermark
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 select-none font-serif text-[21rem] leading-none text-[#641c29]/[0.035] md:text-[30rem]"
        >
          ॐ
        </div>

        {/* Decorative rings */}
        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-8 h-64 w-64 rounded-full border border-[#8d6a32]/15"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full border border-[#641c29]/10"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute left-[16%] top-[28%] h-2 w-2 rounded-full bg-[#8d6a32]/60"
        />

        <div
          data-decoration
          aria-hidden="true"
          className="pointer-events-none absolute right-[20%] bottom-[25%] h-3 w-3 rounded-full bg-[#641c29]/30"
        />

        <div className="container relative z-10 flex min-h-[78vh] items-center py-24 md:py-32">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div
              data-hero-item
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#8d6a32]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#795b2d]"
              >
                उज्जैन में धार्मिक सेवाएँ
              </span>

              <span className="h-px w-12 bg-[#8d6a32]/50" />
            </div>

            {/* Main heading */}
            <h1
              data-hero-item
              className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[0.9] tracking-[-0.045em] text-[#4b1723]"
            >
              पूजा एवं
              <span className="block pl-[0.06em] text-[#8d672f]">
                वैदिक अनुष्ठान
              </span>
            </h1>

            {/* Description */}
            <div
              data-hero-item
              className="mt-9 max-w-2xl border-l border-[#8d6a32]/40 pl-6 md:pl-8"
            >
              <p className="text-lg leading-8 text-[#5e534b] md:text-xl md:leading-9">
                पारंपरिक वैदिक विधि-विधान के अनुसार पूजा एवं
                अनुष्ठान सेवाओं की जानकारी प्राप्त करें और
                अपनी आवश्यकता के अनुसार सेवा का चयन करें।
              </p>
            </div>

            {/* Actions */}
            <div
              data-hero-item
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#puja-services"
                className="group inline-flex items-center gap-4 rounded-full bg-[#641c29] px-7 py-4 text-sm font-bold text-[#fff9ef] shadow-[0_18px_45px_rgba(74,23,34,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#511520]"
              >
                पूजा सेवाएँ देखें

                <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#641c29]/20 bg-white/40 px-7 py-4 text-sm font-bold text-[#641c29] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#641c29]/40 hover:bg-white/70"
              >
                पूजा के लिए संपर्क करें
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-7 left-0 right-0 z-10">
          <div className="container flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#806f62]"
            >
              Ujjain · Vedic Tradition
            </span>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.28em] text-[#806f62] md:block"
            >
              पूजा · अनुष्ठान · परंपरा
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="puja-services"
        className="relative overflow-hidden bg-[#fbf8f2] py-24 md:py-32"
      >
        <div className="container relative z-10">
          {/* Section heading */}
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div
                data-section-label
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#8d6a32]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8d6a32]"
                >
                  पूजा एवं अनुष्ठान
                </span>
              </div>

              <h2
                data-section-title
                className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#4b1723] md:text-6xl"
              >
                श्रद्धा के साथ
                <span className="block text-[#8d672f]">
                  वैदिक परंपरा
                </span>
              </h2>
            </div>

            <div
              data-section-text
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-base leading-8 text-[#665b52] md:text-lg"
              >
                प्रत्येक पूजा एवं अनुष्ठान की अपनी विधि,
                सामग्री और आवश्यकता होती है। अपनी आवश्यकता
                के अनुसार सेवा चुनें और उपलब्धता की पुष्टि
                के लिए संपर्क करें।
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-[#8d6a32]"
              >
                <span>
                  {String(pujaServices.length).padStart(2, "0")} सेवाएँ
                </span>

                <span className="h-px w-16 bg-[#8d6a32]/30" />

                <span>
                  वैदिक विधि
                </span>
              </div>
            </div>
          </div>

          {/* Service grid */}
          <div className="relative">
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d6a32]/[0.07]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d6a32]/[0.04]"
            />

            <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pujaServices.map((service, index) => (
                <div
                  key={service.slug}
                  data-service-card
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-[#641c29]/10 bg-[#f5eee3] shadow-[0_15px_50px_rgba(72,38,25,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_75px_rgba(72,38,25,0.13)]"
                  >
                    {/* Gold top accent */}
                    <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-[#8d6a32] transition-transform duration-500 group-hover:scale-x-100" />

                    {/* Card number */}
                    <div className="pointer-events-none absolute right-5 top-5 z-20 font-serif text-4xl text-[#641c29]/10 transition-colors duration-500 group-hover:text-[#641c29]/20"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="p-6 md:p-7">
                      <ServiceCard
                        service={service}
                        href={`/puja/${service.slug}`}
                      />
                    </div>

                    {/* Bottom card bar */}
                    <div className="flex items-center justify-between border-t border-[#641c29]/[0.08] px-6 py-4 md:px-7"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7b6b5e]"
                      >
                        सेवा विवरण
                      </span>

                      <span className="text-lg text-[#641c29] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#4d1723] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#d5b273]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#d5b273]/10"
        />

        <div
          data-bottom-cta
          className="container relative z-10 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d5b273]"
          >
            व्यक्तिगत पूजा एवं अनुष्ठान
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#fff8ed] md:text-6xl"
          >
            अपनी आवश्यकता के अनुसार
            <span className="block text-[#d5b273]">
              पूजा चुनें
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#eadbc9]/75 md:text-lg"
          >
            सेवा की जानकारी प्राप्त करने और उपलब्धता की
            पुष्टि के लिए सीधे संपर्क करें।
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#f5ead9] px-8 py-4 text-sm font-bold text-[#581927] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              संपर्क करें

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/panchang-muhurat"
              className="inline-flex items-center gap-3 rounded-full border border-[#f4dfbd]/20 px-8 py-4 text-sm font-bold text-[#fff7ea] transition-all duration-300 hover:-translate-y-1 hover:border-[#f4dfbd]/50 hover:bg-white/5"
            >
              पंचांग एवं मुहूर्त
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}