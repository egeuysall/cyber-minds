import type { MDXComponents } from 'mdx/types';
import { OptimizedImage } from '@/components/ui/optimized-image';
import type { ComponentProps } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-6 scroll-m-20 text-4xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-3 scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-6 mb-3 scroll-m-20 text-lg font-semibold tracking-tight">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-6 mb-3 scroll-m-20 text-base font-semibold tracking-tight">{children}</h6>
    ),
    p: ({ children }) => <p className="mb-4 leading-7 [&:not(:first-child)]:mt-4">{children}</p>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:mt-2">{children}</ul>,
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2 [&>li]:mt-2">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-primary/20 text-muted-foreground mt-6 border-l-4 pl-6 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-6 mb-4 overflow-x-auto rounded-lg border bg-black/5 p-4 dark:bg-white/5">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="border-b">{children}</thead>,
    tbody: ({ children }) => <tbody className="[&>tr:last-child]:border-0">{children}</tbody>,
    tr: ({ children }) => (
      <tr className="hover:bg-muted/50 border-b transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{children}</td>
    ),
    hr: () => <hr className="border-border my-8" />,
    Image: (props: ComponentProps<typeof OptimizedImage>) => (
      <OptimizedImage {...props} className="rounded-lg" />
    ),
    ...components,
  };
}
