export function Container({ children, className = '', narrow = false }) {
  return (
    <div
      className={`
        w-full mx-auto px-container
        ${narrow ? 'max-w-narrow' : 'max-w-content'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
