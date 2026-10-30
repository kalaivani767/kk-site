import Image from "next/image";
import Link from "next/link";
import { SITE } from "../lib/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[420px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=1800&q=80"
          alt="Modern home exterior at dusk"
          fill
          className="object-cover"
        />
<div className="absolute inset-0 bg-[#151a2d]/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 py-24 lg:px-12">
          <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            LET&apos;S GET STARTED
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
            Ready to Find Your Dream Property?
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Talk to our team today and take the first step toward buying,
            building, or selling with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 bg-[#c8974a] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#d9a95c]"
            >
              ENQUIRE NOW
            </Link>
            <a
              href={`tel:${SITE.officePhone.tel}`}
              className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-white transition hover:bg-white/10"
            >
              CALL US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
