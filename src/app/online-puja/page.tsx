
import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "ऑनलाइन पूजा बुकिंग",
  description:
    "उज्जैन में पूजा और वैदिक अनुष्ठान के लिए बुकिंग अनुरोध भेजें।",
  alternates: { canonical: "/online-puja" },
};

export default function OnlinePuja() {
  return (
    <main className="relative overflow-hidden bg-[#f8f3ea] text-[#32130f]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden border-b border-[#ded2c2]">
        {/* Background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              inset-0
              opacity-[0.22]
              [background-image:linear-gradient(to_right,rgba(93,62,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,62,42,0.045)_1px,transparent_1px)]
              [background-size:100px_100px]
            "
          />

          <div className="absolute -left-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#b98c4d]/[0.08] blur-[110px]" />

          <div className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#8f2c25]/[0.055] blur-[120px]" />

          {/* Decorative circles */}
          <div className="absolute right-[8%] top-1/2 hidden h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-[#b99a5b]/15 lg:block" />

          <div className="absolute right-[11%] top-1/2 hidden h-[18rem] w-[18rem] -translate-y-1/2 rounded-full border border-[#b99a5b]/10 lg:block" />

          <div className="absolute right-[18%] top-[30%] hidden font-serif text-[14rem] leading-none text-[#8f2c25]/[0.025] lg:block">
            ॐ
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-24 sm:px-10 lg:min-h-[560px] lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#b68a49]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#8f2c25]">
                बुकिंग अनुरोध
              </span>

              <span className="h-1 w-1 rounded-full bg-[#b68a49]" />
            </div>

            {/* Heading */}
            <h1 className="mt-8 font-serif text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-[#30120e] sm:text-6xl lg:text-[7rem]">
              ऑनलाइन पूजा
              <br />
              <span className="text-[#8f2c25]">बुकिंग</span>
            </h1>

            <div className="mt-10 h-px w-28 bg-[#aa7d43] sm:w-48" />

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#6d6057] sm:text-base sm:leading-8">
              अपनी पूजा या वैदिक अनुष्ठान से संबंधित जानकारी साझा करें।
              अनुरोध प्राप्त होने के बाद तारीख, सेवा और उपलब्धता के संबंध
              में आपसे संपर्क किया जाएगा।
            </p>

            {/* Hero information */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4c2a6] bg-[#fffaf1] font-serif text-lg text-[#8f2c25]">
                  ॐ
                </span>

                <div>
                  <span className="block text-[8px] font-bold uppercase tracking-[0.28em] text-[#94734c]">
                    UJJAIN
                  </span>

                  <span className="mt-1 block text-xs text-[#827166]">
                    वैदिक सेवा
                  </span>
                </div>
              </div>

              <span className="hidden h-8 w-px bg-[#d8cbbb] sm:block" />

              <div>
                <span className="block text-[8px] font-bold uppercase tracking-[0.28em] text-[#94734c]">
                  PROCESS
                </span>

                <span className="mt-1 block text-xs text-[#827166]">
                  अनुरोध → संपर्क → पुष्टि
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="absolute bottom-0 left-1/2 h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b99a5b]/40 to-transparent" />
      </section>

      {/* =====================================================
          BOOKING AREA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#fbf8f1] py-20 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#b98c4d]/[0.035] blur-[100px]" />

          <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#8f2c25]/[0.025] blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid items-start gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20 xl:grid-cols-[0.38fr_1fr] xl:gap-28">
            {/* =================================================
                LEFT INFORMATION
            ================================================== */}

            <aside className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#b68a49]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#8f2c25]">
                  प्रक्रिया
                </span>
              </div>

              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#32130f] sm:text-4xl">
                पूजा के लिए
                <br />
                <span className="text-[#8f2c25]">
                  अनुरोध भेजें।
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#75665d]">
                नीचे अपनी आवश्यक जानकारी भरें। यह फॉर्म आपकी बुकिंग
                का प्रारंभिक अनुरोध भेजने के लिए है।
              </p>

              {/* Process */}
              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8f2c25] text-[10px] font-semibold text-white">
                    01
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#493029]">
                      जानकारी साझा करें
                    </p>

                    <p className="mt-1 text-xs leading-6 text-[#87766c]">
                      पूजा और संपर्क से जुड़ी आवश्यक जानकारी भरें।
                    </p>
                  </div>
                </div>

                <div className="ml-4 h-5 w-px bg-[#d6c6b2]" />

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cdbb9f] bg-[#fffaf1] text-[10px] font-semibold text-[#8f2c25]">
                    02
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#493029]">
                      संपर्क और चर्चा
                    </p>

                    <p className="mt-1 text-xs leading-6 text-[#87766c]">
                      उपलब्धता और आपकी आवश्यकता पर चर्चा की जाएगी।
                    </p>
                  </div>
                </div>

                <div className="ml-4 h-5 w-px bg-[#d6c6b2]" />

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cdbb9f] bg-[#fffaf1] text-[10px] font-semibold text-[#8f2c25]">
                    03
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#493029]">
                      बुकिंग की पुष्टि
                    </p>

                    <p className="mt-1 text-xs leading-6 text-[#87766c]">
                      तारीख और सेवा की अंतिम पुष्टि संपर्क के बाद होगी।
                    </p>
                  </div>
                </div>
              </div>

              {/* Important note */}
              <div className="mt-10 rounded-2xl border border-[#ded2c2] bg-[#f5eee4] p-5">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#a67843]" />

                  <p className="text-xs leading-6 text-[#78685d]">
                    फॉर्म भेजना केवल बुकिंग अनुरोध है। तारीख और सेवा
                    की उपलब्धता संपर्क के बाद तय होगी।
                  </p>
                </div>
              </div>
            </aside>

            {/* =================================================
                FORM
            ================================================== */}

            <div className="relative">
              {/* Outer frame */}
              <div className="absolute -inset-3 hidden rounded-[2rem] border border-[#b99a5b]/15 lg:block" />

              <div className="relative rounded-[1.75rem] border border-[#dcd0c0] bg-[#fffaf2] p-5 shadow-[0_30px_90px_rgba(64,37,25,0.08)] sm:p-8 lg:p-10 xl:p-12">
                {/* Form heading */}
                <div className="mb-8 border-b border-[#e1d7ca] pb-7 sm:mb-10 sm:pb-8">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#96754d]">
                        BOOKING REQUEST
                      </span>

                      <h2 className="mt-3 font-serif text-2xl text-[#3c211b] sm:text-3xl">
                        पूजा बुकिंग विवरण
                      </h2>
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#d4c1a4] bg-[#f8f0e4] sm:flex">
                      <span className="font-serif text-lg text-[#8f2c25]">
                        ॐ
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#7a6b61]">
                    कृपया सही जानकारी भरें ताकि आपसे संपर्क करते समय
                    आपकी आवश्यकता को बेहतर ढंग से समझा जा सके।
                  </p>
                </div>

                {/* Existing booking logic untouched */}
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM TRUST AREA
      ====================================================== */}

      <section className="border-t border-[#ded2c2] bg-[#f1e9de] px-6 py-14 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#b68a49]" />
            <span className="font-serif text-xl text-[#8f2c25]">
              ॐ
            </span>
            <span className="h-px w-12 bg-[#b68a49]" />
          </div>

          <p className="mt-5 font-serif text-xl text-[#4d3028] sm:text-2xl">
            श्रद्धा और परंपरा के साथ सेवा।
          </p>

          <p className="mt-2 text-xs leading-6 text-[#837267]">
            पूजा की तारीख और उपलब्धता संपर्क के बाद निर्धारित की जाएगी।
          </p>
        </div>
      </section>
    </main>
  );
}

