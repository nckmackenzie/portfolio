import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';
import Tag from './Tag';

function Portfolio({ icon, project, description, tags, to }) {
  const { paragraphText, isDarkMode } = useTheme();
  return (
    <Card className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <div className="h-[9rem]">
        <img
          src={icon.small}
          alt="Project description"
          className="max-w-full h-full w-full"
        />
      </div>
      <div className="p-2">
        <h5
          className={`${
            isDarkMode ? 'text-primary-100' : 'text-primary-800'
          } mb-2`}
        >
          {project}
        </h5>
        <p
          className={`text-xs ${paragraphText} mb-2`}
        >{`${description.substring(0, 200)}...`}</p>
        <div className="flex gap-1 flex-wrap">
          {tags.length > 0 && tags.map(tag => <Tag key={tag} tag={tag} />)}
        </div>
      </div>
    </Card>
  );
}

export default Portfolio;
