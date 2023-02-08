import { createContext, useContext, useState } from 'react';

const alertContext = createContext({
  showAlert: false,
  alertType: '',
  message: '',
  closeAlert: () => {},
  displayAlert: () => {},
  setAlertType: () => {},
  setMessage: () => {},
});

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [message, setMessage] = useState(null);

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
      value={{
        showAlert,
        displayAlert,
        closeAlert,
        alertType,
        setAlertType,
        message,
        setMessage,
      }}
    >
      {children}
    </alertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(alertContext);
};
