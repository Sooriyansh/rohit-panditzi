"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.11.59 AM.jpeg",
    alt: "पूजा के लिए सजाई गई वैदिक सामग्री और कलश",
  },
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.12.01 AM (1).jpeg",
    alt: "धार्मिक अनुष्ठान में सजी पूजा वेदियाँ",
  },
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.12.01 AM (2).jpeg",
    alt: "मंदिर परिसर में पूजा सामग्री और अनुष्ठान",
  },
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.12.01 AM.jpeg",
    alt: "विभिन्न पूजा वेदियों का दृश्य",
  },
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.12.02 AM (1).jpeg",
    alt: "रंगोली और पूजा सामग्री से सजी वेदी",
  },
  {
    src: "/images/WhatsApp Image 2026-10-04 at 8.12.02 AM.jpeg",
    alt: "फूलों और कलश से सजी धार्मिक पूजा",
  },
  {
    src: "/images/Rohit_shamr_ujjain.webp",
    alt: "धार्मिक सेवा से जुड़े व्यक्ति का चित्र",
  },
];

export default function GalleryClient() {
  const pageRef = useRef<HTMLElement | null>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null,
  );

  const selectedImage =
    selectedIndex !== null
      ? galleryImages[selectedIndex]
      : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + 1) % galleryImages.length;
    });
  };

  const previousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + galleryImages.length) %
        galleryImages.length
      );
    });
  };

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

      gsap.set(".gallery-eyebrow", {
        opacity: 0,
        y: reducedMotion ? 0 : 20,
      });

      gsap.set(".gallery-title-line", {
        opacity: 0,
        y: reducedMotion ? 0 : 70,
        rotateX: reducedMotion ? 0 : -20,
      });

      gsap.set(".gallery-description", {
        opacity: 0,
        y: reducedMotion ? 0 : 20,
      });

      gsap.set(".gallery-meta", {
        opacity: 0,
        y: reducedMotion ? 0 : 15,
      });

      gsap.set(".gallery-hero-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* =====================================================
         HERO INTRO
      ====================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .to(".gallery-eyebrow", {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 0.65,
        })
        .to(
          ".gallery-title-line",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: reducedMotion ? 0.25 : 0.95,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .to(
          ".gallery-hero-line",
          {
            scaleX: 1,
            duration: reducedMotion ? 0.2 : 0.8,
          },
          "-=0.45",
        )
        .to(
          ".gallery-description",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.65,
          },
          "-=0.35",
        )
        .to(
          ".gallery-meta",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.55,
          },
          "-=0.25",
        );

      if (reducedMotion) return;

      /* =====================================================
         HERO AMBIENT MOTION
      ====================================================== */

      gsap.to(".gallery-orb-one", {
        x: 35,
        y: -25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gallery-orb-two", {
        x: -30,
        y: 30,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gallery-om", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         HERO PARALLAX
      ====================================================== */

      gsap.to(".gallery-hero-background", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: ".gallery-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* =====================================================
         IMAGE REVEALS
      ====================================================== */

      const cards =
        gsap.utils.toArray<HTMLElement>(".gallery-item");

      cards.forEach((card, index) => {
        const image = card.querySelector(
          ".gallery-image-inner",
        );

        const imageWrapper = card.querySelector(
          ".gallery-image-wrapper",
        );

        const content = card.querySelector(
          ".gallery-card-content",
        );

        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          delay: (index % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.14,
            },
            {
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            },
          );
        }

        if (imageWrapper) {
          gsap.to(imageWrapper, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (content) {
          gsap.from(content, {
            opacity: 0,
            y: 18,
            duration: 0.6,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });
        }
      });

      /* =====================================================
         GALLERY TITLE PARALLAX
      ====================================================== */

      gsap.to(".gallery-section-heading", {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* =====================================================
         HOVER TILT
      ====================================================== */

      cards.forEach((card) => {
        const inner = card.querySelector<HTMLElement>(
          ".gallery-card-inner",
        );

        if (!inner) return;

        const handleMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const rotateX =
            ((y - rect.height / 2) / rect.height) * -2.5;

          const rotateY =
            ((x - rect.width / 2) / rect.width) * 2.5;

          gsap.to(inner, {
            rotateX,
            rotateY,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        };

        const handleLeave = () => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
      });
    }, page);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <main
      ref={pageRef}
      className="
        relative
        overflow-hidden
        bg-[#f6f1e8]
        text-[#32130f]
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          gallery-hero
          relative
          flex
          min-h-[82vh]
          items-center
          overflow-hidden
          border-b
          border-[#ded1bf]
          bg-[#f6f1e8]
          py-28
          sm:min-h-[88vh]
          lg:min-h-[92vh]
        "
      >
        <div
          className="
            gallery-hero-background
            pointer-events-none
            absolute
            inset-0
          "
        >
          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.3]
              [background-image:linear-gradient(to_right,rgba(93,62,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,62,42,0.05)_1px,transparent_1px)]
              [background-size:90px_90px]
              [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
            "
          />

          {/* Left glow */}
          <div
            className="
              gallery-orb-one
              absolute
              -left-40
              top-10
              h-[30rem]
              w-[30rem]
              rounded-full
              bg-[#c59a54]/[0.075]
              blur-[110px]
            "
          />

          {/* Right glow */}
          <div
            className="
              gallery-orb-two
              absolute
              -right-44
              bottom-[-5rem]
              h-[34rem]
              w-[34rem]
              rounded-full
              bg-[#8b3025]/[0.05]
              blur-[120px]
            "
          />

          {/* Decorative lines */}
          <div
            className="
              absolute
              left-[7%]
              top-0
              hidden
              h-full
              w-px
              bg-[#d8cbbb]/70
              lg:block
            "
          />

          <div
            className="
              absolute
              right-[7%]
              top-0
              hidden
              h-full
              w-px
              bg-[#d8cbbb]/70
              lg:block
            "
          />

          {/* Watermark */}
          <div
            className="
              gallery-om
              absolute
              right-[8%]
              top-1/2
              hidden
              -translate-y-1/2
              font-serif
              text-[22rem]
              leading-none
              text-[#8b3025]/[0.025]
              lg:block
            "
          >
            ॐ
          </div>
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            sm:px-8
            lg:px-12
          "
        >
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div
              className="
                gallery-eyebrow
                mb-8
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-12 bg-[#b68a49]" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.42em]
                  text-[#8b3025]
                "
              >
                गैलरी
              </span>

              <span className="h-1 w-1 rounded-full bg-[#b68a49]" />
            </div>

            {/* Title */}
            <h1
              className="
                font-serif
                text-[4rem]
                font-medium
                leading-[0.94]
                tracking-[-0.055em]
                text-[#30120e]
                sm:text-[6rem]
                lg:text-[8rem]
              "
              style={{
                perspective: "1000px",
              }}
            >
              <span className="gallery-title-line block">
                मंदिर एवं
              </span>

              <span className="gallery-title-line block pl-8 text-[#8b3025] sm:pl-20">
                अनुष्ठान
              </span>
            </h1>

            {/* Line */}
            <div
              className="
                gallery-hero-line
                mt-9
                h-px
                w-32
                bg-gradient-to-r
                from-[#a87d42]
                to-transparent
                sm:w-52
              "
            />

            {/* Description */}
            <p
              className="
                gallery-description
                mt-8
                max-w-xl
                text-sm
                leading-7
                text-[#6f6259]
                sm:text-base
                sm:leading-8
              "
            >
              पूजा, अनुष्ठान और धार्मिक सेवा से जुड़ी तस्वीरों के
              माध्यम से उज्जैन की पवित्र परंपरा की झलक देखें।
            </p>

            {/* Meta */}
            <div
              className="
                gallery-meta
                mt-12
                flex
                items-center
                gap-5
                sm:mt-16
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#cdbb9f]
                  bg-[#faf6ee]
                  font-serif
                  text-xl
                  text-[#8b3025]
                "
              >
                ॐ
              </div>

              <div>
                <span
                  className="
                    block
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#a07d4e]
                  "
                >
                  UJJAIN • TEMPLE • RITUAL
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[10px]
                    text-[#87776c]
                  "
                >
                  तस्वीर पर क्लिक करके पूर्ण दृश्य देखें
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        className="
          gallery-section
          relative
          bg-[#fbf8f1]
          py-24
          sm:py-32
          lg:py-40
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            sm:px-8
            lg:px-12
          "
        >
          {/* Section heading */}
          <div
            className="
              gallery-section-heading
              mb-16
              flex
              flex-col
              gap-8
              lg:mb-20
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.36em]
                  text-[#8b3025]
                "
              >
                दृश्य संग्रह
              </span>

              <h2
                className="
                  mt-5
                  max-w-2xl
                  font-serif
                  text-4xl
                  font-medium
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#32130f]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                परंपरा के
                <span className="text-[#8b3025]">
                  {" "}
                  कुछ दृश्य।
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#b68a49]" />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8c7869]
                "
              >
                {galleryImages.length} संग्रहित दृश्य
              </span>
            </div>
          </div>

          {/* =================================================
              EDITORIAL GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-12
            "
          >
            {galleryImages.map((image, index) => {
              const layouts = [
                "lg:col-span-7 lg:row-span-2",
                "lg:col-span-5",
                "lg:col-span-5",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-5",
                "lg:col-span-7",
              ];

              const heights = [
                "h-[620px] sm:h-[680px]",
                "h-[320px]",
                "h-[320px]",
                "h-[360px]",
                "h-[360px]",
                "h-[360px]",
                "h-[430px]",
                "h-[430px]",
              ];

              return (
                <article
                  key={image.src}
                  className={`
                    gallery-item
                    gallery-hover
                    ${layouts[index]}
                  `}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div
                    className="
                      gallery-card-inner
                      group
                      relative
                      h-full
                      w-full
                      cursor-zoom-in
                    "
                  >
                    <div
                      className={`
                        gallery-image-wrapper
                        relative
                        overflow-hidden
                        bg-[#e8ddd0]
                        ${heights[index]}
                      `}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index < 2}
                        sizes="
                          (max-width: 680px) 100vw,
                          (max-width: 1024px) 50vw,
                          70vw
                        "
                        className="
                          gallery-image-inner
                          object-cover
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.06]
                        "
                      />

                      {/* Image overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#1e110c]/80
                          via-transparent
                          to-transparent
                          opacity-70
                          transition-opacity
                          duration-500
                          group-hover:opacity-90
                        "
                      />

                      {/* Number */}
                      <div
                        className="
                          absolute
                          left-5
                          top-5
                          z-10
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          border
                          border-white/30
                          bg-black/10
                          text-[8px]
                          font-bold
                          tracking-[0.15em]
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Open indicator */}
                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          z-10
                          flex
                          h-10
                          w-10
                          translate-y-2
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-black/10
                          text-white
                          opacity-0
                          backdrop-blur-sm
                          transition-all
                          duration-500
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        ↗
                      </div>

                      {/* Content */}
                      <div
                        className="
                          gallery-card-content
                          absolute
                          bottom-0
                          left-0
                          right-0
                          z-10
                          p-5
                          sm:p-7
                        "
                      >
                        <div
                          className="
                            mb-3
                            h-px
                            w-10
                            bg-[#d2a875]
                          "
                        />

                        <p
                          className="
                            max-w-xl
                            font-serif
                            text-base
                            leading-relaxed
                            text-white
                            sm:text-lg
                          "
                        >
                          {image.alt}
                        </p>

                        <span
                          className="
                            mt-3
                            block
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.28em]
                            text-white/60
                          "
                        >
                          Shri Pardeshwar Mahadev Mandir
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <div
            className="
              mt-20
              border-y
              border-[#ddd1c1]
              py-8
              sm:mt-28
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#92724b]
                "
              >
                श्रद्धा • परंपरा • सेवा
              </span>

              <span
                className="
                  text-xs
                  leading-6
                  text-[#786960]
                "
              >
                प्रत्येक तस्वीर एक धार्मिक वातावरण और सेवा की झलक
                प्रस्तुत करती है।
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#241713]
          px-6
          py-28
          text-center
          text-[#f6ecdf]
          sm:py-36
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[18rem]
            leading-none
            text-[#d0a879]/[0.025]
            sm:text-[25rem]
          "
        >
          ॐ
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.38em]
              text-[#b99570]
            "
          >
            UJJAIN • TEMPLE • TRADITION
          </span>

          <div className="mx-auto mt-7 h-px w-16 bg-[#ad7b47]" />

          <p
            className="
              mt-8
              font-serif
              text-3xl
              leading-tight
              tracking-[-0.025em]
              text-[#f1e4d4]
              sm:text-5xl
              lg:text-6xl
            "
          >
            तस्वीरों से आगे,
            <br />
            <em className="text-[#c99561]">
              एक पवित्र अनुभव।
            </em>
          </p>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImage && selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-[#120b08]/95
            p-4
            backdrop-blur-md
            sm:p-8
          "
          role="dialog"
          aria-modal="true"
          aria-label="गैलरी तस्वीर"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="बंद करें"
            onClick={closeLightbox}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/5
              text-xl
              text-white
              transition
              hover:bg-white/10
              sm:right-8
              sm:top-8
            "
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="पिछली तस्वीर"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/5
              text-xl
              text-white
              transition
              hover:bg-white/10
              sm:left-7
            "
          >
            ←
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="अगली तस्वीर"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/5
              text-xl
              text-white
              transition
              hover:bg-white/10
              sm:right-7
            "
          >
            →
          </button>

          {/* Image */}
          <div
            className="
              relative
              h-[78vh]
              w-full
              max-w-6xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="
                object-contain
              "
              priority
            />

            {/* Caption */}
            <div
              className="
                absolute
                bottom-[-70px]
                left-1/2
                w-full
                -translate-x-1/2
                text-center
              "
            >
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#c9a77e]
                "
              >
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </span>

              <p className="mt-2 text-sm text-white/80">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}