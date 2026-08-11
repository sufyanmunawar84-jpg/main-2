import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", description: `Terms for using the ${siteConfig.name} website and advisory service.` };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Terms of use" intro="These terms apply when you use our website or contact our independent advisory service.">
      <h2>About our service</h2>
      <p>{siteConfig.name} provides general comparison and advisory support. We are independent and do not represent any mobile network, broadband provider or device manufacturer.</p>
      <h2>Information, not a guarantee</h2>
      <p>We aim to provide clear and current information, but plan availability, pricing, coverage, eligibility and terms are controlled by providers and can change. We do not guarantee savings, acceptance, coverage or that an option is the cheapest in the market.</p>
      <h2>Your responsibility</h2>
      <p>You should check your existing contract, review the provider’s full terms and confirm all prices and service details before entering an agreement. Decisions remain yours.</p>
      <h2>Third-party services</h2>
      <p>If you choose a provider option, any resulting contract is between you and that provider. Their terms, privacy policy and cancellation rules apply.</p>
      <h2>Acceptable use</h2>
      <p>You must not misuse the website, attempt unauthorised access, introduce malicious code or use the service unlawfully.</p>
      <h2>Liability</h2>
      <p>Nothing in these terms excludes liability that cannot lawfully be excluded. To the extent permitted by law, we are not responsible for indirect losses or provider actions outside our reasonable control.</p>
      <h2>Contact</h2>
      <p>Questions can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPage>
  );
}
