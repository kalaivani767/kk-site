"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I book a unit in one of your projects?",
    answer:
      "Reach out through the Enquire Now button or call our sales team. We'll schedule a site visit, walk you through pricing and floor plans, and guide you through the booking amount and agreement once you're ready.",
  },
  {
    question: "Are your projects RERA registered?",
    answer:
      "Yes. Every ongoing and upcoming project is registered under RERA (Real Estate Regulatory Authority). Registration numbers are shared in the project brochure and agreement documents.",
  },
  {
    question: "Do you help with home loans?",
    answer:
      "We work with several leading banks and NBFCs and can connect you directly with their representatives to help with pre-approval, documentation, and disbursement timelines.",
  },
  {
    question: "What is the typical possession timeline?",
    answer:
      "It varies by project stage — ongoing projects typically list an expected possession date on their detail page, and our team can confirm the latest construction progress on request.",
  },
  {
    question: "Can I customize the interiors before handover?",
    answer:
      "For select ongoing projects, yes. Our interior design team can work with you on layout, finishes, and fittings within the construction timeline — ask your relationship manager about which projects support this.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Cancellation terms are outlined in your booking agreement and vary slightly by project. Generally, a processing fee applies and the remainder of your booking amount is refunded within a defined window.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            <span className="h-px w-8 bg-[#c8974a]" />
            FAQ
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-[16px] font-medium text-[#151a2d]">
                    {faq.question}
                  </span>
                  <IconChevronDown
                    className={`h-5 w-5 flex-none text-[#c8974a] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-[14px] leading-relaxed text-[#151a2d]/70">
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
