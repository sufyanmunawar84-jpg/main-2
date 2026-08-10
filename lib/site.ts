export const siteConfig = {
  name: "Northstar Connect",
  descriptor: "Independent UK Telecom Comparison & Advisory Service",
  description:
    "Independent guidance for UK mobile, SIM-only, broadband and business connectivity options. Speak with a specialist and compare available plans.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.northstarconnect.co.uk",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "0808 157 0000",
  phoneHref: `tel:${(process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "08081570000").replace(/\D/g, "")}`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@northstarconnect.co.uk",
  disclaimer:
    "We are an independent telecom comparison and customer support service. We are not affiliated with or endorsed by any mobile or broadband provider.",
} as const;

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
] as const;
