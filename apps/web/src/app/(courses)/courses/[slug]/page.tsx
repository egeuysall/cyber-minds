import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Clock, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { getAllCourses, getCourseBySlug, getCourseLessons } from '@/lib/courses';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map(course => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: course.metadata.title,
    description: course.metadata.description,
    keywords: course.metadata.tags,
    authors: [{ name: course.metadata.author }],
    openGraph: {
      title: course.metadata.title,
      description: course.metadata.description,
      type: 'article',
      publishedTime: course.metadata.published,
      modifiedTime: course.metadata.updated,
      authors: [course.metadata.author],
      tags: course.metadata.tags,
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  const lessons = await getCourseLessons(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back button */}
        <Link
          href="/courses"
          className="mb-8 inline-flex items-center gap-2 text-sm no-underline transition-opacity hover:opacity-75"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        {/* Course header */}
        <header className="mb-12">
          <h1>{course.metadata.title}</h1>

          <p className="text-muted-foreground mb-6">{course.metadata.description}</p>

          {/* Course metadata */}
          <div className="border-border/40 flex flex-wrap gap-6 border-y py-6">
            <div className="flex gap-2 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Duration</p>
                <p className="font-medium">{course.metadata.duration}</p>
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Difficulty</p>
                <p className="font-semibold capitalize">{course.metadata.difficulty}</p>
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Published</p>
                <p className="font-medium">
                  {new Date(course.metadata.published).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {course.metadata.tags && course.metadata.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {course.metadata.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Course content (Markdown) */}
        <article className="">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{course.content || ''}</ReactMarkdown>
        </article>

        {/* Lessons Section */}
        {lessons.length > 0 && (
          <section className="border-muted mb-12 border-t pt-4">
            <div className="mb-6 flex items-center justify-between">
              <h2>Course Lessons</h2>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4" />
                <span>{lessons.length} Lessons</span>
              </div>
            </div>
            <div className="mb-6 text-center">
              <Link href={`/courses/${slug}/${lessons[0].slug}`}>
                <Button size="lg" className="w-full">
                  Start Course
                </Button>
              </Link>
            </div>

            <div className="grid items-center gap-4">
              {lessons.map(lesson => (
                <Link
                  key={lesson.slug}
                  href={`/courses/${slug}/${lesson.slug}`}
                  className="no-underline"
                >
                  <Card className="h-full transition-opacity hover:opacity-75">
                    <div className="flex items-center justify-center gap-4 p-6">
                      <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg font-semibold transition-colors">
                        {lesson.lessonNumber}
                      </div>
                      <div className="flex-1">
                        <h3 className="group-hover:text-primary mb-1 font-semibold transition-colors">
                          {lesson.title}
                        </h3>
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer navigation */}
        <footer className="border-border/40 mt-12 border-t pt-8">
          <Link
            href="/courses"
            className="text-primary inline-flex items-center gap-2 transition-opacity hover:opacity-75"
          >
            <ArrowLeft className="h-4 w-4" />
            View All Courses
          </Link>
        </footer>
      </div>
    </div>
  );
}
