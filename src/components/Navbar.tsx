"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";

export function Navbar() {
  const { openModal } = useModal();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About HITS", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? "glass py-3.5 shadow-md"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-white p-1.5 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image src="/hitslogo.png" alt="Hindustan University" width={180} height={50} className="h-10 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative font-semibold text-sm transition-colors duration-200 py-1.5 ${isActive
                    ? "text-gold"
                    : isScrolled
                      ? "text-text-primary hover:text-navy"
                      : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openModal()}
              className="btn-primary flex items-center gap-1.5 py-2.5 px-6 rounded-lg text-sm font-bold shadow-md"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => openModal()}
              className="bg-gold text-text-on-gold font-bold px-4 py-2 rounded-lg text-xs hover:scale-105 active:scale-95 transition-all"
            >
              Apply
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled
                ? "text-navy hover:bg-navy/5"
                : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-navy/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 bottom-0 right-0 w-[280px] z-[100] bg-white shadow-2xl p-6 flex flex-col md:hidden transition-transform duration-300 ease-out-expo ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-navy tracking-tight text-lg">Menu Navigation</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-surface text-text-secondary"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold text-base py-2 border-b border-border-light transition-colors ${isActive ? "text-gold border-gold" : "text-text-primary hover:text-navy"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="w-full btn-primary text-center flex items-center justify-center gap-2 py-3 rounded-lg font-bold"
          >
            <span>Apply Online 2026</span>
            <ArrowUpRight size={18} />
          </button>
          <a
            href="tel:+917339329264"
            className="w-full border-2 border-navy text-navy font-bold text-center py-2.5 rounded-lg text-sm block"
          >
            Call Helpline
          </a>
        </div>
      </div>
    </>
  );
}
