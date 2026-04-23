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
      'Engineered a production-grade backend handling authentication, RBAC, and high-volume API requests.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Sanctum', 'Spatie'],
    githubLink: 'https://github.com/your-username/hariss-backend',
    image: 'https://www.vecteezy.com/free-photos/technology',
  },
  {
    id: 'p2',
    title: 'CookingStories – Full Stack Recipe Platform',
    description:
      'Developed a full-stack Django platform with dynamic filtering, CRUD operations, and responsive UI. Focused on performance, usability, and clean architecture.',
    techStack: ['Django', 'Python', 'SQLite', 'Tailwind CSS'],
    githubLink: 'https://github.com/your-username/cookingstories',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    title: 'REST API System – Clean Architecture Backend',
    description:
      'Designed a scalable REST API system with centralized error handling, validation pipelines, and optimized PostgreSQL queries for performance-critical operations.',
    techStack: ['Laravel', 'PostgreSQL', 'API Development', 'Postman'],
    githubLink: 'https://github.com/your-username/api-system',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  }
];
// ================= EXPERIENCE =================

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'TechnoBren Infotech Pvt. Ltd.',
    duration: 'Mar 2025 - Present',
    description:
      'Developing scalable backend systems using Laravel, building REST APIs, implementing authentication & RBAC, and optimizing database performance for production-level applications.'
  },
  {
    id: '2',
    role: 'Software Developer Intern',
    company: 'Digipodium',
    duration: 'Jun 2024 - Sep 2024',
    description:
      'Built responsive UI and backend features using React and Python. Improved performance and user experience across multiple modules.'
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
export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Backend Systems Development',
    description: 'Built scalable APIs and backend systems using Laravel and Django for real-world applications.',
    icon: '⚙️'
  },
  {
    id: 2,
    title: 'Industry Experience',
    description: 'Working as a Software Developer delivering production-level backend solutions.',
    icon: '💼'
  },
  {
    id: 3,
    title: 'Full Stack Applications',
    description: 'Developed multiple full-stack applications with clean architecture and responsive UI.',
    icon: '🚀'
  }
];