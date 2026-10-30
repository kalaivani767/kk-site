import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Kalaivani Real Estate",
};

// TODO: have the client's legal advisor review this draft before launch.
export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 2026"
      intro="By using this website you agree to the following terms. Please read them carefully."
      sections={[
        {
          heading: "Use of this website",
          body: [
            "The content on this website is provided for general information about Kalaivani Real Estate and its projects. You agree not to misuse the site or attempt to disrupt its operation.",
          ],
        },
        {
          heading: "Project information",
          body: [
            "Project details, images, prices and availability are indicative and may change without notice. They do not form an offer or contract. Please confirm all details with our team before making any decision.",
          ],
        },
        {
          heading: "Approvals",
          body: [
            "Approval status (such as DTCP, RERA and building approvals) is shared for each project on request, along with the relevant registration or approval numbers.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All text, logos and images on this website belong to Kalaivani Real Estate or its licensors and may not be copied without written permission.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "We make reasonable efforts to keep this website accurate but do not accept liability for losses arising from reliance on its content.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            `Questions about these terms can be sent to ${SITE.email} or by calling ${SITE.officePhone.display}.`,
          ],
        },
      ]}
    />
  );
}
