"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "पूजा की तारीख और समय कैसे तय होगा?",
    answer:
      "आप अपनी पसंदीदा तारीख बुकिंग अनुरोध में लिख सकते हैं। उपलब्धता, तिथि और मुहूर्त की पुष्टि संपर्क के बाद की जाएगी।",
  },
  {
    question: "क्या ऑनलाइन पूजा बुक की जा सकती है?",
    answer:
      "हाँ, वेबसाइट पर बुकिंग अनुरोध भेजा जा सकता है। सेवा और व्यवस्था की पुष्टि के लिए WhatsApp या फोन पर संपर्क किया जाएगा।",
  },
  {
    question: "क्या पूजा से निश्चित परिणाम की गारंटी है?",
    answer:
      "धार्मिक और ज्योतिषीय सेवाएँ परंपरा और आस्था पर आधारित हैं। किसी विशेष परिणाम की गारंटी या दावा नहीं किया जाता।",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const header = section.querySelector(".faq-header");
      const cards = section.querySelectorAll(".faq-card");

      if (prefersReducedMotion) {
        gsap.set([header, cards], {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.set(header, {
        opacity: 0,
        y: 24,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 30,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .to(header, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    answerRefs.current.forEach((answer, index) => {
      if (!answer) return;

      const icon = iconRefs.current[index];
      const isOpen = openIndex === index;

      if (isOpen) {
        const height = answer.scrollHeight;

        gsap.killTweensOf(answer);

        gsap.fromTo(
          answer,
          {
            height: 0,
            opacity: 0,
          },
          {
            height,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(answer, { height: "auto" });
            },
          }
        );

        if (icon) {
          gsap.to(icon, {
            rotate: 45,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        gsap.killTweensOf(answer);

        gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });

        if (icon) {
          gsap.to(icon, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf7f1] py-20 sm:py-24 lg:py-28"
    >
      {/* Very subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b58a3a]/30 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="faq-header mb-12 text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#b58a3a]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a742f]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-[#b58a3a]" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight text-[#3a1718] sm:text-4xl lg:text-5xl">
            आपके मन के हर प्रश्न का उत्तर
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6d5b55] sm:text-base">
            पूजा, अनुष्ठान और ज्योतिषीय सेवाओं से जुड़ी सामान्य जानकारी यहाँ
            सरल रूप में दी गई है।
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`faq-card overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#b58a3a]/45 shadow-[0_16px_45px_rgba(74,35,25,0.08)]"
                    : "border-[#e8dfd2] shadow-[0_8px_25px_rgba(74,35,25,0.04)] hover:border-[#b58a3a]/30"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  {/* Number */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#4b1f20] text-[#f7df9a]"
                        : "bg-[#f5eee3] text-[#8f6a2f]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 pr-2 font-serif text-base font-medium leading-6 transition-colors duration-300 sm:text-lg ${
                      isOpen ? "text-[#4b1f20]" : "text-[#382122]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Plus */}
                  <span
                    ref={(element) => {
                      iconRefs.current[index] = element;
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#b58a3a] bg-[#4b1f20] text-[#f7df9a]"
                        : "border-[#ded3c5] bg-[#faf7f1] text-[#6f4d25]"
                    }`}
                  >
                    <Plus size={18} strokeWidth={1.8} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  ref={(element) => {
                    answerRefs.current[index] = element;
                  }}
                  role="region"
                  aria-hidden={!isOpen}
                  className="h-0 overflow-hidden opacity-0"
                >
                  <div className="border-t border-[#eee6da] px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                    <div className="pl-[52px] sm:pl-[52px]">
                      <p className="max-w-3xl text-sm leading-7 text-[#6c5b55] sm:text-[15px] sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small footer note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#89766e]">
            अन्य किसी जानकारी के लिए सीधे संपर्क करें।
          </p>
        </div>
      </div>
    </section>
  );
}