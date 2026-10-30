import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[280px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1800&q=80"
          alt="Warm modern interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#151a2d]/90" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
              Let&apos;s Build Something
              <br />
              Extraordinary <span className="text-[#c8974a]">Together.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Whether it&apos;s your dream home or a smart investment,
              we&apos;re here to make it happen.
            </p>
          </div>

          <Link
            href="/contact#form"
            className="inline-flex flex-none items-center gap-2 bg-[#c8974a] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#d9a95c]"
          >
            TALK TO OUR EXPERT
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
