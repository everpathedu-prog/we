"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function ChettinadFooter() {
  const { openModal } = useModal();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-navy-dark text-white pt-16 pb-24 md:pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-left">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-2 rounded-lg flex items-center justify-center">
              <Image
                src="/citlogo.png"
                alt="Chettinad Academy of Research and Education Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Chettinad Institute of Technology (CIT) is a premier engineering college constituent under the NAAC A++ accredited Chettinad Academy of Research and Education (CARE), providing world-class infrastructure and industry-aligned B.Tech programmes.
          </p>
          <div className="inline-flex items-center gap-2.5 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10 w-fit">
            <div className="bg-gold h-2 w-2 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-gold-light">CARE Deemed University — NAAC A++</span>
          </div>
        </div>

        {/* Quick links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home")}
                className="hover:text-gold-light transition-colors duration-150"
              >
                Top Admissions Desk
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className="hover:text-gold-light transition-colors duration-150"
              >
                About Manamai Campus
              </a>
            </li>
            <li>
              <a
                href="#courses"
                onClick={(e) => handleLinkClick(e, "#courses")}
                className="hover:text-gold-light transition-colors duration-150"
              >
                11 B.Tech Courses
              </a>
            </li>
            <li>
              <a
                href="#why-cit"
                onClick={(e) => handleLinkClick(e, "#why-cit")}
                className="hover:text-gold-light transition-colors duration-150"
              >
                The CIT Advantage
              </a>
            </li>
          </ul>
        </div>

        {/* Apply now Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Apply Now</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            <li>
              <button
                onClick={() => openModal()}
                className="hover:text-gold-light text-left transition-colors duration-150 font-semibold text-gold flex items-center gap-1 group cursor-pointer border-none bg-transparent"
              >
                <span>Submit Admissions Enquiry</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </li>
            <li className="text-white/60">
              Classes commencing July 2026. Register early to book your merit seat.
            </li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Admissions Desk</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin size={20} className="text-gold flex-shrink-0" />
              <span>
                Manami, East Coast Rd, Mahabalipuram, Manamai, Tamil Nadu 603109
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <a href="tel:+917339329264" className="hover:text-gold-light transition-colors">
                +91 7339329264
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <a href="mailto:everpathedu@gmail.com" className="hover:text-gold-light transition-colors">
                everpathedu@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/55 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Chettinad Institute of Technology. All rights reserved.</p>
        <p className="flex justify-center gap-4">
          <span>Admissions Partner: Everpath Education</span>
        </p>
      </div>
    </footer>
  );
}
