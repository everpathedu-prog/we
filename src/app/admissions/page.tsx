"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider } from "@/context/ModalContext";
import { ChevronRight, Calendar, Landmark, ClipboardList, UserCheck, HelpCircle } from "lucide-react";

export default function Admissions() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const steps = [
    {
      icon: <ClipboardList className="text-gold h-6 w-6" />,
      title: "Step 1: Submit Online Enquiry",
      desc: "Fill our quick admission query form with your name, phone number, qualification, and desired course path."
    },
    {
      icon: <Calendar className="text-gold h-6 w-6" />,
      title: "Step 2: Counselor Interaction",
      desc: "Our HITS admissions officer will call you to explain cutoff guidelines, syllabus highlights, and fee discount details."
    },
    {
      icon: <Landmark className="text-gold h-6 w-6" />,
      title: "Step 3: Document Verification",
      desc: "Upload or mail photocopies of your 10th/12th marksheets, graduation degrees, and transfer certificates."
    },
    {
      icon: <UserCheck className="text-gold h-6 w-6" />,
      title: "Step 4: Seat Allotment",
      desc: "Pay the initial registration/admission fees online to book your seat under either merit quotas or corporate sponsorships."
    }
  ];

  const keyDates = [
    { event: "Online Applications Start", date: "January 15, 2026" },
    { event: "Hindustan Admission Test (HITSEEE)", date: "April 20–28, 2026" },
    { event: "Admissions Rank & Cutoff Release", date: "May 5, 2026" },
    { event: "Counseling & Merit Seat Booking", date: "May 12, 2026 onwards" },
    { event: "Academic Batch Commencement", date: "July 10, 2026" }
  ];

  const FAQs = [
    {
      q: "What is HITSEEE and is it mandatory for B.Tech?",
      a: "HITSEEE is the Hindustan Institute of Technology and Science Engineering Entrance Examination. It is mandatory for securing merit-based scholarship seats in B.Tech programs. However, students with high JEE Main scores can also apply directly."
    },
    {
      q: "Are there any sports scholarships available at HITS?",
      a: "Yes, HITS has a stellar sports scholarship program. Students who have represented national, state, or district-level teams in sports like cricket, football, basketball, and athletics are eligible for full fee waivers and hostelling concessions."
    },
    {
      q: "Can I pay the program tuition fees in instalments?",
      a: "Yes, HITS offers tuition payment flexibility. Students can pay semester-wise (twice a year). We also assist with educational loan documentation for leading nationalized and private banks."
    },
    {
      q: "What is the NAAC rating of HITS?",
      a: "HITS is accredited with a NAAC A++ rating (with an excellent CGPA score of 3.62/4.00), which represents the highest quality tier for academic curriculums and labs in India."
    }
  ];

  return (
    <ModalProvider>
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Header Section */}
        <section className="relative text-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <Image src="/hits.jpeg" alt="Hindustan University Admissions" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
            <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
              Admission Guidelines 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Enroll at Hindustan University
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
              Follow our simple, transparent admission procedure to secure your seat in your preferred course.
            </p>
          </div>
        </section>

        {/* Admissions Form & Process Section */}
        <section className="section bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">

              {/* Left Column: Step process & Dates */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-navy mb-2">Admission Process Timeline</h2>
                  <p className="text-xs text-text-secondary">
                    HITS has simplified the admissions workflow into four distinct milestones:
                  </p>
                </div>

                <div className="space-y-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 border border-border rounded-xl p-5 bg-surface/30">
                      <div className="bg-navy/5 p-3.5 rounded-lg text-navy h-fit flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-base mb-1">{step.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-border rounded-xl p-6 bg-surface/40 mt-6">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <Calendar size={20} className="text-gold" />
                    <span>Important Admission Dates 2026</span>
                  </h3>
                  <div className="divide-y divide-border">
                    {keyDates.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-3 text-xs">
                        <span className="font-semibold text-text-primary">{item.event}</span>
                        <span className="font-bold text-navy">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded application form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
                  <h3 className="text-xl font-bold text-navy mb-1 text-center">Admission Enquiry Form</h3>
                  <p className="text-text-secondary text-xs mb-5 text-center leading-relaxed">
                    Submit your query. Our counsellor will call you back within 24 working hours.
                  </p>
                  <EnquiryForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section bg-surface">
          <div className="section-container max-w-4xl">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Admission Help"
              align="center"
            />

            <div className="space-y-4 text-left">
              {FAQs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-navy text-base hover:bg-surface/50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle size={18} className="text-gold flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronRight
                      size={18}
                      className={`text-text-muted transition-transform duration-200 ${faqOpen === idx ? "transform rotate-90" : ""
                        }`}
                    />
                  </button>
                  {faqOpen === idx && (
                    <div className="p-5 bg-white border-t border-border text-sm text-text-secondary leading-relaxed font-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
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
