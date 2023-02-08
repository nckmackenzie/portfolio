import { forwardRef } from 'react';
import { useTheme } from '../../context/ThemeProvider';

const FormControl = forwardRef((props, ref) => {
  const { isDarkMode, paragraphText } = useTheme();
  return (
    <>
      <label htmlFor={props.id} className={`label ${paragraphText}`}>
        {props.label}
      </label>
      {props.input && (
        <input
          type={props.type || 'text'}
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          ref={ref}
          className={`input ${
            isDarkMode
              ? 'bg-gray-700 border-gray-300 placeholder-gray-400 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
          } ${props.marginBottom ? 'mb-3' : ''}`}
        />
      )}
      {props.textarea && (
        <textarea
          id={props.id}
          rows={props.rows}
          name={props.name}
          ref={ref}
          className={`input ${
            isDarkMode
              ? 'bg-gray-700 border-gray-300 placeholder-gray-400 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
          } ${props.marginBottom ? 'mb-3' : ''}`}
          placeholder={props.placeholder}
        ></textarea>
      )}
    </>
  );
});

export default FormControl;
