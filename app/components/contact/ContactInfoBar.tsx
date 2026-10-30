import { SITE } from "../../lib/site";
import { IconClock, IconMail, IconPhone, IconPin } from "./Icons";

const items = [
  {
    icon: IconPin,
    title: "Our Office",
    lines: ["627, Chennai Salai, Thonnaiyan kottai,", "Krishnagiri Town, Krishnagiri Taluk & District,", "Tamil Nadu – 635001."],
  },
  {
    icon: IconPhone,
    title: "Call Us",
    lines: [`Office: ${SITE.officePhone.display}`, `Mobile: ${SITE.mobilePhone.display}`],
  },
  {
    icon: IconMail,
    title: "Email Us",
    lines: [SITE.email],
  },
  {
    icon: IconClock,
    title: "Working Hours",
    lines: ["Mon – Sun: 10:00 AM – 6:00 PM", "Tuesday: Holiday"],
  },
];

export default function ContactInfoBar() {
  return (
    <section className="relative z-10 bg-[#faf8f3] px-6 lg:px-12">
      <div className="mx-auto -mt-10 max-w-7xl border border-black/5 bg-white px-8 py-10 shadow-sm sm:-mt-14 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr_1.1fr] lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${
                i !== 0 ? "lg:border-l lg:border-black/5 lg:pl-8" : ""
              }`}
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center border border-[#c8974a]/30 text-[#c8974a]">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[#151a2d]">
                  {item.title}
                </p>
                <div className="mt-1.5 space-y-0.5">
                  {item.lines.map((line) => (
                    <p key={line} className="break-words text-[13px] leading-relaxed text-[#151a2d]/60">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
