import { useTheme } from '../../context/ThemeProvider';

function Card({ children, className }) {
  const { cardBg } = useTheme();
  return (
    <div
      className={`overflow-hidden shadow sm:rounded-lg ${cardBg} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
