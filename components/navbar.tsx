"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/talks/", label: "Talks" },
  { href: "/posts/", label: "Posts" },
  { href: "/communities/", label: "Communities" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl font-bold no-underline text-foreground hover:text-foreground">
          Kunal Das
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground no-underline transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="p-2 md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="space-y-3 border-t border-border px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-foreground no-underline transition-colors duration-200 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
