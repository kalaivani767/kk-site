"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 lg:px-10 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Kalaivani Real Estate"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="text-[15px] font-bold tracking-[0.15em] text-[#151B26]">
              KALAIVANI
            </p>
            <p className="text-[9px] font-semibold tracking-[0.22em] text-[#C8973E]">
              REAL ESTATE
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  group relative text-[13px] tracking-[0.12em]
                  font-medium 
                  transition-colors duration-300
                  ${
                    active
                      ? "text-[#C8973E]"
                      : "text-[#151B26] hover:text-[#C8973E]"
                  }
                `}
              >
                {link.label.toUpperCase()}

                {/* Animated underline */}
                <span
                  className={`
                    absolute left-0 -bottom-0.5 h-[2px]
                    bg-[#C8973E]
                    transition-all duration-300 ease-out
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
        {/* CTA */}
        <Link
          href="/contact#form"
          className="
            hidden md:inline-flex items-center gap-3
            bg-[#151B26] text-[#C8973E]
            text-[13px] font-medium tracking-[0.1em]
            px-6 py-3
            rounded-md
            transition-all duration-300
            hover:bg-[#0D1119]
            hover:-translate-y-[1px]
            shrink-0
          "
        >
          ENQUIRE NOW

          <span
            className="
              inline-block
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-[#151B26]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? (
              <path
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden overflow-hidden
          border-t border-black/5
          bg-[#F7F5F0]
          transition-all duration-300 ease-out
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  relative w-fit
                  text-[13px]
                  tracking-[0.12em]
                  font-medium
                  transition-colors duration-300
                  ${
                    active
                      ? "text-[#C8973E]"
                      : "text-[#151B26]"
                  }
                `}
              >
                {link.label.toUpperCase()}

                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#C8973E]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact#form"
            onClick={() => setOpen(false)}
            className="
              inline-flex items-center justify-center gap-3
              bg-[#151B26] text-[#C8973E]
              text-[13px] font-medium tracking-[0.1em]
              px-6 py-3 rounded-md mt-2
              transition-all duration-300
              hover:bg-[#0D1119]
            "
          >
            ENQUIRE NOW
            <span>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}