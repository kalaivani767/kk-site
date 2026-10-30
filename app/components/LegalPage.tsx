import Navbar from "./Navbar";
import Footer from "./Footer";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />
      <section className="bg-[#faf8f3] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            LEGAL
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-[13px] text-[#151a2d]/50">Last updated: {updated}</p>
          <p className="mt-8 text-[15px] leading-relaxed text-[#151a2d]/70">{intro}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl text-[#151a2d]">
                  {i + 1}. {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((p) => (
                    <p key={p} className="text-[15px] leading-relaxed text-[#151a2d]/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
