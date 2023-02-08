import { contactInfo } from '../../../data/data';

import InfoCard from './InfoCard';

function ContactInfo() {
  return (
    <div className="w-full md:w-1/3 lg:w-1/5 flex flex-col gap-4 md:gap-6 lg:gap-8">
      {contactInfo.length > 0 &&
        contactInfo.map(info => <InfoCard key={info.id} {...info} />)}
    </div>
  );
}

export default ContactInfo;
