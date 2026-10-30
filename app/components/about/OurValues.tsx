import {  IconLeaf, IconShield, IconUsers } from "./Icons";

const values = [
  {
    icon: IconShield,
    title: "Integrity",
    description: "We believe in transparent dealings and ethical practices.",
  },
  {
    icon: IconLeaf,
    title: "Quality",
    description: "We never compromise on quality — in materials or commitments.",
  },
  {
    icon: IconUsers,
    title: "Customer First",
    description: "Our customers are at the heart of every decision we make.",
  },
  {
    icon: IconLeaf,
    title: "Sustainability",
    description: "We build responsibly for a better and greener tomorrow.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            OUR VALUES
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c8974a]/10 text-[#c8974a]">
                <value.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold text-[#151a2d]">
                {value.title}
              </h3>
              <p className="mt-2 max-w-[200px] text-[14px] leading-relaxed text-[#151a2d]/65">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
