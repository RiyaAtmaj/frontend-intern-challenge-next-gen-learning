import { AlertTriangle } from "lucide-react";

export function ErrorTile({ message }: { message: string }) {
  return (
    <article className="min-h-56 rounded-[1.5rem] border border-amber-200/20 bg-amber-200/[0.06] p-5 text-amber-50 xl:col-span-2">
      <header className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-amber-200/15">
          <AlertTriangle aria-hidden="true" size={21} />
        </span>
        <h2 className="text-xl font-semibold">Courses unavailable</h2>
      </header>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-amber-100/80">{message}</p>
    </article>
  );
}
