"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { departments } from "@/data/courses";
import { useModal } from "@/context/ModalContext";

export function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-24 md:pb-8 border-t border-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {/* Brand/Accreditation column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
              <Image src="/hitslogo.png" alt="Hindustan University Logo" width={220} height={60} className="h-12 w-auto object-contain" />
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Hindustan Institute of Technology and Science (HITS) is a prestigious NAAC A++ accredited Deemed-to-be-University, offering world-class engineering, management, law, and liberal arts education.
          </p>
          <div className="inline-flex items-center gap-2.5 bg-navy/40 px-3.5 py-2 rounded-lg border border-navy/20 w-fit">
            <div className="bg-gold h-2 w-2 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-gold-light">NAAC A++ Grade (CGPA 3.62/4)</span>
          </div>
        </div>

        {/* Courses departments Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Programmes</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            {departments.map((dept) => (
              <li key={dept.slug}>
                <Link
                  href={`/courses?department=${dept.slug}`}
                  className="hover:text-gold-light transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs">→</span>
                  <span>{dept.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-gold-light transition-colors duration-150">
                About the University
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-gold-light transition-colors duration-150">
                Admission Process 2026
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-gold-light transition-colors duration-150">
                Explore All Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-light transition-colors duration-150">
                Contact & Route Map
              </Link>
            </li>
            <li>
              <button
                onClick={() => openModal()}
                className="hover:text-gold-light text-left transition-colors duration-150 font-semibold text-gold flex items-center gap-1 group"
              >
                <span>Apply for Admission</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </li>
          </ul>
        </div>

        {/* Contact/Admissions desk Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-base text-gold tracking-wide uppercase">Admission Office</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin size={20} className="text-gold flex-shrink-0" />
              <span>
                1, Rajiv Gandhi Salai (OMR), Padur, Kelambakkam, Chennai, Tamil Nadu 603103
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

          {/* Social media icons */}
          <div className="flex gap-3.5 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-gold hover:text-navy transition-all duration-200 p-2 rounded-full text-white w-8 h-8 flex items-center justify-center"
              aria-label="Facebook link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-gold hover:text-navy transition-all duration-200 p-2 rounded-full text-white w-8 h-8 flex items-center justify-center"
              aria-label="Instagram link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-gold hover:text-navy transition-all duration-200 p-2 rounded-full text-white w-8 h-8 flex items-center justify-center"
              aria-label="YouTube link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-gold hover:text-navy transition-all duration-200 p-2 rounded-full text-white w-8 h-8 flex items-center justify-center"
              aria-label="LinkedIn link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-navy text-center text-xs text-white/55 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Hindustan Institute of Technology & Science. All rights reserved.</p>
        <p className="flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
