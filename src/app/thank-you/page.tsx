"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, FileText, PhoneCall, Home, HelpCircle } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Student";

  useEffect(() => {
    // Fire Google Analytics Conversion Event (Gtag)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17010139004", // Replace with correct conversion label if available
        value: 1.0,
        currency: "INR",
      });
      console.log("GA Conversion event fired for: ", name);
    }
  }, [name]);

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-border max-w-xl w-full p-8 md:p-12 text-center animate-fade-in-up">
        {/* Success Icon */}
        <div className="bg-success/10 p-4 rounded-full w-fit mx-auto text-success mb-6">
          <CheckCircle2 size={48} className="animate-float" />
        </div>

        {/* Personalized Message */}
        <h1 className="text-3xl font-extrabold text-navy mb-3">Enquiry Submitted!</h1>
        <p className="text-text-primary font-bold text-base mb-2">
          Thank you for your interest, {name}.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          Your admission enquiry for the 2025 academic batch has been logged successfully. An expert HITS counselor will call you within 24 working hours to guide you on cutoff criteria, eligibility, and scholarship programs.
        </p>

        {/* Next Steps Card */}
        <div className="bg-surface border border-border rounded-xl p-5 text-left mb-8">
          <h4 className="font-bold text-navy text-sm mb-3">Next Steps:</h4>
          <ul className="space-y-3 text-xs text-text-secondary">
            <li className="flex gap-2.5 items-start">
              <FileText size={16} className="text-gold flex-shrink-0 mt-0.5" />
              <span>
                <strong>Download Brochure:</strong> Check your registered email inbox. We have dispatched the HITS 2025 admission brochure.
              </span>
            </li>
            <li className="flex gap-2.5 items-start">
              <PhoneCall size={16} className="text-gold flex-shrink-0 mt-0.5" />
              <span>
                <strong>Counsellor Call:</strong> Keep your mobile number active. Our calling agent will contact you shortly.
              </span>
            </li>
            <li className="flex gap-2.5 items-start">
              <HelpCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
              <span>
                <strong>Prepare Documents:</strong> Keep copies of your 10th and 12th marksheets ready for swift verification.
              </span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="btn-primary py-3 px-6 text-sm font-bold flex items-center justify-center gap-2"
          >
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/courses"
            className="btn-outline py-3 px-6 text-sm font-bold flex items-center justify-center gap-2"
          >
            <FileText size={16} />
            <span>View Other Courses</span>
          </Link>
        </div>

        <p className="text-[10px] text-text-muted mt-8">
          Hindustan Institute of Technology & Science • NAAC A++ Rated Deemed-to-be-University
        </p>
      </div>
    </main>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-navy"></div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
