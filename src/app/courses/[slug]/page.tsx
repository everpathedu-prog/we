import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { courses } from "@/data/courses";
import { CourseDetailClient } from "@/components/CourseDetailClient";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// Statically generate all course routes at build time
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Generate dynamic SEO metadata server-side
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested academic program could not be found.",
    };
  }

  return {
    title: `${course.name} | HITS Admission 2026`,
    description: `Apply for ${course.name} (${course.duration}) at Hindustan University (HITS). NAAC A++ accredited. Check eligibility: ${course.eligibility}. Get free counseling info.`,
    openGraph: {
      title: `${course.name} | HITS Admissions`,
      description: `Enroll in ${course.name} at HITS. Learn eligibility, course fee structure, career outcomes and syllabus details.`,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  // Structured Schema data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Hindustan Institute of Technology and Science",
      "sameAs": "https://hindustanuniv.ac.in"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseDuration": course.duration,
      "courseMode": "Full-time",
      "fees": course.fees
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the eligibility criteria for ${course.shortName} at HITS?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": course.eligibility
        }
      },
      {
        "@type": "Question",
        "name": `How long is the ${course.name} program?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The duration of the program is ${course.duration}.`
        }
      }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CourseDetailClient course={course} />
    </>
  );
}
