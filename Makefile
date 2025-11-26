.PHONY: help install dev build start lint clean create-course list-courses count-lessons info

# Paths
WEB_APP := apps/web
COURSES_DIR := apps/courses

help: ## Show this help message
	@echo 'Available Commands:'
	@echo ''
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'
	@echo ''

install: ## Install all dependencies
	@echo 'Installing dependencies...'
	@pnpm install

dev: ## Start Next.js development server (apps/web)
	@echo 'Starting development server...'
	@cd $(WEB_APP) && pnpm dev

build: ## Build the Next.js application (apps/web)
	@echo 'Building application...'
	@cd $(WEB_APP) && pnpm build

start: ## Start the production Next.js server (apps/web)
	@echo 'Starting production server...'
	@cd $(WEB_APP) && pnpm start

lint: ## Run ESLint on apps/web
	@echo 'Running linter...'
	@cd $(WEB_APP) && pnpm lint

clean: ## Clean build artifacts and dependencies
	@echo 'Cleaning build artifacts...'
	@rm -rf $(WEB_APP)/.next
	@rm -rf $(WEB_APP)/out
	@rm -rf node_modules
	@rm -rf $(WEB_APP)/node_modules

create-course: ## Create a new course (Usage: make create-course NUM=13 TITLE="Course Title" LESSONS=4)
	@if [ -z "$(NUM)" ]; then \
		echo 'Error: Course number required. Usage: make create-course NUM=13 TITLE="Course Title" LESSONS=4'; \
		exit 1; \
	fi; \
	if [ -z "$(TITLE)" ]; then \
		echo 'Error: Course title required. Usage: make create-course NUM=13 TITLE="Course Title" LESSONS=4'; \
		exit 1; \
	fi; \
	LESSON_COUNT=$${LESSONS:-4}; \
	COURSE_DIR=$(COURSES_DIR)/course$(NUM); \
	if [ -d "$$COURSE_DIR" ]; then \
		echo 'Error: Course $(NUM) already exists'; \
		exit 1; \
	fi; \
	echo 'Creating course$(NUM): $(TITLE)'; \
	mkdir -p $$COURSE_DIR; \
	echo "# $(TITLE)\n\n## Course Overview\n\nThis course covers...\n\n## Lessons\n\n" > $$COURSE_DIR/overview.md; \
	for i in $$(seq 1 $$LESSON_COUNT); do \
		echo "# Lesson $$i: Introduction\n\n## Overview\n\nLesson content goes here...\n" > $$COURSE_DIR/lesson$$i.md; \
		echo "Creating lesson$$i.md..."; \
	done; \
	echo 'Course $(NUM) created with '$$LESSON_COUNT' lessons'; \
	echo 'Remember to:'; \
	echo '  1. Update apps/web/src/lib/courses.ts with metadata'; \
	echo '  2. Edit $$COURSE_DIR/overview.md'; \
	echo '  3. Add content to lesson files'; \
	echo '  4. Run: make build'

list-courses: ## List all existing courses
	@echo 'Existing Courses:'
	@for dir in $(COURSES_DIR)/course*; do \
		if [ -d "$$dir" ]; then \
			course=$$(basename $$dir); \
			lesson_count=$$(ls -1 $$dir/lesson*.md 2>/dev/null | wc -l | tr -d ' '); \
			echo "  $$course: $$lesson_count lessons"; \
		fi \
	done

count-lessons: ## Count total lessons across all courses
	@total=$$(find $(COURSES_DIR) -name "lesson*.md" 2>/dev/null | wc -l | tr -d ' '); \
	echo 'Total lessons across all courses: '$$total

info: ## Show project information
	@echo 'Project Information'
	@echo 'Node version:' && node --version
	@echo 'pnpm version:' && pnpm --version || echo 'pnpm not installed'
	@echo 'Next.js app: $(WEB_APP)'
	@echo 'Courses directory: $(COURSES_DIR)'
	@$(MAKE) count-lessons
