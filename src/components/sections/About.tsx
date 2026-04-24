import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { techIcons } from '../../utils/techIcons';
import { FaServer } from 'react-icons/fa';

const techStack = [
  'Laravel',
  'Django',
  'REST APIs',
  'MySQL',
  'PostgreSQL',
  'RBAC',
  'Postman',
  'Tailwind CSS',
  'PHP',
  'Python',
  'Git',
  'GitHub',
  'AWS',
  'Docker',
  'Nginx',
  'Firebase',
  'Vercel'
];

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          ABOUT ME
        </p>

        <h2 className="fw-bold" style={{ fontSize: '2.8rem' }}>
          Passionate About Building{' '}
          <span className="gradient-text">
            Scalable Systems
          </span>
        </h2>
      </div>

      <Row className="align-items-center">

        {/* IMAGE */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <motion.img
            src="/Amit.jpeg"
            alt="Amit Pathak"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="about-image"
          />
        </Col>

        {/* CONTENT */}
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h3 className="fw-bold mb-3">
              Hi, I'm Amit 👋
            </h3>

            <p className="about-text">
              Backend-focused developer specializing in Laravel and Django.
              I build scalable APIs, secure systems, and optimized database-driven applications.
            </p>

            <p className="about-text">
              Currently working at TechnoBren Infotech, delivering production-grade backend
              systems with authentication, RBAC, and high-performance architecture.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="about-list">
              <li>Backend Systems (Laravel & Django)</li>
              <li>API Architecture & System Design</li>
              <li>Database Optimization</li>
              <li>Authentication & RBAC</li>
            </ul>

            {/* 🔥 TECH ICON SCROLLER */}
            <div className="tech-scroll-container">

              <motion.div
                className="tech-scroll"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: 'linear',
                }}
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <div key={i} className="tech-circle">
                    <div className="tech-icon">
                      {techIcons[tech] || <FaServer />}
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>

          </motion.div>
        </Col>

      </Row>
    </div>
  );
};

export default About;