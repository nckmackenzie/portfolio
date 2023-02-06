import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';
function Service({ icon, name, description }) {
  const { paragraphText, isDarkMode } = useTheme();
  return (
    <Card className="w-full px-2 py-4 flex flex-col items-center text-primary-200">
      <span>{icon}</span>
      <div
        className={`mt-6 mb-2 text-base md:text-lg font-semibold ${
          isDarkMode ? 'text-primary-100' : 'text-primary-800'
        }`}
      >
        {name}
      </div>
      <p className={`text-xs md:text-sm ${paragraphText}`}>{description}</p>
    </Card>
  );
}

export default Service;
