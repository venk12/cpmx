import { apiFetch } from "@/lib/api";

export default async function Home() {
  const health = await apiFetch<{ status: string }>("/health", {
    next: { revalidate: 30 },
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          Hello this is my simple app
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          Backend status: {health.status}
        </div>
      </main>
    </div>
  );
}
