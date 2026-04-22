import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion, type Variants } from 'framer-motion';
import { skills, type Skill } from '../../data/portfolio';

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Tools'] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>My Skills</h2>
      <Row>
        {categories.map((category, idx) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <Col lg={4} md={12} className="mb-4" key={idx}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="h-100"
              >
                <motion.div 
                  className="h-100"
                >
                  <Card 
                    className="portfolio-card h-100" 
                  >
                    <div style={{ height: '4px', backgroundColor: 'var(--primary-color)' }} />
                    <Card.Body className="p-4">
                      <Card.Title className="mb-4 fw-bold text-center" style={{ color: 'var(--text-color)' }}>
                        {category}
                      </Card.Title>
                      {categorySkills.map((skill: Skill) => (
                        <motion.div key={skill.id} variants={itemVariants} className="mb-4 last-child-mb-0">
                          <div className="d-flex justify-content-between mb-2">
                            <span style={{ color: 'var(--text-color)', fontWeight: 500 }}>{skill.name}</span>
                            <span style={{ color: 'var(--text-color)', fontSize: '0.85rem', opacity: 0.8 }}>
                              {skill.proficiency}%
                            </span>
                          </div>
                          <ProgressBar 
                            now={skill.proficiency} 
                            style={{ height: '6px' }}
                          />
                        </motion.div>
                      ))}
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Skills;
