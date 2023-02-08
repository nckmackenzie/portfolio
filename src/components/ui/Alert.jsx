import { GrFormClose } from 'react-icons/gr';
import React from 'react';
import { useAlert } from '../../context/AlertProvider';

function Alert({ status, msg }) {
  const { closeAlert, setMessage } = useAlert();
  const onClickHandler = () => {
    closeAlert();
    setMessage(null);
  };
  const strongText =
    status === 'success'
      ? 'Success!!!'
      : status === 'error'
      ? 'Error!!!'
      : 'Sending...';
  const message =
    status === 'success'
      ? 'Your message has been sent successfully!'
      : status === 'error'
      ? 'There was a problem sending your message.Retry or try again later!'
      : 'Please wait as your message is being sent!';
  const bgColor =
    status === 'success'
      ? 'bg-green-300'
      : status === 'error'
      ? 'bg-red-300'
      : 'bg-purple-300';
  return (
    <div
      className={`w-full p-4 ${bgColor} rounded mb-2 flex items-center justify-between`}
    >
      <p>
        <strong>{strongText}</strong> {msg || message}
      </p>
      {(status === 'success' || status === 'error') && (
        <button className="outline-none" onClick={onClickHandler}>
          <GrFormClose size={24} />
        </button>
      )}
    </div>
  );
}

export default Alert;
