import { useTheme } from '../context/ThemeProvider';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/hero/Hero';
import TechStack from '../components/home/techstack/TechStack';
import Services from '../components/home/services/Services';
import Projects from '../components/home/projects/Projects';
import Testimonials from '../components/home/testimonials/Testimonials';
import { projects } from '../data/data';
import Contact from '../components/home/contact/Contact';
import { AlertProvider } from '../context/AlertProvider';
import Footer from '../components/home/footer/Footer';
import { Container } from '../components/ui';

function Home() {
  const { appBg } = useTheme();

  return (
    <div className={`min-h-screen ${appBg}`}>
      <Container>
        <Navigation />
        <Hero />
        <TechStack />
        <Services />
        <Projects projects={projects} />
        <Testimonials projects={projects} />
        <AlertProvider>
          <Contact />
        </AlertProvider>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
