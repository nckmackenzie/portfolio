import { useRef, useState } from 'react';
import { Button, Card } from '../../ui';
import { useTheme } from '../../../context/ThemeProvider';
import FormControl from '../../ui/FormControl';
import emailjs from '@emailjs/browser';
import { useAlert } from '../../../context/AlertProvider';

function Form() {
  const { setAlertType, displayAlert, closeAlert, setMessage } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { isDarkMode } = useTheme();

  const onSubmitHander = e => {
    e.preventDefault();
    setIsLoading(true);
    displayAlert();
    setAlertType('pending');

    if (
      String(formRef.current.value).trim() === '' ||
      String(nameRef.current.value).trim() === '' ||
      String(messageRef.current.value).trim() === ''
    ) {
      setIsLoading(false);
      displayAlert();
      setAlertType('error');
      setMessage('Provide all required fields');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLICK_KEY
      )
      .then(
        result => {
          setIsLoading(false);
          if (result.status === 200) {
            setAlertType('success');

            nameRef.current.value =
              emailRef.current.value =
              messageRef.current.value =
                '';
            setTimeout(() => {
              closeAlert();
              setMessage(null);
            }, 4000);
          }
        },
        error => {
          console.error(error.text);
          setIsLoading(false);
          setAlertType('error');
        }
      );
  };

  return (
    <Card
      className={`w-full md:w-2/3 lg:w-4/5 ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
      } p-4`}
    >
      <form onSubmit={onSubmitHander} ref={formRef}>
        <div className="flex flex-col">
          <FormControl
            label="Your Name"
            id="fullname"
            placeholder="eg Jane Doe"
            input
            marginBottom
            ref={nameRef}
            name="from_name"
          />
          <FormControl
            label="Email Address"
            id="emailaddress"
            type="email"
            input
            placeholder="eg test@example.com"
            marginBottom
            name="email"
            ref={emailRef}
          />

          <FormControl
            label="Your Message"
            id="message"
            textarea
            rows={5}
            name="message"
            placeholder="Write your thoughts here..."
            marginBottom
            ref={messageRef}
          />
          <Button
            variant="Contained"
            type="submit"
            className="self-start"
            disabled={isLoading}
            block
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
