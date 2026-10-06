import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, buildMetadata, defaultSeo, jsonLd, seoBusiness } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kaal Sarp Puja in Ujjain | Kaal Sarp Dosh Puja & Booking",
  description: defaultSeo.description,
  path: "/kaal-sarp-puja-ujjain",
  keywords: defaultSeo.keywords,
  type: "article",
});

const faqs = [
  {
    question: "Kaal Sarp Puja Ujjain me kaha hoti hai?",
    answer:
      "Is website par Shri Pardeshwar Mahadev Mandir, Ram Ghat Marg, Ujjain se sambandhit puja aur booking jankari di gayi hai. Availability aur vidhi ki pushti ke liye phone ya WhatsApp par sampark karein.",
  },
  {
    question: "Kaal Sarp Puja booking kaise karein?",
    answer:
      "Booking ke liye phone, WhatsApp ya contact page se apna naam, sampark number, tithi aur puja se judi basic jankari bhej sakte hain.",
  },
  {
    question: "Kaal Sarp Puja ka muhurat kaise pata chalega?",
    answer:
      "Muhurat tithi, panchang aur vyakti ki paristhiti ke anusaar bataya ja sakta hai. Isliye final muhurat ke liye seedha sampark karna uchit hai.",
  },
  {
    question: "Puja ke liye kya samagri chahiye?",
    answer:
      "Samagri puja vidhi aur sankalp ke anusaar badal sakti hai. Booking ke samay avashyak samagri aur taiyari ki jankari confirm kar len.",
  },
];

export default function KaalSarpPujaUjjainPage() {
  const pageUrl = absoluteUrl("/kaal-sarp-puja-ujjain");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kaal Sarp Puja in Ujjain",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        name: defaultSeo.title,
        url: pageUrl,
        description: defaultSeo.description,
        inLanguage: "hi-IN",
      },
    ],
  };

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <main className="bg-[#faf7f0] text-[#24100d]">
        <section className="border-b border-[#641c29]/10 bg-[#f2e9db]">
          <div className="container py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8d672f]">
                Ujjain · Ram Ghat Marg
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-tight text-[#4b1723] md:text-7xl">
                Kaal Sarp Puja in Ujjain
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e534b]">
                Ujjain me Kaal Sarp Dosh Puja, puja vidhi, muhurat, samagri aur booking se judi saaf jankari. Puja aur anushthan ki final vidhi tithi, sankalp aur parampara ke anusaar confirm ki jaati hai.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`tel:${seoBusiness.tel}`}
                  className="rounded-full bg-[#641c29] px-7 py-4 text-sm font-bold text-[#fff9ef]"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919329500668"
                  className="rounded-full border border-[#641c29]/20 bg-white/50 px-7 py-4 text-sm font-bold text-[#641c29]"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#641c29]/20 bg-white/50 px-7 py-4 text-sm font-bold text-[#641c29]"
                >
                  Booking Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-24">
          <article className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">कालसर्प दोष क्या है?</h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                कालसर्प दोष ज्योतिषीय मान्यताओं से जुड़ा विषय है. इसकी व्याख्या जन्म कुंडली और ग्रह स्थिति के आधार पर की जाती है. इसे किसी निश्चित परिणाम की गारंटी नहीं माना जाना चाहिए.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">Kaal Sarp Puja क्या है?</h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                Kaal Sarp Puja ek Vedic puja-anushthan hai jo paramparik vidhi, sankalp aur mantra uchcharan ke saath ki jaati hai. Vidhi aur samay vyakti ki avashyakta aur panchang ke anusaar alag ho sakte hain.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">
                उज्जैन में कालसर्प पूजा क्यों की जाती है?
              </h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                Ujjain Madhya Pradesh ka prasiddh dharmik nagar hai. Ram Ghat Marg aur Mahakaleshwar kshetra se judi dharmik parampara ke karan log yahan Vedic puja aur anushthan ki jankari ke liye sampark karte hain.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">Kaal Sarp Puja की विधि</h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                Samanya roop se puja me sankalp, dev avahan, mantra uchcharan, pujan, arpan aur nirdharit paramparik vidhi shamil ho sakti hai. Exact vidhi booking aur paramarsh ke samay confirm ki jaati hai.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">
                Kaal Sarp Puja के लिए आवश्यक सामग्री
              </h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                Puja samagri anushthan ki vidhi ke anusaar alag ho sakti hai. Booking se pehle samagri, taiyari, tithi aur samay ki jankari phone ya WhatsApp par confirm karna behtar hai.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">Kaal Sarp Puja Muhurat</h2>
              <p className="mt-4 leading-8 text-[#5e534b]">
                Muhurat panchang, tithi aur vyakti ki paristhiti ke anusaar dekha ja sakta hai. Website par fixed muhurat ya guarantee claim nahi ki gayi hai.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#4b1723]">Frequently Asked Questions</h2>
              <div className="mt-6 divide-y divide-[#641c29]/10 rounded-2xl border border-[#641c29]/10 bg-white/55">
                {faqs.map((faq) => (
                  <details key={faq.question} className="p-6">
                    <summary className="cursor-pointer font-semibold text-[#4b1723]">
                      {faq.question}
                    </summary>
                    <p className="mt-3 leading-7 text-[#5e534b]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-[#641c29]/10 bg-[#f5eee3] p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl text-[#4b1723]">Contact & Location</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#5e534b]">
              <p>
                {seoBusiness.name}
                <br />
                Shri Pardeshwar Mahadev Mandir,
                <br />
                Ram Ghat Marg, Ujjain,
                <br />
                Madhya Pradesh 456006, India
              </p>
              <p>Phone: {seoBusiness.phone}</p>
              <p>Email: {seoBusiness.email}</p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#641c29] px-6 py-3 text-sm font-bold text-[#fff9ef]"
            >
              Contact for Booking
            </Link>
          </aside>
        </section>
      </main>
    </>
  );
}
