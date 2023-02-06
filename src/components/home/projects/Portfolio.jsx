import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';

function Portfolio({ icon, project, description }) {
  const { paragraphText } = useTheme();
  return (
    <Card className="w-full bg-slate-800">
      <div className="h-[9rem]">
        <img
          src={icon.small}
          alt="Project description"
          className="max-w-full h-full w-full"
        />
      </div>
      <div className="p-2 ">
        <h5 className="text-primary-100 mb-2">{project}</h5>
        <p className={`text-xs ${paragraphText} mb-2`}>{description}</p>
        <span className="text-[10px] bg-primary-300 text-accent-400 inline-block px-1">
          HTML
        </span>
      </div>
    </Card>
  );
}

export default Portfolio;
