import Image from "next/image";
import { IconArrowRight } from "./Icons";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#151a2d] lg:min-h-[520px]">
      {/* Text */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-12 lg:py-24">
        <div className="max-w-md">
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            ABOUT US
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>

          <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-6xl">
            Building Trust.
            <br />
            Creating <span className="text-[#c8974a]">Value.</span>
          </h1>

          <span className="mt-6 block h-px w-16 bg-[#c8974a]" />

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
            Kalaivani Real Estate is a trusted name in real estate
            development, known for delivering spaces that inspire and stand
            the test of time.
          </p>

          <a
            href="#story"
            className="mt-8 inline-flex items-center gap-2 bg-[#c8974a] px-7 py-4 text-[13px] font-semibold tracking-[0.1em] text-white transition hover:bg-[#e8bb74]"
          >
            DISCOVER OUR STORY
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image, diagonally clipped on large screens */}
      <div className="relative h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[64%] lg:[clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]">
        <Image
          src="/abouthero.png"
          alt="Modern Kalaivani home with pool at dusk"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
