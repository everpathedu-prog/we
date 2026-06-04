"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider } from "@/context/ModalContext";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <MapPin className="text-gold h-5 w-5" />,
      title: "University Campus Address",
      detail: "1, Rajiv Gandhi Salai (OMR), Padur, Kelambakkam, Chennai, Tamil Nadu 603103",
      action: { label: "Get Directions", href: "https://maps.google.com" }
    },
    {
      icon: <Phone className="text-gold h-5 w-5" />,
      title: "Admission Helpline",
      detail: "+91 7339329264",
      action: { label: "Call Helpline", href: "tel:+917339329264" }
    },
    {
      icon: <Mail className="text-gold h-5 w-5" />,
      title: "Admissions Desk Email",
      detail: "everpathedu@gmail.com",
      action: { label: "Send Email", href: "mailto:everpathedu@gmail.com" }
    },
    {
      icon: <Clock className="text-gold h-5 w-5" />,
      title: "Office Hours",
      detail: "Monday – Saturday: 9:00 AM to 5:00 PM (Closed on Sundays)",
    }
  ];

  return (
    <ModalProvider>
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Header Section */}
        <section className="relative text-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <Image src="/hits.jpeg" alt="Hindustan University Contact" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
            <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
              Connect With Us
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Contact HITS Admissions
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
              Have questions about eligibility, placements, cutoffs or hostel packages? Reach out to us.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">

              {/* Left Column: Details & Map */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-navy mb-2">Office Contact Channels</h2>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    You can contact the HITS administrative building or visit our campus in Kelambakkam, Chennai.
                  </p>
                </div>

                {/* Details list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactDetails.map((item, idx) => (
                    <div key={idx} className="border border-border rounded-xl p-5 bg-surface/30 flex flex-col justify-between">
                      <div>
                        <div className="bg-navy/5 p-2.5 rounded-lg text-navy mb-4 w-fit">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-navy text-base mb-1.5">{item.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
                      </div>
                      {item.action && (
                        <a
                          href={item.action.href}
                          target={item.action.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-xs font-bold text-gold hover:text-gold-dark mt-4 inline-flex items-center gap-1 hover:underline"
                        >
                          <span>{item.action.label}</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mock Map location container */}
                <div className="border border-border rounded-xl overflow-hidden shadow-sm h-72 relative bg-surface flex flex-col items-center justify-center p-6 text-center">
                  <MapPin size={40} className="text-navy mb-3 animate-float" />
                  <h4 className="font-bold text-navy text-lg mb-1">HITS Campus Map Location</h4>
                  <p className="text-xs text-text-secondary max-w-sm mb-4">
                    1, Rajiv Gandhi Salai (OMR), Padur, Kelambakkam, Chennai, Tamil Nadu 603103
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-5 py-2 text-xs"
                  >
                    Open Google Maps Directions
                  </a>
                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
                  <h3 className="text-xl font-bold text-navy mb-1 text-center">Drop Us a Message</h3>
                  <p className="text-text-secondary text-xs mb-5 text-center leading-relaxed">
                    Enter details. Our counsellors will respond promptly.
                  </p>
                  <EnquiryForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
        <EnquiryModal />
        <FloatingCTA />
      </div>
    </ModalProvider>
  );
}
