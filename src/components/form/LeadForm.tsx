"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  EQUIPMENT_OPTIONS,
  AUTHORITY_AGE_OPTIONS,
} from "@/lib/validation/leadSchema";
import { submitLead, type SubmitLeadState } from "@/lib/actions/submitLead";

const initialState: SubmitLeadState = { status: "idle" };

const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  mcNumber: "",
  equipment: "",
  authorityAge: "",
  lanes: "",
};

const inputClasses =
  "w-full box-border rounded-[9px] border border-ink/16 bg-paper px-3.5 py-3 font-sans text-[14.5px] font-medium text-ink outline-none focus-visible:border-forest/60";

const labelClasses =
  "mb-2 block font-mono text-[10px] font-semibold tracking-[0.12em] text-muted";

const errorClasses = "mt-1.5 font-sans text-xs font-medium text-[#b3261e]";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-[9px] bg-forest px-6 py-4 font-sans text-[15px] font-bold text-paper shadow-[0_8px_20px_rgba(12,92,60,0.2)] transition hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Get a dispatcher"}
    </button>
  );
}

export function LeadForm() {
  const [state, formAction] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);
  const fieldErrors = state.status === "error" ? state.fieldErrors : {};

  function update<K extends keyof typeof initialValues>(key: K) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setValues((prev) => ({ ...prev, [key]: e.target.value }));
  }

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-ink/12 bg-cream p-7">
        <p className="font-sans text-base font-semibold text-forest">
          Thanks — a dispatcher will call you back today.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/12 bg-cream p-6 sm:p-7">
      <form action={formAction} noValidate className="relative">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClasses}>FULL NAME</span>
            <input
              name="fullName"
              type="text"
              placeholder="Marcus Delgado"
              value={values.fullName}
              onChange={update("fullName")}
              className={inputClasses}
            />
            {fieldErrors.fullName && <p className={errorClasses}>{fieldErrors.fullName}</p>}
          </label>

          <label className="block">
            <span className={labelClasses}>PHONE</span>
            <input
              name="phone"
              type="tel"
              placeholder="(210) 555-0142"
              value={values.phone}
              onChange={update("phone")}
              className={inputClasses}
            />
            {fieldErrors.phone && <p className={errorClasses}>{fieldErrors.phone}</p>}
          </label>

          <label className="block">
            <span className={labelClasses}>EMAIL</span>
            <input
              name="email"
              type="email"
              placeholder="you@yourtrucking.com"
              value={values.email}
              onChange={update("email")}
              className={inputClasses}
            />
            {fieldErrors.email && <p className={errorClasses}>{fieldErrors.email}</p>}
          </label>

          <label className="block">
            <span className={labelClasses}>MC NUMBER</span>
            <input
              name="mcNumber"
              type="text"
              placeholder="MC-1234567"
              value={values.mcNumber}
              onChange={update("mcNumber")}
              className={inputClasses}
            />
            {fieldErrors.mcNumber && <p className={errorClasses}>{fieldErrors.mcNumber}</p>}
          </label>

          <label className="block">
            <span className={labelClasses}>EQUIPMENT</span>
            <select
              name="equipment"
              value={values.equipment}
              onChange={update("equipment")}
              className={inputClasses}
            >
              <option value="" disabled>
                Choose equipment
              </option>
              {EQUIPMENT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldErrors.equipment && <p className={errorClasses}>{fieldErrors.equipment}</p>}
          </label>

          <label className="block">
            <span className={labelClasses}>AUTHORITY AGE</span>
            <select
              name="authorityAge"
              value={values.authorityAge}
              onChange={update("authorityAge")}
              className={inputClasses}
            >
              <option value="" disabled>
                Choose authority age
              </option>
              {AUTHORITY_AGE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldErrors.authorityAge && (
              <p className={errorClasses}>{fieldErrors.authorityAge}</p>
            )}
          </label>
        </div>

        <label className="mt-3.5 block">
          <span className={labelClasses}>HOME BASE &amp; LANES YOU WANT</span>
          <textarea
            name="lanes"
            rows={3}
            placeholder="Based in San Antonio. Prefer TX–TN–GA triangle, home most weekends."
            value={values.lanes}
            onChange={update("lanes")}
            className={`${inputClasses} resize-y`}
          />
          {fieldErrors.lanes && <p className={errorClasses}>{fieldErrors.lanes}</p>}
        </label>

        <div
          className="absolute h-px w-px overflow-hidden opacity-0"
          style={{ clip: "rect(0,0,0,0)" }}
          aria-hidden="true"
        >
          <label htmlFor="website">Leave this field blank</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3.5">
          <SubmitButton />
          <span className="font-sans text-xs font-medium text-muted">
            We call back the same day. Your info stays with our dispatch team.
          </span>
        </div>
      </form>
    </div>
  );
}
