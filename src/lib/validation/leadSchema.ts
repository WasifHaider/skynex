import { z } from "zod";

export const EQUIPMENT_OPTIONS = [
  "Dry van",
  "Reefer",
  "Flatbed",
  "Step deck",
  "Box truck",
  "Power only",
  "Hotshot",
] as const;

export const AUTHORITY_AGE_OPTIONS = [
  "Under 6 months",
  "6–12 months",
  "1–3 years",
  "3+ years",
  "Applying now",
] as const;

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+.-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address"),
  mcNumber: z
    .string()
    .trim()
    .min(1, "Enter your MC number"),
  equipment: z.enum(EQUIPMENT_OPTIONS, {
    message: "Choose an equipment type",
  }),
  authorityAge: z.enum(AUTHORITY_AGE_OPTIONS, {
    message: "Choose your authority age",
  }),
  lanes: z.string().trim().optional(),
  website: z.string().trim().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
