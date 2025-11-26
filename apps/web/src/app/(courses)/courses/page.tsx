import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { getAllCourses } from '@/lib/courses';
import { CourseCard } from '@/modules/courses/components/course-card';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Browse our comprehensive cybersecurity courses and enhance your skills.',
};

export default async function CoursesPage() {
  const courses = await getAllCourses();

  if (courses.length === 0) {
    return (
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <BookOpen className="text-muted-foreground mx-auto h-16 w-16" />
          <h1>No Courses Available</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            We&apos;re working on adding courses. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1>Cybersecurity Courses</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Master cybersecurity skills with our comprehensive courses
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
