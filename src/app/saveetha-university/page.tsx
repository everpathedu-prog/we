import type { Metadata } from "next";
import SaveethaClientPage from "./SaveethaClientPage";

export const metadata: Metadata = {
  title: "B.Tech Merit Admissions 2026 | Saveetha University (Everpath)",
  description:
    "Explore 16 B.Tech programmes at Saveetha University. Merit-based fee scholarship slabs up to 100% discount. 100% placement assistance. Apply now.",
  keywords:
    "Saveetha University, B.Tech admissions 2026, Saveetha Engineering College, SEC Chennai, engineering admissions Chennai, B.Tech merit scholarship, best engineering colleges Tamil Nadu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Everpath Education — Saveetha",
    title: "B.Tech Merit Admissions 2026 | Saveetha University (Everpath)",
    description:
      "Merit-based fee scholarship slabs up to 100% discount. 16 B.Tech programmes. Check your scholarship eligibility and apply online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Tech Merit Admissions 2026 | Saveetha University",
    description: "Merit-based fee scholarship slabs up to 100% discount. Apply now.",
  },
};

export default function SaveethaPage() {
  return <SaveethaClientPage />;
}
