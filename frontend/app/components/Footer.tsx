export default function Footer() {
  return (
    <footer className="bg-gf-slate-900 border-t border-white/10 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gf-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>
            <span className="text-gf-green-500 font-semibold">Green</span>
            <span className="text-white font-semibold">Flux</span>
            {" "}— Part of DKV Mobility Group
          </span>
        </div>

        <p className="text-zinc-500">
          &copy; {new Date().getFullYear()} GreenFlux B.V. · Amsterdam
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-zinc-200 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-200 transition-colors">Terms</a>
          <a href="https://developer.greenflux.com" className="hover:text-zinc-200 transition-colors">Developer Portal</a>
        </div>
      </div>
    </footer>
  );
}
