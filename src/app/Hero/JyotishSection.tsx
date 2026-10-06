
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { jyotishServices } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const jyotishHighlights = [
  "कुंडली विश्लेषण",
  "विवाह कुंडली मिलान",
  "जन्म कुंडली",
  "ग्रह-दोष विश्लेषण",
  "ज्योतिष परामर्श",
];

export default function JyotishSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;
    const orbit = orbitRef.current;
    const core = coreRef.current;
    const cta = ctaRef.current;
    const glow = glowRef.current;

    if (!section || !visual || !orbit || !core || !cta) return;

    const ctx = gsap.context(() => {
      /* -------------------------------------------------------
         INITIAL STATES
      ------------------------------------------------------- */

      gsap.set(".jyotish-reveal", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".jyotish-card", {
        opacity: 0,
        y: 35,
        scale: 0.96,
      });

      gsap.set(".jyotish-special", {
        opacity: 0,
        y: 30,
      });

      gsap.set(visual, {
        opacity: 0,
        scale: 0.85,
        rotate: -8,
      });

      /* -------------------------------------------------------
         SCROLL REVEAL
      ------------------------------------------------------- */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .to(visual, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.25,
          ease: "power4.out",
        })
        .to(
          ".jyotish-reveal",
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.75"
        )
        .to(
          ".jyotish-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ".jyotish-special",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        );

      /* -------------------------------------------------------
         ORBIT ROTATION
      ------------------------------------------------------- */

      gsap.to(orbit, {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      /* -------------------------------------------------------
         CORE BREATHING
      ------------------------------------------------------- */

      gsap.to(core, {
        scale: 1.06,
        boxShadow:
          "0 0 80px rgba(208,154,62,0.25), 0 0 150px rgba(179,58,37,0.12)",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* -------------------------------------------------------
         BACKGROUND GLOW
      ------------------------------------------------------- */

      if (glow) {
        gsap.to(glow, {
          x: -80,
          y: 50,
          scale: 1.15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* -------------------------------------------------------
         MOUSE PARALLAX
      ------------------------------------------------------- */

      const mediaQuery = window.matchMedia("(pointer: fine)");

      if (mediaQuery.matches) {
        const visualX = gsap.quickTo(visual, "x", {
          duration: 0.7,
          ease: "power3.out",
        });

        const visualY = gsap.quickTo(visual, "y", {
          duration: 0.7,
          ease: "power3.out",
        });

        const coreX = gsap.quickTo(core, "x", {
          duration: 0.5,
          ease: "power3.out",
        });

        const coreY = gsap.quickTo(core, "y", {
          duration: 0.5,
          ease: "power3.out",
        });

        const handleMouseMove = (event: MouseEvent) => {
          const rect = section.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const percentX = x / rect.width - 0.5;
          const percentY = y / rect.height - 0.5;

          visualX(percentX * 22);
          visualY(percentY * 22);

          coreX(percentX * -18);
          coreY(percentY * -18);
        };

        const handleMouseLeave = () => {
          visualX(0);
          visualY(0);
          coreX(0);
          coreY(0);
        };

        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseleave", handleMouseLeave);

        /* -------------------------------------------------------
           MAGNETIC CTA
        ------------------------------------------------------- */

        const buttonX = gsap.quickTo(cta, "x", {
          duration: 0.35,
          ease: "power3.out",
        });

        const buttonY = gsap.quickTo(cta, "y", {
          duration: 0.35,
          ease: "power3.out",
        });

        const handleButtonMove = (event: MouseEvent) => {
          const rect = cta.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          buttonX(x * 0.18);
          buttonY(y * 0.25);
        };

        const handleButtonLeave = () => {
          buttonX(0);
          buttonY(0);
        };

        cta.addEventListener("mousemove", handleButtonMove);
        cta.addEventListener("mouseleave", handleButtonLeave);

        return () => {
          section.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          section.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );

          cta.removeEventListener(
            "mousemove",
            handleButtonMove
          );

          cta.removeEventListener(
            "mouseleave",
            handleButtonLeave
          );
        };
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#150706] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* -------------------------------------------------------
          BACKGROUND
      ------------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0">
        {/* Radial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(179,58,37,0.13),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(208,154,62,0.06),transparent_30%)]" />

        {/* Animated glow */}
        <div
          ref={glowRef}
          className="absolute right-[-15%] top-[-25%] h-[650px] w-[650px] rounded-full bg-[#b33a25]/15 blur-[130px]"
        />

        {/* Stars */}
        <div className="absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-[#d5a34d]/60" />
        <div className="absolute left-[18%] top-[62%] h-1.5 w-1.5 rounded-full bg-white/20" />
        <div className="absolute right-[12%] top-[30%] h-1 w-1 rounded-full bg-[#d5a34d]/50" />
        <div className="absolute right-[24%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* -------------------------------------------------------
              LEFT CONTENT
          ------------------------------------------------------- */}

          <div>
            {/* Eyebrow */}
            <div className="jyotish-reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[#d5a34d]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a34d]">
                ज्योतिष परामर्श
              </p>
            </div>

            {/* Heading */}
            <h2 className="jyotish-reveal mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              आपकी कुंडली,
              <span className="mt-2 block text-[#d5a34d]">
                आपका मार्गदर्शन
              </span>
            </h2>

            {/* Divider */}
            <div className="jyotish-reveal mt-7 flex items-center gap-3">
              <span className="h-px w-16 bg-[#d5a34d]/70" />
              <span className="text-xs text-[#d5a34d]">
                ✦
              </span>
              <span className="h-px w-7 bg-[#d5a34d]/30" />
            </div>

            {/* Description */}
            <p className="jyotish-reveal mt-7 max-w-lg text-[15px] leading-8 text-white/55 sm:text-base">
              जन्म विवरण और कुंडली के आधार पर पारंपरिक ज्योतिषीय
              विश्लेषण एवं परामर्श। आपकी जीवन परिस्थितियों को
              समझकर स्पष्ट और व्यक्तिगत मार्गदर्शन प्रदान किया जाता है।
            </p>

            {/* CTA */}
            <div className="jyotish-reveal mt-9">
              <Link
                ref={ctaRef}
                href="/dosh-analyzer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d09a3e] px-7 py-3.5 font-semibold text-[#24100d] shadow-[0_12px_40px_rgba(208,154,62,0.2)] will-change-transform transition-colors duration-300 hover:bg-[#e1b45d] hover:shadow-[0_18px_50px_rgba(208,154,62,0.32)]"
              >
                ज्योतिष सेवा देखें

                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>

            {/* Trust line */}
            <div className="jyotish-reveal mt-8 flex items-center gap-3 text-xs text-white/35">
              <span className="h-px w-8 bg-white/15" />
              <span>परंपरा • अनुभव • मार्गदर्शन</span>
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT EXPERIENCE
          ------------------------------------------------------- */}

          <div className="relative min-h-[520px] lg:min-h-[600px]">
            {/* Astrology visual */}
            <div
              ref={visualRef}
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]"
            >
              {/* Outer orbit */}
              <div
                ref={orbitRef}
                className="absolute inset-0 rounded-full border border-[#d5a34d]/10"
              >
                {/* Orbit dots */}
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d5a34d] shadow-[0_0_20px_rgba(213,163,77,0.8)]" />

                <span className="absolute bottom-[14%] left-[10%] h-2 w-2 rounded-full bg-[#b33a25] shadow-[0_0_18px_rgba(179,58,37,0.8)]" />

                <span className="absolute right-[8%] top-[28%] h-2 w-2 rounded-full bg-[#d5a34d]/70" />
              </div>

              {/* Second orbit */}
              <div className="absolute inset-[12%] rounded-full border border-[#d5a34d]/10 [transform:rotate(35deg)]">
                <span className="absolute right-[5%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#d5a34d]/80 shadow-[0_0_15px_rgba(213,163,77,0.6)]" />
              </div>

              {/* Third orbit */}
              <div className="absolute inset-[25%] rounded-full border border-dashed border-white/8 [transform:rotate(-25deg)]" />

              {/* Core */}
              <div
                ref={coreRef}
                className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d5a34d]/25 bg-[radial-gradient(circle,rgba(208,154,62,0.16),rgba(74,20,14,0.35)_55%,transparent_70%)] shadow-[0_0_70px_rgba(179,58,37,0.12)] sm:h-52 sm:w-52"
              >
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#d5a34d]/20 bg-[#1d0b08]/80 backdrop-blur-md sm:h-36 sm:w-36">
                  <span className="font-serif text-5xl text-[#d5a34d]">
                    ॐ
                  </span>

                  <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Jyotish
                  </span>
                </div>
              </div>

              {/* Floating zodiac symbols */}
              <div className="absolute left-[6%] top-[28%] text-xl text-[#d5a34d]/30">
                ♈
              </div>

              <div className="absolute right-[9%] top-[15%] text-xl text-[#d5a34d]/30">
                ♌
              </div>

              <div className="absolute bottom-[19%] right-[15%] text-xl text-[#d5a34d]/30">
                ♓
              </div>

              <div className="absolute bottom-[12%] left-[24%] text-xl text-[#d5a34d]/25">
                ♐
              </div>

              {/* Decorative cross lines */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d5a34d]/10 to-transparent" />

              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d5a34d]/10 to-transparent" />
            </div>

            {/* Service cards */}
            <div className="relative z-10 grid gap-3 sm:grid-cols-2">
              {jyotishHighlights.map((item, index) => (
                <div
                  key={item}
                  className="jyotish-card group rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#d5a34d]/30 hover:bg-white/[0.075] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d09a3e]/30 bg-[#d09a3e]/5 text-xs font-semibold text-[#d09a3e] transition-all duration-300 group-hover:border-[#d09a3e]/70 group-hover:bg-[#d09a3e]/10">
                      0{index + 1}
                    </span>

                    <span className="font-medium text-white/85">
                      {item}
                    </span>
                  </div>
                </div>
              ))}

              {jyotishServices.slice(0, 1).map((service) => (
                <div
                  key={service.slug}
                  className="jyotish-special rounded-2xl border border-[#d09a3e]/30 bg-gradient-to-br from-[#d09a3e]/12 to-[#8f2d21]/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:col-span-2"
                >
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2bd77]">
                        विशेष सेवा
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        {service.title}
                      </p>
                    </div>

                    <span className="hidden text-2xl text-[#d09a3e]/50 sm:block">
                      ✦
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d5a34d]/20 to-transparent" />
    </section>
  );
}

