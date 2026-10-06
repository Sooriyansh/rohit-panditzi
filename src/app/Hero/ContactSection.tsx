"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business } from "@/data/business";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const whatsappUrl = `https://wa.me/${business.phoneDigits}`;

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let cleanupPointer: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /* --------------------------------
         ELEMENTS
      -------------------------------- */

      const panel = section.querySelector(".contact-panel");
      const content = section.querySelector(".contact-content");
      const actions = gsap.utils.toArray<HTMLElement>(
        ".contact-action",
      );

      const om = section.querySelector(".contact-om");
      const ornament = section.querySelector(".contact-ornament");

      /* --------------------------------
         INITIAL STATE
      -------------------------------- */

      gsap.set(panel, {
        opacity: 0,
        y: reducedMotion ? 0 : 45,
        scale: reducedMotion ? 1 : 0.985,
      });

      gsap.set(content, {
        opacity: 0,
        y: reducedMotion ? 0 : 25,
      });

      gsap.set(actions, {
        opacity: 0,
        y: reducedMotion ? 0 : 18,
      });

      gsap.set(om, {
        opacity: 0,
        scale: reducedMotion ? 1 : 0.65,
        rotation: reducedMotion ? 0 : -15,
      });

      gsap.set(ornament, {
        scaleX: reducedMotion ? 1 : 0,
        transformOrigin: "center",
      });

      /* --------------------------------
         REVEAL
      -------------------------------- */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 84%",
          once: true,
        },
      });

      timeline
        .to(panel, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: reducedMotion ? 0.25 : 0.9,
          ease: "power3.out",
        })
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          om,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: reducedMotion ? 0.2 : 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        )
        .to(
          actions,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.55,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          ornament,
          {
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.7,
            ease: "power2.out",
          },
          "-=0.45",
        );

      /* --------------------------------
         AMBIENT MOTION
      -------------------------------- */

      if (!reducedMotion) {
        gsap.to(".contact-glow-left", {
          x: 35,
          y: -20,
          scale: 1.08,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".contact-glow-right", {
          x: -30,
          y: 20,
          scale: 1.06,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(om, {
          y: -8,
          rotation: 3,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /* --------------------------------
           MAGNETIC ACTION BUTTONS
        -------------------------------- */

        const finePointer = window.matchMedia(
          "(pointer: fine)",
        ).matches;

        if (finePointer) {
          const buttons =
            gsap.utils.toArray<HTMLElement>(".magnetic-button");

          const cleanups: (() => void)[] = [];

          buttons.forEach((button) => {
            const moveX = gsap.quickTo(button, "x", {
              duration: 0.35,
              ease: "power3.out",
            });

            const moveY = gsap.quickTo(button, "y", {
              duration: 0.35,
              ease: "power3.out",
            });

            const scale = gsap.quickTo(button, "scale", {
              duration: 0.35,
              ease: "power3.out",
            });

            const handleMove = (event: MouseEvent) => {
              const rect = button.getBoundingClientRect();

              const x =
                event.clientX -
                rect.left -
                rect.width / 2;

              const y =
                event.clientY -
                rect.top -
                rect.height / 2;

              moveX(x * 0.1);
              moveY(y * 0.12);
              scale(1.025);
            };

            const handleLeave = () => {
              moveX(0);
              moveY(0);
              scale(1);
            };

            button.addEventListener("mousemove", handleMove);
            button.addEventListener("mouseleave", handleLeave);

            cleanups.push(() => {
              button.removeEventListener(
                "mousemove",
                handleMove,
              );

              button.removeEventListener(
                "mouseleave",
                handleLeave,
              );
            });
          });

          cleanupPointer = () => {
            cleanups.forEach((cleanup) => cleanup());
          };
        }
      }
    }, section);

    return () => {
      cleanupPointer?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf7f0] py-24 sm:py-28 lg:py-32"
    >
      {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

      <div className="contact-glow-left pointer-events-none absolute -left-48 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#c9a66b]/[0.06] blur-[130px]" />

      <div className="contact-glow-right pointer-events-none absolute -right-48 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#8f2d21]/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#3d211a 0.65px, transparent 0.65px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* --------------------------------
            PREMIUM PANEL
        -------------------------------- */}

        <div className="contact-panel relative overflow-hidden rounded-[2.25rem] bg-[#24100d] shadow-[0_35px_100px_rgba(49,22,15,0.18)] sm:rounded-[2.75rem]">
          {/* Gold border */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] border border-[#d4ad67]/20 sm:rounded-[2.75rem]" />

          {/* Inner border */}
          <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-white/[0.045] sm:inset-4 sm:rounded-[2.25rem]" />

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#b88942]/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[25rem] w-[25rem] rounded-full bg-[#8f2d21]/20 blur-[120px]" />

          {/* Decorative rays */}
          <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#d6b36c]/[0.08] lg:block" />

          <div className="pointer-events-none absolute right-[-3%] top-1/2 hidden h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-[#d6b36c]/[0.06] lg:block" />

          <div className="relative grid gap-12 px-7 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-16 lg:py-16 xl:px-20">
            {/* --------------------------------
                CONTENT
            -------------------------------- */}

            <div className="contact-content relative max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d2a858]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#d6ad62] sm:text-xs">
                  संपर्क
                </p>

                <span className="text-[9px] text-[#c59b51]">
                  ✦
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 font-serif text-[2.7rem] font-medium leading-[1.04] tracking-[-0.025em] text-[#fffaf0] sm:text-5xl lg:text-[4.25rem]">
                सीधे
                <span className="block text-[#d8b36a]">
                  संपर्क करें
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                पूजा, ज्योतिष या अन्य सेवा के बारे में जानकारी के
                लिए फोन या WhatsApp पर सीधे संपर्क करें। हमारी टीम
                आपकी आवश्यकता के अनुसार उचित मार्गदर्शन प्रदान
                करेगी।
              </p>

              {/* Trust line */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-white/40">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d2a858]" />
                  व्यक्तिगत सहायता
                </span>

                <span className="hidden h-3 w-px bg-white/10 sm:block" />

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d2a858]" />
                  सीधा संपर्क
                </span>

                <span className="hidden h-3 w-px bg-white/10 sm:block" />

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d2a858]" />
                  उज्जैन से सेवा
                </span>
              </div>

              {/* Ornament */}
              <div className="contact-ornament mt-9 flex items-center gap-3">
                <span className="h-px w-24 bg-gradient-to-r from-[#d2a858]/70 to-transparent" />

                <span className="font-serif text-sm text-[#d2a858]">
                  ॐ
                </span>

                <span className="h-px w-8 bg-[#d2a858]/25" />
              </div>
            </div>

            {/* --------------------------------
                ACTION AREA
            -------------------------------- */}

            <div className="relative lg:min-w-[250px]">
              {/* OM */}
              <div className="contact-om absolute -right-2 -top-20 hidden h-20 w-20 items-center justify-center rounded-full border border-[#d3ad65]/30 bg-[#d3ad65]/[0.06] lg:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d3ad65]/25">
                  <span className="font-serif text-2xl text-[#d7b36a]">
                    ॐ
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                {/* Phone */}
                <a
                  href={`tel:${business.phoneDigits}`}
                  className="contact-action magnetic-button group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d2a858] px-7 font-semibold text-[#26110d] shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#e0bd78] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                    <Phone
                      size={15}
                      strokeWidth={2}
                    />
                  </span>

                  <span>फोन करें</span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action magnetic-button group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.055] px-7 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.07]">
                    <MessageCircle
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  <span>WhatsApp करें</span>

                  <ArrowUpRight
                    size={16}
                    className="text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* Contact page */}
                <Link
                  href="/contact"
                  className="contact-action magnetic-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-white/50 transition-all duration-300 hover:text-[#d8b36a]"
                >
                  Contact Page

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Availability */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/35 lg:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d2a858]/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d2a858]" />
                </span>

                संपर्क के लिए अनुरोध भेजें
              </div>
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a66b]/25 sm:w-28" />

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#a47a3c]/55">
            Sacred Ujjain
          </span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a66b]/25 sm:w-28" />
        </div>
      </div>
    </section>
  );
}