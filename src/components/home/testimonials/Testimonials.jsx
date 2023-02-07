import { useEffect, useState } from 'react';
import { getArrayOfSix } from '../../../utils/utils';
import { Section } from '../../ui';
import Testimonial from './Testimonial';

function Testimonials({ projects }) {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const randomSix = getArrayOfSix();
    const randomTests = [];
    randomSix.forEach(number => {
      randomTests.push(projects[number].clientReviews[0]);
    });
    setTestimonials(randomTests);
  }, []);

  return (
    <Section
      title="Testimonials"
      id="testimonials"
      mdPadding
      description={`Clients love what we have done for them. We've being helping businesses do their best since 2017`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {testimonials.length > 0 &&
          testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial} />
          ))}
      </div>
    </Section>
  );
}

export default Testimonials;
