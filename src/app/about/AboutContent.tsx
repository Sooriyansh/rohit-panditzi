"use client";

import Image from "next/image";
import { business } from "@/data/business";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Crown,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /* =====================================================
         INITIAL STATES
      ====================================================== */

      gsap.set(
        [
          ".about-eyebrow",
          ".about-title-line",
          ".about-description",
          ".about-actions",
          ".about-meta",
        ],
        {
          opacity: 0,
          y: reducedMotion ? 0 : 28,
        },
      );

      gsap.set(".hero-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".hero-mahakal", {
        opacity: 0,
        scale: reducedMotion ? 1 : 0.92,
        y: reducedMotion ? 0 : 35,
      });

      gsap.set(".hero-mahakal-image", {
        scale: reducedMotion ? 1 : 1.08,
      });

      gsap.set(".hero-orbit", {
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(
        [
          ".story-label",
          ".story-title",
          ".story-copy",
          ".story-detail",
          ".story-card",
        ],
        {
          opacity: 0,
          y: reducedMotion ? 0 : 35,
        },
      );

      gsap.set(".guru-image-wrap", {
        opacity: 0,
        y: reducedMotion ? 0 : 50,
        scale: reducedMotion ? 1 : 0.95,
      });

      gsap.set(".guru-image", {
        scale: reducedMotion ? 1 : 1.04,
      });

      gsap.set([".service-intro", ".service-card"], {
        opacity: 0,
        y: reducedMotion ? 0 : 35,
      });

      gsap.set(".location-block", {
        opacity: 0,
        y: reducedMotion ? 0 : 30,
      });

      /* =====================================================
         HERO INTRO
      ====================================================== */

      const hero = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      hero
        .to(".hero-mahakal", {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 1.2,
        })
        .to(
          ".hero-orbit",
          {
            opacity: 1,
            scale: 1,
            duration: reducedMotion ? 0.2 : 1,
          },
          "-=0.9",
        )
        .to(
          ".about-eyebrow",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
          },
          "-=0.8",
        )
        .to(
          ".about-title-line",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.8,
            stagger: 0.09,
          },
          "-=0.35",
        )
        .to(
          ".hero-line",
          {
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.8,
          },
          "-=0.45",
        )
        .to(
          ".about-description",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
          },
          "-=0.4",
        )
        .to(
          ".about-actions",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.55,
          },
          "-=0.3",
        )
        .to(
          ".about-meta",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.5,
          },
          "-=0.25",
        );

      if (reducedMotion) {
        gsap.set(
          [
            ".about-eyebrow",
            ".about-title-line",
            ".about-description",
            ".about-actions",
            ".about-meta",
            ".hero-mahakal",
            ".hero-orbit",
            ".story-label",
            ".story-title",
            ".story-copy",
            ".story-detail",
            ".story-card",
            ".guru-image-wrap",
            ".service-intro",
            ".service-card",
            ".location-block",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        );

        gsap.set(".hero-line", {
          scaleX: 1,
        });

        return;
      }

      /* =====================================================
         HERO ATMOSPHERE
      ====================================================== */

      gsap.to(".hero-glow-one", {
        x: 35,
        y: -25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -30,
        y: 30,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-mahakal-image", {
        scale: 1.14,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orbit-ring-one", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orbit-ring-two", {
        rotation: -360,
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-spark", {
        y: -14,
        opacity: 0.45,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });

      /* =====================================================
         HERO PARALLAX
      ====================================================== */

      gsap.to(".hero-copy", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(".hero-visual", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-mahakal-image", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      /* =====================================================
         STORY SECTION
      ====================================================== */

      ScrollTrigger.create({
        trigger: ".story-section",
        start: "top 78%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          tl.to(".guru-image-wrap", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
          })
            .to(
              ".story-label",
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
              },
              "-=0.6",
            )
            .to(
              ".story-title",
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
              },
              "-=0.35",
            )
            .to(
              ".story-copy",
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
              },
              "-=0.35",
            )
            .to(
              ".story-detail",
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
              },
              "-=0.35",
            )
            .to(
              ".story-card",
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
              },
              "-=0.3",
            );
        },
      });

      /* =====================================================
         GURUJI IMAGE MOTION
      ====================================================== */

      gsap.to(".guru-image", {
        y: -10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".guru-light", {
        x: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         SERVICES
      ====================================================== */

      ScrollTrigger.create({
        trigger: ".services-section",
        start: "top 78%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          tl.to(".service-intro", {
            opacity: 1,
            y: 0,
            duration: 0.7,
          }).to(
            ".service-card",
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
            },
            "-=0.35",
          );
        },
      });

      /* =====================================================
         LOCATION
      ====================================================== */

      ScrollTrigger.create({
        trigger: ".location-section",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(".location-block", {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          });
        },
      });

      /* =====================================================
         CARD TILT
      ====================================================== */

      const cards =
        page.querySelectorAll<HTMLElement>(".about-hover-card");

      cards.forEach((card) => {
        const inner =
          card.querySelector<HTMLElement>(
            ".about-hover-inner",
          );

        if (!inner) return;

        const handleMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          gsap.to(inner, {
            rotateX: -y * 3,
            rotateY: x * 3,
            duration: 0.45,
            ease: "power2.out",
            transformPerspective: 1200,
          });
        };

        const handleLeave = () => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        };

        card.addEventListener(
          "mousemove",
          handleMove,
        );

        card.addEventListener(
          "mouseleave",
          handleLeave,
        );

        return () => {
          card.removeEventListener(
            "mousemove",
            handleMove,
          );

          card.removeEventListener(
            "mouseleave",
            handleLeave,
          );
        };
      });

      /* =====================================================
         MAHAKAL VISUAL MOUSE PARALLAX
      ====================================================== */

      const heroVisual =
        page.querySelector<HTMLElement>(
          ".hero-visual",
        );

      const mahakal =
        page.querySelector<HTMLElement>(
          ".hero-mahakal",
        );

      if (heroVisual && mahakal) {
        const handleMouse = (
          event: MouseEvent,
        ) => {
          const rect =
            heroVisual.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          gsap.to(mahakal, {
            rotateY: x * 4,
            rotateX: -y * 3,
            duration: 0.8,
            ease: "power3.out",
            transformPerspective: 1500,
          });
        };

        const handleLeave = () => {
          gsap.to(mahakal, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        };

        heroVisual.addEventListener(
          "mousemove",
          handleMouse,
        );

        heroVisual.addEventListener(
          "mouseleave",
          handleLeave,
        );
      }

      ScrollTrigger.refresh();
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        relative
        overflow-hidden
        bg-[#f7f0e5]
        text-[#32130f]
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          about-hero
          relative
          min-h-[900px]
          overflow-hidden
          bg-[#160d09]
          text-white
          sm:min-h-[850px]
          lg:min-h-screen
        "
      >
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_72%_42%,rgba(156,79,34,.16),transparent_28%),radial-gradient(circle_at_12%_75%,rgba(178,126,57,.08),transparent_25%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
              [background-size:90px_90px]
            "
          />

          <div
            className="
              hero-glow-one
              absolute
              -left-40
              top-[-10rem]
              h-[32rem]
              w-[32rem]
              rounded-full
              bg-[#9c3d24]/20
              blur-[130px]
            "
          />

          <div
            className="
              hero-glow-two
              absolute
              bottom-[-10rem]
              right-[-10rem]
              h-[35rem]
              w-[35rem]
              rounded-full
              bg-[#c9953e]/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#caa05c]/40
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[900px] max-w-[1500px] items-center px-6 pb-20 pt-32 sm:px-10 lg:min-h-screen lg:px-16 xl:px-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-20">

            {/* LEFT */}

            <div className="hero-copy relative z-30 max-w-2xl">
              <div className="about-eyebrow flex items-center gap-3">
                <span className="h-px w-12 bg-[#d5a957]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.36em] text-[#e1b764]">
                  हमारे बारे में
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d5a957]" />
              </div>

              <h1 className="mt-8 font-serif text-[54px] font-medium leading-[0.94] tracking-[-0.05em] sm:text-[72px] lg:text-[82px] xl:text-[96px]">
                <span className="about-title-line inline-block">
                  परंपरा।
                </span>

                <br />

                <span className="about-title-line inline-block text-[#d9a954]">
                  श्रद्धा।
                </span>

                <br />

                <span className="about-title-line inline-block">
                  सेवा।
                </span>
              </h1>

              <div className="hero-line mt-9 h-px w-24 bg-[#d0a051] sm:w-40" />

              <p className="about-description mt-8 max-w-xl text-sm leading-8 text-white/50 sm:text-base">
                उज्जैन की पवित्र भूमि, महाकाल की नगरी और वैदिक
                परंपराओं से जुड़ी पूजा, अनुष्ठान एवं ज्योतिषीय
                सेवाओं की जानकारी एक विश्वसनीय स्थान पर।
              </p>

              <div className="about-actions mt-9 flex flex-wrap gap-3">
                <a
                  href="#guruji"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#dfb15c]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#1c0d07]
                    transition-all
                    duration-300
                    hover:bg-[#edc779]
                    hover:shadow-[0_12px_35px_rgba(223,177,92,.2)]
                  "
                >
                  हमारी कहानी

                  <ArrowDown
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>

                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-6
                    py-3.5
                    text-sm
                    text-white/75
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#d7a852]/35
                    hover:text-[#edc878]
                  "
                >
                  संपर्क करें

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="about-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/[0.08] pt-6">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={14}
                    className="text-[#d9aa57]"
                  />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Ujjain, Madhya Pradesh
                  </span>
                </div>

                <div className="h-4 w-px bg-white/10" />

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-[#d9aa57]"
                  />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Vedic Tradition
                  </span>
                </div>
              </div>
            </div>

            {/* MAHAKAL */}

            <div className="hero-visual relative mx-auto flex h-[560px] w-full max-w-[650px] items-center justify-center sm:h-[650px] lg:h-[720px]">

              {/* Outer glow */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c99442]/[0.045] blur-[80px] sm:h-[560px] sm:w-[560px]" />

              {/* Orbit */}

              <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 sm:h-[560px] sm:w-[560px]">
                <div className="hero-orbit-ring-one absolute inset-0 rounded-full border border-[#d5a653]/20" />

                <div className="hero-orbit-ring-two absolute inset-[38px] rounded-full border border-dashed border-[#d5a653]/10" />

                <div className="absolute inset-[90px] rounded-full border border-[#d5a653]/10" />
              </div>

              {/* Decorative points */}

              <span className="hero-spark absolute left-[12%] top-[26%] h-1.5 w-1.5 rounded-full bg-[#e2b35c] shadow-[0_0_18px_rgba(226,179,92,.8)]" />

              <span className="hero-spark absolute right-[15%] top-[30%] h-1 w-1 rounded-full bg-[#c77943]" />

              <span className="hero-spark absolute bottom-[24%] left-[19%] h-1 w-1 rounded-full bg-[#e2b35c]" />

              <span className="hero-spark absolute bottom-[19%] right-[18%] h-1.5 w-1.5 rounded-full bg-[#c77943]" />

              {/* Main Mahakal frame */}

              <div
                className="
                  hero-mahakal
                  relative
                  z-20
                  h-[500px]
                  w-[355px]
                  overflow-hidden
                  rounded-[2.75rem]
                  border
                  border-[#d6aa5a]/35
                  bg-[#25130d]
                  shadow-[0_50px_120px_rgba(0,0,0,.7)]
                  sm:h-[590px]
                  sm:w-[425px]
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gold outer frame */}

                <div className="pointer-events-none absolute inset-2 z-30 rounded-[2.35rem] border border-[#e3b967]/20" />

                <div className="pointer-events-none absolute inset-4 z-30 rounded-[2.1rem] border border-white/[0.08]" />

                {/* Image */}

                <div className="absolute inset-0 overflow-hidden rounded-[2.75rem]">
                  <Image
                    src="/images/mahakal-ujjain.webp"
                    alt="उज्जैन महाकालेश्वर मंदिर"
                    fill
                    priority
                    sizes="(max-width: 640px) 355px, 425px"
                    className="
                      hero-mahakal-image
                      object-cover
                      object-[center_18%]
                    "
                  />

                  {/* Cinematic overlay */}

                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,7,4,.16),transparent_30%,transparent_55%,rgba(12,6,3,.92)_100%)]" />

                  {/* Warm light */}

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,190,99,.14),transparent_34%)]" />

                  {/* Soft vignette */}

                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,.35)]" />
                </div>

                {/* Top sacred label */}

                <div className="absolute left-1/2 top-7 z-40 -translate-x-1/2">
                  <div className="rounded-full border border-[#e1b664]/25 bg-black/30 px-5 py-2.5 shadow-xl backdrop-blur-md">
                    <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.3em] text-[#f0cb83]">
                      श्री महाकालेश्वर
                    </span>
                  </div>
                </div>

                {/* Bottom content */}

                <div className="absolute bottom-0 left-0 right-0 z-40 px-7 pb-8 pt-24 text-center">
                  <div className="mx-auto mb-4 h-px w-12 bg-[#d6a652]" />

                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    महाकाल की नगरी
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/45">
                    UJJAIN · MADHYA PRADESH
                  </p>
                </div>
              </div>

              {/* Left floating badge */}

              <div
                className="
                  absolute
                  bottom-[10%]
                  left-0
                  z-40
                  hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#24130d]/90
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d5a653]/20 bg-[#d5a653]/[0.06]">
                    <Crown
                      size={16}
                      className="text-[#e0b35d]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-white/80">
                      पावन उज्जैन
                    </p>

                    <p className="mt-1 text-[9px] text-white/35">
                      महाकाल की भूमि
                    </p>
                  </div>
                </div>
              </div>

              {/* Right location badge */}

              <div
                className="
                  absolute
                  right-0
                  top-[20%]
                  z-40
                  hidden
                  rounded-full
                  border
                  border-[#d5a653]/20
                  bg-[#24130d]/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    size={13}
                    className="text-[#dcae5b]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Ujjain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation strip */}

        <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-20">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              महाकाल की नगरी
            </span>

            <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
              Scroll to explore
            </span>

            <ArrowDown
              size={13}
              className="text-[#c89b51]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY / GURUJI
      ====================================================== */}

      <section
        id="guruji"
        className="
          story-section
          relative
          overflow-hidden
          bg-[#f8f1e6]
          py-28
          sm:py-36
          lg:py-44
        "
      >
        <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 xl:gap-32">

            {/* GURUJI IMAGE */}

            <div className="guru-image-wrap">
              <div className="relative mx-auto max-w-[500px]">

                <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b99561]/25" />

                <div className="absolute -right-6 -top-6 h-28 w-28 border-r border-t border-[#b99561]/45" />

                <div className="absolute -bottom-6 -left-6 h-28 w-28 border-b border-l border-[#b99561]/45" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e9dfd0] shadow-[0_35px_80px_rgba(71,42,28,.15)]">
                  <Image
                    src="/images/Rohit_shamr_ujjain.webp"
                    alt="पंडित रोहित शर्मा जी"
                    fill
                    sizes="(max-width: 1024px) 500px, 500px"
                    className="guru-image object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#29140e]/70 via-transparent to-transparent" />

                  <div className="guru-light pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-white/[0.08] blur-3xl" />

                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-px w-8 bg-[#d5aa65]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#e5c58e]">
                        गुरुजी
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white sm:text-3xl">
                      रोहित शर्मा जी
                    </h3>

                    <p className="mt-2 text-[10px] text-white/45">
                      उज्जैन • वैदिक सेवा
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STORY COPY */}

            <div>
              <div className="story-label flex items-center gap-3">
                <span className="h-px w-12 bg-[#a97b43]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#8f2c25]">
                  हमारी कहानी
                </span>
              </div>

              <h2 className="story-title mt-7 max-w-3xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#32130f] sm:text-5xl lg:text-6xl">
                सेवा केवल एक
                <br />
                <span className="text-[#8f2c25]">
                  कार्य नहीं।
                </span>
              </h2>

              <div className="story-copy mt-8 max-w-2xl space-y-5 text-[15px] leading-8 text-[#6e5d52]">
                <p>
                  पूजा और वैदिक अनुष्ठान भारतीय परंपरा में केवल
                  धार्मिक प्रक्रिया नहीं हैं। इनके पीछे श्रद्धा,
                  संकल्प और सही विधि का महत्व होता है।
                </p>

                <p>
                  हमारा उद्देश्य उज्जैन की इन परंपराओं और सेवाओं
                  से जुड़ी जानकारी को सरल, स्पष्ट और विश्वसनीय
                  तरीके से लोगों तक पहुँचाना है।
                </p>
              </div>

              <div className="story-detail mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ded0bd] bg-[#fffaf2] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(76,45,29,.08)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1e7d8]">
                      <ShieldCheck
                        size={16}
                        className="text-[#8f2c25]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-[#a08059]">
                        Approach
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#4e3028]">
                        परंपरा के साथ मार्गदर्शन
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#ded0bd] bg-[#fffaf2] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(76,45,29,.08)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1e7d8]">
                      <MapPin
                        size={16}
                        className="text-[#8f2c25]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-[#a08059]">
                        Place
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#4e3028]">
                        उज्जैन, महाकाल की नगरी
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="story-card mt-8 border-l-2 border-[#b28a51] bg-[#f1e7d9] px-6 py-5">
                <p className="font-serif text-lg leading-8 text-[#55372e]">
                  “श्रद्धा के साथ सही विधि और सही मार्गदर्शन —
                  यही सेवा का मूल भाव है।”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="services-section relative overflow-hidden bg-[#1c0f0a] py-28 text-white sm:py-36 lg:py-44">
        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#a95d2e]/10 blur-[120px]" />

        <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">

          <div className="service-intro max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#d5a957]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.36em] text-[#e1b764]">
                हमारी सेवाएँ
              </span>
            </div>

            <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
              वैदिक परंपरा
              <br />
              <span className="text-[#d9a954]">
                और अनुष्ठान
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/50 sm:text-base">
              उज्जैन में महाकाल के दर्शन, भस्म आरती,
              कालसर्प दोष शांति, मंगल भात पूजा और अन्य
              सभी वैदिक अनुष्ठानों का प्रामाणिक मार्गदर्शन।
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "कालसर्प दोष शांति",
                desc: "पूर्ण वैदिक विधि से उज्जैन में कालसर्प शांति अनुष्ठान एवं विशेष पूजा।",
              },
              {
                title: "मंगल भात पूजा",
                desc: "मंगल दोष निवारण हेतु मंगलनाथ मंदिर में विशेष मंगल भात पूजा।",
              },
              {
                title: "ज्योतिषीय परामर्श",
                desc: "कुंडली विश्लेषण, नवग्रह शांति और व्यक्तिगत वैदिक ज्योतिषीय समाधान।",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="about-hover-card service-card group relative h-[320px] rounded-3xl bg-[#3b2115] p-px"
                style={{ perspective: "1000px" }}
              >
                <div className="about-hover-inner flex h-full flex-col justify-between rounded-[23px] bg-[#160d09] p-8 transition-colors duration-500 group-hover:bg-[#1d100b]">

                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d9a954]/15 bg-[#24130d]">
                      <Star
                        size={20}
                        className="text-[#d9a954]"
                      />
                    </div>

                    <h3 className="mt-6 font-serif text-xl text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9a954]">
                    <span>अधिक जानें</span>

                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION / CONTACT
      ====================================================== */}

      <section className="location-section bg-[#f8f1e6] py-28 sm:py-36">
        <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">

          <div className="mb-16 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#a97b43]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8f2c25]">
                संपर्क एवं जानकारी
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#32130f] sm:text-5xl">
              हमसे जुड़ें
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#766458]">
              पूजा, अनुष्ठान या ज्योतिषीय मार्गदर्शन से संबंधित
              जानकारी के लिए सीधे संपर्क करें।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* LOCATION */}

            <div
              className="
                location-block
                group
                rounded-[1.75rem]
                border
                border-[#e1d3bf]
                bg-[#fffaf2]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c6a16a]/50
                hover:shadow-[0_25px_60px_rgba(70,40,25,.09)]
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0e3d0] transition-transform duration-300 group-hover:scale-105">
                <MapPin
                  size={20}
                  className="text-[#8f2c25]"
                />
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a08059]">
                स्थान
              </p>

              <h3 className="mt-3 font-serif text-xl text-[#4e3028]">
                उज्जैन
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#6b584d]">
                चारधाम मंदिर, जयसिंहपुरा,
                <br />
                उज्जैन, मध्य प्रदेश
              </p>
            </div>

            {/* TIMING */}

            <div
              className="
                location-block
                group
                rounded-[1.75rem]
                border
                border-[#e1d3bf]
                bg-[#fffaf2]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c6a16a]/50
                hover:shadow-[0_25px_60px_rgba(70,40,25,.09)]
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0e3d0] transition-transform duration-300 group-hover:scale-105">
                <Clock3
                  size={20}
                  className="text-[#8f2c25]"
                />
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a08059]">
                संपर्क समय
              </p>

              <h3 className="mt-3 font-serif text-xl text-[#4e3028]">
                उपलब्धता
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#6b584d]">
                प्रातः 8:00 से रात्रि 9:00
                <br />
                सभी दिन उपलब्ध
              </p>
            </div>

            {/* CONTACT */}

            <a
              href="tel:+919329500668"
              className="
                location-block
                group
                block
                rounded-[1.75rem]
                border
                border-[#e1d3bf]
                bg-[#fffaf2]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#b74a40]/40
                hover:shadow-[0_25px_60px_rgba(70,40,25,.09)]
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e3d5] transition-transform duration-300 group-hover:scale-105">
                <Phone
                  size={20}
                  className="text-[#8f2c25]"
                />
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a08059]">
                संपर्क करें
              </p>

              <h3 className="mt-3 font-serif text-xl text-[#4e3028]">
                पंडित रोहित शर्मा जी
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-[#6b584d]">
                +91 9329500668
              </p>

              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8f2c25]">
                <span>अभी संपर्क करें</span>

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </a>

            {/* TRUST */}

            <div
              className="
                location-block
                group
                rounded-[1.75rem]
                border
                border-[#e1d3bf]
                bg-[#fffaf2]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c6a16a]/50
                hover:shadow-[0_25px_60px_rgba(70,40,25,.09)]
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0e3d0] transition-transform duration-300 group-hover:scale-105">
                <Check
                  size={20}
                  className="text-[#8f2c25]"
                />
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a08059]">
                विश्वसनीयता
              </p>

              <h3 className="mt-3 font-serif text-xl text-[#4e3028]">
                वैदिक मार्गदर्शन
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#6b584d]">
                वर्षों का अनुभव एवं
                <br />
                प्रमाणित वैदिक मार्गदर्शन
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}