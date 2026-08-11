import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy", description: `Cookie and local storage information for ${siteConfig.name}.` };

export default function CookiesPage() {
  return (
    <LegalPage eyebrow="Legal information" title="Cookie policy" intro="This page explains how this website uses cookies and similar browser storage.">
      <h2>Current use</h2>
      <p>This website does not currently set advertising or analytics cookies. It uses temporary session storage to remember when you have dismissed the optional call prompt, preventing it from appearing repeatedly in the same browser session.</p>
      <h2>Necessary technology</h2>
      <p>Hosting and security providers may process limited technical information, such as IP address, browser type and request logs, to deliver and protect the website.</p>
      <h2>Future changes</h2>
      <p>If analytics, advertising or other non-essential cookies are introduced, this policy and the site’s consent controls should be updated before those technologies are activated.</p>
      <h2>Your controls</h2>
      <p>You can clear site data or block browser storage in your browser settings. Blocking necessary storage may affect some site behaviour.</p>
      <h2>Contact</h2>
      <p>Questions can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPage>
  );
}
