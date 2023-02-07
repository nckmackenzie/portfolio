import { useTheme } from '../context/ThemeProvider';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/hero/Hero';
import TechStack from '../components/home/techstack/TechStack';
import Services from '../components/home/services/Services';
import Projects from '../components/home/projects/Projects';
import Testimonials from '../components/home/testimonials/Testimonials';
import { projects } from '../data/data';

function Home() {
  const { appBg } = useTheme();

  return (
    <div className={`min-h-screen ${appBg}`}>
      <div className="container">
        <Navigation />
        <Hero />
        <TechStack />
        <Services />
        <Projects projects={projects} />
        <Testimonials projects={projects} />
      </div>
    </div>
  );
}

export default Home;
