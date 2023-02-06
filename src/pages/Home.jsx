import { useTheme } from '../context/ThemeProvider';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/hero/Hero';
import TechStack from '../components/home/techstack/TechStack';
import Services from '../components/home/services/Services';
import Projects from '../components/home/projects/Projects';

function Home() {
  const { appBg } = useTheme();
  return (
    <div className={`min-h-screen ${appBg}`}>
      <div className="container">
        <Navigation />
        <Hero />
        <TechStack />
        <Services />
        <Projects />
      </div>
    </div>
  );
}

export default Home;
