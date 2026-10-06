"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const introHighlights = [
  {
    number: "01",
    title: "परंपरा",
    text: "सनातन परंपराओं से जुड़ी सेवा",
  },
  {
    number: "02",
    title: "विधि-विधान",
    text: "परंपरागत वैदिक प्रक्रिया के साथ",
  },
  {
    number: "03",
    title: "विश्वसनीय सेवा",
    text: "श्रद्धा और व्यक्तिगत मार्गदर्शन",
  },
];

export default function TempleIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageSceneRef = useRef<HTMLDivElement | null>(null);
  const imageCardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const imageRevealRef = useRef<HTMLDivElement | null>(null);
  const imageGlowRef = useRef<HTMLDivElement | null>(null);

  const omRef = useRef<HTMLDivElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const orbitInnerRef = useRef<HTMLDivElement | null>(null);

  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const shineRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const backgroundGlowRef = useRef<HTMLDivElement | null>(null);
  const backgroundGlowTwoRef = useRef<HTMLDivElement | null>(null);

  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageScene = imageSceneRef.current;
    const imageCard = imageCardRef.current;
    const image = imageRef.current;

    const imageReveal = imageRevealRef.current;
    const imageGlow = imageGlowRef.current;

    const om = omRef.current;
    const orbit = orbitRef.current;
    const orbitInner = orbitInnerRef.current;

    const cursorGlow = cursorGlowRef.current;
    const shine = shineRef.current;

    const title = titleRef.current;
    const eyebrow = eyebrowRef.current;
    const description = descriptionRef.current;

    const cta = ctaRef.current;

    const backgroundGlow = backgroundGlowRef.current;
    const backgroundGlowTwo = backgroundGlowTwoRef.current;

    const progress = progressRef.current;

    if (
      !section ||
      !imageScene ||
      !imageCard ||
      !image ||
      !imageReveal ||
      !imageGlow ||
      !om ||
      !orbit ||
      !orbitInner ||
      !cursorGlow ||
      !shine ||
      !title ||
      !eyebrow ||
      !description ||
      !cta ||
      !backgroundGlow ||
      !backgroundGlowTwo ||
      !progress
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const finePointer = window.matchMedia(
        "(pointer: fine)",
      ).matches;

      /*
      ==========================================================
      INITIAL STATES
      ==========================================================
      */

      gsap.set(imageScene, {
        opacity: 0,
        y: reducedMotion ? 0 : 100,
        scaleX: reducedMotion ? 1 : 0.92,
        scaleY: reducedMotion ? 1 : 0.92,
      });

      gsap.set(imageReveal, {
        clipPath: reducedMotion
          ? "inset(0% 0% 0% 0%)"
          : "inset(100% 0% 0% 0%)",
      });

      gsap.set(imageCard, {
        rotateX: reducedMotion ? 0 : 8,
        rotateY: reducedMotion ? 0 : -6,
      });

      gsap.set(image, {
        scaleX: reducedMotion ? 1 : 1.18,
        scaleY: reducedMotion ? 1 : 1.18,
        yPercent: reducedMotion ? 0 : 8,
      });

      gsap.set(eyebrow, {
        opacity: 0,
        y: reducedMotion ? 0 : 25,
      });

      gsap.set(".temple-title-word", {
        opacity: 0,
        y: reducedMotion ? 0 : 90,
        rotateX: reducedMotion ? 0 : -35,
      });

      gsap.set(description, {
        opacity: 0,
        y: reducedMotion ? 0 : 30,
      });

      gsap.set(".temple-highlight", {
        opacity: 0,
        y: reducedMotion ? 0 : 35,
        scaleX: reducedMotion ? 1 : 0.96,
        scaleY: reducedMotion ? 1 : 0.96,
      });

      gsap.set(".temple-cta", {
        opacity: 0,
        y: reducedMotion ? 0 : 25,
      });

      gsap.set(om, {
        opacity: 0,
        scaleX: reducedMotion ? 1 : 0.3,
        scaleY: reducedMotion ? 1 : 0.3,
        rotation: reducedMotion ? 0 : -45,
      });

      gsap.set(orbit, {
        opacity: 0,
        scaleX: reducedMotion ? 1 : 0.5,
        scaleY: reducedMotion ? 1 : 0.5,
      });

      gsap.set(orbitInner, {
        opacity: 0,
        scaleX: reducedMotion ? 1 : 0.4,
        scaleY: reducedMotion ? 1 : 0.4,
      });

      gsap.set(".temple-particle", {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
      });

      gsap.set(".temple-number", {
        opacity: 0,
        x: reducedMotion ? 0 : -15,
      });

      /*
      ==========================================================
      MAIN REVEAL
      ==========================================================
      */

      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      reveal
        .to(imageScene, {
          opacity: 1,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: reducedMotion ? 0.2 : 1.3,
          ease: "power4.out",
        })
        .to(
          imageReveal,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: reducedMotion ? 0.2 : 1.35,
            ease: "power4.inOut",
          },
          "-=1.05",
        )
        .to(
          image,
          {
            scaleX: 1,
            scaleY: 1,
            yPercent: 0,
            duration: reducedMotion ? 0.2 : 1.5,
            ease: "power3.out",
          },
          "-=1.25",
        )
        .to(
          orbit,
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: reducedMotion ? 0.2 : 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.95",
        )
        .to(
          orbitInner,
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: reducedMotion ? 0.2 : 0.7,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          om,
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            duration: reducedMotion ? 0.2 : 0.9,
            ease: "back.out(1.7)",
          },
          "-=0.65",
        )
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
            ease: "power3.out",
          },
          "-=0.75",
        )
        .to(
          ".temple-title-word",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: reducedMotion ? 0.2 : 0.8,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          ".temple-number",
          {
            opacity: 1,
            x: 0,
            duration: reducedMotion ? 0.2 : 0.5,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          ".temple-highlight",
          {
            opacity: 1,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: reducedMotion ? 0.2 : 0.65,
            stagger: reducedMotion ? 0 : 0.1,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          ".temple-cta",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.6,
            stagger: reducedMotion ? 0 : 0.08,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          ".temple-particle",
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: reducedMotion ? 0.2 : 0.5,
            stagger: reducedMotion ? 0 : 0.04,
            ease: "back.out(2)",
          },
          "-=0.6",
        );

      /*
      ==========================================================
      SCROLL PARALLAX
      ==========================================================
      */

      if (!reducedMotion) {
        gsap.to(image, {
          yPercent: -8,
          scaleX: 1.08,
          scaleY: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3,
          },
        });

        gsap.to(imageScene, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".temple-content", {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        gsap.to(".temple-background-pattern", {
          yPercent: 18,
          rotation: 4,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        gsap.to(orbit, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
          },
        });

        gsap.to(orbitInner, {
          rotation: -360,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          },
        });

        gsap.to(progress, {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      /*
      ==========================================================
      AMBIENT MOTION
      ==========================================================
      */

      if (!reducedMotion) {
        gsap.to(om, {
          y: -12,
          rotation: 6,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(imageGlow, {
          scaleX: 1.12,
          scaleY: 1.12,
          opacity: 0.75,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(backgroundGlow, {
          x: 70,
          y: 40,
          scaleX: 1.15,
          scaleY: 1.15,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(backgroundGlowTwo, {
          x: -60,
          y: -50,
          scaleX: 1.1,
          scaleY: 1.1,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(shine, {
          xPercent: 250,
          duration: 2.5,
          repeat: -1,
          repeatDelay: 6,
          ease: "power2.inOut",
        });

        gsap.to(".temple-particle", {
          y: -30,
          x: 12,
          opacity: 0.35,
          duration: 4,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
          ease: "sine.inOut",
        });
      }

      /*
      ==========================================================
      DESKTOP 3D IMAGE INTERACTION
      ==========================================================
      */

      if (finePointer && !reducedMotion) {
        const rotateX = gsap.quickTo(
          imageCard,
          "rotationX",
          {
            duration: 0.65,
            ease: "power3.out",
          },
        );

        const rotateY = gsap.quickTo(
          imageCard,
          "rotationY",
          {
            duration: 0.65,
            ease: "power3.out",
          },
        );

        const imageX = gsap.quickTo(image, "x", {
          duration: 0.8,
          ease: "power3.out",
        });

        const imageY = gsap.quickTo(image, "y", {
          duration: 0.8,
          ease: "power3.out",
        });

        const imageScaleX = gsap.quickTo(
          image,
          "scaleX",
          {
            duration: 0.8,
            ease: "power3.out",
          },
        );

        const imageScaleY = gsap.quickTo(
          image,
          "scaleY",
          {
            duration: 0.8,
            ease: "power3.out",
          },
        );

        const omX = gsap.quickTo(om, "x", {
          duration: 0.7,
          ease: "power3.out",
        });

        const omY = gsap.quickTo(om, "y", {
          duration: 0.7,
          ease: "power3.out",
        });

        const glowX = gsap.quickTo(
          cursorGlow,
          "x",
          {
            duration: 0.7,
            ease: "power3.out",
          },
        );

        const glowY = gsap.quickTo(
          cursorGlow,
          "y",
          {
            duration: 0.7,
            ease: "power3.out",
          },
        );

        const handleMove = (event: MouseEvent) => {
          const rect =
            imageCard.getBoundingClientRect();

          const px =
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const py =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          rotateX(-py * 8);
          rotateY(px * 10);

          imageX(px * -24);
          imageY(py * -24);

          imageScaleX(1.075);
          imageScaleY(1.075);

          omX(px * 22);
          omY(py * 22);

          glowX(
            event.clientX - rect.left,
          );

          glowY(
            event.clientY - rect.top,
          );

          gsap.to(cursorGlow, {
            opacity: 1,
            duration: 0.25,
          });
        };

        const handleLeave = () => {
          rotateX(0);
          rotateY(0);

          imageX(0);
          imageY(0);

          imageScaleX(1);
          imageScaleY(1);

          omX(0);
          omY(0);

          gsap.to(cursorGlow, {
            opacity: 0,
            duration: 0.4,
          });
        };

        imageCard.addEventListener(
          "mousemove",
          handleMove,
        );

        imageCard.addEventListener(
          "mouseleave",
          handleLeave,
        );

        /*
        ========================================================
        MAGNETIC CTA
        ========================================================
        */

        const buttonX = gsap.quickTo(
          cta,
          "x",
          {
            duration: 0.4,
            ease: "power3.out",
          },
        );

        const buttonY = gsap.quickTo(
          cta,
          "y",
          {
            duration: 0.4,
            ease: "power3.out",
          },
        );

        const buttonScaleX = gsap.quickTo(
          cta,
          "scaleX",
          {
            duration: 0.4,
            ease: "power3.out",
          },
        );

        const buttonScaleY = gsap.quickTo(
          cta,
          "scaleY",
          {
            duration: 0.4,
            ease: "power3.out",
          },
        );

        const handleButtonMove = (
          event: MouseEvent,
        ) => {
          const rect =
            cta.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          buttonX(x * 0.16);
          buttonY(y * 0.2);

          buttonScaleX(1.035);
          buttonScaleY(1.035);
        };

        const handleButtonLeave = () => {
          buttonX(0);
          buttonY(0);

          buttonScaleX(1);
          buttonScaleY(1);
        };

        cta.addEventListener(
          "mousemove",
          handleButtonMove,
        );

        cta.addEventListener(
          "mouseleave",
          handleButtonLeave,
        );

        /*
        ========================================================
        HIGHLIGHT CARD HOVER
        ========================================================
        */

        const cards =
          gsap.utils.toArray<HTMLElement>(
            ".temple-highlight",
          );

        const cardCleanups: Array<() => void> = [];

        cards.forEach((card) => {
          const number =
            card.querySelector<HTMLElement>(
              ".temple-number",
            );

          const sweep =
            card.querySelector<HTMLElement>(
              ".highlight-sweep",
            );

          if (!number) return;

          const cardMove = () => {
            gsap.to(card, {
              y: -6,
              duration: 0.35,
              ease: "power3.out",
            });

            gsap.to(number, {
              scaleX: 1.12,
              scaleY: 1.12,
              duration: 0.3,
              ease: "back.out(2)",
            });

            if (sweep) {
              gsap.fromTo(
                sweep,
                {
                  xPercent: -120,
                },
                {
                  xPercent: 240,
                  duration: 0.8,
                  ease: "power2.out",
                },
              );
            }
          };

          const cardLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.45,
              ease: "power3.out",
            });

            gsap.to(number, {
              scaleX: 1,
              scaleY: 1,
              duration: 0.3,
              ease: "power3.out",
            });
          };

          card.addEventListener(
            "mouseenter",
            cardMove,
          );

          card.addEventListener(
            "mouseleave",
            cardLeave,
          );

          cardCleanups.push(() => {
            card.removeEventListener(
              "mouseenter",
              cardMove,
            );

            card.removeEventListener(
              "mouseleave",
              cardLeave,
            );
          });
        });

        return () => {
          imageCard.removeEventListener(
            "mousemove",
            handleMove,
          );

          imageCard.removeEventListener(
            "mouseleave",
            handleLeave,
          );

          cta.removeEventListener(
            "mousemove",
            handleButtonMove,
          );

          cta.removeEventListener(
            "mouseleave",
            handleButtonLeave,
          );

          cardCleanups.forEach((cleanup) =>
            cleanup(),
          );
        };
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#f6f0e5]
        py-24
        sm:py-32
        lg:py-40
        xl:py-48
      "
    >
      {/* ======================================================
          BACKGROUND ATMOSPHERE
      ======================================================= */}

      <div
        ref={backgroundGlowRef}
        className="
          pointer-events-none
          absolute
          -left-[18rem]
          top-[8%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-[#c47b38]/10
          blur-[130px]
        "
      />

      <div
        ref={backgroundGlowTwoRef}
        className="
          pointer-events-none
          absolute
          -right-[18rem]
          bottom-0
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-[#8f2d21]/[0.07]
          blur-[140px]
        "
      />

      {/* Large background Om */}

      <div
        className="
          temple-background-pattern
          pointer-events-none
          absolute
          -right-[8rem]
          top-[5%]
          select-none
          font-serif
          text-[26rem]
          leading-none
          text-[#8f2d21]/[0.025]
          sm:text-[34rem]
          lg:text-[44rem]
        "
      >
        ॐ
      </div>

      {/* Grain */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#32120e 0.7px, transparent 0.7px)",
            backgroundSize: "17px 17px",
          }}
        />
      </div>

      {/* ======================================================
          FLOATING PARTICLES
      ======================================================= */}

      <span className="temple-particle pointer-events-none absolute left-[10%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#c9a66b]" />

      <span className="temple-particle pointer-events-none absolute left-[20%] top-[65%] h-1 w-1 rounded-full bg-[#8f2d21]/50" />

      <span className="temple-particle pointer-events-none absolute right-[18%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#c9a66b]" />

      <span className="temple-particle pointer-events-none absolute right-[9%] top-[68%] h-1 w-1 rounded-full bg-[#8f2d21]/60" />

      <span className="temple-particle pointer-events-none absolute left-[48%] top-[10%] h-1 w-1 rounded-full bg-[#c9a66b]/70" />

      <span className="temple-particle pointer-events-none absolute bottom-[15%] left-[42%] h-1.5 w-1.5 rounded-full bg-[#a03a29]/40" />

      {/* ======================================================
          SCROLL PROGRESS
      ======================================================= */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#c9a66b]/10">
        <div
          ref={progressRef}
          className="
            h-full
            w-full
            origin-left
            scale-x-0
            bg-[#a03a29]
          "
        />
      </div>

      {/* ======================================================
          MAIN
      ======================================================= */}

      <div className="relative mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-28">
          {/* ==================================================
              IMAGE
          =================================================== */}

          <div
            ref={imageSceneRef}
            className="
              relative
              mx-auto
              w-full
              max-w-[43rem]
              [perspective:1600px]
              lg:mx-0
            "
          >
            {/* Outer frame */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-5
                rounded-[3rem]
                border
                border-[#c9a66b]/25
                sm:-inset-8
                sm:rounded-[3.8rem]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -inset-10
                rounded-[4rem]
                border
                border-[#c9a66b]/10
                sm:-inset-14
              "
            />

            {/* Corner accents */}

            <div className="absolute -left-4 -top-4 z-30 h-24 w-24 border-l border-t border-[#a03a29]/55 sm:-left-7 sm:-top-7 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-4 -right-4 z-30 h-24 w-24 border-b border-r border-[#a03a29]/55 sm:-bottom-7 sm:-right-7 sm:h-32 sm:w-32" />

            {/* Glow */}

            <div
              ref={imageGlowRef}
              className="
                pointer-events-none
                absolute
                inset-5
                rounded-[3rem]
                bg-[#c47b38]/20
                blur-[70px]
              "
            />

            {/* Orbital ring */}

            <div
              ref={orbitRef}
              className="
                pointer-events-none
                absolute
                -right-10
                top-1/2
                z-30
                h-28
                w-28
                -translate-y-1/2
                rounded-full
                border
                border-[#c9a66b]/35
                sm:-right-14
                sm:h-36
                sm:w-36
              "
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a66b] shadow-[0_0_20px_rgba(201,166,107,0.7)]" />

              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#8f2d21]" />
            </div>

            {/* Inner ring */}

            <div
              ref={orbitInnerRef}
              className="
                pointer-events-none
                absolute
                -right-4
                top-1/2
                z-30
                h-16
                w-16
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#c9a66b]/25
                sm:-right-6
                sm:h-20
                sm:w-20
              "
            />

            {/* Main card */}

            <div
              ref={imageCardRef}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[2.5rem]
                bg-[#24100d]
                shadow-[0_55px_120px_rgba(55,30,18,0.22)]
                will-change-transform
                sm:rounded-[3.2rem]
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Image reveal */}

              <div
                ref={imageRevealRef}
                className="absolute inset-0 overflow-hidden"
              >
                <div
                  ref={imageRef}
                  className="absolute -inset-8 will-change-transform"
                >
                  <Image
                    src="/images/ujjain_ghat.jpg"
                    alt="उज्जैन घाट"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                </div>
              </div>

              {/* Cinematic layers */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100705] via-[#180a07]/25 to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_15%,rgba(255,210,130,0.22),transparent_30%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.08),transparent_30%,rgba(0,0,0,0.15))]" />

              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10 sm:rounded-[3.2rem]" />

              {/* Cursor glow */}

              <div
                ref={cursorGlowRef}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-20
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#f6cf91]/15
                  opacity-0
                  blur-3xl
                "
              />

              {/* Shine */}

              <div
                ref={shineRef}
                className="
                  pointer-events-none
                  absolute
                  -left-[80%]
                  top-0
                  z-30
                  h-full
                  w-[38%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.15]
                  to-transparent
                "
              />

              {/* Location */}

              <div className="absolute left-5 top-5 z-40 sm:left-7 sm:top-7">
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-white/15
                    bg-black/20
                    px-4
                    py-2.5
                    backdrop-blur-xl
                  "
                >
                  <MapPin
                    size={12}
                    strokeWidth={1.8}
                    className="text-[#e4bd72]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    Ujjain • Madhya Pradesh
                  </span>
                </div>
              </div>

              {/* Spark */}

              <div className="absolute right-5 top-5 z-40 sm:right-7 sm:top-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-xl">
                  <Sparkles
                    size={14}
                    strokeWidth={1.4}
                    className="text-[#e0b96f]"
                  />
                </div>
              </div>

              {/* Bottom content */}

              <div className="absolute bottom-0 left-0 right-0 z-40 p-6 sm:p-9 lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-14 bg-[#d9ae61]" />

                  <span className="font-serif text-sm text-[#d9ae61]">
                    ॐ
                  </span>

                  <span className="h-px w-8 bg-[#d9ae61]/35" />
                </div>

                <p className="max-w-xl font-serif text-[2.1rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-[2.8rem] lg:text-[3.15rem]">
                  आस्था की भूमि,

                  <span className="block text-[#e6bd76]">
                    वैदिक परंपरा
                  </span>
                </p>

                <p className="mt-5 max-w-md text-[12px] leading-6 text-white/55 sm:text-[13px]">
                  महाकाल की पावन नगरी से जुड़ी
                  सनातन परंपरा, श्रद्धा और
                  वैदिक विधि-विधान की सेवा।
                </p>
              </div>
            </div>

            {/* Om */}

            <div
              ref={omRef}
              className="
                absolute
                -bottom-8
                -right-2
                z-50
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-[#c9a66b]/65
                bg-[#f6f0e5]
                shadow-[0_25px_60px_rgba(60,30,15,0.2)]
                will-change-transform
                sm:-bottom-10
                sm:-right-9
                sm:h-28
                sm:w-28
              "
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a66b]/40 sm:h-20 sm:w-20">
                <span className="font-serif text-3xl text-[#8f2d21] sm:text-4xl">
                  ॐ
                </span>
              </div>

              <div className="absolute inset-[-8px] rounded-full border border-[#c9a66b]/15" />
            </div>
          </div>

          {/* ==================================================
              CONTENT
          =================================================== */}

          <div className="temple-content relative lg:pl-4">
            {/* Eyebrow */}

            <div
              ref={eyebrowRef}
              className="flex items-center gap-4"
            >
              <span className="h-px w-14 bg-[#a03a29]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#a03a29] sm:text-xs">
                हमारी परंपरा
              </span>

              <span className="h-1 w-1 rounded-full bg-[#c9a66b]" />
            </div>

            {/* Heading */}

            <h2
              ref={titleRef}
              className="
                mt-7
                max-w-3xl
                overflow-hidden
                font-serif
                text-[3rem]
                font-medium
                leading-[0.98]
                tracking-[-0.055em]
                text-[#32120e]
                sm:text-[4rem]
                lg:text-[4.6rem]
                xl:text-[5.25rem]
              "
              style={{
                perspective: "900px",
              }}
            >
              <span className="temple-title-word inline-block">
                उज्जैन की
              </span>{" "}
              <span className="temple-title-word inline-block">
                पवित्र भूमि से
              </span>{" "}
              <span className="temple-title-word inline-block text-[#a03a29]">
                वैदिक सेवा
              </span>
            </h2>

            {/* Divider */}

            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-24 bg-[#c9a66b]" />

              <span className="font-serif text-sm text-[#b58a48]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a66b]/35" />
            </div>

            {/* Description */}

            <p
              ref={descriptionRef}
              className="
                mt-8
                max-w-2xl
                text-[15px]
                leading-8
                text-[#6f5a50]
                sm:text-base
                sm:leading-8
              "
            >
              उज्जैन में पूजा, अनुष्ठान और ज्योतिष संबंधी
              सेवाएँ परंपरागत विधि-विधान के साथ प्रदान की
              जाती हैं। हमारा उद्देश्य प्रत्येक सेवा को
              स्पष्ट प्रक्रिया, श्रद्धा और व्यक्तिगत
              मार्गदर्शन के साथ उपलब्ध कराना है।
            </p>

            {/* Highlights */}

            <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {introHighlights.map((item) => (
                <div
                  key={item.number}
                  className="
                    temple-highlight
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#ded0be]
                    bg-white/55
                    p-4
                    backdrop-blur-md
                    will-change-transform
                    transition-colors
                    duration-500
                    hover:border-[#c9a66b]/60
                    hover:bg-white/80
                  "
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c9a66b]/10 blur-3xl transition-transform duration-700 group-hover:scale-[1.8]" />

                  {/* Sweep */}

                  <div className="highlight-sweep pointer-events-none absolute -left-[120%] top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/55 to-transparent" />

                  <div className="relative flex items-center gap-3">
                    <span
                      className="
                        temple-number
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#8f2d21]/15
                        bg-[#8f2d21]/[0.055]
                        text-[10px]
                        font-semibold
                        text-[#9b3829]
                        transition-all
                        duration-300
                        group-hover:border-[#8f2d21]
                        group-hover:bg-[#8f2d21]
                        group-hover:text-white
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#51342d]">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-[10px] text-[#8b776e]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="temple-cta mt-11 flex flex-wrap items-center gap-6">
              <Link
                ref={ctaRef}
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#8f2d21]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_18px_45px_rgba(143,45,33,0.22)]
                  will-change-transform
                  transition-colors
                  duration-300
                  hover:bg-[#752419]
                  hover:shadow-[0_24px_60px_rgba(143,45,33,0.3)]
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#c9a66b]/40
                "
              >
                <span>हमारे बारे में जानें</span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-white/15
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                  />
                </span>
              </Link>

              <div className="hidden h-10 w-px bg-[#d7c8b7] sm:block" />

              <div>
                <p className="text-[11px] font-semibold text-[#806c62]">
                  सनातन परंपरा
                </p>

                <p className="mt-1 text-[11px] text-[#b08a53]">
                  श्रद्धा • सेवा • विश्वास
                </p>
              </div>
            </div>

            {/* Trust */}

            <div className="temple-cta mt-7 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c9a66b]/45 bg-[#c9a66b]/[0.04]">
                <Check
                  size={11}
                  strokeWidth={2.5}
                  className="text-[#a03a29]"
                />
              </span>

              <p className="text-xs leading-5 text-[#8a756b]">
                परंपरागत विधि-विधान के साथ व्यक्तिगत
                मार्गदर्शन
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          BOTTOM ORNAMENT
      ======================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 flex w-[82%] -translate-x-1/2 items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a66b]/30" />

        <span className="font-serif text-xs text-[#b08a53]/70">
          ॐ
        </span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a66b]/30" />
      </div>
    </section>
  );
}