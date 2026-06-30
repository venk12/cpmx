const models = [
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    badge: "REST API",
    badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    title: "API Integration",
    description:
      "Full access to GreenFlux APIs via the developer portal. Build your own UI, workflows, and data pipelines on top of GreenFlux infrastructure.",
    bestFor: "Tech-native partners with development capacity",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    badge: "Webhooks",
    badgeColor: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
    title: "Webhook Streaming",
    description:
      "Subscribe to real-time event streams from GreenFlux — session start/stop, station faults, CDRs — to drive workflows in external systems without polling.",
    bestFor: "Monitoring, alerting, and support platforms",
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    badge: "White-Label",
    badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    title: "White-Label Portal",
    description:
      "Rebrand the GreenFlux EV Portal and Charge Assist app under your own brand with custom configuration — a complete product without building one.",
    bestFor: "Partners who want a full product",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    badge: "Add-On",
    badgeColor: "bg-gf-green-50 text-gf-green-700 dark:bg-gf-green-500/10 dark:text-gf-green-400",
    title: "Co-branded Add-On",
    description:
      "Appear as a featured integration within the GreenFlux EV Portal, instantly accessible to all operator customers without a direct sales cycle.",
    bestFor: "ISVs and SaaS partners seeking distribution",
  },
];

export default function IntegrationModelsSection() {
  return (
    <section id="integration" className="py-20 px-6 bg-white dark:bg-gf-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <p className="text-gf-green-600 dark:text-gf-green-400 font-semibold text-sm uppercase tracking-wider">
            How to Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gf-slate-900 dark:text-white">
            Technical Integration Models
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Work with GreenFlux at the level that fits your product. All integrations are
            documented at{" "}
            <a
              href="https://developer.greenflux.com"
              className="text-gf-green-600 dark:text-gf-green-400 hover:underline"
            >
              developer.greenflux.com
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-2xl border border-zinc-200 dark:border-white/10 p-6 flex flex-col gap-4 hover:border-gf-green-200 dark:hover:border-gf-green-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-50 dark:bg-white/5 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={model.icon} />
                  </svg>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${model.badgeColor}`}>
                  {model.badge}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-gf-slate-900 dark:text-white text-lg">{model.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{model.description}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 border-t border-zinc-100 dark:border-white/10 pt-3 mt-auto">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Best for: {model.bestFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
