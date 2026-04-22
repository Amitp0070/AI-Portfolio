import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="display-2 fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
          John Doe
        </h1>
        <h2 className="h4 mb-4" style={{ color: 'var(--primary-color)' }}>
          Frontend Developer
        </h2>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px', color: 'var(--text-color)' }}>
          Building beautiful, responsive, and performant web applications with modern technologies. Let's create something amazing together.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
            style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
          >
            View Projects
          </Button>
          <a
            className="btn btn-outline-secondary btn-lg"
            href="/resume.pdf"
            download="Amit Pathak.pdf"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
