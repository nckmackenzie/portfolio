import { useTheme } from '../../context/ThemeProvider';

function Section({
  title,
  className,
  smPadding,
  mdPadding,
  lgPadding,
  description,
  children,
}) {
  const { sectionTitle, paragraphText } = useTheme();
  const padding = smPadding
    ? 'py-9 md:pt-12 md:pb-9'
    : mdPadding
    ? 'pt-12 pb-9 md:pt-14 md:pb-12'
    : lgPadding
    ? 'pt-14 pb-9 md:pt-16'
    : '';
  return (
    <section className={`${padding} ${className ? className : ''}`}>
      <h4
        className={`text-center text-lg md:text-2xl font-headings font-semibold ${sectionTitle}`}
      >
        {title}
      </h4>
      {description && (
        <p
          className={`text-center text-sm max-w-md mx-auto mt-2 ${paragraphText}`}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

export default Section;
