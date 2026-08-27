export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceEntry {
  dateRange: string;
  role: string;
  org: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface BuildPrinciple {
  number: string;
  title: string;
  description: string;
}

export const CONTACT = {
  name: 'Shaikh Mohammed Shahrukh',
  role: 'Angular Developer',
  tagline: 'Angular Developer · Frontend Engineer · FinTech / BFSI',
  email: 'shaikhkabir17786@gmail.com',
  phone: '+91 7304744955',
  linkedin: 'https://www.linkedin.com/in/shaikhmohammadshahrukh/',
  location: 'Mumbai, India',
  cvPath: '/assets/cv/Shaikh_Mohammed_Shahrukh_CV.pdf',
  cvFileName: 'Shaikh_Mohammed_Shahrukh_CV.pdf',
};

export const HERO = {
  headline: 'I build scalable web applications from idea to production.',
  sub: 'Angular-focused software engineer with 3+ years of experience building scalable, config-driven applications for FinTech and BFSI platforms.',
};

export const ABOUT_PARAGRAPHS: string[] = [
  "I'm an Angular-focused software engineer with three-plus years building production applications for the FinTech and BFSI space — the kind of systems where a miscalculated EMI or a broken loan journey isn't a cosmetic bug, it's a business problem.",
  'Most of my work lives at the intersection of frontend architecture and real-world constraints: a JSON-config-driven workflow engine that powers Gold, Solar and Two-Wheeler lending journeys on one unified admin platform, RxJS-powered calculation engines, and a shared component library used across the frontend team.',
  "I care about the parts of engineering that don't show up in a screenshot — performance, maintainability and shipping without surprises. Across three major production launches on that platform, I've shipped with zero P0/P1 defects while processing 5,000+ loan applications.",
];

export const FOCUS_LIST: { label: string; group: string }[] = [
  { label: 'Angular 12–17', group: 'Core' },
  { label: 'TypeScript', group: 'Language' },
  { label: 'RxJS / Signals', group: 'Reactive' },
  { label: 'REST APIs', group: 'Integration' },
  { label: 'JSON-Config Architecture', group: 'Architecture' },
  { label: 'Module Federation', group: 'MFE' },
];

export const STATS: Stat[] = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 40, suffix: '%', label: 'Less Code Duplication' },
  { value: 30, suffix: '%', label: 'Faster Feature Delivery' },
  { value: 25, suffix: '%', label: 'Page-Load Improvement' },
  { value: 5000, suffix: '+', label: 'Loan Applications Processed' },
  { value: 0, suffix: '', label: 'P0/P1 Production Defects Across 3 Major Launches' },
];

