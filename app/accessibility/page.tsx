import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Accessibility", description: `${siteConfig.name}'s approach to accessible digital services.` };

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Website information" title="Accessibility" intro="We want our website and phone-first service to be usable by as many people as possible.">
      <h2>Our approach</h2>
      <p>The site is designed with semantic headings, keyboard-accessible controls, visible focus states, descriptive links, responsive text and support for reduced-motion preferences.</p>
      <h2>Using this website</h2>
      <p>You should be able to zoom the page, navigate interactive elements by keyboard, use common screen readers and access content across mobile and desktop devices.</p>
      <h2>Known limitations</h2>
      <p>Third-party provider information or services linked from this website may have different accessibility standards and are outside our control.</p>
      <h2>Feedback and alternative formats</h2>
      <p>If you encounter a barrier or need information in another format, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>. Please tell us which page or content you need.</p>
    </LegalPage>
  );
}
