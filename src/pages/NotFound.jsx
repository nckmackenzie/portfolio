import { Link } from 'react-router-dom';
import { Card } from '../components/ui';
import { useTheme } from '../context/ThemeProvider';
function NotFound() {
  const { appBg, isDarkMode, textClr } = useTheme();
  return (
    <div className={`min-h-screen px-2 md:px-0 font-bodytext center  ${appBg}`}>
      <Card className="w-full md:w-1/3 px-6 py-4">
        <h5
          className={`font-headings mb-8 text-center text-5xl md:text-7xl font-bold ${
            isDarkMode ? 'text-primary-200' : 'text-primary-800'
          }`}
        >
          404
        </h5>
        <p
          className={`text-center font-semibold text-xl md:text-2xl mb-2 ${textClr}`}
        >
          Page Not Found
        </p>
        <p
          className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}
        >
          The page you are trying to access is currently unavailable.{' '}
        </p>
        <div className="lg:center">
          <Link to="/" className="btn btn-primary btn-sm-block ">
            &larr; Home
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default NotFound;
