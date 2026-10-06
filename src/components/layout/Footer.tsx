"use client";

import Link from "next/link";
import { business } from "@/data/business";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      const elements = footer.querySelectorAll("[data-footer-reveal]");
      const line = footer.querySelector("[data-footer-line]");

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          elements,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 88%",
              once: true,
            },
          }
        );

        if (line) {
          gsap.fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 1.1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: footer,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });

      return () => mm.revert();
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#f3eadc] text-[#30251e]"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[190px] -top-[210px] h-[560px] w-[560px] rounded-full border border-[#9a7133]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[125px] -top-[145px] h-[420px] w-[420px] rounded-full border border-[#9a7133]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[55px] -top-[70px] h-[280px] w-[280px] rounded-full border border-[#9a7133]/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[210px] -left-[190px] h-[500px] w-[500px] rounded-full border border-[#9a7133]/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-[#4b1723]/[0.035] lg:left-[6%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 top-0 w-px bg-[#4b1723]/[0.035] lg:right-[6%]"
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            PREMIUM CONTACT / CTA
        ====================================================== */}

        <section
          data-footer-reveal
          className="border-b border-[#4b1723]/10 py-12 md:py-14 lg:py-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
            {/* LEFT */}
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#9a7133]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#91682f] sm:text-[10px]">
                  शुभ आरंभ
                </span>

                <span className="h-px w-12 bg-[#9a7133]/30" />
              </div>

              <h2 className="max-w-4xl font-serif text-[2.7rem] font-medium leading-[1.02] tracking-[-0.045em] text-[#4b1723] sm:text-5xl md:text-6xl lg:text-[4.4rem]">
                आपकी आस्था,
                <span className="block text-[#95692e]">
                  हमारा वैदिक मार्गदर्शन।
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#706258] sm:text-base sm:leading-8">
                पूजा, अनुष्ठान एवं ज्योतिषीय सेवाओं से संबंधित जानकारी,
                उपलब्धता और व्यक्तिगत परामर्श के लिए सीधे संपर्क करें।
              </p>

              {/* Small trust line */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#725c47]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9a7133]" />
                  उज्जैन
                </span>

                <span className="h-3 w-px bg-[#4b1723]/15" />

                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#725c47]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9a7133]" />
                  वैदिक परंपरा
                </span>

                <span className="h-3 w-px bg-[#4b1723]/15" />

                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#725c47]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9a7133]" />
                  व्यक्तिगत मार्गदर्शन
                </span>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="relative w-full max-w-[450px] lg:w-[450px]">
              <div className="border border-[#9a7133]/20 bg-[#fbf6ed] p-2">
                <div className="border border-[#4b1723]/10 bg-[#fffaf3] p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#9a7133]/25 bg-[#f6ecdc]">
                      <div className="absolute inset-1.5 rounded-full border border-[#9a7133]/10" />

                      <span className="relative font-serif text-xl text-[#95692e]">
                        ॐ
                      </span>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#9b733e]">
                        संपर्क करें
                      </p>

                      <p className="mt-1 text-sm font-medium text-[#403329]">
                        अपनी आवश्यकता साझा करें
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${
                        business.phoneDigits
                      }?text=${encodeURIComponent(
                        "नमस्ते, मुझे पूजा बुकिंग के बारे में जानकारी चाहिए।"
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex min-h-[64px] items-center gap-3 overflow-hidden bg-[#191310] px-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(35,22,13,0.18)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 -left-20 w-16 rotate-[18deg] bg-white/10 blur-md transition-all duration-700 group-hover:left-[120%]"
                      />

                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-[17px] w-[17px] text-[#25D366]"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M8.7 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2 2.8 2.6l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.3.6-.2.8-.7 1.3-1.4 1.5-1.1.3-3-.5-4.5-1.9-1.4-1.3-2.3-3.1-2.1-4.3.1-.5.3-.9.6-1.2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>

                      <span className="relative min-w-0">
                        <span className="block text-[8px] font-medium uppercase tracking-[0.17em] text-white/40">
                          WhatsApp
                        </span>

                        <span className="mt-1 block truncate text-[13px] font-semibold">
                          WhatsApp करें
                        </span>
                      </span>

                      <span className="relative ml-auto text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </a>

                    {/* Call */}
                    <a
                      href={`tel:${business.tel}`}
                      className="group flex min-h-[64px] items-center gap-3 border border-[#9a7133]/20 bg-[#fcf7ef] px-4 text-[#403329] transition-all duration-300 hover:-translate-y-1 hover:border-[#9a7133]/45 hover:bg-white hover:shadow-[0_14px_35px_rgba(91,63,29,0.07)]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#9a7133]/[0.08] text-[#95692e]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-[17px] w-[17px]"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.2 4.5 5.7 5.8c-.6.6-.8 1.5-.5 2.3a16.8 16.8 0 0 0 10.7 10.7c.8.3 1.7.1 2.3-.5l1.3-1.5c.4-.5.4-1.2 0-1.7l-2.2-2.2c-.4-.4-1-.5-1.5-.2l-1.5.8a11.8 11.8 0 0 1-3.9-3.9l.8-1.5c.3-.5.2-1.1-.2-1.5L8.9 4.5c-.5-.4-1.2-.4-1.7 0Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span>
                        <span className="block text-[8px] font-medium uppercase tracking-[0.17em] text-[#9b8975]">
                          Direct consultation
                        </span>

                        <span className="mt-1 block text-[13px] font-semibold">
                          अभी कॉल करें
                        </span>
                      </span>

                      <span className="ml-auto text-[#95692e] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1.65fr_0.8fr_0.8fr] lg:gap-20 lg:py-14">
          {/* =================================================
              BRAND
          ================================================= */}

          <div data-footer-reveal>
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#9a7133]/25 bg-[#fbf5eb]">
                <div className="absolute inset-2 rounded-full border border-[#9a7133]/15" />

                <div className="absolute inset-[7px] rounded-full border border-[#4b1723]/[0.05]" />

                <span className="relative font-serif text-[31px] text-[#95692e]">
                  ॐ
                </span>
              </div>

              {/* Name */}
              <div className="min-w-0">
                <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.32em] text-[#9b733e]">
                  Ujjain · Madhya Pradesh
                </p>

                <h3 className="truncate font-serif text-2xl tracking-[-0.025em] text-[#4b1723] sm:text-3xl">
                  {business.name}
                </h3>
              </div>
            </div>

            <div className="mt-7">
              <p className="max-w-xl font-serif text-[1.55rem] leading-[1.45] tracking-[-0.02em] text-[#49392b] sm:text-[1.8rem]">
                वैदिक परंपरा के साथ
                <br />
                <span className="text-[#95692e]">
                  पूजा, अनुष्ठान एवं ज्योतिषीय मार्गदर्शन।
                </span>
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#776c60]">
                उज्जैन की धार्मिक एवं वैदिक परंपराओं के अनुसार पूजा,
                अनुष्ठान और ज्योतिषीय सेवाओं के लिए मार्गदर्शन।
              </p>
            </div>

            {/* Contact information */}
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
              {/* Phone */}
              <a
                href={`tel:${business.tel}`}
                className="group border border-[#4b1723]/[0.08] bg-[#faf5ec]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#9a7133]/35 hover:bg-white"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#9a7133]/[0.08] text-[#95692e]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.2 4.5 5.7 5.8c-.6.6-.8 1.5-.5 2.3a16.8 16.8 0 0 0 10.7 10.7c.8.3 1.7.1 2.3-.5l1.3-1.5c.4-.5.4-1.2 0-1.7l-2.2-2.2c-.4-.4-1-.5-1.5-.2l-1.5.8a11.8 11.8 0 0 1-3.9-3.9l.8-1.5c.3-.5.2-1.1-.2-1.5L8.9 4.5c-.5-.4-1.2-.4-1.7 0Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-[#a78b68] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#9b733e]">
                  फोन
                </span>

                <span className="mt-1 block text-sm text-[#594c3e]">
                  {business.phone}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${business.email}`}
                className="group border border-[#4b1723]/[0.08] bg-[#faf5ec]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#9a7133]/35 hover:bg-white"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#9a7133]/[0.08] text-[#95692e]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect
                        x="3.5"
                        y="5"
                        width="17"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <path
                        d="m5 7 6.2 5.1a1.25 1.25 0 0 0 1.6 0L19 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <span className="text-[#a78b68] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#9b733e]">
                  ईमेल
                </span>

                <span className="mt-1 block break-all text-sm text-[#594c3e]">
                  {business.email}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${business.phoneDigits}`}
                target="_blank"
                rel="noreferrer"
                className="group border border-[#4b1723]/[0.08] bg-[#faf5ec]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/25 hover:bg-white sm:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/[0.08] text-[#25a95a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M8.7 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2 2.8 2.6l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.3.6-.2.8-.7 1.3-1.4 1.5-1.1.3-3-.5-4.5-1.9-1.4-1.3-2.3-3.1-2.1-4.3.1-.5.3-.9.6-1.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#9b733e]">
                      WhatsApp
                    </span>

                    <span className="mt-1 block text-sm text-[#594c3e]">
                      WhatsApp पर सीधे संपर्क करें
                    </span>
                  </span>

                  <span className="ml-auto text-[#95692e] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div data-footer-reveal>
            <p className="footer-heading">सेवाएँ</p>

            <nav className="space-y-3.5">
              <Link href="/puja" className="footer-link">
                पूजा एवं अनुष्ठान
              </Link>

              <Link href="/jyotish" className="footer-link">
                ज्योतिष सेवाएँ
              </Link>

              <Link href="/online-puja" className="footer-link">
                ऑनलाइन पूजा बुकिंग
              </Link>

              <Link href="/panchang-muhurat" className="footer-link">
                पंचांग एवं मुहूर्त
              </Link>

              <Link href="/gallery" className="footer-link">
                गैलरी
              </Link>

              <Link href="/contact" className="footer-link">
                संपर्क करें
              </Link>
            </nav>
          </div>

          {/* =================================================
              INFORMATION
          ================================================= */}

          <div data-footer-reveal>
            <p className="footer-heading">जानकारी</p>

            <nav className="space-y-3.5">
              <Link href="/about" className="footer-link">
                हमारे बारे में
              </Link>

              <Link href="/privacy-policy" className="footer-link">
                गोपनीयता नीति
              </Link>

              <Link href="/terms-and-conditions" className="footer-link">
                नियम एवं शर्तें
              </Link>

              <Link href="/disclaimer" className="footer-link">
                अस्वीकरण
              </Link>
            </nav>

            {/* Location */}
            <div className="mt-8 border-t border-[#4b1723]/10 pt-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-5 bg-[#9a7133]" />

                <p className="footer-heading !mb-0">
                  स्थान
                </p>
              </div>

              <p className="max-w-xs text-sm leading-7 text-[#776c60]">
                {business.address}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL DIVIDER
        ====================================================== */}

        <div
          data-footer-line
          className="relative h-px origin-left bg-[#4b1723]/10"
        >
          <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#9a7133]/25 bg-[#f3eadc] font-serif text-sm text-[#95692e]">
            ॐ
          </span>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          data-footer-reveal
          className="flex flex-col gap-3 py-6 text-[10px] text-[#7b7065] sm:text-[11px] md:flex-row md:items-center md:justify-between"
        >
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>

          <p className="text-[#8a7b6a]">
            उज्जैन · मध्य प्रदेश
          </p>

          <p>
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-[#8c622b]">
              Patrex Media
            </span>
          </p>
        </div>
      </div>

      {/* =====================================================
          LOCAL STYLES
      ====================================================== */}

      <style jsx>{`
        .footer-heading {
          margin-bottom: 20px;
          color: #96703d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.27em;
          text-transform: uppercase;
        }

        .footer-link {
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 9px;
          color: #6f655a;
          font-size: 14px;
          line-height: 1.5;
          transition:
            color 250ms ease,
            transform 250ms ease;
        }

        .footer-link::before {
          content: "";
          width: 0;
          height: 1px;
          background: #ad7a32;
          transition: width 250ms ease;
        }

        .footer-link:hover {
          color: #95692e;
          transform: translateX(3px);
        }

        .footer-link:hover::before {
          width: 16px;
        }

        @media (max-width: 640px) {
          .footer-link {
            font-size: 13px;
          }
        }
      `}</style>
    </footer>
  );
}