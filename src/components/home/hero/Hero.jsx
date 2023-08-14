import { AiOutlineMail, AiOutlineCloudDownload } from 'react-icons/ai';
import { useTheme } from '../../../context/ThemeProvider';
import useMediaQuery from '../../../hooks/use-media-query';
import desktopImage from '../../../assets/images/placeholder_desktop.png';
import mobileImage from '../../../assets/images/placeholder_mobile.png';
import { Button } from '../../ui';
import FollowMe from './FollowMe';

function Hero() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { textClr, paragraphText } = useTheme();
  return (
    <div className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="lg:self-center">
        <h1 className={`text-3xl mb-4 md:text-5xl font-bold ${textClr}`}>
          <span className="block">
            I'm <span className="text-primary-400">Nick Mackenzie</span>,
          </span>{' '}
          <span className="block">A Software Developer</span>
        </h1>
        <p className={`text-sm mb-1 md:text-base ${paragraphText}`}>
          Am an experienced software developer who has been on the industry for
          over 5years. I have a wide range of experience with various
          programming languages, frameworks and architectures, and am able to
          design and develop high-quality software solutions.
        </p>
        <p className={`text-sm mb-6 lg:mb-8 md:text-base ${paragraphText}`}>
          Am an excellent problem solver and able to quickly identify and
          resolve complex issues.Am also an effective communicator whos is able
          to work with a wide variety of stakeholders and teams.
        </p>
        <div className="flex gap-4 mb-8 lg:mb-12">
          <a
            href="#contact"
            className="flex items-center gap-2 btn btn-primary"
          >
            <span className="inline-block">Hire me</span>
            <AiOutlineMail size={16} />
          </a>
          {/* <Button
            variant="Outlined"
            className={`flex items-center gap-2 ${textClr}`}
          >
            <span className="inline-block">Download CV</span>
            <AiOutlineCloudDownload size={16} />
          </Button> */}
        </div>
        <FollowMe />
      </div>
      {/* <img
        src={isDesktop ? desktopImage : mobileImage}
        alt="Nicholas Mackenzie"
        className="w-full"
      /> */}
    </div>
  );
}

export default Hero;
