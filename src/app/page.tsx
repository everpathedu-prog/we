"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { departments, courses } from "@/data/courses";
import {
  Award,
  Calendar,
  Users,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  MapPin
} from "lucide-react";

function HomeContent() {
  const { openModal } = useModal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Filter featured courses
  const featuredCourses = courses.filter((c) => c.isFeatured);

  const testimonials = [
    {
      name: "Abishek R.",
      course: "B.Tech Computer Science & Engineering",
      batch: "Class of 2024",
      placement: "Placed at Microsoft (₹42 LPA)",
      quote: "HITS provided me with the perfect blend of academic guidance and practical coding exposure. The IBM collaboration labs gave me hands-on experience in cloud architecture and deep learning that set me apart during recruitment interviews.",
      imageBg: "from-blue-600 to-indigo-700"
    },
    {
      name: "Sneha Nair",
      course: "MBA — General Management",
      batch: "Class of 2023",
      placement: "Placed at KPMG (₹12 LPA)",
      quote: "The business case-study model at HITS School of Management is outstanding. The industry seminars, interaction with startup founders, and mandatory internship helped me build strong corporate networks before graduating.",
      imageBg: "from-amber-500 to-orange-600"
    },
    {
      name: "Karthik Raja",
      course: "B.Arch — Bachelor of Architecture",
      batch: "Class of 2022",
      placement: "Junior Architect at L&T Infrastructure",
      quote: "Studying architecture at HITS was an enriching journey. The design studios are equipped with high-end workstation systems, and the professors encourage sustainable and climate-resilient designs. The NATA coaching here is top-notch.",
      imageBg: "from-emerald-500 to-teal-700"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const usps = [
    {
      icon: <Award className="text-gold h-8 w-8" />,
      title: "NAAC A++ Accreditation",
      description: "Highest ranking grade awarded by NAAC with CGPA of 3.62/4, validating our academic and infrastructure excellence."
    },
    {
      icon: <Users className="text-gold h-8 w-8" />,
      title: "Industry Partnerships",
      description: "Active collaboration with global giants like IBM, Google, Amazon, and Cognizant for curriculum design and lab setup."
    },
    {
      icon: <Briefcase className="text-gold h-8 w-8" />,
      title: "95% Placement Record",
      description: "Dedicated placement cell ensuring high-quality job offers from over 500+ top recruiters and fortune 500 companies."
    },
    {
      icon: <Building2 className="text-gold h-8 w-8" />,
      title: "Premium Campus & Labs",
      description: "Over 150+ acres of green smart campus in Chennai with cutting-edge computing resources, workshops, and libraries."
    }
  ];

  const stats = [
    { label: "Highest Package", value: 42, suffix: " LPA", prefix: "₹", isCounter: true },
    { label: "Placement Rate", value: 95, suffix: "%", prefix: "", isCounter: true },
    { label: "Recruiters", value: 500, suffix: "+", prefix: "", isCounter: true },
    { label: "UG & PG Programs", value: 100, suffix: "+", prefix: "", isCounter: true }
  ];

  const partnerLogos = [
    { name: "IBM", desc: "Co-Branded CSE Labs" },
    { name: "Google Cloud", desc: "Associate Cloud Training" },
    { name: "NVIDIA", desc: "AI Lab Infrastructure" },
    { name: "L&T", desc: "Civil Engineering Tie-ups" },
    { name: "Ashok Leyland", desc: "Automotive Technology Workshops" },
    { name: "Cognizant", desc: "Strategic Recruiting Partner" }
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Navbar />

      {/* ─── SECTION 1: HERO SECTION ─── */}
      <section className="relative text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/hits.jpeg"
          alt="Hindustan University Campus"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Decorative Light Radial */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-navy-light/40 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left animate-slide-in-right">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light border border-gold/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit">
                <Sparkles size={14} className="animate-spin duration-3000" />
                <span>HITS Admission 2026 Now Open</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Shape Your Future at <span className="gradient-text-gold">Hindustan University</span>
              </h1>

              {/* 🔥 80% Scholarship Banner */}
              <div 
                onClick={() => openModal()}
                className="relative w-full sm:w-fit max-w-md animate-fade-in-up cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-2xl border border-white/20 animate-pulse-glow">
                  <div className="flex flex-col items-center justify-center bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-inner flex-shrink-0">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-none tracking-tighter">80%</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-navy/70 uppercase tracking-wider">Scholarship</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm sm:text-base md:text-lg font-extrabold text-white leading-tight">Scholarship Available!</span>
                    <span className="text-[10px] sm:text-xs text-white/90 font-medium leading-normal mt-0.5">Merit-based fee waiver for qualifying students</span>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Elevate your education at Chennai&apos;s leading NAAC A++ accredited university. 100+ programmes in Engineering, Management, Law, and Design with premium placements.
              </p>

              {/* WhatsApp Quick Enquiry Button */}
              <div className="mt-2 mb-2">
                <a
                  href="https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20Hindustan%20University%20B.Tech%20Admissions%202026.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all w-fit text-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.927 14.133.91 11.5.91c-5.437 0-9.863 4.42-9.866 9.863-.001 1.702.469 3.366 1.36 4.842L2.032 21.05l5.615-1.472L6.648 19.154zM17.487 14.39c-.3-.15-1.782-.88-2.05-.98-.268-.1-.463-.15-.658.15-.195.3-.755.98-.927 1.18-.171.2-.343.225-.643.075-.3-.15-1.27-.47-2.418-1.494-.894-.798-1.502-1.783-1.678-2.083-.176-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.658-1.583-.902-2.17-.238-.57-.498-.49-.658-.5-.152-.007-.327-.008-.5-.008-.175 0-.46.066-.7.325-.24.26-.915.894-.915 2.178 0 1.285.934 2.528 1.064 2.7.13.174 1.838 2.808 4.453 3.937.622.268 1.108.428 1.488.548.625.2 1.194.171 1.644.105.502-.075 1.782-.728 2.034-1.432.252-.705.252-1.31.177-1.43-.075-.12-.27-.195-.57-.345z" />
                  </svg>
                  <span>Quick Enquiry via WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-2 max-w-lg">
                <div>
                  <p className="text-xl font-bold text-gold-light">A++ Grade</p>
                  <p className="text-xs text-white/60">NAAC Rating</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gold-light">40+ Years</p>
                  <p className="text-xs text-white/60">Academic Legacy</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gold-light">₹42 LPA</p>
                  <p className="text-xs text-white/60">Highest Package</p>
                </div>
              </div>
            </div>

            {/* Embedded Form (Right side) */}
            <div className="lg:col-span-5 animate-fade-in-up delay-200">
              <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8 max-w-md mx-auto text-text-primary">
                <h2 className="text-2xl font-bold text-navy mb-1 text-center">Admission Enquiry</h2>
                <p className="text-text-secondary text-sm mb-5 text-center">
                  Submit details to receive our brochure and cutoff alerts.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TRUST BAR ─── */}
      <section className="bg-navy border-y border-navy-light/20 py-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 text-center">
            <div className="flex items-center gap-3">
              <Award className="text-gold h-6 w-6 flex-shrink-0" />
              <span className="text-sm font-semibold tracking-wide">NAAC A++ ACCREDITED</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-gold h-6 w-6 flex-shrink-0" />
              <span className="text-sm font-semibold tracking-wide">ESTABLISHED IN 1985</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="text-gold h-6 w-6 flex-shrink-0" />
              <span className="text-sm font-semibold tracking-wide">100+ PROGRAMMES</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-gold h-6 w-6 flex-shrink-0" />
              <span className="text-sm font-semibold tracking-wide">10,000+ ALUMNI WORLDWIDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: COURSE DEPARTMENTS ─── */}
      <section className="section bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Explore Our Course Departments"
            subtitle="Academic Specialisations"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/courses?department=${dept.slug}`}
                className="bg-white border border-border rounded-xl p-6 hover:border-gold card-hover flex flex-col justify-between group"
              >
                <div>
                  <span className="text-3xl mb-4 block" role="img" aria-label={dept.name}>
                    {dept.icon}
                  </span>
                  <h3 className="text-lg font-bold text-navy group-hover:text-navy-light transition-colors mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {dept.count} Programmes Available
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold mt-6 group-hover:gap-2.5 transition-all">
                  <span>View Courses</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY HITS ─── */}
      <section className="section bg-white">
        <div className="section-container">
          <SectionHeading
            title="Why Choose Hindustan University?"
            subtitle="The HITS Edge"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 border border-border-light rounded-xl bg-surface/40 hover:bg-surface transition-colors"
              >
                <div className="bg-navy/5 p-4 rounded-full mb-5 text-navy">
                  {usp.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{usp.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: INDUSTRY LOGO STRIP ─── */}
      <section className="bg-surface py-12 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            Leading Knowledge & Training Partners
          </h4>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex gap-12 whitespace-nowrap items-center py-2">
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-lg px-6 py-4 shadow-sm inline-flex flex-col items-center justify-center min-w-[200px]"
              >
                <span className="font-extrabold text-navy text-lg tracking-wider">{logo.name}</span>
                <span className="text-[10px] font-bold text-text-muted mt-1 uppercase tracking-wide">
                  {logo.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FEATURED COURSES ─── */}
      <section className="section bg-white">
        <div className="section-container">
          <SectionHeading
            title="Featured Academic Programmes"
            subtitle="Trending Fields"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.slug}
                className="bg-white border border-border rounded-xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-navy"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/5 px-2.5 py-1 rounded-md border border-gold/10">
                      {course.department}
                    </span>
                    <span className="text-xs font-semibold text-text-muted">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-1">
                    {course.name}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-3 mb-5 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {course.highlights.slice(0, 3).map((hl, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface px-6 py-4 border-t border-border flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-text-muted font-semibold uppercase">Course Fee</span>
                    <span className="text-sm font-bold text-navy">{course.fees.split("/")[0]}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="border border-navy text-navy font-bold px-4 py-2 rounded-lg text-xs hover:bg-navy hover:text-white transition-all"
                    >
                      Syllabus
                    </Link>
                    <button
                      onClick={() => openModal(course.slug)}
                      className="bg-gold text-text-on-gold font-bold px-4 py-2 rounded-lg text-xs hover:bg-gold-light transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses" className="btn-outline inline-flex items-center gap-2">
              <span>View All 100+ Programmes</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: PLACEMENT STATS ─── */}
      <section className="section gradient-navy text-white relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="section-container relative z-10">
          <SectionHeading
            title="Premium Career Placements"
            subtitle="HITS Placement Milestones"
            align="center"
            light={true}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center gap-2">
                <div className="text-3xl md:text-5xl lg:text-6xl font-black text-gold-light tracking-tight">
                  {stat.isCounter ? (
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `${stat.prefix}${stat.value}${stat.suffix}`
                  )}
                </div>
                <div className="h-1 w-10 bg-gold rounded-full my-1" />
                <span className="text-sm font-semibold tracking-wide text-white/70 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Are you ready to join over 10,000+ global alumni?</h3>
              <p className="text-sm text-white/75">
                Our active campus placement recruitment for the 2026 batch has officially commenced.
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className="btn-primary py-3 px-8 text-sm font-bold flex-shrink-0 animate-pulse-glow"
            >
              Start Placement Registration
            </button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TESTIMONIALS ─── */}
      <section className="section bg-surface">
        <div className="section-container">
          <SectionHeading
            title="What Our Successful Alumni Say"
            subtitle="Student Testimonials"
            align="center"
          />

          <div className="max-w-4xl mx-auto relative mt-8">
            <div className="bg-white border border-border rounded-2xl shadow-md p-6 md:p-10 min-h-[300px] flex flex-col justify-between">
              <div>
                <span className="text-6xl text-gold font-serif leading-none block mb-2">&ldquo;</span>
                <p className="text-base md:text-lg text-text-secondary italic leading-relaxed mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-border-light pt-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-tr ${testimonials[activeTestimonial].imageBg} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base leading-none">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <span className="text-xs font-semibold text-text-muted mt-1 block">
                      {testimonials[activeTestimonial].course} ({testimonials[activeTestimonial].batch})
                    </span>
                  </div>
                </div>
                <div className="bg-gold/10 border border-gold/20 text-gold-dark font-bold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 w-fit">
                  <Briefcase size={14} />
                  <span>{testimonials[activeTestimonial].placement}</span>
                </div>
              </div>
            </div>

            {/* Slider arrows */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handlePrevTestimonial}
                className="p-3 rounded-full border border-border bg-white text-navy hover:bg-navy hover:text-white transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-3 rounded-full border border-border bg-white text-navy hover:bg-navy hover:text-white transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CAMPUS GALLERY ─── */}
      <section className="section bg-white">
        <div className="section-container">
          <SectionHeading
            title="Life on HITS Campus"
            subtitle="Campus Facilities"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl h-64 border border-border shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-indigo-900 flex items-center justify-center text-white p-6 text-center">
                <div>
                  <GraduationCap size={40} className="mx-auto text-gold mb-3 animate-float" />
                  <h4 className="font-bold text-lg">Main Administrative block</h4>
                  <p className="text-xs text-white/70 mt-1">Smart classrooms & lecture theatres</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-64 border border-border shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-emerald-950 flex items-center justify-center text-white p-6 text-center">
                <div>
                  <BookOpen size={40} className="mx-auto text-gold mb-3 animate-float" />
                  <h4 className="font-bold text-lg">Central Library</h4>
                  <p className="text-xs text-white/70 mt-1">100K+ volumes & e-journal access</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-64 border border-border shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-amber-950 flex items-center justify-center text-white p-6 text-center">
                <div>
                  <Building2 size={40} className="mx-auto text-gold mb-3 animate-float" />
                  <h4 className="font-bold text-lg">Modern IT Research Labs</h4>
                  <p className="text-xs text-white/70 mt-1">IBM, Google Cloud & NVIDIA labs</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-64 border border-border shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-purple-950 flex items-center justify-center text-white p-6 text-center">
                <div>
                  <MapPin size={40} className="mx-auto text-gold mb-3 animate-float" />
                  <h4 className="font-bold text-lg">Student hostels & sports</h4>
                  <p className="text-xs text-white/70 mt-1">State-of-the-art courts & facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryModal />
      <FloatingCTA />
    </div>
  );
}

export default function Home() {
  return (
    <ModalProvider>
      <HomeContent />
    </ModalProvider>
  );
}
