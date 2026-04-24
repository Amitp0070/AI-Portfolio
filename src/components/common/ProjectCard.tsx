import { Card } from 'react-bootstrap';
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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Card className="project-card h-100 border-0">

        {/* IMAGE */}
        <div className="project-img">
          <img
            src={project.image}
            alt={project.title}
            className="w-100 h-100"
          />
        </div>

        <div className="p-4 d-flex flex-column h-100">

          {/* TITLE */}
          <h5 className="fw-bold mb-2 project-title">
            {project.title}
          </h5>

          {/* DESCRIPTION (CLAMPED) */}
          <div className="project-desc-wrapper">
            <p className="project-desc">
              {project.description}
            </p>
          </div>

          {/* TECH STACK */}
          <div className="d-flex flex-wrap gap-2 mt-2">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span key={i} className="project-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="d-flex gap-3 mt-auto pt-3">

            {project.githubLink && (
              <span
                className="project-link"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubLink, '_blank');
                }}
              >
                <BsGithub /> GitHub
              </span>
            )}

            {project.liveDemo && (
              <span
                className="project-link primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveDemo, '_blank');
                }}
              >
                <BsBoxArrowUpRight /> Live
              </span>
            )}

          </div>

        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;