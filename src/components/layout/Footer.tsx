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
    <footer
      style={{
        background: 'var(--card-gradient)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <Container className="py-5">
        <Row className="gy-4">

          {/* LEFT */}
          <Col lg={4} md={12}>
            <h5
              className="fw-bold mb-3"
              style={{ color: 'var(--text-color)' }}
            >
              Amit Pathak
            </h5>

            <p style={{ color: 'var(--text-secondary)' }}>
              Full Stack Developer focused on building scalable backend systems
              and modern web experiences.
            </p>
          </Col>

          {/* LINKS */}
          <Col lg={4} md={6}>
            <h6
              className="fw-bold mb-3"
              style={{ color: 'var(--text-color)' }}
            >
              Quick Links
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                    className="footer-link text-decoration-none"
                    style={{
                      color: 'var(--text-secondary)',
                      transition: '0.3s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'var(--primary-color)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'var(--text-secondary)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* SOCIAL */}
          <Col lg={4} md={6}>
            <h6
              className="fw-bold mb-3"
              style={{ color: 'var(--text-color)' }}
            >
              Connect
            </h6>

            <div className="d-flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Amitp0070"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <BsGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amit-pathak-558971277/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <BsLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:amitpathak8327@gmail.com"
                className="footer-icon"
              >
                <BsEnvelope size={20} />
              </a>

            </div>
          </Col>

        </Row>

        {/* DIVIDER */}
        <hr
          className="my-4"
          style={{
            borderColor: 'var(--card-border)',
          }}
        />

        {/* BOTTOM */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          <p
            className="mb-2 mb-md-0 small"
            style={{ color: 'var(--text-secondary)' }}
          >
            &copy; {currentYear} Amit Pathak. All rights reserved.
          </p>

          <p
            className="mb-0 small"
            style={{ color: 'var(--text-secondary)' }}
          >
            Built with React ⚛️ & Bootstrap
          </p>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;