"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { mobileQuickLinks } from "@/data/navigation";
import NavigationItem from "./NavigationItem";
import MobileMenu from "./MobileMenu";

export default function MobileBottomNav() {
  const pathname = usePathname();
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
  return <>
    <nav className="mobile-bottom-nav" aria-label="मोबाइल नेविगेशन">
      {mobileQuickLinks.map(item => <NavigationItem key={item.href} href={item.href} label={item.label} active={item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`)} className="mobile-nav-item"><span className="mobile-nav-icon" aria-hidden="true">{item.icon}</span><span>{item.label}</span></NavigationItem>)}
      <button ref={triggerRef} type="button" className={`mobile-nav-item mobile-menu-trigger ${menuOpen ? "is-active" : ""}`} aria-expanded={menuOpen} aria-controls="mobile-navigation-panel-bottom" onClick={() => setMenuOpen(!menuOpen)}><span className="mobile-nav-icon" aria-hidden="true">☰</span><span>मेनू</span></button>
    </nav>
    {menuOpen && <MobileMenu panelId="mobile-navigation-panel-bottom" closing={menuClosing} onClose={closeMenu} triggerRef={triggerRef} />}
  </>;
}
