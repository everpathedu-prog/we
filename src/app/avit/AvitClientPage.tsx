"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { AvitNavbar } from "@/components/AvitNavbar";
import { AvitFooter } from "@/components/AvitFooter";
import { AvitEnquiryForm } from "@/components/AvitEnquiryForm";
import { AvitEnquiryModal } from "@/components/AvitEnquiryModal";
import { avitCourses } from "@/data/avitCourses";
import {
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Star,
  Briefcase,
  Sparkles,
  MapPin,
  Globe,
  Phone,
  Cpu,
  ShieldCheck,
  Building,
  Target,
  Mail,
  Search,
  Filter,
} from "lucide-react";

function AvitPageContent() {
  const { openModal } = useModal();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const testimonials = [
    {
      name: "Karthik R.",
      course: "B.Tech Computer Science & Engineering",
      batch: "Batch of 2024",
      quote: "AVIT's CSE program gave me hands-on industry skills from day one. The placement cell helped me land a high-package role at a leading tech company right after graduation.",
      rating: 5,
      avatarBg: "from-blue-600 to-indigo-700"
    },
    {
      name: "Priya M.",
      course: "B.Tech ECE",
      batch: "Batch of 2025",
      quote: "The electronics labs at AVIT are exceptional. Having professors who come from industry backgrounds made all the difference in understanding real-world applications.",
      rating: 5,
      avatarBg: "from-red-500 to-orange-600"
    },
    {
      name: "Arun S.",
      course: "B.Tech Mechanical Engineering",
      batch: "Batch of 2024",
      quote: "From CNC machining workshops to CAD design competitions, AVIT's mechanical department prepared me comprehensively. I got placed in a top manufacturing firm.",
      rating: 5,
      avatarBg: "from-emerald-500 to-teal-700"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "AICTE Approved",
      desc: "Government Recognized"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "10 B.Tech Branches",
      desc: "Diverse Engineering Fields"
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Affordable Fees",
      desc: "Starting ₹80,000/yr"
    },
    {
      icon: <Building className="w-8 h-8 text-gold" />,
      title: "Vinayaka Missions",
      desc: "Chennai Campus"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold" />,
      title: "Paiyanoor Campus",
      desc: "Near Chennai OMR"
    }
  ];

  const avitWhyChoose = [
    {
      icon: <Cpu className="w-10 h-10 text-gold" />,
      title: "Industry-Ready Labs",
      desc: "Modern computing, electronics, and mechanical labs equipped with latest tools for hands-on learning and prototype development."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Strong Placement Cell",
      desc: "Dedicated placement team conducts mock interviews, aptitude training, and hosts 100+ corporate recruiters on campus annually."
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: "Experienced Faculty",
      desc: "Academic modules designed and delivered by qualified doctorates and industry professionals with active research backgrounds."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold" />,
      title: "Holistic Development",
      desc: "Technical clubs, sports facilities, cultural fests, and entrepreneurship cells for complete personality development."
    }
  ];

  // Departments for filtering
  const departments = ["all", "Computer Science & IT", "Core & Bio Engineering"];

  // Filtered courses list
  const filteredCourses = avitCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "all" || course.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="theme-avit relative min-h-screen bg-background text-text-primary overflow-x-hidden flex flex-col">
      {/* ─── SECTION 1: TOP UTILITY BAR ─── */}
      <div className="bg-navy-dark text-white text-[11px] md:text-xs py-2 px-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 relative z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={13} className="text-gold" />
            <a href="tel:+917339329264" className="hover:text-gold transition-colors font-medium">
              Helpline: +917339329264
            </a>
          </span>
          <span className="h-3 w-px bg-white/20 hidden sm:inline" />
          <span className="flex items-center gap-1 font-semibold text-gold-light">
            <Sparkles size={13} className="animate-pulse" />
            AVIT B.Tech Admissions Open 2026
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-90">
          <Globe size={13} className="text-white/60" />
          <span>Vinayaka Missions Chennai Campus</span>
        </div>
      </div>

      <AvitNavbar />

      {/* ─── SECTION 3: HERO SECTION ─── */}
      <section id="home" className="relative text-white overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 min-h-[95vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/avit_campus.png"
          alt="AVIT Campus Paiyanoor"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-light/60 mix-blend-multiply" />

        {/* Modern Grid Background Accent */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Decorative Light Blob */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold-light border border-white/15 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider w-fit backdrop-blur-sm">
                <Sparkles size={14} className="text-gold" />
                <span>Admissions 2026-27 Open</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                AVIT <span className="text-gold-light">B.Tech Admissions</span>
              </h1>

              {/* 🔥 80% Scholarship Banner */}
              <div className="relative w-fit">
                <div className="flex items-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl px-6 py-4 shadow-2xl border-2 border-white/20 animate-pulse-glow">
                  <div className="flex flex-col items-center justify-center bg-white rounded-xl px-4 py-2 shadow-inner">
                    <span className="text-4xl md:text-5xl font-black text-navy leading-none tracking-tighter">80%</span>
                    <span className="text-[10px] font-bold text-navy/70 uppercase tracking-wider">Scholarship</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-extrabold text-white leading-tight">Scholarship Available!</span>
                    <span className="text-xs text-white/90 font-medium">Merit-based fee waiver for qualifying students</span>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-xl">
                Build your engineering career at Aarupadai Veedu Institute of Technology. Choose from 10 B.Tech branches with affordable fees and strong industry placement support.
              </p>

              {/* USP Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 mt-2 max-w-lg">
                <div>
                  <p className="text-2xl font-bold text-gold-light">AICTE</p>
                  <p className="text-xs text-white/75">Approved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">10 Branches</p>
                  <p className="text-xs text-white/75">B.Tech Programmes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">100%</p>
                  <p className="text-xs text-white/75">Placement Assist</p>
                </div>
              </div>
            </div>

            {/* Form Right Side */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8 max-w-md mx-auto text-text-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-bl-lg">
                  Booking Desk
                </div>
                <h2 className="text-2xl font-bold text-navy mb-1 text-center">Admission Enquiry</h2>
                <p className="text-text-secondary text-sm mb-5 text-center">
                  Submit details to receive brochures, fee info & book your seat.
                </p>
                <AvitEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: TRUST BAR ─── */}
      <section className="bg-navy border-y border-white/10 py-8 text-white relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center items-center">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-1.5 p-3 hover:bg-white/5 rounded-xl transition-colors">
                <div className="p-2 bg-white/5 rounded-full mb-1">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-sm text-white tracking-wide">{badge.title}</h4>
                <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: ABOUT SECTION ─── */}
      <section id="about" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full w-fit">
                About the Institution
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                Shape Your Engineering Future at AVIT
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full" />

              <div className="text-text-secondary space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  Aarupadai Veedu Institute of Technology (AVIT) is a constituent institution of Vinayaka Missions Research Foundation (Deemed to be University), located in the serene campus at Paiyanoor near Chennai.
                </p>
                <p>
                  With a focus on providing quality technical education, AVIT offers 10 B.Tech engineering programmes across Computer Science, Electronics, Core Engineering, and Bio-Technology streams. The campus features modern labs, experienced faculty, and a vibrant student community.
                </p>
                <p className="font-semibold text-navy">
                  AVIT provides affordable, industry-aligned engineering education with dedicated placement support to launch successful tech careers.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">AICTE Approved</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Vinayaka Missions University</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Modern Lab Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Right image column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <div className="relative w-full h-[320px] md:h-[400px]">
                  <Image
                    src="/avit_campus.png"
                    alt="AVIT Campus Infrastructure"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="font-bold text-lg">AVIT Main Campus</h4>
                  <p className="text-xs text-white/80">Paiyanoor, Kancheepuram — Near Chennai OMR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: COURSES & FEES GRID ─── */}
      <section id="courses" className="py-20 md:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            Courses & Fees
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            B.Tech Programme Annual Fees
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-10">
            Explore our 10 B.Tech branches with transparent, affordable annual fee structures.
          </p>

          {/* Search & filters controls */}
          <div className="bg-white border border-border rounded-xl p-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm text-left mb-8">
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-3.5 text-text-muted" />
              <input
                type="text"
                placeholder="Search engineering branch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border pl-10 pr-4 py-2.5 rounded-lg text-xs font-medium focus:border-navy focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <Filter size={15} className="text-navy flex-shrink-0" />
              <span className="text-xs font-bold text-navy hidden sm:inline">Filter Area:</span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full md:w-60 bg-surface border border-border px-3 py-2.5 rounded-lg text-xs font-medium focus:border-navy focus:outline-none cursor-pointer"
              >
                <option value="all">All Departments</option>
                {departments.filter(d => d !== "all").map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table Wrapper */}
          <div className="max-w-5xl mx-auto overflow-x-auto bg-white border border-border rounded-2xl shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs">
              <thead>
                <tr className="bg-navy text-white text-[10px] uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Course Programme</th>
                  <th className="py-4 px-4 font-bold text-center">Duration</th>
                  <th className="py-4 px-4 font-bold text-center">Annual Fee</th>
                  <th className="py-4 px-6 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <tr key={course.slug} className="hover:bg-surface/40 transition-colors">
                      <td className="py-4.5 px-6">
                        <p className="font-bold text-navy text-sm">{course.name}</p>
                        <p className="text-[10px] text-text-muted mt-0.5">{course.department}</p>
                      </td>
                      <td className="py-4.5 px-4 text-center font-medium text-text-secondary">{course.duration}</td>
                      <td className="py-4.5 px-4 text-center">
                        <span className="font-extrabold text-navy text-sm">{course.annualFee}</span>
                        <span className="text-[10px] text-text-muted block">per year</span>
                      </td>
                      <td className="py-4.5 px-6 text-right">
                        <button
                          onClick={() => openModal(course.slug)}
                          className="bg-navy hover:bg-navy-light text-white font-bold px-3 py-2 rounded-lg text-[10px] transition-colors cursor-pointer"
                        >
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-text-muted font-medium text-sm">
                      No B.Tech courses matching search query or selected department.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: WHY CHOOSE AVIT ─── */}
      <section id="why-avit" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            The AVIT Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            Why Choose AVIT?
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-16">
            Affordable engineering education backed by modern infrastructure, dedicated faculty, and a strong placement ecosystem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {avitWhyChoose.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-surface/30 hover:bg-surface hover:-translate-y-1 transition-all"
              >
                <div className="bg-navy/5 p-4 rounded-full mb-5 text-navy">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            What Our Alumni Say
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-16">
            Hear from AVIT alumni who launched successful engineering careers through our programmes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-2xl p-6 md:p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-gold">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary italic leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-border-light pt-5 mt-auto">
                  <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${test.avatarBg} flex items-center justify-center text-white font-bold text-base shadow-inner`}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm leading-none">{test.name}</h4>
                    <span className="text-[10px] text-text-muted font-semibold mt-1.5 block">
                      {test.course} <br />
                      <span className="text-gold-dark font-medium">{test.batch}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: PLACEMENT CTA BANNER ─── */}
      <section className="py-16 md:py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Careers & Placements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            100% Placement Registration Assistance
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
            Our placement cell holds strategic tie-ups with leading corporations. Register early to access training programs and secure campus recruitment opportunities.
          </p>
          <button
            onClick={() => openModal()}
            className="btn-primary py-3 px-8 mt-2 text-sm font-bold shadow-xl animate-pulse-glow"
          >
            Start Placement Registration
          </button>
        </div>
      </section>

      {/* ─── SECTION 10: CONTACT DETAILS ─── */}
      <section id="contact" className="py-16 md:py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            Helpline Desk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            Get in Touch with Admissions
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-14">
            Queries regarding eligibility, fee details, hostel facilities or campus visit? Contact us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface rounded-2xl p-6 text-left border border-border flex items-start gap-4">
              <div className="bg-navy/5 p-3 rounded-xl text-navy flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-base">Paiyanoor Campus</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Aarupadai Veedu Institute of Technology, Paiyanoor, Kancheepuram District, Tamil Nadu 603104
                </p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 text-left border border-border flex items-start gap-4">
              <div className="bg-navy/5 p-3 rounded-xl text-navy flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-base">Helpline Support</h4>
                <p className="text-xs text-text-secondary mt-1.5">
                  General admissions & seat booking desk:
                </p>
                <a href="tel:+917339329264" className="text-gold-dark font-bold text-sm hover:underline mt-1.5 block">
                  +917339329264
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 text-left border border-border flex items-start gap-4">
              <div className="bg-navy/5 p-3 rounded-xl text-navy flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-base">Admissions Desk Email</h4>
                <p className="text-xs text-text-secondary mt-1.5">
                  Send applications & certificates to:
                </p>
                <a href="mailto:everpathedu@gmail.com" className="text-gold-dark font-bold text-sm hover:underline mt-1.5 block">
                  everpathedu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AvitFooter />
      <AvitEnquiryModal />
    </div>
  );
}

export function AvitClientPage() {
  return (
    <ModalProvider>
      <AvitPageContent />
    </ModalProvider>
  );
}
export default AvitClientPage;
