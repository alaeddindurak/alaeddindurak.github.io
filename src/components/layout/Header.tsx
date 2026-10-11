"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

/** Removes a trailing slash so "/projects/" (static export) matches "/projects". */
function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

/**
 * Sticky top bar: the owner's name on the left, navigation on the right.
 * On small screens the links collapse into a hamburger menu.
 */
export function Header() {
  const pathname = normalizePath(usePathname());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkClasses = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      pathname === href ? "bg-brand-soft text-brand-dark" : "text-muted hover:text-brand",
    );

  return (
    <header className="border-line bg-surface/90 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-navy text-lg font-bold tracking-tight" onClick={closeMenu}>
          {siteConfig.name}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button, visible only on small screens */}
        <button
          type="button"
          className="text-navy rounded-lg p-2 md:hidden"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {isMenuOpen ? (
        <nav id="mobile-menu" aria-label="Mobil menü" className="border-line bg-surface border-t md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
