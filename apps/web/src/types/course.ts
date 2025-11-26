export interface CourseMetadata {
  title: string;
  description: string;
  author: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  tags: string[];
  published: string;
  updated?: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface Course {
  slug: string;
  metadata: CourseMetadata;
  content?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  title: string;
  slug: string;
  duration: string;
  content?: string;
  lessonNumber: number;
}
