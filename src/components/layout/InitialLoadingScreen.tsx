"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function InitialLoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const screenRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);
  const symbolRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExiting(true), 1100);
    const removeTimer = window.setTimeout(() => setIsVisible(false), 1400);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          }
        )
        .fromTo(
          symbolRef.current,
          {
            opacity: 0,
            scale: 0.72,
            rotate: -8,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.55"
        )
        .fromTo(
          ringRef.current,
          {
            opacity: 0,
            scale: 0.7,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.45"
        );

      gsap.to(symbolRef.current, {
        scale: 1.04,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(auraRef.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, screenRef);

    return () => ctx.revert();
  }, [isVisible]);

  useEffect(() => {
    if (!isExiting || !screenRef.current) return;

    gsap.to(screenRef.current, {
      opacity: 0,
      yPercent: -4,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isExiting]);

  if (!isVisible) return null;

  return (
    <div
      ref={screenRef}
      className="initial-loading-screen"
      role="status"
      aria-live="polite"
    >
      {/* Background atmosphere */}
      <div className="loading-noise" aria-hidden="true" />
      <div className="loading-grid" aria-hidden="true" />

      <div className="loading-glow loading-glow-one" aria-hidden="true" />
      <div className="loading-glow loading-glow-two" aria-hidden="true" />

      <div className="loading-corner loading-corner-tl" aria-hidden="true" />
      <div className="loading-corner loading-corner-tr" aria-hidden="true" />
      <div className="loading-corner loading-corner-bl" aria-hidden="true" />
      <div className="loading-corner loading-corner-br" aria-hidden="true" />

      <div className="loading-content" ref={contentRef}>
        {/* Location */}
        <div className="loading-location">
          <span className="location-line" />
          <span>UJJAIN · MADHYA PRADESH</span>
          <span className="location-line" />
        </div>

        {/* Sacred emblem */}
        <div className="loading-mark">
          <div
            ref={auraRef}
            className="loading-aura"
            aria-hidden="true"
          />

          <div
            ref={ringRef}
            className="loading-ring"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="loading-ring-inner" aria-hidden="true" />

          <div
            ref={symbolRef}
            className="loading-symbol"
            aria-hidden="true"
          >
            ॐ
          </div>
        </div>

        {/* Brand copy */}
        <div className="loading-copy">
          <p className="loading-kicker">
            वैदिक ज्योतिष
            <span>·</span>
            पूजा
            <span>·</span>
            अनुष्ठान
          </p>

          <h1>Rohit Sharma Ji</h1>

          <div ref={lineRef} className="loading-divider">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="loading-status">
            पृष्ठ लोड हो रहा है
            <span className="loading-dots" aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      </div>

      {/* Bottom signature */}
      <div className="loading-footer">
        <span>TRADITION</span>
        <span className="footer-dot">•</span>
        <span>FAITH</span>
        <span className="footer-dot">•</span>
        <span>DIVINE GUIDANCE</span>
      </div>

      <style jsx>{`
        .initial-loading-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(100, 28, 41, 0.32),
              transparent 25%
            ),
            radial-gradient(
              circle at 50% 55%,
              rgba(181, 106, 31, 0.09),
              transparent 48%
            ),
            linear-gradient(
              135deg,
              #241417 0%,
              #1d1113 48%,
              #160d0f 100%
            );
          color: #f7f1e6;
          isolation: isolate;
        }

        /* ---------------------------------------------------------
           ATMOSPHERE
        --------------------------------------------------------- */

        .loading-noise {
          position: absolute;
          inset: 0;
          z-index: -4;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
        }

        .loading-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          pointer-events: none;
          opacity: 0.045;
          background-image:
            linear-gradient(
              rgba(213, 178, 115, 0.28) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(213, 178, 115, 0.28) 1px,
              transparent 1px
            );
          background-size: 72px 72px;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            transparent 70%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            transparent 70%
          );
        }

        .loading-glow {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 999px;
          filter: blur(110px);
          pointer-events: none;
          z-index: -2;
        }

        .loading-glow-one {
          top: -220px;
          left: -190px;
          background: #641c29;
          opacity: 0.18;
        }

        .loading-glow-two {
          right: -210px;
          bottom: -210px;
          background: #b56a1f;
          opacity: 0.11;
        }

        /* ---------------------------------------------------------
           CORNER DETAILS
        --------------------------------------------------------- */

        .loading-corner {
          position: absolute;
          width: 42px;
          height: 42px;
          opacity: 0.42;
          pointer-events: none;
        }

        .loading-corner::before,
        .loading-corner::after {
          content: "";
          position: absolute;
          background: rgba(213, 178, 115, 0.5);
        }

        .loading-corner::before {
          width: 100%;
          height: 1px;
        }

        .loading-corner::after {
          width: 1px;
          height: 100%;
        }

        .loading-corner-tl {
          top: 28px;
          left: 28px;
        }

        .loading-corner-tr {
          top: 28px;
          right: 28px;
          transform: rotate(90deg);
        }

        .loading-corner-bl {
          bottom: 28px;
          left: 28px;
          transform: rotate(-90deg);
        }

        .loading-corner-br {
          right: 28px;
          bottom: 28px;
          transform: rotate(180deg);
        }

        /* ---------------------------------------------------------
           MAIN CONTENT
        --------------------------------------------------------- */

        .loading-content {
          position: relative;
          z-index: 5;
          width: min(92vw, 680px);
          text-align: center;
        }

        .loading-location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 30px;
          color: rgba(213, 178, 115, 0.7);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.38em;
        }

        .location-line {
          width: 34px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(213, 178, 115, 0.55)
          );
        }

        .location-line:last-child {
          background: linear-gradient(
            90deg,
            rgba(213, 178, 115, 0.55),
            transparent
          );
        }

        /* ---------------------------------------------------------
           SACRED MARK
        --------------------------------------------------------- */

        .loading-mark {
          position: relative;
          width: 190px;
          height: 190px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-aura {
          position: absolute;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(181, 106, 31, 0.2),
              rgba(100, 28, 41, 0.08) 48%,
              transparent 72%
            );
          filter: blur(26px);
        }

        .loading-ring {
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(213, 178, 115, 0.25);
          border-radius: 50%;
        }

        .loading-ring::before,
        .loading-ring::after {
          content: "";
          position: absolute;
          border-radius: 50%;
        }

        .loading-ring::before {
          inset: 14px;
          border: 1px solid rgba(213, 178, 115, 0.13);
        }

        .loading-ring::after {
          inset: 30px;
          border: 1px dashed rgba(213, 178, 115, 0.12);
        }

        .loading-ring-inner {
          position: absolute;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          border: 1px solid rgba(213, 178, 115, 0.11);
          box-shadow:
            inset 0 0 35px rgba(181, 106, 31, 0.04),
            0 0 35px rgba(181, 106, 31, 0.04);
        }

        .loading-ring span {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d5b273;
          box-shadow: 0 0 13px rgba(213, 178, 115, 0.75);
        }

        .loading-ring span:nth-child(1) {
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
        }

        .loading-ring span:nth-child(2) {
          right: -2px;
          top: 50%;
          transform: translateY(-50%);
        }

        .loading-ring span:nth-child(3) {
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
        }

        .loading-ring span:nth-child(4) {
          left: -2px;
          top: 50%;
          transform: translateY(-50%);
        }

        .loading-symbol {
          position: relative;
          z-index: 3;
          color: #d5b273;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 84px;
          line-height: 1;
          font-weight: 400;
          text-shadow:
            0 0 18px rgba(213, 178, 115, 0.24),
            0 0 48px rgba(181, 106, 31, 0.16);
        }

        /* ---------------------------------------------------------
           BRAND COPY
        --------------------------------------------------------- */

        .loading-copy {
          position: relative;
        }

        .loading-kicker {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin: 0 0 12px;
          color: rgba(213, 178, 115, 0.66);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.3em;
        }

        .loading-kicker span {
          color: rgba(181, 106, 31, 0.75);
        }

        .loading-copy h1 {
          margin: 0;
          color: #f7f1e6;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 7vw, 48px);
          font-weight: 500;
          letter-spacing: -0.04em;
          text-shadow: 0 8px 35px rgba(0, 0, 0, 0.22);
        }

        .loading-divider {
          width: min(230px, 62vw);
          margin: 19px auto 17px;
          display: flex;
          align-items: center;
          gap: 10px;
          transform-origin: center;
        }

        .loading-divider span {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(213, 178, 115, 0.55)
          );
        }

        .loading-divider span:last-child {
          background: linear-gradient(
            90deg,
            rgba(213, 178, 115, 0.55),
            transparent
          );
        }

        .loading-divider i {
          color: #d5b273;
          font-size: 9px;
          font-style: normal;
        }

        .loading-status {
          margin: 0;
          color: rgba(247, 241, 230, 0.5);
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .loading-dots span {
          display: inline-block;
          animation: loadingDot 1.2s infinite ease-in-out;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .loading-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        /* ---------------------------------------------------------
           FOOTER
        --------------------------------------------------------- */

        .loading-footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 28px;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          color: rgba(213, 178, 115, 0.32);
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.24em;
        }

        .footer-dot {
          color: rgba(181, 106, 31, 0.6);
        }

        @keyframes loadingDot {
          0%,
          60%,
          100% {
            opacity: 0.25;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        /* ---------------------------------------------------------
           MOBILE
        --------------------------------------------------------- */

        @media (max-width: 640px) {
          .loading-corner {
            width: 28px;
            height: 28px;
          }

          .loading-corner-tl,
          .loading-corner-tr {
            top: 18px;
          }

          .loading-corner-bl,
          .loading-corner-br {
            bottom: 18px;
          }

          .loading-corner-tl,
          .loading-corner-bl {
            left: 18px;
          }

          .loading-corner-tr,
          .loading-corner-br {
            right: 18px;
          }

          .loading-location {
            margin-bottom: 21px;
            gap: 10px;
            font-size: 6.5px;
            letter-spacing: 0.24em;
          }

          .location-line {
            width: 22px;
          }

          .loading-mark {
            width: 152px;
            height: 152px;
            margin-bottom: 25px;
          }

          .loading-symbol {
            font-size: 68px;
          }

          .loading-ring-inner {
            width: 86px;
            height: 86px;
          }

          .loading-copy h1 {
            font-size: clamp(29px, 8vw, 38px);
          }

          .loading-kicker {
            gap: 6px;
            font-size: 6.5px;
            letter-spacing: 0.22em;
          }

          .loading-status {
            font-size: 10px;
          }

          .loading-footer {
            bottom: 20px;
            gap: 7px;
            font-size: 5.5px;
            letter-spacing: 0.14em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loading-dots span {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
