"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function SaveethaNavbar() {
  const { openModal } = useModal();
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Merit Fees", href: "#fees" },
    { name: "Why SEC", href: "#why-sec" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
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
            ? "bg-navy/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
            : "bg-navy py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="bg-white px-3 py-1.5 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] shadow-sm">
              <Image
                src="/saveethalogo.png"
                alt="Saveetha University Admissions"
                width={160}
                height={45}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-medium text-sm text-white/95 hover:text-gold-light transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openModal()}
              className="bg-gold text-white font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => openModal()}
              className="bg-gold text-white font-bold px-4 py-2 rounded-lg text-xs hover:scale-105 active:scale-95 transition-all"
            >
              Apply
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-navy-dark/65 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 bottom-0 right-0 w-[280px] z-[100] bg-navy shadow-2xl p-6 flex flex-col md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-white tracking-tight text-lg">Navigation Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-white/15 text-white/80"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-semibold text-white/90 hover:text-gold border-b border-white/5 py-2 text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="w-full bg-gold text-white text-center flex items-center justify-center gap-2 py-3 rounded-lg font-bold hover:bg-gold-light transition-colors"
          >
            <span>Apply Online 2026</span>
            <ArrowUpRight size={18} />
          </button>
          <a
            href="tel:+917339329264"
            className="w-full border-2 border-white/20 text-white font-bold text-center py-2.5 rounded-lg text-sm block hover:bg-white/5 transition-all"
          >
            Call Helpline
          </a>
        </div>
      </div>
    </>
  );
}
