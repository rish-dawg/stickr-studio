"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#sticker-types", label: "Sticker Types" },
    { href: "#calculator", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-500/5 border-b border-purple-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                <polyline points="14,3 14,8 21,8" />
                <path d="M12 18v-6" />
                <path d="M9 15l3 3 3-3" />
              </svg>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
              Stickr Studio
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-700 rounded-lg hover:bg-purple-50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#calculator"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 8h18M3 16h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-semibold rounded-xl text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
