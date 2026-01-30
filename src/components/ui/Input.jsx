import { forwardRef } from 'react';

export const Input = forwardRef(function Input(
  {
    label,
    error,
    className = '',
    type = 'text',
    ...props
  },
  ref
) {
  const inputId = props.id || props.name;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-mono-sm text-text-muted font-mono"
        >
          <span className="text-accent-primary mr-1">&gt;</span>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-bg-secondary border border-border
          text-text-primary placeholder:text-text-muted
          transition-all duration-200
          focus:outline-none focus:border-accent-primary focus:shadow-glow
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-body-sm">{error}</p>
      )}
    </div>
  );
});

export const Textarea = forwardRef(function Textarea(
  {
    label,
    error,
    className = '',
    rows = 5,
    ...props
  },
  ref
) {
  const inputId = props.id || props.name;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-mono-sm text-text-muted font-mono"
        >
          <span className="text-accent-primary mr-1">&gt;</span>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg resize-none
          bg-bg-secondary border border-border
          text-text-primary placeholder:text-text-muted
          transition-all duration-200
          focus:outline-none focus:border-accent-primary focus:shadow-glow
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-body-sm">{error}</p>
      )}
    </div>
  );
});
