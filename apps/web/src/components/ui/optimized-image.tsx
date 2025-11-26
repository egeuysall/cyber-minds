import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface OptimizedImageProps extends NextImageProps {
  quality?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function OptimizedImage({
  quality = 90,
  loading = 'lazy',
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <NextImage
      quality={quality}
      loading={priority ? 'eager' : loading}
      priority={priority}
      {...props}
    />
  );
}
