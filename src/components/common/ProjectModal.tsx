import { Modal, Button, Badge } from 'react-bootstrap';
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
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered
      contentClassName="border-0 shadow-lg"
    >
      <Modal.Header closeButton style={{ backgroundColor: 'var(--bg-color)', borderBottomColor: 'var(--section-bg)' }}>
        <Modal.Title className="fw-bold" style={{ color: 'var(--primary-color)' }}>
          {project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0" style={{ backgroundColor: 'var(--bg-color)' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-100" 
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <div className="p-4">
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
          <p style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {project.description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'var(--bg-color)', borderTopColor: 'var(--section-bg)' }}>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
        {project.githubLink && (
          <Button 
            variant="outline-secondary" 
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center gap-2"
          >
            <BsGithub /> View Code
          </Button>
        )}
        {project.liveDemo && (
          <Button 
            variant="primary" 
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center gap-2"
            style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
          >
            <BsBoxArrowUpRight /> Live Demo
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
