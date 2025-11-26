import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Clock, Tag } from 'lucide-react';
import type { Course } from '@/types/course';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`} className="no-underline">
      <Card className="border-muted h-full">
        <div className="p-6">
          {course.metadata.thumbnail && (
            <div className="mb-4">
              <OptimizedImage
                src={course.metadata.thumbnail}
                alt={course.metadata.title}
                width={800}
                height={450}
                className="h-48 w-full rounded-lg object-cover transition-transform group-hover:scale-[1.02]"
              />
            </div>
          )}
          {course.metadata.featured && <Badge className="mb-4">Featured</Badge>}
          <h5>{course.metadata.title}</h5>
          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
            {course.metadata.description}
          </p>

          <div className="space-y-2">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>{course.metadata.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Tag className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground capitalize">{course.metadata.difficulty}</span>
            </div>
          </div>

          {course.metadata.tags && course.metadata.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {course.metadata.tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
