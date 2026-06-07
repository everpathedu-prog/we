"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export function HubFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-indigo-50 p-2 rounded-xl flex items-center justify-center border border-indigo-100">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 uppercase">
                Everpath <span className="text-indigo-600 font-light">Education</span>
              </span>
            </Link>
            <p className="text-sm text-slate-550 leading-relaxed">
              Official university admissions partner guiding prospective students toward premium higher education, verified merit scholarships, and high-placement academic tracks.
            </p>
          </div>

          {/* Partner Portals */}
          <div>
            <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-5">Partner Portals</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/hindustan-university" className="hover:text-indigo-600 transition-colors">
                  Hindustan University (HITS)
                </Link>
              </li>
              <li>
                <Link href="/saveetha-university" className="hover:text-indigo-600 transition-colors">
                  Saveetha University
                </Link>
              </li>
              <li>
                <Link href="/chettinad-institute-of-technology" className="hover:text-indigo-600 transition-colors">
                  Chettinad Institute of Tech (CIT)
                </Link>
              </li>
              <li>
                <Link href="/avit" className="hover:text-indigo-600 transition-colors">
                  Aarupadai Veedu Inst (AVIT)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div>
            <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-5">Admissions Helpdesk</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917339329264" className="text-slate-800 hover:text-indigo-600 font-bold transition-colors">
                    +91 73393 29264
                  </a>
                  <span className="text-[11px] text-slate-500 mt-0.5">Helpline (Call / WhatsApp)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:admissions@everpatheducation.com" className="hover:text-indigo-600 transition-colors">
                  admissions@everpatheducation.com
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Office */}
          <div>
            <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-5">Regional Desk</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-indigo-600 mt-0.5 flex-shrink-0" />
              <p className="leading-relaxed">
                Everpath Education Admissions Office,<br />
                OMR IT Corridor, Sholinganallur,<br />
                Chennai, Tamil Nadu — 600119
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Everpath Education. All Rights Reserved. Official Admissions Partner.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
            <Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
