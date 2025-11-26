/**
 * Standard animation variants and configurations for Framer Motion
 * Used across the application for consistent blur-to-clear transitions
 */

import type { Transition } from 'motion/react';

/**
 * Standard fade in with blur effect from below
 * Used for most text and content elements
 */
export const fadeInUpBlur = {
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: 'easeOut' } as Transition,
};

/**
 * Subtle fade in with blur effect
 * Used for form elements and interactive components
 */
export const fadeInBlurSubtle = {
  initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8 } as Transition,
};

/**
 * Fade in with blur and scale
 * Used for cards, modals, and containers
 */
export const fadeInScaleBlur = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  transition: { duration: 1.0, ease: 'easeOut' } as Transition,
};

/**
 * Spring animation with blur
 * Used for icons and interactive elements that need bounce
 */
export const springBlur = {
  initial: { scale: 0, filter: 'blur(10px)' },
  animate: { scale: 1, filter: 'blur(0px)' },
  transition: { type: 'spring', stiffness: 200, damping: 15 } as Transition,
};

/**
 * Avatar/image fade in with scale and blur
 * Used for profile images and decorative elements
 */
export const avatarBlur = {
  initial: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  transition: { duration: 0.8 } as Transition,
};

/**
 * Stagger container for sequential animations
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Helper function to create a delayed version of any animation
 */
export const withDelay = (
  animation: {
    initial?: Record<string, number | string>;
    animate?: Record<string, number | string>;
    transition?: Transition;
  },
  delay: number
) => ({
  ...animation,
  transition: { ...animation.transition, delay } as Transition,
});
