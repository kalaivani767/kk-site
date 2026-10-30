import Image from "next/image";
import { IconCheck } from "./Icons";
import Link from "next/link";

const points = [
  "Transparent dealings, no hidden costs",
  "End-to-end support from search to handover",
  "Premium quality construction materials",
  "On-time project delivery, always",
];

export default function AboutUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Image */}
        <div className="relative">
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Kalaivani Real Estate completed development"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-8 -right-4 flex items-center gap-4 bg-[#151a2d] px-7 py-6 shadow-xl sm:-right-8">
            <p className="font-serif text-4xl text-[#c8974a]">15+</p>
            <p className="max-w-[110px] text-[12px] font-medium leading-snug tracking-[0.02em] text-white/80">
              Years of Building Trust
            </p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            WHO WE ARE
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Two Decades of
            <br />
            Building Dreams.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#151a2d]/70">
            Kalaivani Real Estate Pvt Ltd has been helping families and
            investors find, build, and design properties they&apos;re proud
            to call home. From the first site visit to the final handover,
            our team manages every detail so you don&apos;t have to.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#c8974a]/10 text-[#c8974a]">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-[14px] leading-snug text-[#151a2d]/80">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 bg-[#151a2d] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#c8974a] transition hover:bg-[#1f2540]"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
}
