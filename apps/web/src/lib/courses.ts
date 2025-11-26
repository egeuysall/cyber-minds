import fs from 'fs';
import path from 'path';
import type { Course, CourseMetadata, CourseLesson } from '@/types/course';

// In Next.js, process.cwd() returns the app directory (apps/web)
// We need to go up one level to reach apps, then into courses
const coursesDirectory = path.resolve(process.cwd(), '../courses');

interface LessonFile {
  number: number;
  filename: string;
  path: string;
}

// Map course directories to metadata
const courseMetadataMap: Record<string, CourseMetadata> = {
  course1: {
    title: 'Introduction to Cybersecurity',
    description:
      'Learn the fundamentals of cybersecurity, its purposes, and core principles. Explore career opportunities and understand the CIA Triad.',
    author: 'CyberMinds Team',
    difficulty: 'beginner',
    duration: '2 hours',
    tags: ['fundamentals', 'CIA Triad', 'career', 'introduction'],
    published: '2024-01-01',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
  },
  course2: {
    title: 'Cybersecurity for Individuals and Companies',
    description:
      'Explore how cybersecurity needs differ between individuals and organizations. Learn about unique security challenges and protective measures.',
    author: 'CyberMinds Team',
    difficulty: 'beginner',
    duration: '2 hours',
    tags: ['GDPR', 'HIPAA', 'compliance', 'data protection'],
    published: '2024-01-02',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop',
  },
  course3: {
    title: 'Types of Attacks',
    description:
      'Discover various cyberattacks and attackers. Learn about social engineering, phishing, malware, and both technical and non-technical attack methods.',
    author: 'CyberMinds Team',
    difficulty: 'beginner',
    duration: '3 hours',
    tags: ['attacks', 'social engineering', 'phishing', 'malware'],
    published: '2024-01-03',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop',
  },
  course4: {
    title: 'Defensive Measures',
    description:
      'Master defensive strategies from non-technical concepts to automation tools. Learn authentication, authorization, and Python security scripting.',
    author: 'CyberMinds Team',
    difficulty: 'intermediate',
    duration: '3 hours',
    tags: ['defense', 'authentication', 'SIEM', 'automation', 'Python'],
    published: '2024-01-04',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
  },
  course5: {
    title: 'Cryptography',
    description:
      'Dive into the science of securing information through encoding. Learn encryption methods, hashing algorithms, and cryptographic attacks.',
    author: 'CyberMinds Team',
    difficulty: 'intermediate',
    duration: '3 hours',
    tags: ['cryptography', 'encryption', 'hashing', 'AES', 'RSA'],
    published: '2024-01-05',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=450&fit=crop',
  },
  course6: {
    title: 'Linux Fundamentals',
    description:
      'Master Linux, the go-to OS for cybersecurity professionals. Learn setup, basic commands, and file system navigation.',
    author: 'CyberMinds Team',
    difficulty: 'beginner',
    duration: '3 hours',
    tags: ['Linux', 'command line', 'terminal', 'VirtualBox'],
    published: '2024-01-06',
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop',
  },
  course7: {
    title: 'Advanced Attacks',
    description:
      'Explore sophisticated attack methodologies including Advanced Persistent Threats, spoofing techniques, and interception attacks.',
    author: 'CyberMinds Team',
    difficulty: 'advanced',
    duration: '2.5 hours',
    tags: ['APT', 'spoofing', 'MITM', 'advanced'],
    published: '2024-01-07',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
  },
  course8: {
    title: 'Risk Assessment and Management',
    description:
      'Learn to evaluate and improve your cybersecurity posture. Identify risks, implement controls, and continuously improve security.',
    author: 'CyberMinds Team',
    difficulty: 'intermediate',
    duration: '2.5 hours',
    tags: ['risk management', 'assessment', 'security controls'],
    published: '2024-01-08',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
  },
  course9: {
    title: 'Penetration Testing',
    description:
      'Introduction to ethical hacking and penetration testing. Learn reconnaissance techniques, pentesting tools, and key methodologies.',
    author: 'CyberMinds Team',
    difficulty: 'advanced',
    duration: '4 hours',
    tags: ['pentesting', 'ethical hacking', 'reconnaissance', 'tools'],
    published: '2024-01-09',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=450&fit=crop',
  },
  course10: {
    title: 'Networking Fundamentals',
    description:
      'Master essential networking concepts crucial for cybersecurity. Learn protocols, addressing, network models, topologies, and security methods.',
    author: 'CyberMinds Team',
    difficulty: 'beginner',
    duration: '4 hours',
    tags: ['networking', 'TCP/IP', 'OSI model', 'protocols', 'ports'],
    published: '2024-01-10',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
  },
  course11: {
    title: 'Cybersecurity in the Cloud',
    description:
      'Explore cloud security challenges, shared responsibility model, identity management, common threats, and cloud security best practices.',
    author: 'CyberMinds Team',
    difficulty: 'intermediate',
    duration: '3.5 hours',
    tags: ['cloud security', 'AWS', 'Azure', 'IAM', 'encryption'],
    published: '2024-01-11',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
  },
  course12: {
    title: 'Emerging Tech & Future of Cybersecurity',
    description:
      'Explore emerging technologies and future trends in cybersecurity including AI/ML, quantum computing, IoT security, and blockchain.',
    author: 'CyberMinds Team',
    difficulty: 'advanced',
    duration: '2 hours',
    tags: ['AI', 'quantum', 'IoT', 'blockchain', 'future trends'],
    published: '2024-01-12',
    thumbnail: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=450&fit=crop',
  },
};

