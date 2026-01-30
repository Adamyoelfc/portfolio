import { forwardRef } from 'react';

const variants = {
  primary: `
    bg-accent-primary text-bg-primary
    hover:bg-accent-secondary hover:shadow-glow
    active:scale-[0.98]
  `,
  secondary: `
    bg-transparent border border-accent-primary text-accent-primary
    hover:bg-accent-primary/10 hover:shadow-glow
    active:scale-[0.98]
  `,
  ghost: `
    bg-transparent text-text-secondary
    hover:text-accent-primary hover:bg-accent-dim
  `,
  terminal: `
    bg-bg-secondary border border-accent-primary/50 text-accent-primary font-mono
    hover:border-accent-primary hover:shadow-glow hover:bg-accent-primary hover:text-bg-primary
    active:scale-[0.98]
  `,
};

const sizes = {
  sm: 'px-3 py-1.5 text-body-sm',
  md: 'px-5 py-2.5 text-body-md',
  lg: 'px-7 py-3 text-body-lg',
};

export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    external = false,
    disabled = false,
    type = 'button',
    onClick,
    ...props
  },
  ref
) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary
    disabled:opacity-50 disabled:pointer-events-none
  `;

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...props}
      >
        {children}
        {external && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});
