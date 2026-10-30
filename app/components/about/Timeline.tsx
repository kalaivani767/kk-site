import { IconApartment, IconArrowRight, IconBuilding, IconLeaf, IconUsers } from "./Icons";

const milestones = [
  {
    icon: IconBuilding,
    year: "2008",
    title: "Foundation",
    description: "Kalaivani Real Estate was founded with a vision to create quality spaces.",
  },
  {
    icon: IconApartment,
    year: "2012",
    title: "Growth",
    description: "Expanded our projects portfolio and earned customer trust.",
  },
  {
    icon: IconUsers,
    year: "2016",
    title: "Expansion",
    description: "Entered new markets and delivered large-scale developments.",
  },
  {
    icon: IconLeaf,
    year: "2023+",
    title: "Excellence",
    description: "Continuing our legacy with innovation, quality and customer satisfaction.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#f3ece0] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-12">
        {/* Text */}
        <div>
          <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            OUR EXPERIENCE
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            A Legacy of
            <br />
            <span className="text-[#c8974a]">Excellence</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#151a2d]/70">
            From humble beginnings to becoming a reliable real estate brand,
            our journey reflects our dedication, hard work and the trust of
            our customers.
          </p>
          <a
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 bg-[#151a2d] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#c8974a] transition hover:bg-[#1f2540]"
          >
            EXPLORE OUR PROJECTS
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-y-0">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#c8974a]/40 sm:block" />

          {milestones.map((m) => (
            <div key={m.year} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#c8974a]/40 bg-[#f3ece0] text-[#c8974a]">
                <m.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-[16px] font-semibold text-[#151a2d]">
                {m.year}
              </p>
              <p className="text-[13px] font-medium tracking-[0.04em] text-[#c8974a]">
                {m.title}
              </p>
              <p className="mt-2 max-w-[140px] text-[13px] leading-relaxed text-[#151a2d]/60">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
