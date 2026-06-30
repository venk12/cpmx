type Props = {
  title: string;
  code: string;
};

export default function CodeBlock({ title, code }: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-gf-slate-900 text-sm shadow-lg">
      {/* Terminal header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-black/30 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-amber-500/70" />
          <span className="w-3 h-3 rounded-full bg-gf-green-500/70" />
        </div>
        <span className="font-mono text-xs text-zinc-400 truncate">{title}</span>
      </div>

      {/* Code area */}
      <pre className="p-5 overflow-x-auto">
        <code className="font-mono text-xs text-gf-green-400 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
