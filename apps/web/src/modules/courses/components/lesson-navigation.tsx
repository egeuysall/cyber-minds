'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Keyboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { CourseLesson } from '@/types/course';

interface LessonNavigationProps {
  courseSlug: string;
  previousLesson: CourseLesson | null;
  nextLesson: CourseLesson | null;
  showKeyboardHint?: boolean;
}

export function LessonNavigation({
  courseSlug,
  previousLesson,
  nextLesson,
  showKeyboardHint = true,
}: LessonNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Left arrow key - previous lesson
      if (event.key === 'ArrowLeft' && previousLesson) {
        router.push(`/courses/${courseSlug}/${previousLesson.slug}`);
      }

      // Right arrow key - next lesson
      if (event.key === 'ArrowRight' && nextLesson) {
        router.push(`/courses/${courseSlug}/${nextLesson.slug}`);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [courseSlug, previousLesson, nextLesson, router]);

  return (
    <div className="space-y-4">
      {/* Keyboard hint */}
      {showKeyboardHint && (
        <div className="border-border/40 bg-muted/30 text-muted-foreground mb-4 flex items-center gap-2 rounded-lg border p-3 text-sm">
          <Keyboard className="h-4 w-4" />
          <span>Use arrow keys to navigate between lessons</span>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="border-border/40 flex items-center justify-between border-t pt-8">
        <div>
          {previousLesson ? (
            <Link href={`/courses/${courseSlug}/${previousLesson.slug}`}>
              <Button variant="outline" className="group">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="max-w-[200px] truncate font-semibold">{previousLesson.title}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <Link href={`/courses/${courseSlug}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Course
              </Button>
            </Link>
          )}
        </div>

        <div>
          {nextLesson ? (
            <Link href={`/courses/${courseSlug}/${nextLesson.slug}`}>
              <Button className="group">
                <div className="flex text-right">
                  <div className="max-w-[200px] truncate font-semibold">{nextLesson.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Link href={`/courses/${courseSlug}`}>
              <Button>
                Complete Course
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
