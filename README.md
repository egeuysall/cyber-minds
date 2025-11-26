# CyberMinds

A comprehensive cybersecurity learning platform with 12 courses and 58 interactive lessons.

## Quick Start

```bash
# Install dependencies
make install

# Start development server
make dev

# Visit http://localhost:3000
```

## Prerequisites

- **Node.js** v18 or higher
- **pnpm** package manager
- **Make** utility

```bash
# Install pnpm
npm install -g pnpm
```

## Installation

```bash
# Clone the repository
git clone https://github.com/your-org/cyber-minds.git
cd cyber-minds

# Install dependencies
make install
```

## Development

```bash
# Start development server
make dev
```

The application will be available at **http://localhost:3000**

**URLs:**

- Course Listing: http://localhost:3000/courses
- Course Detail: http://localhost:3000/courses/course1
- Lesson Page: http://localhost:3000/courses/course1/lesson1

## Available Commands

```bash
make help           # Show all available commands
make install        # Install all dependencies
make dev            # Start development server
make build          # Build for production
make start          # Start production server
make lint           # Run ESLint
make clean          # Clean build artifacts
```

### Course Management Commands

```bash
make create-course  # Create a new course
make list-courses   # List all courses
make count-lessons  # Count total lessons
make info           # Show project information
```

## Creating a New Course

```bash
# Create course with 5 lessons
make create-course NUM=13 TITLE="API Security" LESSONS=5
```

## Troubleshooting

### Build Issues

```bash
make clean && make install && make build
```

### Courses Not Appearing

1. Check `apps/courses/` directory exists
2. Verify `overview.md` file exists
3. Ensure metadata in `apps/web/src/lib/courses.ts`
4. Run `make list-courses` to verify
