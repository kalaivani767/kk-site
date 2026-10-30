"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArea, IconArrowRight, IconBath, IconBed, IconPin } from "../Icons";

type Category =
  | "Villas"
  | "Apartments"
  | "Commercial"
  | "Layout Marketing"
  | "Plots"
  | "Flats"
  | "Residential Plots";
type Approval = "RERA" | "DTCP Approval" | "Building Approval";
type Status = "Ongoing" | "Completed" | "Upcoming";

type Project = {
  name: string;
  location: string;
  price: string;
  image: string;
  category: Category;
  status: Status;
  approvals: Approval[];
  beds: number;
  baths: number;
  area: string;
};

const projects: Project[] = [
  {
    name: "The Meridian Villa",
    location: "Hosur Road, Krishnagiri",
    price: "₹2.4 Cr onwards",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Ongoing",
    approvals: ["RERA", "Building Approval"],
    beds: 4,
    baths: 4,
    area: "3,200 sqft",
  },
  {
    name: "Palm Grove Estate",
    location: "Bagalur Road, Hosur",
    price: "₹3.1 Cr onwards",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Completed",
    approvals: ["RERA", "Building Approval"],
    beds: 5,
    baths: 5,
    area: "4,100 sqft",
  },
  {
    name: "Willow Park Homes",
    location: "Royakottai Road, Krishnagiri",
    price: "₹2.9 Cr onwards",
    image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Completed",
    approvals: ["Building Approval"],
    beds: 4,
    baths: 4,
    area: "3,600 sqft",
  },
  {
    name: "Azure Court Residences",
    location: "Bengaluru Highway, Krishnagiri",
    price: "₹1.8 Cr onwards",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Upcoming",
    approvals: ["RERA", "Building Approval"],
    beds: 3,
    baths: 3,
    area: "2,450 sqft",
  },
  {
    name: "Sunrise Heights",
    location: "Mathigiri, Hosur",
    price: "₹1.4 Cr onwards",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Ongoing",
    approvals: ["RERA", "Building Approval"],
    beds: 2,
    baths: 2,
    area: "1,650 sqft",
  },
  {
    name: "Silver Oak Residency",
    location: "Dharmapuri Road, Krishnagiri",
    price: "₹1.6 Cr onwards",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Upcoming",
    approvals: ["RERA"],
    beds: 3,
    baths: 2,
    area: "1,900 sqft",
  },
  {
    name: "Kalaivani Business Park",
    location: "Bangalore Road, Krishnagiri",
    price: "₹85 Lakh onwards",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Ongoing",
    approvals: ["Building Approval"],
    beds: 0,
    baths: 2,
    area: "1,200 sqft",
  },
  {
    name: "Orion Corporate Tower",
    location: "SIPCOT, Hosur",
    price: "₹1.2 Cr onwards",
    image: "https://images.unsplash.com/photo-1576731753569-3e93a228048c?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Completed",
    approvals: ["RERA", "Building Approval"],
    beds: 0,
    baths: 2,
    area: "1,800 sqft",
  },
  {
    name: "Vertex Trade Centre",
    location: "Salem Road, Krishnagiri",
    price: "₹95 Lakh onwards",
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Upcoming",
    approvals: ["Building Approval"],
    beds: 0,
    baths: 1,
    area: "950 sqft",
  },
  {
    name: "Kalaivani Green Layout",
    location: "Thonnaiyan kottai, Krishnagiri",
    price: "Price on request",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1200&q=80",
    category: "Layout Marketing",
    status: "Ongoing",
    approvals: ["DTCP Approval"],
    beds: 0,
    baths: 0,
    area: "1,200 sqft onwards",
  },
  {
    name: "Chennai Salai Plots",
    location: "Chennai Salai, Krishnagiri",
    price: "Price on request",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    category: "Plots",
    status: "Ongoing",
    approvals: ["DTCP Approval"],
    beds: 0,
    baths: 0,
    area: "1,500 sqft onwards",
  },
  {
    name: "Krishnagiri Town Flats",
    location: "Krishnagiri Town",
    price: "Price on request",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    category: "Flats",
    status: "Upcoming",
    approvals: ["RERA", "Building Approval"],
    beds: 2,
    baths: 2,
    area: "1,050 sqft",
  },
  {
    name: "Kalaivani Residential Enclave",
    location: "Krishnagiri Taluk",
    price: "Price on request",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80",
    category: "Residential Plots",
    status: "Completed",
    approvals: ["DTCP Approval", "RERA"],
    beds: 0,
    baths: 0,
    area: "2,400 sqft onwards",
  },
];

type Filter = "All" | Category | "RERA Registered";

const filters: Filter[] = [
  "All",
  "Apartments",
  "Flats",
  "Villas",
  "Commercial",
  "Plots",
  "Residential Plots",
  "Layout Marketing",
  "RERA Registered",
];

const statusStyles: Record<Status, string> = {
  Ongoing: "bg-[#c8974a] text-[#151a2d]",
  Completed: "bg-[#151a2d] text-[#c8974a]",
  Upcoming: "bg-white text-[#151a2d]",
};

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 text-[11px] font-semibold tracking-[0.08em] transition ${
        active
          ? "bg-[#151a2d] text-[#c8974a]"
          : "border border-[#151a2d]/15 text-[#151a2d]/70 hover:border-[#151a2d]/40"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
}

const PAGE_SIZE = 6;

export default function ProjectsListing() {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "RERA Registered") return p.approvals.includes("RERA");
    return p.category === activeCategory;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (category: Filter) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="projects-list" className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Filter tabs */}
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeCategory === filter}
              onClick={() => handleCategoryChange(filter)}
            />
          ))}
        </div>

        {/* Result count */}
        <p className="mt-6 text-center text-[13px] text-[#151a2d]/50">
          Showing {visible.length} of {filtered.length} project
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
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
                <span
                  className={`absolute left-4 top-4 px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
                <span className="absolute right-4 top-4 bg-white/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-[#151a2d]">
                  {project.category.toUpperCase()}
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
                  {project.beds > 0 && (
                    <span className="flex items-center gap-1.5">
                      <IconBed className="h-4 w-4" /> {project.beds}
                    </span>
                  )}
                  {project.baths > 0 && (
                    <span className="flex items-center gap-1.5">
                      <IconBath className="h-4 w-4" /> {project.baths}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <IconArea className="h-4 w-4" /> {project.area}
                  </span>
                </div>

                {project.approvals.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.approvals.map((approval) => (
                      <span
                        key={approval}
                        className="border border-[#c8974a]/40 px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] text-[#c8974a]"
                      >
                        {approval.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}

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

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-[15px] text-[#151a2d]/50">
            No projects found in this category yet.
          </p>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 border border-[#151a2d] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#151a2d] hover:text-[#c8974a]"
            >
              LOAD MORE PROJECTS
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
