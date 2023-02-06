import { useTheme } from '../../../context/ThemeProvider';

function Filters({ categories, selectedCategory, setSelectedCategory }) {
  const { textClr } = useTheme();
  const categoryChangeHandler = e => {
    setSelectedCategory(String(e.target.textContent).toLowerCase());
  };
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      {categories &&
        categories?.map(category => (
          <div
            onClick={categoryChangeHandler}
            key={category}
            className={`category ${textClr} ${
              selectedCategory === category.toLowerCase()
                ? 'text-primary-400'
                : ''
            }`}
          >
            {category}
          </div>
        ))}
    </div>
  );
}

export default Filters;
