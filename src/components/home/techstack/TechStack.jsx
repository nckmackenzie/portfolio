import { myTechStacks } from '../../../data/data';
import { Section } from '../../ui';
import Stack from './Stack';

function TechStack() {
  return (
    <Section
      title="My Tech Stack"
      lgPadding
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, magni
  adipisci optio placeat iste quasi."
    >
      <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        {myTechStacks.length > 0 &&
          myTechStacks.map(stack => (
            <Stack key={stack.stack} icon={stack.icon} />
          ))}
      </div>
    </Section>
  );
}

export default TechStack;
