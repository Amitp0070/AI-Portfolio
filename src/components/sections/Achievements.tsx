import { Row, Col, Card } from 'react-bootstrap';
import { motion, type Variants } from 'framer-motion';
import { achievements, type Achievement } from '../../data/portfolio';

const AchievementsSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>Achievements</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <Row className="justify-content-center">
          {achievements.map((achievement: Achievement) => (
            <Col lg={4} md={6} className="mb-4" key={achievement.id}>
              <motion.div variants={itemVariants} className="h-100">
                <motion.div 
                  className="h-100"
                >
                  <Card className="portfolio-card h-100 text-center p-4">
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                      <div className="display-4 mb-3" style={{ color: 'var(--primary-color)' }}>
                        {achievement.icon}
                      </div>
                      <Card.Title className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
                        {achievement.title}
                      </Card.Title>
                      <Card.Text style={{ color: 'var(--text-color)', opacity: 0.85 }}>
                        {achievement.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </>
  );
};

export default AchievementsSection;
