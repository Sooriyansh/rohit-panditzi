"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { jyotishLinks, primaryLinks, pujaLinks } from "@/data/navigation";

export default function MobileMenu({
  onClose,
  triggerRef,
  closing = false,
  panelId = "mobile-navigation-panel",
}: {
  onClose: () => void;
  triggerRef: { current: HTMLButtonElement | null };
  closing?: boolean;
  panelId?: string;
}) {
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      panel.current?.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled])'
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };

    const focusTimer = window.requestAnimationFrame(() => focusable()?.[0]?.focus());
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [onClose, triggerRef]);

  const close = () => onClose();

  return (
    <div
      className={`mobile-menu-backdrop ${closing ? "is-closing" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        id={panelId}
        className={`mobile-menu-panel ${closing ? "is-closing" : ""}`}
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="mobile-menu-heading">
          <div>
            <span className="eyebrow" style={{ fontSize: ".7rem" }}>
              श्री पारदेश्वर महादेव मंदिर
            </span>
            <h2 id="mobile-menu-title">नेविगेशन</h2>
          </div>
          <button
            className="mobile-menu-close"
            onClick={close}
            aria-label="मेन्यू बंद करें"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mobile-menu-links" aria-label="सभी पृष्ठ">
          {primaryLinks.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}

          <section className="mobile-menu-group">
            <h3>
              <Link href="/puja" onClick={close}>
                पूजा एवं अनुष्ठान
              </Link>
            </h3>
            {pujaLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
          </section>

          <section className="mobile-menu-group">
            <h3>
              <Link href="/jyotish" onClick={close}>
                ज्योतिष सेवाएँ
              </Link>
            </h3>
            {jyotishLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
          </section>

          {primaryLinks.slice(2).map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="mobile-menu-actions">
          <Link className="navbar-booking" href="/online-puja" onClick={close}>
            🕉 पूजा बुक करें
          </Link>
          <a className="mobile-call-link" href="tel:+919329500668">
            📞 93295 00668 पर कॉल करें
          </a>
        </div>
      </section>
    </div>
  );
}
