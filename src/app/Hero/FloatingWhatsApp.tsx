"use client";

import { useEffect, useRef } from "react";
import { business } from "@/data/business";
import gsap from "gsap";

function WhatsAppIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.2-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const ringRef = useRef<HTMLSpanElement | null>(null);

  const whatsappUrl = `https://wa.me/${business.phoneDigits}`;

  useEffect(() => {
    const button = buttonRef.current;
    const ring = ringRef.current;

    if (!button) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(button, {
        opacity: 1,
        scale: 1,
        y: 0,
      });

      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        button,
        {
          opacity: 0,
          scale: 0.7,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          delay: 0.8,
          ease: "back.out(1.7)",
        }
      );

      if (ring) {
        gsap.to(ring, {
          scale: 1.45,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "power1.out",
        });
      }
    }, button);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1.08,
      y: -3,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <a
      ref={buttonRef}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp पर संपर्क करें"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.28)] outline-none transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(37,211,102,0.38)] focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      {/* Soft pulse */}
      <span
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]"
      />

      {/* Icon */}
      <span className="relative z-10 flex items-center justify-center">
        <WhatsAppIcon />
      </span>
    </a>
  );
}