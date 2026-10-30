import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconMail, IconPhone, IconPin } from "./Icons";
import { MAPS_DIRECTIONS_HREF, MAPS_EMBED_SRC, SITE } from "../lib/site";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    alt: "Kalaivani Real Estate development",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    alt: "Open plots and layouts in Krishnagiri",
  },
];

export default function Location() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            OUR LOCATION
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Visit Our Office
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo) => (
                <div key={photo.src} className="relative h-48 overflow-hidden sm:h-60">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <ul className="space-y-4 text-[15px] text-[#151a2d]/75">
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-5 w-5 flex-none text-[#c8974a]" />
                <span>
                  {SITE.addressLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 flex-none text-[#c8974a]" />
                <span>
                  Office:{" "}
                  <a href={`tel:${SITE.officePhone.tel}`} className="hover:text-[#c8974a]">
                    {SITE.officePhone.display}
                  </a>
                  <br />
                  Mobile:{" "}
                  <a href={`tel:${SITE.mobilePhone.tel}`} className="hover:text-[#c8974a]">
                    {SITE.mobilePhone.display}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-5 w-5 flex-none text-[#c8974a]" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-[#c8974a]">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={MAPS_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#151a2d] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#c8974a] transition hover:bg-[#1f2540]"
              >
                GET DIRECTIONS <IconArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#c8974a] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#c8974a]/10"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden border border-black/5">
            <iframe
              title="Kalaivani Real Estate office location"
              src={MAPS_EMBED_SRC}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
