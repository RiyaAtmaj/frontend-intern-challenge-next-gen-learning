# Next-Gen Learning Dashboard

A dark-mode, animated student dashboard built with Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## Architecture

- `app/page.tsx` is a React Server Component. It calls `getCourses()` on the server and passes the typed course payload into client presentation components.
- `lib/supabase.ts` creates a server-side Supabase client with environment variables. Secrets are not committed; see `.env.example`.
- Animation-heavy UI lives in client components under `components/`, keeping Framer Motion out of the server data layer.
- `app/loading.tsx` renders pulsing Bento skeletons while the route is loading.
- If Supabase is missing or returns an error, the dashboard renders a graceful error tile instead of crashing.

## Supabase Setup

Create a `courses` table in Supabase with this SQL:

```sql
create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone not null default now()
);

insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('AI Study Systems', 62, 'BrainCircuit'),
  ('Data Modeling with Supabase', 48, 'Database'),
  ('Interface Motion Design', 86, 'DraftingCompass');
```

Add these values to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

For a public prototype table, enable read access with an RLS policy:

```sql
alter table public.courses enable row level security;

create policy "Courses are readable"
on public.courses
for select
to anon
using (true);
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Implementation Notes

The Bento tiles stagger in through a parent Framer Motion variant. Hover states use spring physics and only animate `transform` and `opacity`-friendly properties. The course progress bars animate from `scaleX: 0` to the fetched progress value, avoiding width-based layout shifts.

Responsive behavior:

- Desktop: expanded Bento grid with collapsible sidebar.
- Tablet: icon-only sidebar with a two-column grid.
- Mobile: bottom navigation and a single-column grid.
