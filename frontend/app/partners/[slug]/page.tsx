import { domains } from "@/lib/domains";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ApiEndpoint from "@/app/components/ApiEndpoint";
import CodeBlock from "@/app/components/CodeBlock";

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const domain = domains.find((d) => d.slug === params.slug);
  if (!domain) return {};
  return {
    title: `${domain.name} — GreenFlux Partnership Ecosystem`,
    description: domain.shortDescription,
  };
}

export default function PartnerDetailPage({ params }: { params: { slug: string } }) {
  const domain = domains.find((d) => d.slug === params.slug);
  if (!domain) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gf-slate-950 transition-colors">
        {/* Breadcrumb */}
        <div className="bg-gf-slate-900 px-6 py-4">
          <div className="max-w-5xl mx-auto">
            <a
              href="/#domains"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-gf-green-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Integration Domains
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-br from-gf-slate-900 to-gf-slate-800 text-white px-6 py-16">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            <div className="w-14 h-14 bg-gf-green-900/60 border border-gf-green-700/40 rounded-2xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gf-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={domain.icon} />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{domain.name}</h1>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
              {domain.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content — 2/3 */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Overview */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gf-slate-900 dark:text-white">The Opportunity</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{domain.fullDescription}</p>
              </div>

              {/* Use cases */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gf-slate-900 dark:text-white">Use Cases</h2>
                <ul className="flex flex-col gap-3">
                  {domain.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                      <svg
                        className="w-5 h-5 text-gf-green-500 mt-0.5 shrink-0"
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
              </div>

              {/* API Endpoints */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <h2 className="text-xl font-bold text-gf-slate-900 dark:text-white">Key API Endpoints</h2>
                  <a
                    href="https://developer.greenflux.com/api-reference"
                    className="text-sm text-gf-green-600 dark:text-gf-green-400 hover:text-gf-green-700 dark:hover:text-gf-green-300 font-medium transition-colors"
                  >
                    Full API reference →
                  </a>
                </div>
                <div className="rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden divide-y divide-zinc-100 dark:divide-white/10">
                  <div className="grid grid-cols-[80px_1fr] px-4 py-2 bg-zinc-50 dark:bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    <span>Method</span>
                    <span>Endpoint</span>
                  </div>
                  {domain.apiEndpoints.map((ep, i) => (
                    <div key={i} className="px-4 py-3">
                      <ApiEndpoint method={ep.method} path={ep.path} description={ep.description} size="md" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Code example */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gf-slate-900 dark:text-white">Example Integration</h2>
                <CodeBlock
                  title={domain.codeExample.title}
                  code={domain.codeExample.code}
                />
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  Authentication, base URLs, and sandbox access at{" "}
                  <a
                    href="https://developer.greenflux.com"
                    className="text-gf-green-600 dark:text-gf-green-400 hover:underline"
                  >
                    developer.greenflux.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="flex flex-col gap-6">
              {domain.examplePartners && (
                <div className="bg-gf-green-50 dark:bg-gf-green-900/10 rounded-2xl border border-gf-green-100 dark:border-gf-green-800/30 p-6 flex flex-col gap-4">
                  <h3 className="font-semibold text-gf-slate-900 dark:text-white text-sm uppercase tracking-wide">
                    Ideal Partner Profile
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {domain.examplePartners.map((partner, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="text-gf-green-500 font-bold mt-0.5">·</span>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gf-slate-900 rounded-2xl p-6 flex flex-col gap-4 text-white">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-zinc-400">
                  Get Started
                </h3>
                <p className="text-sm text-zinc-300">
                  Full API documentation and sandbox access available on the GreenFlux Developer Portal.
                </p>
                <a
                  href="https://developer.greenflux.com"
                  className="inline-flex items-center justify-center gap-2 bg-gf-green-600 hover:bg-gf-green-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
                >
                  Developer Portal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
                >
                  Contact Partnerships
                </a>
              </div>

              {/* API count badge */}
              <div className="border border-zinc-200 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-gf-green-50 dark:bg-gf-green-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gf-green-600 dark:text-gf-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gf-slate-900 dark:text-white text-lg">{domain.apiEndpoints.length}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">documented endpoints for this domain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other domains */}
        <div className="bg-gf-green-50 dark:bg-gf-slate-900 px-6 py-12 border-t border-gf-green-100 dark:border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            <h3 className="font-bold text-gf-slate-900 dark:text-white">Explore Other Integration Domains</h3>
            <div className="flex flex-wrap gap-3">
              {domains
                .filter((d) => d.slug !== domain.slug)
                .map((d) => (
                  <a
                    key={d.slug}
                    href={`/partners/${d.slug}`}
                    className="text-sm font-medium bg-white dark:bg-white/5 border border-gf-green-100 dark:border-white/10 hover:border-gf-green-300 dark:hover:border-gf-green-700 hover:shadow-sm text-gf-slate-900 dark:text-zinc-200 px-4 py-2 rounded-full transition-all"
                  >
                    {d.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
