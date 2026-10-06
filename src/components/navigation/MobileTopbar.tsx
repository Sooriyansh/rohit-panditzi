"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function MobileTopbar() {
  const [menuOpen, setMenuOpenState] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMenuClosing(false);
    setMenuOpenState(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (closeTimer.current !== null) return;
    setMenuClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setMenuOpenState(false);
      setMenuClosing(false);
      closeTimer.current = null;
    }, 340);
  }, []);

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  const setMenuOpen = (next: boolean) => {
    if (next) openMenu();
    else closeMenu();
  };

  return (
    <>
      <div className="mobile-topbar">
        <Link className="mobile-topbar-brand" href="/" aria-label="होम — श्री पारदेश्वर मंदिर">
          <span className="brand-mark" aria-hidden="true">ॐ</span>
          <span>श्री पारदेश्वर मंदिर</span>
        </Link>
        <button
          ref={triggerRef}
          type="button"
          className={`mobile-hamburger ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel-top"
          aria-label={menuOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {menuOpen && <MobileMenu panelId="mobile-navigation-panel-top" closing={menuClosing} onClose={closeMenu} triggerRef={triggerRef} />}
    </>
  );
}
