import Link from "next/link";
import type { ReactNode } from "react";

export default function NavigationItem({ href, label, active, onClick, className = "", children }: { href: string; label: string; active: boolean; onClick?: () => void; className?: string; children?: ReactNode }) {
  return <Link className={`navigation-item ${active ? "is-active" : ""} ${className}`} href={href} aria-current={active ? "page" : undefined} onClick={onClick}>{children ?? label}</Link>;
}
