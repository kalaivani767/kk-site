import Image from "next/image";
import Link from "next/link";

type Feature = {
  icon: string;
  label: [string, string];
};

const features: Feature[] = [
  { icon: "/icons/home.svg", label: ["Property", "Buying & Selling"] },
  { icon: "/icons/crane.svg", label: ["Construction", "Services"] },
  { icon: "/icons/interior.svg", label: ["Interior", "Designing"] },
  { icon: "/icons/key.svg", label: ["End-to-End", "Solutions"] },
];

export default function Hero() {
  return (
<section className="relative h-[600px] overflow-hidden bg-[#faf8f3] sm:h-[650px] lg:h-[720]">
      <Image
            src="/hero.png"
            alt="Modern luxury home exterior at dusk"
            fill
            priority
            className="object-cover"


          />

           <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] via-[#faf8f3]/10 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
        {/* Text column */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-16">
          

          <h1 className="font-serif text-5xl leading-[1.1] text-[#151a2d] sm:text-6xl">
            Your Dream Property,
            <br />
            <span className="text-[#c8974a]">Our Commitment.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#151a2d]/70">
            From finding the perfect property to complete construction and
            interiors – we provide end-to-end real estate solutions tailored
            to your needs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#151a2d] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#c8974a] transition hover:bg-[#1f2540]"
            >
              EXPLORE PROJECTS <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#c8974a] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#c8974a]/10"
            >
              CONTACT US <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
            {features.map((f) => (
              <div key={f.label.join(" ")} className="flex flex-col items-start gap-1 ">
                <Image src={f.icon} alt="" width={32} height={32} className="h-12 w-12 scale-[1.8]" />
                <p className="text-[12px] font-medium leading-snug tracking-[0.02em] text-[#151a2d]">
                  {f.label[0]}
                  <br />
                  {f.label[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
