import { BiCodeAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { useTheme } from '../../context/ThemeProvider';
import { links } from '../../data/data';
import NavItemMobile from './NavItemMobile';

function Sidebar() {
  const { isDarkMode } = useTheme();
  return (
    <aside
      className={`sidebar ${
        isDarkMode ? 'bg-slate-600' : 'bg-white'
      } translate-x-0 translate-y-0`}
    >
      <div className="flex p-4 ">
        <button className="text-lg text-primary-400 ml-auto">
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
