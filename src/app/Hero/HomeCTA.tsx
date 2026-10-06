"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const card = section.querySelector(".cta-card");
      const content = section.querySelector(".cta-content");
      const button = section.querySelector(".cta-button");
      const eyebrow = section.querySelector(".cta-eyebrow");
      const heading = section.querySelector(".cta-heading");
      const description = section.querySelector(".cta-description");
      const glow = section.querySelector(".cta-glow");
      const glowTwo = section.querySelector(".cta-glow-two");
      const ring = section.querySelector(".cta-ring");
      const sweep = section.querySelector(".cta-sweep");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * IMPORTANT:
       * Keep the CTA visible even if GSAP/ScrollTrigger fails.
       */
      gsap.set([card, content, button], {
        opacity: 1,
        clearProps: "transform",
      });

      if (prefersReducedMotion) {
        gsap.set([content, button], {
          opacity: 1,
          y: 0,
        });

        return;
      }

      /*
       * Initial animation state
       */
      gsap.set(card, {
        opacity: 0,
        y: 35,
        scale: 0.985,
      });

      gsap.set(content, {
        opacity: 0,
        y: 25,
      });

      gsap.set(button, {
        opacity: 0,
        y: 22,
        scale: 0.96,
      });

      gsap.set([eyebrow, heading, description], {
        opacity: 0,
        y: 18,
      });

      gsap.set(glow, {
        opacity: 0.35,
        scale: 0.8,
      });

      gsap.set(glowTwo, {
        opacity: 0.2,
        scale: 0.7,
      });

      /*
       * Ambient decorative animations
       */
      gsap.to(glow, {
        x: 70,
        y: -35,
        scale: 1.15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowTwo, {
        x: -55,
        y: 40,
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ring, {
        rotation: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(sweep, {
        xPercent: 120,
        duration: 4.5,
        repeat: -1,
        repeatDelay: 2,
        ease: "power2.inOut",
      });

      /*
       * Main entrance animation
       */
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          // Make absolutely sure the CTA button remains visible.
          gsap.set(button, {
            opacity: 1,
            clearProps: "transform",
          });
        },
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      })
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
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
          "-=0.3"
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.5)",
          },
          "-=0.2"
        );

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          tl.play();
        },
      });

      /*
       * Make sure ScrollTrigger calculates the section
       * correctly after the page has loaded.
       */
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /*
       * Premium button hover animation
       */
      const buttonElement = button as HTMLElement | null;

      if (buttonElement) {
        const buttonInner = buttonElement.querySelector(
          ".cta-button-inner"
        );

        const arrow = buttonElement.querySelector(".cta-arrow");

        const handleEnter = () => {
          gsap.to(buttonElement, {
            y: -4,
            scale: 1.025,
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(buttonInner, {
            x: 3,
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 5,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(buttonElement, {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(buttonInner, {
            x: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        buttonElement.addEventListener("mouseenter", handleEnter);
        buttonElement.addEventListener("mouseleave", handleLeave);

        return () => {
          trigger.kill();

          buttonElement.removeEventListener("mouseenter", handleEnter);
          buttonElement.removeEventListener("mouseleave", handleLeave);
        };
      }

      return () => {
        trigger.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="cta-card relative isolate overflow-hidden rounded-[2.5rem] border border-[#b84534]/40 bg-[#7f281f] px-7 py-10 text-white shadow-[0_35px_100px_rgba(76,20,14,0.25)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* =====================================================
              BACKGROUND ATMOSPHERE
          ====================================================== */}

          {/* Soft radial glow */}
          <div
            aria-hidden="true"
            className="cta-glow pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f0c978]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="cta-glow-two pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#f7dca0]/10 blur-3xl"
          />

          {/* Decorative rotating ring */}
          <div
            aria-hidden="true"
            className="cta-ring pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-[#f0c978]/10"
          >
            <div className="absolute inset-8 rounded-full border border-[#f0c978]/10" />
            <div className="absolute inset-20 rounded-full border border-[#f0c978]/10" />
          </div>

          {/* Top premium line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#f0c978] to-transparent opacity-80"
          />

          {/* Moving light sweep */}
          <div
            aria-hidden="true"
            className="cta-sweep pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          />

          {/* Small decorative dots */}
          <div
            aria-hidden="true"
            className="absolute right-12 top-10 hidden h-2 w-2 rounded-full bg-[#f0c978]/70 shadow-[0_0_20px_rgba(240,201,120,0.7)] sm:block"
          />

          <div
            aria-hidden="true"
            className="absolute right-20 top-16 hidden h-1 w-1 rounded-full bg-white/50 sm:block"
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="cta-content max-w-3xl">
              {/* Eyebrow */}
              <div className="cta-eyebrow inline-flex items-center gap-2 rounded-full border border-[#f0c978]/25 bg-black/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles
                  size={13}
                  strokeWidth={1.8}
                  className="text-[#f0c978]"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f0c978] sm:text-[11px]">
                  अगला कदम
                </p>
              </div>

              {/* Heading */}
              <h2 className="cta-heading mt-6 max-w-3xl font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[3.25rem]">
                पूजा या ज्योतिष सेवा के लिए{" "}
                <span className="text-[#f0c978]">आज ही संपर्क करें।</span>
              </h2>

              {/* Description */}
              <p className="cta-description mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                अपनी आवश्यकता साझा करें। उपलब्ध सेवा और आगे की प्रक्रिया के
                लिए आपसे संपर्क किया जाएगा।
              </p>

              {/* Trust micro-copy */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium tracking-wide text-white/50">
                <span>विश्वसनीय मार्गदर्शन</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#f0c978]/60"
                />

                <span>व्यक्तिगत परामर्श</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#f0c978]/60"
                />

                <span>उज्जैन</span>
              </div>
            </div>

            {/* =====================================================
                CTA BUTTON
            ====================================================== */}

            <div className="cta-button relative z-20 shrink-0 opacity-100">
              <Link
                href="/contact"
                aria-label="संपर्क करें"
                className="group relative inline-flex min-h-[60px] w-full items-center justify-center overflow-hidden rounded-full border border-white/60 bg-[#111111] px-8 text-sm font-semibold text-[#76251d] shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f0c978]/40 sm:w-auto"
              >
                {/* Button glow */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="cta-button-inner relative z-10 inline-flex items-center gap-3">
                  <span>संपर्क करें</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8f2d21] text-white transition-colors duration-300 group-hover:bg-[#702219]">
                    <ArrowRight
                      size={16}
                      strokeWidth={2.2}
                      className="cta-arrow"
                    />
                  </span>
                </span>
              </Link>

              {/* Button shadow glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 -bottom-3 -z-10 h-8 rounded-full bg-black/25 blur-xl"
              />
            </div>
          </div>

          {/* Bottom border detail */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f0c978]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

