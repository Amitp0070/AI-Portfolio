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
  category: 'Frontend' | 'Backend' | 'Tools';
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

// Dummy Data

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features secure payments and an admin dashboard.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/your-username/ecommerce',
    liveDemo: 'https://ecommerce-demo.com',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    id: 'p2',
    title: 'AI Chat Interface',
    description: 'A modern chat interface communicating with an AI backend, featuring real-time typing indicators and markdown support.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'OpenAI API'],
    githubLink: 'https://github.com/your-username/ai-chat',
    liveDemo: 'https://ai-chat-demo.com',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  },
  {
    id: 'p3',
    title: 'Task Management App',
    description: 'A responsive task tracking application with drag-and-drop functionality and user authentication.',
    techStack: ['React', 'Redux', 'Firebase', 'Framer Motion'],
    githubLink: 'https://github.com/your-username/task-app',
    liveDemo: 'https://task-app-demo.com',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: "Frontend Developer Intern",
    company: "Company Name",
    duration: "Jan 2024 - Mar 2024",
    description: "Worked on React UI, improved performance, and collaborated with the design team."
  },
  {
    id: '2',
    role: 'Junior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Dec 2023',
    description: 'Developing and maintaining responsive web applications using React.js and modern CSS frameworks.'
  }
];

export const skills: Skill[] = [
  { id: 's1', category: 'Frontend', name: 'React.js', proficiency: 90 },
  { id: 's2', category: 'Frontend', name: 'TypeScript', proficiency: 85 },
  { id: 's3', category: 'Backend', name: 'Node.js', proficiency: 75 },
  { id: 's4', category: 'Tools', name: 'Git & GitHub', proficiency: 88 },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top Performer",
    description: "Ranked top 5% in coding contests",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "Built 10+ full-stack apps",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Open Source",
    description: "Contributed to GitHub projects",
    icon: "💻"
  }
];
