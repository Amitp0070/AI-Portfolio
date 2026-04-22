import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../hooks/useTheme';

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Navbar fixed="top" expand="lg" className="glass-nav shadow-sm">
      <Container>
        <Navbar.Brand href="#home" onClick={(e) => handleScroll(e, 'home')}>
          <strong>AI Portfolio</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</Nav.Link>
            <Nav.Link href="#achievements" onClick={(e) => handleScroll(e, 'achievements')}>Achievements</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Nav.Link>
          </Nav>
          <Button 
            variant="outline-secondary" 
            className="rounded-circle p-2 d-flex align-items-center justify-content-center" 
            style={{ width: '40px', height: '40px' }}
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
