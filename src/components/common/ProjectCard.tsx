import { Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="h-100"
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Card className="portfolio-card h-100 overflow-hidden">
        <div style={{ overflow: 'hidden', height: '220px' }}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
          />
        </div>
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
            {project.title}
          </Card.Title>
          <Card.Text style={{ color: 'var(--text-color)', opacity: 0.85 }}>
            {project.description}
          </Card.Text>

          <div className="mb-4">
            {project.techStack.map((tech, idx) => (
              <Badge
                pill
                key={idx}
                className="me-2 mb-2 fw-normal"
                style={{ backgroundColor: 'var(--primary-color)', color: '#fff', padding: '0.4rem 0.8rem' }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="d-flex gap-2 mt-auto">
            {project.githubLink && (
              <Button
                variant="outline-secondary"
                size="sm"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center gap-2 px-3"
                onClick={(e) => e.stopPropagation()}
              >
                <BsGithub /> Code
              </Button>
            )}
            {project.liveDemo && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center gap-2 px-3"
                style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <BsBoxArrowUpRight /> Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
