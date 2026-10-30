import Image from "next/image";
import Link from "next/link";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
} from "./Icons";
import { SITE } from "../lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { label: "Facebook", Icon: IconFacebook, href: SITE.social.facebook },
  { label: "Instagram", Icon: IconInstagram, href: SITE.social.instagram },
  { label: "LinkedIn", Icon: IconLinkedin, href: SITE.social.linkedin },
].filter((s) => s.href);

const services = [
  "Property Buying & Selling",
  "Construction Services",
  "Interior Designing",
  "End-to-End Solutions",
];

export default function Footer() {
  return (
    <footer className="bg-[#10131f]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kalaivani Real Estate"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <div className="leading-tight">
                <p className="text-[14px] font-semibold tracking-[0.16em] text-white">
                  KALAIVANI
                </p>
                <p className="text-[9px] tracking-[0.2em] text-white/50">
                  REAL ESTATE
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
              Building trust and creating value through end-to-end real
              estate solutions for over 15 years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#c8974a] hover:text-[#c8974a]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-white">
              QUICK LINKS
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/50 transition hover:text-[#c8974a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-white">
              SERVICES
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-[14px] text-white/50">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-white">
              CONTACT US
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-[14px] text-white/50">
                <IconPin className="mt-0.5 h-4 w-4 flex-none text-[#c8974a]" />
                <span>
                  {SITE.addressLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/50">
                <IconPhone className="h-4 w-4 flex-none text-[#c8974a]" />
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
              <li className="flex items-center gap-3 text-[14px] text-white/50">
                <IconMail className="h-4 w-4 flex-none text-[#c8974a]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all hover:text-[#c8974a]"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Kalaivani Real Estate. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <Link href="/privacy" className="hover:text-[#c8974a]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#c8974a]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
