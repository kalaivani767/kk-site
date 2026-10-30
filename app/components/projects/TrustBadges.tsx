import { IconBank, IconClock, IconDocument, IconShield } from "./Icons";

const badges = [
  {
    icon: IconShield,
    title: "RERA Registered",
    description: "Every project is registered under RERA for full transparency.",
  },
  {
    icon: IconDocument,
    title: "DTCP Approval",
    description: "Layouts and plots approved by the Directorate of Town and Country Planning.",
  },
  {
    icon: IconDocument,
    title: "Building Approval",
    description: "Construction carried out with sanctioned building plans and approvals.",
  },
  {
    icon: IconDocument,
    title: "100% Legal Documentation",
    description: "Clear titles and verified paperwork handled end-to-end.",
  },
  {
    icon: IconBank,
    title: "Home Loan Assistance",
    description: "Tie-ups with leading banks to help you secure financing.",
  },
  {
    icon: IconClock,
    title: "On-Time Possession",
    description: "A track record of handing over projects on schedule.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center border border-[#c8974a]/30 text-[#c8974a]">
                <badge.icon className="h-6 w-6" />
              </span>
              <h3 className="text-[16px] font-semibold text-[#151a2d]">
                {badge.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#151a2d]/65">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
