const reasons = [
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Reach at European Scale",
    description:
      "With 1M+ charge points across 38 countries, a single integration reaches CPOs and EMSPs in every major European market — 80% of European states, including near-complete coverage in NL, DE, BE, FR, IE, and AT.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "The DKV Mobility Network",
    description:
      "GreenFlux is part of DKV Mobility — one of Europe's largest payment solution providers for commercial transport, serving 200,000+ customers. Partners gain access to fleet relationships and logistics networks no pure-play EV company can match.",
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "API-First Architecture",
    description:
      "Every GreenFlux capability is accessible via documented API. The developer portal provides complete API documentation, authentication guides, and sandbox access — enabling production-grade integrations without custom work from GreenFlux.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Open Standards, No Lock-In",
    description:
      "GreenFlux's commitment to OCPP, OCPI, and OICP means partners integrate with industry standards, not proprietary protocols. Hardware manufacturers, roaming hubs, and energy platforms all connect using the same standards governing the wider EV market.",
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "Flexible Deployment Models",
    description:
      "Work with GreenFlux at the level that fits your product: white-label to embed capabilities under your brand, API-first for a custom user experience, or co-branded add-on to appear as a featured integration within the GreenFlux EV Portal.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Proven at Scale",
    description:
      "GreenFlux has delivered for Europe's most demanding operators — Eneco (3,500 stations), Equans (2,500+ in Amsterdam), Q-Park (1,700 charge points), and TotalEnergies. Partners inherit the confidence of a platform stress-tested in real-world operations.",
  },
];

export default function WhyPartnerSection() {
  return (
    <section id="why-partner" className="py-20 px-6 bg-gf-green-50 dark:bg-gf-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <p className="text-gf-green-600 dark:text-gf-green-400 font-semibold text-sm uppercase tracking-wider">
            Why GreenFlux
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gf-slate-900 dark:text-white">
            Six Reasons to Partner
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            GreenFlux is engineered to be the platform that orchestrates Europe&apos;s EV charging
            ecosystem — and to be the best possible foundation for your integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white dark:bg-white/5 rounded-2xl border border-gf-green-100 dark:border-white/10 p-6 flex flex-col gap-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 bg-gf-green-100 dark:bg-gf-green-900/30 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gf-green-700 dark:text-gf-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gf-slate-900 dark:text-white">{reason.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
