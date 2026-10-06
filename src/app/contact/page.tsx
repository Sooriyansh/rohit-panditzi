import type { Metadata } from "next";
import { business } from "@/data/business";
import Link from "next/link";

export const metadata: Metadata = {
  title: "संपर्क",
  description:
    "श्री पारदेश्वर महादेव मंदिर, राम घाट मार्ग, उज्जैन से संपर्क करें।",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-[#F7F1E6] text-[#241B17]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-b border-[#641C29]/10 bg-[#E9DDC9]">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-44 -top-44 h-[560px] w-[560px] rounded-full bg-[#B56A1F]/[0.07] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-52 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[#641C29]/[0.07] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,27,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(36,27,23,1) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />

        {/* Om watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 select-none font-serif text-[20rem] leading-none text-[#641C29]/[0.055] sm:text-[27rem] lg:text-[34rem]"
        >
          ॐ
        </div>

        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-8 h-[600px] w-[600px] rounded-full border border-[#B9965A]/30"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-32 h-[420px] w-[420px] rounded-full border border-dashed border-[#8E4B2F]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-170px] left-[-120px] h-[420px] w-[420px] rounded-full border border-[#641C29]/10"
        />

        <div className="container relative z-10 py-24 md:py-32 lg:py-36">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-14 bg-[#B56A1F]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#754A29] sm:text-[11px]">
                संपर्क करें
              </span>

              <span className="h-px w-14 bg-[#B56A1F]/50" />
            </div>

            <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#241B17]">
              पूजा एवं
              <span className="mt-3 block text-[#8E4B2F]">
                ज्योतिष सेवाएँ
              </span>
            </h1>

            <div className="mt-10 max-w-2xl border-l-2 border-[#B56A1F]/45 pl-6 md:pl-8">
              <p className="text-[17px] leading-8 text-[#55463D] md:text-[20px] md:leading-9">
                पूजा, वैदिक अनुष्ठान एवं ज्योतिष सेवाओं से संबंधित
                जानकारी, समय और बुकिंग के लिए सीधे संपर्क करें।
              </p>
            </div>

            {/* Hero trust line */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-[#641C29]/15 pt-7">
              <div>
                <p className="font-serif text-2xl text-[#641C29]">
                  उज्जैन
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                  आध्यात्मिक नगर
                </p>
              </div>

              <span className="h-9 w-px bg-[#641C29]/15" />

              <div>
                <p className="font-serif text-2xl text-[#641C29]">
                  वैदिक
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                  परंपरा
                </p>
              </div>

              <span className="h-9 w-px bg-[#641C29]/15" />

              <div>
                <p className="font-serif text-2xl text-[#9A581D]">
                  व्यक्तिगत
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#765E50]">
                  मार्गदर्शन
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-6 left-0 right-0 hidden md:block">
          <div className="container flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#765E50]">
              Ujjain · Madhya Pradesh
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#765E50]">
              पूजा · अनुष्ठान · ज्योतिष
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F7F1E6] py-20 md:py-28 lg:py-36">
        {/* Background rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B9965A]/[0.08]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#641C29]/[0.035]"
        />

        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* =====================================================
                MAIN CONTACT CARD
            ====================================================== */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#641C29]/12 bg-[#E8D7BE] p-7 shadow-[0_35px_100px_rgba(65,38,24,0.12)] transition-all duration-500 hover:shadow-[0_45px_120px_rgba(65,38,24,0.17)] sm:p-10 lg:p-14">
              {/* Gold top line */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#B9965A]" />

              {/* Om watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 select-none font-serif text-[15rem] leading-none text-[#641C29]/[0.045] transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-2 md:text-[19rem]"
              >
                ॐ
              </div>

              <div className="relative z-10">
                {/* Section label */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-11 bg-[#B56A1F]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#80501F]">
                    सीधे संपर्क
                  </span>
                </div>

                <h2 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#351B20] sm:text-5xl md:text-6xl">
                  {business.name}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#624D43] md:text-base md:leading-8">
                  पूजा, अनुष्ठान और ज्योतिष सेवाओं के लिए आवश्यक
                  जानकारी प्राप्त करने हेतु नीचे दिए गए माध्यमों से
                  संपर्क करें।
                </p>

                {/* Contact details */}
                <div className="mt-10 space-y-3">
                  {/* Address */}
                  <div className="flex items-start gap-4 rounded-2xl border border-[#641C29]/10 bg-[#F7F1E6]/55 p-5 transition-all duration-300 hover:border-[#B9965A]/35 hover:bg-[#FFF9EF]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B9965A]/40 bg-[#F7F1E6] text-[#641C29]">
                      <span className="text-lg">⌖</span>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#80501F]">
                        स्थान
                      </p>

                      <p className="mt-1.5 text-sm leading-6 text-[#4F4039]">
                        {business.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+919329500668"
                    className="group/contact flex items-center gap-4 rounded-2xl border border-[#641C29]/10 bg-[#F7F1E6]/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9965A]/35 hover:bg-[#FFF9EF]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B9965A]/40 bg-[#F7F1E6] text-[#641C29] transition-colors group-hover/contact:bg-[#641C29] group-hover/contact:text-[#FFF8EE]">
                      <span className="text-base">☎</span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#80501F]">
                        फोन
                      </p>

                      <p className="mt-1.5 truncate text-sm font-semibold text-[#4F3537]">
                        {business.phone}
                      </p>
                    </div>

                    <span className="ml-auto text-lg text-[#9A581D] transition-transform duration-300 group-hover/contact:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${business.email}`}
                    className="group/contact flex items-center gap-4 rounded-2xl border border-[#641C29]/10 bg-[#F7F1E6]/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9965A]/35 hover:bg-[#FFF9EF]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B9965A]/40 bg-[#F7F1E6] text-[#641C29] transition-colors group-hover/contact:bg-[#641C29] group-hover/contact:text-[#FFF8EE]">
                      <span className="text-base">✉</span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#80501F]">
                        ईमेल
                      </p>

                      <p className="mt-1.5 truncate text-sm font-semibold text-[#4F3537]">
                        {business.email}
                      </p>
                    </div>

                    <span className="ml-auto text-lg text-[#9A581D] transition-transform duration-300 group-hover/contact:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* CTA buttons */}
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <a
                    href="tel:+919329500668"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-[#641C29] px-5 py-4 text-sm font-bold text-[#FFF8EE] shadow-[0_16px_40px_rgba(76,22,35,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4D141F] hover:shadow-[0_22px_55px_rgba(76,22,35,0.25)]"
                  >
                    <span>📞</span>
                    <span>कॉल करें</span>
                  </a>

                  <a
                    href="https://wa.me/919329500668"
                    target="_blank"
                    rel="noreferrer"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-[#641C29]/15 bg-[#F7F1E6]/70 px-5 py-4 text-sm font-bold text-[#641C29] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965A]/45 hover:bg-[#FFF9F0] hover:shadow-[0_15px_40px_rgba(70,40,25,0.08)]"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/online-puja"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-[#641C29]/15 bg-[#F7F1E6]/70 px-5 py-4 text-sm font-bold text-[#641C29] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965A]/45 hover:bg-[#FFF9F0] hover:shadow-[0_15px_40px_rgba(70,40,25,0.08)]"
                  >
                    <span>🕉️</span>
                    <span>पूजा बुक करें</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* =====================================================
                LOCATION CARD
            ====================================================== */}
            <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[2.5rem] bg-[#241417] p-8 text-[#FFF8EE] shadow-[0_35px_100px_rgba(36,20,23,0.18)] sm:p-10 lg:p-12">
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-[#B9965A]/20"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 top-24 h-[280px] w-[280px] rounded-full border border-[#B9965A]/[0.1]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full border border-[#B9965A]/[0.12]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B56A1F]/[0.05] blur-[100px]"
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-11 bg-[#D5B273]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D8B77C]">
                    उज्जैन में सेवाएँ
                  </span>
                </div>

                <div className="mt-9">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D5B273]/30 bg-[#D5B273]/[0.07]">
                    <span className="font-serif text-3xl text-[#D5B273]">
                      ॐ
                    </span>
                  </div>

                  <h2 className="mt-8 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                    राम घाट मार्ग,
                    <span className="mt-1 block text-[#D5B273]">
                      उज्जैन
                    </span>
                  </h2>

                  <p className="mt-7 max-w-md text-sm leading-7 text-[#E9D9C3]/70 md:text-base md:leading-8">
                    राम घाट मार्ग स्थित मंदिर से संबंधित पूजा,
                    अनुष्ठान एवं ज्योतिष सेवाओं के बारे में
                    संपर्क कर जानकारी लें।
                  </p>
                </div>

                {/* Location detail */}
                <div className="mt-auto pt-12">
                  <div className="border-t border-[#D5B273]/15 pt-7">
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D8B77C]">
                          Location
                        </p>

                        <p className="mt-2 font-serif text-lg text-[#FFF8EE]">
                          Shri Pardeshwar Mahadev Mandir
                        </p>

                        <p className="mt-1 text-xs text-[#E9D9C3]/55">
                          Ram Ghat Marg · Ujjain
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5B273]/20 bg-[#D5B273]/[0.06] sm:flex">
                        <span className="text-xl text-[#D5B273]">⌖</span>
                      </div>
                    </div>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://maps.google.com/?q=Shri+Pardeshwar+Mahadev+Mandir+Ram+Ghat+Marg+Ujjain"
                      className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#F1D39A] transition-colors duration-300 hover:text-[#FFF8EE]"
                    >
                      मानचित्र में स्थान देखें
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM TRUST STRIP
          ====================================================== */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[#641C29]/10 bg-[#E9DDC9]/60 p-6">
              <p className="font-serif text-3xl text-[#641C29]">01</p>
              <div className="mt-4 h-px w-8 bg-[#B56A1F]" />
              <p className="mt-4 text-sm font-bold text-[#4F3537]">
                पूजा एवं अनुष्ठान
              </p>
              <p className="mt-2 text-xs leading-5 text-[#765F57]">
                वैदिक परंपरा के अनुसार जानकारी एवं मार्गदर्शन
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#641C29]/10 bg-[#E9DDC9]/60 p-6">
              <p className="font-serif text-3xl text-[#641C29]">02</p>
              <div className="mt-4 h-px w-8 bg-[#B56A1F]" />
              <p className="mt-4 text-sm font-bold text-[#4F3537]">
                ज्योतिष परामर्श
              </p>
              <p className="mt-2 text-xs leading-5 text-[#765F57]">
                कुंडली एवं वैदिक ज्योतिष संबंधी परामर्श
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#641C29]/10 bg-[#E9DDC9]/60 p-6">
              <p className="font-serif text-3xl text-[#641C29]">03</p>
              <div className="mt-4 h-px w-8 bg-[#B56A1F]" />
              <p className="mt-4 text-sm font-bold text-[#4F3537]">
                उज्जैन से संपर्क
              </p>
              <p className="mt-2 text-xs leading-5 text-[#765F57]">
                पूजा एवं सेवाओं की उपलब्धता के लिए सीधे संपर्क करें
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#512815] py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-48 h-[620px] w-[620px] rounded-full border border-[#D5B273]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -bottom-52 h-[560px] w-[560px] rounded-full border border-[#D5B273]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B56A1F]/10 blur-[120px]"
        />

        <div className="container relative z-10 text-center">
          <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D8B77C] sm:text-[10px]">
            वैदिक मार्गदर्शन
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.045em] text-[#FFF8EE]">
            आपकी आवश्यकता,
            <span className="block text-[#D5B273]">
              हमारा मार्गदर्शन
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#F0DDC7]/75 md:text-lg md:leading-9">
            पूजा, अनुष्ठान या ज्योतिष सेवा से संबंधित जानकारी
            प्राप्त करने के लिए आज ही संपर्क करें।
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919329500668"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F7EBDD] px-9 py-4 text-sm font-bold text-[#581927] shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF9F0] hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]"
            >
              📞 अभी कॉल करें
            </a>

            <Link
              href="/online-puja"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#F1D39A]/25 bg-white/[0.04] px-9 py-4 text-sm font-bold text-[#F7EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#F1D39A]/45 hover:bg-white/[0.08]"
            >
              पूजा बुक करें
              <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#D5B273]/15" />
            <span className="font-serif text-xl text-[#D5B273]/80">
              ॐ
            </span>
            <span className="h-px flex-1 bg-[#D5B273]/15" />
          </div>
        </div>
      </section>
    </main>
  );
}
