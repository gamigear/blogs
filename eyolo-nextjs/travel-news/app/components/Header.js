"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import config from "@/config/site.config.json";
import menu from "@/config/menu.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-primary font-bold text-primary">
              {config.logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menu.mainMenu.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-dark hover:text-primary font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-dark transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-dark transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-dark transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {menu.mainMenu.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="block py-3 text-dark hover:text-primary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
