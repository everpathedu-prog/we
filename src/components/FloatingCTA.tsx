"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";
import { PhoneCall, Send } from "lucide-react";

export function FloatingCTA() {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Bar (Sticky to bottom on small devices) */}
      <div className="fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-border p-3 flex gap-3 md:hidden shadow-lg animate-fade-in-up">
        <a
          href="tel:+914427474262"
          className="flex-1 border-2 border-navy text-navy font-bold rounded-lg flex items-center justify-center gap-2 py-3 hover:bg-surface transition-all active:scale-[0.98]"
        >
          <PhoneCall size={18} />
          <span>Call HITS</span>
        </a>
        <button
          onClick={() => openModal()}
          className="flex-[2] bg-gold text-text-on-gold font-bold rounded-lg flex items-center justify-center gap-2 py-3 hover:bg-gold-light transition-all active:scale-[0.98] animate-pulse-glow"
        >
          <Send size={18} />
          <span>Apply Now 2026</span>
        </button>
      </div>

      {/* Desktop Floating Button */}
      <button
        onClick={() => openModal()}
        className="hidden md:flex fixed bottom-8 right-8 z-[150] bg-gold text-text-on-gold hover:bg-gold-light hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl rounded-full px-6 py-4 items-center gap-3 font-bold group animate-pulse-glow"
      >
        <span className="relative">
          Apply Now 2026
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-text-on-gold group-hover:w-full transition-all duration-300" />
        </span>
        <div className="bg-text-on-gold/10 p-1.5 rounded-full">
          <Send size={18} className="transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </button>
    </>
  );
}
