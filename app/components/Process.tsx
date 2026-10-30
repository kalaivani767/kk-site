const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your budget, needs, and vision for the property or project.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our architects and planners turn your requirements into a detailed blueprint.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Skilled teams execute the build with regular quality checks at every stage.",
  },
  {
    number: "04",
    title: "Handover & Support",
    description:
      "You move in with full documentation, and our support continues beyond that.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            HOW IT WORKS
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Our Simple 4-Step Process
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#151a2d]/70">
            Whether you&apos;re building, buying, or selling — here&apos;s how
            we take you from first conversation to keys in hand.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* connecting line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[#c8974a]/30 lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <span className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center border border-[#c8974a]/40 bg-[#faf8f3] font-serif text-2xl text-[#c8974a]">
                {step.number}
              </span>
              <h3 className="text-[17px] font-semibold tracking-[0.02em] text-[#151a2d]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#151a2d]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
