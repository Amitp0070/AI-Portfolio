import { Modal, Button } from 'react-bootstrap';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import type { Project } from '../../data/portfolio';

interface ProjectModalProps {
  show: boolean;
  onHide: () => void;
  project: Project | null;
}

const ProjectModal = ({ show, onHide, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body className="project-modal">

        <img
          src={project.image}
          alt={project.title}
          className="w-100 project-modal-img"
        />

        <div className="p-4">

          <h4 className="fw-bold mb-3">{project.title}</h4>

          <p className="project-modal-desc">
            {project.description}
          </p>

          {/* TECH */}
          <div className="d-flex flex-wrap gap-2 mt-3">
            {project.techStack.map((tech, i) => (
              <span key={i} className="project-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="d-flex gap-3 mt-4">

            {project.githubLink && (
              <Button
                variant="outline-light"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                <BsGithub /> Code
              </Button>
            )}

            {project.liveDemo && (
              <Button
                className="project-btn"
                onClick={() => window.open(project.liveDemo, '_blank')}
              >
                <BsBoxArrowUpRight /> Live Demo
              </Button>
            )}

          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;