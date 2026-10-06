"use client";

import {
  BadgeCheck,
  CalendarCheck,
  Clock3,
  Compass,
  Crown,
  HeartHandshake,
  Landmark,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const trustCards = [
  {
    icon: Landmark,
    title: "उज्जैन",
    text: "पवित्र उज्जैन से पूजा एवं ज्योतिष सेवा",
    tag: "LOCATION",
  },
  {
    icon: Sparkles,
    title: "वैदिक विधि",
    text: "परंपरागत वैदिक विधि-विधान के अनुसार",
    tag: "VEDIC",
  },
  {
    icon: ShieldCheck,
    title: "विश्वसनीय सेवा",
    text: "श्रद्धा और जिम्मेदारी के साथ सेवा",
    tag: "TRUST",
  },
  {
    icon: MessageCircle,
    title: "सीधा संपर्क",
    text: "फोन एवं WhatsApp पर सीधी सहायता",
    tag: "DIRECT",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking",
    text: "बुकिंग अनुरोध की सुविधाजनक व्यवस्था",
    tag: "BOOKING",
  },
  {
    icon: Crown,
    title: "अनुभव",
    text: "परंपरा और अनुभव से जुड़ा मार्गदर्शन",
    tag: "EXPERIENCE",
  },
  {
    icon: UserRoundCheck,
    title: "व्यक्तिगत मार्गदर्शन",
    text: "आवश्यकता के अनुसार व्यक्तिगत परामर्श",
    tag: "PERSONAL",
  },
  {
    icon: Clock3,
    title: "सुविधाजनक संपर्क",
    text: "संपर्क और अनुरोध के लिए आसान सुविधा",
    tag: "ACCESS",
  },
  {
    icon: ScrollText,
    title: "पूजा अनुष्ठान",
    text: "विधि-विधान के अनुसार पूजा एवं अनुष्ठान",
    tag: "PUJA",
  },
  {
    icon: Compass,
    title: "ज्योतिष सलाह",
    text: "ज्योतिषीय विषयों पर मार्गदर्शन",
    tag: "ASTROLOGY",
  },
  {
    icon: HeartHandshake,
    title: "श्रद्धा और सेवा",
    text: "भक्ति, सम्मान और सेवा की भावना",
    tag: "SEVA",
  },
  {
    icon: BadgeCheck,
    title: "प्रामाणिक प्रक्रिया",
    text: "स्पष्ट और व्यवस्थित सेवा प्रक्रिया",
    tag: "AUTHENTIC",
  },
  {
    icon: Star,
    title: "विशेष सेवाएं",
    text: "विभिन्न पूजा एवं ज्योतिष सेवाओं का विकल्प",
    tag: "SERVICES",
  },
  {
    icon: Phone,
    title: "Direct Assistance",
    text: "संपर्क के लिए सीधा और सरल माध्यम",
    tag: "SUPPORT",
  },
  {
    icon: WandSparkles,
    title: "दोष निवारण",
    text: "विभिन्न धार्मिक अनुष्ठानों के विकल्प",
    tag: "REMEDIES",
  },
  {
    icon: Zap,
    title: "सरल प्रक्रिया",
    text: "सेवा अनुरोध की सहज और आसान प्रक्रिया",
    tag: "SIMPLE",
  },
];

function TrustCard({
  card,
  index,
}: {
  card: (typeof trustCards)[number];
  index: number;
}) {
  const Icon = card.icon;

  return (
    <article
      data-trust-card
      className="
        group
        relative
        flex
        h-[360px]
        w-[290px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        rounded-[28px]
        border
        border-[#d8cbb9]
        bg-[#fbf8f1]
        p-6
        shadow-[0_18px_50px_rgba(57,38,24,0.07)]
        transition-[border-color,background-color,box-shadow]
        duration-500
        hover:border-[#b9914d]/70
        hover:bg-[#fffaf2]
        hover:shadow-[0_28px_70px_rgba(57,38,24,0.14)]
        sm:h-[390px]
        sm:w-[320px]
        sm:p-7
        lg:h-[420px]
        lg:w-[350px]
        lg:p-8
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-[#c49a59]/[0.07]
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:bg-[#c49a59]/[0.13]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-48
          w-48
          rounded-full
          bg-[#8b3025]/[0.025]
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
        "
      />

      {/* Top gold line */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-7
          right-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#b9914d]/60
          to-transparent
          opacity-70
        "
      />

      {/* Index */}
      <span
        className="
          absolute
          right-7
          top-6
          font-mono
          text-[8px]
          tracking-[0.2em]
          text-[#aa937d]
          opacity-60
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        data-card-icon
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-[18px]
          border
          border-[#d4b982]/55
          bg-[#f2e5cf]
          text-[#8b3025]
          shadow-[inset_0_1px_0_rgba(255,255,255,.85),0_8px_20px_rgba(100,60,25,.05)]
          transition-all
          duration-500
          group-hover:scale-105
          group-hover:border-[#b9914d]/80
          group-hover:bg-[#eedcba]
          group-hover:text-[#74251d]
        "
      >
        <Icon size={21} strokeWidth={1.55} />

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[18px]
            bg-[#c49750]/20
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* Content */}
      <div className="relative mt-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-7 bg-[#b9914d]/70" />

          <span className="text-[7px] font-bold tracking-[0.28em] text-[#a17b43]">
            {card.tag}
          </span>
        </div>

        <h3
          className="
            max-w-[250px]
            font-serif
            text-[24px]
            font-medium
            leading-[1.08]
            tracking-[-0.035em]
            text-[#321713]
            transition-colors
            duration-300
            group-hover:text-[#8b3025]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-4
            max-w-[255px]
            text-[11px]
            leading-6
            text-[#75665d]
            sm:text-[12px]
          "
        >
          {card.text}
        </p>
      </div>

      {/* Bottom ornament */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-px w-10 bg-[#cdbda8] transition-all duration-500 group-hover:w-16 group-hover:bg-[#b9914d]/70" />

          <span className="h-1.5 w-1.5 rotate-45 bg-[#b9914d]/60 transition-transform duration-500 group-hover:rotate-90" />
        </div>

        <span
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-[#cdbda8]
            transition-all
            duration-500
            group-hover:border-[#b9914d]/70
            group-hover:bg-[#f2e5cf]
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#b9914d]" />
        </span>
      </div>
    </article>
  );
}

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const loopRef = useRef<gsap.core.Timeline | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray<HTMLElement>(
          "[data-trust-card]",
        );

      const heading =
        section.querySelector<HTMLElement>(
          "[data-trust-heading]",
        );

      const eyebrow =
        section.querySelector<HTMLElement>(
          "[data-trust-eyebrow]",
        );

      const description =
        section.querySelector<HTMLElement>(
          "[data-trust-description]",
        );

      /* ======================================================
         REDUCED MOTION
      ======================================================= */

      if (reducedMotion) {
        gsap.set(
          [
            eyebrow,
            heading,
            description,
            ...cards,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      /* ======================================================
         HEADER REVEAL
      ======================================================= */

      gsap.set(eyebrow, {
        opacity: 0,
        y: 18,
      });

      gsap.set(heading, {
        opacity: 0,
        y: 28,
      });

      gsap.set(description, {
        opacity: 0,
        y: 22,
      });

      const intro = gsap.timeline({
        scrollTrigger: undefined,
      });

      intro
        .to(eyebrow, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.3",
        );

      /* ======================================================
         INITIAL CARD STATE
      ======================================================= */

      gsap.set(cards, {
        opacity: 0,
        y: 30,
        scale: 0.94,
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.045,
        delay: 0.25,
        ease: "power3.out",
      });

      /* ======================================================
         CARD ICON FLOAT
      ======================================================= */

      cards.forEach((card, index) => {
        const icon =
          card.querySelector<HTMLElement>(
            "[data-card-icon]",
          );

        if (!icon) return;

        gsap.to(icon, {
          y: -3,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.08,
        });
      });

      /* ======================================================
         INFINITE MARQUEE
      ======================================================= */

      const firstSetWidth =
        track.scrollWidth / 2;

      const speed = 75;

      const duration =
        firstSetWidth / speed;

      const loop = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      });

      loop.to(track, {
        x: -firstSetWidth,
        duration,
      });

      loopRef.current = loop;

      /* ======================================================
         HOVER PAUSE
      ======================================================= */

      const handleEnter = () => {
        loop.timeScale(0.18);
      };

      const handleLeave = () => {
        loop.timeScale(1);
      };

      track.addEventListener(
        "mouseenter",
        handleEnter,
      );

      track.addEventListener(
        "mouseleave",
        handleLeave,
      );

      /* ======================================================
         TOUCH / MOBILE
      ======================================================= */

      let touchStartX = 0;
      let touchStartTime = 0;

      const handleTouchStart = (
        event: TouchEvent,
      ) => {
        touchStartX =
          event.touches[0]?.clientX ?? 0;

        touchStartTime = performance.now();

        loop.timeScale(0.2);
      };

      const handleTouchEnd = () => {
        const elapsed =
          performance.now() -
          touchStartTime;

        if (elapsed < 500) {
          loop.timeScale(1.4);

          window.setTimeout(() => {
            if (loop) {
              loop.timeScale(1);
            }
          }, 700);
        } else {
          loop.timeScale(1);
        }
      };

      track.addEventListener(
        "touchstart",
        handleTouchStart,
        {
          passive: true,
        },
      );

      track.addEventListener(
        "touchend",
        handleTouchEnd,
        {
          passive: true,
        },
      );

      /* ======================================================
         PROGRESS INDICATOR
      ======================================================= */

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          duration: duration,
          repeat: -1,
          ease: "none",
        });
      }

      /* ======================================================
         CLEANUP
      ======================================================= */

      return () => {
        track.removeEventListener(
          "mouseenter",
          handleEnter,
        );

        track.removeEventListener(
          "mouseleave",
          handleLeave,
        );

        track.removeEventListener(
          "touchstart",
          handleTouchStart,
        );

        track.removeEventListener(
          "touchend",
          handleTouchEnd,
        );

        loop.kill();
      };
    }, section);

    return () => {
      loopRef.current?.kill();
      loopRef.current = null;
      ctx.revert();
    };
  }, []);

  /*
   * Duplicate the cards so the second set can
   * seamlessly replace the first set.
   */
  const infiniteCards = [
    ...trustCards,
    ...trustCards,
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        border-y
        border-[#d9cebf]
        bg-[#f3eee5]
      "
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(183,139,72,0.13),transparent_42%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#b58b4c]/[0.025]
          blur-[130px]
        "
      />

      <div className="relative py-16 sm:py-20 lg:py-24">
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
          "
        >
          <div
            className="
              grid
              items-end
              gap-7
              lg:grid-cols-[1fr_360px]
            "
          >
            {/* LEFT */}

            <div>
              <div
                data-trust-eyebrow
                className="flex items-center gap-3"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full border border-[#ad8344]/30" />

                  <span className="h-1.5 w-1.5 rounded-full bg-[#ad8344]" />
                </span>

                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.34em]
                    text-[#8b3025]
                    sm:text-[8px]
                  "
                >
                  हमारी विशेषताएं
                </span>
              </div>

              <h2
                data-trust-heading
                className="
                  mt-4
                  max-w-2xl
                  font-serif
                  text-[34px]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#301410]
                  sm:text-[44px]
                  lg:text-[54px]
                "
              >
                श्रद्धा से जुड़ी{" "}
                <span className="text-[#8b3025]">
                  सेवा।
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-px w-14 bg-[#ad8344]/60" />

                <span className="h-1.5 w-1.5 rotate-45 bg-[#ad8344]" />

                <span className="h-px w-6 bg-[#ad8344]/25" />
              </div>
            </div>

            {/* RIGHT */}

            <div
              data-trust-description
              className="
                border-l
                border-[#cdbda8]
                pl-5
              "
            >
              <p
                className="
                  text-[11px]
                  leading-6
                  text-[#76675d]
                  sm:text-[12px]
                "
              >
                पूजा, अनुष्ठान और ज्योतिष सेवाओं के लिए
                सरल, व्यवस्थित और विश्वसनीय अनुभव —
                परंपरा के साथ आधुनिक सुविधा।
              </p>

              <div className="mt-4 flex items-center gap-2">
                <ShieldCheck
                  size={13}
                  className="text-[#a17b43]"
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#8d7767]
                  "
                >
                  TRUSTED VEDIC SERVICE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            INFINITE CARD MARQUEE
        ===================================================== */}

        <div
          className="
            relative
            mt-12
            w-full
            overflow-hidden
            sm:mt-14
            lg:mt-16
          "
        >
          {/* LEFT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-16
              bg-gradient-to-r
              from-[#f3eee5]
              to-transparent
              sm:w-24
              lg:w-32
            "
          />

          {/* RIGHT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-16
              bg-gradient-to-l
              from-[#f3eee5]
              to-transparent
              sm:w-24
              lg:w-32
            "
          />

          <div
            ref={trackRef}
            className="
              flex
              w-max
              items-stretch
              gap-4
              px-5
              sm:gap-5
              sm:px-8
              lg:gap-6
            "
          >
            {infiniteCards.map(
              (card, index) => (
                <TrustCard
                  key={`${card.title}-${index}`}
                  card={card}
                  index={index % trustCards.length}
                />
              ),
            )}
          </div>
        </div>

        {/* ====================================================
            MARQUEE STATUS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-7xl
            items-center
            gap-5
            px-5
            sm:px-8
            lg:px-10
          "
        >
          <div className="relative h-px flex-1 overflow-hidden bg-[#cdbda8]/50">
            <span
              ref={progressRef}
              className="
                absolute
                inset-y-0
                left-0
                w-full
                origin-left
                scale-x-0
                bg-[#a77e43]
              "
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[7px] font-semibold tracking-[0.25em] text-[#927f70]">
              CONTINUOUS
            </span>

            <span className="h-1 w-1 rounded-full bg-[#a77e43]" />

            <span className="text-[7px] font-mono tracking-[0.18em] text-[#927f70]">
              16
            </span>
          </div>
        </div>

        {/* ====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <div className="relative mt-10 flex items-center justify-center gap-3 px-5">
          <span className="h-px w-10 bg-[#b8945a]/30 sm:w-20" />

          <div className="flex items-center gap-2">
            <Sparkles
              size={9}
              className="text-[#a77e43]"
            />

            <span
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.38em]
                text-[#927f70]
                sm:text-[7px]
              "
            >
              श्रद्धा • परंपरा • सेवा • मार्गदर्शन
            </span>

            <Sparkles
              size={9}
              className="text-[#a77e43]"
            />
          </div>

          <span className="h-px w-10 bg-[#b8945a]/30 sm:w-20" />
        </div>
      </div>
    </section>
  );
}