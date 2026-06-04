import type { Metadata } from "next";
import AvitClientPage from "./AvitClientPage";

export const metadata: Metadata = {
  title: "B.Tech Admissions 2026 | Aarupadai Veedu Institute of Technology (AVIT)",
  description:
    "Explore 10 B.Tech programmes at AVIT — Vinayaka Missions Chennai Campus. Affordable annual fees starting ₹80,000. 100% placement assistance. Apply now.",
  keywords:
    "AVIT, Aarupadai Veedu Institute of Technology, B.Tech admissions 2026, Vinayaka Missions Chennai, engineering admissions Chennai, B.Tech fees AVIT, best engineering colleges Tamil Nadu, Paiyanoor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Everpath Education — AVIT",
    title: "B.Tech Admissions 2026 | Aarupadai Veedu Institute of Technology (AVIT)",
    description:
      "10 B.Tech programmes with affordable annual fees. AICTE approved. 100% placement assistance. Apply online now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Tech Admissions 2026 | AVIT",
    description: "10 B.Tech programmes with affordable fees. Apply now at AVIT.",
  },
};

export default function AvitPage() {
  return <AvitClientPage />;
}
