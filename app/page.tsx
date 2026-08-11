import { CallCTA } from "@/components/CallCTA";
import { ConversionTools } from "@/components/ConversionTools";
import { FAQ, faqSchemaItems } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phoneDisplay,
        description: siteConfig.description,
        areaServed: { "@type": "Country", name: "United Kingdom" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Service",
        name: "Independent UK telecom comparison by phone",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: ["Mobile plan comparison", "Broadband guidance", "Business connectivity guidance"],
        description: siteConfig.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqSchemaItems,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <FAQ />
        <CallCTA />
      </main>
      <Footer />
      <ConversionTools />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
