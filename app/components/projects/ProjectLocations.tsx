import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "../Icons";

type City = {
  name: string;
  count: string;
  image: string;
};

const cities: City[] = [
  {
    name: "Krishnagiri",
    count: "24 Projects",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hosur",
    count: "6 Projects",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dharmapuri",
    count: "9 Projects",
    image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Salem",
    count: "4 Projects",
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectLocations() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
              WHERE WE BUILD
              <span className="h-px w-8 bg-[#c8974a]" />
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
              Explore by City
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#151a2d]/70">
            Every Kalaivani project is chosen for its location first —
            connectivity, growth potential, and everyday convenience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              href="/contact#form"
              className="group relative block h-72 overflow-hidden"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151a2d] via-[#151a2d]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl text-white">{city.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em] text-[#c8974a]">
                  {city.count}
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
