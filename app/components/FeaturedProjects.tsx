import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconArea, IconBath, IconBed, IconPin } from "./Icons";

type Project = {
  name: string;
  location: string;
  price: string;
  image: string;
  badge: string;
  beds: number;
  baths: number;
  area: string;
};

const projects: Project[] = [
  {
    name: "The Meridian Villa",
    location: "Hosur Road, Krishnagiri",
    price: "₹2.4 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    badge: "For Sale",
    beds: 4,
    baths: 4,
    area: "3,200 sqft",
  },
  {
    name: "Azure Court Residences",
    location: "Bengaluru Highway, Krishnagiri",
    price: "₹1.8 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    badge: "New Launch",
    beds: 3,
    baths: 3,
    area: "2,450 sqft",
  },
  {
    name: "Palm Grove Estate",
    location: "Bagalur Road, Hosur",
    price: "₹3.1 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    badge: "Ready to Move",
    beds: 5,
    baths: 5,
    area: "4,100 sqft",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            OUR PORTFOLIO
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#151a2d]/70">
            A selection of our finest developments — designed for comfort,
            built to last, and located where your life happens.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden border border-black/5 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#151a2d] px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-[#c8974a]">
                  {project.badge.toUpperCase()}
                </span>
              </div>

              <div className="p-6">
                <p className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em] text-[#151a2d]/60">
                  <IconPin className="h-3.5 w-3.5 text-[#c8974a]" />
                  {project.location}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#151a2d]">
                  {project.name}
                </h3>
                <p className="mt-1 text-[15px] font-semibold text-[#c8974a]">
                  {project.price}
                </p>

                <div className="mt-5 flex items-center gap-5 border-t border-black/5 pt-5 text-[13px] text-[#151a2d]/70">
                  <span className="flex items-center gap-1.5">
                    <IconBed className="h-4 w-4" /> {project.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconBath className="h-4 w-4" /> {project.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconArea className="h-4 w-4" /> {project.area}
                  </span>
                </div>

                <Link
                  href="/contact#form"
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-[#151a2d] transition group-hover:text-[#c8974a]"
                >
                  ENQUIRE NOW
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-[#151a2d] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#151a2d] hover:text-[#c8974a]"
          >
            VIEW ALL PROJECTS
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
