"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryModal() {
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
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden z-[201] flex flex-col border border-border"
          >
            {/* Header banner */}
            <div className="gradient-navy px-6 py-5 text-white relative">
              <h3 className="text-xl md:text-2xl font-bold">Admission Enquiry 2025</h3>
              <p className="text-white/80 text-sm mt-1">
                Fill the form below to connect with a counsellor.
              </p>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-white transition-colors duration-150"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form scroll wrapper */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <EnquiryForm initialCourseSlug={selectedCourse} onSuccess={closeModal} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
