export const siteConfig = {
  name: "Northstar Connect",
  descriptor: "Independent UK telecom comparison",
  description:
    "Call an independent UK specialist for clear guidance on mobile, SIM-only, broadband and business connectivity options. Freephone, no obligation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.northstarconnect.co.uk",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "0808 157 0000",
  phoneHref: `tel:${(process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "08081570000").replace(/\D/g, "")}`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@northstarconnect.co.uk",
  hours: "Mon–Fri 8am–8pm · Sat 9am–5pm",
  disclaimer:
    "We are an independent telecom comparison and customer support service. We are not affiliated with or endorsed by any mobile or broadband provider.",
} as const;

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why call", href: "#why-call" },
  { label: "FAQs", href: "#faqs" },
] as const;
