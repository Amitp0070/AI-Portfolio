import { Container } from 'react-bootstrap';
import NavigationBar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import ExperienceSection from './components/sections/Experience';
import AchievementsSection from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      
      {/* Add margin top so content is not hidden behind the fixed navbar */}
      <main className="flex-grow-1" style={{ marginTop: '70px' }}>
        <Container className="py-4">
          
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="py-5">
            <About />
          </section>

          <section id="skills" className="py-5">
            <Skills />
          </section>

          <section id="projects" className="py-5">
            <Projects />
          </section>

          <section id="experience" className="py-5">
            <ExperienceSection />
          </section>

          <section id="achievements" className="py-5">
            <AchievementsSection />
          </section>

          <section id="contact" className="py-5 mb-5">
            <Contact />
          </section>

        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
