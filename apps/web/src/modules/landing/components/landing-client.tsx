'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { LightRays } from '@/components/ui/light-rays';
import { Button } from '@/components/ui/button';
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
        className="pointer-events-none fixed inset-0 z-0"
      />

      {/* Hero Section */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-12 sm:py-16 md:py-20">
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
            <h1>CyberMinds</h1>
            <p className="text-muted-foreground">Protecting the digital future.</p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/courses">
                <Button>Get Started</Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="secondary">How it Works</Button>
              </Link>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.section
            id="how-it-works"
            className="space-y-8 py-12"
            {...withDelay(fadeInUpBlur, 0.3)}
          >
            <h2 className="text-center">How It Works</h2>
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
          <motion.section className="space-y-8 py-12" {...withDelay(fadeInUpBlur, 0.75)}>
            <h2 className="text-center">Explore Our Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <MessageSquare className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Try the Chatbox</CardTitle>
                  <CardDescription>Specialized in Cybersecurity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Have conversations and learn from the CyberMinds chatbox. Explore the
                    chatbot&apos;s capabilities by asking questions about attacks, defenses, or other
                    topics in cybersecurity.
                  </p>
                  <Link href="/chat" className="text-primary hover:text-primary/80">
                    View Chatbox
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Trophy className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Try the CTF Challenge</CardTitle>
                  <CardDescription>10 Intriguing Challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Immerse yourself in this opportunity provided by the CyberMinds website. Our CTF
                    challenges will allow you to practice what you&apos;ve learned, capture flags, and
                    enjoy a fun-filled experience.
                  </p>
                  <Link href="/ctf" className="text-primary hover:text-primary/80">
                    Start Courses
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section className="space-y-8 py-12" {...withDelay(fadeInUpBlur, 0.9)}>
            <h2 className="text-center">Feedback from Users</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  {...withDelay(fadeInUpBlur, 0.95 + index * 0.05)}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{testimonial.name}</CardTitle>
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
              <h2>Cybersecurity Opportunities</h2>
              <p className="text-muted-foreground italic">
                &quot;Cybersecurity is not just about protecting data, but about protecting the{' '}
                <span className="text-primary-foreground font-medium">trust</span> in our digital
                world.&quot;
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careerOpportunities.map((career, index) => (
                <motion.div key={career.title} {...withDelay(fadeInUpBlur, 1.25 + index * 0.05)}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                        <career.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{career.title}</CardTitle>
                      <CardDescription>Average Salary: {career.salary}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-center text-sm">
              Information cited from Coursera
            </p>
          </motion.section>
        </motion.main>
      </div>

      {/* Footer */}
      <motion.footer className="py-6" {...withDelay(fadeInUpBlur, 1.6)}>
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
