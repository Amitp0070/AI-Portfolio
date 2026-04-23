import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// 🎨 TECH COLOR SYSTEM
const getColor = (tech: string) => {
  switch (tech) {
    case 'Laravel': return '#ff2d20';
    case 'Django': return '#0c4b33';
    case 'MySQL': return '#00758f';
    case 'PostgreSQL': return '#336791';
    case 'REST API':
    case 'REST APIs': return '#6c63ff';
    case 'RBAC': return '#9333ea';
    case 'PHP': return '#777bb4';
    case 'Spatie': return '#8b5cf6';
    default: return '#6c63ff';
  }
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="h-100"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >

      <Card
        className="h-100 border-0"
        style={{
          borderRadius: '22px',
          background: 'var(--card-gradient)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--card-border)',
          boxShadow: 'var(--card-shadow)',
          padding: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >

        {/* 🔥 TOP GRADIENT LINE */}
        <div
          style={{
            height: '4px',
            width: '100%',
            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />

        {/* CATEGORY */}
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--accent-color)',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}
        >
          ▶ Backend Project
        </p>

        {/* TITLE */}
        <h4
          className="fw-bold mb-2"
          style={{
            color: 'var(--text-color)',
            fontSize: '1.3rem'
          }}
        >
          {project.title}
        </h4>

        {/* DESCRIPTION */}
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.6'
          }}
        >
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
          {project.techStack.map((tech, i) => {
            const color = getColor(tech);

            return (
              <span
                key={i}
                style={{
                  fontSize: '0.75rem',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: `${color}20`,
                  color: color,
                  border: `1px solid ${color}40`
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div className="d-flex gap-3 mt-auto">

          {project.githubLink && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubLink, '_blank');
              }}
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <BsGithub /> GitHub →
            </span>
          )}

          {project.liveDemo && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveDemo, '_blank');
              }}
              style={{
                fontSize: '0.85rem',
                color: 'var(--primary-color)',
                cursor: 'pointer'
              }}
            >
              <BsBoxArrowUpRight /> Live →
            </span>
          )}

        </div>

      </Card>
    </motion.div>
  );
};

export default ProjectCard;