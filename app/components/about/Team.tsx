"use client";

import { useState } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

const team: TeamMember[] = [
  { name: "Ramesh K.", role: "Managing Director", photo: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Priya S.", role: "Director – Operations", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Karthik R.", role: "Director – Projects", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Arun V.", role: "Head – Design & Planning", photo: "https://randomuser.me/api/portraits/men/29.jpg" },
  { name: "Meera J.", role: "Head – Sales", photo: "https://randomuser.me/api/portraits/women/22.jpg" },
  { name: "Vikram S.", role: "Head – Construction", photo: "https://randomuser.me/api/portraits/men/67.jpg" },
  { name: "Divya N.", role: "Head – Customer Relations", photo: "https://randomuser.me/api/portraits/women/48.jpg" },
  { name: "Sanjay P.", role: "Finance Lead", photo: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Anjali M.", role: "Interior Design Lead", photo: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Rahul D.", role: "Legal & Compliance", photo: "https://randomuser.me/api/portraits/men/15.jpg" },
  { name: "Kavya T.", role: "Marketing Lead", photo: "https://randomuser.me/api/portraits/women/57.jpg" },
  { name: "Suresh B.", role: "Site Operations", photo: "https://randomuser.me/api/portraits/men/8.jpg" },
];

const PAGE_SIZE = 4;
const pageCount = Math.ceil(team.length / PAGE_SIZE);

export default function Team() {
  const [page, setPage] = useState(0);
  const visible = team.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            OUR TEAM
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Meet Our Team
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {visible.map((member) => (
            <div key={member.name} className="group border border-black/5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[15px] font-semibold text-[#151a2d]">
                  {member.name}
                </p>
                <p className="text-[13px] text-[#151a2d]/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Page dots */}
        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show team page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  page === i ? "w-6 bg-[#c8974a]" : "w-2 bg-[#151a2d]/20 hover:bg-[#151a2d]/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
