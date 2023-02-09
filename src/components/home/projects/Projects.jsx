import { useState, useEffect } from 'react';
import { Section } from '../../ui';
import Filters from './Filters';
import Portfolios from './Portfolios';

function Projects({ projects }) {
  const projectCategories = projects.map(project => project.type);
  const categories = [...new Set(['All', ...projectCategories])];
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    setPortfolios(projects);
  }, []);

  const filteredPortolios =
    selectedCategory === 'all'
      ? projects
      : portfolios.filter(
          portfolio => String(portfolio.type).toLowerCase() === selectedCategory
        );

  return (
    <Section
      title="Portfolio"
      description="Projects i have worked on before."
      id="projects"
      lgPadding
    >
      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Portfolios projects={filteredPortolios} />
    </Section>
  );
}

export default Projects;
