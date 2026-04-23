import { Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Backend Systems',
    icon: '⚙️',
    description:
      'Designing production-ready backend systems with clean architecture, secure authentication, and scalable APIs.',
    highlights: ['REST APIs', 'RBAC', 'Auth Systems'],
    tech: ['Laravel', 'Django']
  },
  {
    title: 'Database Optimization',
    icon: '🗄️',
    description:
      'Optimizing database performance with indexing, query tuning, and efficient schema design.',
    highlights: ['Query Speed', 'Indexing', 'Data Modeling'],
    tech: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Full-Stack Development',
    icon: '🌐',
    description:
      'Building complete applications with backend logic and clean, responsive frontend UI.',
    highlights: ['Responsive UI', 'API Integration', 'Performance'],
    tech: ['HTML', 'Tailwind', 'Bootstrap']
  }
];
const Skills = () => {

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          WHAT I DO
        </p>

        <h2 className="fw-bold mb-3">
          Building Systems That Scale 🚀
        </h2>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          I focus on backend architecture, database performance, and full-stack development to deliver reliable and scalable applications.
        </p>
      </div>

      <Row>
        {services.map((service, index) => (
          <Col lg={4} md={6} className="mb-4" key={index}>

            <motion.div
              className="h-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: 0 }}
              viewport={{ once: true }}
            >

              <Card className="portfolio-card h-100 p-4 position-relative">

                {/* TOP GLOW LINE */}
                <div
                  style={{
                    height: '4px',
                    width: '100%',
                    background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                    borderRadius: '20px 20px 0 0',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />

                {/* ICON */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    marginBottom: '15px'
                  }}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h5 className="fw-bold mb-2" style={{ color: 'var(--text-color)' }}>
                  {service.title}
                </h5>

                {/* DESCRIPTION */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {service.description}
                </p>

                {/* HIGHLIGHTS */}
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {service.highlights.map((h, i) => (
                    <li key={i}>✔ {h}</li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="mt-auto">
                  {service.tech.map((tech, i) => (
                    <Badge
                      pill
                      key={i}
                      className="me-2 mb-2 fw-normal"
                      style={{
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff',
                        padding: '0.4rem 0.8rem'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

              </Card>

            </motion.div>

          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;