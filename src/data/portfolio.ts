// Interfaces

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveDemo?: string;
  image: string;
  video?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  name: string;
  icon?: string;
  proficiency?: number;
}

export interface Achievement {
  id: string | number;
  title: string;
  description: string;
  icon: string;
}
// ================= PROJECTS =================
export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Hariss International – Scalable Laravel Backend',
    description:
      'Engineered a production-grade backend system designed to handle authentication, role-based access control (RBAC), and high-volume API traffic. Implemented secure authentication using Laravel Sanctum, integrated Spatie for permission management, and optimized database queries to improve performance and scalability in a real-world production environment.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Sanctum', 'Spatie'],
    githubLink: 'https://github.com/your-username/hariss-backend',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 'p2',
    title: 'CookingStories – Full Stack Recipe Platform',
    description:
      'Developed a full-stack Django-based recipe platform featuring dynamic filtering, complete CRUD functionality, and a responsive user interface. Focused on clean architecture, optimized database interactions using Django ORM, and enhanced user experience through intuitive UI design with Tailwind CSS.',
    techStack: ['Django', 'Python', 'SQLite', 'Tailwind CSS'],
    githubLink: 'https://github.com/your-username/cookingstories',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    title: 'REST API System – Clean Architecture Backend',
    description:
      'Designed and implemented a scalable REST API system following clean architecture principles. Built centralized error handling mechanisms, validation pipelines for consistent request processing, and optimized PostgreSQL queries to ensure high performance for data-intensive operations.',
    techStack: ['Laravel', 'PostgreSQL', 'API Development', 'Postman'],
    githubLink: 'https://github.com/your-username/api-system',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  }
];
// ================= EXPERIENCE =================
// ================= EXPERIENCE =================
export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'TechnoBren Infotech Pvt. Ltd.',
    duration: 'Mar 2025 - Present',
    description:
      'Currently working on building scalable backend systems using Laravel, developing secure and efficient REST APIs, and implementing authentication and RBAC systems. Focused on optimizing database performance, improving system reliability, and delivering production-ready solutions aligned with business requirements.'
  },
  {
    id: '2',
    role: 'Software Developer Intern',
    company: 'Digipodium',
    duration: 'Jun 2024 - Sep 2024',
    description:
      'Contributed to both frontend and backend development using React and Python. Built responsive UI components, integrated APIs, and enhanced overall application performance while improving user experience across multiple modules.'
  }
];
// ================= SKILLS =================
export const skills: Skill[] = [
  // Backend
  { id: 's1', category: 'Backend', name: 'Laravel', proficiency: 90 },
  { id: 's2', category: 'Backend', name: 'Django', proficiency: 80 },
  { id: 's3', category: 'Backend', name: 'REST APIs', proficiency: 90 },
  { id: 's4', category: 'Backend', name: 'Authentication & RBAC', proficiency: 85 },

  // Database
  { id: 's5', category: 'Database', name: 'MySQL', proficiency: 85 },
  { id: 's6', category: 'Database', name: 'PostgreSQL', proficiency: 80 },
  { id: 's7', category: 'Database', name: 'Query Optimization', proficiency: 75 },

  // Frontend
  { id: 's8', category: 'Frontend', name: 'HTML', proficiency: 85 },
  { id: 's9', category: 'Frontend', name: 'CSS', proficiency: 80 },
  { id: 's10', category: 'Frontend', name: 'Tailwind CSS', proficiency: 85 },
  { id: 's11', category: 'Frontend', name: 'Bootstrap', proficiency: 80 },

  // Tools
  { id: 's12', category: 'Tools', name: 'Postman', proficiency: 85 },
  { id: 's13', category: 'Tools', name: 'Git & GitHub', proficiency: 80 },
];
// ================= ACHIEVEMENTS =================
// ================= ACHIEVEMENTS =================
export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Backend Systems Development',
    description:
      'Designed and developed scalable backend systems and REST APIs using Laravel and Django, focusing on performance, security, and clean architecture for real-world applications.',
    icon: '⚙️'
  },
  {
    id: 2,
    title: 'Industry Experience',
    description:
      'Gained hands-on industry experience as a Software Developer, delivering production-level backend solutions and working on scalable system design.',
    icon: '💼'
  },
  {
    id: 3,
    title: 'Full Stack Applications',
    description:
      'Built multiple full-stack applications with end-to-end functionality, combining backend logic with responsive frontend design and optimized performance.',
    icon: '🚀'
  }
];