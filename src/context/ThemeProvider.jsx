import { createContext, useContext, useState } from 'react';

const themeContext = createContext({
  isDarkMode: false,
  appBg: '',
  cardBg: '',
  textClr: '',
  toogleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // colors
  const appBg = isDarkMode ? 'bg-grayish-dark' : 'bg-grayish-light';
  const cardBg = isDarkMode ? 'bg-grayish-dark-card' : 'bg-white';
  const textClr = isDarkMode ? 'text-grayish-light' : 'text-grayish-dark';

  //   toggle theme
  const toogleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <themeContext.Provider
      value={{ isDarkMode, appBg, cardBg, textClr, toogleTheme }}
    >
      {children}
    </themeContext.Provider>
  );
};

//custom hook
export const useTheme = () => {
  return useContext(themeContext);
};
