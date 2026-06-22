export default function TrendingSectionSkeleton() {
  return (
    <section className="w-full px-4 md:px-7 py-5 animate-pulse">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Trending Games
        </h2>
      </div>

      <div className="grid gap-3 md:gap-4 lg:gap-5 grid-cols-1 lg:grid-cols-[2fr_1fr] lg:grid-rows-3">
        <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-zinc-900 min-h-75 md:min-h-112.5 lg:min-h-162.5 lg:row-span-3">
          <div className="absolute inset-0 bg-zinc-800" />

          <div className="absolute bottom-0 p-4 md:p-6 lg:p-8 w-full">
            <div className="h-6 w-28 rounded-full bg-zinc-700" />

            <div className="mt-4 h-12 w-3/4 rounded bg-zinc-700" />

            <div className="mt-3 h-5 w-48 rounded bg-zinc-700" />

            <div className="mt-5 h-11 w-32 rounded-lg bg-zinc-700" />
          </div>
        </div>

        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl md:rounded-2xl border border-cyan-500/20 bg-zinc-900 min-h-35 md:min-h-45"
          >
            <div className="absolute inset-0 bg-zinc-800" />
            <div className="absolute bottom-0 p-3 md:p-4 w-full">
              <div className="h-5 w-8 rounded bg-zinc-700" />

              <div className="mt-2 h-6 w-3/4 rounded bg-zinc-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}