import { ActivityTile } from "@/components/activity-tile";
import { AnimatedBentoGrid } from "@/components/animated-bento-grid";
import { CourseTile } from "@/components/course-tile";
import { DashboardShell } from "@/components/dashboard-shell";
import { ErrorTile } from "@/components/error-tile";
import { HeroTile } from "@/components/hero-tile";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await getCourses();

  return (
    <DashboardShell>
      <AnimatedBentoGrid>
        <HeroTile name="Maya" streak={18} />
        <ActivityTile />
        {result.ok ? (
          result.courses.map((course) => <CourseTile course={course} key={course.id} />)
        ) : (
          <ErrorTile message={result.message} />
        )}
      </AnimatedBentoGrid>
    </DashboardShell>
  );
}
