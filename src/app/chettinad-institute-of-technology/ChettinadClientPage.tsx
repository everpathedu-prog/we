"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { ChettinadNavbar } from "@/components/ChettinadNavbar";
import { ChettinadFooter } from "@/components/ChettinadFooter";
import { ChettinadEnquiryForm } from "@/components/ChettinadEnquiryForm";
import { ChettinadEnquiryModal } from "@/components/ChettinadEnquiryModal";
import { citCourses } from "@/data/chettinadCourses";
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
  Mail
} from "lucide-react";

function CITPageContent() {
  const { openModal } = useModal();

  const testimonials = [
    {
      name: "Rahul S.",
      course: "B.Tech Computer Science & Engineering",
      batch: "Batch of 2024",
      quote: "The modern labs and excellent infrastructure at CIT Chennai helped me gain hands-on experience that was crucial for my career placement.",
      rating: 5,
      avatarBg: "from-blue-600 to-indigo-700"
    },
    {
      name: "Priya K.",
      course: "B.Tech AI & Data Science",
      batch: "Batch of 2024",
      quote: "CIT has an amazing environment for learning. The professors are extremely helpful, and the regular hackathons and placement prep helped me land a top job.",
      rating: 5,
      avatarBg: "from-red-500 to-orange-600"
    },
    {
      name: "Karan A.",
      course: "B.Tech ECE (VLSI Design)",
      batch: "Batch of 2024",
      quote: "Choosing CIT for VLSI technology was the best decision. The industry-aligned curriculum and lab facilities gave me a solid foundation in electronics.",
      rating: 5,
      avatarBg: "from-emerald-500 to-teal-700"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "NAAC A++ Accredited",
      desc: "Top Academic Quality"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "11 B.Tech Courses",
      desc: "New-Age Fields"
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "100% Placement",
      desc: "Stellar Record"
    },
    {
      icon: <Building className="w-8 h-8 text-gold" />,
      title: "CARE Deemed University",
      desc: "Strong Pedigree"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold" />,
      title: "OMR Chennai Campus",
      desc: "Prime Tech Corridor"
    }
  ];

  const citWhyChoose = [
    {
      icon: <Cpu className="w-10 h-10 text-gold" />,
      title: "World-Class Labs",
      desc: "State-of-the-art computing labs, high-end workstations, and specialized AI & VLSI simulation systems."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Corporate Internships",
      desc: "Mandatory industrial training with leading multi-nationals and tech firms to ensure absolute corporate readiness."
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: "Experienced Mentors",
      desc: "Learn from highly qualified PhD faculty members, industry consultants, and active scientific researchers."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold" />,
      title: "100% Placement Record",
      desc: "A committed placement cell preparing students via mock interviews, resume writing, and campus recruitment drives."
    }
  ];

  return (
    <div className="theme-cit relative min-h-screen bg-background text-text-primary overflow-x-hidden flex flex-col">
      {/* ─── SECTION 1: TOP UTILITY BAR ─── */}
      <div className="bg-navy-dark text-white text-[11px] md:text-xs py-2 px-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 relative z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={13} className="text-gold" />
            <a href="tel:+917339329264" className="hover:text-gold transition-colors font-medium">
              Helpline: +91 7339329264
            </a>
          </span>
          <span className="h-3 w-px bg-white/20 hidden sm:inline" />
          <span className="flex items-center gap-1 font-semibold text-gold-light">
            <Sparkles size={13} className="animate-pulse" />
            Admissions Open: Academic Year 2026-27
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-90">
          <Globe size={13} className="text-white/60" />
          <span>Official Portal:</span>
          <a
            href="https://manamai.care.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gold-light font-medium"
          >
            manamai.care.edu.in
          </a>
        </div>
      </div>

      <ChettinadNavbar />

      {/* ─── SECTION 3: HERO SECTION ─── */}
      <section id="home" className="relative text-white overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 min-h-[95vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/cit_campus_hero.png"
          alt="Chettinad Institute of Technology Campus"
          fill
          priority
          className="object-cover object-center"
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
                <span>Chettinad Admissions 2026 Open</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Shape Your Engineering Career at <span className="text-gold-light">CIT, Chennai</span>
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-xl">
                Uncompromising standard of academic engineering. Choose from 11 specialized B.Tech programs. NAAC A++ accredited CARE Deemed University, Chennai OMR.
              </p>

              {/* USP Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 mt-2 max-w-lg">
                <div>
                  <p className="text-2xl font-bold text-gold-light">NAAC A++</p>
                  <p className="text-xs text-white/75">University Grade</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">11 Courses</p>
                  <p className="text-xs text-white/75">B.Tech Programs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-light">100%</p>
                  <p className="text-xs text-white/75">Placement Assured</p>
                </div>
              </div>
            </div>

            {/* Form Right Side */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8 max-w-md mx-auto text-text-primary relative overflow-hidden">
                {/* Visual red tag showing it's a required email form */}
                <div className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-bl-lg">
                  Merit Booking
                </div>
                <h2 className="text-2xl font-bold text-navy mb-1 text-center">Admission Enquiry</h2>
                <p className="text-text-secondary text-sm mb-5 text-center">
                  Submit details to receive brochures & fee structures.
                </p>
                <ChettinadEnquiryForm />
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

      {/* ─── SECTION 5: ABOUT CIT SECTION ─── */}
      <section id="about" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full w-fit">
                About the Institution
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                Carve Your Engineering Future at CARE, Manamai
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full" />
              
              <div className="text-text-secondary space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  Chettinad Institute of Technology (CIT) at the OMR Manamai Campus represents the hallmark of modern technical education in Chennai. As an integral engineering branch under the prestigious **Chettinad Academy of Research and Education (CARE)**, CIT benefits from a decades-long legacy of academic and infrastructure excellence.
                </p>
                <p>
                  Our programs are custom-tailored to bridge the gap between classroom theory and next-generation industrial demands. With specialized labs in fields ranging from Artificial Intelligence and Cyber Security to VLSI Chip Design, our students get hands-on access to technologies that define tomorrow.
                </p>
                <p className="font-semibold text-navy">
                  All 11 B.Tech programs are offered at a flat, transparent merit fee of ₹1,50,000 per year, backed by a dedicated placement support system.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">NBA & AICTE Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Lush Green Campus Environment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm">Industrial Research Wing</span>
                </div>
              </div>
            </div>

            {/* Right image column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <Image
                  src="/cit_lab.png"
                  alt="Chettinad Tech Labs"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="font-bold text-lg">Central IT & Research Lab</h4>
                  <p className="text-xs text-white/80">Equipped with 500+ computing rigs & cloud platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: ALL COURSES GRID ─── */}
      <section id="courses" className="py-20 md:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            Undergraduate B.Tech
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            Explore All 11 B.Tech Programmes
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-12">
            Choose from a wide spectrum of modern B.Tech tracks. Enjoy a uniform fee structure across all fields.
          </p>

          {/* Flat fee alert banner */}
          <div className="bg-navy text-white rounded-xl py-5 px-6 md:px-10 max-w-4xl mx-auto mb-14 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10 text-left">
            <div>
              <h3 className="font-bold text-lg text-gold-light">Flat Fee Merit Structure</h3>
              <p className="text-white/80 text-xs mt-1">
                Zero hidden charges. Complete tuition fees for any of the 11 courses list below is kept flat.
              </p>
            </div>
            <div className="bg-white/10 px-6 py-2.5 rounded-lg border border-white/20 text-center font-bold text-xl md:text-2xl text-white">
              ₹1,50,000 <span className="text-xs font-normal text-white/70">/ Year</span>
            </div>
          </div>

          {/* Grid of Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {citCourses.map((course) => (
              <div
                key={course.slug}
                className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 border-t-gold"
              >
                <div className="p-6 text-left">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-[10px] font-bold text-navy uppercase tracking-wider bg-navy/5 px-2.5 py-1 rounded-md border border-navy/10">
                      B.Tech Programme
                    </span>
                    <span className="text-xs font-semibold text-text-muted">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 min-h-[56px] flex items-center leading-snug">
                    {course.name}
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-3 mb-5 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="bg-surface/50 border border-border-light rounded-xl p-3 mb-5">
                    <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Eligibility</p>
                    <p className="text-xs text-navy font-medium mt-0.5 line-clamp-1">{course.eligibility}</p>
                  </div>

                  <ul className="space-y-2 mb-2">
                    {course.highlights.slice(0, 3).map((hl, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 size={13} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface px-6 py-4 border-t border-border flex items-center justify-between gap-4 text-left">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Merit Tuition Fee</span>
                    <span className="text-sm font-bold text-navy">{course.fees}</span>
                  </div>
                  <button
                    onClick={() => openModal(course.slug)}
                    className="bg-navy hover:bg-navy-light text-white font-bold px-4 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: WHY CIT ─── */}
      <section id="why-cit" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">
            The CIT Edge
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-2">
            Why Choose Chettinad Tech?
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-16">
            Engineering excellence driven by robust infrastructure, academic legacy, and a placement-oriented focus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {citWhyChoose.map((feature, idx) => (
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
            What Our Students & Alumni Say
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto my-3" />
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base mb-16">
            Real stories from scholars who carved their engineering futures at Chettinad campuses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-2xl p-6 md:p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Rating Stars */}
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
      <section id="admissions" className="py-16 md:py-20 bg-navy text-white relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Careers & Placements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            100% Guaranteed Placement Assistance
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
            Our active placement cell holds strategic partnerships with corporate giants to organize pre-placement tests, mock interviews, and direct recruitment pathways. Your career path begins at CIT.
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
            Have queries regarding eligibility, merit lists, or campus hostel facilities? Our desk is online.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface rounded-2xl p-6 text-left border border-border flex items-start gap-4">
              <div className="bg-navy/5 p-3 rounded-xl text-navy flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-base">Manamai Campus Location</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Chettinad Health City Campus, Rajiv Gandhi Salai (OMR), Manamai, Kelambakkam, Tamil Nadu 603104
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
                  +91 7339329264
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

      <ChettinadFooter />
      <ChettinadEnquiryModal />
    </div>
  );
}

export function ChettinadClientPage() {
  return (
    <ModalProvider>
      <CITPageContent />
    </ModalProvider>
  );
}
export default ChettinadClientPage;
