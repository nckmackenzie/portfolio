import { AiOutlineArrowUp } from 'react-icons/ai';
import { useTheme } from '../../../context/ThemeProvider';
import { followMe } from '../../../data/data';
import { Container } from '../../ui';
import FollowLink from '../hero/FollowLink';

function Footer() {
  const { isDarkMode } = useTheme();
  const onClickHandler = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      className={`w-full ${
        isDarkMode ? 'bg-slate-800' : 'bg-white'
      } py-6 lg:py-8`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div
            className={`hidden lg:block text-3xl ${
              isDarkMode ? 'text-primary-200' : 'text-primary-800'
            } font-black font-headings`}
          >
            Lets connect
          </div>
          <div className="flex gap-4">
            {followMe?.length > 0 &&
              followMe.map(link => <FollowLink key={link.name} {...link} />)}
          </div>
          <button
            onClick={onClickHandler}
            className={`text-sm flex items-center gap-1 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            <AiOutlineArrowUp />
            <span>Back to top</span>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
