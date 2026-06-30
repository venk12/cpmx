const previewEndpoints = [
  { method: "GET",  path: "/smartcharging/capacitygroups",      label: "Smart Charging" },
  { method: "POST", path: "/crm/customers",                     label: "CRM" },
  { method: "GET",  path: "/chargestationnotifications",        label: "Monitoring" },
  { method: "PUT",  path: "/payment/{token}/external",          label: "Payments" },
  { method: "POST", path: "/remotecommands/reset",              label: "Remote Ops" },
];

const methodColors: Record<string, string> = {
  GET:  "text-blue-400",
  POST: "text-gf-green-400",
  PUT:  "text-amber-400",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-grid bg-gradient-to-br from-gf-slate-900 via-gf-slate-800 to-gf-green-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gf-green-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-gf-green-400 animate-pulse" />
            1,000,000+ Charge Points Under Management
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Europe&apos;s Leading EV Charging{" "}
              <span className="text-gf-green-400">Partnership Ecosystem</span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-lg">
              Connect your platform to the infrastructure powering EV charging across 38 countries.
              API-first, open standards, backed by DKV Mobility Group.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#domains"
              className="bg-gf-green-600 hover:bg-gf-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Explore Integrations
            </a>
            <a
              href="https://developer.greenflux.com"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Developer Portal →
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 border-t border-white/10">
            {[
              { value: "1M+",   label: "Charge Points" },
              { value: "38",    label: "Countries" },
              { value: "14+",   label: "Years" },
              { value: "200K+", label: "DKV Customers" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-gf-green-400">{stat.value}</span>
                <span className="text-xs text-zinc-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating API preview panel */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl overflow-hidden bg-gf-slate-900 border border-white/10 shadow-2xl shadow-black/40">
            {/* Panel header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-black/30 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-gf-green-500/70" />
              </div>
              <span className="font-mono text-xs text-zinc-400">GreenFlux API — developer.greenflux.com</span>
            </div>

            {/* Endpoint list */}
            <div className="p-4 flex flex-col gap-0">
              <p className="font-mono text-[10px] text-zinc-500 mb-3 uppercase tracking-widest">
                Available endpoints
              </p>
              {previewEndpoints.map((ep, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
                >
                  <span className={`font-mono font-bold text-xs w-10 shrink-0 ${methodColors[ep.method] ?? "text-zinc-400"}`}>
                    {ep.method}
                  </span>
                  <code className="font-mono text-xs text-zinc-200 flex-1 truncate">{ep.path}</code>
                  <span className="text-[10px] text-zinc-500 shrink-0">{ep.label}</span>
                </div>
              ))}
              <div className="pt-3 mt-1">
                <a
                  href="https://developer.greenflux.com/api-reference"
                  className="font-mono text-xs text-gf-green-400 hover:text-gf-green-300 transition-colors"
                >
                  View full API reference →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
