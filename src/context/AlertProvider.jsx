import { createContext, useContext, useState } from 'react';

const alertContext = createContext({
  showAlert: false,
  alertType: '',
  closeAlert: () => {},
  displayAlert: () => {},
  setAlertType: () => {},
});

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');

  //open alert
  const displayAlert = () => {
    setShowAlert(true);
  };

  //   close alert
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <alertContext.Provider
      value={{ showAlert, displayAlert, closeAlert, alertType, setAlertType }}
    >
      {children}
    </alertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(alertContext);
};
