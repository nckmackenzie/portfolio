import { useState } from 'react';
// import { useTheme } from '../../../context/ThemeProvider';
import { projects } from '../../../data/data';
import { Section } from '../../ui';
import Filters from './Filters';
import Portfolios from './Portfolios';

const projectCategories = projects.map(project => project.type);
const categories = [...new Set(['All', ...projectCategories])];
function Projects() {
  //   const { textClr } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  return (
    <Section
      title="Portfolio"
      description="Projects i have worked on before."
      lgPadding
    >
      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Portfolios projects={projects} />
    </Section>
  );
}

export default Projects;
