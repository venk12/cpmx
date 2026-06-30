"use client";

import { useMemo, useState } from "react";
import { domainCategories, domains, type DomainCategory } from "@/lib/domains";
import DomainCard from "./DomainCard";
import RevealOnScroll from "./RevealOnScroll";

export default function DomainsGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DomainCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domains.filter((domain) => {
      const matchesCategory = category === "All" || domain.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [domain.name, domain.shortDescription, ...domain.useCases]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  return (
    <section id="domains" className="py-20 px-6 bg-gf-slate-50 dark:bg-gf-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <p className="text-gf-green-600 dark:text-gf-green-400 font-semibold text-sm uppercase tracking-wider">
            Integration Domains
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gf-slate-900 dark:text-white">
            Partnership Ecosystem
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Seven integration domains covering the full landscape of EV infrastructure — from energy
            optimisation to payment processing to field operations.
          </p>
        </div>

        {/* Search + category filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search domains, use cases…"
              aria-label="Search integration domains"
              className="w-full rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 pl-10 pr-4 py-2.5 text-sm text-gf-slate-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gf-green-500/40 focus:border-gf-green-500 transition-shadow"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...domainCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
                  category === c
                    ? "bg-gf-green-600 border-gf-green-600 text-white"
                    : "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:border-gf-green-300 hover:text-gf-green-700 dark:hover:border-gf-green-700 dark:hover:text-gf-green-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-zinc-500 dark:text-zinc-400">
            No domains match &ldquo;{query}&rdquo;. Try a different search or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filtered.map((domain, i) => (
              <RevealOnScroll
                key={domain.slug}
                delayMs={(i % 6) * 60}
                className={`h-full ${domain.featured ? "lg:col-span-2" : ""}`}
              >
                <DomainCard domain={domain} featured={domain.featured} />
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
