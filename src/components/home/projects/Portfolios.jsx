import Portfolio from './Portfolio';

function Portfolios({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects?.map(project => (
        <Portfolio
          key={project.project}
          icon={project.imageUrl}
          project={project.project}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Portfolios;
