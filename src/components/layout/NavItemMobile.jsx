import { useSideBar } from '../../context/SideBarProvider';
import { useTheme } from '../../context/ThemeProvider';

function NavItemMobile({ name, to, icon }) {
  const { isDarkMode } = useTheme();
  const { closeSideBar } = useSideBar();
  return (
    <li className="p-2 w-full">
      <a
        href={to}
        className={`flex items-center gap-4 ${
          isDarkMode ? 'text-slate-50' : 'text-slate-800'
        }`}
        onClick={closeSideBar}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </a>
    </li>
  );
}

export default NavItemMobile;
