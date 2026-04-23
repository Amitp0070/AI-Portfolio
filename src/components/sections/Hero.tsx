import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

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

        {/* LEFT CONTENT */}
        <div className="col-lg-6 text-lg-start text-center">

          {/* Badge */}
          <p
            style={{
              color: 'var(--accent-color)',
              letterSpacing: '2px',
              fontSize: '0.9rem'
            }}
          >
            ● OPEN FOR PROJECTS
          </p>

          {/* MAIN HEADING */}
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: '3.5rem', lineHeight: '1.2' }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6c63ff, #00c6ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Amit Pathak
            </span>
            <br />
            Backend Developer Who Builds Systems That Scale
          </h1>

          <p
            className="mb-4"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '520px'
            }}
          >
            I specialize in Laravel and Django, building scalable APIs, secure backend systems,
            and optimized database-driven applications. Currently working as a Software Developer
            at TechnoBren Infotech.
          </p>

          {/* <p style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
            Laravel • Django • REST APIs • MySQL • PostgreSQL
          </p> */}
          {/* BUTTONS */}
          <div className="d-flex gap-3 flex-wrap mb-5 justify-content-lg-start justify-content-center">
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              View My Work →
            </Button>

            <a
              className="btn btn-outline-light btn-lg"
              href="/resume.pdf"
              download="Amit Pathak.pdf"
            >
              Download Resume
            </a>
          </div>

          {/* STATS */}
          <div className="d-flex gap-5 justify-content-lg-start justify-content-center">
            <div>
              <h4>15+</h4>
              <small style={{ color: 'var(--text-secondary)' }}>Projects</small>
            </div>
            <div>
              <h4>2+</h4>
              <small style={{ color: 'var(--text-secondary)' }}>Years Exp</small>
            </div>
            <div>
              <h4>10+</h4>
              <small style={{ color: 'var(--text-secondary)' }}>Tech Stack</small>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className="col-lg-6 d-none d-lg-block position-relative">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '0%',
              left: '10%'
            }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Clean API architecture & fast delivery</small>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              top: '30%',
              right: '5%'
            }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Scalable backend systems built right</small>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '20%'
            }}
            className="portfolio-card p-3"
          >
            ⭐⭐⭐⭐⭐ <br />
            <small>Secure & optimized database design</small>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;