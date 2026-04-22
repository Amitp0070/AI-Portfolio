import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion, type Variants } from 'framer-motion';
import { projects, type Project } from '../../data/portfolio';
import ProjectCard from '../common/ProjectCard';
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
    // Don't set selectedProject to null immediately so the modal animates out smoothly with the data
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>Featured Projects</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <motion.div variants={itemVariants} className="h-100">
                <ProjectCard project={project} onClick={() => handleShowModal(project)} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
      
      <ProjectModal 
        show={showModal} 
        onHide={handleCloseModal} 
        project={selectedProject} 
      />
    </>
  );
};

export default Projects;
