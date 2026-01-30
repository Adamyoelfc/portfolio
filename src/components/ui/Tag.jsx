export function Tag({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-accent-dim text-accent-primary border-accent-primary/30',
    outline: 'bg-transparent text-accent-secondary border-accent-primary/50 hover:bg-accent-dim',
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1
        text-mono-sm font-mono
        border rounded-md
        transition-colors duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
