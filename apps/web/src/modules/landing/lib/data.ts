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
  responsibilities: string[];
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
    responsibilities: [
      'Monitor networks for data security vulnerabilities',
      'Investigate and document security breaches',
      'Research IT security trends',
      'Develop security strategies',
    ],
  },
  {
    icon: Search,
    title: 'Digital Forensic Examiner',
    salary: '$96,157',
    description: 'Retrieve information from computers and digital devices',
    responsibilities: [
      'Collect and analyze digital evidence',
      'Recover data from damaged drives',
      'Maintain chain of custody',
      'Assist law enforcement investigations',
    ],
  },
  {
    icon: Server,
    title: 'Security Systems Administrator',
    salary: '$114,967',
    description: 'Manage day-to-day operations of cybersecurity systems',
    responsibilities: [
      'Monitor systems and run backups',
      'Manage user accounts',
      'Document security procedures',
      'Respond to security intrusions',
    ],
  },
  {
    icon: WandSparkles,
    title: 'Penetration Tester',
    salary: '$124,127',
    description: 'Identify security weaknesses by simulating attacks',
    responsibilities: [
      'Plan and carry out penetration tests',
      'Create security reports',
      'Develop testing automation scripts',
      'Conduct social engineering exercises',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security Engineer',
    salary: '$137,879',
    description: 'Design systems to protect against cyberattacks',
    responsibilities: [
      'Develop security standards',
      'Test security solutions',
      'Lead incident response teams',
      'Automate vulnerability detection',
    ],
  },
  {
    icon: Network,
    title: 'Security Architect',
    salary: '$164,433',
    description: 'Set the vision for company security systems',
    responsibilities: [
      'Build and maintain security networks',
      'Prepare security budgets',
      'Coordinate security operations',
      'Conduct security drills',
    ],
  },
  {
    icon: Lock,
    title: 'Cryptography Engineer',
    salary: '$137,802',
    description: 'Create encryption algorithms and security protocols',
    responsibilities: [
      'Develop cryptographic algorithms',
      'Analyze vulnerabilities',
      'Implement encryption solutions',
      'Test encryption techniques',
    ],
  },
  {
    icon: User,
    title: 'Cybersecurity Manager',
    salary: '$153,084',
    description: 'Oversee security infrastructure and policies',
    responsibilities: [
      'Manage resources and policies',
      'Ensure compliance',
      'Source cybersecurity tools',
      'Lead risk mitigation',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Mihika K.',
    rating: 4,
    text: "What I loved the most about this website is everything was quick and easy to find. The course content and table of content in each course was SO helpful. Would like to see some more courses come out!",
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
