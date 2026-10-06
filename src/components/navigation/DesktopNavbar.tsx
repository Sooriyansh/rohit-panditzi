"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryLinks } from "@/data/navigation";
import NavigationItem from "./NavigationItem";
import PujaDropdown from "./PujaDropdown";
import JyotishDropdown from "./JyotishDropdown";

export default function DesktopNavbar() {
const pathname = usePathname();
const [compact, setCompact] = useState(false);

useEffect(() => {
let prevY = window.scrollY;
let raf = 0;


const onScroll = () => {
  if (raf) return;

  raf = window.requestAnimationFrame(() => {
    const y = window.scrollY;

    if (y < 30 || y < prevY) {
      setCompact(false);
    } else if (y > 60 && y > prevY) {
      setCompact(true);
    }

    prevY = y;
    raf = 0;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });

return () => {
  window.removeEventListener("scroll", onScroll);
  window.cancelAnimationFrame(raf);
};


}, []);

return (
<div
className={`desktop-navbar${compact ? " is-compact" : ""}`}
role="banner"
>
{/* =====================================================
BRAND
====================================================== */}


  <Link
    className="navbar-brand"
    href="/"
    aria-label="श्री पारदेश्वर महादेव मंदिर — होम"
  >
    <span className="brand-mark" aria-hidden="true">
      ॐ
    </span>

    <span className="brand-title">
      <span>श्री पारदेश्वर</span>
      <span>महादेव मंदिर</span>
    </span>
  </Link>

  {/* =====================================================
      PRIMARY NAVIGATION
  ====================================================== */}

  <nav className="desktop-nav" aria-label="मुख्य नेविगेशन">
    <NavigationItem
      href="/"
      label="होम"
      active={pathname === "/"}
    />

    <NavigationItem
      href="/about"
      label="हमारे बारे में"
      active={pathname === "/about"}
    />

    <PujaDropdown />

    <JyotishDropdown />

    {primaryLinks
      .filter((item) => !["/", "/about"].includes(item.href))
      .map((item) => (
        <NavigationItem
          key={item.href}
          href={item.href}
          label={item.label}
          active={
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`)
          }
        />
      ))}
  </nav>

  {/* =====================================================
      BOOKING CTA
  ====================================================== */}

  <Link
    className="navbar-booking"
    href="/online-puja"
    aria-label="पूजा बुक करें"
  >
    <span className="navbar-booking-icon" aria-hidden="true">
      🕉
    </span>

    <span className="navbar-booking-label">
      पूजा बुक करें
    </span>

    <span className="navbar-booking-arrow" aria-hidden="true">
      →
    </span>
  </Link>
</div>


);
}
