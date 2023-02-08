import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';

function InfoCard({ icon, details }) {
  const { isDarkMode } = useTheme();
  return (
    <Card
      className={`w-full ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
      } py-2 px-4`}
    >
      <div className="text-center mb-4">
        <div className="bg-primary-400 w-10 h-10 rounded-full mx-auto text-accent-400 flex items-center justify-center">
          <span>{icon}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {details.length > 0 &&
          details.map(detail => (
            <div
              className="flex items-center justify-between text-xs md:text-sm"
              key={detail.name}
            >
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {`${detail.name}:`}
              </span>
              <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                {`${detail.value}`}
              </span>
            </div>
          ))}
      </div>
    </Card>
  );
}

export default InfoCard;
