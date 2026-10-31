import type { Metadata } from "next";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using the ${business.name} website and enquiring about our services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-4xl font-bold">Terms &amp; Conditions</h1>
      <p className="mt-3 text-sm text-soft/60">Last updated: October 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-soft/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-soft">About this website</h2>
          <p className="mt-2">
            This website provides general information about {business.name}&apos;s water tank
            cleaning services in {business.city}, {business.region}. Photographs marked as
            demonstration visuals are for illustration only and are not completed customer
            projects.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-soft">Enquiries and bookings</h2>
          <p className="mt-2">
            Sending an enquiry through the website, by phone or by WhatsApp does not by itself
            confirm a booking. Service details, timing and pricing are agreed directly with us
            before any work is done.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-soft">Accuracy of information</h2>
          <p className="mt-2">
            We try to keep the information on this website accurate and up to date, but it may
            change without notice. Please contact us to confirm details before relying on them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-soft">Limitation of liability</h2>
          <p className="mt-2">
            To the extent permitted by law, {business.name} is not liable for losses arising from
            your use of this website or from relying on the general information on it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-soft">Changes</h2>
          <p className="mt-2">
            We may update these terms from time to time. The date at the top shows when they were
            last changed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-soft">Contact</h2>
          <p className="mt-2">
            Questions? Call {business.phoneDisplay} or email{" "}
            <a href={business.emailUrl} className="text-aqua underline">
              {business.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}