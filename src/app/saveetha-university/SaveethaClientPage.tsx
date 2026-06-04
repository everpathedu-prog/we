"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { SaveethaNavbar } from "@/components/SaveethaNavbar";
import { SaveethaFooter } from "@/components/SaveethaFooter";
import { SaveethaEnquiryForm } from "@/components/SaveethaEnquiryForm";
import { SaveethaEnquiryModal } from "@/components/SaveethaEnquiryModal";
import { saveethaCourses } from "@/data/saveethaCourses";
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
  Calculator,
  Grid,
  Filter,
  Search,
  Percent
} from "lucide-react";

function SaveethaPageContent() {
  const { openModal } = useModal();

  // Interactive Calculator State
  const [selectedCourseSlug, setSelectedCourseSlug] = useState(saveethaCourses[0].slug);
  const [selectedSlab, setSelectedSlab] = useState<"slab_50_59" | "slab_60_69" | "slab_70_79" | "slab_80_89" | "slab_90_100">("slab_70_79");

  // Fee view tab: "calc" or "grid"
  const [feeViewTab, setFeeViewTab] = useState<"calc" | "grid">("calc");

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const testimonials = [
    {
      name: "Sanjay Kumar M.",
      course: "B.Tech Computer Science & Engineering",
      batch: "Batch of 2024",
      quote: "Saveetha's marks-based scholarship made my engineering dream a reality. The world-class laboratories and computing environment here helped me secure a high-package tech role.",
      rating: 5,
      avatarBg: "from-blue-600 to-indigo-700"
    },
    {
      name: "Haritha V.",
      course: "B.Tech AI & Data Science",
      batch: "Batch of 2025",
      quote: "The labs at Saveetha are comparable to corporate R&D wings. The fee structure is extremely transparent, and having high board marks meant I paid zero tuition fees!",
      rating: 5,
      avatarBg: "from-red-500 to-orange-600"
    },
    {
      name: "Mohammed Rafi",
      course: "B.Tech Electronics & Communication",
      batch: "Batch of 2024",
      quote: "Highly structured engineering curriculum. The interactive learning spaces and mandatory placement training semesters helped me clear multiple campus recruiter rounds.",
      rating: 5,
      avatarBg: "from-emerald-500 to-teal-700"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "UGC Recognition",
      desc: "Deemed University Standards"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "16 B.Tech Branches",
      desc: "Comprehensive Tech Fields"
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Merit Fee Slabs",
      desc: "Discounts Up To 100%"
    },
    {
      icon: <Building className="w-8 h-8 text-gold" />,
      title: "Top-Tier SEC Labs",
      desc: "₹15Cr+ Invested in Labs"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold" />,
      title: "Chennai Campus",
      desc: "Thandalam Tech Corridor"
    }
  ];

  const secWhyChoose = [
    {
      icon: <Cpu className="w-10 h-10 text-gold" />,
      title: "High-End Research Labs",
      desc: "Equipped with state-of-the-art supercomputing modules, 3D printing dentals, and specialized VLSI design toolkits."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Mandatory Internships",
      desc: "Continuous industry training semesters with leading multi-nationals and local tech firms to ensure corporate readiness."
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: "Expert PhD Faculty",
      desc: "Academic modules designed and facilitated by highly qualified doctorates and active scientific researchers."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold" />,
      title: "100% Placement Drives",
      desc: "A committed placement desk conducting mock interviews, resume bootcamps, and hosting 150+ corporate recruiters annually."
    }
  ];

  // Helper for calculator course lookup
  const currentCalcCourse = saveethaCourses.find(c => c.slug === selectedCourseSlug) || saveethaCourses[0];

  const parseCurrency = (val: string) => {
    return parseInt(val.replace(/[^\d]/g, "")) || 0;
  };

  const formatCurrency = (num: number) => {
    return "₹" + num.toLocaleString("en-IN");
  };

  const getCalculatorDetails = () => {
    if (!currentCalcCourse) return { normalTuition: 0, discount: 0, netTuition: 0, lab: 0, total: 0, isFlat: true };

    if (currentCalcCourse.slabs === null) {
      // Flat fee course
      const flat = parseCurrency(currentCalcCourse.flatFee || "35000");
      const lab = parseCurrency(currentCalcCourse.labFee);
      return {
        normalTuition: flat,
        discount: 0,
        netTuition: flat,
        lab,
        total: flat + lab,
        isFlat: true
      };
    } else {
      // Slab-based course
      const normalTuition = parseCurrency(currentCalcCourse.slabs.slab_50_59);
      const netTuition = parseCurrency(currentCalcCourse.slabs[selectedSlab]);
      const discount = normalTuition - netTuition;
      const lab = parseCurrency(currentCalcCourse.labFee);
      return {
        normalTuition,
        discount,
        netTuition,
        lab,
        total: netTuition + lab,
        isFlat: false
      };
    }
  };

  const calcDetails = getCalculatorDetails();

  // Departments for filtering
  const departments = ["all", "Computer Science & AI", "Computer Science & Engineering", "Electronics & Communication", "Information Technology", "Bio-Sciences", "Core Engineering"];

  // Filtered courses list
  const filteredCourses = saveethaCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "all" || course.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="theme-saveetha relative min-h-screen bg-background text-text-primary overflow-x-hidden flex flex-col">
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
            Saveetha B.Tech Merit Admissions Open 2026
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-90">
          <Globe size={13} className="text-white/60" />
          <span>Official Portal:</span>
          <a
            href="https://saveetha.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gold-light font-medium"
          >
            saveetha.ac.in
          </a>
        </div>
      </div>

      <SaveethaNavbar />

      {/* ─── SECTION 3: HERO SECTION ─── */}
      <section id="home" className="relative text-white overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 min-h-[95vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/saveetha_campus.png"
          alt="Saveetha Engineering College Campus"
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
                Saveetha University <span className="text-gold-light">B.Tech Admissions</span>
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
                Unlock premier tech careers at Chennai's leading engineering hub. Choose from 16 B.Tech branches featuring unique marks-based merit fee discounts up to 100%!
              </p>

              {/* USP Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 mt-2 max-w-lg">
                <div>
                  <p className="text-2xl font-bold text-gold-light">UGC Rec.</p>
                  <p className="text-xs text-white/75">Deemed University</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">16 Branches</p>
                  <p className="text-xs text-white/75">B.Tech Fields</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">Up to 100%</p>
                  <p className="text-xs text-white/75">Merit Scholarship</p>
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
                  Submit details to receive brochures, fee details & check scholarship status.
                </p>
                <SaveethaEnquiryForm />
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
                Simulate Your Technology Career in World-Class Classrooms
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full" />

              <div className="text-text-secondary space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  Saveetha Engineering College (Autonomous), functioning under the prestigious Saveetha Institute of Medical and Technical Sciences (SIMATS), represents a beacon of progressive engineering education in Chennai.
                </p>
                <p>
                  With an autonomous, choice-based curriculum and over ₹15 Crores invested in specialized high-end computing, robotics, and biotechnology facilities, Saveetha provides a learning environment that directly replicates industry engineering roles.
                </p>
                <p className="font-semibold text-navy">
                  To reward academic excellence, our B.Tech programmes feature transparent, percentage-based merit scholarship discount slabs. Students with high Class 12th Board marks can qualify for up to 100% tuition waivers!
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">NBA & NAAC Accredited</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Choice-Based Credit System</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Industrial Incubation Center</span>
                </div>
              </div>
            </div>

            {/* Right image column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <div className="relative w-full h-[320px] md:h-[400px]">
                  <Image
                    src="/saveetha_campus.png"
                    alt="Saveetha Campus Infrastructure"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="font-bold text-lg">Main Academic Circular Building</h4>
                  <p className="text-xs text-white/80">Equipped with circular smart lecture halls & research wings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: INTERACTIVE FEE SLABS & CALCULATOR ─── */}
      <section id="fees" className="py-20 md:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            Fee Slabs & Sponsoring
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            B.Tech Merit Scholarship Slabs
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-10">
            Check your tuition discount based on Class 12th Board marks (PCM percentage). Lab fees are flat.
          </p>

          {/* Toggle Tab header */}
          <div className="flex items-center justify-center mb-10">
            <div className="bg-white border border-border p-1.5 rounded-xl shadow-sm flex items-center gap-1">
              <button
                onClick={() => setFeeViewTab("calc")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${feeViewTab === "calc"
                  ? "bg-navy text-white shadow-md"
                  : "text-text-secondary hover:text-navy hover:bg-surface/60"
                  }`}
              >
                <Calculator size={14} />
                <span>Merit Calculator</span>
              </button>
              <button
                onClick={() => setFeeViewTab("grid")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${feeViewTab === "grid"
                  ? "bg-navy text-white shadow-md"
                  : "text-text-secondary hover:text-navy hover:bg-surface/60"
                  }`}
              >
                <Grid size={14} />
                <span>Full Slabs Matrix</span>
              </button>
            </div>
          </div>

          {/* ── Tab Content 1: Interactive Calculator ── */}
          {feeViewTab === "calc" && (
            <div className="bg-white border border-border rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-navy" />

              {/* Calc Left: selections */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Percent className="text-gold h-5 w-5" />
                  <span>Choose Your Profile</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2.5">
                    Select Your B.Tech Programme
                  </label>
                  <select
                    value={selectedCourseSlug}
                    onChange={(e) => setSelectedCourseSlug(e.target.value)}
                    className="w-full form-input bg-surface/50 border-border border text-sm font-semibold rounded-xl px-4 py-3 focus:border-navy cursor-pointer"
                  >
                    {saveethaCourses.map(course => (
                      <option key={course.slug} value={course.slug}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2.5">
                    Select Your Class 12th Board Marks (PCM %)
                  </label>
                  {currentCalcCourse.slabs === null ? (
                    <div className="bg-surface border border-border rounded-xl p-4 text-center">
                      <p className="text-sm font-bold text-gold-dark">Flat Fee Course</p>
                      <p className="text-[11px] text-text-muted mt-1">
                        Scholarship slabs do not apply to this core engineering or biotechnology program. Enjoy a flat merit fee.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { label: "50-59.9%", key: "slab_50_59" },
                        { label: "60-69.9%", key: "slab_60_69" },
                        { label: "70-79.9%", key: "slab_70_79" },
                        { label: "80-89.9%", key: "slab_80_89" },
                        { label: "90-100%", key: "slab_90_100" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setSelectedSlab(item.key as any)}
                          className={`py-3 px-1.5 rounded-xl border text-center transition-all cursor-pointer ${selectedSlab === item.key
                            ? "bg-navy border-navy text-white font-bold shadow-md"
                            : "bg-surface border-border hover:bg-surface-light text-text-secondary text-xs"
                            }`}
                        >
                          <span className="block font-semibold text-xs leading-none mb-1">{item.label}</span>
                          <span className="text-[9px] opacity-75">
                            {item.key === "slab_90_100" ? "Free Tuition" : ""}
                            {item.key === "slab_80_89" ? "75% Off" : ""}
                            {item.key === "slab_70_79" ? "50% Off" : ""}
                            {item.key === "slab_60_69" ? "25% Off" : ""}
                            {item.key === "slab_50_59" ? "Base Tuition" : ""}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-surface/50 border border-border-light rounded-xl p-4 text-xs text-text-secondary flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <p>
                    This is an estimation. Final seat confirmation and scholarship percentage checks will be conducted by Saveetha counsellors upon reviewing your marksheets.
                  </p>
                </div>
              </div>

              {/* Calc Right: output fees */}
              <div className="lg:col-span-6 bg-surface/50 border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 border-b border-border pb-4 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-navy uppercase tracking-wider bg-navy/5 px-2.5 py-1 rounded-md border border-navy/10">
                        B.Tech Fee Breakdown
                      </span>
                      <h4 className="font-bold text-navy text-base mt-2 leading-tight">
                        {currentCalcCourse.name}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-text-muted shrink-0">
                      {currentCalcCourse.duration}
                    </span>
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Normal Tuition Fee:</span>
                      <span className="font-medium text-navy">{formatCurrency(calcDetails.normalTuition)}/yr</span>
                    </div>

                    {!calcDetails.isFlat && calcDetails.discount > 0 && (
                      <div className="flex justify-between text-success">
                        <span className="font-medium">Merit Scholarship Saved:</span>
                        <span className="font-bold">-{formatCurrency(calcDetails.discount)}/yr</span>
                      </div>
                    )}

                    <div className="flex justify-between text-text-secondary border-t border-border-light pt-3">
                      <span>Net Tuition Fee:</span>
                      <span className="font-bold text-navy">{formatCurrency(calcDetails.netTuition)}/yr</span>
                    </div>

                    <div className="flex justify-between text-text-secondary border-b border-border-light pb-3">
                      <span>Lab Fee:</span>
                      <span className="font-bold text-navy">{formatCurrency(calcDetails.lab)}/yr</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="bg-navy text-white rounded-xl p-4 flex items-center justify-between shadow-md mb-6">
                    <div>
                      <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Total Annual Fee</p>
                      <p className="text-xs text-white/50">(Net Tuition + Lab Fee)</p>
                    </div>
                    <p className="text-2xl font-extrabold text-gold-light">
                      {formatCurrency(calcDetails.total)}
                      <span className="text-xs font-normal text-white/70"> / Yr</span>
                    </p>
                  </div>

                  <button
                    onClick={() => openModal(currentCalcCourse.slug)}
                    className="w-full bg-gold hover:bg-gold-light text-white font-bold py-3.5 rounded-xl text-center text-sm shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    Book This Merit Seat & Apply Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab Content 2: Full Slabs Matrix ── */}
          {feeViewTab === "grid" && (
            <div className="space-y-6">
              {/* Search & filters controls */}
              <div className="bg-white border border-border rounded-xl p-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm text-left">
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
              <div className="max-w-6xl mx-auto overflow-x-auto bg-white border border-border rounded-2xl shadow-xl">
                <table className="w-full text-left border-collapse min-w-[800px] text-xs">
                  <thead>
                    <tr className="bg-navy text-white text-[10px] uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold">Course Programme</th>
                      <th className="py-4 px-4 font-bold text-center">50–59.9% PCM</th>
                      <th className="py-4 px-4 font-bold text-center">60–69.9% PCM</th>
                      <th className="py-4 px-4 font-bold text-center">70–79.9% PCM</th>
                      <th className="py-4 px-4 font-bold text-center">80–89.9% PCM</th>
                      <th className="py-4 px-4 font-bold text-center">90–100% PCM</th>
                      <th className="py-4 px-4 font-bold text-center">Annual Lab Fee</th>
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
                          {course.slabs === null ? (
                            <td colSpan={5} className="py-4.5 px-4 text-center">
                              <span className="font-bold text-gold-dark bg-gold/10 px-3 py-1 rounded-full text-[10px]">
                                Flat Merit Tuition: {course.flatFee} / Yr
                              </span>
                            </td>
                          ) : (
                            <>
                              <td className="py-4.5 px-4 text-center font-semibold text-text-secondary">{course.slabs.slab_50_59}</td>
                              <td className="py-4.5 px-4 text-center font-semibold text-text-secondary">{course.slabs.slab_60_69}</td>
                              <td className="py-4.5 px-4 text-center font-semibold text-text-secondary">{course.slabs.slab_70_79}</td>
                              <td className="py-4.5 px-4 text-center font-bold text-navy bg-navy/5">{course.slabs.slab_80_89}</td>
                              <td className="py-4.5 px-4 text-center font-extrabold text-success bg-success/5">{course.slabs.slab_90_100}</td>
                            </>
                          )}
                          <td className="py-4.5 px-4 text-center font-bold text-navy">{course.labFee}</td>
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
                        <td colSpan={8} className="py-10 text-center text-text-muted font-medium text-sm">
                          No B.Tech courses matching search query or selected department.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 7: WHY CHOOSE SAVEETHA ─── */}
      <section id="why-sec" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            The Saveetha Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            Why Choose Saveetha Engineering?
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-16">
            Engineering excellence driven by progressive academic models, modern lab setups, and a stellar placement system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {secWhyChoose.map((feature, idx) => (
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
            Read from alumni who leveraged Saveetha's scholarships and labs to launch elite technology careers.
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
            Our placement cell holds strategic MoUs with Indian and multinational corporations. Register early to clear training milestones and secure dream recruitment interviews.
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
            Queries regarding eligibility, board cutoffs, hostelling or physical seat verification? Contact us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface rounded-2xl p-6 text-left border border-border flex items-start gap-4">
              <div className="bg-navy/5 p-3 rounded-xl text-navy flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-base">Thandalam Campus Location</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Saveetha Engineering College Campus, Saveetha Nagar, Thandalam, Chennai, Tamil Nadu 602105
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
                <a href="tel:+918939902737" className="text-gold-dark font-bold text-sm hover:underline mt-1.5 block">
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

      <SaveethaFooter />
      <SaveethaEnquiryModal />
    </div>
  );
}

export function SaveethaClientPage() {
  return (
    <ModalProvider>
      <SaveethaPageContent />
    </ModalProvider>
  );
}
export default SaveethaClientPage;
