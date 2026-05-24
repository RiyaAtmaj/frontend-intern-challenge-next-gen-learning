export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string;
          title: string;
          progress: number;
          icon_name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          progress: number;
          icon_name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          progress?: number;
          icon_name?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
