# CyberMinds Course System - Documentation

## Course Creation

### File Structure

Each course requires:

1. A directory: `apps/web/src/app/(courses)/courses/[slug]/`
2. An MDX file: `page.mdx`

### Frontmatter Schema

```yaml
---
title: string # Required - Course title
description: string # Required - Short description
author: string # Required - Instructor name
difficulty: enum # Required - 'beginner' | 'intermediate' | 'advanced'
duration: string # Required - e.g., "4 weeks"
tags: string[] # Required - Topic tags
published: string # Required - ISO date (YYYY-MM-DD)
featured: boolean # Optional - Show as featured
thumbnail: string # Optional - Image path
updated: string # Optional - Last update date
---
```

### Example Course

````mdx
---
title: Penetration Testing Fundamentals
description: Learn ethical hacking and penetration testing from scratch
author: John Smith
difficulty: intermediate
duration: 8 weeks
tags: [pentesting, ethical-hacking, security]
published: 2024-12-01
featured: true
thumbnail: /images/courses/pentest.jpg
---

## Adding a New Course

1. **Create directory:**

   ```bash
   mkdir apps/web/src/app/\(courses\)/courses/my-course
   ```
````

2. **Create MDX file:**

   ```bash
   touch apps/web/src/app/\(courses\)/courses/my-course/page.mdx
   ```

3. **Add frontmatter and content:**

   ```mdx
   ---
   title: My Awesome Course
   description: Learn something amazing
   author: Jane Doe
   difficulty: beginner
   duration: 6 weeks
   tags: [security, web]
   published: 2024-12-01
   ---

   # Content here
   ```

4. **Restart dev server:**

   ```bash
   make dev
   ```

5. **View at:** `http://localhost:3000/courses/my-course`

## Content Guidelines

1. **Use descriptive titles** - Clear, searchable course names
2. **Write concise descriptions** - 1-2 sentences max
3. **Structure with headings** - Use H2, H3 for organization
4. **Include code examples** - Syntax highlighting automatic
5. **Add visual breaks** - Use blockquotes, lists, code blocks
6. **Optimize images** - Use WebP format, compress files
7. **Tag appropriately** - 3-5 relevant tags per course

## Course Troubleshooting

**Course not appearing in listing:**

- Verify `page.mdx` exists in correct directory
- Check frontmatter YAML syntax
- Restart dev server

**Build errors:**

- Run `make clean && make install && make build`
- Check for TypeScript errors
- Verify MDX syntax

## Contributing Courses

When contributing courses:

1. Follow the frontmatter schema
2. Use proper Markdown formatting
3. Test locally before committing
4. Optimize images
5. Run linter: `make lint`
