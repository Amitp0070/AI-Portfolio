import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { projects, type Project } from '../../data/portfolio';
import ProjectModal from '../common/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 🎨 TECH COLOR SYSTEM (same as About)
  const getColor = (tech: string) => {
    switch (tech) {
      case 'Laravel': return '#ff2d20';
      case 'Django': return '#0c4b33';
      case 'MySQL': return '#00758f';
      case 'PostgreSQL': return '#336791';
      case 'REST API':
      case 'REST APIs': return '#6c63ff';
      case 'RBAC': return '#9333ea';
      case 'Postman': return '#ff6c37';
      case 'Tailwind CSS':
      case 'Tailwind': return '#38bdf8';
      default: return '#6c63ff';
    }
  };

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          MY WORK
        </p>

        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
          Featured Projects 🚀
        </h2>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Real-world applications showcasing backend architecture, APIs, and full-stack solutions.
        </p>
      </div>

      {/* PROJECT GRID */}
      <Row>
        {projects.map((project, index) => (
          <Col lg={4} md={6} sm={12} className="mb-4" key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(108,99,255,0.25)"
              }}
              viewport={{ once: true }}
              onClick={() => handleShowModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: '20px',
                  background: 'var(--card-gradient)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >

                {/* 🔥 TOP IMAGE */}
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* 🔥 CONTENT */}
                <div style={{ padding: '20px' }}>

                  {/* TOP GRADIENT LINE */}
                  <div
                    style={{
                      height: '3px',
                      width: '100%',
                      background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                      marginBottom: '15px'
                    }}
                  />

                  {/* ROLE BADGE */}
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      background: 'rgba(108,99,255,0.15)',
                      border: '1px solid rgba(108,99,255,0.3)',
                      marginBottom: '10px'
                    }}
                  >
                    Backend Project
                  </div>

                  {/* TITLE */}
                  <h4 className="fw-bold mb-2" style={{ color: 'var(--text-color)' }}>
                    {project.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          background: `${getColor(tech)}20`,
                          color: getColor(tech),
                          border: `1px solid ${getColor(tech)}40`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </Card>
            </motion.div>

          </Col>
        ))}
      </Row>

      {/* MODAL */}
      <ProjectModal
        show={showModal}
        onHide={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;