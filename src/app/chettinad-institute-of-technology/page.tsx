import type { Metadata } from "next";
import ChettinadClientPage from "./ChettinadClientPage";

export const metadata: Metadata = {
  title: "B.Tech Admissions 2026 | Chettinad Institute of Technology (Everpath)",
  description:
    "11 B.Tech programmes at ₹1,50,000/Yr. NAAC A++ Accredited. CARE Deemed University, Chennai OMR. 100% placement assistance. Apply now.",
  keywords:
    "Chettinad Institute of Technology, B.Tech admissions 2026, CARE Deemed University, CIT Chennai, engineering admissions Chennai, B.Tech OMR, best engineering colleges Chennai",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Everpath Education — CIT",
    title: "B.Tech Admissions 2026 | Chettinad Institute of Technology (Everpath)",
    description:
      "NAAC A++ accredited. 11 new-age B.Tech programmes. Flat merit fee structure. Apply now for admissions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Tech Admissions 2026 | Chettinad Institute of Technology",
    description: "11 B.Tech programmes at ₹1,50,000/Yr. Apply now.",
  },
};

export default function ChettinadPage() {
  return <ChettinadClientPage />;
}
