import type { Domain } from "@/lib/domains";
import ApiEndpoint from "./ApiEndpoint";

function PartnerBadge({ text }: { text: string }) {
  const initial = text.trim().charAt(0).toUpperCase();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 pl-1 pr-2.5 py-0.5 text-xs text-zinc-600 dark:text-zinc-300 max-w-full">
      <span className="shrink-0 w-4 h-4 rounded-full bg-gf-green-100 dark:bg-gf-green-900/40 text-gf-green-700 dark:text-gf-green-400 text-[9px] font-bold flex items-center justify-center">
        {initial}
      </span>
      <span className="truncate">{text}</span>
    </span>
  );
}

export default function DomainCard({
  domain,
  featured = false,
}: {
  domain: Domain;
  featured?: boolean;
}) {
  const useCaseCount = featured ? 3 : 2;
  const endpointCount = featured ? 4 : 3;

  return (
    <div
      className="group relative h-full flex flex-col p-[1px] rounded-2xl bg-zinc-200 dark:bg-white/10 hover:bg-gradient-to-br hover:from-gf-green-400 hover:via-gf-green-500 hover:to-gf-slate-800 transition-colors duration-300"
    >
      <div className="relative flex flex-col gap-4 h-full bg-white dark:bg-gf-slate-900 rounded-[15px] p-6 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-gf-green-900/10 transition-all duration-300">
        {featured && (
          <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-wider text-gf-green-700 dark:text-gf-green-400 bg-gf-green-50 dark:bg-gf-green-900/30 border border-gf-green-200 dark:border-gf-green-700/40 rounded-full px-2.5 py-1">
            Featured
          </span>
        )}

        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-gf-green-500 to-gf-slate-900 shadow-sm shadow-gf-green-900/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={domain.icon} />
            </svg>
          </div>
          <div className="flex flex-col gap-1 pt-0.5 pr-16">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gf-green-600 dark:text-gf-green-400">
              {domain.category}
            </span>
            <h3 className="font-semibold text-gf-slate-900 dark:text-white text-base leading-snug">
              {domain.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {domain.shortDescription}
        </p>

        <ul className="flex flex-col gap-2">
          {domain.useCases.slice(0, useCaseCount).map((uc, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              <svg
                className="w-4 h-4 text-gf-green-500 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{uc}</span>
            </li>
          ))}
        </ul>

        {domain.examplePartners && domain.examplePartners.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {domain.examplePartners.slice(0, featured ? 3 : 2).map((p, i) => (
              <PartnerBadge key={i} text={p} />
            ))}
          </div>
        )}

        {/* API endpoint chips — terminal-style */}
        <div className="flex flex-col gap-1 pt-3 mt-auto border-t border-zinc-100 dark:border-white/10">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
            Key APIs
          </span>
          <div className="rounded-lg bg-gf-slate-900 dark:bg-black/40 dark:ring-1 dark:ring-white/10 px-3 py-2 flex flex-col gap-0.5">
            {domain.apiEndpoints.slice(0, endpointCount).map((ep, i) => (
              <ApiEndpoint key={i} method={ep.method} path={ep.path} size="sm" dark />
            ))}
          </div>
        </div>

        <a
          href={`/partners/${domain.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gf-green-600 dark:text-gf-green-400 hover:text-gf-green-700 dark:hover:text-gf-green-300 hover:gap-2 transition-all"
        >
          View integration guide
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
