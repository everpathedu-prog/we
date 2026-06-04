import { MetadataRoute } from "next";
import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.everpatheducation.com";

  // Static site paths
  const staticPaths = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/chettinad-institute-of-technology`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saveetha-university`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avit`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Dynamic course paths (SSG)
  const coursePaths = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPaths, ...coursePaths];
}
