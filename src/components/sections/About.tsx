import { Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>About Me</h2>
      <Row className="align-items-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" 
              alt="Profile" 
              roundedCircle 
              fluid 
              className="shadow"
              style={{ maxWidth: '280px', border: '4px solid var(--primary-color)' }}
            />
          </motion.div>
        </Col>
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="mb-3" style={{ color: 'var(--text-color)' }}>Hi, I'm John Doe!</h3>
            <p className="lead mb-3" style={{ color: 'var(--text-color)' }}>
              I am a passionate Frontend Developer dedicated to creating intuitive and dynamic user experiences. 
              My expertise lies in translating complex designs into clean, responsive, and performant code.
            </p>
            <p style={{ color: 'var(--text-color)' }}>
              I specialize in React, TypeScript, and modern styling solutions. I enjoy solving challenging 
              technical problems and continuously learning new technologies to stay at the forefront of web development.
            </p>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default About;
