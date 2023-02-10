import { GrClose } from 'react-icons/gr';
import { useSideBar } from '../../context/SideBarProvider';
import { useTheme } from '../../context/ThemeProvider';
import { links } from '../../data/data';
import NavItemMobile from './NavItemMobile';

function Sidebar() {
  const { isDarkMode } = useTheme();
  const { closeSideBar, sidebarIsOpen } = useSideBar();
  return (
    <aside
      className={`sidebar ${isDarkMode ? 'bg-slate-600' : 'bg-white'} ${
        sidebarIsOpen ? 'translate-x-0 translate-y-0' : ''
      }`}
    >
      <div className="flex p-4 ">
        <button
          className="text-lg text-primary-400 ml-auto"
          onClick={closeSideBar}
        >
          <GrClose />
        </button>
      </div>
      <nav className="p-4">
        <ul className="flex flex-col gap-2">
          {links?.map(link => (
            <NavItemMobile key={link.name} {...link} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
