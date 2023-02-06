import { useTheme } from '../context/ThemeProvider';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/hero/Hero';
import TechStack from '../components/home/techstack/TechStack';

function Home() {
  const { appBg } = useTheme();
  return (
    <div className={`min-h-screen ${appBg}`}>
      <div className="container">
        <Navigation />
        <Hero />
        <TechStack />
      </div>
    </div>
  );
}

export default Home;
