import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useRef, useState } from 'react';

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navRef = useRef<HTMLDivElement | null>(null);

  // ✅ active section state
  const [activeSection, setActiveSection] = useState('home');

  // ✅ scroll effects (shadow + active section)
  useEffect(() => {
    const handleScroll = () => {
      // Navbar shadow
      if (navRef.current) {
        if (window.scrollY > 20) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }

      // Active section detection
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ smooth scroll
  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = 100;
      const y =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <Navbar ref={navRef} className="glass-nav" expand="lg" fixed="top">
      <Container className="px-4">

        {/* LOGO */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          style={{ fontWeight: 600 }}
        >
          <span style={{ color: 'var(--primary-color)' }}>Amit Pathak</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          {/* NAV LINKS */}
          <Nav className="mx-auto flex-nowrap" style={{ fontSize: '0.9rem' }}>
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {/* CTA */}
            <Button variant="primary">
              Let’s Build →
            </Button>

            {/* THEME TOGGLE */}
            <Button
              variant="outline-secondary"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
              onClick={toggleTheme}
            >
              {isDark ? <BsSun size={16} /> : <BsMoon size={16} />}
            </Button>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;