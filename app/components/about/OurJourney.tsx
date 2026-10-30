import Image from "next/image";
import { IconApartment, IconBuilding, IconPin, IconUsers } from "./Icons";

const stats = [
  { icon: IconBuilding, value: "15+", label: "Years of Experience" },
  { icon: IconApartment, value: "500+", label: "Projects Completed" },
  { icon: IconPin, value: "5+", label: "Cities Presence" },
  { icon: IconUsers, value: "5000+", label: "Happy Customers" },
];

export default function OurJourney() {
  return (
    <section id="story" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Image with decorative dot grid */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-5 -top-5 z-0 hidden grid-cols-6 gap-2 sm:grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#c8974a]/40" />
            ))}
          </div>
          <div className="relative z-10 h-[420px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
              alt="Modern living room interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text + stats */}
        <div>
          <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            OUR JOURNEY
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Driven by Purpose.
            <br />
            Focused on <span className="text-[#c8974a]">People.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#151a2d]/70">
            Founded with the vision to redefine real estate through quality
            construction and a customer-first approach, we have grown into a
            brand that delivers more than just buildings — we create
            communities and lasting relationships.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start gap-3">
                <stat.icon className="h-7 w-7 text-[#c8974a]" />
                <p className="font-serif text-2xl text-[#151a2d]">{stat.value}</p>
                <p className="text-[12px] leading-snug text-[#151a2d]/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
