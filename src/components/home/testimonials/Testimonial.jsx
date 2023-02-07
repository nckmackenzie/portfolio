import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';

function Testimonial({ name, review, position, avatar }) {
  const { isDarkMode, paragraphText } = useTheme();
  return (
    <Card
      className={`w-full ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
      } py-2 px-4`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="client avatar"
            className="w-8 h-8 rounded-full text-primary-400"
          />
          <div className="flex flex-col">
            <div
              className={`text-xs font-semibold ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              {name}
            </div>
            <div
              className={`text-[10px] ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {position}
            </div>
          </div>
        </div>
        <p className={`text-xs ${paragraphText}`}>{review}</p>
      </div>
    </Card>
  );
}

export default Testimonial;
