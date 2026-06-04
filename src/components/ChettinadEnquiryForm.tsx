"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useRouter } from "next/navigation";
import { citCourses } from "@/data/chettinadCourses";
import { sendLeadEmails } from "@/lib/sendLeadEmails";

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
  fatherName: zod
    .string()
    .max(50, "Father's name must be under 50 characters")
    .optional()
    .or(zod.literal("")),
  fatherPhone: zod
    .string()
    .optional()
    .or(zod.literal("")),
  stateCity: zod
    .string()
    .optional()
    .or(zod.literal("")),
  courseInterest: zod
    .string()
    .optional()
    .or(zod.literal("")),
  // Honeypot spam trap
  website: zod.string().max(0, { message: "Spam detected" }).optional(),
});

type FormData = zod.infer<typeof formSchema>;

interface ChettinadEnquiryFormProps {
  initialCourseSlug?: string;
  onSuccess?: () => void;
}

export function ChettinadEnquiryForm({ initialCourseSlug = "", onSuccess }: ChettinadEnquiryFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      fatherName: "",
      fatherPhone: "",
      stateCity: "",
      courseInterest: initialCourseSlug,
      website: "",
    },
  });

  // Pre-populate course interest if passed via props
  useEffect(() => {
    if (initialCourseSlug) {
      setValue("courseInterest", initialCourseSlug);
    }
  }, [initialCourseSlug, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await sendLeadEmails({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.stateCity || "",
        target_course: data.courseInterest || "",
        college_name: "Chettinad Institute of Technology",
        father_name: data.fatherName || "",
        father_phone: data.fatherPhone || "",
      });

      if (onSuccess) {
        onSuccess();
      }
      // Redirect to thank you page
      router.push(`/thank-you?name=${encodeURIComponent(data.fullName)}`);
    } catch (error) {
      console.error("Form submit error:", error);
      setErrorMsg("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {errorMsg}
        </div>
      )}

      {/* Honeypot Field (Spam Trap) - Hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="form-label" htmlFor="fullName">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Rahul Sharma"
          className={`form-input ${errors.fullName ? "error" : ""}`}
          {...register("fullName")}
        />
        {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="phone">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="10-digit number"
            className={`form-input ${errors.phone ? "error" : ""}`}
            {...register("phone")}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="form-label" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. rahul@gmail.com"
            className={`form-input ${errors.email ? "error" : ""}`}
            {...register("email")}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="fatherName">
            Father&apos;s Name
          </label>
          <input
            id="fatherName"
            type="text"
            placeholder="e.g. Suresh Sharma"
            className={`form-input ${errors.fatherName ? "error" : ""}`}
            {...register("fatherName")}
          />
          {errors.fatherName && <p className="form-error">{errors.fatherName.message}</p>}
        </div>

        <div>
          <label className="form-label" htmlFor="fatherPhone">
            Father&apos;s Mobile
          </label>
          <input
            id="fatherPhone"
            type="tel"
            placeholder="10-digit number"
            className={`form-input ${errors.fatherPhone ? "error" : ""}`}
            {...register("fatherPhone")}
          />
          {errors.fatherPhone && <p className="form-error">{errors.fatherPhone.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="stateCity">
          City, State
        </label>
        <input
          id="stateCity"
          type="text"
          placeholder="e.g. Salem, Tamil Nadu"
          className={`form-input ${errors.stateCity ? "error" : ""}`}
          {...register("stateCity")}
        />
        {errors.stateCity && <p className="form-error">{errors.stateCity.message}</p>}
      </div>

      <div>
        <label className="form-label" htmlFor="courseInterest">
          Select Programme of Interest
        </label>
        <select
          id="courseInterest"
          className={`form-input ${errors.courseInterest ? "error" : ""}`}
          {...register("courseInterest")}
        >
          <option value="">Select a Course</option>
          {citCourses.map((course) => (
            <option key={course.slug} value={course.slug}>
              {course.name} ({course.duration})
            </option>
          ))}
        </select>
        {errors.courseInterest && <p className="form-error">{errors.courseInterest.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary mt-2 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Enquiry & Download Brochure"
        )}
      </button>

      <p className="text-center text-[11px] text-text-muted mt-2">
        By submitting, you agree to receive updates via Email & WhatsApp regarding CIT admissions. We never sell your data.
      </p>
    </form>
  );
}
