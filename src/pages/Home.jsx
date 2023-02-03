import { useTheme } from '../context/ThemeProvider';
import Navigation from '../components/layout/Navigation';

function Home() {
  const { appBg } = useTheme();
  return (
    <div className={`min-h-screen ${appBg}`}>
      <div className="container">
        <Navigation />
      </div>
    </div>
  );
}

export default Home;
