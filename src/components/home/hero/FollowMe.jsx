import { useTheme } from '../../../context/ThemeProvider';
import { followMe } from '../../../data/data';
import FollowLink from './FollowLink';
function FollowMe() {
  const { paragraphText } = useTheme();
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-12 md:items-center">
      <p className={`text-sm ${paragraphText}`}>Follow Me</p>
      <div className="flex gap-4">
        {followMe?.length > 0 &&
          followMe.map(link => <FollowLink key={link.name} {...link} />)}
      </div>
    </div>
  );
}

export default FollowMe;
