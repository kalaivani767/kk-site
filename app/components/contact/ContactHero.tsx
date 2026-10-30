import Image from "next/image";
import { IconArrowRight } from "./Icons";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3]">
      <Image
                  src="/contacthero.png"
                  alt="Modern luxury home exterior at dusk"
                  fill
                  priority
                  className="object-cover"
      
      
                />
      
                 {/* <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] via-[#faf8f3]/10 to-transparent" /> */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Text column */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            CONTACT US
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>

          <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-6xl">
            Let&apos;s Build Something
            <br />
            <span className="text-[#c8974a]">Extraordinary.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            We&apos;d love to hear from you. Whether you have a question
            about our projects, services, or anything else, our team is
            ready to answer all your queries.
          </p>

          <a
            href="#form"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-[#c8974a] pb-1.5 text-[13px] font-semibold tracking-[0.1em] text-white transition hover:text-[#c8974a]"
          >
            GET IN TOUCH
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Image column */}
        
      </div>
    </section>
  );
}
