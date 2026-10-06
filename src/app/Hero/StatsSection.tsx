
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "01",
    label: "वैदिक परंपरा",
  },
  {
    value: "24×7",
    label: "संपर्क सुविधा",
  },
  {
    value: "100%",
    label: "व्यक्तिगत मार्गदर्शन",
  },
  {
    value: "UJN",
    label: "उज्जैन से सेवा",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let removePointerListeners: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const finePointer = window.matchMedia("(pointer: fine)").matches;

      const items = gsap.utils.toArray<HTMLElement>(".stats-item");
      const values = gsap.utils.toArray<HTMLElement>(".stats-value");
      const lines = gsap.utils.toArray<HTMLElement>(".stats-line");
      const ornaments = gsap.utils.toArray<HTMLElement>(".stats-ornament");

      /* --------------------------------
         INITIAL STATES
      -------------------------------- */

      gsap.set(items, {
        opacity: 0,
        y: reducedMotion ? 0 : 24,
      });

      gsap.set(values, {
        opacity: 0,
        y: reducedMotion ? 0 : 12,
      });

      gsap.set(lines, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(ornaments, {
        opacity: 0,
        scale: reducedMotion ? 1 : 0.7,
      });

      /* --------------------------------
         SMOOTH SCROLL REVEAL
      -------------------------------- */

      const reveal = gsap.timeline({
        paused: true,
      });

      reveal
        .to(items, {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.25 : 0.75,
          stagger: reducedMotion ? 0 : 0.08,
          ease: "power3.out",
        })
        .to(
          ornaments,
          {
            opacity: 1,
            scale: 1,
            duration: reducedMotion ? 0.2 : 0.5,
            stagger: reducedMotion ? 0 : 0.07,
            ease: "power2.out",
          },
          "-=0.55",
        )
        .to(
          values,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          lines,
          {
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.6,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power2.out",
          },
          "-=0.4",
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top 88%",
        once: true,
        onEnter: () => reveal.play(),
      });

      /* --------------------------------
         VERY SUBTLE AMBIENT MOTION
      -------------------------------- */

      if (!reducedMotion) {
        gsap.to(".stats-ambient-left", {
          x: 25,
          y: -12,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".stats-ambient-right", {
          x: -20,
          y: 15,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* --------------------------------
         DESKTOP MOUSE PARALLAX
         VERY LIGHT — DOES NOT AFFECT SCROLL
      -------------------------------- */

      if (finePointer && !reducedMotion) {
        const cards = gsap.utils.toArray<HTMLElement>(".stats-card");

        const quickX = cards.map((card) =>
          gsap.quickTo(card, "x", {
            duration: 0.8,
            ease: "power3.out",
          }),
        );

        const quickY = cards.map((card) =>
          gsap.quickTo(card, "y", {
            duration: 0.8,
            ease: "power3.out",
          }),
        );

        const handlePointerMove = (event: PointerEvent) => {
          const rect = section.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const normalizedX = x / rect.width - 0.5;
          const normalizedY = y / rect.height - 0.5;

          cards.forEach((_, index) => {
            const depth = (index - 1.5) * 0.7;

            quickX[index](normalizedX * depth);
            quickY[index](normalizedY * depth);
          });
        };

        const resetPointer = () => {
          cards.forEach((_, index) => {
            quickX[index](0);
            quickY[index](0);
          });
        };

        section.addEventListener("pointermove", handlePointerMove);
        section.addEventListener("pointerleave", resetPointer);

        removePointerListeners = () => {
          section.removeEventListener("pointermove", handlePointerMove);
          section.removeEventListener("pointerleave", resetPointer);
        };
      }
    }, section);

    return () => {
      removePointerListeners?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#e8dccf] bg-[#faf7f0] py-14 sm:py-16 lg:py-20"
    >
      {/* --------------------------------
          BACKGROUND ATMOSPHERE
      -------------------------------- */}

      <div
        className="stats-ambient-left pointer-events-none absolute -left-40 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c9a66b]/[0.055] blur-[100px]"
      />

      <div
        className="stats-ambient-right pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-[#8f2d21]/[0.035] blur-[110px]"
      />

      {/* Fine paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#3d211a 0.6px, transparent 0.6px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* --------------------------------
          CONTENT
      -------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Eyebrow */}
        <div className="mb-9 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#c9a66b]/40 sm:w-12" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#9d743c]">
            हमारी पहचान
          </span>

          <span className="text-[9px] text-[#b28a50]">✦</span>

          <span className="h-px w-8 bg-[#c9a66b]/40 sm:w-12" />
        </div>

        {/* --------------------------------
            STATS GRID
        -------------------------------- */}

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stats-item relative px-4 py-4 sm:px-7 lg:px-10"
            >
              {/* Vertical divider */}
              {index !== stats.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-16 -translate-y-1/2 lg:block">
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-[#ddcfc0] to-transparent" />
                </div>
              )}

              {/* Mobile horizontal divider */}
              {index < 2 && (
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#dfd3c5] to-transparent lg:hidden" />
              )}

              {/* Card */}
              <div className="stats-card group relative mx-auto max-w-[250px] text-center">
                {/* Very subtle hover surface */}
                <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-white/0 transition-all duration-500 group-hover:bg-white/45 group-hover:shadow-[0_18px_45px_rgba(71,39,23,0.035)]" />

                <div className="relative">
                  {/* Ornament */}
                  <div className="stats-ornament mb-3 flex items-center justify-center gap-2">
                    <span className="h-px w-4 bg-[#c9a66b]/30 transition-all duration-500 group-hover:w-7 group-hover:bg-[#c9a66b]/55" />

                    <span className="text-[8px] text-[#b18a51] transition-transform duration-500 group-hover:rotate-90">
                      ✦
                    </span>

                    <span className="h-px w-4 bg-[#c9a66b]/30 transition-all duration-500 group-hover:w-7 group-hover:bg-[#c9a66b]/55" />
                  </div>

                  {/* Value */}
                  <div className="relative inline-block">
                    <p className="stats-value font-serif text-[2.15rem] font-medium leading-none tracking-[-0.03em] text-[#8f2d21] transition-all duration-500 group-hover:text-[#762319] sm:text-[2.5rem] lg:text-[2.75rem]">
                      {stat.value}
                    </p>

                    {/* Tiny glow */}
                    <span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a66b]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Label */}
                  <p className="mt-2.5 text-[12px] font-medium tracking-[0.02em] text-[#725d54] transition-colors duration-300 group-hover:text-[#4d332b] sm:text-sm">
                    {stat.label}
                  </p>

                  {/* Accent */}
                  <div className="mx-auto mt-4 h-px w-7 overflow-hidden bg-[#e1d6ca] transition-all duration-500 group-hover:w-12">
                    <div className="stats-line h-full w-full bg-[#b58a4a]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --------------------------------
            BOTTOM ORNAMENT
        -------------------------------- */}

        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a66b]/25 sm:w-24" />

          <span className="font-serif text-[11px] text-[#b08a53]/55">
            ॐ
          </span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a66b]/25 sm:w-24" />
        </div>
      </div>
    </section>
  );
}