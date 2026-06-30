export default function CTASection() {
  return (
    <section id="contact" className="bg-gf-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Join the GreenFlux Ecosystem?
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            GreenFlux is actively building its partner ecosystem and welcomes integration discussions
            across all seven domains. Start with the Developer Portal for technical access, or reach
            out to the partnerships team for commercial discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <a
            href="https://developer.greenflux.com"
            className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 text-left transition-colors group"
          >
            <div className="w-10 h-10 bg-gf-green-900/50 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-gf-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Developer Portal</p>
              <p className="text-sm text-zinc-400 mt-1">API docs, sandbox access, and authentication guides.</p>
            </div>
            <span className="text-gf-green-400 text-sm font-medium group-hover:underline">developer.greenflux.com →</span>
          </a>

          <a
            href="mailto:partnerships@greenflux.eu"
            className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 text-left transition-colors group"
          >
            <div className="w-10 h-10 bg-gf-green-900/50 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-gf-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Contact Partnerships</p>
              <p className="text-sm text-zinc-400 mt-1">Commercial arrangements, co-marketing, and distribution.</p>
            </div>
            <span className="text-gf-green-400 text-sm font-medium group-hover:underline">partnerships@greenflux.eu →</span>
          </a>

          <div className="flex flex-col items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
            <div className="w-10 h-10 bg-gf-green-900/50 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-gf-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">System Integrators</p>
              <p className="text-sm text-zinc-400 mt-1">Regional SI partners including PROTASIS (GR) and ICT Group (NL) provide end-to-end deployment services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
