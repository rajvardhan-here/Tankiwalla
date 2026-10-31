"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type FieldName = "name" | "phone" | "location";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success" | "error";

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Apna naam likho.";
  const phone = values.phone.replace(/[\s-]/g, "");
  if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(phone)) {
    errors.phone = "10 digit ka sahi mobile number likho.";
  }
  if (values.location.trim().length < 2) errors.location = "Apni location likho.";
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-soft " +
  "placeholder:text-soft/40 focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/40";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-soft/90">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const control = (name: FieldName) => ({
    id: name,
    name,
    className: cn(inputClass, errors[name] && "border-red-400"),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  function clearError(event: FormEvent<HTMLFormElement>) {
    const field = (event.target as HTMLInputElement).name as FieldName;
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Hidden spam trap: real visitors never tick this box
    if (data.get("botcheck")) return;

    const get = (key: string) => String(data.get(key) ?? "");
    const values: Record<FieldName, string> = {
      name: get("name"),
      phone: get("phone"),
      location: get("location"),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!accessKey) {
      setStatus("error");
      setFeedback("Form abhi set up nahi hai. Please call ya WhatsApp karo.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${values.name.trim()} (${business.name} website)`,
          from_name: `${business.name} Website`,
          name: values.name.trim(),
          phone: values.phone.trim(),
          location: values.location.trim(),
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFeedback("Shukriya! Aapki enquiry bhej di gayi hai. Hum jaldi aapse contact karenge.");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setFeedback("Sorry, enquiry nahi bhej paye. Dobara try karo, ya call ya WhatsApp karo.");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title={
              <span id="contact-heading">
                Book your <span className="text-water">tank cleaning</span>
              </span>
            }
            description="Details bhejo, hum aapse contact karenge. Seedha baat karni ho to call ya WhatsApp karo."
          />

          <Reveal delay={0.1}>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li>
                <a href={business.phoneUrl} className="inline-flex items-center gap-3 hover:text-aqua">
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-aqua">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-[#25D366]"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-[#25D366]">
                    <WhatsAppIcon size={18} />
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={business.emailUrl} className="inline-flex items-center gap-3 break-all hover:text-aqua">
                  <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-aqua">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  {business.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-aqua">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                {business.city}, {business.region}
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            onChange={clearError}
            noValidate
            className="glass space-y-4 rounded-3xl p-5 sm:p-7"
          >
            <Field id="name" label="Name" error={errors.name}>
              <input {...control("name")} type="text" autoComplete="name" placeholder="Aapka naam" />
            </Field>

            <Field id="phone" label="Contact Number" error={errors.phone}>
              <input
                {...control("phone")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="10 digit mobile number"
              />
            </Field>

            <Field id="location" label="Location" error={errors.location}>
              <input {...control("location")} type="text" placeholder="Indore mein area ya colony" />
            </Field>

            {/* Spam trap, hidden from people */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {feedback && (
              <div
                role="status"
                className={cn(
                  "flex items-start gap-3 rounded-2xl border p-4 text-sm",
                  status === "success"
                    ? "border-aqua/40 bg-aqua/10 text-aqua"
                    : "border-red-400/40 bg-red-400/10 text-red-200"
                )}
              >
                {status === "success" ? (
                  <CheckCircle2 size={20} className="shrink-0" aria-hidden="true" />
                ) : (
                  <TriangleAlert size={20} className="shrink-0" aria-hidden="true" />
                )}
                <p>{feedback}</p>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? "Bhej rahe hain..." : "Send Enquiry"}
              </Button>
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                Ya WhatsApp karo
              </WhatsAppButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}