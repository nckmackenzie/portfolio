import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeProvider';

function FollowLink({ link, icon, name }) {
  const { isDarkMode } = useTheme();
  return (
    <Link to={link} target="_blank">
      <span
        className={`${
          isDarkMode ? 'text-white' : 'text-black'
        } outline-none focus:outline-none transition-all hover:scale-105`}
      >
        {icon}
      </span>
    </Link>
  );
}

export default FollowLink;
