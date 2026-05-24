import { createSupabaseServerClient } from "@/lib/supabase";
import type { Course, CoursesResult } from "@/lib/types";

export async function getCourses(): Promise<CoursesResult> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      ok: false,
      message:
        "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
    };
  }

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: true });

  if (error) {
    return {
      ok: false,
      message: `Could not load courses: ${error.message}`,
    };
  }

  return {
    ok: true,
    courses: (data ?? []) as Course[],
  };
}
