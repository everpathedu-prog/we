"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider } from "@/context/ModalContext";
import { Course } from "@/data/courses";
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft,
  Clock, 
  Award,
  BookOpen,
  Briefcase,
  AlertCircle,
  FileText
} from "lucide-react";

interface CourseDetailClientProps {
  course: Course;
}

export function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <ModalProvider>
      <div className="flex-1 flex flex-col pt-[72px] md:pt-[80px]">
        <Navbar />

        {/* Breadcrumb strip */}
        <div className="bg-surface border-b border-border py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-2 text-xs font-semibold text-text-secondary">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-text-muted" />
            <Link href="/courses" className="hover:text-navy transition-colors">
              Courses
            </Link>
            <ChevronRight size={12} className="text-text-muted" />
            <span className="text-navy truncate">{course.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Course Main details */}
            <div className="lg:col-span-8 flex flex-col gap-8 text-left">
              
              {/* Header info */}
              <div>
                <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-navy-light mb-4 transition-colors">
                  <ArrowLeft size={14} />
                  <span>Back to All Courses</span>
                </Link>
                <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/5 px-2.5 py-1 rounded-md border border-gold/10 inline-block mb-3">
                  {course.department}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy">
                  {course.name}
                </h1>
              </div>

              {/* Quick specifications strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-border rounded-xl p-4 bg-surface/30">
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Duration</span>
                  <span className="text-sm font-bold text-navy flex items-center gap-1.5 mt-1">
                    <Clock size={16} className="text-navy-light" />
                    {course.duration}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Program Fees</span>
                  <span className="text-sm font-bold text-navy flex items-center gap-1.5 mt-1">
                    <Award size={16} className="text-navy-light" />
                    {course.fees.split("/")[0]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Mode</span>
                  <span className="text-sm font-bold text-navy flex items-center gap-1.5 mt-1">
                    <BookOpen size={16} className="text-navy-light" />
                    Full-Time
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Accreditation</span>
                  <span className="text-sm font-bold text-navy flex items-center gap-1.5 mt-1">
                    <CheckCircle2 size={16} className="text-navy-light" />
                    NAAC A++
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-border-light pb-2 flex items-center gap-2">
                  <FileText size={18} className="text-navy-light" />
                  <span>Programme Overview</span>
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed font-body">
                  {course.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-border-light pb-2 flex items-center gap-2">
                  <Award size={18} className="text-navy-light" />
                  <span>Key Highlights</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-text-secondary bg-surface/30 p-3.5 rounded-lg border border-border-light">
                      <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-border-light pb-2 flex items-center gap-2">
                  <AlertCircle size={18} className="text-navy-light" />
                  <span>Eligibility Criteria</span>
                </h2>
                <div className="bg-amber-50 border border-amber-200/60 p-4 rounded-lg flex gap-3 text-sm text-amber-900">
                  <div className="bg-amber-100 p-2 rounded-full h-fit flex-shrink-0">
                    <AlertCircle size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-950 mb-1">Academic Requirement:</h4>
                    <p className="leading-relaxed">{course.eligibility}</p>
                  </div>
                </div>
              </div>

              {/* Syllabus Curriculum Accordion */}
              <div className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-border-light pb-2 flex items-center gap-2">
                  <BookOpen size={18} className="text-navy-light" />
                  <span>Curriculum Details</span>
                </h2>
                <p className="text-xs text-text-muted mb-4 font-semibold">
                  Representative core subjects covered during the course:
                </p>
                
                <div className="space-y-3">
                  {course.syllabus.map((subject, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-4 bg-surface/30 text-left font-bold text-navy text-sm hover:bg-surface transition-colors"
                      >
                        <span>Subject Module {index + 1}: {subject}</span>
                        <ChevronRight
                          size={16}
                          className={`text-text-muted transition-transform duration-200 ${
                            openAccordion === index ? "transform rotate-90" : ""
                          }`}
                        />
                      </button>
                      {openAccordion === index && (
                        <div className="p-4 bg-white border-t border-border text-xs text-text-secondary leading-relaxed">
                          Comprehensive learning module details regarding {subject} syllabus, theoretical foundations, practical laboratory experiments, and industry project guidelines.
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Prospects */}
              <div className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-border-light pb-2 flex items-center gap-2">
                  <Briefcase size={18} className="text-navy-light" />
                  <span>Career Opportunities & Placements</span>
                </h2>
                <p className="text-xs text-text-muted mb-5 leading-relaxed">
                  Graduates of {course.shortName} from HITS find excellent opportunities in top-tier organizations in job roles including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.careers.map((career, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-surface/30 px-4 py-3 rounded-lg border border-border-light text-sm font-semibold text-text-primary">
                      <div className="bg-navy/5 h-2 w-2 rounded-full flex-shrink-0" />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar form */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
                <h3 className="text-xl font-bold text-navy mb-1 text-center">Interested in this course?</h3>
                <p className="text-text-secondary text-xs mb-5 text-center leading-relaxed">
                  Connect with our HITS admissions counsellor for cutoff advice and fees details.
                </p>
                <EnquiryForm initialCourseSlug={course.slug} />
              </div>

              <div className="mt-6 border border-border rounded-xl p-4 bg-surface/30 flex gap-3 text-xs text-text-secondary">
                <AlertCircle size={18} className="text-navy flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Need instant help?</strong> Call our HITS counselor helpdesk at <a href="tel:+914427474262" className="text-navy font-bold hover:underline">+91 (44) 2747 4262</a> during business hours (9:00 AM to 5:00 PM).
                </p>
              </div>
            </div>

          </div>
        </div>

        <Footer />
        <EnquiryModal />
        <FloatingCTA />
      </div>
    </ModalProvider>
  );
}
