"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { departments, courses } from "@/data/courses";
import { Search, Filter, BookOpen, Clock, ArrowRight } from "lucide-react";

function CoursesContent() {
  const { openModal } = useModal();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  // Sync with search param from homepage department links
  useEffect(() => {
    const deptParam = searchParams.get("department");
    if (deptParam) {
      setSelectedDept(deptParam);
    }
  }, [searchParams]);

  // Filter courses based on search term and selected department
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.eligibility.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === "all" || course.departmentSlug === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="flex-1 flex flex-col">
      <Navbar />

      {/* Header section with solid color background */}
      <section className="relative text-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <Image src="/hits.jpeg" alt="Hindustan University Courses" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
            Academic Portfolio 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Explore HITS Programmes
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Discover a wide range of undergraduate, postgraduate, and doctoral degrees designed to match your industry ambitions.
          </p>
        </div>
      </section>

      {/* Search and Filters Strip */}
      <section className="bg-white border-b border-border py-6 sticky top-[72px] md:top-[80px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-4 items-center justify-between">

          {/* Search Input */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search courses (e.g. Computer Science, MBA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 w-full"
            />
          </div>

          {/* Department Quick Filter Buttons */}
          <div className="w-full lg:w-auto flex overflow-x-auto gap-2.5 pb-2 lg:pb-0 scrollbar-none scroll-smooth">
            <button
              onClick={() => setSelectedDept("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-shrink-0 border ${selectedDept === "all"
                  ? "bg-navy border-navy text-white"
                  : "bg-surface border-border text-text-secondary hover:bg-border-light"
                }`}
            >
              All Courses
            </button>
            {departments.map((dept) => (
              <button
                key={dept.slug}
                onClick={() => setSelectedDept(dept.slug)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-shrink-0 border ${selectedDept === dept.slug
                    ? "bg-navy border-navy text-white"
                    : "bg-surface border-border text-text-secondary hover:bg-border-light"
                  }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid Listings */}
      <section className="section bg-surface flex-1">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-bold text-text-secondary">
              Showing <span className="text-navy">{filteredCourses.length}</span> programmes
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white border border-border rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
                >
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/5 px-2.5 py-1 rounded-md border border-gold/10 inline-block mb-3">
                      {course.department}
                    </span>
                    <h3 className="text-lg font-bold text-navy group-hover:text-navy-light transition-colors mb-2">
                      {course.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                      {course.description}
                    </p>

                    <div className="flex gap-4 border-t border-border-light pt-4 mt-4">
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                        <Clock size={14} className="text-text-muted" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                        <BookOpen size={14} className="text-text-muted" />
                        <span>Syllabus Available</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface px-6 py-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-bold text-navy">{course.fees.split("/")[0]}</span>
                    <div className="flex gap-2">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="bg-white border border-border hover:bg-navy hover:text-white hover:border-navy text-navy font-bold px-3 py-1.5 rounded-lg text-xs transition-all"
                      >
                        Syllabus
                      </Link>
                      <button
                        onClick={() => openModal(course.slug)}
                        className="bg-gold text-text-on-gold font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-gold-light transition-all"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-border">
              <BookOpen className="mx-auto text-text-muted mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-1">No Programmes Found</h3>
              <p className="text-sm text-text-secondary mb-6">
                We couldn&apos;t find any courses matching your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("all");
                }}
                className="btn-primary py-2 px-6 text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <EnquiryModal />
      <FloatingCTA />
    </div>
  );
}

export default function Courses() {
  return (
    <ModalProvider>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-surface">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-navy"></div>
        </div>
      }>
        <CoursesContent />
      </Suspense>
    </ModalProvider>
  );
}
