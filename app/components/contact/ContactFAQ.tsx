"use client";

import { useState } from "react";
import { IconArrowRight, IconPlus } from "./Icons";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What types of properties do you offer?",
    answer:
      "We handle residential villas and apartments as well as commercial spaces — from ready-to-move units to fully custom-built homes.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We support bank loan disbursement, staged construction-linked payments, and direct transfers. Your relationship manager will walk you through the schedule for your specific project.",
  },
  {
    question: "How can I schedule a site visit?",
    answer:
      "Fill out the form on this page or call us directly, and our team will arrange a convenient time to show you the site or a ready sample unit.",
  },
  {
    question: "Can I sell my property through kalaivani?",
    answer:
      "Yes. We offer end-to-end resale support including valuation, listing, buyer verification, and paperwork through to registration.",
  },
  {
    question: "Do you assist with home loan approvals?",
    answer:
      "We work with several leading banks and NBFCs and can connect you with their representatives to help with pre-approval and documentation.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary by project scale, typically 18–30 months from foundation to handover. Exact dates are shared during your site consultation.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f3ece0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
              FAQ&apos;S
              <span className="h-px w-8 bg-[#c8974a]" />
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Link
            href="/projects#faq"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-[#151a2d] transition hover:text-[#c8974a]"
          >
            VIEW ALL FAQ&apos;S
            <IconArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="bg-white px-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[14px] font-medium text-[#151a2d]">
                    {faq.question}
                  </span>
                  <IconPlus
                    className={`h-4 w-4 flex-none text-[#c8974a] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] leading-relaxed text-[#151a2d]/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
