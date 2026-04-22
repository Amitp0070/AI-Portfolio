import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid rgba(128,128,128,0.1)' }}>
      <Container className="py-5">
        <Row className="gy-4">
          <Col lg={4} md={12}>
            <h5 className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>AI Portfolio</h5>
            <p style={{ color: 'var(--text-color)', opacity: 0.7 }}>
              Frontend Developer creating intuitive and dynamic web experiences.
            </p>
          </Col>
          
          <Col lg={4} md={6}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="footer-link text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="footer-link text-decoration-none">About</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="footer-link text-decoration-none">Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="footer-link text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>Connect</h6>
            <div className="d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-icon">
                <BsGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon">
                <BsLinkedin size={22} />
              </a>
              <a href="mailto:hello@example.com" className="footer-icon">
                <BsEnvelope size={22} />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" style={{ borderColor: 'var(--text-color)', opacity: 0.1 }} />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="mb-0 small" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
            Built with React & Bootstrap
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
