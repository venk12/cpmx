export default function Maintenance() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <div className="mx-auto max-w-lg px-6 py-8 text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <svg
            className="h-20 w-20 text-zinc-600 dark:text-zinc-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        
        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          We'll be back soon!
        </h1>
        
        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          We're performing scheduled maintenance to improve your experience. 
          This shouldn't take long.
        </p>
        
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div className="h-full w-3/4 animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700" />
          </div>
        </div>
        
        {/* Contact info */}
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Need immediate assistance?
          </p>
          <a 
            href="mailto:support@next-view.nl"
            className="mt-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            support@next-view.nl
          </a>
        </div>
        
        {/* Estimated time */}
        <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-600">
          Estimated completion: Within 30 minutes
        </p>
      </div>
    </div>
  );
}