export const ALIZ_TOURS = {
  title: 'ALIZ TOURS',
  subtitle: 'Full-Stack Travel & Tourism Platform',
  liveUrl: 'https://www.aliztours.com/',
  dateRange: '08/2026 — Present',
  description:
    'Aliz Tours is a full-stack travel and tourism platform built to showcase destinations, tour packages, accommodations and travel services, while handling real user workflows — exploring tours, submitting inquiries, and booking-related interactions — rather than acting as a static brochure site.',
  tech: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'REST APIs', 'Node.js', 'Database'],
  responsibilities: [
    {
      title: 'Frontend Development',
      body: 'Building reusable, component-based UI architecture with responsive layouts for desktop, tablet and mobile devices.',
    },
    {
      title: 'Backend & API Integration',
      body: 'Integrating frontend components with backend APIs for dynamic content and data management.',
    },
    {
      title: 'User Workflows',
      body: 'Implementing user workflows for tour exploration, inquiries, and booking-related interactions.',
    },
    {
      title: 'Architecture',
      body: 'Optimizing application performance, usability and maintainability through reusable components and clean architecture.',
    },
  ],
  scope: [
    'Full-stack application development',
    'Backend API development',
    'Database integration',
    'Authentication / admin functionality',
    'Payment integration — planned',
    'Production deployment',
    'Linux server configuration',
    'Domain & hosting configuration',
    'Environment configuration',
    'Production debugging',
    'Git / deployment workflow',
    'End-to-end ownership',
  ],
  status: 'Live',
};

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: '01', title: 'Requirement', description: "Understanding the travel platform's requirements — the destinations, packages and user journeys the product needed to support." },
  { number: '02', title: 'Architecture', description: 'Planning the frontend, backend, API and database structure before writing implementation code.' },
  { number: '03', title: 'Development', description: 'Building reusable UI components and the core application workflows on top of that architecture.' },
  { number: '04', title: 'Integration', description: 'Connecting frontend interfaces with backend APIs and dynamic, live data.' },
  { number: '05', title: 'Deployment', description: 'Configuring hosting, domain, server and the production environment.' },
  { number: '06', title: 'Production', description: 'Debugging deployment issues, optimizing the application, and getting Aliz Tours live.' },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    dateRange: '03/2024 — 01/2026',
    role: 'Software Engineer II — Angular Frontend',
    org: 'Homeville Group',
    location: 'Lower Parel, Mumbai',
    highlights: [
      'Architected a JSON-config-driven Angular workflow engine for Gold, Solar and Two-Wheeler loan journeys, consolidating 3 product codebases into a unified admin platform — zero P0/P1 defects across all three production launches, processing 5,000+ loan applications',
      'Built reusable RxJS-powered calculation engines (EMI, gold purity, loan eligibility) using Angular services and reactive streams, adopted across 3 lending journeys — cutting shared codebase duplication by 40% and compressing feature delivery cycles by 30%',
      'Led Angular UI standardization by migrating from Angular Material Data Table to ng-zorro (nz-table) and delivering Key Fact Statement (KFS) journey flows — improving page-load performance by 25% and establishing a shared component library used by the full frontend team',
      'Defined component API documentation and PR review standards for a 5-member Agile squad using JIRA — reducing new-developer onboarding time by 20% and measurably improving first-PR code quality',
      'Designed a Micro Frontend (MFE) module-federation boundary map separating Gold, Solar and Two-Wheeler journeys into independently deployable Angular feature modules — adopted as the baseline MFE rollout strategy by the tech lead',
    ],
    tags: ['Angular', 'RxJS', 'ng-zorro', 'Module Federation', 'JIRA'],
  },
  {
    dateRange: '07/2023 — 03/2024',
    role: 'Software Engineer I — Angular Frontend',
    org: 'Homeville Group',
    location: 'Lower Parel, Mumbai',
    highlights: [
      'Led end-to-end Angular migration of the SNG platform — porting loan terms, document vault and collections modules from a legacy system to a modern Angular stack across 4 modules, delivered on schedule with zero scope cuts while mentoring a junior intern to their first independent PR',
      'Integrated the Equifax Commercial Credit Bureau REST API into the Angular loan origination flow — automating creditworthiness checks and cutting document re-request cycles by 35%',
      'Built co-lending loan terms, inventory management and BRE workflow modules using Angular, TypeScript and REST API integrations for BHN and Velocity platforms — directly enabling 2 new lending partner business lines at launch',
      'Instituted pre-QA developer testing with Jasmine and Karma across the frontend team — proactively catching UI defects before QA handoff, reducing bug turnaround time by 40% and shortening sprint closure delays',
    ],
    tags: ['Angular', 'REST APIs', 'Jasmine', 'Karma'],
  },
  {
    dateRange: '01/2023 — 06/2023',
    role: 'Software Engineer Intern — Angular',
    org: 'Homeville Group',
    location: 'Lower Parel, Mumbai',
    highlights: [
      'Delivered 12 production-ready Angular features, including Reactive Forms validators, config-driven loan UIs, HttpClient-based REST API integrations, and reusable UI components',
      'Completed the 6-month internship with a full-time offer',
    ],
    tags: ['Angular', 'Reactive Forms', 'REST APIs'],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['Angular 12–17', 'TypeScript', 'JavaScript ES6+', 'RxJS', 'Observables', 'Subjects', 'BehaviorSubject', 'Signals'],
  },
  {
    name: 'Forms & UX',
    skills: [
      'Reactive Forms',
      'FormBuilder',
      'FormGroup',
      'FormArray',
      'Custom & Async Validators',
      'ControlValueAccessor',
      'Dynamic / Config-Driven Forms',
      'Angular Material',
      'ng-zorro-antd',
      'Bootstrap 5',
      'HTML5',
      'CSS3',
      'SCSS',
      'Responsive Design',
    ],
  },
  {
    name: 'Architecture',
    skills: [
      'Lazy Loading',
      'OnPush Change Detection',
      'Standalone Components',
      'JSON-Config Architecture',
      'Module Federation (MFE)',
      'Tree Shaking',
      'Code Splitting',
      'Angular Router',
      'ViewChild',
      'ContentChild',
      'ChangeDetectorRef',
    ],
  },
  {
    name: 'Engineering',
    skills: ['REST APIs', 'HTTP Interceptors', 'RBAC', 'Equifax Credit Bureau API', 'Jasmine', 'Karma', 'Git', 'Production Debugging'],
  },
];

export const BUILD_PRINCIPLES: BuildPrinciple[] = [
  { number: '01', title: 'Build for Scale', description: 'Reusable architecture and components instead of duplicated implementations.' },
  { number: '02', title: 'Think in Systems', description: 'Understand frontend, APIs, data flow, deployment and production together.' },
  { number: '03', title: 'Ship Reliably', description: 'Testing, debugging and production quality matter as much as development speed.' },
  { number: '04', title: 'Keep It Maintainable', description: 'Clean architecture, documentation and reusable patterns make teams faster.' },
];

export const NAV_LINKS: { label: string; fragment: string }[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'About', fragment: 'about' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Projects', fragment: 'project' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Contact', fragment: 'contact' },
];
