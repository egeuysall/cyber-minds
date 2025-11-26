import { LandingClient } from '@/modules/landing/components/landing-client';
import { getAllCourses } from '@/lib/courses';

export default async function HomePage() {
  const courses = await getAllCourses();
  const courseCount = courses.length;

  return <LandingClient courseCount={courseCount} />;
}
