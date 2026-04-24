import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { techIcons } from '../../utils/techIcons';
import { FaServer } from 'react-icons/fa';

const services = [
  {
    title: 'Backend Engineering',
    description:
      'Designing scalable and secure backend systems with clean architecture, optimized APIs, and production-ready deployment strategies.',
    highlights: [
      'RESTful API Development',
      'Authentication & RBAC',
      'Clean MVC Architecture',
      'Scalable System Design'
    ],
    tech: ['Laravel', 'Django', 'REST APIs', 'PHP']
  },
  {
    title: 'Database Engineering',
    description:
      'Improving application performance through efficient database design, query optimization, and indexing strategies.',
    highlights: [
      'Query Optimization',
      'Indexing & Performance',
      'Schema Design',
      'Data Handling'
    ],
    tech: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Full Stack Development',
    description:
      'Building complete web applications with seamless backend integration and modern, responsive frontend design.',
    highlights: [
      'Responsive UI',
      'API Integration',
      'Performance Optimization',
      'Clean UI/UX'
    ],
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
  }
];

const Skills = () => {
  return (
    <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          WHAT I DO
        </p>

        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
          Building Systems That Scale 🚀
        </h2>

        <p
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto'
          }}
        >
          I specialize in backend architecture, database performance, and full-stack development —
          delivering scalable, secure, and production-ready applications.
        </p>
      </div>

      {/* CARDS */}
      <Row>
        {services.map((service, index) => (
          <Col lg={4} md={6} className="mb-4" key={index}>

            <motion.div
              className="h-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >

              <Card className="portfolio-card h-100 p-4 position-relative">

                {/* TOP GRADIENT LINE */}
                <div
                  style={{
                    height: '4px',
                    width: '100%',
                    background:
                      'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                    borderRadius: '20px 20px 0 0',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />

                {/* TITLE */}
                <h5 className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
                  {service.title}
                </h5>

                {/* DESCRIPTION */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {service.description}
                </p>

                {/* HIGHLIGHTS */}
                <ul
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    paddingLeft: '18px'
                  }}
                >
                  {service.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>
                      ✔ {h}
                    </li>
                  ))}
                </ul>

                {/* TECH ICONS */}
                <div
                  style={{
                    display: 'flex',
                    gap: '14px',
                    marginTop: '20px',
                    flexWrap: 'wrap'
                  }}
                >
                  {service.tech.map((tech, i) => (
                    <div key={i} title={tech} className="tech-icon-modern">
                      {techIcons[tech] || <FaServer />}
                    </div>
                  ))}
                </div>

              </Card>

            </motion.div>

          </Col>
        ))}
      </Row>

    </section>
  );
};

export default Skills;