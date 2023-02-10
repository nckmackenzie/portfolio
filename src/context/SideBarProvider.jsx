import { createContext, useContext, useState } from 'react';

const sideBarContext = createContext({
  sidebarIsOpen: false,
  openSideBar: () => {},
  closeSideBar: () => {},
});

export const SideBarProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSideBar = () => {
    setSidebarIsOpen(true);
  };

  const closeSideBar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <sideBarContext.Provider
      value={{ sidebarIsOpen, openSideBar, closeSideBar }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(sideBarContext);
};
