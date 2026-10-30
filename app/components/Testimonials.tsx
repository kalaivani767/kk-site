import Image from "next/image";
import { IconStar } from "./Icons";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohan Mehta",
    location: "Purchased a plot in Krishnagiri",
    quote:
      "From our first site visit to getting the keys, the Kalaivani team was transparent and quick to respond. No surprises, no hidden costs.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Nair",
    location: "Built a home in Krishnagiri",
    quote:
      "We handed them our vague ideas and they turned it into a home that feels exactly like us. The interior design team especially exceeded expectations.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Arvind & Sheela Rao",
    location: "Sold their property",
    quote:
      "Selling felt stressful before we spoke to them. They handled valuation, paperwork, and buyers, and closed within six weeks.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#151a2d] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            TESTIMONIALS
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between border border-white/10 bg-white/[0.03] p-8"
            >
              <div>
                <div className="flex gap-1 text-[#c8974a]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[12px] text-white/50">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
