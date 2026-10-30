import Image from "next/image";
import { SITE } from "../../lib/site";

// TODO: replace with the leader's real name, role, photo and bio from the client.
const leader = {
  name: SITE.name,
  role: "Founder & Managing Director",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  bio: [
    "Under her guidance, Kalaivani Real Estate has grown into a trusted name in Krishnagiri, helping families and investors find, build and own property with confidence.",
    "She believes real estate is built on trust — clear titles, approved layouts and honest dealings from the first site visit to the final handover.",
  ],
  highlights: ["DTCP & RERA approved projects", "Transparent dealings", "Customer-first approach"],
};

export default function LeaderWithVision() {
  return (
    <section className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            OUR LEADER
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Leader with Vision
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-black/5">
            <Image
              src={leader.photo}
              alt={leader.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-serif text-3xl text-[#151a2d]">{leader.name}</p>
            <p className="mt-1 text-[13px] font-medium tracking-[0.12em] text-[#c8974a]">
              {leader.role.toUpperCase()}
            </p>
            <span className="mt-6 block h-px w-16 bg-[#c8974a]" />
            <div className="mt-6 space-y-4">
              {leader.bio.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-[#151a2d]/70">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {leader.highlights.map((item) => (
                <li
                  key={item}
                  className="border border-[#c8974a]/40 px-4 py-2 text-[12px] font-semibold tracking-[0.04em] text-[#151a2d]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
