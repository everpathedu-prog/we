"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryModal } from "@/components/EnquiryModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { Award, Compass, BookOpen, Users, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

function AboutContent() {
  const { openModal } = useModal();

  const values = [
    {
      icon: <Compass className="text-gold h-6 w-6" />,
      title: "Our Mission",
      desc: "To offer high-quality learning environments that cultivate intellectual curiousity, research excellence, and socially responsible leadership."
    },
    {
      icon: <Award className="text-gold h-6 w-6" />,
      title: "Our Vision",
      desc: "To be a premier global institution of academic excellence, fostering innovation and state-of-the-art technological solutions."
    },
    {
      icon: <GraduationCap className="text-gold h-6 w-6" />,
      title: "Academic Integrity",
      desc: "Upholding supreme standards of ethics, student support services, and outcome-oriented course pedagogy."
    }
  ];

  const recognitions = [
    { title: "NAAC A++ Grade", detail: "Awarded supreme rating with an outstanding CGPA of 3.62/4.00" },
    { title: "NIRF Rankings", detail: "Ranked among India's top engineering and management universities consistently" },
    { title: "QS World Rankings", detail: "Highly rated in Asia for excellence in teaching, employability, and facilities" },
    { title: "AICTE & BCI Approved", detail: "All professional programs fully authorized by respective statutory boards" }
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Navbar />

      {/* Header section */}
      <section className="relative text-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <Image src="/hits.jpeg" alt="Hindustan University About" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
            About Hindustan University
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Legacy of Educational Excellence
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            HITS is a pioneering Deemed-to-be-University committed to fostering future-ready graduates through research-centric training.
          </p>
        </div>
      </section>

      {/* Core intro grid */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Hindustan Institute of Technology & Science
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                Established in 1985, Hindustan Institute of Technology and Science (HITS) is one of the most sought-after engineering and science institutions in Tamil Nadu. Founded by the late visionary Dr. K.C.G. Verghese, the university has continuously set benchmarks in education.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                HITS was awarded the status of Deemed-to-be-University by the Ministry of Human Resource Development, Government of India. It enjoys NAAC A++ accreditation, the highest possible tier, reflecting our commitment to premium course structures, high-impact research publications, and top-tier placements.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                <div className="bg-surface border border-border p-4 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-navy">15,000+</span>
                  <span className="text-xs text-text-secondary">Students Enrolled</span>
                </div>
                <div className="bg-surface border border-border p-4 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-navy">80%</span>
                  <span className="text-xs text-text-secondary">PhD Faculty</span>
                </div>
                <div className="bg-surface border border-border p-4 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-navy">150+ Acres</span>
                  <span className="text-xs text-text-secondary">Green Campus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-tr from-navy to-navy-light p-8 rounded-2xl text-white text-center shadow-xl border border-navy-light/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
                <GraduationCap className="mx-auto text-gold mb-4 animate-float" size={48} />
                <h3 className="text-xl font-bold mb-2">Academic Accreditation</h3>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Our programs are recognized by top government and international bodies, ensuring your degree has global validation.
                </p>
                <button
                  onClick={() => openModal()}
                  className="w-full btn-primary text-xs"
                >
                  Download Accreditation Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="section bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Our Foundations & Values"
            subtitle="Mission & Vision"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-border p-6 rounded-xl text-left shadow-sm">
                <div className="bg-navy/5 p-3 rounded-lg w-fit text-navy mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-body">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Recognitions */}
      <section className="section bg-white">
        <div className="section-container">
          <SectionHeading
            title="National & Global Recognition"
            subtitle="HITS Rankings"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((r, i) => (
              <div key={i} className="bg-surface/50 border border-border-light p-6 rounded-xl text-left hover:bg-surface transition-all">
                <h3 className="text-base font-bold text-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-gold h-5 w-5 flex-shrink-0" />
                  <span>{r.title}</span>
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus infrastructure callout */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="section-container relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl font-extrabold mb-4">Experience HITS Smart Campus</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Take a virtual tour of our 150-acre state-of-the-art campus located in OMR Padur, Chennai, containing smart classrooms, research centres, computing labs, and hostelling facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              Book Campus Tour
            </button>
            <Link
              href="/contact"
              className="btn-outline text-white border-white hover:bg-white hover:text-navy"
            >
              Locate Us on Map
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryModal />
      <FloatingCTA />
    </div>
  );
}

export default function About() {
  return (
    <ModalProvider>
      <AboutContent />
    </ModalProvider>
  );
}
