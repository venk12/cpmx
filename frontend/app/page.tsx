import { apiFetch } from "@/lib/api";

export const dynamic = "force-dynamic";

type Info = {
  name: string;
  version: string;
  status: string;
  environment: string;
};

export default async function Home() {
  let info: Info | null = null;
  try {
    info = await apiFetch<Info>("/info", { cache: "no-store" });
  } catch {
    // backend unreachable — render with fallback
  }

  const available = info?.status === "available";

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <div className="flex flex-col items-center gap-8 text-center max-w-md">
        <h1 className="text-5xl font-bold tracking-tight">
          {info?.name ?? "CPMX"}
        </h1>

        <p className="text-base text-zinc-500 dark:text-zinc-400">
          Full-stack app — Next.js on Vercel, FastAPI on Railway.
        </p>

        <div className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm">
          <span
            className={`h-2 w-2 rounded-full ${available ? "bg-green-500" : "bg-zinc-400"}`}
          />
          <span>Backend {available ? "available" : "unavailable"}</span>
        </div>

        {info && (
          <div className="flex gap-3 font-mono text-xs text-zinc-400">
            <span>v{info.version}</span>
            <span>·</span>
            <span>{info.environment}</span>
          </div>
        )}
      </div>
    </div>
  );
}
