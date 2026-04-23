import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const techStack = [
  'Laravel', 'Django', 'REST APIs', 'MySQL',
  'PostgreSQL', 'RBAC', 'Postman', 'Tailwind'
];

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          ABOUT ME
        </p>

        <h2
          className="fw-bold"
          style={{
            fontSize: '2.8rem',
            lineHeight: '1.3'
          }}
        >
          Passionate About Building{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
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
            style={{
              width: '260px',
              borderRadius: '20px',
              border: '3px solid var(--primary-color)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
            }}
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

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              I’m a backend developer focused on building reliable and scalable systems.
              I work mainly with Laravel and Django, designing APIs and handling complex data.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Currently working at TechnoBren Infotech, building production-level backend systems
              with authentication and optimized database performance.
            </p>

            {/* HIGHLIGHTS */}
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '18px' }}>
              <li>⚙️ Backend Developer (Laravel & Django)</li>
              <li>🚀 API Design & System Architecture</li>
              <li>🗄️ Database Optimization</li>
              <li>🔐 Authentication & RBAC</li>
            </ul>

            {/* 🔥 TECH SCROLL (NOW CORRECT POSITION) */}
            <div
              style={{
                marginTop: '20px',
                overflow: 'hidden',
                maxWidth: '100%'
              }}
            >
              <motion.div
                style={{
                  display: 'flex',
                  gap: '14px',
                  width: 'max-content'
                }}
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: 'linear'
                }}
              >
                {[...techStack, ...techStack].map((tech, i) => {

                  const getColor = (tech: string) => {
                    switch (tech) {
                      case 'Laravel': return '#ff2d20';
                      case 'Django': return '#0c4b33';
                      case 'MySQL': return '#00758f';
                      case 'PostgreSQL': return '#336791';
                      case 'REST APIs': return '#6c63ff';
                      case 'RBAC': return '#9333ea';
                      case 'Postman': return '#ff6c37';
                      case 'Tailwind': return '#38bdf8';
                      default: return '#6c63ff';
                    }
                  };

                  return (
                    <span
                      key={i}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap',
                        background: `${getColor(tech)}20`,
                        color: getColor(tech),
                        border: `1px solid ${getColor(tech)}40`
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>

          </motion.div>
        </Col>

      </Row>

    </div>
  );
};

export default About;