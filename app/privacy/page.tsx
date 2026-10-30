import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Kalaivani Real Estate",
};

// TODO: have the client's legal advisor review this draft before launch.
export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro="Kalaivani Real Estate respects your privacy. This policy explains what information we collect through this website and how we use it."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you fill out our contact form or call us, we may collect your name, email address, phone number and the details of your enquiry.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to enquiries, arrange site visits, share details about our projects and improve our services. We do not sell your personal information.",
          ],
        },
        {
          heading: "Sharing of information",
          body: [
            "We share information only with partners who help us serve you (for example banks for loan assistance) or where required by law.",
          ],
        },
        {
          heading: "Data security",
          body: [
            "We take reasonable steps to protect your information, but no method of transmission over the internet is completely secure.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You may ask us to update or delete your information at any time by writing to ${SITE.email}.`,
          ],
        },
        {
          heading: "Contact us",
          body: [
            `${SITE.fullName}, ${SITE.addressLines.join(" ")} Phone: ${SITE.officePhone.display}. Email: ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
