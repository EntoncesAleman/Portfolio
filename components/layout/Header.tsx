"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          aria-label={`Inicio - ${siteConfig.name}`}
          className="wordmark"
        >
          mw<span aria-hidden="true">.</span>
        </Link>

        <nav aria-label="Navegación principal" className="main-nav">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href || (item.href === "/#trabajos" && pathname === "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm underline-offset-4 transition-colors ${
                  isActive
                    ? "text-[var(--text)] underline"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
