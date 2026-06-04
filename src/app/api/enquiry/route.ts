import { NextResponse } from "next/server";
import * as zod from "zod";

const serverSchema = zod.object({
  fullName: zod
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be under 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  email: zod.string().email("Invalid email format"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Invalid phone format"),
  stateCity: zod.string().min(3, "Location invalid"),
  qualification: zod.string().min(1, "Qualification invalid"),
  courseInterest: zod.string().min(1, "Course interest invalid"),
  message: zod.string().max(500).optional(),
  website: zod.string().max(0).optional(), // Honeypot spam field
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side Zod validation
    const result = serverSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, stateCity, qualification, courseInterest, message, website } =
      result.data;

    // Check honeypot field
    if (website && website.length > 0) {
      // Quietly reject spam bots with a success response, or reject outright. 
      // Usually, responding with a fake success is better to confuse spambots, or just return 400.
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully (spam trapped)" },
        { status: 200 }
      );
    }

    // Simulate database write / email dispatch latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("----------------------------------------");
    console.log("NEW ENQUIRY RECEIVED (HITS Lead Gen):");
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Location: ${stateCity}`);
    console.log(`Qualif: ${qualification}`);
    console.log(`Course: ${courseInterest}`);
    console.log(`Msg: ${message || "(none)"}`);
    console.log("----------------------------------------");

    // Success response. The user will implement real integrations (like EmailJS/Resend/CRM API webhook) here.
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry logged successfully.",
        lead: {
          fullName,
          email,
          courseInterest,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
