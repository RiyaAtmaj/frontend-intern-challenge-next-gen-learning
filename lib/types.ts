export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type CoursesResult =
  | {
      ok: true;
      courses: Course[];
    }
  | {
      ok: false;
      message: string;
    };
