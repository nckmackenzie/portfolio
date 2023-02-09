import { services } from '../../../data/data';
import { Section } from '../../ui';
import Service from './Service';

function Services() {
  return (
    <Section
      title="My Services"
      description="Services I Offer"
      mdPadding
      id="services"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {services.length &&
          services.map(service => <Service key={service.name} {...service} />)}
      </div>
    </Section>
  );
}

export default Services;
