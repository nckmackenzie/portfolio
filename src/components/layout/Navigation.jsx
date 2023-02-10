import { useTheme } from '../../context/ThemeProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { links } from '../../data/data';
import NavItem from './NavItem';
import { useSideBar } from '../../context/SideBarProvider';

function Navigation() {
  const { textClr, isDarkMode, toogleTheme } = useTheme();
  const { openSideBar } = useSideBar();
  return (
    <header className="py-2 lg:py-4 flex items-center justify-between">
      <Link to="/">
        <h2
          className={`font-headings ${
            isDarkMode ? 'text-primary-400' : 'text-accent-400'
          }  text-xl`}
        >
          Mackenzie
        </h2>
      </Link>
      <div className="center gap-2 lg:gap-8">
        <ul className="hidden md:center gap-4">
          {links?.length > 0 &&
            links.map(link => <NavItem key={link.name} {...link} />)}
        </ul>
        <button
          onClick={openSideBar}
          className={`inline-flex md:hidden ${textClr} border border-solid px-2 py-1 transition-all ${
            isDarkMode ? 'border-primary-100' : 'border-accent-200'
          } rounded hover:scale-105`}
        >
          <AiOutlineMenu />
        </button>
        <button
          className={`inline-flex px-2 py-1 outline-none text-lg ${textClr}`}
          onClick={toogleTheme}
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
}

export default Navigation;
