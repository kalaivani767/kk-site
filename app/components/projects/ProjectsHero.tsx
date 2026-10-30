import Image from "next/image";
import { IconArrowRight } from "../Icons";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0e18]">
      {/* Background image + gradient overlays */}
      <div className="absolute inset-0">
        <Image
          src="/phero2.png"
          alt="Luxury development at night"
          fill
          priority
          className="object-cover "
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[760px] max-w-7xl items-center px-6 py-28 lg:h-[520px] lg:px-12">
        <div className="max-w-xl border-l border-[#c8974a]/50 pl-8 sm:pl-10">
          <p className="text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            OUR PROJECTS
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-[1.1] text-white sm:text-6xl">
            Curated Projects.
            <br />
            Timeless Value.
          </h1>

          <span className="mt-7 block h-px w-16 bg-[#c8974a]" />

          <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-white/70">
            From luxury homes to commercial spaces, explore developments that
            stand the test of time.
          </p>

          <a
            href="#projects-list"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-[#c8974a] pb-2 text-[13px] font-semibold tracking-[0.1em] text-white transition hover:text-[#c8974a]"
          >
            EXPLORE PROJECTS
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
