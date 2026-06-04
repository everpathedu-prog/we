"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { AvitEnquiryForm } from "./AvitEnquiryForm";

export function AvitEnquiryModal() {
  const { isOpen, selectedCourse, closeModal } = useModal();

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-navy-dark/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[201] flex flex-col border border-white/10"
          >
            {/* Header banner */}
            <div className="bg-navy px-6 py-5 text-white relative border-b border-white/5">
              <h3 className="text-xl md:text-2xl font-bold">AVIT B.Tech Admission Enquiry 2026</h3>
              <p className="text-white/80 text-sm mt-1">
                Fill the form below to connect with an admissions counsellor.
              </p>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-white transition-colors duration-150 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form scroll wrapper */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <AvitEnquiryForm initialCourseSlug={selectedCourse} onSuccess={closeModal} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
