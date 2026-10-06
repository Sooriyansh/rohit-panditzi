
"use client";

import { MapPin, Navigation, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(".location-eyebrow");
      const title = section.querySelector(".location-title");
      const description = section.querySelector(".location-description");
      const card = section.querySelector(".location-card");
      const content = section.querySelector(".location-content");
      const map = section.querySelector(".location-map");
      const address = section.querySelector(".location-address");
      const marker = section.querySelector(".location-marker");
      const ornament = section.querySelector(".location-ornament");
      const glow = section.querySelector(".location-glow");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrow,
            title,
            description,
            card,
            content,
            map,
            address,
            marker,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }
        );

        return;
      }

      gsap.set(eyebrow, {
        opacity: 0,
        y: 18,
      });

      gsap.set(title, {
        opacity: 0,
        y: 30,
      });

      gsap.set(description, {
        opacity: 0,
        y: 20,
      });

      gsap.set(card, {
        opacity: 0,
        y: 40,
        scale: 0.97,
      });

      gsap.set(content, {
        opacity: 0,
        x: -35,
      });

      gsap.set(map, {
        opacity: 0,
        x: 35,
      });

      gsap.set(address, {
        opacity: 0,
        y: 20,
      });

      gsap.set(marker, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(ornament, {
        opacity: 0,
        rotation: -15,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          content,
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          map,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        )
        .to(
          address,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          marker,
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        )
        .to(
          ornament,
          {
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      /*
       * Ambient glow
       */
      gsap.to(glow, {
        x: 50,
        y: -25,
        scale: 1.15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * Floating ornament
       */
      gsap.to(ornament, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * Location marker pulse
       */
      gsap.to(marker, {
        scale: 1.08,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f4ec] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large ambient glow */}
        <div className="absolute -left-48 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#a03a29]/[0.035] blur-[100px]" />

        <div className="absolute -right-48 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#c59b4c]/[0.055] blur-[110px]" />

        {/* Fine vertical editorial line */}
        <div className="absolute left-[8%] top-0 hidden h-full w-px bg-[#d9cabb]/40 lg:block" />

        <div className="absolute right-[8%] top-0 hidden h-full w-px bg-[#d9cabb]/40 lg:block" />
      </div>

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <div>
            {/* Eyebrow */}
            <div className="location-eyebrow flex items-center gap-3">
              <span className="h-px w-10 bg-[#b98a3c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#9a3528]">
                पवित्र स्थान
              </span>

              <span className="h-1 w-1 rounded-full bg-[#b98a3c]" />
            </div>

            {/* Main title */}
            <h2 className="location-title mt-6 max-w-4xl font-serif text-[2.8rem] font-medium leading-[1.03] tracking-[-0.035em] text-[#2e100c] sm:text-5xl lg:text-[5.2rem]">
              उज्जैन में
              <br />
              <span className="text-[#9b3327]">आपका स्वागत है।</span>
            </h2>
          </div>

          <div>
            <p className="location-description max-w-md text-sm leading-8 text-[#725f56] sm:text-base">
              महाकाल की पावन नगरी उज्जैन में पूजा, अनुष्ठान एवं ज्योतिष
              मार्गदर्शन के लिए संपर्क करें।
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b8579]">
              <span className="h-px w-7 bg-[#c59b4c]" />
              Ujjain · Madhya Pradesh
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN EXPERIENCE CARD
        ====================================================== */}

        <div className="location-card relative mt-14 overflow-hidden rounded-[2.75rem] border border-[#dfd2c4] bg-[#2d110d] shadow-[0_40px_120px_rgba(62,32,22,0.16)] sm:mt-20 lg:mt-24">
          {/* Luxury top line */}
          <div className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#d4ad61] to-transparent" />

          {/* Inner border */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 z-30 rounded-[2.4rem] border border-white/[0.08]"
          />

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="location-content relative flex min-h-[620px] flex-col justify-between overflow-hidden p-8 text-white sm:p-12 lg:p-14 xl:p-16">
              {/* Background glow */}
              <div
                aria-hidden="true"
                className="location-glow pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#a33a2a]/20 blur-[100px]"
              />

              {/* Decorative gold circle */}
              <div
                aria-hidden="true"
                className="location-ornament pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-[#d4ad61]/10"
              >
                <div className="absolute inset-12 rounded-full border border-[#d4ad61]/10" />
                <div className="absolute inset-24 rounded-full border border-[#d4ad61]/10" />
              </div>

              {/* Small top label */}
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad61]/20 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                  <Sparkles
                    size={12}
                    strokeWidth={1.7}
                    className="text-[#d4ad61]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d4ad61]">
                    Sacred Ujjain
                  </span>
                </div>

                <h3 className="mt-8 max-w-lg font-serif text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[3rem]">
                  राम घाट मार्ग से
                  <br />
                  <span className="text-[#d4ad61]">
                    आध्यात्मिक जुड़ाव।
                  </span>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-8 text-white/55 sm:text-[15px]">
                  राम घाट मार्ग, उज्जैन से पूजा एवं ज्योतिष सेवाओं के लिए
                  संपर्क करें। आपकी आवश्यकता के अनुसार उचित सेवा और
                  मार्गदर्शन उपलब्ध कराया जाएगा।
                </p>
              </div>

              {/* Bottom information */}
              <div className="relative mt-14">
                <div className="location-address group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition-all duration-500 hover:border-[#d4ad61]/30 hover:bg-white/[0.07] sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4ad61]/20 bg-[#d4ad61]/10 text-[#d4ad61]">
                      <MapPin size={19} strokeWidth={1.7} />

                      <span className="absolute inset-0 rounded-2xl border border-[#d4ad61]/20 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                        मुख्य स्थान
                      </p>

                      <p className="mt-1.5 font-medium text-white">
                        उज्जैन, मध्य प्रदेश
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="ml-auto text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d4ad61]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  <Navigation
                    size={13}
                    strokeWidth={1.7}
                    className="text-[#d4ad61]"
                  />

                  <span>Ujjain, Madhya Pradesh</span>
                </div>
              </div>
            </div>

            {/* =================================================
                MAP EXPERIENCE
            ================================================== */}

            <div className="location-map relative min-h-[520px] overflow-hidden bg-[#e9e1d6] lg:min-h-[620px]">
              {/* Map image/iframe */}
              <iframe
                title="उज्जैन लोकेशन"
                src="https://www.google.com/maps?q=Ujjain%20Madhya%20Pradesh&output=embed"
                className="absolute inset-0 h-full min-h-[520px] w-full border-0 grayscale-[0.35] transition-all duration-[1200ms] hover:grayscale-0 lg:min-h-[620px]"
                loading="lazy"
              />

              {/* Cinematic map tint */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#2d110d]/20 via-transparent to-transparent mix-blend-multiply"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />

              {/* Map badge */}
              <div className="absolute left-6 top-6 z-20 flex items-center gap-3 rounded-full border border-white/60 bg-white/90 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#942f24] text-white">
                  <MapPin size={13} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#94766a]">
                    Location
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#3b1712]">
                    Ujjain
                  </p>
                </div>
              </div>

              {/* Floating location marker */}
              <div className="location-marker absolute bottom-7 right-7 z-20 hidden sm:block">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-[0_15px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <div className="absolute inset-2 rounded-full border border-[#a03a29]/15" />

                  <MapPin
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#942f24]"
                  />
                </div>

                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
              </div>

              {/* Bottom information strip */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-20">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">
                      Sacred City
                    </p>

                    <p className="mt-1 font-serif text-2xl text-white">
                      उज्जैन
                    </p>
                  </div>

                  <div className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4ad61]" />
                    Madhya Pradesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER DETAIL
        ====================================================== */}

        <div className="mt-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#b98a3c]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9c887d]">
              सेवा • श्रद्धा • मार्गदर्शन
            </span>
          </div>

          <div className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-[#b2a096] sm:block">
            Ujjain · India
          </div>
        </div>
      </div>
    </section>
  );
}

