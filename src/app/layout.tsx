import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.everpatheducation.com"),
  title: {
    default: "Hindustan Institute of Technology & Science (HITS) | Admissions 2026",
    template: "%s | HITS — Hindustan University",
  },
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
    description:
      "NAAC A++ accredited. 100+ programmes. Apply now.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${outfit.variable} h-full`}
    >
      <head>
        <meta name="theme-color" content="#003C71" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Analytics — replace GA_ID with your measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[300] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
