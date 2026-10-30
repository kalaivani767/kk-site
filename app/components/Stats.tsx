const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Properties Delivered" },
  { value: "1200+", label: "Happy Clients" },
  { value: "20+", label: "Ongoing Projects" },
];

export default function Stats() {
  return (
    <section className="bg-[#151a2d]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-4 sm:gap-y-0 lg:px-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center sm:border-white/10 ${
              i !== 0 ? "sm:border-l" : ""
            }`}
          >
            <p className="font-serif text-4xl text-[#c8974a] sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[12px] font-medium tracking-[0.08em] text-white/70">
              {stat.label.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
