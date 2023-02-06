import { useTheme } from '../../context/ThemeProvider';

function Section({
  title,
  className,
  smPadding,
  mdPadding,
  lgPadding,
  description,
  id,
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
    <section className={`${padding} ${className ? className : ''}`} id={id}>
      <h4
        className={`text-center text-xl md:text-3xl font-headings font-bold ${sectionTitle}`}
      >
        {title}
      </h4>
      {description && (
        <p
          className={`text-center text-sm max-w-md mx-auto mt-2 mb-8 ${paragraphText}`}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

export default Section;
