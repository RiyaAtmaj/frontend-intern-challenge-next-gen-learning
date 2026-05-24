export function DashboardSkeleton() {
  return (
    <section
      aria-label="Loading dashboard"
      className="grid auto-rows-[minmax(13rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      <SkeletonTile className="min-h-80 md:col-span-2 xl:row-span-2" />
      <SkeletonTile className="min-h-64 xl:col-span-2" />
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile />
    </section>
  );
}

function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <article
      className={`animate-pulse rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 ${className}`}
    >
      <span className="block h-10 w-10 rounded-2xl bg-white/10" />
      <span className="mt-8 block h-5 w-2/3 rounded-full bg-white/10" />
      <span className="mt-4 block h-3 w-full rounded-full bg-white/10" />
      <span className="mt-3 block h-3 w-4/5 rounded-full bg-white/10" />
      <span className="mt-8 block h-2 w-full rounded-full bg-white/10" />
    </article>
  );
}
