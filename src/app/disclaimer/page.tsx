import type { Metadata } from "next";
import { ShieldCheck, Sparkles, ArrowDown, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "अस्वीकरण",
  description:
    "धार्मिक अनुष्ठानों और ज्योतिषीय जानकारी के उपयोग का अस्वीकरण।",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f8f3e9] text-[#351416]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden border-b border-[#b99a5b]/20">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#9f2630]/[0.06] blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#b99a5b]/[0.09] blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #5c3527 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-6 py-24 sm:px-10 lg:min-h-[500px] lg:px-16 xl:px-20">
          <div className="w-full">
            {/* Top decorative line */}
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-16 bg-[#a88748]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#806b46]">
                महत्वपूर्ण सूचना
              </span>
            </div>

            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b99a5b]/35 bg-[#fffaf0]/70 shadow-sm">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#8f2730]"
                  />
                </span>

                <span className="text-xs tracking-[0.22em] text-[#806b46]">
                  DISCLAIMER
                </span>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-[#351416] sm:text-6xl lg:text-8xl">
                अस्वीकरण
              </h1>

              <div className="mt-9 flex items-center gap-4">
                <span className="h-px w-20 bg-[#a88748]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#a88748]" />
                <span className="h-px w-10 bg-[#a88748]/50" />
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#6f5a50] sm:text-lg">
                धार्मिक अनुष्ठानों एवं ज्योतिषीय जानकारी के उपयोग से संबंधित
                महत्वपूर्ण जानकारी और आवश्यक सावधानियाँ।
              </p>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#8c765f] sm:flex lg:right-16">
              <span>नीचे पढ़ें</span>
              <ArrowDown size={14} strokeWidth={1.4} />
            </div>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="absolute bottom-0 left-1/2 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b99a5b]/45 to-transparent" />
      </section>

      {/* =========================================================
          DISCLAIMER CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        {/* Background ornament */}
        <div className="pointer-events-none absolute right-[-90px] top-24 h-72 w-72 rounded-full border border-[#a88748]/10" />
        <div className="pointer-events-none absolute right-[-45px] top-[165px] h-44 w-44 rounded-full border border-[#a88748]/10" />

        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
          <div className="grid items-start gap-14 lg:grid-cols-[0.32fr_1fr] lg:gap-20">
            {/* =====================================================
                SIDE LABEL
            ===================================================== */}
            <aside className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#a88748]"
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806b46]">
                  जानकारी
                </span>
              </div>

              <div className="mt-5 h-px w-20 bg-[#a88748]/60" />

              <p className="mt-5 max-w-[220px] text-sm leading-7 text-[#8a7467]">
                कृपया किसी भी धार्मिक, ज्योतिषीय या व्यक्तिगत निर्णय से पहले
                आवश्यक पेशेवर सलाह अवश्य लें।
              </p>
            </aside>

            {/* =====================================================
                MAIN CONTENT CARD
            ===================================================== */}
            <article className="relative overflow-hidden rounded-[2rem] border border-[#b99a5b]/25 bg-[#fffaf1] shadow-[0_30px_90px_rgba(71,39,26,0.08)]">
              {/* Card inner frame */}
              <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-[#b99a5b]/10" />

              {/* Corner ornament */}
              <div className="absolute right-8 top-8 opacity-60">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a88748]" />
                  <span className="h-px w-12 bg-[#a88748]/40" />
                </div>
              </div>

              <div className="relative px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
                {/* Intro */}
                <div className="mb-12">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8f2730] text-[#fffaf1]">
                      <Check size={15} strokeWidth={2} />
                    </span>

                    <span className="text-xs font-semibold tracking-[0.18em] text-[#806b46]">
                      आवश्यक सूचना
                    </span>
                  </div>

                  <div className="h-px w-full bg-[#b99a5b]/15" />
                </div>

                {/* Paragraph 01 */}
                <div className="group relative pl-7 sm:pl-10">
                  <span className="absolute left-0 top-1 text-xs font-semibold tracking-[0.15em] text-[#a88748]">
                    01
                  </span>

                  <p className="max-w-3xl text-[17px] leading-[2] text-[#55433c] sm:text-[19px] sm:leading-[2.05]">
                    पूजा एवं अनुष्ठानों की जानकारी धार्मिक परंपराओं और
                    मान्यताओं का परिचय है। ज्योतिषीय जानकारी पारंपरिक दृष्टिकोण
                    प्रस्तुत करती है। ये किसी विशेष परिणाम की गारंटी नहीं देते
                    और चिकित्सा, कानूनी, वित्तीय या अन्य पेशेवर सलाह का विकल्प
                    नहीं हैं।
                  </p>
                </div>

                {/* Divider */}
                <div className="my-12 flex items-center gap-4">
                  <span className="h-px flex-1 bg-[#b99a5b]/15" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#a88748]" />
                  <span className="h-px w-16 bg-[#b99a5b]/15" />
                </div>

                {/* Paragraph 02 */}
                <div className="group relative pl-7 sm:pl-10">
                  <span className="absolute left-0 top-1 text-xs font-semibold tracking-[0.15em] text-[#a88748]">
                    02
                  </span>

                  <p className="max-w-3xl text-[17px] leading-[2] text-[#55433c] sm:text-[19px] sm:leading-[2.05]">
                    स्वास्थ्य संबंधी प्रश्नों में योग्य स्वास्थ्य पेशेवर,
                    वित्तीय विषयों में योग्य सलाहकार और कानूनी विषयों में वकील
                    से परामर्श लें।
                  </p>
                </div>

                {/* Professional advice notice */}
                <div className="mt-14 rounded-2xl border border-[#8f2730]/15 bg-[#8f2730]/[0.035] p-6 sm:p-7">
                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#8f2730]" />

                    <div>
                      <p className="text-sm font-semibold tracking-wide text-[#5d2025]">
                        पेशेवर सलाह का महत्व
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#806d63]">
                        धार्मिक और ज्योतिषीय जानकारी को व्यक्तिगत निर्णयों के
                        लिए पेशेवर चिकित्सा, कानूनी या वित्तीय सलाह का
                        प्रतिस्थापन नहीं माना जाना चाहिए।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom signature ornament */}
                <div className="mt-14 flex items-center justify-between border-t border-[#b99a5b]/15 pt-7">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#9a8371]">
                    धार्मिक एवं ज्योतिषीय जानकारी
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#a88748]/50" />
                    <span className="text-lg text-[#8f2730]">ॐ</span>
                    <span className="h-px w-8 bg-[#a88748]/50" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER ORNAMENT
      ========================================================= */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5">
          <span className="h-px w-20 bg-[#a88748]/30 sm:w-32" />
          <span className="text-xl text-[#8f2730]/70">ॐ</span>
          <span className="h-px w-20 bg-[#a88748]/30 sm:w-32" />
        </div>
      </div>
    </main>
  );
}