export async function getAllCourses(): Promise<Course[]> {
  try {
    if (!fs.existsSync(coursesDirectory)) {
      console.error('Courses directory not found:', coursesDirectory);
      return [];
    }

    const entries = fs.readdirSync(coursesDirectory, { withFileTypes: true });

    const courses: Course[] = [];

    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        entry.name.startsWith('course') &&
        !entry.name.startsWith('_') &&
        !entry.name.startsWith('.')
      ) {
        const courseSlug = entry.name;
        const metadata = courseMetadataMap[courseSlug];

        if (metadata) {
          courses.push({
            slug: courseSlug,
            metadata,
          });
        }
      }
    }

    return courses.sort((a, b) => {
      if (a.metadata.featured && !b.metadata.featured) return -1;
      if (!a.metadata.featured && b.metadata.featured) return 1;
      return new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime();
    });
  } catch (error) {
    console.error('Error reading courses:', error);
    return [];
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const overviewPath = path.join(coursesDirectory, slug, 'overview.md');

    if (!fs.existsSync(overviewPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(overviewPath, 'utf8');
    const metadata = courseMetadataMap[slug];

    if (!metadata) {
      return null;
    }

    return {
      slug,
      metadata,
      content: fileContents,
    };
  } catch (error) {
    console.error(`Error reading course ${slug}:`, error);
    return null;
  }
}

export async function getCourseLessons(courseSlug: string): Promise<CourseLesson[]> {
  try {
    const courseDir = path.join(coursesDirectory, courseSlug);

    if (!fs.existsSync(courseDir)) {
      return [];
    }

    const files = fs.readdirSync(courseDir);
    const lessonFiles: LessonFile[] = files
      .filter(file => file.startsWith('lesson') && file.endsWith('.md'))
      .map(file => {
        const match = file.match(/lesson(\d+)\.md/);
        return {
          number: match ? parseInt(match[1], 10) : 0,
          filename: file,
          path: path.join(courseDir, file),
        };
      })
      .sort((a, b) => a.number - b.number);

    const lessons: CourseLesson[] = lessonFiles.map(lessonFile => {
      const content = fs.readFileSync(lessonFile.path, 'utf8');
      const titleMatch = content.match(/^#\s+(.+)/m);
      const title = titleMatch ? titleMatch[1].trim() : `Lesson ${lessonFile.number}`;

      return {
        id: `lesson${lessonFile.number}`,
        title,
        slug: `lesson${lessonFile.number}`,
        duration: '10 min',
        content,
        lessonNumber: lessonFile.number,
      };
    });

    return lessons;
  } catch (error) {
    console.error(`Error reading lessons for course ${courseSlug}:`, error);
    return [];
  }
}

export async function getCourseLesson(
  courseSlug: string,
  lessonSlug: string
): Promise<CourseLesson | null> {
  try {
    const lessons = await getCourseLessons(courseSlug);
    return lessons.find(lesson => lesson.slug === lessonSlug) || null;
  } catch (error) {
    console.error(`Error reading lesson ${lessonSlug} for course ${courseSlug}:`, error);
    return null;
  }
}

export function getLessonNavigation(
  lessons: CourseLesson[],
  currentLessonSlug: string
): {
  previous: CourseLesson | null;
  next: CourseLesson | null;
  current: CourseLesson | null;
} {
  const currentIndex = lessons.findIndex(lesson => lesson.slug === currentLessonSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null, current: null };
  }

  return {
    previous: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
    current: lessons[currentIndex],
  };
}

export async function getCourseSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(coursesDirectory)) {
      return [];
    }

    const entries = fs.readdirSync(coursesDirectory, { withFileTypes: true });

    return entries
      .filter(
        entry =>
          entry.isDirectory() &&
          entry.name.startsWith('course') &&
          !entry.name.startsWith('_') &&
          !entry.name.startsWith('.')
      )
      .map(entry => entry.name);
  } catch (error) {
    console.error('Error reading course slugs:', error);
    return [];
  }
}
