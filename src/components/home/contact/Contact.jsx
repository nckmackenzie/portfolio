import { useAlert } from '../../../context/AlertProvider';
import { Section } from '../../ui';
import Alert from '../../ui/Alert';
import ContactInfo from './ContactInfo';
import Form from './Form';

function Contact() {
  const { showAlert, alertType, message } = useAlert();
  return (
    <Section
      title="Contact Me"
      description={`I'd like to here from you!`}
      id="contact"
      lgPadding
    >
      {showAlert && <Alert status={alertType} msg={message} />}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
        <Form />
        <ContactInfo />
      </div>
    </Section>
  );
}

export default Contact;
