import { useTheme } from '../../context/ThemeProvider';
function NavItem({ name, to }) {
  const { textClr, isDarkMode } = useTheme();
  return (
    <li className="p-1">
      <a
        href={to}
        className={`nav-item ${textClr} ${
          isDarkMode ? 'hover:text-primary-400' : 'hover:text-accent-400'
        }`}
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
