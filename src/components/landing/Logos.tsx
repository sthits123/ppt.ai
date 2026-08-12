const brands = [
  "Nimbus Labs",
  "Vertex",
  "Halycon",
  "Northwind",
  "Quantum",
  "Paperline",
  "Arcadia",
  "Fornax",
];

export function Logos() {
  return (
    <section className="relative border-y border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm text-zinc-500">
          Trusted by modern teams at
        </p>
        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-600"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
