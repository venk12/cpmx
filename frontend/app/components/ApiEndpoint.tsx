type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const methodStyles: Record<Method, string> = {
  GET:    "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
  POST:   "bg-gf-green-50 text-gf-green-700 border border-gf-green-200 dark:bg-gf-green-500/10 dark:text-gf-green-400 dark:border-gf-green-500/30",
  PUT:    "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  PATCH:  "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30",
  DELETE: "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30",
};

const methodStylesDark: Record<Method, string> = {
  GET:    "text-blue-400",
  POST:   "text-gf-green-400",
  PUT:    "text-amber-400",
  PATCH:  "text-purple-400",
  DELETE: "text-red-400",
};

type Props = {
  method: Method;
  path: string;
  description?: string;
  size?: "sm" | "md";
  dark?: boolean;
};

export default function ApiEndpoint({ method, path, description, size = "md", dark = false }: Props) {
  const isSmall = size === "sm";

  if (dark) {
    return (
      <div className="flex items-center gap-2 py-1">
        <span className={`shrink-0 font-mono font-bold w-9 ${isSmall ? "text-[10px]" : "text-xs"} ${methodStylesDark[method]}`}>
          {method}
        </span>
        <code className={`font-mono text-zinc-200 truncate ${isSmall ? "text-[11px]" : "text-sm"}`}>{path}</code>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-2 ${isSmall ? "py-1" : "py-2.5 border-b border-zinc-100 dark:border-white/10 last:border-0"}`}>
      <span
        className={`shrink-0 font-mono font-bold rounded px-1.5 py-0.5 ${methodStyles[method]} ${
          isSmall ? "text-[10px]" : "text-xs"
        }`}
      >
        {method}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code
          className={`font-mono text-gf-slate-900 dark:text-zinc-200 truncate ${isSmall ? "text-[11px]" : "text-sm"}`}
        >
          {path}
        </code>
        {description && !isSmall && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500 leading-snug">{description}</span>
        )}
      </div>
    </div>
  );
}
