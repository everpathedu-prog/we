import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-3xl animate-fade-in-up ${
        align === "center"
          ? "mx-auto text-center"
          : align === "right"
          ? "ml-auto text-right"
          : "text-left"
      }`}
    >
      {subtitle && (
        <span
          className={`text-sm font-semibold tracking-wider uppercase mb-3 block ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1.5 w-20 rounded-full ${
          light ? "bg-gold-light" : "bg-gold"
        } ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
      />
    </div>
  );
}
