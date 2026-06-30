import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gf-slate-900 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg className="w-6 h-6 text-gf-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-gf-green-500">Green</span>Flux
          </span>
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-300 flex-wrap">
          <a href="#domains" className="hover:text-white transition-colors">Integrations</a>
          <a href="#why-partner" className="hover:text-white transition-colors">Why Partner</a>
          <a href="#integration" className="hover:text-white transition-colors">Technical Models</a>
          <a
            href="#contact"
            className="bg-gf-green-600 hover:bg-gf-green-700 text-white px-4 py-1.5 rounded-full transition-colors"
          >
            Get Started
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
