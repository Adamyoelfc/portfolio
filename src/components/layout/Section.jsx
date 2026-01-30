import { forwardRef } from 'react';
import { Container } from './Container';

export const Section = forwardRef(function Section(
  {
    children,
    id,
    className = '',
    containerClassName = '',
    narrow = false,
  },
  ref
) {
  return (
    <section ref={ref} id={id} className={`py-section ${className}`}>
      <Container narrow={narrow} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
});

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-10 sm:mb-12 max-w-2xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <p className="text-accent-primary font-mono text-xs sm:text-sm mb-2 sm:mb-3 tracking-wider uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-text-primary font-display font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}
