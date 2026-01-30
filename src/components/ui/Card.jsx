import { forwardRef } from 'react';

export const Card = forwardRef(function Card(
  { children, className = '', hover = true, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`
        bg-bg-card border border-border rounded-card
        transition-all duration-300
        ${hover ? 'hover:border-accent-primary/30 hover:shadow-glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

export const CardImage = forwardRef(function CardImage(
  { src, alt, className = '', ...props },
  ref
) {
  return (
    <div ref={ref} className={`overflow-hidden rounded-t-card ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
        {...props}
      />
    </div>
  );
});

export const CardContent = forwardRef(function CardContent(
  { children, className = '', ...props },
  ref
) {
  return (
    <div ref={ref} className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
});

export const CardTitle = forwardRef(function CardTitle(
  { children, className = '', ...props },
  ref
) {
  return (
    <h3
      ref={ref}
      className={`text-text-primary font-display font-semibold text-xl mb-2 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});

export const CardDescription = forwardRef(function CardDescription(
  { children, className = '', ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={`text-text-secondary text-body-sm leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});
