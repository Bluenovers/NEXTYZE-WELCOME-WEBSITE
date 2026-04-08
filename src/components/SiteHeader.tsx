'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
];

const normalizePath = (path: string) => {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const currentPath = normalizePath(pathname);

  return (
    <header className="site-header container">
      <div className="brand">
        <h1>NEXTYZE</h1>
        <h2>NEXTYZE</h2>
      </div>
      <nav className="nav">
        {navItems.map((item) => {
          const isActive = normalizePath(item.href) === currentPath;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
