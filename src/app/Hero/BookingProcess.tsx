"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: "01",
    title: "सेवा चुनें",
    text: "पूजा, अनुष्ठान या ज्योतिष सेवा चुनकर अपना अनुरोध भेजें।",
  },
  {
    step: "02",
    title: "विवरण साझा करें",
    text: "नाम, संपर्क, पसंदीदा तारीख और आवश्यक जानकारी दर्ज करें।",
  },
  {
    step: "03",
    title: "पुष्टि प्राप्त करें",
    text: "उपलब्धता और प्रक्रिया की पुष्टि के लिए टीम आपसे संपर्क करेगी।",
  },
];

export default function BookingProcess() {
  const sectionRef = useRef<HTMLElement | null>(null);

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

      const header = section.querySelector(".process-header");

      const cards = gsap.utils.toArray<HTMLElement>(
        ".process-card",
      );

      const numbers = gsap.utils.toArray<HTMLElement>(
        ".process-number",
      );

      const connectors = gsap.utils.toArray<HTMLElement>(
        ".process-connector",
      );

      const ornaments = gsap.utils.toArray<HTMLElement>(
        ".process-ornament",
      );

      /* --------------------------------
         INITIAL STATE
      -------------------------------- */

      gsap.set(header, {
        opacity: 0,
        y: reducedMotion ? 0 : 28,
      });

      gsap.set(cards, {
        opacity: 0,
        y: reducedMotion ? 0 : 45,
      });

      gsap.set(numbers, {
        opacity: 0,
        scale: reducedMotion ? 1 : 0.7,
        rotation: reducedMotion ? 0 : -8,
      });

      gsap.set(connectors, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(ornaments, {
        opacity: 0,
        scale: reducedMotion ? 1 : 0.7,
      });

      /* --------------------------------
         SCROLL REVEAL
      -------------------------------- */

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
          cards,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.25 : 0.7,
            stagger: reducedMotion ? 0 : 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          numbers,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: reducedMotion ? 0.2 : 0.7,
            stagger: reducedMotion ? 0 : 0.1,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        )
        .to(
          ornaments,
          {
            opacity: 1,
            scale: 1,
            duration: reducedMotion ? 0.2 : 0.5,
            stagger: reducedMotion ? 0 : 0.1,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          connectors,
          {
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.8,
            stagger: reducedMotion ? 0 : 0.12,
            ease: "power2.inOut",
          },
          "-=0.55",
        );

      /* --------------------------------
         AMBIENT MOTION
      -------------------------------- */

      if (!reducedMotion) {
        gsap.to(".process-orb-left", {
          x: 25,
          y: -18,
          scale: 1.08,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".process-orb-right", {
          x: -25,
          y: 18,
          scale: 1.06,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /* --------------------------------
           CONNECTOR SHIMMER
        -------------------------------- */

        gsap.to(".process-connector-shine", {
          xPercent: 220,
          duration: 2.5,
          repeat: -1,
          repeatDelay: 4,
          ease: "power2.inOut",
        });
      }

      /* --------------------------------
         SUBTLE MOUSE DEPTH
      -------------------------------- */

      const finePointer = window.matchMedia(
        "(pointer: fine)",
      ).matches;

      if (finePointer && !reducedMotion) {
        const cardNodes =
          gsap.utils.toArray<HTMLElement>(".process-card");

        const cleanups: (() => void)[] = [];

        cardNodes.forEach((card) => {
          const moveX = gsap.quickTo(card, "x", {
            duration: 0.65,
            ease: "power3.out",
          });

          const moveY = gsap.quickTo(card, "y", {
            duration: 0.65,
            ease: "power3.out",
          });

          const handleMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect();

            const x =
              (event.clientX - rect.left) / rect.width - 0.5;

            const y =
              (event.clientY - rect.top) / rect.height - 0.5;

            moveX(x * 4);
            moveY(y * 4);
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

        cleanupPointer = () => {
          cleanups.forEach((cleanup) => cleanup());
        };
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
      className="relative overflow-hidden bg-[#fffdf9] py-24 sm:py-28 lg:py-32"
    >
      {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

      <div className="process-orb-left pointer-events-none absolute -left-48 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c9a66b]/[0.045] blur-[120px]" />

      <div className="process-orb-right pointer-events-none absolute -right-48 bottom-10 h-[30rem] w-[30rem] rounded-full bg-[#8f2d21]/[0.03] blur-[130px]" />

      {/* Fine paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.017]">
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
            HEADER
        -------------------------------- */}

        <div className="process-header text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#a03a29]/50" />

            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a03a29] sm:text-xs">
              आसान प्रक्रिया
            </p>

            <span className="text-[9px] text-[#b58a4a]">✦</span>

            <span className="h-px w-10 bg-[#a03a29]/50" />
          </div>

          <h2 className="mt-5 font-serif text-[2.55rem] font-medium leading-[1.08] tracking-[-0.025em] text-[#32120e] sm:text-5xl lg:text-[4rem]">
            सेवा बुक करना
            <span className="block text-[#a03a29]">
              आसान है
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#79645b] sm:text-base">
            अपनी आवश्यकता के अनुसार सेवा चुनें और कुछ सरल चरणों
            में अपना अनुरोध हमारे साथ साझा करें।
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c9a66b]/40" />
            <span className="text-[10px] text-[#b08a53]">ॐ</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c9a66b]/40" />
          </div>
        </div>

        {/* --------------------------------
            PROCESS
        -------------------------------- */}

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[3.25rem] hidden h-px overflow-hidden lg:block">
            <div className="h-full w-full bg-[#ddcfbe]" />

            <div className="process-connector absolute inset-y-0 left-0 w-full overflow-hidden">
              <div className="process-connector-shine absolute -left-[25%] top-0 h-full w-[25%] bg-gradient-to-r from-transparent via-[#c69b51] to-transparent opacity-70" />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="process-card group relative"
              >
                {/* --------------------------------
                    NUMBER
                -------------------------------- */}

                <div className="relative z-20 mx-auto flex w-fit">
                  <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#d6b979]/55 bg-[#fffdf9] shadow-[0_12px_35px_rgba(76,43,24,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#b88942]/70 group-hover:shadow-[0_18px_45px_rgba(76,43,24,0.12)]">
                    {/* Inner ring */}
                    <div className="absolute inset-2 rounded-full border border-[#d9c29a]/35 transition-all duration-500 group-hover:inset-1.5 group-hover:border-[#c9a66b]/55" />

                    <span className="process-number font-serif text-xl font-medium text-[#8f2d21]">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* --------------------------------
                    CARD CONTENT
                -------------------------------- */}

                <div className="relative mt-7 overflow-hidden rounded-[1.75rem] border border-[#e4d8ca] bg-[#faf7f0] px-6 py-7 text-center shadow-[0_12px_35px_rgba(74,43,25,0.035)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#d7bf94]/70 group-hover:bg-[#fffaf2] group-hover:shadow-[0_22px_55px_rgba(74,43,25,0.08)] sm:px-8 sm:py-8">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#c9a66b]/10 opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100" />

                  {/* Decorative corner */}
                  <div className="absolute left-5 top-5 h-5 w-5 rounded-tl-lg border-l border-t border-[#c9a66b]/0 transition-all duration-500 group-hover:border-[#c9a66b]/45" />

                  <div className="absolute bottom-5 right-5 h-5 w-5 rounded-br-lg border-b border-r border-[#c9a66b]/0 transition-all duration-500 group-hover:border-[#c9a66b]/45" />

                  <div className="relative">
                    <div className="process-ornament mb-4 flex items-center justify-center gap-2">
                      <span className="h-px w-5 bg-[#c9a66b]/35 transition-all duration-500 group-hover:w-8" />

                      <span className="text-[8px] text-[#b08a53]">
                        ✦
                      </span>

                      <span className="h-px w-5 bg-[#c9a66b]/35 transition-all duration-500 group-hover:w-8" />
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#351510] transition-colors duration-300 group-hover:text-[#8f2d21] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#725d54]">
                      {item.text}
                    </p>

                    {/* Step indicator */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#b58a4a]" />
                      <span className="h-px w-8 bg-[#d9cbb9] transition-all duration-500 group-hover:w-12 group-hover:bg-[#b58a4a]" />
                      <span className="h-1 w-1 rounded-full bg-[#b58a4a]" />
                    </div>
                  </div>
                </div>

                {/* Mobile connector */}
                {index !== processSteps.length - 1 && (
                  <div className="mx-auto flex h-10 w-px items-center justify-center bg-gradient-to-b from-[#c9a66b]/50 to-transparent md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --------------------------------
            BOTTOM SIGNATURE
        -------------------------------- */}

        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a66b]/25 sm:w-32" />

          <span className="text-[10px] text-[#b08a53]/60">
            श्रद्धा • सेवा • विश्वास
          </span>

          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a66b]/25 sm:w-32" />
        </div>
      </div>
    </section>
  );
}