
"use client";

import { useEffect, useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import { pujaServices } from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PujaServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const header = section.querySelector(".puja-header");
      const eyebrow = section.querySelector(".puja-eyebrow");
      const title = section.querySelector(".puja-title");
      const description = section.querySelector(".puja-description");
      const cards = gsap.utils.toArray<HTMLElement>(".puja-card");
      const ornament = section.querySelector(".puja-ornament");

      /* -----------------------------
         INITIAL STATE
      ----------------------------- */

      gsap.set(header, {
        opacity: 0,
        y: reducedMotion ? 0 : 30,
      });

      gsap.set(cards, {
        opacity: 0,
        y: reducedMotion ? 0 : 45,
      });

      gsap.set(ornament, {
        opacity: 0,
        scaleX: reducedMotion ? 1 : 0,
      });

      /* -----------------------------
         SCROLL REVEAL
      ----------------------------- */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      timeline
        .to(header, {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.25 : 0.75,
          ease: "power3.out",
        })
        .to(
          ornament,
          {
            opacity: 1,
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.25 : 0.7,
            stagger: reducedMotion ? 0 : 0.09,
            ease: "power3.out",
          },
          "-=0.35",
        );

      /* -----------------------------
         SUBTLE BACKGROUND MOTION
      ----------------------------- */

      if (!reducedMotion) {
        gsap.to(".puja-orb-left", {
          x: 30,
          y: -20,
          scale: 1.08,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".puja-orb-right", {
          x: -25,
          y: 20,
          scale: 1.06,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /* -----------------------------
           VERY LIGHT CARD PARALLAX
        ----------------------------- */

        const finePointer = window.matchMedia(
          "(pointer: fine)",
        ).matches;

        if (finePointer) {
          const cardWrappers =
            gsap.utils.toArray<HTMLElement>(".puja-card");

          const cleanups: (() => void)[] = [];

          cardWrappers.forEach((card) => {
            const moveX = gsap.quickTo(card, "x", {
              duration: 0.6,
              ease: "power3.out",
            });

            const moveY = gsap.quickTo(card, "y", {
              duration: 0.6,
              ease: "power3.out",
            });

            const handleMove = (event: MouseEvent) => {
              const rect = card.getBoundingClientRect();

              const x =
                (event.clientX - rect.left) / rect.width - 0.5;

              const y =
                (event.clientY - rect.top) / rect.height - 0.5;

              moveX(x * 5);
              moveY(y * 5);
            };

            const handleLeave = () => {
              moveX(0);
              moveY(0);
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);

            cleanups.push(() => {
              card.removeEventListener("mousemove", handleMove);
              card.removeEventListener("mouseleave", handleLeave);
            });
          });

          return () => {
            cleanups.forEach((cleanup) => cleanup());
          };
        }
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fffdf9] py-24 sm:py-28 lg:py-32"
    >
      {/* --------------------------------
          AMBIENT BACKGROUND
      -------------------------------- */}

      <div className="puja-orb-left pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#c9a66b]/[0.055] blur-[110px]" />

      <div className="puja-orb-right pointer-events-none absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[#8f2d21]/[0.035] blur-[120px]" />

      {/* Fine heritage texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#3c211b 0.65px, transparent 0.65px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* --------------------------------
            HEADER
        -------------------------------- */}

        <div className="puja-header relative">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#a03a29]" />

            <p className="puja-eyebrow text-[10px] font-bold uppercase tracking-[0.32em] text-[#a03a29] sm:text-xs">
              पूजा एवं अनुष्ठान
            </p>

            <span className="text-[9px] text-[#b58a4a]">✦</span>
          </div>

          <div className="mt-5 grid items-end gap-7 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="puja-title max-w-3xl font-serif text-[2.65rem] font-medium leading-[1.04] tracking-[-0.025em] text-[#32120e] sm:text-5xl lg:text-[4.1rem]">
                श्रद्धा के साथ
                <span className="block text-[#a03a29]">
                  वैदिक सेवाएँ
                </span>
              </h2>

              <p className="puja-description mt-6 max-w-2xl text-[15px] leading-8 text-[#715c53] sm:text-base">
                आपकी आवश्यकता के अनुसार विभिन्न पूजा और वैदिक
                अनुष्ठान सेवाएँ, परंपरागत विधि-विधान और श्रद्धा के
                साथ।
              </p>
            </div>

            {/* Right-side identity */}
            <div className="hidden items-center gap-4 lg:flex">
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a47a3c]">
                  Sacred Ujjain
                </p>

                <p className="mt-1 text-xs text-[#806c62]">
                  परंपरा • विधि • विश्वास
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d5b77d]/50 bg-[#fbf2df] shadow-[0_10px_30px_rgba(90,55,25,0.08)]">
                <span className="font-serif text-xl text-[#8f2d21]">
                  ॐ
                </span>
              </div>
            </div>
          </div>

          {/* Header ornament */}
          <div className="puja-ornament mt-9 flex origin-left items-center gap-3">
            <span className="h-px w-20 bg-gradient-to-r from-[#c9a66b]/70 to-[#c9a66b]/20" />
            <span className="text-[10px] text-[#b58a4a]">✦</span>
            <span className="h-px w-8 bg-[#c9a66b]/25" />
          </div>
        </div>

        {/* --------------------------------
            SERVICES
        -------------------------------- */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {pujaServices.slice(0, 6).map((service, index) => (
            <div
              key={service.slug}
              className="puja-card group relative"
            >
              {/* Number */}
              <span className="pointer-events-none absolute -left-1 -top-4 z-10 font-serif text-[3.5rem] leading-none text-[#8f2d21]/[0.045] transition-all duration-500 group-hover:text-[#8f2d21]/[0.09]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Gold corner */}
              <span className="pointer-events-none absolute -right-1 -top-1 z-10 h-8 w-8 border-r border-t border-[#c9a66b]/0 transition-all duration-500 group-hover:border-[#c9a66b]/50" />

              <div className="relative overflow-hidden rounded-[1.5rem]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] bg-gradient-to-br from-[#d5a85b]/0 via-transparent to-[#8f2d21]/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <ServiceCard
                  service={service}
                  href={`/puja/${service.slug}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* --------------------------------
            BOTTOM SIGNATURE
        -------------------------------- */}

        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a66b]/30 sm:w-32" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4b77e]/40 bg-[#fbf3e4]">
            <span className="font-serif text-sm text-[#9a3829]">
              ॐ
            </span>
          </div>

          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a66b]/30 sm:w-32" />
        </div>
      </div>
    </section>
  );
}
