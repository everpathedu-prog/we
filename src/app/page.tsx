"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { HubNavbar } from "@/components/HubNavbar";
import { HubFooter } from "@/components/HubFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { sendLeadEmails } from "@/lib/sendLeadEmails";
import {
  Award,
  BookOpen,
  Users,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Star,
  Sparkles,
  MapPin,
  ChevronRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Cpu
} from "lucide-react";

// Form Zod Schema
const formSchema = zod.object({
  fullName: zod
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be under 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  email: zod
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: zod
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number starting with 6-9"),
  stateCity: zod
    .string()
    .min(1, "City and state are required"),
  targetUniversity: zod
    .string()
    .min(1, "Please select a university of interest"),
  website: zod.string().max(0, { message: "Spam detected" }).optional(),
});

type FormData = zod.infer<typeof formSchema>;

export default function AdmissionsHub() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      stateCity: "",
      targetUniversity: "",
      website: "",
    },
  });

  const colleges = [
    {
      id: "hits",
      name: "Hindustan Institute of Technology & Science",
      shortName: "HITS (Hindustan University)",
      logo: "/hitslogo.png",
      bgImage: "/hits.jpeg",
      accreditation: "NAAC A++ Grade",
      location: "OMR, Chennai",
      established: "1985",
      highlights: [
        "100+ engineering, design & law streams",
        "Co-branded research labs with IBM & Google",
        "₹42 LPA record-breaking highest placement"
      ],
      pricing: "Merit scholarships up to 80% fee waiver",
      slug: "/hindustan-university",
      whatsapp: "https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20Hindustan%20University%20(HITS)%20Admissions%202026.%20Please%20share%20details."
    },
    {
      id: "saveetha",
      name: "Saveetha University (Engineering & Tech)",
      shortName: "SIMATS  (Saveetha University)",
      logo: "/saveethalogo.png",
      bgImage: "/saveetha_campus.png",
      accreditation: "NAAC A++ Grade",
      location: "Thandalam, Chennai",
      established: "2001",
      highlights: [
        "16 specialized next-generation B.Tech courses",
        "5-tier merit-based absolute slab models",
        "100% placement track with top tech firms"
      ],
      pricing: "Scholarship slabs up to 100% tuition waiver",
      slug: "/saveetha-university",
      whatsapp: "https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20Saveetha%20University%20Admissions%202026.%20Please%20share%20details."
    },
    {
      id: "cit",
      name: "Chettinad Institute of Technology (CARE)",
      shortName: "CIT (Chettinad Tech)",
      logo: "/citlogo.png",
      bgImage: "/cit_campus_hero.png",
      accreditation: "NAAC A++ (CARE Partner)",
      location: "OMR Manamai, Chennai",
      established: "2008",
      highlights: [
        "11 high-demand computing & VLSI streams",
        "Located in prime IT corridor of Chennai OMR",
        "Industry-aligned research & simulation labs"
      ],
      pricing: "Flat merit admissions at ₹1,50,000/Yr",
      slug: "/chettinad-institute-of-technology",
      whatsapp: "https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20Chettinad%20Institute%20of%20Technology%20(CIT)%20Admissions%202026.%20Please%20share%20details."
    },
    {
      id: "avit",
      name: "Aarupadai Veedu Institute of Technology",
      shortName: "AVIT (Vinayaka Missions)",
      logo: "/avitlogo.png",
      bgImage: "/avit_campus.png",
      accreditation: "NAAC A Accredited",
      location: "Paiyanoor, Chennai OMR",
      established: "1998",
      highlights: [
        "10 B.Tech engineering branches & core fields",
        "Expansive smart green campus with research focus",
        "Global internship programs and expert mentors"
      ],
      pricing: "Highly affordable options from ₹80,000/Yr",
      slug: "/avit",
      whatsapp: "https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20AVIT%20Admissions%202026.%20Please%20share%20details."
    }
  ];

  const handleQuickEnquiry = (universityName: string) => {
    setValue("targetUniversity", universityName);
    const targetElement = document.querySelector("#enquiry");
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      await sendLeadEmails({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.stateCity,
        target_course: "General B.Tech/Engineering Enquiry",
        college_name: data.targetUniversity,
      });

      setSuccessMsg("Your request was submitted successfully! Redirecting...");
      setTimeout(() => {
        router.push(`/thank-you?name=${encodeURIComponent(data.fullName)}`);
      }, 1500);
    } catch (error) {
      console.error("Hub Form submit error:", error);
      setErrorMsg("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <HubNavbar />

      {/* ─── SECTION 1: HERO PORTAL GATEWAY ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden flex items-center min-h-[90vh]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-650 border border-indigo-100/70 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit">
                <Sparkles size={13} className="animate-pulse" />
                <span>Admissions Hub 2026-27</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 animate-slide-in-right">
                Find Your Perfect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-650 to-indigo-500">
                  Engineering Campus
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                Everpath is the official admissions partner for Chennai&apos;s leading engineering institutions. Explore direct merit-based entry, verify scholarship slabs, and submit queries to multiple campuses from one dashboard.
              </p>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.querySelector("#enquiry");
                    if (targetElement) {
                      const offset = 80;
                      const elementPosition = targetElement.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-8 rounded-2xl text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Quick Enquiry Form
                </a>
                <a
                  href="https://wa.me/917339329264?text=Hi!%20I'm%20interested%20in%20direct%20admissions%20at%20Chennai%20Engineering%20Colleges.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-8 rounded-2xl text-sm shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* USP Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-6">
                <div className="flex gap-3 items-start">
                  <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 border border-indigo-100 flex-shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">NAAC A/A++ Grades</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Top-tier institutions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 border border-indigo-100 flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Up to 80% Scholarship</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Merit fee reductions</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 border border-indigo-100 flex-shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">100% Placement Help</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Corporate connections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Admissions Quick Panel (2x2 Card Grid) */}
            <div className="lg:col-span-6 flex flex-col gap-6 w-full mt-8 lg:mt-0">
              <div className="flex flex-col gap-1 text-left">
                <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 border border-indigo-100/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>Admissions Open 2026-27</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">Admissions Quick Panel</h3>
                <p className="text-xs text-slate-550">
                  Select a college card below to explore full details and merit fee slabs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                {colleges.map((col) => (
                  <Link
                    key={col.id}
                    href={col.slug}
                    className="group/card flex flex-col justify-between items-center text-center p-5 sm:p-6 bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[190px] relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover/card:opacity-100 transition-opacity" />

                    {/* Logo container */}
                    <div className="bg-white p-2 rounded-xl w-14 h-14 flex items-center justify-center border border-slate-100 shadow-sm transition-transform duration-300 group-hover/card:scale-105">
                      <Image
                        src={col.logo}
                        alt={col.shortName}
                        width={42}
                        height={42}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>

                    {/* Typography */}
                    <div className="flex flex-col items-center mt-3.5 flex-grow">
                      <span className="block font-black text-xs sm:text-sm text-slate-800 group-hover/card:text-indigo-600 transition-colors leading-snug">
                        {col.shortName}
                      </span>
                      <span className="block text-[10px] text-slate-500 font-medium mt-1">
                        {col.location}
                      </span>
                    </div>

                    {/* Bottom Accreditation Tag */}
                    <span className="inline-block mt-4 text-[9px] font-extrabold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-150 px-2.5 py-0.5 rounded-full">
                      {col.accreditation.replace(" Accredited", "")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PARTNER COLLEGES SHOWCASE ─── */}
      <section id="colleges" className="py-24 border-t border-slate-100 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Our Partner Institutions"
            subtitle="Explore Campuses & Admissions"
            align="center"
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16">
            {colleges.map((col) => (
              <div
                key={col.id}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-indigo-100 hover:shadow-lg transition-all duration-300 shadow-sm group hover:-translate-y-1"
              >
                <Link href={col.slug} className="block cursor-pointer flex-grow">
                  {/* Banner Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={col.bgImage}
                      alt={col.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Light radial overlay */}
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

                    {/* Logo on Banner */}
                    <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-xl shadow-lg flex items-center justify-center max-w-[140px] max-h-[44px] border border-slate-100">
                      <Image src={col.logo} alt={col.shortName} width={120} height={36} className="object-contain max-h-8" />
                    </div>

                    {/* NAAC badge */}
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white font-bold text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md">
                      {col.accreditation}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold mb-2 uppercase tracking-widest">
                      <MapPin size={13} />
                      <span>{col.location}</span>
                      <span className="text-slate-300 font-normal">|</span>
                      <span>Est. {col.established}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-4 leading-tight">
                      {col.name}
                    </h3>

                    {/* Highlights bullet list */}
                    <ul className="space-y-3 mb-6">
                      {col.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>

                {/* Footer buttons / CTA panel */}
                <div className="bg-white px-6 py-5 sm:px-8 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Scholarships / Fees</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 leading-normal">{col.pricing}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {/* View Campus */}
                    <Link
                      href={col.slug}
                      className="border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 shadow-sm transition-all hover:bg-slate-50"
                    >
                      <span>Campus & Fees</span>
                      <ArrowRight size={13} />
                    </Link>

                    {/* Inquiry form trigger */}
                    <button
                      onClick={() => handleQuickEnquiry(col.name)}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Direct Enquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: HOW IT WORKS (THE ADMISSIONS PROCESS) ─── */}
      <section id="process" className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Simplified Admissions Process"
            subtitle="How Everpath Guides Your Journey"
            align="center"
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
            {/* Step 1 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl text-left relative flex flex-col gap-4 shadow-sm">
              <span className="text-5xl font-black text-slate-200 leading-none">01</span>
              <h3 className="text-lg font-bold text-slate-900">Compare Campuses</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review courses, fee slabs, placements, and campus amenities for our 4 partner colleges. Find the one that matches your goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl text-left relative flex flex-col gap-4 shadow-sm">
              <span className="text-5xl font-black text-slate-200 leading-none">02</span>
              <h3 className="text-lg font-bold text-slate-900">Verify Merit Slabs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit your board marks or details to check your eligibility for direct fee discounts, up to a 100% waiver.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl text-left relative flex flex-col gap-4 shadow-sm">
              <span className="text-5xl font-black text-slate-200 leading-none">03</span>
              <h3 className="text-lg font-bold text-slate-900">Complete Onboarding</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our advisors will assist with registration forms, official seat locking, and complete verification for direct university onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: UNIFIED REGISTER & CONTACT FORM ─── */}
      <section id="enquiry" className="py-24 bg-white relative border-t border-slate-100 flex items-center min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Direct info panel */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Centralized Admissions &<br />
                <span className="text-indigo-600">Counseling Desk 2026</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Have questions about specific B.Tech branches, hostels, placement drives, or scholarship verification? Fill out the quick panel. An advisor will contact you within 24 hours to clarify eligibility.
              </p>

              <div className="flex flex-col gap-5 mt-4 text-sm">
                <div className="flex gap-3.5 items-start">
                  <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600 border border-indigo-100 flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Official & Direct Channel</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Secure direct enrollment with zero broker interference.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600 border border-indigo-100 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Admissions Hotline (Call / WhatsApp)</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Reach our desk immediately: <a href="tel:+917339329264" className="text-indigo-600 font-bold hover:underline">+91 73393 29264</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl relative">
                <h3 className="text-xl font-bold mb-1 text-slate-900">Admissions Enquiry</h3>
                <p className="text-xs text-slate-550 mb-6">Submit details to request brochures and scholarship eligibility guidelines.</p>

                {errorMsg && (
                  <div className="p-3 mb-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                    {errorMsg}
                  </div>
                )}

                {successMsg && (
                  <div className="p-3 mb-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl">
                    {successMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                  {/* Honeypot Field */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Vikram Kumar"
                      className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                      {...register("fullName")}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-400 font-medium mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mobile */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="phone">
                        Mobile Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="10-digit number"
                        className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-[10px] text-red-400 font-medium mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                        {...register("email")}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 font-medium mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* State / City */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="stateCity">
                        City & State *
                      </label>
                      <input
                        id="stateCity"
                        type="text"
                        placeholder="e.g. Patna, Bihar"
                        className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                        {...register("stateCity")}
                      />
                      {errors.stateCity && <p className="text-[10px] text-red-400 font-medium mt-1">{errors.stateCity.message}</p>}
                    </div>

                    {/* College of Interest */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="targetUniversity">
                        College of Interest *
                      </label>
                      <select
                        id="targetUniversity"
                        className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-800 transition-all outline-none"
                        {...register("targetUniversity")}
                      >
                        <option value="" disabled className="bg-white text-slate-500">Select University</option>
                        <option value="Hindustan University" className="bg-white text-slate-800">Hindustan University (HITS)</option>
                        <option value="Saveetha University" className="bg-white text-slate-800">Saveetha University</option>
                        <option value="Chettinad Institute of Technology" className="bg-white text-slate-800">Chettinad Institute of Tech (CIT)</option>
                        <option value="Aarupadai Veedu Institute of Technology" className="bg-white text-slate-800">AVIT (Vinayaka Missions)</option>
                      </select>
                      {errors.targetUniversity && <p className="text-[10px] text-red-400 font-medium mt-1">{errors.targetUniversity.message}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm cursor-pointer disabled:bg-indigo-600/50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admissions Request</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HELPLINE SHORTCUT ─── */}
      <section id="helpline" className="py-16 bg-slate-50 border-t border-slate-100 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <GraduationCap className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Speak to an admissions advisor immediately</h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Need urgent guidance? Tap the button to initiate a quick inquiry over WhatsApp, or contact our direct voice desk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917339329264?text=Hi!%20I'm%20interested%2520in%20direct%20admissions%20at%20Chennai%20Engineering%20Colleges.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-7 rounded-2xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <MessageSquare size={18} />
              <span>Connect on WhatsApp</span>
            </a>
            <a
              href="tel:+917339329264"
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-7 rounded-2xl shadow-md border border-slate-200 transition-all text-sm flex items-center gap-2"
            >
              <Phone size={18} className="text-indigo-600" />
              <span>Call +91 73393 29264</span>
            </a>
          </div>
        </div>
      </section>

      <HubFooter />
    </div>
  );
}
