import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TechBadge from '../common/TechBadge';
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="container d-flex align-items-center"
      style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}
    >
      <div className="row w-100 align-items-center">

        {/* LEFT */}
        <div className="col-lg-6 text-lg-start text-center">

          {/* STATUS */}
          <p
            style={{
              color: 'var(--accent-color)',
              letterSpacing: '2px',
              fontSize: '0.8rem',
              marginBottom: '10px'
            }}
          >
            ● AVAILABLE FOR WORK
          </p>

          {/* MAIN HEADING */}
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: '3.2rem', lineHeight: '1.2' }}
          >
            Backend Developer <br />
            <span
              style={{
                background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Building Scalable API Systems
            </span>
          </h1>

          {/* NAME */}
          <h5 className="mb-3" style={{ color: 'var(--text-secondary)' }}>
            Amit Pathak
          </h5>

          {/* DESCRIPTION */}
          <p
            className="mb-4"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: '1.7'
            }}
          >
            Specialized in Laravel and Django, I design and develop secure, high-performance backend systems,
            REST APIs, and optimized database architectures for real-world applications.
            Currently working as a Software Developer at TechnoBren Infotech.
          </p>

          {/* TECH STACK */}


          <div
            className="d-flex gap-4 flex-wrap mb-4 justify-content-lg-start justify-content-center"
          >
            {[
              'PHP',
              'Laravel',
              'Python',
              'Django',
              'MySQL',
              'PostgreSQL',
            ].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-3 flex-wrap mb-5 justify-content-lg-start justify-content-center">
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              View Projects →
            </Button>

            <a
              className="btn btn-outline-secondary btn-lg"
              href="/AmitPathak.pdf"
              download="AmitPathak.pdf"
            >
              Download Resume
            </a>
          </div>

          {/* STATS (PRO STYLE) */}
          <div className="d-flex gap-5 justify-content-lg-start justify-content-center">

            <div>
              <h4 className="fw-bold">15+</h4>
              <small style={{ color: 'var(--text-secondary)' }}>
                Projects Completed
              </small>
            </div>

            <div>
              <h4 className="fw-bold">1+ Years</h4>
              <small style={{ color: 'var(--text-secondary)' }}>
                Backend Experience
              </small>
            </div>

            <div>
              <h4 className="fw-bold">15+</h4>
              <small style={{ color: 'var(--text-secondary)' }}>
                Technologies Used
              </small>
            </div>

          </div>
        </div>

        {/* RIGHT FLOATING CARDS */}
        <div className="col-lg-6 d-none d-lg-block position-relative">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ position: 'absolute', top: '0%', left: '10%' }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Scalable API Architecture</small>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ position: 'absolute', top: '35%', right: '5%' }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Secure Authentication & RBAC</small>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ position: 'absolute', bottom: '0%', left: '20%' }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Database Optimization & Performance</small>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Hero;