"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, GraduationCap, Phone } from "lucide-react";

export function HubNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Partner Colleges", href: "#colleges" },
    { name: "How It Works", href: "#process" },
    { name: "Admissions Helpline", href: "#helpline" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3.5 shadow-lg border-b border-slate-100"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-indigo-50 p-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100 border border-indigo-100">
              <GraduationCap className="h-6 w-6 text-indigo-600" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 uppercase">
              Everpath <span className="text-indigo-600 font-light">Education</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-medium text-sm text-slate-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+917339329264"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
            >
              <Phone size={16} className="text-indigo-600" />
              <span>+91 73393 29264</span>
            </a>
            <a
              href="#enquiry"
              onClick={(e) => handleLinkClick(e, "#enquiry")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-5 rounded-xl text-sm shadow-md transition-all inline-flex items-center gap-1.5"
            >
              <span>Quick Register</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+917339329264"
              className="bg-slate-100 p-2.5 rounded-xl text-indigo-600 hover:text-indigo-500 border border-slate-200"
              aria-label="Call helpline"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl transition-colors text-slate-600 hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 bottom-0 right-0 w-[300px] z-[100] bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
          <span className="font-bold text-slate-850 uppercase tracking-wider text-sm">Navigation</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-medium text-lg text-slate-700 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-4 border-t border-slate-100">
          <a
            href="tel:+917339329264"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-center py-3 rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-200"
          >
            <Phone size={16} />
            <span>Call Admissions Desk</span>
          </a>
          <a
            href="#enquiry"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleLinkClick(e, "#enquiry");
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center py-3 rounded-xl text-sm flex items-center justify-center gap-1.5"
          >
            <span>Quick Register</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
