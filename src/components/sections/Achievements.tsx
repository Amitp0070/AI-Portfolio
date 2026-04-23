import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { achievements, type Achievement } from '../../data/portfolio';

const AchievementsSection = () => {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          ACHIEVEMENTS
        </p>

        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
          Highlights & Milestones 🏆
        </h2>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Key accomplishments showcasing my growth, experience, and contributions in development.
        </p>
      </div>

      {/* GRID */}
      <Row className="justify-content-center">
        {achievements.map((achievement: Achievement, index) => (
          <Col lg={4} md={6} className="mb-4" key={achievement.id}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(108,99,255,0.25)"
              }}
              viewport={{ once: true }}
            >

              <Card
                className="h-100 border-0 text-center"
                style={{
                  borderRadius: '20px',
                  background: 'var(--card-gradient)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '30px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >

                {/* 🔥 TOP GRADIENT LINE */}
                <div
                  style={{
                    height: '4px',
                    width: '100%',
                    background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />

                <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                  {/* ICON CIRCLE */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'rgba(108,99,255,0.15)',
                      border: '1px solid rgba(108,99,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      marginBottom: '20px'
                    }}
                  >
                    {achievement.icon}
                  </div>

                  {/* TITLE */}
                  <Card.Title
                    className="fw-bold mb-2"
                    style={{ color: 'var(--text-color)', fontSize: '1.1rem' }}
                  >
                    {achievement.title}
                  </Card.Title>

                  {/* DESCRIPTION */}
                  <Card.Text
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
                    }}
                  >
                    {achievement.description}
                  </Card.Text>

                </Card.Body>
              </Card>

            </motion.div>

          </Col>
        ))}
      </Row>

    </div>
  );
};

export default AchievementsSection;