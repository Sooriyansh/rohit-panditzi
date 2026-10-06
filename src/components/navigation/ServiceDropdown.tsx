"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavigationLink } from "@/data/navigation";

export default function ServiceDropdown({ label, href, items, pathname }: { label: string; href: string; items: NavigationLink[]; pathname: string }) {
  const dropdown = useRef<HTMLDetailsElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const active = pathname === href || pathname.startsWith(`${href}/`);
  const dropdownId = href;

  const close = useCallback(() => {
    if (!open || closing || closeTimer.current !== null) return;
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      closeTimer.current = null;
    }, 230);
  }, [closing, open]);

  const closeInstant = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setClosing(false);
    setOpen(false);
  }, []);

  const toggle = () => {
    if (open) close();
    else {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      window.dispatchEvent(
        new CustomEvent("navbar-dropdown-open", { detail: dropdownId })
      );
      setClosing(false);
      setOpen(true);
    }
  };

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onDropdownOpen = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== dropdownId) closeInstant();
    };

    window.addEventListener("navbar-dropdown-open", onDropdownOpen);
    return () =>
      window.removeEventListener("navbar-dropdown-open", onDropdownOpen);
  }, [closeInstant, dropdownId]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!dropdown.current?.contains(event.target as Node)) close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [close, open]);

  return <details className={`desktop-dropdown ${active ? "is-active" : ""} ${closing ? "is-closing" : ""}`} ref={dropdown} open={open} onKeyDown={event => { if (event.key === "Escape") { close(); event.preventDefault(); } }}>
    <summary aria-expanded={open && !closing} onClick={event => { event.preventDefault(); toggle(); }}>{label}<span className="dropdown-chevron" aria-hidden="true">⌄</span></summary>
    <div className="dropdown-panel" aria-hidden={!open || closing}><Link className={`dropdown-overview ${pathname === href ? "is-active" : ""}`} href={href} onClick={close}>सभी {label}</Link>{items.map(item => { const itemActive = pathname === item.href; return <Link key={item.href} className={`dropdown-link ${itemActive ? "is-active" : ""}`} href={item.href} aria-current={itemActive ? "page" : undefined} onClick={close}>{item.label}</Link>; })}</div>
  </details>;
}
