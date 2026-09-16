"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import { leadSchema } from "@/lib/validation/leadSchema";

export type SubmitLeadState =
  | { status: "idle" }
  | { status: "error"; fieldErrors: Record<string, string> }
  | { status: "success" };

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  const raw = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    mcNumber: formData.get("mcNumber"),
    equipment: formData.get("equipment"),
    authorityAge: formData.get("authorityAge"),
    lanes: formData.get("lanes"),
    website: formData.get("website"),
  };

  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { status: "success" };
  }

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: "error", fieldErrors };
  }

  const { fullName, phone, email, mcNumber, equipment, authorityAge, lanes } =
    parsed.data;

  const lines = [
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `MC number: ${mcNumber}`,
    `Equipment: ${equipment}`,
    `Authority age: ${authorityAge}`,
    `Home base & lanes: ${lanes || "(none given)"}`,
  ];
  const payloadText = lines.join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.log("New lead (RESEND_API_KEY not set, logging instead of sending):\n" + payloadText);
    return { status: "success" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: `${site.name} <onboarding@resend.dev>`,
    to: process.env.CONTACT_TO_EMAIL ?? site.email,
    subject: `New dispatcher lead: ${fullName}`,
    text: payloadText,
  });

  return { status: "success" };
}
