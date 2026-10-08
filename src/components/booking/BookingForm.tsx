
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { allServices } from "@/data/services";
import gsap from "gsap";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[#ddcdb9] bg-white/80 px-4 py-3 text-sm text-[#32130f] outline-none transition placeholder:text-[#a09083] focus:border-[#b68a49] focus:ring-2 focus:ring-[#b68a49]/20";

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setBusy(true);
    setStatus("");

    const body = Object.fromEntries(
      new FormData(form).entries(),
    );

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "अनुरोध भेजा नहीं जा सका।",
        );
      }

      setStatus(
        "आपका अनुरोध प्राप्त हुआ। विवरण की पुष्टि के लिए आपसे संपर्क किया जाएगा।",
      );

      form.reset();
    } catch (err) {
      setStatus(
        err instanceof Error
          ? err.message
          : "अनुरोध भेजा नहीं जा सका। कृपया फोन से संपर्क करें।",
      );
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    const form = formRef.current;

    if (!form) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".booking-header",
          ".booking-field",
          ".booking-submit-area",
        ],
        {
          opacity: 0,
          y: reducedMotion ? 0 : 18,
        },
      );

      if (reducedMotion) {
        gsap.set(
          [
            ".booking-header",
            ".booking-field",
            ".booking-submit-area",
          ],
          {
            opacity: 1,
            y: 0,
          },
        );

        return;
      }

      gsap
        .timeline({
          defaults: {
            ease: "power3.out",
          },
        })
        .to(".booking-header", {
          opacity: 1,
          y: 0,
          duration: 0.6,
        })
        .to(
          ".booking-field",
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.055,
          },
          "-=0.3",
        )
        .to(
          ".booking-submit-area",
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.25",
        );
    }, form);

    return () => ctx.revert();
  }, []);

  return (
    <form
      ref={formRef}
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#d9c9b6]
        bg-[#fffaf3]
        shadow-[0_30px_90px_rgba(56,29,20,0.10)]
      "
      onSubmit={submit}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-[#b68a49]/[0.055]
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-32
            h-80
            w-80
            rounded-full
            bg-[#8f2c25]/[0.035]
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.20]
            [background-image:linear-gradient(to_right,rgba(93,62,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,62,42,0.035)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          booking-header
          relative
          border-b
          border-[#e2d7c8]
          px-6
          py-7
          sm:px-9
          sm:py-8
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-[#d6bf9f]
              bg-[#f8efe2]
              text-[#8f2c25]
            "
          >
            <Sparkles size={19} strokeWidth={1.4} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-7 bg-[#b68a49]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#92724b]">
                BOOKING REQUEST
              </span>
            </div>

            <h2 className="mt-2 font-serif text-2xl font-medium tracking-[-0.025em] text-[#32130f] sm:text-3xl">
              अपनी सेवा की जानकारी दें
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#75665c]">
              नीचे दी गई जानकारी साझा करें। आपकी आवश्यकता और
              सेवा की उपलब्धता के अनुसार आगे आपसे संपर्क किया जाएगा।
            </p>
          </div>
        </div>

        {/* Header ornament */}
        <div
          aria-hidden="true"
          className="
            absolute
            right-7
            top-7
            hidden
            h-14
            w-14
            rounded-full
            border
            border-[#b68a49]/20
            sm:block
          "
        >
          <div className="absolute inset-2 rounded-full border border-[#b68a49]/10" />
        </div>
      </div>

      {/* =====================================================
          FORM BODY
      ====================================================== */}

      <div className="relative px-6 py-7 sm:px-9 sm:py-9">
        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
          {/* NAME */}
          <div className="booking-field">
            <PremiumField
              icon={<UserRound size={15} strokeWidth={1.5} />}
              label="नाम"
              required
              htmlFor="name"
            >
              <input
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={80}
                placeholder="अपना पूरा नाम"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* PHONE */}
          <div className="booking-field">
            <PremiumField
              icon={<Phone size={15} strokeWidth={1.5} />}
              label="मोबाइल नंबर"
              required
              htmlFor="phone"
            >
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                pattern="[+0-9 ()-]{10,18}"
                placeholder="+91 XXXXX XXXXX"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* EMAIL */}
          <div className="booking-field">
            <PremiumField
              icon={<Mail size={15} strokeWidth={1.5} />}
              label="ईमेल"
              htmlFor="email"
            >
              <input
                id="email"
                name="email"
                type="email"
                maxLength={254}
                placeholder="आपका ईमेल"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* GOTRA */}
          <div className="booking-field">
            <PremiumField
              icon={<Sparkles size={15} strokeWidth={1.5} />}
              label="गोत्र"
              htmlFor="gotra"
            >
              <input
                id="gotra"
                name="gotra"
                maxLength={80}
                placeholder="यदि ज्ञात हो"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* SERVICE */}
          <div className="booking-field">
            <PremiumField
              icon={<Sparkles size={15} strokeWidth={1.5} />}
              label="सेवा का चयन"
              required
              htmlFor="puja"
            >
              <div className="relative">
                <select
                  id="puja"
                  name="puja"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-11`}
                >
                  <option value="" disabled>
                    सेवा चुनें
                  </option>

                  {allServices.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.5}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#92724b]
                  "
                />
              </div>
            </PremiumField>
          </div>

          {/* DATE */}
          <div className="booking-field">
            <PremiumField
              icon={<CalendarDays size={15} strokeWidth={1.5} />}
              label="पसंदीदा तारीख"
              htmlFor="preferredDate"
            >
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* CITY */}
          <div className="booking-field">
            <PremiumField
              icon={<MapPin size={15} strokeWidth={1.5} />}
              label="शहर"
              htmlFor="city"
            >
              <input
                id="city"
                name="city"
                maxLength={80}
                placeholder="आपका शहर"
                className={inputClass}
              />
            </PremiumField>
          </div>

          {/* MESSAGE */}
          <div className="booking-field sm:col-span-2">
            <PremiumField
              icon={<MessageCircle size={15} strokeWidth={1.5} />}
              label="विशेष जानकारी"
              htmlFor="message"
            >
              <textarea
                id="message"
                name="message"
                maxLength={1000}
                placeholder="पूजा, अनुष्ठान या अपनी आवश्यकता के बारे में कुछ बताएं..."
                className={`${inputClass} min-h-[145px] resize-y py-4`}
              />
            </PremiumField>

            <div className="mt-2 flex justify-end">
              <span className="text-[9px] tracking-[0.08em] text-[#a09083]">
                अधिकतम 1000 अक्षर
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATUS
        ====================================================== */}

        {status && (
          <div
            className={`
              mt-7
              overflow-hidden
              rounded-2xl
              border
              ${
                status.includes("प्राप्त हुआ")
                  ? "border-[#cdbb9f] bg-[#f5eee3]"
                  : "border-[#d9bbb5] bg-[#f8eeee]"
              }
            `}
          >
            <div className="flex items-start gap-3 px-5 py-4">
              <div
                className={`
                  mt-0.5
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  ${
                    status.includes("प्राप्त हुआ")
                      ? "bg-[#8f2c25] text-white"
                      : "bg-[#6f2924] text-white"
                  }
                `}
              >
                {status.includes("प्राप्त हुआ") ? (
                  <Check size={15} strokeWidth={2} />
                ) : (
                  <MessageCircle size={15} strokeWidth={1.5} />
                )}
              </div>

              <p
                className="text-sm leading-6 text-[#5f5149]"
                role="status"
              >
                {status}
              </p>
            </div>
          </div>
        )}

        {/* =====================================================
            SUBMIT
        ====================================================== */}

        <div className="booking-submit-area mt-8">
          <button
            className="
              group
              relative
              flex
              w-full
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-xl
              bg-[#8f2c25]
              px-6
              py-4
              text-sm
              font-semibold
              tracking-[0.01em]
              text-white
              shadow-[0_12px_30px_rgba(100,35,29,0.16)]
              transition-all
              duration-300
              hover:bg-[#74231e]
              hover:shadow-[0_18px_40px_rgba(100,35,29,0.22)]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
            disabled={busy}
          >
            {/* Shine */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                -left-1/3
                w-1/3
                skew-x-[-20deg]
                bg-white/[0.12]
                transition-transform
                duration-700
                group-hover:translate-x-[400%]
              "
            />

            <span className="relative z-10">
              {busy
                ? "भेजा जा रहा है…"
                : "बुकिंग अनुरोध भेजें"}
            </span>

            {!busy && (
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronDown
                  size={14}
                  strokeWidth={1.6}
                  className="-rotate-90"
                />
              </span>
            )}
          </button>

          <div className="mt-5 flex items-start gap-3">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#d4c2aa]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b68a49]" />
            </div>

            <small className="text-xs leading-5 text-[#85756a]">
              तारीख और सेवा की उपलब्धता संपर्क के बाद की जाएगी।
            </small>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BRAND STRIP
      ====================================================== */}

      <div
        className="
          relative
          border-t
          border-[#e2d7c8]
          bg-[#f8f1e7]
          px-6
          py-4
          sm:px-9
        "
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#92724b]">
            UJJAIN • VEDIC • TRADITION
          </span>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-px w-8 bg-[#cdbb9f]" />
            <span className="text-[8px] tracking-[0.2em] text-[#a08d7d]">
              श्रद्धा से सेवा
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

/* ============================================================
   FIELD COMPONENT
============================================================ */

function PremiumField({
  icon,
  label,
  required,
  htmlFor,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <label
        htmlFor={htmlFor}
        className="
          mb-2.5
          flex
          items-center
          gap-2
          text-[11px]
          font-semibold
          tracking-[0.01em]
          text-[#4d3931]
        "
      >
        <span
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-lg
            border
            border-[#ddcdb9]
            bg-[#f8f0e4]
            text-[#8f2c25]
            transition-all
            duration-300
            group-focus-within:border-[#b68a49]
            group-focus-within:bg-[#f3e6d5]
          "
        >
          {icon}
        </span>

        <span>
          {label}

          {required && (
            <span className="ml-1 text-[#8f2c25]">*</span>
          )}
        </span>
      </label>

      {children}
    </div>
  );
}
