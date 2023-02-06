import { createContext, useContext, useState } from 'react';

const themeContext = createContext({
  isDarkMode: false,
  appBg: '',
  cardBg: '',
  textClr: '',
  paragraphText: '',
  sectionTitle: '',
  toogleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // colors
  const appBg = isDarkMode ? 'bg-grayish-dark' : 'bg-grayish-light';
  const cardBg = isDarkMode ? 'bg-grayish-dark-card' : 'bg-white';
  const textClr = isDarkMode ? 'text-grayish-light' : 'text-grayish-dark';
  const paragraphText = isDarkMode ? 'text-gray-400' : 'text-gray-700';
  const sectionTitle = isDarkMode ? 'text-primary-200' : 'text-accent-800';

  //   toggle theme
  const toogleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <themeContext.Provider
      value={{
        isDarkMode,
        appBg,
        cardBg,
        textClr,
        paragraphText,
        toogleTheme,
        sectionTitle,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

//custom hook
export const useTheme = () => {
  return useContext(themeContext);
};
