import {
  Shield,
  BookOpen,
  Gamepad2,
  Code,
  ShieldHalf,
  Search,
  Server,
  WandSparkles,
  ShieldCheck,
  Network,
  Lock,
  User,
  type LucideIcon,
} from 'lucide-react';

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CareerOpportunity {
  icon: LucideIcon;
  title: string;
  salary: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: Shield,
    title: '10 Courses',
    description: 'Accelerate through the 10 courses. Learn at your own pace.',
  },
  {
    icon: BookOpen,
    title: 'Engaging Content',
    description: 'Learn our content through short segments of engaging reading.',
  },
  {
    icon: Gamepad2,
    title: 'Interactive Games',
    description: 'Engage in an interactive game and quiz to enhance your skills.',
  },
  {
    icon: Code,
    title: 'Code Practice',
    description: 'Write code in our terminals and have it verified by our chatbox.',
  },
];

export const careerOpportunities: CareerOpportunity[] = [
  {
    icon: ShieldHalf,
    title: 'Information Security Analyst',
    salary: '$99,274',
    description: "Protect an organization's computer networks and systems",
  },
  {
    icon: Search,
    title: 'Digital Forensic Examiner',
    salary: '$96,157',
    description: 'Retrieve information from computers and digital devices',
  },
  {
    icon: Server,
    title: 'Security Systems Administrator',
    salary: '$114,967',
    description: 'Manage day-to-day operations of cybersecurity systems',
  },
  {
    icon: WandSparkles,
    title: 'Penetration Tester',
    salary: '$124,127',
    description: 'Identify security weaknesses by simulating attacks',
  },
  {
    icon: ShieldCheck,
    title: 'Security Engineer',
    salary: '$137,879',
    description: 'Design systems to protect against cyberattacks',
  },
  {
    icon: Network,
    title: 'Security Architect',
    salary: '$164,433',
    description: 'Set the vision for company security systems',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Mihika K.',
    rating: 4,
    text: 'What I loved the most about this website is everything was quick and easy to find. The course content and table of content in each course was SO helpful. Would like to see some more courses come out!',
  },
  {
    name: 'Eternal Knight',
    rating: 5,
    text: 'Cool Website. Really loved how everything was explained. Lots of added animations, and extra features. Would definitely recommend!',
  },
  {
    name: 'Purva G.',
    rating: 5,
    text: "I've been using CyberMinds for over a month now and I am very happy with it! The content is created by students...so it can be understood easily. This website helped me understand Authentication and Authorization without any prior knowledge.",
  },
  {
    name: 'Ishan S.',
    rating: 4,
    text: '100% glad to have came across this...',
  },
  {
    name: 'Green Kangaroo 247',
    rating: 5,
    text: 'This is a truly incredible Website. I learned far more than I ever knew about Cybersecurity. The courses are easy to follow and they have helped me understand concepts that were previously misunderstood.',
  },
  {
    name: 'Boston M.',
    rating: 5,
    text: "My friend recommended this site quite recently. It's definitely worth checking out if you are looking for something new or just need some good study material.",
  },
];
