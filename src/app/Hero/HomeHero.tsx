"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Star,
  Heart,
  Sparkles,
  Moon,
  MapPin,
  ShieldCheck,
  Crown,
  CalendarDays,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeHeroScene from "@/components/layout/ThreeHeroScene";
import { business } from "@/data/business";

gsap.registerPlugin(ScrollTrigger);

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.2-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5.01.16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  );
}

const services = [
  {
    icon: Sparkles,
    title: "वैदिक ज्योतिष",
    subtitle: "Vedic Astrology",
  },
  {
    icon: Moon,
    title: "पूजा अनुष्ठान",
    subtitle: "Puja Anushthan",
  },
  {
    icon: Heart,
    title: "दोष निवारण",
    subtitle: "Dosh Nivaran",
  },
  {
    icon: CalendarDays,
    title: "मुहूर्त मार्गदर्शन",
    subtitle: "Shubh Muhurat",
  },
];

export default function HomeHero() {
  const whatsappUrl = `https://wa.me/${business.phoneDigits}`;

  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const visualRef = useRef<HTMLDivElement | null>(null);

  const portraitRef = useRef<HTMLDivElement | null>(null);
  const portraitFloatRef = useRef<HTMLDivElement | null>(null);
  const portraitImageRef = useRef<HTMLDivElement | null>(null);

  const sceneRef = useRef<HTMLDivElement | null>(null);
  const glowOneRef = useRef<HTMLDivElement | null>(null);
  const glowTwoRef = useRef<HTMLDivElement | null>(null);

  const primaryCtaRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const visual = visualRef.current;

    const portrait = portraitRef.current;
    const portraitFloat = portraitFloatRef.current;
    const portraitImage = portraitImageRef.current;

    const scene = sceneRef.current;
    const glowOne = glowOneRef.current;
    const glowTwo = glowTwoRef.current;

    const primaryCta = primaryCtaRef.current;

    if (
      !section ||
      !content ||
      !visual ||
      !portrait ||
      !portraitFloat ||
      !portraitImage ||
      !scene ||
      !glowOne ||
      !glowTwo ||
      !primaryCta
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      const serviceItems = gsap.utils.toArray<HTMLElement>("[data-service]");
      const details = gsap.utils.toArray<HTMLElement>("[data-detail]");

      gsap.set(words, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(reveal, {
        y: 28,
        opacity: 0,
      });

      gsap.set(serviceItems, {
        y: 25,
        opacity: 0,
      });

      gsap.set(details, {
        y: 20,
        opacity: 0,
      });

      gsap.set(visual, {
        x: 60,
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(portrait, {
        opacity: 0,
        rotationY: -7,
      });

      gsap.set(portraitFloat, {
        y: 80,
      });

      gsap.set(scene, {
        opacity: 0,
        scale: 1.08,
      });

      gsap.set([glowOne, glowTwo], {
        opacity: 0,
      });

      if (reduceMotion) {
        gsap.set(
          [
            words,
            reveal,
            serviceItems,
            details,
            visual,
            portrait,
            portraitFloat,
            scene,
            glowOne,
            glowTwo,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .to(
          glowOne,
          {
            opacity: 1,
            duration: 1.5,
          },
          0,
        )
        .to(
          glowTwo,
          {
            opacity: 1,
            duration: 1.5,
          },
          0.2,
        )
        .to(
          scene,
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          0.1,
        )
        .to(
          visual,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.3,
          },
          0.15,
        )
        .to(
          portraitFloat,
          {
            y: 0,
            duration: 1.15,
          },
          0.35,
        )
        .to(
          portrait,
          {
            opacity: 1,
            rotationY: 0,
            duration: 0.95,
          },
          0.4,
        )
        .to(
          words,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
          },
          0.25,
        )
        .to(
          reveal,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
          },
          0.65,
        )
        .to(
          serviceItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
          },
          0.9,
        )
        .to(
          details,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          1.1,
        );

      gsap.to(glowOne, {
        x: 40,
        y: 25,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowTwo, {
        x: -35,
        y: -20,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(portraitFloat, {
        y: -7,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(content, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(visual, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(scene, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.fromTo(
        portraitImage,
        {
          scale: 1.04,
        },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        },
      );

      const rotateXTo = gsap.quickTo(portrait, "rotationX", {
        duration: 0.55,
        ease: "power3.out",
      });

      const rotateYTo = gsap.quickTo(portrait, "rotationY", {
        duration: 0.55,
        ease: "power3.out",
      });

      const imageXTo = gsap.quickTo(portraitImage, "x", {
        duration: 0.6,
        ease: "power3.out",
      });

      const imageYTo = gsap.quickTo(portraitImage, "y", {
        duration: 0.6,
        ease: "power3.out",
      });

      const handlePointerMove = (event: PointerEvent) => {
        const rect = portrait.getBoundingClientRect();

        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        rotateXTo(-py * 5);
        rotateYTo(px * 7);

        imageXTo(px * -10);
        imageYTo(py * -8);
      };

      const handlePointerLeave = () => {
        rotateXTo(0);
        rotateYTo(0);
        imageXTo(0);
        imageYTo(0);
      };

      portrait.addEventListener("pointermove", handlePointerMove);
      portrait.addEventListener("pointerleave", handlePointerLeave);

      const ctaXTo = gsap.quickTo(primaryCta, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const ctaYTo = gsap.quickTo(primaryCta, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleCtaMove = (event: PointerEvent) => {
        const rect = primaryCta.getBoundingClientRect();

        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        ctaXTo(px * 6);
        ctaYTo(py * 4);
      };

      const handleCtaLeave = () => {
        ctaXTo(0);
        ctaYTo(0);
      };

      primaryCta.addEventListener("pointermove", handleCtaMove);
      primaryCta.addEventListener("pointerleave", handleCtaLeave);

      return () => {
        portrait.removeEventListener("pointermove", handlePointerMove);
        portrait.removeEventListener("pointerleave", handlePointerLeave);

        primaryCta.removeEventListener("pointermove", handleCtaMove);
        primaryCta.removeEventListener("pointerleave", handleCtaLeave);
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="overflow-hidden bg-[#120b07] text-white"
    >
      <section
        aria-label="मुख्य परिचय"
        className="
          relative
          min-h-190
          overflow-hidden
          sm:min-h-200
          lg:min-h-205
          xl:min-h-212.5
        "
      >
        {/* =======================================================
            BACKGROUND
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#120b07]" />

          <div
            ref={glowOneRef}
            className="
              absolute
              left-[-20%]
              top-[-20%]
              h-175
              w-175
              rounded-full
              bg-[#7e2418]/25
              blur-[150px]
            "
          />

          <div
            ref={glowTwoRef}
            className="
              absolute
              bottom-[-20%]
              right-[-10%]
              h-175
              w-175
              rounded-full
              bg-[#c98e35]/10
              blur-[150px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="absolute left-[7%] top-0 hidden h-full w-px bg-white/5.5 lg:block" />

          <div className="absolute right-[7%] top-0 hidden h-full w-px bg-white/5.5 lg:block" />

          <div className="absolute left-[7%] right-[7%] top-20.5 h-px bg-white/5.5" />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-175
              w-175
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#8f3a1d]/4.5
              blur-[110px]
            "
          />
        </div>

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-190
            max-w-375
            items-center
            px-5
            py-14
            sm:min-h-200
            sm:px-8
            sm:py-16
            lg:min-h-205
            lg:px-12
            lg:py-14
            xl:min-h-212.5
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-10
              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-6
              xl:gap-12
            "
          >
            {/* ===================================================
                LEFT CONTENT
            ==================================================== */}

            <div
              ref={contentRef}
              className="relative z-30 max-w-175"
            >
              <div
                data-reveal
                className="mb-5 flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8aa58]/25 bg-[#d8aa58]/6">
                  <MapPin
                    size={14}
                    className="text-[#e0b35d]"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#cda45a]">
                    Ujjain · Madhya Pradesh
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    श्री महाकाल की पावन नगरी
                  </p>
                </div>
              </div>

              <div
                data-reveal
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#d8aa58]/50" />

                <span className="font-serif text-xs tracking-[0.16em] text-[#e2b665]">
                  ॥ ॐ नमः शिवाय ॥
                </span>
              </div>

              <h1
                className="
                  max-w-190
                  font-serif
                  text-[48px]
                  font-medium
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[62px]
                  lg:text-[70px]
                  xl:text-[84px]
                "
              >
                <span data-word className="inline-block">
                  परंपरा
                </span>

                <br />

                <span
                  data-word
                  className="inline-block text-[#e4b45d]"
                >
                  विश्वास
                </span>

                <br />

                <span data-word className="inline-block">
                  और वैदिक
                </span>

                <br />

                <span data-word className="inline-block">
                  मार्गदर्शन।
                </span>
              </h1>

              <p
                data-reveal
                className="
                  mt-6
                  max-w-147.5
                  text-[14px]
                  leading-6
                  text-white/55
                  sm:text-[16px]
                  sm:leading-7
                "
              >
                उज्जैन की पवित्र भूमि से पूजा, अनुष्ठान,
                ज्योतिष एवं दोष निवारण की सेवाएँ —
                श्रद्धा, विधि-विधान और व्यक्तिगत मार्गदर्शन
                के साथ।
              </p>

              <div
                className="
                  mt-7
                  grid
                  max-w-170
                  grid-cols-2
                  gap-2
                  sm:grid-cols-4
                "
              >
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      data-service
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/8
                        bg-white/2.5
                        p-3
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#d8a84f]/25
                        hover:bg-[#d8a84f]/5
                      "
                    >
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-[#d9a950]/20 bg-[#d9a950]/6">
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#dfb45f]"
                        />
                      </div>

                      <p className="text-[10px] font-medium text-white/85">
                        {service.title}
                      </p>

                      <p className="mt-1 text-[8px] text-white/30">
                        {service.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div
                data-reveal
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <Link
                  ref={primaryCtaRef}
                  href="/online-puja"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#e8bd66]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#1a0d05]
                    shadow-[0_18px_50px_rgba(230,184,91,.14)]
                    transition-all
                    duration-300
                    hover:bg-[#f4d184]
                  "
                >
                  <span>पूजा बुक करें</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/12
                    bg-white/[0.035]
                    px-6
                    py-3.5
                    text-sm
                    text-white/80
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#d8aa58]/40
                    hover:text-[#edc56f]
                  "
                >
                  संपर्क करें

                  <ArrowRight
                    size={15}
                    className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#43b85c]/20
                    bg-[#43b85c]/6
                    px-5
                    py-3.5
                    text-sm
                    text-[#a9e7b5]
                    transition-all
                    duration-300
                    hover:border-[#43b85c]/40
                    hover:bg-[#43b85c]/11
                  "
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>

              <div
                data-detail
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-5
                  border-t
                  border-white/8
                  pt-5
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9a74f]/20 bg-[#d9a74f]/6">
                    <ShieldCheck
                      size={15}
                      className="text-[#dfb45d]"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/80">
                      वैदिक विधि-विधान
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/35">
                      परंपरा के अनुसार सेवा
                    </p>
                  </div>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <div className="flex gap-0.5 text-[#eab95c]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={11}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[9px] text-white/35">
                    श्रद्धा • विश्वास • मार्गदर्शन
                  </p>
                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT VISUAL
            ==================================================== */}

            <div
              ref={visualRef}
              className="
                relative
                min-h-125
                sm:min-h-142.5
                lg:min-h-155
              "
              style={{
                perspective: "1800px",
              }}
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[8%]
                  rounded-[4rem]
                  bg-[#a33b1d]/10
                  blur-[100px]
                "
              />

              <div
                ref={sceneRef}
                className="absolute inset-0 z-10 overflow-hidden"
              >
                <div className="absolute inset-0">
                  <ThreeHeroScene />
                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_20%,rgba(18,11,7,.18)_55%,rgba(18,11,7,.82)_100%)]
                  "
                />
              </div>

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-40
                  w-[min(250px,100%)]
                  -translate-x-1/2
                  -translate-y-1/2
                  sm:w-77.5
                  lg:w-88.75
                  xl:w-97.5
                "
              >
                <div
                  ref={portraitRef}
                  className="relative w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div
                    ref={portraitFloatRef}
                    className="relative w-full"
                    style={{
                      willChange: "transform",
                    }}
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-82.5
                        w-57.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#d8a84f]/10
                        blur-[80px]
                        sm:h-100
                        sm:w-72.5
                      "
                    />

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[2.5rem]
                        border
                        border-[#e0b45f]/20
                        bg-[#1b0e08]/70
                        p-2
                        shadow-[0_45px_100px_rgba(0,0,0,.72)]
                        backdrop-blur-xl
                      "
                    >
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-2
                          z-30
                          rounded-[2.15rem]
                          border
                          border-[#d9aa58]/25
                        "
                      />

                      <div className="pointer-events-none absolute left-5 top-5 z-30 h-7 w-7 border-l border-t border-[#e0b45f]/40" />

                      <div className="pointer-events-none absolute right-5 top-5 z-30 h-7 w-7 border-r border-t border-[#e0b45f]/40" />

                      <div className="pointer-events-none absolute bottom-5 left-5 z-30 h-7 w-7 border-b border-l border-[#e0b45f]/40" />

                      <div className="pointer-events-none absolute bottom-5 right-5 z-30 h-7 w-7 border-b border-r border-[#e0b45f]/40" />

                      <div
                        ref={portraitImageRef}
                        className="
                          relative
                          aspect-4/5
                          overflow-hidden
                          rounded-[2.15rem]
                          bg-[#2b160d]
                        "
                        style={{
                          transform: "scale(1.04)",
                          willChange: "transform",
                        }}
                      >
                        <Image
                          src="/images/Rohit_shamr_ujjain.webp"
                          alt="पंडित रोहित शर्मा - उज्जैन वैदिक सेवा"
                          fill
                          priority
                          sizes="
                            (max-width: 640px) 250px,
                            (max-width: 1024px) 310px,
                            390px
                          "
                          className="object-cover object-top"
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-linear-to-t
                            from-[#100804]/90
                            via-transparent
                            to-[#3b170b]/10
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_50%_12%,rgba(240,190,91,.24),transparent_30%)]
                          "
                        />

                        <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-7 bg-[#e4b45d]/70" />

                            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#edc876]">
                              VEDIC GUIDANCE
                            </span>
                          </div>

                          <h2 className="font-serif text-lg leading-tight text-white sm:text-xl">
                            पूजा एवं
                            <br />
                            ज्योतिष मार्गदर्शन
                          </h2>

                          <div className="mt-2 flex items-center gap-2 text-[8px] text-white/45">
                            <span>उज्जैन</span>

                            <span className="text-[#d8a84f]">
                              •
                            </span>

                            <span>वैदिक परंपरा</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-[2%]
                  left-0
                  z-50
                  hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#1b0e08]/85
                  p-3.5
                  shadow-2xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d8a84f]/20 bg-[#d8a84f]/6">
                    <Crown
                      size={16}
                      className="text-[#e2b65e]"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-white/85">
                      सनातन परंपरा
                    </p>

                    <p className="mt-1 text-[9px] text-white/35">
                      श्रद्धा के साथ सेवा
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
                  absolute
                  right-0
                  top-[20%]
                  z-50
                  hidden
                  rounded-2xl
                  border
                  border-[#d8a84f]/15
                  bg-[#1b0e08]/90
                  p-3.5
                  shadow-2xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e6b85c] shadow-[0_0_12px_#e6b85c]" />

                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#dcb05a]">
                    Consultation
                  </span>
                </div>

                <p className="text-[13px] text-white/90">
                  व्यक्तिगत मार्गदर्शन
                </p>

                <p className="mt-1 text-[9px] text-white/35">
                  पूजा • ज्योतिष • मुहूर्त
                </p>
              </div>

              <div className="absolute left-[12%] top-[24%] z-30 h-2 w-2 rounded-full bg-[#e3b75f] shadow-[0_0_18px_rgba(227,183,95,.8)]" />

              <div className="absolute right-[13%] bottom-[22%] z-30 h-1.5 w-1.5 rounded-full bg-[#b95d35] shadow-[0_0_14px_rgba(185,93,53,.8)]" />

              <div className="absolute left-[18%] bottom-[31%] z-30 h-1 w-1 rounded-full bg-[#e3b75f]/80" />
            </div>
          </div>
        </div>

        {/* =========================================================
            COMPACT BOTTOM STRIP
        ========================================================== */}

        <div className="relative z-20 border-t border-white/[0.07]">
          <div
            className="
              mx-auto
              flex
              max-w-375
              items-center
              justify-between
              gap-5
              px-5
              py-4
              sm:px-8
              lg:px-12
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d8a84f]/20 bg-[#d8a84f]/5">
                <Sparkles
                  size={12}
                  className="text-[#dfb45d]"
                />
              </div>

              <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4a95a]">
                वैदिक मार्गदर्शन
              </p>
            </div>

            <div className="hidden items-center gap-4 text-[9px] text-white/30 sm:flex">
              <span>पूजा</span>
              <span className="text-[#d09c48]">•</span>
              <span>ज्योतिष</span>
              <span className="text-[#d09c48]">•</span>
              <span>दोष निवारण</span>
              <span className="text-[#d09c48]">•</span>
              <span>मुहूर्त</span>
            </div>

            <Link
              href="/puja-services"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                text-[#dcb05a]
                transition-colors
                hover:text-[#f0ca76]
              "
            >
              सेवाएँ देखें

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
