import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import {
  getAllCourses,
  getCourseBySlug,
  getCourseLessons,
  getCourseLesson,
  getLessonNavigation,
} from '@/lib/courses';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LessonNavigation } from '@/modules/courses/components/lesson-navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface LessonPageProps {
  params: Promise<{
    slug: string;
    lesson: string;
  }>;
}

export async function generateStaticParams() {
  const courses = await getAllCourses();
  const params = [];

  for (const course of courses) {
    const lessons = await getCourseLessons(course.slug);
    for (const lesson of lessons) {
      params.push({
        slug: course.slug,
        lesson: lesson.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug, lesson: lessonSlug } = await params;
  const course = await getCourseBySlug(slug);
  const lesson = await getCourseLesson(slug, lessonSlug);

  if (!course || !lesson) {
    return {
      title: 'Lesson Not Found',
    };
  }

  return {
    title: `${lesson.title} - ${course.metadata.title}`,
    description: course.metadata.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lesson: lessonSlug } = await params;
  const course = await getCourseBySlug(slug);
  const lesson = await getCourseLesson(slug, lessonSlug);
  const lessons = await getCourseLessons(slug);

  if (!course || !lesson) {
    notFound();
  }

  const { previous, next } = getLessonNavigation(lessons, lessonSlug);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/courses">Courses</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/courses/${slug}`}>{course.metadata.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{lesson.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Lesson header */}
        <header className="border-border/40 mb-8 border-b pb-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="bg-primary/20 text-primary inline-flex h-12 w-12 items-center justify-center rounded-lg font-semibold">
              {lesson.lessonNumber}
            </div>
            <div className="flex-1">
              <h1 className="mb-2">{lesson.title}</h1>
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>
                    Lesson {lesson.lessonNumber} of {lessons.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Lesson content */}
        <article className="mb-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content || ''}</ReactMarkdown>
        </article>

        {/* Navigation buttons with keyboard support */}
        <LessonNavigation
          courseSlug={slug}
          previousLesson={previous}
          nextLesson={next}
          showKeyboardHint={true}
        />

        {/* Lesson list */}
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Course Lessons</h2>
          <div className="bg-muted/30 border-border/40 space-y-2 rounded-lg border p-4">
            {lessons.map(l => (
              <Link
                key={l.slug}
                href={`/courses/${slug}/${l.slug}`}
                className={`hover:bg-muted flex items-center gap-3 rounded-lg p-3 no-underline transition-colors ${
                  l.slug === lessonSlug ? 'bg-primary/10 text-primary font-semibold' : ''
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded text-sm font-semibold ${
                    l.slug === lessonSlug
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {l.lessonNumber}
                </div>
                <div className="text-foreground flex-1">{l.title}</div>
                <div className="text-muted-foreground text-sm">{l.duration}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
