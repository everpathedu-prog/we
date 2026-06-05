import type { Metadata } from "next";
import HindustanClientPage from "./HindustanClientPage";

export const metadata: Metadata = {
  title: "B.Tech Admissions 2026 | Hindustan Institute of Technology & Science (HITS)",
  description:
    "Apply to Hindustan Institute of Technology & Science (HITS), Chennai. NAAC A++ accredited. 100+ UG, PG & Doctoral programmes in Engineering, Management, Law, Sciences, Design & more. Top placements with IBM, Google, Cognizant.",
  keywords:
    "HITS, Hindustan University, Hindustan Institute of Technology, admissions 2026, engineering colleges Chennai, MBA Chennai, B.Tech, NAAC A++, top university Tamil Nadu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Everpath Education — HITS",
    title: "Hindustan Institute of Technology & Science (HITS) | Admissions 2026",
    description:
      "NAAC A++ accredited. 100+ programmes. Top placements. Apply now for 2026 admissions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HITS — Hindustan University | Admissions 2026",
    description: "NAAC A++ accredited. 100+ programmes. Apply now.",
  },
};

export default function HindustanPage() {
  return <HindustanClientPage />;
}
