import { motion } from 'framer-motion';
import { experiences, type Experience } from '../../data/portfolio';

const ExperienceSection = () => {
  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>Experience</h2>
      <div className="position-relative mx-auto" style={{ maxWidth: '800px', paddingLeft: '10px' }}>
        {/* Vertical Line */}
        <div 
          className="position-absolute" 
          style={{ 
            left: '26px', 
            top: '8px', 
            bottom: '0', 
            width: '2px', 
            backgroundColor: 'var(--primary-color)',
            opacity: 0.3
          }} 
        />
        
        {experiences.map((exp: Experience, idx: number) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="position-relative mb-4"
            style={{ paddingLeft: '45px' }}
          >
            {/* Circle Marker */}
            <div 
              className="position-absolute rounded-circle"
              style={{
                left: '12px',
                top: '6px',
                width: '14px',
                height: '14px',
                backgroundColor: 'var(--primary-color)',
                boxShadow: '0 0 0 4px var(--bg-color)'
              }}
            />
            
            <div 
              className="p-4 rounded shadow-sm" 
              style={{ 
                backgroundColor: 'var(--card-bg, var(--bg-color))',
                borderLeft: '4px solid var(--primary-color)'
              }}
            >
              <h4 className="fw-bold mb-1" style={{ color: 'var(--text-color)' }}>{exp.role}</h4>
              <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                <span className="fw-semibold" style={{ color: 'var(--primary-color)' }}>{exp.company}</span>
                <span style={{ color: 'var(--text-color)', opacity: 0.5 }}>|</span>
                <span style={{ color: 'var(--text-color)', opacity: 0.8, fontSize: '0.9rem' }}>{exp.duration}</span>
              </div>
              <p className="mb-0" style={{ color: 'var(--text-color)', opacity: 0.9 }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
