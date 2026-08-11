import type { Metadata } from "next";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${siteConfig.name} for independent mobile and broadband guidance.`,
};

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Get in touch"
      title="Call Northstar Connect"
      intro="This is a call-first service. Speak with an independent specialist about mobile, broadband or business connectivity."
    >
      <h2>Freephone</h2>
      <p>
        <PhoneIcon className="mr-2 inline h-5 w-5 text-[var(--teal)]" />
        <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
      </p>
      <p>Calls are free from UK landlines and mobiles.</p>
      <h2>Opening hours</h2>
      <p>
        <ClockIcon className="mr-2 inline h-5 w-5 text-[var(--teal)]" />
        Monday to Friday, 8am–8pm
        <br />
        Saturday, 9am–5pm
        <br />
        Closed Sundays and UK bank holidays
      </p>
      <h2>Email</h2>
      <p>
        <EnvelopeIcon className="mr-2 inline h-5 w-5 text-[var(--teal)]" />
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <h2>Before you call</h2>
      <p>
        Please do not share passwords, full payment card details or other unnecessary sensitive information. We are an
        independent service and cannot directly access or change an account held with your current provider.
      </p>
    </LegalPage>
  );
}
