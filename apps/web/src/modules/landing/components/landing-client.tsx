'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { LightRays } from '@/components/ui/light-rays';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';
import { fadeInUpBlur, withDelay } from '@/lib/animations';
import { siteConfig } from '@/lib/config';
import { howItWorksSteps, careerOpportunities, testimonials } from '@/modules/landing/lib/data';
import { MessageSquare, Trophy } from 'lucide-react';

export function LandingClient() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Animated light rays background */}

      <LightRays
        count={8}
        color="oklch(0.2686 0 0 / 0.6)"
        blur={32}
        speed={4}
        length="80vh"
        className="fixed inset-0 -z-20"
      />

      {/* Static grid pattern background */}
      <GridPattern
        width={40}
        height={40}
        className="fixed inset-0 -z-10 h-full w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] stroke-white/10 md:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]"
      />

      {/* Hero Section */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-12 sm:py-16 md:py-20">
        <motion.main className="w-full space-y-16">
          <motion.div className="mb-6 flex justify-center" {...fadeInUpBlur}>
            <OptimizedImage
              src="/images/brand/logo.png"
              alt="CyberMinds logo"
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
          </motion.div>

          <motion.div className="mb-12 space-y-4 text-center" {...withDelay(fadeInUpBlur, 0.15)}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Cyber<span className="text-primary">Minds</span>
            </h1>
            <p className="text-secondary-foreground text-xl sm:text-2xl">
              Protecting the digital future.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="#how-it-works"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 font-semibold transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="/courses"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-6 py-3 font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.section
            id="how-it-works"
            className="space-y-8 py-12"
            {...withDelay(fadeInUpBlur, 0.3)}
          >
            <h2 className="text-center text-3xl font-bold">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((step, index) => (
                <motion.div key={step.title} {...withDelay(fadeInUpBlur, 0.35 + index * 0.1)}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Promotional Sections */}
          <motion.section
            className="grid gap-6 py-12 md:grid-cols-2"
            {...withDelay(fadeInUpBlur, 0.75)}
          >
            <Card className="hover:border-primary/50 cursor-pointer transition-colors">
              <CardHeader>
                <MessageSquare className="text-primary mb-4 h-8 w-8" />
                <CardTitle>
                  Try the <span className="text-primary">Chatbox</span>
                </CardTitle>
                <CardDescription>Specialized in Cybersecurity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Have conversations and learn from the CyberMinds chatbox. Explore the chatbot's
                  capabilities by asking questions about attacks, defenses, or other topics in
                  cybersecurity.
                </p>
                <Link href="/chat" className="text-primary hover:text-primary/80 font-semibold">
                  View Chatbox →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 cursor-pointer transition-colors">
              <CardHeader>
                <Trophy className="text-primary mb-4 h-8 w-8" />
                <CardTitle>
                  Try the <span className="text-primary">CTF Challenge</span>
                </CardTitle>
                <CardDescription>10 Intriguing Challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Immerse yourself in this opportunity provided by the CyberMinds website. Our CTF
                  challenges will allow you to practice what you've learned, capture flags, and
                  enjoy a fun-filled experience.
                </p>
                <Link href="/ctf" className="text-primary hover:text-primary/80 font-semibold">
                  Start Courses →
                </Link>
              </CardContent>
            </Card>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section className="space-y-8 py-12" {...withDelay(fadeInUpBlur, 0.9)}>
            <h2 className="text-center text-3xl font-bold">Feedback from Users</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  {...withDelay(fadeInUpBlur, 0.95 + index * 0.05)}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <div className="text-primary">
                          {'★'.repeat(testimonial.rating)}
                          {'☆'.repeat(5 - testimonial.rating)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Career Opportunities Section */}
          <motion.section className="space-y-8 py-12" {...withDelay(fadeInUpBlur, 1.2)}>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Cybersecurity Opportunities</h2>
              <blockquote className="text-muted-foreground italic">
                "Cybersecurity is not just about protecting data, but about protecting the{' '}
                <span className="text-primary font-semibold">trust</span> in our digital world."
              </blockquote>
              <p className="text-muted-foreground text-sm">- The CyberMinds Board</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {careerOpportunities.map((career, index) => (
                <motion.div key={career.title} {...withDelay(fadeInUpBlur, 1.25 + index * 0.05)}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                        <career.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{career.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        Average Salary: {career.salary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{career.description}</p>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        {career.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-center text-xs">
              Information cited from Coursera
            </p>
          </motion.section>
        </motion.main>
      </div>

      {/* Footer */}
      <motion.footer className="border-t py-6" {...withDelay(fadeInUpBlur, 1.6)}>
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
