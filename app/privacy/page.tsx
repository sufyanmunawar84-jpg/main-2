import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `How ${siteConfig.name} handles personal information.` };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Privacy policy" intro="This policy explains what information we collect, why we use it and the choices available to you.">
      <h2>Who we are</h2>
      <p>{siteConfig.name} is an independent UK telecom comparison and advisory service. We are not affiliated with or endorsed by any mobile or broadband provider.</p>
      <h2>Information we may collect</h2>
      <p>When you contact us, we may collect your name, contact details and information relevant to your mobile, broadband or business connectivity enquiry. We do not ask for account passwords during an initial enquiry.</p>
      <h2>How we use information</h2>
      <ul><li>To respond to and manage your enquiry.</li><li>To discuss relevant connectivity options.</li><li>To maintain service quality, prevent misuse and meet legal obligations.</li></ul>
      <h2>Our lawful basis</h2>
      <p>Depending on the context, we process information with your consent, to take steps at your request, for legitimate interests in operating our service, or to comply with law.</p>
      <h2>Sharing information</h2>
      <p>Where you choose to pursue an option, we will explain if information needs to be shared with a provider or service partner. We do not sell personal information. Service providers supporting our website or communications may process data under contract.</p>
      <h2>Retention and security</h2>
      <p>We retain information only for as long as reasonably necessary for the purpose collected and apply proportionate technical and organisational safeguards.</p>
      <h2>Your rights</h2>
      <p>UK data protection law may give you rights to access, correct, erase, restrict or object to processing, and to request data portability. You can also complain to the Information Commissioner’s Office.</p>
      <h2>Contact</h2>
      <p>For privacy questions or requests, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPage>
  );
}
